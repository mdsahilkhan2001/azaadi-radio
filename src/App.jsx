import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Playlist from "./components/Playlist";
import QuoteSection from "./components/QuoteSection";
import FreedomTimeline from "./components/FreedomTimeline";
import IndiaSection from "./components/IndiaSection";
import Footer from "./components/Footer";
import useAudioPlayer from "./hooks/useAudioPlayer";
import songs from "./data/songs";

function App() {
  const player = useAudioPlayer(songs);

  const scrollToPlaylist = useCallback(() => {
    document.getElementById("playlist")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="film-grain" />
      <Navbar />
      <main>
        <Hero player={player} onOpenPlaylist={scrollToPlaylist} />
        <Playlist player={player} />
        <QuoteSection />
        <FreedomTimeline />
        <IndiaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
