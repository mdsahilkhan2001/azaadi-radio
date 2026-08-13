export default function AshokaChakra({ className = "" }) {
  const spokes = Array.from({ length: 24 });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {spokes.map((_, i) => {
        const angle = (i * 360) / spokes.length;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="12"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </svg>
  );
}
