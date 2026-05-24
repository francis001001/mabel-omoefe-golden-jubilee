import type { Metadata } from "next";
import { Italiana, Cormorant_Garamond, Caveat, Inter } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mabel @ 50 — A Golden Jubilee",
  description:
    "Join us in celebrating Mrs. Ohwodiame Mabel Omoefe's Golden Jubilee — Saturday, 20 June 2026. An All White Party in Warri.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${cormorant.variable} ${caveat.variable} ${inter.variable} font-cormorant bg-ivory text-ink overflow-x-hidden`}
      >
        {/* Paper texture overlay */}
        <div className="paper-texture pointer-events-none fixed inset-0 z-1 opacity-60" />
        <div className="relative z-2">{children}</div>
      </body>
    </html>
  );
}