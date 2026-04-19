import type { Metadata } from "next";
import { Cinzel, Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Leon Chen | Portfolio",
  description: "Full Stack Developer — crafting thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${outfit.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full bg-[#1d1d1d] text-[#e8e8e8] antialiased">
        {children}
      </body>
    </html>
  );
}
