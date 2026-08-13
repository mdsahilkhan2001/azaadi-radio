import { motion } from "framer-motion";

const EVENTS = [
  { year: "1857", title: "First War of Independence", desc: "The uprising that lit the first spark of resistance against colonial rule." },
  { year: "1919", title: "Jallianwala Bagh", desc: "A tragedy that hardened the nation's resolve for self-rule." },
  { year: "1930", title: "Dandi March", desc: "Gandhi's Salt March turned civil disobedience into a mass movement." },
  { year: "1942", title: "Quit India Movement", desc: "A unified call demanding an end to British rule in India." },
  { year: "1947", title: "India Becomes Independent", desc: "At midnight on 15 August, India awoke to life and freedom." },
];

export default function FreedomTimeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.35em] uppercase text-saffron-light mb-4"
        >
          The Timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-parchment"
        >
          THE JOURNEY TO FREEDOM
        </motion.h2>
      </div>

      {/* Desktop / tablet horizontal timeline */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-px tricolor-line animate-tricolor" />
          <div className="grid grid-cols-5 gap-6">
            {EVENTS.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="w-3 h-3 rounded-full bg-saffron ring-4 ring-saffron/20 mb-6" />
                <div className="rounded-2xl glass px-4 py-5 w-full">
                  <p className="font-display text-2xl text-saffron-light">{e.year}</p>
                  <p className="mt-2 text-sm font-medium text-parchment">{e.title}</p>
                  <p className="mt-2 text-xs text-parchment/55 leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden max-w-md mx-auto relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-px tricolor-line animate-tricolor" />
        <div className="flex flex-col gap-8">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-saffron ring-4 ring-saffron/20" />
              <p className="font-display text-xl text-saffron-light">{e.year}</p>
              <p className="mt-1 text-sm font-medium text-parchment">{e.title}</p>
              <p className="mt-1 text-xs text-parchment/55 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
