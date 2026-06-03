"use client";

import { useEffect, useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { AZKAR } from "@/lib/content";
import { logDhikr, getTodayDhikr } from "@/lib/data";

type Cat = "morning" | "evening" | "anytime";

export default function AzkarPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [cat, setCat] = useState<Cat>("morning");
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    getTodayDhikr().then(setCounts);
  }, []);

  const list = AZKAR.filter((z) => z.category === cat);

  function tap(id: string, target: number) {
    setCounts((p) => {
      const n = Math.min((p[id] ?? 0) + 1, target);
      logDhikr(id, n);
      return { ...p, [id]: n };
    });
  }
  function reset(id: string) {
    setCounts((p) => ({ ...p, [id]: 0 }));
    logDhikr(id, 0);
  }

  return (
    <Shell title={dict.azkar.title}>
      <div className="animate-fade-up space-y-5">
        <p className={`text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
          {dict.azkar.sub[lang]}
        </p>

        {/* category tabs */}
        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-deen-gold/20 text-xs font-semibold">
          {(["morning", "evening", "anytime"] as Cat[]).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`py-2 ${ur ? "font-urdu" : ""} ${
                cat === c ? "bg-deen-gold/15 text-deen-800" : "text-deen-muted/70"
              }`}
            >
              {dict.azkar[c][lang]}
            </button>
          ))}
        </div>

        {list.map((z) => {
          const count = counts[z.id] ?? 0;
          const done = count >= z.target;
          const pct = Math.round((count / z.target) * 100);
          return (
            <div key={z.id} className="card overflow-hidden">
              <div className="p-4">
                <p className="font-arabic text-right text-lg leading-loose text-deen-900">
                  {z.arabic}
                </p>
                <p className="mt-1 text-xs italic text-deen-muted/70">
                  {z.transliteration}
                </p>
                <p className={`mt-1 text-sm text-deen-muted ${ur ? "font-urdu text-right" : ""}`}>
                  {z.translation[lang]}
                </p>
                <p className="mt-1 text-[11px] text-deen-goldDark">{z.source}</p>
              </div>

              {/* progress bar */}
              <div className="h-1 w-full bg-deen-gold/10">
                <div
                  className="h-full bg-deen-gold transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="flex items-stretch">
                <button
                  onClick={() => tap(z.id, z.target)}
                  disabled={done}
                  className={`flex-1 py-3 text-center font-bold transition active:scale-[0.98] ${
                    done
                      ? "bg-deen-800/10 text-deen-800"
                      : "bg-deen-800 text-deen-cream"
                  }`}
                >
                  {done ? (
                    <span className={ur ? "font-urdu" : ""}>
                      ✓ {dict.azkar.complete[lang]}
                    </span>
                  ) : (
                    <span>
                      {count} / {z.target}
                    </span>
                  )}
                </button>
                {count > 0 && (
                  <button
                    onClick={() => reset(z.id)}
                    className={`px-4 text-xs text-deen-goldDark ${ur ? "font-urdu" : ""}`}
                  >
                    {dict.azkar.reset[lang]}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );
}
