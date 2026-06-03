"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getGender, setGender as persistGender } from "./data";

type Gender = "male" | "female" | "unset";
type Ctx = {
  gender: Gender;
  ready: boolean;
  setGender: (g: Gender) => Promise<void>;
};

const GenderContext = createContext<Ctx>({
  gender: "unset",
  ready: false,
  setGender: async () => {},
});

export function GenderProvider({ children }: { children: ReactNode }) {
  const [gender, setG] = useState<Gender>("unset");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getGender()
      .then(setG)
      .finally(() => setReady(true));
  }, []);

  async function setGender(g: Gender) {
    setG(g);
    await persistGender(g);
  }

  return (
    <GenderContext.Provider value={{ gender, ready, setGender }}>
      {children}
    </GenderContext.Provider>
  );
}

export const useGender = () => useContext(GenderContext);
