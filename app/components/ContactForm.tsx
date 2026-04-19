"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-8">
      <FormField label="Name" type="text" placeholder="Your name" />
      <FormField label="Email" type="email" placeholder="your@email.com" />

      <div className="flex flex-col gap-3">
        <label
          className="text-[10px] tracking-[0.35em] uppercase text-[#444]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Message
        </label>
        <textarea
          rows={5}
          placeholder="What's on your mind?"
          className="bg-transparent border border-[#2a2a2a] text-[#999] text-[14px] px-4 py-3.5 resize-none placeholder:text-[#383838] focus:outline-none focus:border-[#C8A96E]/40"
          style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "1.7",
            transition: "border-color 0.25s ease" }}
        />
      </div>

      <button
        type="submit"
        className="self-start text-xs tracking-[0.3em] uppercase text-[#e8e8e8] border border-[#e8e8e8]/15 px-8 py-4
                   hover:border-[#C8A96E]/55 hover:text-[#C8A96E]
                   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96E]/40
                   active:opacity-70"
        style={{ fontFamily: "var(--font-outfit)",
          transition: "color 0.25s ease, border-color 0.25s ease" }}
      >
        Send Message
      </button>
    </form>
  );
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <label
        className="text-[10px] tracking-[0.35em] uppercase text-[#444]"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#2a2a2a] text-[#999] text-[14px] px-1 py-3 placeholder:text-[#383838] focus:outline-none focus:border-[#C8A96E]/40"
        style={{ fontFamily: "var(--font-dm-sans)",
          transition: "border-color 0.25s ease" }}
      />
    </div>
  );
}
