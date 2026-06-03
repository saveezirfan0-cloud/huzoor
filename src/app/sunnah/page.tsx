"use client";

import { useEffect, useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { SUNNAHS } from "@/lib/content";
import { toggleSunnah, getTodaySunnahs } from "@/lib/data";

const CAT_LABEL: Record<string, { en: string; ur: string }> = {
  daily: { en: "Daily", ur: "روزمرہ" },
  food: { en: "Food", ur: "کھانا" },
  sleep: { en: "Sleep", ur: "نیند" },
  social: { en: "Social", ur: "معاشرت" },
  worship: { en: "Worship", ur: "عبادت" },
};

export default function SunnahPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    getTodaySunnahs().then(setDone);
  }, []);

  function toggle(id: string) {
    const next = new Set(done);
    const isDone = next.has(id);
    if (isDone) next.delete(id);
    else next.add(id);
    setDone(next);
    toggleSunnah(id, !isDone);
  }

  return (
    <Shell title={dict.sunnah.title}>
      <div className="animate-fade-up space-y-5">
        {/* summary */}
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-deen-900 to-deen-700 p-5 text-deen-cream">
          <p className={`text-sm text-deen-cream/80 ${ur ? "font-urdu" : ""}`}>
            {dict.sunnah.sub[lang]}
          </p>
          <p className="text-2xl font-extrabold text-deen-gold">
            {done.size}/{SUNNAHS.length}
          </p>
        </div>

        {SUNNAHS.map((s, i) => {
          const isDone = done.has(s.id);
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`card flex w-full items-start gap-3 p-4 text-left transition active:scale-[0.99] ${
                isDone ? "border-deen-gold bg-deen-gold/5" : ""
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition ${
                  isDone
                    ? "border-deen-gold bg-deen-gold text-deen-900"
                    : "border-deen-gold/40 text-transparent"
                }`}
              >
                ✓
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
                    {s.title[lang]}
                  </span>
                  <span
                    className={`shrink-0 rounded-full border border-deen-gold/30 px-2 py-0.5 text-[9px] text-deen-goldDark ${
                      ur ? "font-urdu" : ""
                    }`}
                  >
                    {CAT_LABEL[s.category][lang]}
                  </span>
                </div>
                <p className={`mt-1 text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
                  {s.detail[lang]}
                </p>
                <p className="mt-1 text-[11px] text-deen-goldDark">{s.source}</p>
              </div>
            </button>
          );
        })}
      </div>
    </Shell>
  );
}
