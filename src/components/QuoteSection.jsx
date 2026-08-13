import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    text: "Azaadi sirf ek din ka jashn nahi, balki un lakhon kahaniyon ki yaad hai jinhone humein yeh din diya.",
    author: "The Spirit of India",
  },
  {
    text: "Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?",
    author: "Mahatma Gandhi",
  },
  {
    text: "Sarfaroshi ki tamanna ab hamare dil mein hai, dekhna hai zor kitna baazu-e-qatil mein hai.",
    author: "Ram Prasad Bismil",
  },
  {
    text: "A nation's culture resides in the hearts and in the soul of its people.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Tum mujhe khoon do, main tumhe azaadi doonga.",
    author: "Netaji Subhas Chandra Bose",
  },
];

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const quote = QUOTES[index];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto rounded-3xl glass px-6 sm:px-14 py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-x-10 top-0 h-px tricolor-line animate-tricolor" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed text-parchment/90">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-saffron-light">
              — {quote.author}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-10 bottom-0 h-px tricolor-line animate-tricolor" />
      </div>
    </section>
  );
}
