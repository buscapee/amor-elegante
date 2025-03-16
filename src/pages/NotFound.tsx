
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-romance-50 px-6">
        <div className="glass-card rounded-xl p-10 text-center max-w-lg mx-auto">
          <div className="mb-6 flex justify-center">
            <Heart className="w-16 h-16 text-romance-300" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-romance-500">Página não encontrada</h1>
          <p className="text-gray-600 mb-8">
            O amor nos levou para um lugar que não existe. Vamos voltar para onde o nosso amor floresce?
          </p>
          <Link
            to="/"
            className="inline-block bg-romance-500 hover:bg-romance-600 text-white font-medium py-3 px-6 rounded-full transition-all transform hover:scale-105"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
