import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import { LangProvider } from "@/lib/lang-context";
import { GenderProvider } from "@/lib/gender-context";
import SWRegister from "@/components/sw-register";
import "./globals.css";

const naskh = localFont({
  src: "./fonts/NotoNaskhArabic.ttf",
  variable: "--font-arabic",
  display: "swap",
});
const nastaliq = localFont({
  src: "./fonts/NotoNastaliqUrdu.ttf",
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hudoor — Mindful through Deen",
  description:
    "A Deen-based mindfulness and self-improvement system built on Qur'an and Sunnah.",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Hudoor" },
};

export const viewport: Viewport = {
  themeColor: "#0f3d33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${naskh.variable} ${nastaliq.variable} font-sans antialiased`}
      >
        <LangProvider>
          <GenderProvider>
            <SWRegister />
            {children}
          </GenderProvider>
        </LangProvider>
      </body>
    </html>
  );
}
