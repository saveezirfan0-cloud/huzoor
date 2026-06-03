"use client";

import { useEffect, useState } from "react";
import { useGender } from "@/lib/gender-context";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";

export default function GenderPrompt() {
  const { gender, ready, setGender } = useGender();
  const { lang } = useLang();
  const ur = lang === "ur";
  const [skipped, setSkipped] = useState(true); // assume skipped until we read storage

  useEffect(() => {
    setSkipped(localStorage.getItem("hudoor-gender-skipped") === "1");
  }, []);

  // only prompt once we've loaded the profile, it's still unset, and not skipped
  if (!ready || gender !== "unset" || skipped) return null;

  function skip() {
    localStorage.setItem("hudoor-gender-skipped", "1");
    setSkipped(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-deen-900/40 p-4 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-sm animate-fade-up rounded-2xl bg-deen-paper p-6 shadow-xl">
        <div className="mb-1 font-arabic text-3xl text-deen-gold">حضور</div>
        <h2 className={`text-lg font-extrabold text-deen-900 ${ur ? "font-urdu" : ""}`}>
          {dict.gender.welcome[lang]}
        </h2>
        <p className={`mt-2 text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
          {dict.gender.intro[lang]}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => setGender("male")}
            className="rounded-xl bg-deen-800 py-4 font-bold text-deen-cream transition active:scale-95"
          >
            <span className="block text-2xl">♂</span>
            <span className={ur ? "font-urdu" : ""}>{dict.gender.male[lang]}</span>
          </button>
          <button
            onClick={() => setGender("female")}
            className="rounded-xl bg-deen-700 py-4 font-bold text-deen-cream transition active:scale-95"
          >
            <span className="block text-2xl">♀</span>
            <span className={ur ? "font-urdu" : ""}>{dict.gender.female[lang]}</span>
          </button>
        </div>

        <button
          onClick={skip}
          className={`mt-4 w-full text-center text-xs text-deen-muted/70 underline ${
            ur ? "font-urdu" : ""
          }`}
        >
          {dict.gender.skip[lang]}
        </button>
      </div>
    </div>
  );
}
