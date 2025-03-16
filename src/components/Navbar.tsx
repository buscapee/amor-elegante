
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-romance-500 font-playfair font-bold"
        >
          <Heart className="w-5 h-5 animate-pulse-slow" />
          <span className="text-xl tracking-wide">Nosso Amor</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-romance-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className={cn(
                "love-link font-medium transition-colors",
                location.pathname === "/"
                  ? "text-romance-500"
                  : "text-foreground/80 hover:text-romance-500"
              )}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/why-i-love-you"
              className={cn(
                "love-link font-medium transition-colors",
                location.pathname === "/why-i-love-you"
                  ? "text-romance-500"
                  : "text-foreground/80 hover:text-romance-500"
              )}
            >
              Por que eu te amo
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={cn(
                "love-link font-medium transition-colors",
                location.pathname === "/gallery"
                  ? "text-romance-500"
                  : "text-foreground/80 hover:text-romance-500"
              )}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              to="/timeline"
              className={cn(
                "love-link font-medium transition-colors",
                location.pathname === "/timeline"
                  ? "text-romance-500"
                  : "text-foreground/80 hover:text-romance-500"
              )}
            >
              Nossa História
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card mt-4 py-4 rounded-lg animate-fade-in">
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <Link
                to="/"
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  location.pathname === "/"
                    ? "bg-romance-50 text-romance-500"
                    : "text-foreground/80 hover:bg-romance-50 hover:text-romance-500"
                )}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/why-i-love-you"
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  location.pathname === "/why-i-love-you"
                    ? "bg-romance-50 text-romance-500"
                    : "text-foreground/80 hover:bg-romance-50 hover:text-romance-500"
                )}
              >
                Por que eu te amo
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  location.pathname === "/gallery"
                    ? "bg-romance-50 text-romance-500"
                    : "text-foreground/80 hover:bg-romance-50 hover:text-romance-500"
                )}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/timeline"
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  location.pathname === "/timeline"
                    ? "bg-romance-50 text-romance-500"
                    : "text-foreground/80 hover:bg-romance-50 hover:text-romance-500"
                )}
              >
                Nossa História
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
