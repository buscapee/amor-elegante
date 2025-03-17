
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import DaysCounter from "@/components/DaysCounter";

interface FutureSectionProps {
  relationshipStartDate: string;
}

const FutureSection = ({ relationshipStartDate }: FutureSectionProps) => {
  return (
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
  );
};

export default FutureSection;
