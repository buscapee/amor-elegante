
import PageTransition from "@/components/PageTransition";
import TimelineEvent from "@/components/TimelineEvent";
import { motion } from "framer-motion";
import { Clock, Heart } from "lucide-react";

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

  // Positions for scattered hearts
  const heartPositions = [
    { top: '15%', left: '3%', size: 16, rotate: '15deg', opacity: 0.6 },
    { top: '25%', right: '5%', size: 12, rotate: '-10deg', opacity: 0.5 },
    { bottom: '30%', left: '8%', size: 14, rotate: '8deg', opacity: 0.7 },
    { bottom: '20%', right: '6%', size: 10, rotate: '-5deg', opacity: 0.4 },
    { top: '50%', right: '10%', size: 8, rotate: '20deg', opacity: 0.3 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-b from-white to-romance-50 newspaper-container relative">
        {/* Scattered Hearts */}
        {heartPositions.map((pos, idx) => (
          <Heart
            key={idx}
            className="absolute z-10 text-black"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
              width: pos.size,
              height: pos.size,
              transform: `rotate(${pos.rotate})`,
              opacity: pos.opacity,
              fill: "black"
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-2 bg-romance-100 rounded-full mb-3">
              <Clock className="w-5 h-5 text-romance-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-newspaper-headline">
              Nossa História
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-sm font-newspaper-body">
              Uma jornada de amor, crescimento e momentos inesquecíveis que
              construímos juntos ao longo do tempo.
            </p>
          </motion.div>

          <div className="mt-16">
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
            className="mt-12 glass-card p-6 rounded-lg text-center max-w-xl mx-auto"
          >
            <h3 className="text-xl font-bold text-romance-600 mb-3 font-newspaper-headline">
              E nossa história continua...
            </h3>
            <p className="text-gray-700 text-sm font-newspaper-body">
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
