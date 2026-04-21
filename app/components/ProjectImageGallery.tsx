"use client";

import { useEffect, useState, useCallback } from "react";

interface Props {
  images: string[];
  captions?: string[];
  title: string;
}

export default function ProjectImageGallery({ images, captions = [], title }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden border border-[#2a2a2a] cursor-pointer group"
        onClick={() => { setCurrent(0); setOpen(true); }}
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto block"
          style={{ transition: "opacity 0.2s ease" }}
        />
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100"
          style={{ transition: "opacity 0.2s ease" }}
        >
          <span
            className="text-white text-sm font-semibold tracking-widest uppercase border border-white/40 px-4 py-2"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            View Gallery
          </span>
        </div>
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-[#B87333] text-xs px-2 py-1 font-mono">
            ⊞ {images.length}
          </div>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setOpen(false)}
        >
          {/* Top bar: counter left, close right — pulled inward from edges */}
          <div
            className="absolute top-6 flex items-center justify-between z-10"
            style={{ width: "min(900px, 80vw)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm text-[#555] font-mono">
              {current + 1} / {images.length}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#888] hover:text-white focus-visible:outline-none leading-none"
              style={{ fontSize: "2.4rem", transition: "color 0.2s ease" }}
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>

          {/* Image + nav */}
          <div
            className="relative flex items-center justify-center w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[current]}
              alt={captions[current] ?? `${title} — image ${current + 1}`}
              className="max-w-full object-contain border border-[#2a2a2a]"
              style={{ maxHeight: "65vh" }}
            />

            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#666] hover:text-white border border-[#333] hover:border-[#B87333] focus-visible:outline-none"
                style={{ transition: "color 0.2s ease, border-color 0.2s ease" }}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#666] hover:text-white border border-[#333] hover:border-[#B87333] focus-visible:outline-none"
                style={{ transition: "color 0.2s ease, border-color 0.2s ease" }}
                aria-label="Next image"
              >
                ›
              </button>
            )}
          </div>

          {/* Caption */}
          <div
            className="mt-4 text-center"
            style={{ width: "min(900px, 80vw)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {captions[current] && (
              <p
                className="text-sm text-[#777]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {captions[current]}
              </p>
            )}
          </div>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div
              className="mt-5 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-1.5 h-1.5 rounded-full focus-visible:outline-none"
                  style={{
                    backgroundColor: i === current ? "#B87333" : "#444",
                    transition: "background-color 0.2s ease",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
