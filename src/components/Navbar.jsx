import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#india" },
  { label: "Songs", href: "#playlist" },
  { label: "India", href: "#timeline" },
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 glass ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <a
          href="#home"
          className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-parchment/70 font-medium"
        >
          <span className="tricolor-line h-2 w-2 rounded-full animate-tricolor" />
          15 August
        </a>

        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg sm:text-xl tracking-wide text-parchment mx-auto sm:mx-0"
        >
          <Radio size={18} className="text-saffron" />
          <span>
            AZAADI <span className="text-saffron">RADIO</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm text-parchment/80 hover:text-parchment hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-parchment p-2 rounded-full hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 w-[calc(100%-2rem)] max-w-6xl rounded-3xl glass p-3 flex flex-col gap-1"
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm text-parchment/85 hover:text-parchment hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
