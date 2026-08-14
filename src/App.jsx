import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Playlist from "./components/Playlist";
import BuyMeCoffee from "./components/BuyMeCoffee";
import QuoteSection from "./components/QuoteSection";
import FreedomTimeline from "./components/FreedomTimeline";
import IndiaSection from "./components/IndiaSection";
import Creator from "./components/Creator";
import PoweredBy from "./components/PoweredBy";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import useAudioPlayer from "./hooks/useAudioPlayer";
import songs from "./data/songs";

function App() {
  const player = useAudioPlayer(songs);
  const [playlistOpen, setPlaylistOpen] = useState(false);

  const openPlaylist = useCallback(() => setPlaylistOpen(true), []);
  const closePlaylist = useCallback(() => setPlaylistOpen(false), []);

  return (
    <>
      <div className="film-grain" />
      <Navbar onOpenPlaylist={openPlaylist} />
      <main>
        <Hero player={player} onOpenPlaylist={openPlaylist} />
        <BuyMeCoffee />
        <QuoteSection />
        <FreedomTimeline />
        <IndiaSection />
        <Creator />
        <PoweredBy />
      </main>
      <Footer onOpenPlaylist={openPlaylist} />
      <Playlist player={player} isOpen={playlistOpen} onClose={closePlaylist} />
      <WhatsAppWidget />
    </>
  );
}

export default App;
