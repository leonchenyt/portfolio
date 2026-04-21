"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Main", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
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
      {/* Desktop sidebar */}
      <nav
        className="hidden md:flex fixed left-0 top-0 h-full w-60 flex-col items-center z-50 border-r border-white/[0.05]"
        style={{ backgroundColor: "#1c1c1c" }}
        aria-label="Site navigation"
      >
        {/* Logo */}
        <div className="pt-10 pb-12 flex items-center justify-center">
          <span
            style={{
              fontFamily: "var(--font-kaisotai)",
              color: "#B87333",
              fontSize: "1.6rem",
              letterSpacing: "0.1em",
            }}
          >
            レオン
          </span>
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center gap-1 flex-1 w-full px-4">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="nav-btn w-full text-center px-3 py-2.5 focus-visible:outline-none"
                style={{ background: "transparent" }}
                aria-label={`Navigate to ${label}`}
              >
                <span
                  style={{
                    fontFamily: "var(--font-calamity)",
                    fontSize: "1.35rem",
                    color: isActive ? "#B87333" : "#4a4a4a",
                    letterSpacing: "0.04em",
                    transition: "color 0.25s ease",
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Social icons */}
        <div className="pb-10 flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/leonchenyt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B87333] hover:opacity-70 focus-visible:outline-none"
            style={{ transition: "opacity 0.2s ease" }}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B87333] hover:opacity-70 focus-visible:outline-none"
            style={{ transition: "opacity 0.2s ease" }}
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a> */}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05]"
        style={{ backgroundColor: "rgba(28,28,28,0.96)", backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <span
            style={{
              fontFamily: "var(--font-kaisotai)",
              color: "#B87333",
              fontSize: "1rem",
              letterSpacing: "0.1em",
            }}
          >
            レオン
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 focus-visible:outline-none"
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px bg-[#666]"
                style={{
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(2px, 2px)"
                    : i === 2 ? "rotate(-45deg) translate(2px, -2px)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                }}
              />
            ))}
          </button>
        </div>
        {menuOpen && (
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="text-left text-lg text-[#666] hover:text-[#B87333] focus-visible:outline-none"
                style={{
                  fontFamily: "var(--font-calamity)",
                  transition: "color 0.2s ease",
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
