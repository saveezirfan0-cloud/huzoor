"use client";

import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { useGender } from "@/lib/gender-context";
import { dict } from "@/lib/i18n";

export default function SettingsPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const { gender, setGender } = useGender();

  const opts: { id: "male" | "female"; label: string }[] = [
    { id: "male", label: dict.gender.male[lang] },
    { id: "female", label: dict.gender.female[lang] },
  ];

  return (
    <Shell title={{ en: "Settings", ur: "ترتیبات" }}>
      <div className="animate-fade-up space-y-5">
        <div className="card p-5">
          <p className={`mb-3 text-sm font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
            {dict.gender.settings[lang]}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {opts.map((o) => (
              <button
                key={o.id}
                onClick={() => setGender(o.id)}
                className={`rounded-xl border py-3 font-semibold transition active:scale-95 ${
                  gender === o.id
                    ? "border-deen-gold bg-deen-gold/15 text-deen-800"
                    : "border-deen-gold/30 text-deen-muted"
                } ${ur ? "font-urdu" : ""}`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {gender !== "unset" && (
            <button
              onClick={() => {
                setGender("unset");
                localStorage.setItem("hudoor-gender-skipped", "1");
              }}
              className={`mt-3 w-full text-center text-xs text-deen-goldDark underline ${
                ur ? "font-urdu" : ""
              }`}
            >
              {dict.gender.clear[lang]}
            </button>
          )}
          <p className={`mt-3 text-[11px] text-deen-muted/70 ${ur ? "font-urdu" : ""}`}>
            {dict.gender.intro[lang]}
          </p>
        </div>
      </div>
    </Shell>
  );
}
