"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { useLang } from "@/lib/lang-context";
import { dict } from "@/lib/i18n";
import { LangToggle } from "@/components/ui";

export default function LoginPage() {
  const { lang } = useLang();
  const router = useRouter();
  const supabase = createClient();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const ur = lang === "ur";

  async function submit() {
    setLoading(true);
    setMsg(null);
    const fn =
      mode === "in"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });
    const { error } = await fn;
    setLoading(false);
    if (error) return setMsg(error.message);
    if (mode === "up") {
      setMsg(
        ur ? "اکاؤنٹ بن گیا۔ اب سائن اِن کریں۔" : "Account created. You can sign in now."
      );
      setMode("in");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  async function google() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  }

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-b from-deen-900 via-deen-800 to-deen-700 text-deen-cream">
      <div className="flex justify-end p-5">
        <LangToggle />
      </div>
      <div className="flex flex-1 flex-col justify-center px-7 pb-16">
        <div className="mb-10">
          <div className="font-arabic text-5xl text-deen-gold">حضور</div>
          <h1 className="mt-3 text-3xl font-extrabold">Hudoor</h1>
          <p className={`mt-1 text-deen-cream/70 ${ur ? "font-urdu text-lg" : ""}`}>
            {dict.tagline[lang]}
          </p>
        </div>

        <div className="space-y-3">
          <input
            type="email"
            placeholder={dict.common.email[lang]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-deen-gold/30 bg-white/10 px-4 py-3 text-deen-cream placeholder:text-deen-cream/40 outline-none focus:border-deen-gold"
          />
          <input
            type="password"
            placeholder={dict.common.password[lang]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-deen-gold/30 bg-white/10 px-4 py-3 text-deen-cream placeholder:text-deen-cream/40 outline-none focus:border-deen-gold"
          />
          {msg && <p className="text-sm text-deen-gold">{msg}</p>}
          <button
            onClick={submit}
            disabled={loading || !email || !password}
            className="w-full rounded-xl bg-deen-gold py-3 font-bold text-deen-900 transition active:scale-[0.98] disabled:opacity-50"
          >
            {loading
              ? "…"
              : mode === "in"
              ? dict.common.signIn[lang]
              : dict.common.signUp[lang]}
          </button>
          <button
            onClick={google}
            className="w-full rounded-xl border border-deen-cream/30 py-3 font-semibold text-deen-cream transition active:scale-[0.98]"
          >
            {ur ? "گوگل سے جاری رکھیں" : "Continue with Google"}
          </button>
        </div>

        <button
          onClick={() => setMode(mode === "in" ? "up" : "in")}
          className={`mt-6 text-center text-sm text-deen-cream/70 ${ur ? "font-urdu" : ""}`}
        >
          {mode === "in"
            ? ur
              ? "نیا اکاؤنٹ بنائیں"
              : "Create a new account"
            : ur
            ? "پہلے سے اکاؤنٹ ہے؟ سائن اِن"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
