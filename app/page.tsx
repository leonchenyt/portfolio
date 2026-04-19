import Sidebar from "./components/Sidebar";
import ZeldaCircle from "./components/ZeldaCircle";
import ContactForm from "./components/ContactForm";

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Tailwind CSS", "Docker", "AWS",
  "GraphQL", "REST APIs", "Git", "CI/CD",
];

const PROJECTS = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application for managing complex workflows. Built with Next.js and PostgreSQL, featuring real-time updates and role-based access control.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
    year: "2024",
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates deployment pipelines. Reduced deployment time by 60% across multiple production environments.",
    tags: ["Node.js", "Docker", "AWS", "Shell"],
    year: "2024",
  },
  {
    title: "Project Gamma",
    description:
      "A data visualization dashboard consuming multiple third-party APIs. Designed with a focus on performance and accessibility.",
    tags: ["React", "GraphQL", "D3.js", "REST"],
    year: "2023",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main content — offset for desktop sidebar */}
      <main className="flex-1 md:pl-20">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          {/* Zelda watermark — absolutely centered */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="zelda-outer">
              <ZeldaCircle />
            </div>
          </div>

          {/* Hero content — centered column */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-10 md:px-16 lg:px-24">
            <p
              className="mb-4 text-xs tracking-[0.45em] uppercase text-[#C8A96E]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Welcome
            </p>

            <h1
              className="leading-[0.95] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
            >
              Hi, I&apos;m
              <br />
              <span style={{ color: "#e63946" }}>Leon Chen</span>
            </h1>

            <p
              className="mt-5 font-light text-[#e8e8e8]/65 tracking-wide"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              }}
            >
              web developer
            </p>

            <p
              className="mt-8 max-w-lg text-[15px] leading-[1.85] text-[#888]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              I build clean, thoughtful interfaces and robust back-ends.
              Currently open to new opportunities.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <a
                href="#portfolio"
                className="inline-block text-xs tracking-[0.3em] uppercase text-[#e8e8e8] border border-[#e8e8e8]/20 px-7 py-3.5
                           hover:border-[#C8A96E]/60 hover:text-[#C8A96E]
                           focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96E]/50
                           active:opacity-70"
                style={{
                  fontFamily: "var(--font-outfit)",
                  transition: "color 0.25s ease, border-color 0.25s ease",
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="text-xs tracking-[0.3em] uppercase text-[#666]
                           hover:text-[#C8A96E]
                           focus-visible:outline-none focus-visible:text-[#C8A96E]
                           active:opacity-70"
                style={{
                  fontFamily: "var(--font-outfit)",
                  transition: "color 0.25s ease",
                }}
              >
                Get in Touch →
              </a>
            </div>
          </div>

          {/* Bottom scroll hint */}
          <div className="absolute bottom-10 left-10 md:left-32 flex items-center gap-4">
            <div className="h-px w-10 bg-[#C8A96E]/25" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-[#444]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Scroll
            </span>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section
          id="about"
          className="min-h-screen flex items-center py-32 px-10 md:px-16 lg:px-24"
        >
          <div className="w-full max-w-4xl mx-auto">
            <SectionLabel text="About Me" />

            <div className="mt-14 grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* Bio */}
              <div>
                <p
                  className="text-[15px] leading-[1.85] text-[#999] mb-6"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  I&apos;m a full-stack developer with a passion for building
                  products that are both technically solid and genuinely
                  enjoyable to use. I care deeply about the craft — clean code,
                  thoughtful architecture, and interfaces that feel effortless.
                </p>
                <p
                  className="text-[15px] leading-[1.85] text-[#999]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  When I&apos;m not writing code, I&apos;m exploring design systems,
                  playing video games (hence the Zelda motif), or experimenting
                  with generative art.
                </p>

                <div className="mt-10 flex flex-col gap-4">
                  {[
                    ["Based in", "Toronto, Canada"],
                    ["Available", "Open to roles"],
                    ["Languages", "EN / ZH"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center gap-5">
                      <span
                        className="text-[10px] tracking-[0.35em] uppercase text-[#444] w-24 shrink-0"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm text-[#777]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <p
                  className="text-[10px] tracking-[0.4em] uppercase text-[#444] mb-7"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Technologies
                </p>
                <div className="grid grid-cols-2 gap-x-6">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 py-2.5 border-b border-[#2a2a2a] group"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#C8A96E]/40 shrink-0"
                        style={{ transition: "background-color 0.2s ease" }}
                      />
                      <span
                        className="text-[13px] text-[#666]"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Portfolio ──────────────────────────────────────── */}
        <section
          id="portfolio"
          className="min-h-screen py-32 px-10 md:px-16 lg:px-24"
        >
          <div className="max-w-4xl mx-auto">
            <SectionLabel text="Portfolio" />

            <div className="mt-14 flex flex-col gap-16">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.title}
                  className="group grid md:grid-cols-[5fr_7fr] gap-10 border-b border-[#252525] pb-16"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] bg-[#222] border border-[#2a2a2a] overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 30% 30%, rgba(200,169,110,0.04) 0%, transparent 70%)",
                      }}
                    />
                    <span
                      className="text-[#2e2e2e] font-black"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="absolute bottom-3 right-3 h-px bg-[#C8A96E]/25"
                      style={{
                        width: "1.5rem",
                        transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3
                        className="text-xl font-semibold text-[#e0e0e0]"
                        style={{
                          fontFamily: "var(--font-outfit)",
                          transition: "color 0.2s ease",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-[10px] tracking-widest text-[#444]"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <p
                      className="text-[14px] text-[#6a6a6a] leading-[1.85] mb-6"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-widest uppercase text-[#4a4a4a] border border-[#272727] px-3 py-1.5"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section
          id="contact"
          className="min-h-screen flex items-center py-32 px-10 md:px-16 lg:px-24"
        >
          <div className="w-full max-w-2xl mx-auto">
            <SectionLabel text="Contact Me" />

            <p
              className="mt-6 text-[15px] text-[#666] leading-[1.85] mb-12"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              If you are interested in working together or just want to say hi,
              feel free to reach out. I&apos;ll get back to you within a day or two.
            </p>

            <ContactForm />

            {/* Footer rule */}
            <div className="mt-24 flex items-center gap-5">
              <div className="h-px flex-1 bg-[#252525]" />
              <span
                className="text-[10px] tracking-[0.35em] uppercase text-[#383838]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Leon Chen · {new Date().getFullYear()}
              </span>
              <div className="h-px flex-1 bg-[#252525]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ── Shared sub-components ── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-px w-10 bg-[#C8A96E]/35" />
      <h2
        className="font-light tracking-[-0.02em] text-[#e0e0e0]"
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
        }}
      >
        {text}
      </h2>
    </div>
  );
}

