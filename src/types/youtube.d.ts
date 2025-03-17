
interface YT {
  Player: {
    new (
      elementId: string,
      options: {
        videoId: string;
        playerVars?: {
          autoplay?: number;
          controls?: number;
          disablekb?: number;
          fs?: number;
          iv_load_policy?: number;
          loop?: number;
          playlist?: string;
          modestbranding?: number;
          playsinline?: number;
          rel?: number;
          showinfo?: number;
        };
        events?: {
          onReady?: (event: { target: YTPlayer }) => void;
          onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          onError?: (event: { data: number }) => void;
        };
      }
    ): YTPlayer;
    PlayerState: {
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  };
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getPlayerState: () => number;
}

interface Window {
  YT: YT;
  onYouTubeIframeAPIReady: (() => void) | null;
}
