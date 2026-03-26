import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./components/ImageWithFallback";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1639432179924-a587bc131f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc0Mzg3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 1",
    },
    {
      url: "https://images.unsplash.com/photo-1639432359265-867dec38824e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc0Mzg3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 2",
    },
    {
      url: "https://images.unsplash.com/photo-1639432358785-4d4b57b2d45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc0Mzg3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 3",
    },
    {
      url: "https://images.unsplash.com/photo-1638458957842-d901372fed55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0YXR0b28lMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc3NDM4NzM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 4",
    },
    {
      url: "https://images.unsplash.com/photo-1639432358985-15129a8c4048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc0Mzg3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 5",
    },
    {
      url: "https://images.unsplash.com/photo-1605647533135-51b5906087d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc0Mzg3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Trabajo de tatuaje 6",
    },
  ];

  return (
    <div className="size-full overflow-y-auto bg-black text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-sm border-b border-zinc-800" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl tracking-wider cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Miguel Tattoo
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-300 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-gray-300 transition-colors"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-gray-300 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300 transition-colors"
            >
              Contacto
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white absolute"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white absolute"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-sm"
        >
          <motion.div
            className="px-4 py-6 flex flex-col gap-4 border-t border-zinc-800"
            initial={false}
            animate={isMenuOpen ? { y: 0 } : { y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-gray-300 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Sobre Mí
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("gallery")}
              className="text-left py-2 hover:text-gray-300 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Trabajos
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-gray-300 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Servicios
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-gray-300 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Contacto
            </motion.button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761276297550-27567ed50a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0YXR0b28lMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc3NDM4NzM1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tattoo artist at work"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl mb-6 tracking-tight"
          >
            ARTE EN TU PIEL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Transformando ideas en obras de arte permanentes
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors duration-300 rounded-2xl"
          >
            RESERVA TU CITA
          </motion.button>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl mb-6">Sobre Mí</h2>
              <div className="w-20 h-1 bg-white mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Con más de 10 años de experiencia en el arte del tatuaje, me
                especializo en crear diseños únicos que cuentan tu historia.
                Cada tatuaje es una colaboración entre artista y cliente,
                resultando en piezas verdaderamente personales.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Mi estudio está equipado con la tecnología más avanzada y sigo
                los más altos estándares de higiene y seguridad para garantizar
                una experiencia excepcional.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">10+</div>
                  <div className="text-gray-400 text-sm">
                    Años de Experiencia
                  </div>
                </div>
                <div>
                  <div className="text-4xl mb-2">200+</div>
                  <div className="text-gray-400 text-sm">
                    Clientes Satisfechos
                  </div>
                </div>
                <div>
                  <div className="text-4xl mb-2">200+</div>
                  <div className="text-gray-400 text-sm">
                    Tatuajes Realizados
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-zinc-600 to-zinc-800 opacity-20 blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1482328177731-274399da39f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc3NDM4NzM1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tattoo artist"
                className="relative w-full h-[600px] object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6">Mi Trabajo</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explora una selección de mis trabajos más recientes. Cada pieza es
              única y diseñada específicamente para cada cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer overflow-hidden aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6">Servicios</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="border border-zinc-800 p-6 md:p-8 hover:border-white transition-colors duration-300"
            >
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-2xl mb-4">Tatuajes Personalizados</h3>
              <p className="text-gray-400">
                Trabajamos juntos para crear un diseño único que refleje tu
                personalidad y visión.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="border border-zinc-800 p-6 md:p-8 hover:border-white transition-colors duration-300"
            >
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-2xl mb-4">Cover-Ups</h3>
              <p className="text-gray-400">
                Transformo tatuajes antiguos en nuevas obras de arte que amarás.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="border border-zinc-800 p-6 md:p-8 hover:border-white transition-colors duration-300"
            >
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-2xl mb-4">Diseños Flash</h3>
              <p className="text-gray-400">
                Diseños prediseñados disponibles para sesiones rápidas,
                perfectos para tu primer tatuaje.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 md:px-8 bg-gradient-to-t from-black to-zinc-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-6">Contacto</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

            <p className="text-xl text-gray-300 mb-12">
              ¿Listo para tu próximo tatuaje? Contáctame para agendar una
              consulta gratuita.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center ">
              <MapPin className="mb-5" />
              <h3 className="text-xl mb-2">Ubicación</h3>
              <p className="text-gray-400">
                10 de Octubre
                <br />
                La Habana, Cuba
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <Instagram className="mb-5" />
              <h3 className="text-xl mb-2">Instagram</h3>
              <p className="text-gray-400 ">@migue_ltatto</p>
            </div>

            <div className="flex flex-col items-center ">
              <Smartphone className="mb-5" />
              <h3 className="text-xl mb-2">Teléfono</h3>
              <p className="text-gray-400 ">+53 53709648</p>
            </div>
          </motion.div>

          <a href="https://wa.me/qr/TP5M5BI2IDZQJ1">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-4 text-lg hover:bg-gray-200 transition-colors duration-300 rounded-2xl"
            >
              AGENDAR CONSULTA
            </motion.button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 Miguel Tattoo. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </motion.button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <ImageWithFallback
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
