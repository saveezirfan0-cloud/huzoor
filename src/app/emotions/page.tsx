"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { EMOTIONS } from "@/lib/content";
import { logMood } from "@/lib/data";

function EmotionsInner() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const params = useSearchParams();
  const initial = params.get("m");
  const [sel, setSel] = useState<string | null>(
    initial && EMOTIONS.some((e) => e.id === initial) ? initial : null
  );
  const emo = EMOTIONS.find((e) => e.id === sel);

  return (
    <Shell title={dict.nav.emotions}>
      <div className="animate-fade-up space-y-5">
        <div>
          <h1 className={`text-lg font-bold text-deen-900 ${ur ? "font-urdu" : ""}`}>
            {dict.emotions.title[lang]}
          </h1>
          <p className={`text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
            {dict.emotions.sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {EMOTIONS.map((e) => (
            <button
              key={e.id}
              onClick={() => {
                setSel(e.id);
                logMood(e.id);
              }}
              className={`flex flex-col items-center gap-1 rounded-xl border py-3 transition active:scale-95 ${
                sel === e.id
                  ? "border-deen-gold bg-deen-gold/10"
                  : "border-deen-gold/20"
              }`}
            >
              <span className="text-2xl">{e.emoji}</span>
              <span className={`text-[11px] text-deen-muted ${ur ? "font-urdu" : ""}`}>
                {e.label[lang]}
              </span>
            </button>
          ))}
        </div>

        {emo && (
          <div className="animate-fade-up space-y-3">
            <Card label={`Qur'an · ${emo.ayah.ref}`} ur={ur}>
              {emo.ayah.text[lang]}
            </Card>
            <Card label={`Hadith · ${emo.hadith.source}`} ur={ur}>
              {emo.hadith.text[lang]}
            </Card>
            <div className="card p-4 text-center">
              <p className="font-arabic text-xl leading-loose text-deen-900">
                {emo.dua.arabic}
              </p>
              <p className="mt-1 text-xs italic text-deen-muted/70">{emo.dua.translit}</p>
            </div>
            <div className="rounded-xl bg-deen-800 p-4 text-deen-cream">
              <p className="text-[10px] uppercase tracking-wider text-deen-gold">
                {dict.emotions.action[lang]}
              </p>
              <p className={`mt-1 text-sm ${ur ? "font-urdu" : ""}`}>
                {emo.action[lang]}
              </p>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}

function Card({
  label,
  children,
  ur,
}: {
  label: string;
  children: React.ReactNode;
  ur: boolean;
}) {
  return (
    <div className="card p-4">
      <p className="text-[10px] uppercase tracking-wider text-deen-goldDark">{label}</p>
      <p className={`mt-1 text-sm text-deen-ink ${ur ? "font-urdu" : ""}`}>{children}</p>
    </div>
  );
}

export default function EmotionsPage() {
  return (
    <Suspense>
      <EmotionsInner />
    </Suspense>
  );
}
