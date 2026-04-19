export default function ZeldaCircle() {
  const cx = 300, cy = 300;

  const outerTicks = Array.from({ length: 16 }).map((_, i) => {
    const angle = (i * 22.5 - 90) * (Math.PI / 180);
    return {
      x1: cx + 263 * Math.cos(angle),
      y1: cy + 263 * Math.sin(angle),
      x2: cx + 278 * Math.cos(angle),
      y2: cy + 278 * Math.sin(angle),
      major: i % 4 === 0,
    };
  });

  const notches = Array.from({ length: 6 }).map((_, i) => {
    const base = (i * 60 + 30) * (Math.PI / 180);
    const spread = 9 * (Math.PI / 180);
    const x1 = cx + 190 * Math.cos(base - spread);
    const y1 = cy + 190 * Math.sin(base - spread);
    const x2 = cx + 190 * Math.cos(base + spread);
    const y2 = cy + 190 * Math.sin(base + spread);
    const xt = cx + 172 * Math.cos(base);
    const yt = cy + 172 * Math.sin(base);
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} L ${xt.toFixed(2)} ${yt.toFixed(2)} Z`;
  });

  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.13" stroke="#C8A96E" fill="#C8A96E">

        {/* ── Outer ring + ticks ── */}
        <circle cx={cx} cy={cy} r={275} strokeWidth="1.5" fill="none" />
        {outerTicks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1}
            x2={t.x2} y2={t.y2}
            strokeWidth={t.major ? "2.5" : "1"}
          />
        ))}

        {/* ── Middle ring + notches (counter-rotates) ── */}
        <g className="zelda-middle-ring">
          <circle cx={cx} cy={cy} r={190} strokeWidth="1" fill="none" />
          {notches.map((d, i) => (
            <path key={i} d={d} strokeWidth="0.75" />
          ))}
        </g>

        {/* ── Eye ring ── */}
        <circle cx={cx} cy={cy} r={80} strokeWidth="1" fill="none" />

        {/* Sheikah eye diamond */}
        <path d="M 238 300 L 300 258 L 362 300 L 300 342 Z" strokeWidth="1.5" fill="none" />

        {/* Pupil */}
        <circle cx={cx} cy={cy} r={8} strokeWidth="0" />

        {/* Teardrop below */}
        <path
          d="M 300 342 Q 284 374 300 404 Q 316 374 300 342"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </svg>
  );
}
