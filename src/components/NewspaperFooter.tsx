
import PageTransition from "@/components/PageTransition";

const NewspaperFooter = () => {
  return (
    <PageTransition delay={0.6}>
      <footer className="text-center py-8 text-gray-600">
        <p className="font-newspaper-subhead">
          Com todo meu amor, hoje e sempre ♥
        </p>
        <p className="text-sm mt-2 font-newspaper-body">
          © {new Date().getFullYear()} - Escrito com o coração
        </p>
      </footer>
    </PageTransition>
  );
};

export default NewspaperFooter;
