"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "./i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };
const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("hudoor-lang") as Lang) || "en";
    setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem("hudoor-lang", l);
    setLangState(l);
  };

  return (
    <LangContext.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "en" ? "ur" : "en") }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
