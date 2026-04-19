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
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <nav
        className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center justify-center z-50 border-r border-white/5"
        aria-label="Site navigation"
      >
        <div className="flex flex-col items-start gap-8 px-3">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="group relative flex items-center gap-2 focus-visible:outline-none"
                aria-label={`Navigate to ${label}`}
              >
                {/* Active left-border indicator */}
                <span
                  className="block w-0.5 h-4 rounded-full"
                  style={{
                    backgroundColor: isActive ? "#C8A96E" : "transparent",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <span
                  className="text-sm select-none"
                  style={{
                    fontFamily: "var(--font-calamity)",
                    color: isActive ? "#C8A96E" : "#4a4a4a",
                    transition: "color 0.3s ease",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                </span>
                {/* Hover underline */}
                <span
                  className="absolute -bottom-0.5 left-4 h-px bg-[#C8A96E]"
                  style={{
                    width: isActive ? "100%" : "0%",
                    transition: "width 0.3s ease",
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div
            className="w-px h-16"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.25))",
            }}
          />
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        style={{ backgroundColor: "rgba(29,29,29,0.92)", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <span
            className="text-[#C8A96E] text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            LC
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96E]/40"
            aria-label="Toggle navigation menu"
          >
            <span
              className="block w-5 h-px bg-[#888]"
              style={{
                transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
            <span
              className="block w-5 h-px bg-[#888]"
              style={{
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.25s ease",
              }}
            />
            <span
              className="block w-5 h-px bg-[#888]"
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="px-6 pb-6 flex flex-col gap-5">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="text-left text-sm text-[#888] focus-visible:outline-none focus-visible:text-[#C8A96E]"
                style={{
                  fontFamily: "var(--font-calamity)",
                  letterSpacing: "0.06em",
                  // hover handled via JS active state on mobile
                }}
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
