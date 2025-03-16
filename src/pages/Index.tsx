
import { motion } from "framer-motion";
import { Heart, Star, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import DaysCounter from "@/components/DaysCounter";
import { Link } from "react-router-dom";

const HomePage = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  // Placeholder - Replace with your actual start date
  const relationshipStartDate = "2023-01-01";

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07)",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-romance-500/10"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-5">
              <Heart className="w-12 h-12 text-white animate-pulse-slow" fill="white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Nosso Amor é{" "}
            <span className="text-romance-100 italic">Extraordinário</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Porque cada momento ao seu lado transforma minha vida em algo
            mágico. Este lugar é dedicado a você, meu amor, para expressar o
            quão especial você é para mim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/why-i-love-you"
              className="bg-white/95 hover:bg-white text-romance-500 font-medium py-3 px-6 rounded-full transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Por que eu te amo</span>
              <Heart className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="bg-romance-500/90 hover:bg-romance-500 text-white font-medium py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              Nossa Galeria
            </Link>
          </motion.div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-float"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <Star className="w-6 h-6 text-romance-400" fill="#fb7185" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cada Dia é uma Nova Aventura
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nosso amor é uma jornada contínua de descobertas e emoções. Cada
              momento juntos é uma página nova em nossa história.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="w-16 h-16 rounded-full bg-romance-100 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-romance-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Nosso Amor</h3>
              <p className="text-gray-600 text-center">
                Um sentimento que cresce a cada dia, superando desafios e
                celebrando cada conquista juntos.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="w-16 h-16 rounded-full bg-romance-100 flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-romance-500" fill="#fb7185" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                Nossos Momentos
              </h3>
              <p className="text-gray-600 text-center">
                Cada risada, cada olhar, cada abraço... Todos esses momentos
                formam nossa história especial.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="w-16 h-16 rounded-full bg-romance-100 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-romance-500" fill="#fb7185" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                Nosso Futuro
              </h3>
              <p className="text-gray-600 text-center">
                Sonhando e construindo juntos um futuro repleto de amor,
                cumplicidade e felicidade.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <DaysCounter startDate={relationshipStartDate} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
