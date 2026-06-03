"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Shell from "@/components/shell";
import { Bi, SignOutButton } from "@/components/ui";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { AYAT, MOODS, daily } from "@/lib/content";
import { getStreak, logMood, logDhikr } from "@/lib/data";

export default function Dashboard() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [streak, setStreak] = useState(0);
  const [dhikr, setDhikr] = useState(0);
  const [mood, setMood] = useState<string | null>(null);
  const ayah = daily(AYAT);

  useEffect(() => {
    getStreak().then(setStreak);
  }, []);

  function tap() {
    const n = dhikr + 1;
    setDhikr(n);
    if (n % 33 === 0) logDhikr("subhanallah", n);
  }

  return (
    <Shell>
      <div className="animate-fade-up space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <p className={`text-deen-muted ${ur ? "font-urdu text-base" : "text-sm"}`}>
              {dict.dash.greeting[lang]}
            </p>
            <h1 className="font-arabic text-2xl text-deen-900">السلام علیکم</h1>
          </div>
          <SignOutButton />
        </div>

        {/* Focus card */}
        <Link
          href="/salah"
          className="block overflow-hidden rounded-2xl bg-gradient-to-br from-deen-900 to-deen-700 p-5 text-deen-cream"
        >
          <p className="text-[11px] uppercase tracking-widest text-deen-gold">
            {dict.dash.focusToday[lang]}
          </p>
          <p className={`mt-1 text-xl font-bold ${ur ? "font-urdu" : ""}`}>
            {ur ? "نماز میں حضورِ قلب" : "Presence in Salah"}
          </p>
          <p className="mt-3 text-sm text-deen-cream/70">
            🔥 {streak} {dict.common.streak[lang]}
          </p>
        </Link>

        {/* Prayer + Dhikr row */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/salah" className="card p-4">
            <p className="text-[11px] uppercase tracking-wider text-deen-goldDark">
              {dict.dash.salahStatus[lang]}
            </p>
            <p className="mt-2 text-2xl">🕌</p>
            <p className={`mt-1 text-xs text-deen-muted ${ur ? "font-urdu" : ""}`}>
              {ur ? "حضور موڈ کھولیں" : "Open presence mode"}
            </p>
          </Link>
          <button onClick={tap} className="card p-4 text-left active:scale-[0.98]">
            <p className="text-[11px] uppercase tracking-wider text-deen-goldDark">
              {dict.dash.dhikr[lang]}
            </p>
            <p className="mt-2 font-arabic text-lg text-deen-900">سُبْحَانَ ٱللَّه</p>
            <p className="mt-1 text-2xl font-extrabold text-deen-800">{dhikr}</p>
          </button>
        </div>

        {/* Daily reflection */}
        <Link href="/reflection" className="card block p-5">
          <p className="text-[11px] uppercase tracking-wider text-deen-goldDark">
            {dict.dash.reflection[lang]} · <Bi v={ayah.surah} /> {ayah.ref}
          </p>
          <p className="mt-2 font-arabic text-right text-xl leading-loose text-deen-900">
            {ayah.arabic}
          </p>
          <p className={`mt-2 text-sm text-deen-muted ${ur ? "font-urdu text-right" : ""}`}>
            {ayah.translation[lang]}
          </p>
        </Link>

        {/* Mood check-in */}
        <div className="card p-5">
          <p className={`mb-3 font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
            {dict.dash.mood[lang]}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {MOODS.map((m) => (
              <Link
                key={m.id}
                href={`/emotions?m=${m.id}`}
                onClick={() => {
                  setMood(m.id);
                  logMood(m.id);
                }}
                className={`flex flex-col items-center gap-1 rounded-xl border py-3 transition ${
                  mood === m.id
                    ? "border-deen-gold bg-deen-gold/10"
                    : "border-deen-gold/20"
                }`}
              >
                <span className="text-xl">{m.emoji}</span>
                <span className={`text-[11px] text-deen-muted ${ur ? "font-urdu" : ""}`}>
                  {m.label[lang]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
