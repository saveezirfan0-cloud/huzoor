"use client";

import { useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { MINDFULNESS } from "@/lib/content";

export default function MindfulnessPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [active, setActive] = useState(MINDFULNESS[0].id);
  const practice = MINDFULNESS.find((p) => p.id === active)!;

  return (
    <Shell title={dict.nav.mindfulness}>
      <div className="animate-fade-up space-y-5">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {MINDFULNESS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                active === p.id
                  ? "bg-deen-800 text-deen-cream"
                  : "border border-deen-gold/30 text-deen-muted"
              } ${ur ? "font-urdu" : ""}`}
            >
              {p.title[lang]}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {practice.prompts.map((p, i) => (
            <div
              key={i}
              className="card flex items-start gap-3 p-4"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-deen-gold text-xs font-bold text-deen-900">
                {i + 1}
              </span>
              <p className={`text-sm text-deen-ink ${ur ? "font-urdu" : ""}`}>{p[lang]}</p>
            </div>
          ))}
        </div>

        <p className={`text-center text-xs text-deen-muted/60 ${ur ? "font-urdu" : ""}`}>
          {ur
            ? "ہر قدم پر ٹھہریں — جلدی نہیں۔"
            : "Pause at each step — there is no rush."}
        </p>
      </div>
    </Shell>
  );
}
