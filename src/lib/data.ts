"use client";

import { createClient } from "./supabase-client";

const sb = () => createClient();
const today = () => new Date().toISOString().slice(0, 10);

export async function logPrayer(name: string, focusScore: number) {
  const supabase = sb();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from("prayer_logs").upsert(
    {
      user_id: user.id,
      prayer_name: name,
      focus_score: focusScore,
      logged_on: today(),
    },
    { onConflict: "user_id,prayer_name,logged_on" }
  );
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
