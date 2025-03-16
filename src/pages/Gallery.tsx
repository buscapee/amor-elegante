
import PageTransition from "@/components/PageTransition";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import { Image, Heart } from "lucide-react";

const Gallery = () => {
  // Placeholders - Replace with your actual images
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

  // Positions for scattered hearts
  const heartPositions = [
    { top: '10%', left: '5%', size: 16, rotate: '15deg', opacity: 0.6 },
    { top: '15%', right: '8%', size: 12, rotate: '-10deg', opacity: 0.5 },
    { bottom: '20%', left: '7%', size: 14, rotate: '8deg', opacity: 0.7 },
    { bottom: '25%', right: '10%', size: 10, rotate: '-5deg', opacity: 0.4 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-16 px-4 bg-gradient-to-b from-white to-romance-50 newspaper-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-block p-2 bg-romance-100 rounded-full mb-3">
              <Image className="w-5 h-5 text-romance-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-newspaper-headline">
              Nossa Galeria
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-sm font-newspaper-body">
              Cada foto conta uma história e cada história é um pedaço do nosso
              amor. Aqui estão alguns dos nossos momentos mais especiais juntos.
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 max-w-md mx-auto text-xs font-newspaper-subhead italic">
              Estas são apenas algumas das milhares de memórias que construímos
              juntos. Estou ansioso para criar muito mais momentos especiais ao
              seu lado.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;
