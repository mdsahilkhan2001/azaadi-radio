import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function PlaylistItem({ song, index, isActive, isPlaying, onSelect }) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ x: 4 }}
      className={`w-full flex items-center gap-4 rounded-2xl px-3 sm:px-4 py-3 text-left transition-colors border ${
        isActive
          ? "bg-parchment/10 border-saffron/40"
          : "bg-parchment/[0.02] border-parchment/5 hover:bg-parchment/5"
      }`}
    >
      <span
        className={`w-6 text-sm tabular-nums shrink-0 ${
          isActive ? "text-saffron" : "text-parchment/40"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <img
        src={song.cover}
        alt={song.title}
        loading="lazy"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover ring-1 ring-parchment/10 shrink-0"
      />

      <div className="min-w-0 flex-1">
        <p
          className={`truncate font-medium text-sm sm:text-base ${
            isActive ? "text-parchment" : "text-parchment/85"
          }`}
        >
          {song.title}
        </p>
        <p className="truncate text-xs sm:text-sm text-parchment/50">
          {song.artist}
        </p>
      </div>

      <span
        className={`flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-colors ${
          isActive
            ? "bg-saffron text-on-accent"
            : "bg-parchment/5 text-parchment/70 group-hover:bg-parchment/10"
        }`}
      >
        {isActive && isPlaying ? (
          <Pause size={14} fill="currentColor" />
        ) : (
          <Play size={14} fill="currentColor" className="ml-0.5" />
        )}
      </span>
    </motion.button>
  );
}
