import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_URL, GITHUB_URL } from "../config/links";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Creator() {
  return (
    <section id="creator" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] tracking-[0.35em] uppercase text-saffron-light mb-4"
        >
          The Creator
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center font-display text-3xl sm:text-5xl md:text-6xl text-parchment mb-14 sm:mb-16"
        >
          BUILT WITH CODE.
          <br className="hidden sm:block" /> INSPIRED BY INDIA.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-center relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />

          <div className="flex justify-center md:justify-start">
            <img
              src="/images/sahil-khan-avatar.svg"
              alt="Sahil Khan"
              loading="lazy"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover ring-1 ring-parchment/10"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-parchment mb-1">
              Sahil Khan
            </h3>
            <p className="text-xs tracking-[0.25em] uppercase text-freedom-green-light mb-6">
              Software Engineer · Full Stack Developer
            </p>

            <div className="space-y-4 text-sm sm:text-base text-parchment/70 leading-relaxed">
              <p>
                Hi, I&apos;m Sahil Khan — a Software Engineer and Full Stack
                Developer who enjoys building modern web applications and
                creative digital experiences.
              </p>
              <p>
                Azaadi Radio is a personal creative project that combines my
                love for technology with the nostalgia, music, and emotions
                associated with India&apos;s Independence Day.
              </p>
              <p>
                I built this experience to turn a simple 15 August
                celebration into something interactive, memorable, and
                accessible on the web.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-br from-saffron to-orange-600 text-on-accent hover:brightness-110 transition-all"
              >
                Visit My Portfolio
                <ExternalLink size={15} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-parchment/15 text-parchment/85 hover:bg-parchment/10 hover:text-parchment transition-colors"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
