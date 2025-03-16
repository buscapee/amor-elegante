import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Image, Coffee, FileText, BookOpen, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import DaysCounter from "@/components/DaysCounter";
import NewspaperHeader from "@/components/NewspaperHeader";
import LoveReason from "@/components/LoveReason";
import ImageGallery from "@/components/ImageGallery";
import TimelineEvent from "@/components/TimelineEvent";

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

  // Updated relationship start date to June 22, 2024
  const relationshipStartDate = "2024-06-22";
  
  // Placeholders for the images
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
  
  // Placeholders for the love reasons
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
  
  // Placeholders for timeline events
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
      {/* Decorative elements */}
      <div className="coffee-stain" style={{ top: '15%', left: '5%' }}></div>
      <div className="coffee-stain" style={{ bottom: '25%', right: '8%' }}></div>
      <div className="fold-effect" style={{ left: '33%' }}></div>
      <div className="fold-effect" style={{ left: '66%' }}></div>
      
      {/* Newspaper header */}
      <NewspaperHeader relationshipStartDate={relationshipStartDate} />
      
      {/* Page indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-800/80 hover:text-gray-800 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
      
      {/* Nosso Amor section */}
      <PageTransition>
        <div className="newspaper-section py-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-black/20 flex-grow"></div>
              <div className="mx-4 flex items-center">
                <Heart className="w-6 h-6 text-gray-800 mr-2" />
                <h2 className="newspaper-heading">NOSSO AMOR</h2>
              </div>
              <div className="h-px bg-black/20 flex-grow"></div>
            </div>
            
            <div className="mb-8">
              <p className="newspaper-subheading text-center mb-8 italic">
                "Um Editorial sobre os encantos que encontro em você a cada dia"
              </p>
              
              <div className="column-text">
                <p className="mb-4 indent-8 text-justify">
                  Em um mundo cada vez mais acelerado, onde as pessoas mal têm tempo para olhar ao redor, nosso amor se destaca como uma pausa necessária, um momento de contemplação que faz tudo valer a pena. Como editor-chefe deste jornal de sentimentos, tenho o prazer de compartilhar com nossos leitores as razões pelas quais meu coração bate mais forte por você a cada dia.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  Desde o primeiro momento em que nos encontramos, soube que havia algo especial – uma conexão que transcende o comum, uma sintonia rara em tempos de relações passageiras. Seu jeito de ver o mundo, com olhos sempre atentos aos pequenos detalhes, me ensinou a apreciar belezas que antes passavam despercebidas.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  Nos últimos meses, nossas histórias se entrelaçaram como as linhas de um romance bem escrito, com capítulos de alegria, superação e crescimento mútuo. Cada desafio enfrentado lado a lado apenas fortaleceu o que sentimos, comprovando que nosso amor não é apenas um sentimento passageiro, mas uma construção sólida e duradoura.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  Permita-me, então, compartilhar com você, leitora amada deste jornal, algumas das inúmeras razões pelas quais meu coração escolheu o seu para compartilhar esta jornada.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {loveReasons.map((reason, index) => (
                <LoveReason
                  key={index}
                  title={reason.title}
                  description={reason.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
      
      {/* Nossos Momentos section */}
      <PageTransition delay={0.2}>
        <div className="newspaper-section py-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-black/20 flex-grow"></div>
              <div className="mx-4 flex items-center">
                <Image className="w-6 h-6 text-gray-800 mr-2" />
                <h2 className="newspaper-heading">NOSSOS MOMENTOS</h2>
              </div>
              <div className="h-px bg-black/20 flex-grow"></div>
            </div>
            
            <p className="newspaper-subheading text-center mb-8 italic">
              "Memórias impressas em nossos corações"
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <ImageGallery images={images} />
              <p className="newspaper-caption text-center mt-4">
                Fotografias exclusivas de nossos momentos mais memoráveis juntos. Cada imagem conta uma história única de amor e companheirismo.
              </p>
            </motion.div>
            
            <div className="newspaper-divider"></div>
            
            <div className="mt-12">
              <h3 className="newspaper-subheading mb-6 text-center">Nossa Linha do Tempo</h3>
              
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  index={index}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
      
      {/* Nosso Futuro section */}
      <PageTransition delay={0.4}>
        <div className="newspaper-section py-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-black/20 flex-grow"></div>
              <div className="mx-4 flex items-center">
                <BookOpen className="w-6 h-6 text-gray-800 mr-2" />
                <h2 className="newspaper-heading">NOSSO FUTURO</h2>
              </div>
              <div className="h-px bg-black/20 flex-grow"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="newspaper-card p-8 relative"
            >
              <div className="newspaper-stamp"></div>
              
              <h3 className="text-3xl font-bold mb-4 text-center font-newspaper-headline">
                MANCHETE ESPECIAL: O AMOR QUE PROMETE TRANSFORMAR O MUNDO
              </h3>
              
              <p className="text-sm text-center mb-6 font-newspaper-subhead">
                Edição Exclusiva - Publicado hoje com exclusividade para o coração mais especial do mundo
              </p>
              
              <div className="column-text">
                <p className="mb-4 indent-8 text-justify">
                  Em uma declaração exclusiva, este repórter anuncia com grande entusiasmo os planos para um futuro brilhante ao lado da pessoa mais extraordinária que já conheceu. Segundo fontes confiáveis do coração, os próximos capítulos desta história de amor prometem aventuras incríveis, crescimento mútuo e uma felicidade sem precedentes.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  "Estamos planejando construir uma vida repleta de momentos inesquecíveis, viagens para destinos dos nossos sonhos e a criação de um lar onde o amor seja a fundação mais sólida", revelou o autor, com um brilho notável nos olhos ao falar sobre os projetos futuros.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  Entre os planos mais ambiciosos está o compromisso de crescer juntos, apoiando os sonhos e aspirações um do outro, celebrando as conquistas e enfrentando os desafios de mãos dadas. "Quero estar ao seu lado em cada momento, vendo seu sorriso iluminar nossos dias e construindo memórias que aquecerão nossos corações para sempre", acrescentou.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  Os especialistas em relacionamentos afirmam que este é um dos casos mais promissores já documentados, com indicadores de sucesso baseados na comunicação sincera, no respeito mútuo e na admiração genuína que ambos demonstram um pelo outro.
                </p>
                
                <p className="mb-4 indent-8 text-justify">
                  "O futuro que vislumbro ao seu lado é como o amanhecer de um dia perfeito – cheio de possibilidades, beleza e a certeza de que, mesmo quando as nuvens aparecerem, enfrentaremos juntos e sairemos mais fortes", concluiu o apaixonado autor desta declaração.
                </p>
              </div>
              
              <div className="text-center mt-8">
                <p className="font-bold font-newspaper-headline">
                  * * *
                </p>
                <p className="mt-4 font-newspaper-subhead italic">
                  "Todo grande amor merece ser celebrado como a melhor notícia do dia."
                </p>
              </div>
            </motion.div>
            
            <div className="mt-16 flex justify-center">
              <DaysCounter startDate={relationshipStartDate} />
            </div>
          </div>
        </div>
      </PageTransition>
      
      {/* Footer */}
      <PageTransition delay={0.6}>
        <footer className="text-center py-8 text-gray-600">
          <p className="font-newspaper-subhead">
            Com todo meu amor, hoje e sempre ♥
          </p>
          <p className="text-sm mt-2 font-newspaper-body">
            © {new Date().getFullYear()} - Escrito com o coração
          </p>
        </footer>
      </PageTransition>
    </div>
  );
};

export default OldNewspaperLayout;
