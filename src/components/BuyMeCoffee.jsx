import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, X } from "lucide-react";
import CoffeeCupIllustration from "./CoffeeCupIllustration";
import { BUY_ME_A_COFFEE_URL } from "../config/links";

const isUpiLink = BUY_ME_A_COFFEE_URL.startsWith("upi:");

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function BuyMeCoffee() {
  const [showQrModal, setShowQrModal] = useState(false);

  const handleClick = (e) => {
    if (!isUpiLink) return;
    if (isMobileDevice()) return;

    // No UPI app can catch this link on desktop — navigating would just
    // dump the raw upi:// URL into the address bar. Show the QR code to
    // scan instead.
    e.preventDefault();
    setShowQrModal(true);
  };

  useEffect(() => {
    if (!showQrModal) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowQrModal(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showQrModal]);

  return (
    <section className="relative py-16 sm:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
          className="group relative glass rounded-3xl px-6 sm:px-12 py-10 sm:py-12 overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(255,153,51,0.16)]"
        >
          <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />
          <div className="absolute inset-x-0 bottom-0 h-px tricolor-line animate-tricolor" />

          {/* ambient warm glow */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-freedom-green/[0.06] blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Illustration */}
            <div className="relative shrink-0 w-36 sm:w-40 md:w-44 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/20 via-transparent to-freedom-green/10 blur-xl" />
              <div className="absolute inset-4 rounded-full border border-parchment/10" />
              <CoffeeCupIllustration className="relative w-full h-auto drop-shadow-[0_12px_28px_rgba(255,153,51,0.2)]" />
            </div>

            {/* Center: label, heading, text, button */}
            <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
              <p className="text-[11px] tracking-[0.35em] uppercase text-saffron-light">
                Support the Project
              </p>

              <h2 className="font-display text-2xl sm:text-3xl text-parchment flex items-center gap-2.5">
                Buy Me a Coffee
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-saffron to-orange-600 text-on-accent shrink-0">
                  <Coffee size={15} strokeWidth={2.25} />
                </span>
              </h2>

              <p className="text-sm sm:text-base text-parchment/65 leading-relaxed max-w-sm">
                Enjoying Azaadi Radio? Support the creator and help me build
                more creative experiences.
              </p>

              <a
                href={BUY_ME_A_COFFEE_URL || "#"}
                onClick={handleClick}
                {...(BUY_ME_A_COFFEE_URL.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium bg-gradient-to-br from-saffron to-orange-600 text-on-accent shadow-[0_8px_24px_rgba(255,153,51,0.35)] hover:shadow-[0_10px_32px_rgba(255,153,51,0.5)] hover:-translate-y-0.5 hover:brightness-110 transition-all"
              >
                <Coffee size={16} />
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showQrModal && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-scrim/85 backdrop-blur-md"
              onClick={() => setShowQrModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass rounded-3xl px-8 py-8 sm:px-10 sm:py-10 flex flex-col items-center gap-4 max-w-xs w-full"
            >
              <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />

              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-parchment/70 hover:text-parchment hover:bg-parchment/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <p className="font-display text-xl text-parchment mt-2 flex items-center gap-2">
                Buy Me a Coffee
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-saffron to-orange-600 text-on-accent shrink-0">
                  <Coffee size={13} strokeWidth={2.25} />
                </span>
              </p>

              {/* Always a light/white surface — bg-mist stays a light cream
                 in both themes, unlike bg-parchment, so the QR keeps its
                 required light container and stays fully scannable. */}
              <div className="rounded-2xl bg-mist p-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <img
                  src="/images/buy-me-coffee-qr.png"
                  alt="Scan QR code to support Sahil Khan"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                />
              </div>

              <p className="text-[11px] tracking-[0.2em] uppercase text-parchment/50">
                Scan to Support
              </p>
              <p className="text-xs text-parchment/50 text-center">
                Open any UPI app on your phone and scan this code.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
