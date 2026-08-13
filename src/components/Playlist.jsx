import { motion } from "framer-motion";
import songs from "../data/songs";
import PlaylistItem from "./PlaylistItem";

export default function Playlist({ player }) {
  const { currentIndex, isPlaying, selectSong } = player;

  return (
    <section id="playlist" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.35em] uppercase text-freedom-green-light mb-4"
        >
          The Playlist
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-parchment"
        >
          THE AZADI PLAYLIST
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-serif italic text-lg text-parchment/60"
        >
          Songs that celebrate the spirit of India.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
        {songs.map((song, index) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
          >
            <PlaylistItem
              song={song}
              index={index}
              isActive={index === currentIndex}
              isPlaying={isPlaying}
              onSelect={() => selectSong(index)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
