"use client";

import { AppHeader, BottomNav } from "@/components/ui";
import type { ReactNode } from "react";

export default function Shell({
  children,
  title,
}: {
  children: ReactNode;
  title?: { en: string; ur: string };
}) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col">
      <AppHeader title={title} />
      <main className="flex-1 px-5 py-5">{children}</main>
      <BottomNav />
    </div>
  );
}
