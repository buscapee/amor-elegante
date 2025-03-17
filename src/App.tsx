
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import OldNewspaperLayout from "./components/OldNewspaperLayout";
import BackgroundMusic from "./components/BackgroundMusic";

const queryClient = new QueryClient();

const App = () => {
  // Function to play paper sound when user scrolls
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const paperSound = new Audio('/paper-sound.mp3');
    paperSound.volume = 0.2;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        paperSound.currentTime = 0;
        paperSound.play().catch(err => console.log("Audio failed to play:", err));
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Add newspaper-like coffee stains at random positions
  useEffect(() => {
    const coffeeStains = document.querySelectorAll('.coffee-stain');
    coffeeStains.forEach(stain => {
      const rotation = Math.random() * 360;
      (stain as HTMLElement).style.transform = `rotate(${rotation}deg)`;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BackgroundMusic videoId="RSTIP4KL5Uc" />
        <OldNewspaperLayout />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
