"use client";

import { useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { SALAH_PRESENCE, DUAS } from "@/lib/content";
import { logPrayer } from "@/lib/data";

type Stage = "before" | "during" | "after" | "score";
const PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export default function SalahPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [stage, setStage] = useState<Stage>("before");
  const [step, setStep] = useState(0);
  const [prayer, setPrayer] = useState("Fajr");
  const [done, setDone] = useState(false);
  const afterDuas = DUAS.filter((d) => SALAH_PRESENCE.after.includes(d.id));

  if (done)
    return (
      <Shell title={dict.salah.title}>
        <div className="animate-fade-up flex flex-col items-center justify-center gap-3 pt-16 text-center">
          <div className="font-arabic text-4xl text-deen-gold">تَقَبَّلَ ٱللَّه</div>
          <p className={`text-deen-muted ${ur ? "font-urdu" : ""}`}>
            {ur ? "اللہ آپ کی نماز قبول فرمائے۔" : "May Allah accept your prayer."}
          </p>
          <button
            onClick={() => {
              setDone(false);
              setStage("before");
              setStep(0);
            }}
            className="mt-4 rounded-full bg-deen-800 px-6 py-2 text-sm font-semibold text-deen-cream"
          >
            {ur ? "دوبارہ" : "Again"}
          </button>
        </div>
      </Shell>
    );

  return (
    <Shell title={dict.salah.title}>
      <div className="animate-fade-up space-y-5">
        {/* prayer selector */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {PRAYERS.map((p) => (
            <button
              key={p}
              onClick={() => setPrayer(p)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                prayer === p
                  ? "bg-deen-800 text-deen-cream"
                  : "border border-deen-gold/30 text-deen-muted"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* stage tabs */}
        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-deen-gold/20 text-xs font-semibold">
          {(["before", "during", "after"] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setStage(s);
                setStep(0);
              }}
              className={`py-2 ${ur ? "font-urdu" : ""} ${
                stage === s ? "bg-deen-gold/15 text-deen-800" : "text-deen-muted/70"
              }`}
            >
              {dict.salah[s][lang]}
            </button>
          ))}
        </div>

        {stage === "before" && (
          <div className="card space-y-4 p-6 text-center">
            <p className="animate-breathe text-3xl">🕋</p>
            <p className={`text-lg font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
              {SALAH_PRESENCE.before[step][lang]}
            </p>
            <div className="flex justify-center gap-1">
              {SALAH_PRESENCE.before.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-6 rounded-full ${
                    i <= step ? "bg-deen-gold" : "bg-deen-gold/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                step < SALAH_PRESENCE.before.length - 1
                  ? setStep(step + 1)
                  : (setStage("during"), setStep(0))
              }
              className="w-full rounded-xl bg-deen-800 py-3 font-semibold text-deen-cream"
            >
              {step < SALAH_PRESENCE.before.length - 1
                ? dict.common.continue[lang]
                : dict.salah.beginPresence[lang]}
            </button>
          </div>
        )}

        {stage === "during" &&
          SALAH_PRESENCE.during.map((d, i) => (
            <div key={i} className="card p-5">
              <p className="font-arabic text-right text-xl leading-loose text-deen-900">
                {d.phrase}
              </p>
              <p className={`mt-2 text-sm text-deen-muted ${ur ? "font-urdu text-right" : ""}`}>
                {d.meaning[lang]}
              </p>
              <p
                className={`mt-3 border-l-2 border-deen-gold pl-3 text-sm italic text-deen-goldDark ${
                  ur ? "font-urdu" : ""
                }`}
              >
                {d.prompt[lang]}
              </p>
            </div>
          ))}
        {stage === "during" && (
          <button
            onClick={() => setStage("after")}
            className="w-full rounded-xl bg-deen-800 py-3 font-semibold text-deen-cream"
          >
            {dict.salah.after[lang]} →
          </button>
        )}

        {stage === "after" && (
          <>
            {afterDuas.map((d) => (
              <div key={d.id} className="card p-5">
                <p className="font-arabic text-right text-lg leading-loose text-deen-900">
                  {d.arabic}
                </p>
                <p className={`mt-2 text-sm text-deen-muted ${ur ? "font-urdu text-right" : ""}`}>
                  {d.translation[lang]}
                </p>
                <p className="mt-1 text-[11px] text-deen-goldDark">{d.source}</p>
              </div>
            ))}
            <button
              onClick={() => setStage("score")}
              className="w-full rounded-xl bg-deen-800 py-3 font-semibold text-deen-cream"
            >
              {dict.salah.focusScore[lang]}
            </button>
          </>
        )}

        {stage === "score" && (
          <div className="card space-y-4 p-6">
            <p className={`text-center font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
              {dict.salah.focusScore[lang]}
            </p>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={async () => {
                    await logPrayer(prayer, { focusScore: n });
                    setDone(true);
                  }}
                  className="flex-1 rounded-xl border border-deen-gold/30 py-4 text-lg font-bold text-deen-800 transition active:scale-95 hover:bg-deen-gold/10"
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-deen-muted/70">
              {ur ? "۱ = منتشر · ۵ = مکمل حضور" : "1 = distracted · 5 = fully present"}
            </p>
          </div>
        )}
      </div>
    </Shell>
  );
}
