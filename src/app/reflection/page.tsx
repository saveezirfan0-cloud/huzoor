"use client";

import { useState } from "react";
import Shell from "@/components/shell";
import { Bi } from "@/components/ui";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { AYAT, daily } from "@/lib/content";
import { saveReflection } from "@/lib/data";

export default function ReflectionPage() {
  const { lang } = useLang();
  const ur = lang === "ur";
  const ayah = daily(AYAT);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <Shell title={dict.nav.reflection}>
      <div className="animate-fade-up space-y-5">
        <div className="card p-6 text-center">
          <p className="text-[11px] uppercase tracking-wider text-deen-goldDark">
            <Bi v={ayah.surah} /> · {ayah.ref}
          </p>
          <p className="mt-3 font-arabic text-2xl leading-loose text-deen-900">
            {ayah.arabic}
          </p>
          <p className={`mt-3 text-deen-muted ${ur ? "font-urdu" : ""}`}>
            {ayah.translation[lang]}
          </p>
        </div>

        <div className="rounded-xl bg-deen-gold/10 p-4">
          <p className="text-[10px] uppercase tracking-wider text-deen-goldDark">
            {ur ? "غور کریں" : "Reflect"}
          </p>
          <p className={`mt-1 text-sm text-deen-ink ${ur ? "font-urdu" : ""}`}>
            {ayah.reflection[lang]}
          </p>
        </div>

        <div className="card p-4">
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setSaved(false);
            }}
            rows={5}
            placeholder={ur ? "آج یہ آیت آپ پر کیسے لاگو ہوتی ہے؟" : "How does this apply to you today?"}
            dir={ur ? "rtl" : "ltr"}
            className={`w-full resize-none rounded-lg border border-deen-gold/20 bg-deen-paper p-3 text-sm text-deen-ink outline-none focus:border-deen-gold ${
              ur ? "font-urdu" : ""
            }`}
          />
          <button
            onClick={async () => {
              if (!note.trim()) return;
              await saveReflection(ayah.ref, note.trim());
              setSaved(true);
            }}
            disabled={!note.trim()}
            className="mt-2 w-full rounded-lg bg-deen-800 py-2.5 text-sm font-semibold text-deen-cream disabled:opacity-50"
          >
            {saved ? dict.common.saved[lang] + " ✓" : dict.common.save[lang]}
          </button>
        </div>
      </div>
    </Shell>
  );
}
