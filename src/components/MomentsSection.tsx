
import { Image } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ImageGallery from "@/components/ImageGallery";
import TimelineEvent from "@/components/TimelineEvent";

interface Image {
  src: string;
  alt: string;
  date?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface MomentsSectionProps {
  images: Image[];
  timelineEvents: TimelineEvent[];
}

const MomentsSection = ({ images, timelineEvents }: MomentsSectionProps) => {
  return (
    <PageTransition delay={0.2}>
      <div className="newspaper-section py-16">
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-black/20 flex-grow"></div>
            <div className="mx-4 flex items-center">
              <Image className="w-6 h-6 text-gray-800 mr-2" />
              <h2 className="newspaper-heading">NOSSOS MOMENTOS</h2>
            </div>
            <div className="h-px bg-black/20 flex-grow"></div>
          </div>
          
          <p className="newspaper-subheading text-center mb-8 italic">
            "Memórias impressas em nossos corações"
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <ImageGallery images={images} />
            <p className="newspaper-caption text-center mt-4">
              Fotografias exclusivas de nossos momentos mais memoráveis juntos. Cada imagem conta uma história única de amor e companheirismo.
            </p>
          </motion.div>
          
          <div className="newspaper-divider"></div>
          
          <div className="mt-12">
            <h3 className="newspaper-subheading mb-6 text-center">Nossa Linha do Tempo</h3>
            
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
        </div>
      </div>
    </PageTransition>
  );
};

export default MomentsSection;
