import Sidebar from "./components/Sidebar";
import ZeldaCircle from "./components/ZeldaCircle";

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

      {/* Main content — offset for sidebar */}
      <main className="flex-1 md:pl-14">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden px-10 md:px-20 lg:px-32"
        >
          {/* Zelda watermark — centered absolutely */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="zelda-outer">
              <ZeldaCircle />
            </div>
          </div>

          {/* Hero text */}
          <div className="relative z-10 max-w-2xl">
            <p
              className="mb-3 text-xs tracking-[0.4em] uppercase text-[#C8A96E]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Welcome
            </p>
            <h1
              className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Hi, I&apos;m
              <br />
              <span className="text-[#e63946]">Leon Chen</span>
            </h1>
            <p
              className="mt-4 text-3xl md:text-5xl font-light text-[#e8e8e8]/70 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              web developer
            </p>
            <p
              className="mt-8 max-w-md text-sm leading-7 text-[#888]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              I build clean, thoughtful interfaces and robust back-ends.
              Currently open to new opportunities.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#portfolio"
                className="text-xs tracking-[0.3em] uppercase text-[#e8e8e8] border border-[#e8e8e8]/20 px-6 py-3 hover:border-[#C8A96E]/60 hover:text-[#C8A96E] transition-all duration-300"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="text-xs tracking-[0.3em] uppercase text-[#888] hover:text-[#C8A96E] transition-colors duration-300"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Get in Touch →
              </a>
            </div>
          </div>

          {/* Bottom line decoration */}
          <div className="absolute bottom-12 left-10 md:left-20 lg:left-32 flex items-center gap-4">
            <div className="h-px w-12 bg-[#C8A96E]/30" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-[#555]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Scroll
            </span>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section
          id="about"
          className="min-h-screen flex items-center px-10 md:px-20 lg:px-32 py-24"
        >
          <div className="w-full max-w-4xl">
            <SectionLabel text="About Me" />

            <div className="mt-12 grid md:grid-cols-2 gap-16">
              <div>
                <p
                  className="text-[#aaa] leading-8 text-sm mb-6"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  I&apos;m a full-stack developer with a passion for building
                  products that are both technically solid and genuinely
                  enjoyable to use. I care deeply about the craft — clean code,
                  thoughtful architecture, and interfaces that feel effortless.
                </p>
                <p
                  className="text-[#aaa] leading-8 text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  When I&apos;m not writing code, I&apos;m exploring design systems,
                  playing video games (hence the Zelda motif), or experimenting
                  with generative art.
                </p>

                <div className="mt-10 flex flex-col gap-3">
                  {[
                    ["Based in", "Toronto, Canada"],
                    ["Available", "Open to roles"],
                    ["Languages", "EN / ZH"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.3em] uppercase text-[#555] w-20"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-xs text-[#888]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-[10px] tracking-[0.4em] uppercase text-[#555] mb-6"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Technologies
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 py-2 border-b border-[#2e2e2e] group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C8A96E]/50 group-hover:bg-[#C8A96E] transition-colors" />
                      <span
                        className="text-xs text-[#777] group-hover:text-[#aaa] transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
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

        {/* ── Portfolio ─────────────────────────────────────────── */}
        <section
          id="portfolio"
          className="min-h-screen px-10 md:px-20 lg:px-32 py-24"
        >
          <div className="max-w-4xl">
            <SectionLabel text="Portfolio" />

            <div className="mt-12 flex flex-col gap-12">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.title}
                  className="group grid md:grid-cols-[1fr_2fr] gap-8 border-b border-[#2e2e2e] pb-12"
                >
                  {/* Project image placeholder */}
                  <div className="relative aspect-[4/3] bg-[#232323] border border-[#2e2e2e] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E]/5 to-transparent" />
                    <span
                      className="text-[#333] text-4xl font-black"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-3 right-3 w-6 h-px bg-[#C8A96E]/30 group-hover:w-10 transition-all duration-500" />
                  </div>

                  {/* Project info */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3
                        className="text-lg font-semibold text-[#e8e8e8] group-hover:text-[#C8A96E] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-[10px] tracking-widest text-[#555]"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <p
                      className="text-sm text-[#777] leading-7 mb-5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-widest uppercase text-[#555] border border-[#2e2e2e] px-3 py-1"
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

        {/* ── Contact ──────────────────────────────────────────── */}
        <section
          id="contact"
          className="min-h-screen flex items-center px-10 md:px-20 lg:px-32 py-24"
        >
          <div className="w-full max-w-2xl">
            <SectionLabel text="Contact Me" />

            <p
              className="mt-6 text-sm text-[#777] leading-7 mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              If you are interested in working together or just want to say hi,
              feel free to reach out. I&apos;ll get back to you within a day or two.
            </p>

            <form className="flex flex-col gap-6">
              <FormField label="Name" type="text" placeholder="Your name" />
              <FormField label="Email" type="email" placeholder="your@email.com" />
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] tracking-[0.3em] uppercase text-[#555]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="What's on your mind?"
                  className="bg-transparent border border-[#2e2e2e] text-[#aaa] text-sm px-4 py-3 resize-none placeholder:text-[#444] focus:outline-none focus:border-[#C8A96E]/40 transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
              </div>

              <button
                type="submit"
                className="self-start text-xs tracking-[0.3em] uppercase text-[#e8e8e8] border border-[#e8e8e8]/20 px-8 py-3 hover:border-[#C8A96E]/60 hover:text-[#C8A96E] transition-all duration-300 mt-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Send Message
              </button>
            </form>

            {/* Footer */}
            <div className="mt-20 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#2e2e2e]" />
              <span
                className="text-[10px] tracking-widest uppercase text-[#444]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Leon Chen · {new Date().getFullYear()}
              </span>
              <div className="h-px flex-1 bg-[#2e2e2e]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-px w-8 bg-[#C8A96E]/40" />
      <h2
        className="text-2xl md:text-3xl font-light tracking-wide text-[#e8e8e8]"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        {text}
      </h2>
    </div>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[10px] tracking-[0.3em] uppercase text-[#555]"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#2e2e2e] text-[#aaa] text-sm px-1 py-2 placeholder:text-[#444] focus:outline-none focus:border-[#C8A96E]/40 transition-colors"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      />
    </div>
  );
}
