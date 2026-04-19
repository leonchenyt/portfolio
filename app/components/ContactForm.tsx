"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 max-w-xl">
      <input
        type="text"
        placeholder="Full name"
        className="w-full px-5 py-4 text-[#e0e0e0] text-sm font-semibold placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-[#E07070]/40"
        style={{
          backgroundColor: "#252525",
          border: "none",
          fontFamily: "var(--font-outfit)",
        }}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-5 py-4 text-[#e0e0e0] text-sm font-semibold placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-[#E07070]/40"
        style={{
          backgroundColor: "#252525",
          border: "none",
          fontFamily: "var(--font-outfit)",
        }}
      />
      <textarea
        rows={6}
        placeholder="Message"
        className="w-full px-5 py-4 text-[#e0e0e0] text-sm font-semibold placeholder:text-[#666] resize-none focus:outline-none focus:ring-1 focus:ring-[#E07070]/40"
        style={{
          backgroundColor: "#252525",
          border: "none",
          fontFamily: "var(--font-outfit)",
        }}
      />
      <button
        type="submit"
        className="self-start px-8 py-3 border border-[#e0e0e0]/20 text-[#e0e0e0] text-sm font-semibold tracking-widest uppercase
                   hover:border-[#E07070] hover:text-[#E07070]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07070]/40
                   active:opacity-70"
        style={{
          fontFamily: "var(--font-outfit)",
          transition: "border-color 0.25s ease, color 0.25s ease",
        }}
      >
        Send
      </button>
    </form>
  );
}
