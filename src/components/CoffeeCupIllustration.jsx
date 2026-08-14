import { motion } from "framer-motion";

const steamPaths = [
  "M70 78 C 66 66, 76 60, 72 48 C 68 36, 78 30, 74 20",
  "M100 78 C 96 64, 108 58, 103 44 C 98 30, 110 24, 105 12",
  "M130 78 C 126 66, 136 60, 132 48 C 128 36, 138 30, 134 20",
];

export default function CoffeeCupIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="cupBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a5a34" />
          <stop offset="100%" stopColor="#3a1e0f" />
        </linearGradient>
        <radialGradient id="coffeeSurface" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6b3a1f" />
          <stop offset="100%" stopColor="#22120a" />
        </radialGradient>
      </defs>

      {/* saucer */}
      <ellipse cx="100" cy="158" rx="62" ry="10" fill="var(--color-parchment)" fillOpacity="0.12" />
      <ellipse
        cx="100"
        cy="156"
        rx="58"
        ry="8"
        fill="none"
        stroke="var(--color-parchment)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* handle */}
      <path
        d="M148 96 C 172 96, 172 132, 148 132"
        fill="none"
        stroke="url(#cupBody)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* cup body */}
      <path
        d="M52 90 H148 L140 140 C 138 150, 128 156, 118 156 H82 C 72 156, 62 150, 60 140 Z"
        fill="url(#cupBody)"
        stroke="var(--color-parchment)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />

      {/* coffee surface */}
      <ellipse cx="100" cy="90" rx="48" ry="12" fill="url(#coffeeSurface)" />
      <ellipse
        cx="86"
        cy="87"
        rx="16"
        ry="4.5"
        fill="var(--color-parchment)"
        fillOpacity="0.18"
      />

      {/* rim */}
      <ellipse
        cx="100"
        cy="90"
        rx="48"
        ry="12"
        fill="none"
        stroke="var(--color-parchment)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />

      {/* steam */}
      {steamPaths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--color-parchment)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 0.5, 0], y: [6, -10, -18] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}
    </svg>
  );
}
