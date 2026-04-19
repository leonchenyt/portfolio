import Sidebar from "./components/Sidebar";
import ContactForm from "./components/ContactForm";

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Tailwind CSS", "Docker", "AWS",
  "GraphQL", "REST APIs", "Git", "CI/CD",
];

const PROJECTS = [
  {
    title: "Workflow Manager",
    description:
      "A full-stack web application for managing complex workflows with real-time updates, role-based access control, and an audit trail — built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs"],
    image: "https://placehold.co/540x360/252525/444444",
    year: "2024",
  },
  {
    title: "Deploy CLI",
    description:
      "An open-source CLI tool that automates deployment pipelines across cloud providers. Reduced deployment time by 60% across multiple production environments.",
    tags: ["Node.js", "Docker", "AWS", "Shell"],
    image: "https://placehold.co/540x360/252525/444444",
    year: "2024",
  },
  {
    title: "Data Dashboard",
    description:
      "A data visualization dashboard consuming multiple third-party APIs, designed for performance and accessibility with interactive charts and real-time analytics.",
    tags: ["React", "GraphQL", "D3.js", "REST APIs"],
    image: "https://placehold.co/540x360/252525/444444",
    year: "2023",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:pl-60">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <Tag text="h1" />

          <div className="mt-4 mb-4">
            <p
              className="font-bold text-[#e0e0e0] leading-none mb-2"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
              }}
            >
              Hi, I&apos;m
            </p>
            <p
              className="leading-none italic"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
                color: "#E07070",
              }}
            >
              Leon Chen
            </p>
            <p
              className="font-bold text-[#e0e0e0] leading-none mt-2"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
              }}
            >
              web developer
            </p>
          </div>

          <Tag text="h1" closing />

          <div className="mt-8">
            <Tag text="p" />
            <p
              className="mt-2 mb-2 text-lg text-[#888]"
              style={{ fontFamily: "var(--font-outfit)", fontWeight: 400 }}
            >
              Full Stack Development
            </p>
            <Tag text="p" closing />
          </div>

          <div className="mt-8">
            <a
              href="#portfolio"
              className="inline-block px-8 py-3 border border-[#E07070] text-[#E07070] text-sm font-semibold tracking-widest uppercase
                         hover:bg-[#E07070] hover:text-[#1c1c1c]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07070]/50
                         active:opacity-80"
              style={{
                fontFamily: "var(--font-outfit)",
                transition: "background-color 0.25s ease, color 0.25s ease",
              }}
            >
              Check my work
            </a>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <Tag text="h2" />
          <h2
            className="mt-3 mb-3"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#E07070",
            }}
          >
            About Me
          </h2>
          <Tag text="h2" closing />

          <div className="mt-8">
            <Tag text="p" />
            <p
              className="mt-3 mb-3 max-w-2xl text-[#888] leading-relaxed"
              style={{ fontFamily: "var(--font-outfit)", fontSize: "1rem", fontWeight: 400 }}
            >
              I&apos;m a full-stack developer who loves building things that are both
              technically solid and genuinely enjoyable to use. I care deeply about
              clean code, thoughtful architecture, and interfaces that feel effortless.
              Based in Toronto — open to new opportunities.
            </p>
            <Tag text="p" closing />
          </div>

          <div className="mt-10">
            <Tag text="ul" />
            <div className="mt-4 mb-4 grid grid-cols-2 gap-x-16 gap-y-2 max-w-xl">
              {SKILLS.map((skill, i) => (
                <div key={skill} className="flex items-center gap-2">
                  <span
                    className="font-mono text-sm"
                    style={{ color: "#E07070", minWidth: "1.6rem" }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: "#E07070" }}
                  >
                    &gt;
                  </span>
                  <span
                    className="text-sm text-[#aaa]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <Tag text="ul" closing />
          </div>
        </section>

        {/* ── Portfolio ──────────────────────────────────────── */}
        <section
          id="portfolio"
          className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <Tag text="h2" />
          <h2
            className="mt-3 mb-3"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#E07070",
            }}
          >
            Portfolio
          </h2>
          <Tag text="h2" closing />

          <div className="mt-4">
            <Tag text="p" />
            <p
              className="mt-3 mb-3 max-w-2xl text-[#888] leading-relaxed"
              style={{ fontFamily: "var(--font-outfit)", fontSize: "1rem" }}
            >
              I&apos;ve invested substantial time in a variety of projects, thoroughly
              enjoying the process of building things from the ground up. Here are a
              few that encapsulate my expertise.
            </p>
            <Tag text="p" closing />
          </div>

          <div className="mt-10 flex flex-col gap-14">
            {PROJECTS.map((project) => (
              <article key={project.title} className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image */}
                <div className="relative overflow-hidden border border-[#2a2a2a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block"
                  />
                </div>

                {/* Info */}
                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-[#888] border border-[#333] px-2 py-1"
                      >
                        &lt; {tag} &gt;
                      </span>
                    ))}
                  </div>

                  <h3
                    className="text-xl font-bold text-[#e0e0e0] mb-3"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm text-[#777] leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6">
                    <a
                      href="#"
                      className="text-[#E07070] hover:opacity-70 focus-visible:outline-none"
                      style={{ transition: "opacity 0.2s ease" }}
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#E07070] hover:opacity-70 focus-visible:outline-none"
                      style={{ transition: "opacity 0.2s ease" }}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <Tag text="h2" />
          <h2
            className="mt-3 mb-3"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#E07070",
            }}
          >
            Contact Me
          </h2>
          <Tag text="h2" closing />

          <div className="mt-4">
            <Tag text="p" />
            <p
              className="mt-3 mb-3 max-w-lg text-[#888] leading-relaxed"
              style={{ fontFamily: "var(--font-outfit)", fontSize: "1rem" }}
            >
              Interested in working together or just want to say hi? Feel free
              to reach out — I&apos;ll get back to you within a day or two.
            </p>
            <Tag text="p" closing />
          </div>

          <div className="mt-8">
            <Tag text="form" />
            <div className="mt-4 mb-4">
              <ContactForm />
            </div>
            <Tag text="form" closing />
          </div>

          <footer className="mt-20 text-center text-sm text-[#3a3a3a]" style={{ fontFamily: "var(--font-outfit)", fontStyle: "italic" }}>
            Designed &amp; Built by Leon &copy;2024 – {new Date().getFullYear()}
          </footer>
        </section>

      </main>
    </div>
  );
}

/* Decorative HTML tag annotation */
function Tag({ text, closing = false }: { text: string; closing?: boolean }) {
  return (
    <span
      className="font-mono text-sm select-none"
      style={{ color: "rgba(224, 112, 112, 0.28)" }}
    >
      {closing ? `</${text}>` : `<${text}>`}
    </span>
  );
}
