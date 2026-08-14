import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SGS_CODEWORKS_URL } from "../config/links";

export default function PoweredBy() {
  return (
    <section className="relative py-24 sm:py-28 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl px-6 sm:px-12 py-12 sm:py-14 relative overflow-hidden"
        >
          <div className="absolute inset-x-10 top-0 h-px tricolor-line animate-tricolor" />

          <p className="text-[11px] tracking-[0.35em] uppercase text-freedom-green-light mb-4">
            Powered By
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-parchment mb-5">
            SGS CODEWORKS
          </h2>
          <p className="text-sm sm:text-base text-parchment/65 leading-relaxed max-w-lg mx-auto">
            SGS CodeWorks is a software development initiative focused on
            building modern websites, web applications, mobile applications,
            automation solutions, and custom software experiences.
          </p>

          <a
            href={SGS_CODEWORKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-parchment/15 text-parchment/85 hover:bg-parchment/10 hover:text-parchment transition-colors"
          >
            Visit SGS CodeWorks
            <ExternalLink size={15} />
          </a>

          <div className="absolute inset-x-10 bottom-0 h-px tricolor-line animate-tricolor" />
        </motion.div>
      </div>
    </section>
  );
}
