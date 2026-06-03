"use client";

import { createClient } from "./supabase-client";

const sb = () => createClient();
const today = () => new Date().toISOString().slice(0, 10);

export async function logPrayer(
  name: string,
  opts: { focusScore?: number; status?: string }
) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  const row: Record<string, unknown> = {
    user_id: user.id,
    prayer_name: name,
    logged_on: today(),
  };
  if (opts.focusScore != null) row.focus_score = opts.focusScore;
  if (opts.status != null) row.status = opts.status;
  await supabase
    .from("prayer_logs")
    .upsert(row, { onConflict: "user_id,prayer_name,logged_on" });
}

export async function getTodayPrayers(): Promise<
  Record<string, { status: string | null; focus_score: number | null }>
> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return {};
  const { data } = await supabase
    .from("prayer_logs")
    .select("prayer_name,status,focus_score")
    .eq("user_id", user.id)
    .eq("logged_on", today());
  const out: Record<string, { status: string | null; focus_score: number | null }> = {};
  (data ?? []).forEach((r) => {
    out[r.prayer_name] = { status: r.status, focus_score: r.focus_score };
  });
  return out;
}

export async function logDhikr(adhkarId: string, count: number) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from("dhikr_logs").upsert(
    { user_id: user.id, adhkar_id: adhkarId, count, logged_on: today() },
    { onConflict: "user_id,adhkar_id,logged_on" }
  );
}

export async function getTodayDhikr(): Promise<Record<string, number>> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return {};
  const { data } = await supabase
    .from("dhikr_logs")
    .select("adhkar_id,count")
    .eq("user_id", user.id)
    .eq("logged_on", today());
  const out: Record<string, number> = {};
  (data ?? []).forEach((r) => (out[r.adhkar_id] = r.count));
  return out;
}

export async function logMood(mood: string) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase
    .from("emotion_logs")
    .insert({ user_id: user.id, mood, logged_on: today() });
}

export async function saveReflection(ayahRef: string, note: string) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase
    .from("journal_entries")
    .insert({ user_id: user.id, ayah_ref: ayahRef, note });
}

export async function setCharacterProgress(traitId: string, day: number) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase
    .from("character_progress")
    .upsert(
      { user_id: user.id, trait_id: traitId, current_day: day },
      { onConflict: "user_id,trait_id" }
    );
}

export async function getStreak(): Promise<number> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return 0;
  const { data } = await supabase
    .from("prayer_logs")
    .select("logged_on")
    .eq("user_id", user.id)
    .order("logged_on", { ascending: false })
    .limit(60);
  if (!data?.length) return 0;
  const days = [...new Set(data.map((r) => r.logged_on))];
  let streak = 0;
  const d = new Date();
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (days.includes(key)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (streak === 0 && key === today()) {
      d.setDate(d.getDate() - 1); // allow today not-yet-prayed
    } else break;
  }
  return streak;
}

// --- Sunnah tracker ---------------------------------------------------
export async function toggleSunnah(sunnahId: string, done: boolean) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  if (done) {
    await supabase.from("sunnah_logs").upsert(
      { user_id: user.id, sunnah_id: sunnahId, logged_on: today() },
      { onConflict: "user_id,sunnah_id,logged_on" }
    );
  } else {
    await supabase
      .from("sunnah_logs")
      .delete()
      .eq("user_id", user.id)
      .eq("sunnah_id", sunnahId)
      .eq("logged_on", today());
  }
}

export async function getTodaySunnahs(): Promise<Set<string>> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Set();
  const { data } = await supabase
    .from("sunnah_logs")
    .select("sunnah_id")
    .eq("user_id", user.id)
    .eq("logged_on", today());
  return new Set((data ?? []).map((r) => r.sunnah_id));
}

// --- Profile / gender -------------------------------------------------
export async function getGender(): Promise<"male" | "female" | "unset"> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return "unset";
  const { data } = await supabase
    .from("profiles")
    .select("gender")
    .eq("id", user.id)
    .maybeSingle();
  const g = data?.gender;
  return g === "male" || g === "female" ? g : "unset";
}

export async function setGender(gender: "male" | "female" | "unset") {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase
    .from("profiles")
    .upsert({ id: user.id, gender }, { onConflict: "id" });
}

// --- Menstruation (hayd) day log — female users -----------------------
export async function toggleHaydToday(active: boolean) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  if (active) {
    await supabase
      .from("hayd_logs")
      .upsert(
        { user_id: user.id, logged_on: today() },
        { onConflict: "user_id,logged_on" }
      );
  } else {
    await supabase
      .from("hayd_logs")
      .delete()
      .eq("user_id", user.id)
      .eq("logged_on", today());
  }
}

export async function isHaydToday(): Promise<boolean> {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("hayd_logs")
    .select("id")
    .eq("user_id", user.id)
    .eq("logged_on", today())
    .maybeSingle();
  return !!data;
}
