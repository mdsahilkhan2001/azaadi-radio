import { motion } from "framer-motion";

const ASPECTS = [
  { title: "Culture", desc: "A living tapestry of festivals, art and language.", image: "/images/india-culture.jpg" },
  { title: "Unity", desc: "One nation, bound together across every border.", image: "/images/india-unity.jpg" },
  { title: "Diversity", desc: "A thousand tongues singing the same anthem.", image: "/images/india-diversity.svg" },
  { title: "Freedom", desc: "Won with sacrifice, carried forward every day.", image: "/images/india-freedom.jpg" },
  { title: "Courage", desc: "The quiet strength behind every act of defiance.", image: "/images/india-courage.jpg" },
  { title: "Heritage", desc: "Centuries of memory etched into every street.", image: "/images/india-heritage.jpg" },
];

export default function IndiaSection() {
  return (
    <section id="india" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.35em] uppercase text-freedom-green-light mb-4"
        >
          This Is India
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-parchment"
        >
          ONE NATION. MANY STORIES.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-parchment/60 max-w-xl mx-auto"
        >
          From the mountains of Kashmir to the shores of Kanyakumari, India
          celebrates freedom in a thousand different ways.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        {ASPECTS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10"
          >
            <img
              src={a.image}
              alt={a.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 p-4 sm:p-5">
              <p className="font-display text-xl sm:text-2xl text-parchment">
                {a.title}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-parchment/60 leading-snug">
                {a.desc}
              </p>
            </div>
            <div className="absolute top-0 inset-x-0 h-1 tricolor-line animate-tricolor opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
