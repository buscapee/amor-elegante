
import PageTransition from "@/components/PageTransition";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

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
              <Image className="w-8 h-8 text-romance-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa Galeria
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Cada foto conta uma história e cada história é um pedaço do nosso
              amor. Aqui estão alguns dos nossos momentos mais especiais juntos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 max-w-xl mx-auto">
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
