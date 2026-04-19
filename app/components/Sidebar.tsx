"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Hi", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "portfolio", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-14 flex-col items-center justify-center z-50 border-r border-white/5">
        <div className="flex flex-col items-center gap-10">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="group relative flex items-center justify-center"
                aria-label={label}
              >
                <span
                  className="writing-vertical text-xs tracking-[0.3em] uppercase transition-all duration-300"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    color: isActive ? "#C8A96E" : "#555",
                    fontFamily: "var(--font-outfit)",
                    letterSpacing: "0.25em",
                  }}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="absolute left-full ml-2 w-1 h-1 rounded-full bg-[#C8A96E]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 flex flex-col items-center gap-1">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C8A96E]/30" />
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#1d1d1d]/90 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center justify-between px-6 h-14">
          <span
            className="text-[#C8A96E] text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            LC
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-[#888] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#888] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#888] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="px-6 pb-6 flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="text-left text-sm tracking-widest uppercase text-[#888] hover:text-[#C8A96E] transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
