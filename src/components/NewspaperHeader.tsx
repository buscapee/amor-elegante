
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NewspaperHeaderProps {
  relationshipStartDate: string;
}

const NewspaperHeader = ({ relationshipStartDate }: NewspaperHeaderProps) => {
  const today = new Date();
  const formattedDate = format(today, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
  
  // Calcular o "volume" do jornal baseado nos dias desde o início do relacionamento
  const startDate = new Date(relationshipStartDate);
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const volume = Math.ceil(daysSince / 30); // Aproximadamente um volume por mês

  return (
    <header className="relative pt-12 pb-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center text-xs mb-2">
          <p>{formattedDate}</p>
          <p>Vol. {volume} No. 1</p>
        </div>
        
        <div className="h-px bg-black/20 w-full mb-6"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 font-newspaper-headline">
            NOSSO AMOR
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <p className="font-newspaper-subhead italic text-lg">
            "O Jornal que celebra nossa história de amor"
          </p>
        </motion.div>
        
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="h-px bg-black/20 w-20"></div>
          <Heart className="w-6 h-6 text-gray-800" fill="#333" />
          <div className="h-px bg-black/20 w-20"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-newspaper-body text-lg md:text-xl max-w-2xl mx-auto"
        >
          <p>
            Porque cada momento ao seu lado transforma minha vida em algo mágico.
            Este lugar é dedicado a você, meu amor, para expressar o quão especial você é para mim.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default NewspaperHeader;
