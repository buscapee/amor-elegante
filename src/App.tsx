
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import OldNewspaperLayout from "./components/OldNewspaperLayout";

const queryClient = new QueryClient();

const App = () => {
  // Função para tocar o som do papel quando o usuário rola a página
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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OldNewspaperLayout />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
