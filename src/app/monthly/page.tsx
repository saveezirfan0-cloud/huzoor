"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { useGender } from "@/lib/gender-context";
import { dict } from "@/lib/i18n";
import { HAYD_REMINDERS, HAYD_ACTS, daily } from "@/lib/content";
import { isHaydToday, toggleHaydToday } from "@/lib/data";

export default function MonthlyPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const { gender, ready } = useGender();
  const router = useRouter();
  const [onCycle, setOnCycle] = useState(false);
  const reminder = daily(HAYD_REMINDERS);

  useEffect(() => {
    isHaydToday().then(setOnCycle);
  }, []);

  // gently redirect anyone this isn't meant for
  useEffect(() => {
    if (ready && gender !== "female") router.replace("/dashboard");
  }, [ready, gender, router]);

  function toggle() {
    const next = !onCycle;
    setOnCycle(next);
    toggleHaydToday(next);
  }

  return (
    <Shell title={dict.hayd.title}>
      <div className="animate-fade-up space-y-5">
        {/* daily reminder / motivation */}
        <div className="rounded-2xl bg-gradient-to-br from-deen-900 to-deen-700 p-5 text-deen-cream">
          <p className="text-[11px] uppercase tracking-widest text-deen-gold">
            {ur ? "یاد دہانی" : "Reminder"}
          </p>
          <p className={`mt-2 leading-relaxed ${ur ? "font-urdu" : ""}`}>
            {reminder.text[lang]}
          </p>
        </div>

        {/* today toggle */}
        <button
          onClick={toggle}
          className={`flex w-full items-center justify-between rounded-xl border p-4 transition active:scale-[0.99] ${
            onCycle ? "border-deen-gold bg-deen-gold/10" : "border-deen-gold/30"
          }`}
        >
          <span className={`font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
            {dict.hayd.onToday[lang]}
          </span>
          <span
            className={`flex h-6 w-11 items-center rounded-full p-0.5 transition ${
              onCycle ? "bg-deen-gold" : "bg-deen-muted/30"
            }`}
          >
            <span
              className={`h-5 w-5 rounded-full bg-white transition ${
                onCycle ? (ur ? "-translate-x-5" : "translate-x-5") : ""
              }`}
            />
          </span>
        </button>

        {/* permitted acts */}
        <div>
          <p className={`mb-2 text-sm font-bold text-deen-900 ${ur ? "font-urdu" : ""}`}>
            {dict.hayd.acts[lang]}
          </p>
          <div className="space-y-3">
            {HAYD_ACTS.map((a, i) => (
              <div
                key={a.id}
                className="card p-4"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <p className={`font-semibold text-deen-800 ${ur ? "font-urdu" : ""}`}>
                  {a.title[lang]}
                </p>
                <p className={`mt-1 text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>
                  {a.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`rounded-lg bg-deen-gold/5 p-3 text-center text-[11px] text-deen-muted/80 ${
            ur ? "font-urdu" : ""
          }`}
        >
          {dict.hayd.note[lang]}
        </p>
      </div>
    </Shell>
  );
}
