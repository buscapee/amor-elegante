
import PageTransition from "@/components/PageTransition";
import TimelineEvent from "@/components/TimelineEvent";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Timeline = () => {
  // Placeholders - Replace with your actual timeline events
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
              <Clock className="w-8 h-8 text-romance-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa História
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Uma jornada de amor, crescimento e momentos inesquecíveis que
              construímos juntos ao longo do tempo.
            </p>
          </motion.div>

          <div className="mt-20">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 glass-card p-8 rounded-xl text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-romance-600 mb-4">
              E nossa história continua...
            </h3>
            <p className="text-gray-700">
              Cada dia é um novo capítulo na nossa jornada juntos. Mal posso
              esperar para ver o que o futuro nos reserva e quais novas
              aventuras iremos vivenciar lado a lado.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Timeline;
