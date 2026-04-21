import type { Metadata } from "next";
import { Cinzel, Outfit, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const calamity = localFont({
  src: "../fonts/Calamity-Bold.otf",
  variable: "--font-calamity",
  display: "swap",
});

const kaisotai = localFont({
  src: "../fonts/Kaisotai-Next-UP-B.ttf",
  variable: "--font-kaisotai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leon Chen | Projects",
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
      className={`${cinzel.variable} ${outfit.variable} ${dmSans.variable} ${calamity.variable} ${kaisotai.variable} h-full`}
    >
      <body className="min-h-full bg-[#1c1c1c] text-[#e0e0e0] antialiased">
        {children}
      </body>
    </html>
  );
}
