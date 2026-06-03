"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/lib/lang-context";
import { dict, type Lang } from "@/lib/i18n";
import { createClient } from "@/lib/supabase-client";

type Bi = { en: string; ur: string };

export function Bi({ v, className = "" }: { v: Bi; className?: string }) {
  const { lang } = useLang();
  return (
    <span className={`${lang === "ur" ? "font-urdu" : ""} ${className}`}>
      {v[lang]}
    </span>
  );
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-deen-gold/40 bg-white/60 p-0.5 text-xs font-semibold">
      {(["en", "ur"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 transition ${
            lang === l ? "bg-deen-800 text-deen-cream" : "text-deen-goldDark"
          }`}
        >
          {l === "en" ? "EN" : "اردو"}
        </button>
      ))}
    </div>
  );
}

export function AppHeader({ title }: { title?: Bi }) {
  const { lang } = useLang();
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-deen-gold/20 bg-deen-paper/80 px-5 py-3 backdrop-blur">
      <Link href="/dashboard" className="flex items-baseline gap-2">
        <span className="font-arabic text-xl text-deen-800">حضور</span>
        {title && (
          <span
            className={`text-sm font-semibold text-deen-muted ${
              lang === "ur" ? "font-urdu" : ""
            }`}
          >
            · {title[lang]}
          </span>
        )}
      </Link>
      <LangToggle />
    </header>
  );
}

const NAV = [
  { href: "/dashboard", key: "dashboard", icon: "◈" },
  { href: "/salah", key: "salah", icon: "🕌" },
  { href: "/duas", key: "duas", icon: "📿" },
  { href: "/emotions", key: "emotions", icon: "💚" },
  { href: "/character", key: "character", icon: "⬡" },
] as const;

export function BottomNav() {
  const path = usePathname();
  const { lang } = useLang();
  return (
    <nav className="sticky bottom-0 z-20 mt-auto grid grid-cols-5 border-t border-deen-gold/20 bg-deen-paper/90 backdrop-blur">
      {NAV.map((n) => {
        const active = path.startsWith(n.href);
        return (
          <Link
            key={n.href}
            href={n.href}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] transition ${
              active ? "text-deen-800" : "text-deen-muted/60"
            }`}
          >
            <span className="text-base leading-none">{n.icon}</span>
            <span className={lang === "ur" ? "font-urdu" : "font-semibold"}>
              {dict.nav[n.key as keyof typeof dict.nav][lang]}
            </span>
            {active && <span className="h-0.5 w-5 rounded-full bg-deen-gold" />}
          </Link>
        );
      })}
    </nav>
  );
}

export function SignOutButton() {
  const router = useRouter();
  const { lang } = useLang();
  const supabase = createClient();
  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
      }}
      className={`text-xs text-deen-goldDark underline ${
        lang === "ur" ? "font-urdu" : ""
      }`}
    >
      {dict.common.signOut[lang]}
    </button>
  );
}
