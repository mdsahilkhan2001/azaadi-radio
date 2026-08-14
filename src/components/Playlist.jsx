import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import songs from "../data/songs";
import PlaylistItem from "./PlaylistItem";

export default function Playlist({ player, isOpen, onClose }) {
  const { currentIndex, isPlaying, selectSong } = player;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="playlist"
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-scrim/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:max-w-2xl max-h-[88vh] sm:max-h-[80vh] glass rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="absolute inset-x-0 top-0 h-px tricolor-line animate-tricolor" />

            <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-8 pb-4 shrink-0">
              <div>
                <p className="text-[11px] tracking-[0.35em] uppercase text-freedom-green-light mb-2">
                  The Playlist
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-parchment">
                  THE AZADI PLAYLIST
                </h2>
                <p className="mt-2 font-serif italic text-sm sm:text-base text-parchment/60">
                  Songs that celebrate the spirit of India.
                </p>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 p-2 rounded-full text-parchment/70 hover:text-parchment hover:bg-parchment/10 transition-colors"
                aria-label="Close playlist"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 sm:px-8 pb-8 flex flex-col gap-2.5">
              {songs.map((song, index) => (
                <PlaylistItem
                  key={song.id}
                  song={song}
                  index={index}
                  isActive={index === currentIndex}
                  isPlaying={isPlaying}
                  onSelect={() => selectSong(index)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
