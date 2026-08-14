import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { PORTFOLIO_URL, YOUTUBE_URL } from "../config/links";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#india" },
  { label: "Songs", action: "playlist" },
  { label: "India", href: "#timeline" },
  { label: "Portfolio", href: PORTFOLIO_URL, external: true },
  { label: "YouTube", href: YOUTUBE_URL, external: true },
];

export default function Navbar({ onOpenPlaylist }) {
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
          {LINKS.map((link) =>
            link.action === "playlist" ? (
              <button
                key={link.label}
                onClick={onOpenPlaylist}
                className="px-4 py-2 rounded-full text-sm text-parchment/80 hover:text-parchment hover:bg-parchment/10 transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="px-4 py-2 rounded-full text-sm text-parchment/80 hover:text-parchment hover:bg-parchment/10 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <span className="w-px h-5 bg-parchment/15 mx-1" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="text-parchment p-2 rounded-full hover:bg-parchment/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
            {LINKS.map((link) =>
              link.action === "playlist" ? (
                <button
                  key={link.label}
                  onClick={() => {
                    setOpen(false);
                    onOpenPlaylist();
                  }}
                  className="text-left px-4 py-3 rounded-2xl text-sm text-parchment/85 hover:text-parchment hover:bg-parchment/10 transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm text-parchment/85 hover:text-parchment hover:bg-parchment/10 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
