"use client";

import { useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { TRAITS } from "@/lib/content";
import { setCharacterProgress } from "@/lib/data";

export default function CharacterPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [sel, setSel] = useState(TRAITS[0].id);
  const [journey, setJourney] = useState<7 | 30 | 0>(7);
  const [day, setDay] = useState(1);
  const trait = TRAITS.find((t) => t.id === sel)!;

  return (
    <Shell title={dict.character.title}>
      <div className="animate-fade-up space-y-5">
        <p className={`text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
          {dict.character.sub[lang]}
        </p>

        {/* trait chips */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {TRAITS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSel(t.id);
                setDay(1);
              }}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                sel === t.id
                  ? "bg-deen-800 text-deen-cream"
                  : "border border-deen-gold/30 text-deen-muted"
              }`}
            >
              <span className="font-arabic">{t.arabic}</span>
              <span className={ur ? "font-urdu" : ""}>{t.name[lang]}</span>
            </button>
          ))}
        </div>

        <div className="card space-y-4 p-5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-arabic text-2xl text-deen-gold">{trait.arabic}</span>
              <h2 className={`text-lg font-bold text-deen-900 ${ur ? "font-urdu" : ""}`}>
                {trait.name[lang]}
              </h2>
            </div>
            <p className={`mt-1 text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
              {trait.intro[lang]}
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-deen-gold/40 pl-3">
            <p className="text-xs text-deen-goldDark">Qur'an · {trait.ayah.ref}</p>
            <p className={`text-sm text-deen-ink ${ur ? "font-urdu" : ""}`}>
              {trait.ayah.text[lang]}
            </p>
            <p className="pt-1 text-xs text-deen-goldDark">{trait.hadith.source}</p>
            <p className={`text-sm text-deen-ink ${ur ? "font-urdu" : ""}`}>
              {trait.hadith.text[lang]}
            </p>
          </div>

          {/* journey selector */}
          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-deen-gold/20 text-xs font-semibold">
            {([7, 30, 0] as const).map((j) => (
              <button
                key={j}
                onClick={() => setJourney(j)}
                className={`py-2 ${ur ? "font-urdu" : ""} ${
                  journey === j ? "bg-deen-gold/15 text-deen-800" : "text-deen-muted/70"
                }`}
              >
                {j === 7
                  ? dict.character.journey7[lang]
                  : j === 30
                  ? dict.character.journey30[lang]
                  : dict.character.journeyLife[lang]}
              </button>
            ))}
          </div>

          {/* daily challenge */}
          <div className="rounded-xl bg-deen-800 p-4 text-deen-cream">
            <p className="text-[10px] uppercase tracking-wider text-deen-gold">
              {dict.character.challenge[lang]}
              {journey !== 0 && ` · ${ur ? "دن" : "Day"} ${day}/${journey}`}
            </p>
            <p className={`mt-1 text-sm ${ur ? "font-urdu" : ""}`}>
              {trait.challenge[lang]}
            </p>
            <button
              onClick={async () => {
                await setCharacterProgress(trait.id, day);
                if (journey !== 0 && day < journey) setDay(day + 1);
              }}
              className="mt-3 w-full rounded-lg bg-deen-gold py-2 text-sm font-bold text-deen-900"
            >
              {ur ? "مکمل کیا ✓" : "Mark complete ✓"}
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
