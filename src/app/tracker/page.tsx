"use client";

import { useEffect, useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { PRAYER_DEFS, PRAYER_STATUSES } from "@/lib/content";
import { logPrayer, getTodayPrayers, getStreak } from "@/lib/data";
import { useGender } from "@/lib/gender-context";

export default function TrackerPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const { gender } = useGender();
  const [status, setStatus] = useState<Record<string, string | null>>({});
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  // Congregation (jama'ah) attendance in the masjid is not obligatory for
  // women, so the option is hidden for female users.
  const statuses = PRAYER_STATUSES.filter(
    (s) => !(gender === "female" && s.id === "jamaah")
  );

  useEffect(() => {
    (async () => {
      const [p, s] = await Promise.all([getTodayPrayers(), getStreak()]);
      const map: Record<string, string | null> = {};
      Object.entries(p).forEach(([k, v]) => (map[k] = v.status));
      setStatus(map);
      setStreak(s);
      setLoading(false);
    })();
  }, []);

  const doneCount = Object.values(status).filter(
    (s) => s === "prayed" || s === "jamaah" || s === "qaza"
  ).length;

  async function setPrayer(id: string, name: string, st: string) {
    const next = status[id] === st ? null : st;
    setStatus((p) => ({ ...p, [id]: next }));
    await logPrayer(name, { status: next ?? "missed" });
    getStreak().then(setStreak);
  }

  return (
    <Shell title={dict.tracker.title}>
      <div className="animate-fade-up space-y-5">
        {/* summary */}
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-deen-900 to-deen-700 p-5 text-deen-cream">
          <div>
            <p className={`text-sm text-deen-cream/70 ${ur ? "font-urdu" : ""}`}>
              {dict.tracker.sub[lang]}
            </p>
            <p className="mt-1 text-2xl font-extrabold">
              {doneCount}/5{" "}
              <span className={`text-sm font-normal ${ur ? "font-urdu" : ""}`}>
                {dict.tracker.todayDone[lang]}
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-extrabold text-deen-gold">🔥 {streak}</p>
            <p className={`text-xs text-deen-cream/70 ${ur ? "font-urdu" : ""}`}>
              {dict.common.streak[lang]}
            </p>
          </div>
        </div>

        {/* prayer rows */}
        {!loading &&
          PRAYER_DEFS.map((p, i) => (
            <div
              key={p.id}
              className="card p-4"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="mb-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-arabic text-xl text-deen-gold">{p.arabic}</span>
                  <span className={`font-bold text-deen-900 ${ur ? "font-urdu" : ""}`}>
                    {p.name[lang]}
                  </span>
                </div>
                <span className={`text-[11px] text-deen-muted/70 ${ur ? "font-urdu" : ""}`}>
                  {p.fard} {ur ? "فرض" : "fard"} · {dict.tracker.sunnahRakah[lang]}: {p.sunnah[lang]}
                </span>
              </div>
              <div className={`grid gap-1.5 ${statuses.length === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
                {statuses.map((s) => {
                  const active = status[p.id] === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setPrayer(p.id, p.name.en, s.id)}
                      className={`flex flex-col items-center gap-1 rounded-lg border py-2 text-[10px] transition active:scale-95 ${
                        active
                          ? "border-deen-gold bg-deen-gold/15 text-deen-800"
                          : "border-deen-gold/20 text-deen-muted/70"
                      } ${ur ? "font-urdu" : ""}`}
                    >
                      <span className="text-sm">{s.emoji}</span>
                      {s.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

        {loading && (
          <p className="py-10 text-center text-sm text-deen-muted/60">…</p>
        )}
      </div>
    </Shell>
  );
}
