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

  const midTicks = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 15 - 90) * (Math.PI / 180);
    return {
      x1: cx + 223 * Math.cos(angle),
      y1: cy + 223 * Math.sin(angle),
      x2: cx + 230 * Math.cos(angle),
      y2: cy + 230 * Math.sin(angle),
    };
  });

  const notches = Array.from({ length: 6 }).map((_, i) => {
    const base = (i * 60 + 30) * (Math.PI / 180);
    const spread = 9 * (Math.PI / 180);
    const x1 = cx + 195 * Math.cos(base - spread);
    const y1 = cy + 195 * Math.sin(base - spread);
    const x2 = cx + 195 * Math.cos(base + spread);
    const y2 = cy + 195 * Math.sin(base + spread);
    const xt = cx + 176 * Math.cos(base);
    const yt = cy + 176 * Math.sin(base);
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} L ${xt.toFixed(2)} ${yt.toFixed(2)} Z`;
  });

  const outerTeeth = Array.from({ length: 6 }).map((_, i) => {
    const base = (i * 60) * (Math.PI / 180);
    const spread = 7 * (Math.PI / 180);
    const x1 = cx + 144 * Math.cos(base - spread);
    const y1 = cy + 144 * Math.sin(base - spread);
    const x2 = cx + 144 * Math.cos(base + spread);
    const y2 = cy + 144 * Math.sin(base + spread);
    const xt = cx + 163 * Math.cos(base);
    const yt = cy + 163 * Math.sin(base);
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} L ${xt.toFixed(2)} ${yt.toFixed(2)} Z`;
  });

  const runeSquares = [0, 90, 180, 270].map((deg) => {
    const angle = (deg - 90) * (Math.PI / 180);
    const r = 250;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y, deg };
  });

  const radialBridges = [0, 60, 120, 180, 240, 300].map((deg) => {
    const angle = deg * (Math.PI / 180);
    return {
      x1: (cx + 198 * Math.cos(angle)).toFixed(2),
      y1: (cy + 198 * Math.sin(angle)).toFixed(2),
      x2: (cx + 225 * Math.cos(angle)).toFixed(2),
      y2: (cy + 225 * Math.sin(angle)).toFixed(2),
    };
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
      <g opacity="0.14" stroke="#C8A96E" fill="#C8A96E">
        {/* Outermost ring */}
        <circle cx={cx} cy={cy} r={278} strokeWidth="2" fill="none" />
        <circle cx={cx} cy={cy} r={272} strokeWidth="0.5" fill="none" strokeDasharray="5 10" />

        {/* Outer tick marks */}
        {outerTicks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            strokeWidth={t.major ? "2.5" : "1"}
          />
        ))}

        {/* Rune squares at cardinal points */}
        {runeSquares.map(({ x, y, deg }, i) => (
          <g key={i} transform={`rotate(${deg}, ${x}, ${y})`}>
            <rect x={x - 6} y={y - 6} width="12" height="12" fill="none" strokeWidth="1" />
            <rect x={x - 3} y={y - 3} width="6" height="6" fill="#C8A96E" opacity="0.6" />
          </g>
        ))}

        {/* Second ring with mid ticks */}
        <circle cx={cx} cy={cy} r={230} strokeWidth="1.5" fill="none" />
        {midTicks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="1" />
        ))}

        {/* Radial bridge lines between ring 2 and notch ring */}
        {radialBridges.map((b, i) => (
          <line key={i} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} strokeWidth="1.5" />
        ))}

        {/* Notched ring (gear teeth pointing inward) */}
        <circle cx={cx} cy={cy} r={195} strokeWidth="1" fill="none" />
        {notches.map((d, i) => (
          <path key={i} d={d} strokeWidth="0.5" opacity="0.9" />
        ))}

        {/* Inner accent ring */}
        <circle cx={cx} cy={cy} r={170} strokeWidth="0.5" fill="none" strokeDasharray="3 9" />

        {/* Inner solid ring */}
        <circle cx={cx} cy={cy} r={144} strokeWidth="1.5" fill="none" />

        {/* Outer teeth pointing away from center */}
        {outerTeeth.map((d, i) => (
          <path key={i} d={d} strokeWidth="0.5" opacity="0.9" />
        ))}

        {/* Eye ring */}
        <circle cx={cx} cy={cy} r={80} strokeWidth="1" fill="none" />
        <circle cx={cx} cy={cy} r={72} strokeWidth="0.5" fill="none" strokeDasharray="4 8" />

        {/* Sheikah Eye — horizontal diamond */}
        <path d="M 238 300 L 300 256 L 362 300 L 300 344 Z" strokeWidth="1.5" fill="none" />
        {/* Iris ring */}
        <circle cx={cx} cy={cy} r={22} strokeWidth="1" fill="none" />
        {/* Pupil */}
        <circle cx={cx} cy={cy} r={8} fill="#C8A96E" strokeWidth="0" />
        {/* Teardrop below */}
        <path
          d="M 300 344 Q 284 374 300 406 Q 316 374 300 344"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Teardrop inner line detail */}
        <path d="M 300 352 Q 294 372 300 390" strokeWidth="0.5" fill="none" />

        {/* 6 radial accent lines inside eye ring */}
        {[30, 90, 150, 210, 270, 330].map((deg, i) => {
          const angle = deg * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={(cx + 26 * Math.cos(angle)).toFixed(2)}
              y1={(cy + 26 * Math.sin(angle)).toFixed(2)}
              x2={(cx + 68 * Math.cos(angle)).toFixed(2)}
              y2={(cy + 68 * Math.sin(angle)).toFixed(2)}
              strokeWidth="0.75"
              opacity="0.6"
            />
          );
        })}
      </g>
    </svg>
  );
}
