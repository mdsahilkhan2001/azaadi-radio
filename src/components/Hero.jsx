import { useMemo } from "react";
import { motion } from "framer-motion";
import AshokaChakra from "./AshokaChakra";
import MusicPlayer from "./MusicPlayer";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ player, onOpenPlaylist }) {
  const embers = useMemo(() => {
    // Keep embers out of the central column (roughly 18%-82% wide,
    // 12%-88% tall) so they never drift across the headline or player.
    const inCenter = (left, top) =>
      left > 18 && left < 82 && top > 12 && top < 88;

    return Array.from({ length: 26 }).map((_, i) => {
      let left, top;
      do {
        left = Math.random() * 100;
        top = 8 + Math.random() * 84;
      } while (inCenter(left, top));

      return {
        id: i,
        left,
        top,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
      };
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_#121a2e_0%,_#06070c_60%)]" />
      <div
        className="absolute inset-0 -z-20 bg-[url('/images/hero-red-fort-flag.jpg')] bg-cover bg-center opacity-45"
        style={{ filter: "saturate(0.85) brightness(0.7)" }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Ashoka Chakra */}
      <AshokaChakra className="absolute w-[130vw] max-w-[900px] aspect-square text-parchment/[0.06] animate-chakra-spin pointer-events-none" />

      {/* Embers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {embers.map((e) => (
          <span
            key={e.id}
            className="absolute rounded-full bg-saffron animate-ember"
            style={{
              left: `${e.left}%`,
              top: `${e.top}%`,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
              animationDuration: `${e.duration}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-saffron-light/80 mb-8"
        >
          Celebrating the Spirit of India
        </motion.p>

        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <h1 className="sr-only">आजादी</h1>
          <svg
            aria-hidden="true"
            viewBox="0 0 700 220"
            className="w-[300px] sm:w-[460px] md:w-[600px] h-auto"
          >
            <defs>
              <linearGradient id="azadiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-saffron)" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="var(--color-freedom-green)" />
              </linearGradient>
            </defs>
            <text
              x="350"
              y="165"
              textAnchor="middle"
              fill="url(#azadiGradient)"
              style={{ fontFamily: "var(--font-display)", fontSize: "150px" }}
            >
              आजादी
            </text>
          </svg>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-display leading-[0.95] text-parchment/90 text-[2.4rem] sm:text-[3.5rem] md:text-[4.5rem] -mt-2 sm:-mt-4"
        >
          का जश्न
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <p className="font-serif italic text-lg sm:text-xl text-parchment/70 tracking-wide">
            15 August 1947 — 2026
          </p>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-freedom-green-light">
            79 Years of Freedom
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full mt-10 sm:mt-12">
          <MusicPlayer player={player} onOpenPlaylist={onOpenPlaylist} />
          {!player.isPlaying && (
            <p className="mt-4 text-xs tracking-[0.25em] uppercase text-parchment/50">
              Press Play &amp; Celebrate India
            </p>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-transparent via-parchment/40 to-transparent"
      />
    </section>
  );
}
