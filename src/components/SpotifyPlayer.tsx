
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Music, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface SpotifyPlayerProps {
  playlistId: string;
}

const SpotifyPlayer = ({ playlistId }: SpotifyPlayerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayer = () => {
    setIsExpanded(!isExpanded);
  };

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`newspaper-card p-6 text-center grayscale transition-all duration-300 hover:grayscale-0 ${
          isExpanded ? "border-2 border-black/20" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Music className="w-6 h-6 text-gray-800" />
            <h3 className="font-newspaper-headline text-xl md:text-2xl font-bold">
              SELEÇÃO MUSICAL
            </h3>
          </div>
          <button
            onClick={togglePlayback}
            className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>

        <p className="text-sm italic text-gray-600 mt-2 mb-4 font-newspaper-subhead">
          "Nossa trilha sonora especial"
        </p>

        <Button 
          onClick={togglePlayer}
          variant="outline" 
          className="flex items-center justify-center gap-2 w-full border border-black/20 hover:bg-black/5 py-3 mt-2 mb-4"
        >
          {isExpanded ? (
            <>
              <span>Recolher playlist</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Expandir playlist</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator${
                isPlaying ? "&autoplay=1" : ""
              }`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="mx-auto shadow-md"
              style={{ maxWidth: "600px" }}
            ></iframe>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SpotifyPlayer;
