
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import LoveReason from "@/components/LoveReason";
import SpotifyPlayer from "@/components/SpotifyPlayer";

interface LoveSectionProps {
  loveReasons: {
    title: string;
    description: string;
  }[];
  spotifyPlaylistId: string;
}

const LoveSection = ({ loveReasons, spotifyPlaylistId }: LoveSectionProps) => {
  return (
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

          <SpotifyPlayer playlistId={spotifyPlaylistId} />
        </div>
      </div>
    </PageTransition>
  );
};

export default LoveSection;
