import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero.png";
import aboutImg from "@/assets/images/about.png";
import prodEspImg from "@assets/IMG_4119.JPG_1778568466785.jpeg";
import prodPropiaImg from "@assets/IMG_4617.JPG_1778568409406.jpeg";
import prodAgrImg from "@assets/WhatsApp_Image_2026-05-12_at_1.11.54_AM_1778569961711.jpeg";
import prodSombraImg from "@/assets/images/product-sombra-real.jpg";
import prodAgroImg from "@/assets/images/product-agroforestal-v2.png";
import prodPremImg from "@/assets/images/product-premium.png";

import gal1 from "@/assets/images/gallery-1.png";
import gal2 from "@/assets/images/gallery-2.png";
import gal3 from "@/assets/images/gallery-3.jpg";
import gal4 from "@/assets/images/gallery-4.jpg";
import gal5 from "@assets/WhatsApp_Image_2026-05-12_at_1.11.54_AM_1778569961711.jpeg";
import gal6 from "@/assets/images/gallery-6.jpg";
import gal7 from "@/assets/images/gallery-7.jpg";
import gal8 from "@/assets/images/gallery-8.jpg";

const navItems = ["sobre-nosotros", "productos", "galeria", "contacto"];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div
            className={`font-serif text-xl font-bold tracking-tight cursor-pointer transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => scrollTo("hero")}
          >
            FINCA MORAN
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`group relative text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {item.replace("-", " ")}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-foreground" : "bg-white"
                }`} />
              </button>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -16, pointerEvents: "none" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-10 md:hidden"
      >
        {navItems.map((item, i) => (
          <motion.button
            key={item}
            initial={false}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: menuOpen ? i * 0.07 : 0 }}
            onClick={() => scrollTo(item)}
            className="font-serif text-3xl text-foreground uppercase tracking-widest hover:text-primary transition-colors duration-200"
          >
            {item.replace("-", " ")}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Finca Moran"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-light mb-6 tracking-tight drop-shadow-lg"
          >
            Finca Moran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/90 text-lg md:text-2xl font-light mb-10 max-w-2xl"
          >
            Café de especialidad cultivado bajo sombra en las montañas volcánicas de Nayarit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-none font-serif tracking-wide"
              onClick={() => {
                document.getElementById("sobre-nosotros")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conoce nuestro café
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre-nosotros" className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:w-1/2"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={aboutImg}
                  alt="Agroforestry System"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Nuestra Historia
              </h2>
              <div className="w-12 h-[1px] bg-primary"></div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  En el corazón del Eje Volcánico Transversal, en Xalisco, Nayarit, nace Finca Moran. Un espacio donde el tiempo parece detenerse y la naturaleza dicta el ritmo.
                </p>
                <p>
                  Nuestro café crece lentamente en un sistema agroforestal bajo sombra. La altitud, los ricos suelos volcánicos y los microclimas únicos de nuestra montaña se entrelazan para crear un grano de especialidad excepcional.
                </p>
                <p>
                  No solo cultivamos café; preservamos un ecosistema. Cada taza es un tributo a la biodiversidad de nuestra tierra, al esfuerzo de nuestros agricultores locales y a la herencia del café premium mexicano.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="productos" className="py-24 md:py-32 px-6 bg-[#f4f0e6]">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Nuestra Esencia</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { title: "Café de Especialidad", desc: "Selección rigurosa de granos con perfiles de taza excepcionales.", img: prodEspImg },
              { title: "Producción Propia", desc: "Cuidado absoluto desde la semilla hasta tu taza.", img: prodPropiaImg },
              { title: "Agricultores Locales", desc: "Trabajo justo y mano a mano con la comunidad de Nayarit.", img: prodAgrImg },
              { title: "Café Bajo Sombra", desc: "Maduración lenta que intensifica los sabores y aromas.", img: prodSombraImg },
              { title: "Sistema Agroforestal", desc: "Respeto por la biodiversidad y el equilibrio del bosque.", img: prodAgroImg },
              { title: "Premium Mexicano", desc: "Orgullosamente cultivado en tierras volcánicas.", img: prodPremImg },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-6 bg-muted">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="py-24 md:py-32 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16 md:mb-24 px-6"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Nuestra Tierra</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          {[gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img
                src={img}
                alt={`Galeria ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contacto" className="bg-foreground text-background pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Visítanos</h2>
              <div className="space-y-6 text-white/70 font-light text-lg">
                <p>Nayarit, México</p>
                <div className="w-12 h-[1px] bg-white/20"></div>
                <p className="italic">
                  "El buen café es un reflejo de la tierra que lo vio nacer."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white mb-6">Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-white/80 font-light block">Mariana</span>
                    <span className="text-white font-serif tracking-wider">33 2027 3108</span>
                  </div>
                  <a href="tel:3320273108">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none font-sans">
                      Llamar
                    </Button>
                  </a>
                </div>
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-white/80 font-light block">Ismael</span>
                    <span className="text-white font-serif tracking-wider">33 2631 3429</span>
                  </div>
                  <a href="tel:3326313429">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none font-sans">
                      Llamar
                    </Button>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-white/80 font-light block">Instagram</span>
                    <span className="text-white font-serif tracking-wider">@fincamoran_coffee_farm</span>
                  </div>
                  <a href="https://instagram.com/fincamoran_coffee_farm" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none font-sans">
                      Seguir
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm font-light flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Finca Moran. Todos los derechos reservados.</p>
            <p className="mt-4 md:mt-0">De Nayarit para el mundo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
