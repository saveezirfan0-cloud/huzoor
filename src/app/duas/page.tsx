"use client";

import { useState } from "react";
import Shell from "@/components/shell";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { DUAS } from "@/lib/content";

export default function DuasPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const [open, setOpen] = useState<string | null>(DUAS[0].id);

  return (
    <Shell title={dict.nav.duas}>
      <div className="animate-fade-up space-y-3">
        {DUAS.map((d) => {
          const isOpen = open === d.id;
          return (
            <div key={d.id} className="card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : d.id)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className={`font-semibold text-deen-900 ${ur ? "font-urdu" : ""}`}>
                  {d.title[lang]}
                </span>
                <span className="text-deen-gold">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="space-y-3 px-4 pb-4">
                  <p className="font-arabic text-right text-xl leading-loose text-deen-900">
                    {d.arabic}
                  </p>
                  <p className="text-xs italic text-deen-muted/70">{d.transliteration}</p>
                  <p className={`text-sm text-deen-muted ${ur ? "font-urdu text-right" : ""}`}>
                    {d.translation[lang]}
                  </p>

                  <Detail label={dict.common.why[lang]} ur={ur} text={d.why[lang]} />
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Tag ur={ur}>
                      {dict.common.builds[lang]}: {d.builds[lang]}
                    </Tag>
                    <Tag ur={ur}>{d.when[lang]}</Tag>
                  </div>
                  <p className="text-[11px] text-deen-goldDark">
                    {dict.common.source[lang]}: {d.source}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

function Detail({ label, text, ur }: { label: string; text: string; ur: boolean }) {
  return (
    <div className="rounded-lg bg-deen-gold/5 p-3">
      <p className="text-[10px] uppercase tracking-wider text-deen-goldDark">{label}</p>
      <p className={`mt-1 text-sm text-deen-muted ${ur ? "font-urdu" : ""}`}>{text}</p>
    </div>
  );
}
function Tag({ children, ur }: { children: React.ReactNode; ur: boolean }) {
  return (
    <span
      className={`rounded-full border border-deen-gold/30 bg-deen-paper px-3 py-1 text-[11px] text-deen-muted ${
        ur ? "font-urdu" : ""
      }`}
    >
      {children}
    </span>
  );
}
