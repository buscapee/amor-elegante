
import PageTransition from "@/components/PageTransition";
import LoveReason from "@/components/LoveReason";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const WhyILoveYou = () => {
  // Placeholders - Replace with your actual reasons
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
    {
      title: "Sua inteligência",
      description:
        "A maneira como você vê o mundo e reflete sobre as coisas me fascina e me faz querer conhecer sempre mais sobre você.",
    },
    {
      title: "Sua autenticidade",
      description:
        "Você não tem medo de ser quem é, e isso me inspira a ser mais verdadeiro comigo mesmo.",
    },
    {
      title: "Nossos sonhos",
      description:
        "Planejar o futuro ao seu lado e construir novos sonhos juntos me dá uma felicidade que nem consigo explicar.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-b from-white to-romance-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-romance-100 rounded-full mb-4">
              <Heart
                className="w-8 h-8 text-romance-500"
                fill="#ea384c"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Por que eu te amo
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Existem infinitas razões para amar você, mas aqui estão algumas
              que fazem meu coração bater mais forte todos os dias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loveReasons.map((reason, index) => (
              <LoveReason
                key={index}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 glass-card p-8 rounded-xl text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-romance-600 mb-4">
              E muito mais...
            </h3>
            <p className="text-gray-700">
              Existem milhares de outras razões para te amar que eu descubro a cada dia. 
              Algumas nem consigo colocar em palavras, são apenas sentimentos que crescem 
              no meu coração toda vez que penso em você.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WhyILoveYou;
