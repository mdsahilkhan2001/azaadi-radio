import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_COMMUNITY_URL } from "../config/links";

const DISMISS_KEY = "azaadi-whatsapp-widget-dismissed";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.58 3.83 1.58 5.39L2 22l4.75-1.55a9.96 9.96 0 0 0 5.26 1.49c5.53 0 10.01-4.48 10.01-10.01C22.02 6.48 17.54 2 12.01 2Zm5.85 14.27c-.25.7-1.24 1.29-2.02 1.46-.53.11-1.24.2-3.6-.77-2.96-1.23-4.86-4.24-5.01-4.44-.14-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.16 1.03-2.45.24-.25.55-.35.83-.35.19 0 .35.01.5.01.16.01.38-.06.6.45.24.55.8 1.9.86 2.04.07.14.11.31.02.5-.09.19-.14.3-.27.46-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.17 1.52 1.9 1.05.94 1.92 1.24 2.2 1.38.28.14.45.12.62-.07.17-.19.71-.82.9-1.1.19-.28.38-.23.63-.14.26.09 1.62.77 1.9.91.28.14.46.2.53.32.07.12.07.68-.18 1.38Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 sm:max-w-sm"
        >
          <div className="relative glass rounded-2xl pl-4 pr-3 py-3 sm:pl-5 sm:pr-4 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-[0_16px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />

            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
            >
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-on-accent">
                <WhatsAppIcon className="w-6 h-6" />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-medium text-parchment truncate">
                  Connect & Build Together
                </span>
                <span className="block text-xs text-parchment/55 truncate">
                  Chat with the developer for support & updates
                </span>
              </span>
            </a>

            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-[#25D366] text-on-accent hover:brightness-110 transition-all"
            >
              Join Free
            </a>

            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-ink border border-parchment/10 text-parchment/60 hover:text-parchment transition-colors"
            >
              <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
