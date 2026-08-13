import { Radio } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5 15 12l-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Playlist", href: "#playlist" },
  { label: "About", href: "#india" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 pt-16 pb-8">
      <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl text-parchment">
          <Radio size={20} className="text-saffron" />
          AZAADI <span className="text-saffron">RADIO</span>
        </a>

        <p className="text-sm text-parchment/55 max-w-sm">
          Celebrating the spirit of India.
        </p>

        <p className="text-xs tracking-[0.25em] uppercase text-parchment/40">
          15 August 1947 — 2026
        </p>

        <div className="flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm text-parchment/70 hover:text-parchment transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-parchment/70 hover:text-saffron transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-parchment/70 hover:text-saffron transition-colors"
            aria-label="YouTube"
          >
            <YoutubeIcon />
          </a>
        </div>

        <p className="text-xs text-parchment/35 mt-4">
          Made with ❤️ for India
        </p>

        <div className="w-full max-w-xs mt-6 pt-6 border-t border-white/5">
          <p className="text-center font-serif text-[11px] tracking-[0.15em] text-parchment/30 hover:text-saffron-light/70 transition-colors duration-300 cursor-default">
            Powered by SGS CodeWorks
          </p>
        </div>
      </div>
    </footer>
  );
}
