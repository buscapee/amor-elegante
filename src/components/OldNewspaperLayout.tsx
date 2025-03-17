
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import NewspaperHeader from "@/components/NewspaperHeader";
import LoveSection from "@/components/LoveSection";
import MomentsSection from "@/components/MomentsSection";
import FutureSection from "@/components/FutureSection";
import NewspaperFooter from "@/components/NewspaperFooter";

const OldNewspaperLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  const relationshipStartDate = "2024-06-22";
  
  const spotifyPlaylistId = "37i9dQZF1E4zSKKxLmC9qB";
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Nosso primeiro encontro",
      date: "Janeiro 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Viagem para as montanhas",
      date: "Abril 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Nosso aniversário de namoro",
      date: "Julho 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Nosso passeio na natureza",
      date: "Setembro 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Nossa noite especial",
      date: "Dezembro 2023",
    },
  ];
  
  const loveReasons = [
    {
      title: "Seu sorriso",
      description:
        "Seu sorriso ilumina meus dias, mesmo nos momentos mais difíceis. É como um raio de sol que atravessa qualquer nuvem.",
    },
    {
      title: "Sua força",
      description:
        "A maneira como você enfrenta os desafios da vida me inspira a ser uma pessoa melhor todos os dias.",
    },
    {
      title: "Sua gentileza",
      description:
        "O jeito como você trata as pessoas ao seu redor com tanto carinho e consideração mostra a beleza do seu coração.",
    },
    {
      title: "Nossa conexão",
      description:
        "A forma como nos entendemos, às vezes sem precisar de palavras, cria uma ponte invisível entre nós.",
    },
    {
      title: "Seu humor",
      description:
        "Suas piadas e risadas fazem qualquer dia comum se transformar em algo especial e memorável.",
    },
    {
      title: "Nossa cumplicidade",
      description:
        "Ser seu parceiro em todos os momentos, bons ou ruins, é um privilégio que valorizo todos os dias.",
    },
  ];
  
  const timelineEvents = [
    {
      date: "Janeiro 2023",
      title: "Nosso primeiro encontro",
      description: "O dia em que nossos olhares se cruzaram pela primeira vez e algo especial começou a nascer.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      date: "Março 2023",
      title: "Primeiro beijo",
      description: "Um momento mágico que selou o início da nossa história de amor.",
    },
    {
      date: "Maio 2023",
      title: "Pedido de namoro",
      description: "Quando oficialmente decidimos construir nossa história juntos.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    },
    {
      date: "Julho 2023",
      title: "Nossa primeira viagem",
      description: "Descobrindo o mundo juntos e criando memórias inesquecíveis.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      date: "Dezembro 2023",
      title: "Nosso primeiro Natal",
      description: "Celebrando o amor e a união em uma data tão especial.",
    },
  ];

  return (
    <div className="newspaper-container min-h-screen pb-20">
      <div className="coffee-stain" style={{ top: '15%', left: '5%' }}></div>
      <div className="coffee-stain" style={{ bottom: '25%', right: '8%' }}></div>
      <div className="fold-effect" style={{ left: '33%' }}></div>
      <div className="fold-effect" style={{ left: '66%' }}></div>
      
      <NewspaperHeader relationshipStartDate={relationshipStartDate} />
      
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-800/80 hover:text-gray-800 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
      
      <LoveSection loveReasons={loveReasons} spotifyPlaylistId={spotifyPlaylistId} />
      
      <MomentsSection images={images} timelineEvents={timelineEvents} />
      
      <FutureSection relationshipStartDate={relationshipStartDate} />
      
      <NewspaperFooter />
    </div>
  );
};

export default OldNewspaperLayout;
