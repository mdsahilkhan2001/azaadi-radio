import { useMemo } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Volume1,
  VolumeX,
  ListMusic,
} from "lucide-react";

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function MusicPlayer({ player, onOpenPlaylist }) {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    next,
    prev,
    seek,
    changeVolume,
  } = player;

  const progressPct = useMemo(() => {
    if (!duration) return 0;
    return (currentTime / duration) * 100;
  }, [currentTime, duration]);

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  if (!currentSong) return null;

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl glass p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-4">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-1 ring-white/10 shrink-0"
          loading="lazy"
        />

        <div className="min-w-0 flex-1">
          <p className="font-display text-base sm:text-lg text-parchment truncate">
            {currentSong.title}
          </p>
          <p className="text-xs sm:text-sm text-parchment/60 truncate">
            {currentSong.artist}
          </p>

          <div className="mt-2 flex items-center gap-2 text-[11px] text-parchment/50 tabular-nums">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="flex-1 accent-saffron"
              aria-label="Seek"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={onOpenPlaylist}
          className="hidden sm:flex p-2 rounded-full text-parchment/70 hover:text-parchment hover:bg-white/10 transition-colors shrink-0"
          aria-label="Open playlist"
        >
          <ListMusic size={18} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 w-28">
          <VolumeIcon size={16} className="text-parchment/60 shrink-0" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => changeVolume(Number(e.target.value))}
            className="flex-1 accent-freedom-green"
            aria-label="Volume"
          />
        </div>

        <div className="flex-1 flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className="p-2 text-parchment/75 hover:text-parchment transition-colors"
            aria-label="Previous song"
          >
            <SkipBack size={22} fill="currentColor" />
          </button>

          <button
            onClick={togglePlay}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-orange-600 text-ink animate-glow"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={24} fill="currentColor" />
            ) : (
              <Play size={24} fill="currentColor" className="ml-0.5" />
            )}
          </button>

          <button
            onClick={next}
            className="p-2 text-parchment/75 hover:text-parchment transition-colors"
            aria-label="Next song"
          >
            <SkipForward size={22} fill="currentColor" />
          </button>
        </div>

        <button
          onClick={onOpenPlaylist}
          className="sm:hidden p-2 rounded-full text-parchment/70 hover:text-parchment hover:bg-white/10 transition-colors"
          aria-label="Open playlist"
        >
          <ListMusic size={18} />
        </button>
        <div className="hidden sm:block w-28" />
      </div>
    </div>
  );
}
