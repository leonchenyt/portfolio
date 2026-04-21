import Sidebar from "./components/Sidebar";
import ProjectImageGallery from "./components/ProjectImageGallery";

// ─── EDIT YOUR SKILLS HERE ───────────────────────────────────────────────────
const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Tailwind CSS", "Docker", "AWS",
  "GraphQL", "REST APIs", "Git", "CI/CD",
];

// ─── EDIT YOUR PROJECTS HERE ─────────────────────────────────────────────────
// For YouTube projects: set youtube to the video ID (the part after "?v=")
//   e.g. https://youtube.com/watch?v=dQw4w9WgXcQ  →  youtube: "dQw4w9WgXcQ"
// For image projects: set images to an array of paths or URLs
//   - Put files in /public/ and reference as "/my-screenshot.png"
//   - First image is the thumbnail; all images open in the gallery modal
const PROJECTS: Array<{
  title: string;
  description: string[];
  tags: string[];
  date: string;
  youtube?: string;
  images?: string[];
  captions?: string[];
  link?: { label: string; href: string };
}> = [
  {
    title: "2D Tower Defense",
    description: [
      "Built a 2D grid map level editor",
      "A* pathfinding for minions to avoid dynamic obstacles",
      "Designed and created the simple geometry animation",
      "Implemented SAT collision"
    ],
    tags: ["C", "Gameplay Programmer"],
    date: "Sep 2019",
    youtube: "ploK5qrPFqU",
  },
  {
    title: "2D Puzzle Platform",
    description: [
      "Constructed ECS framework and template systems",
      "Graphics engine with Direct3D 11",
      "2D lighting system that renders lighting textures on another buffer",
      "Post-processing, such as dissolve, chromatic aberration, blur",
      "Built sprite, UV animation system with custom animation sequence",
      "Integrated Spine C runtime API into engine",
      "Camera system with delay following, damping and virtual camera",
      "Input mapping framework for both mouse/keyboard and controller",
      "Level transition system to optimize loading time and memory footprint",
      "Message system with queue allocator to decouple systems"
    ],
    tags: ["C++", "Graphics Programmer"],
    date: "Sep 2020",
    youtube: "YW1qPrYB_XQ",
    link: { label: "Steam", href: "https://store.steampowered.com/app/1389300/Soulcaster/" },
  },
  {
    title: "Raytracing",
    description: [
      "BRDF cpu path tracing",
      "Image based lighting",
      "Depth of field",
      "CSG objects with ray marching"
    ],
    tags: ["C++"],
    date: "Apr 2021",
    images: [
      "/gallery/raytracing.jpg",
    ],
    captions: [
      "Final render — BRDF path tracing with IBL and depth of field",
    ],
  },
  {
    title: "PBR",
    description: [
      "Image based lighting",
      "Deferred shading",
    ],
    tags: ["C++", "Vulkan"],
    date: "Apr 2021",
    images: [
      "/gallery/pbr_lod0.jpg",
      "/gallery/pbr_lod35samples.jpg",
      "/gallery/pbr_roughness.jpg",
    ],
    captions: [
      "PBR — LOD 0, base material",
      "PBR — 35 samples, converged lighting",
      "PBR — roughness variation across surface",
    ],
  },
  {
    title: "SSAO",
    description: [
      "Screen Space Ambient Occlusion",
    ],
    tags: ["C++", "Vulkan"],
    date: "Apr 2021",
    images: [
      "/gallery/ssao_enabled.jpg",
      "/gallery/ssao_disabled.jpg",
      "/gallery/ssao_15_3.jpg",
    ],
    captions: [
      "SSAO enabled",
      "SSAO disabled — for comparison",
      "15 samples, radius 3 — fine-tuned parameters",
    ],
  },
  {
    title: "Parallax Occlude Map",
    description: [
      "Testing normal map and parallax map",
      "Testing number of layer checks",
    ],
    tags: ["C++", "Vulkan"],
    date: "Apr 2021",
    images: [
      "/gallery/parallaxOccludeMap.jpg",
      "/gallery/base.jpg",
      "/gallery/normalMap.jpg",
      "/gallery/5_layerStep.jpg",
      "/gallery/30_layerStep.jpg",
    ],
    captions: [
      "Parallax Occlude Map",
      "Plain texture",
      "Albedo with normal map",
      "5 layers for depth check",
      "30 layers for depth check",
    ],
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
          {/* EDIT: your name */}
          <p
            className="leading-none italic"
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(3rem, 9vw, 6rem)",
              fontWeight: 700,
              color: "#B87333",
            }}
          >
            Leon Chen
          </p>

          {/* EDIT: your role/title */}
          <p
            className="font-bold text-[#888] leading-none mt-2 mb-8"
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 500,
            }}
          >
            Game developer
          </p>

          {/* EDIT: your specialization subtitle */}
          {/* <p
            className="text-lg text-[#888] mb-10"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 500 }}
          >
            Game Development
          </p> */}

          <a
            href="#projects"
            className="inline-block self-start px-8 py-3 border border-[#B87333] text-[#B87333] text-sm font-semibold tracking-widest uppercase
                       hover:bg-[#B87333] hover:text-[#1c1c1c]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/50
                       active:opacity-80"
            style={{
              fontFamily: "var(--font-outfit)",
              transition: "background-color 0.25s ease, color 0.25s ease",
            }}
          >
            Check projects
          </a>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section
          id="about"
          className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 pb-24"
        >
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#B87333",
            }}
          >
            About Me
          </h2>

          {/* EDIT: your bio paragraph */}
          <p
            className="mt-6 mb-10 text-[#888] leading-relaxed"
            style={{ fontFamily: "var(--font-outfit)", fontSize: "1.3rem", fontWeight: 400 }}
          >
            I&apos;m a game developer who believes in the magic of games — creating unique 
            experiences that can deeply shape players' consciousness.

            Visual detail, user experience and performance are my passion. I’d be excited to 
            contribute my skills in Unity and Unreal Engine to your team.
            Feel free to explore my games and graphics projects below.
          </p>

          {/* Skills list — edit SKILLS array at the top of this file */}
          {/* <div className="grid grid-cols-2 gap-x-16 gap-y-2 max-w-xl">
            {SKILLS.map((skill, i) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="font-mono text-sm" style={{ color: "#B87333", minWidth: "1.6rem" }}>
                  {i + 1}
                </span>
                <span className="font-mono text-sm" style={{ color: "#B87333" }}>&gt;</span>
                <span className="text-sm text-[#aaa]" style={{ fontFamily: "var(--font-outfit)" }}>
                  {skill}
                </span>
              </div>
            ))}
          </div> */}
        </section>

        {/* ── Portfolio ──────────────────────────────────────── */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#B87333",
            }}
          >
            Projects
          </h2>

          {/* EDIT: portfolio intro paragraph */}
          <p
            className="mt-6 mb-10 max-w-2xl text-[#888] leading-relaxed"
            style={{ fontFamily: "var(--font-outfit)", fontSize: "1rem" }}
          >
            All the projects are built with custom self-crafted graphic engines.
          </p>

          {/* Projects — edit PROJECTS array at the top of this file */}
          <div className="flex flex-col gap-14">
            {PROJECTS.map((project) => (
              <article key={project.title} className="grid md:grid-cols-2 gap-8 items-start">
                {project.youtube ? (
                  <div className="flex flex-col gap-3">
                    <div className="relative overflow-hidden border border-[#2a2a2a]" style={{ aspectRatio: "16/9" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtube}`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block self-start px-8 py-3 border border-[#B87333] text-[#B87333] text-sm font-semibold tracking-widest uppercase hover:bg-[#B87333] hover:text-[#1c1c1c] focus-visible:outline-none active:opacity-80"
                        style={{ fontFamily: "var(--font-outfit)", transition: "background-color 0.25s ease, color 0.25s ease" }}
                      >
                        {project.link.label}
                      </a>
                    )}
                  </div>
                ) : (
                  <ProjectImageGallery images={project.images ?? []} captions={project.captions} title={project.title} />
                )}

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[#888] px-2 py-1"
                        style={{ fontSize: "1.125rem", border: "1px solid #B87333" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-bold text-[#e0e0e0] mb-3"
                    style={{ fontFamily: "var(--font-outfit)", fontSize: "1.875rem" }}
                  >
                    {project.title}
                  </h3>

                  <ul className="mb-5 flex flex-col gap-1.5">
                    {project.description.map((point) => (
                      <li key={point} className="flex items-baseline gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#777] shrink-0 translate-y-[-3px]" />
                        <span
                          className="text-[#777] leading-relaxed"
                          style={{ fontFamily: "var(--font-outfit)", fontSize: "1.3rem" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className="font-mono"
                    style={{ color: "#B87333", fontSize: "1.125rem" }}
                  >
                    {project.date}
                  </p>
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
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#B87333",
            }}
          >
            Contact Me
          </h2>

          {/* EDIT: contact intro text */}
          <p
            className="mt-6 mb-10 max-w-lg text-[#888] leading-relaxed"
            style={{ fontFamily: "var(--font-outfit)", fontSize: "1rem" }}
          >
            Interested in working together or just want to say hi? Feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* EDIT: update href with your LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/leonchenyt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#B87333] text-[#B87333] text-sm font-semibold tracking-widest uppercase
                         hover:bg-[#B87333] hover:text-[#1c1c1c]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/50
                         active:opacity-80"
              style={{ fontFamily: "var(--font-outfit)", transition: "background-color 0.25s ease, color 0.25s ease" }}
            >
              LinkedIn
            </a>

            {/* EDIT: update href with your email address */}
            <a
              href="mailto:leonchenyt@gmail.com"
              className="inline-block px-8 py-3 border border-[#B87333] text-[#B87333] text-sm font-semibold tracking-widest uppercase
                         hover:bg-[#B87333] hover:text-[#1c1c1c]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/50
                         active:opacity-80"
              style={{ fontFamily: "var(--font-outfit)", transition: "background-color 0.25s ease, color 0.25s ease" }}
            >
              Email
            </a>
          </div>

          {/* EDIT: footer credit line */}
          <footer className="mt-20 text-sm text-[#3a3a3a] italic" style={{ fontFamily: "var(--font-outfit)" }}>
            Designed &amp; Built by Leon &copy;2024 – {new Date().getFullYear()}
          </footer>
        </section>

      </main>
    </div>
  );
}
