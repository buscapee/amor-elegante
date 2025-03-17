
import { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
  videoId: string;
}

const BackgroundMusic = ({ videoId }: BackgroundMusicProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          playlist: videoId, // Required for looping
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(30); // Set volume to 30%
            event.target.playVideo();
            setIsPlayerReady(true);
          },
          onStateChange: (event) => {
            // If the video ends, restart it
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };
    
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  return (
    <div className="fixed bottom-0 right-0 z-50 opacity-0 pointer-events-none">
      <div id="youtube-player"></div>
    </div>
  );
};

export default BackgroundMusic;
