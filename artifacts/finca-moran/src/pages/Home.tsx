import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LANGUAGES, Language } from "@/lib/i18n";

import heroImg from "@/assets/images/hero-real.jpg";
import aboutImg from "@/assets/images/about-real.jpg";
import prodEspImg from "@/assets/images/img-4119.jpg";
import prodPropiaImg from "@/assets/images/img-4617.jpg";
import prodAgrImg from "@/assets/images/sunset-nayarit.jpg";
import prodSombraImg from "@/assets/images/product-sombra-real.jpg";
import prodAgroImg from "@/assets/images/gal-3-real.jpg";
import prodPremImg from "@/assets/images/product-premium.png";

import gal1 from "@/assets/images/gal-1-real.jpg";
import gal2 from "@/assets/images/gal-2-real.jpg";
import gal3 from "@/assets/images/gal-3-real.jpg";
import gal4 from "@/assets/images/gallery-4.jpg";
import gal5 from "@/assets/images/sunset-nayarit.jpg";
import gal6 from "@/assets/images/gal-6-real.jpg";
import gal7 from "@/assets/images/gallery-7.jpg";
import gal8 from "@/assets/images/gal-8-real.jpg";

const productImages = [prodEspImg, prodPropiaImg, prodAgrImg, prodSombraImg, prodAgroImg, prodPremImg];

function LanguageSwitcher({ isScrolled }: { isScrolled: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === language);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-sm ${
          isScrolled
            ? "text-muted-foreground hover:text-foreground"
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current?.flag} {current?.label}</span>
        <span className="sm:hidden">{current?.flag}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-44 bg-background border border-border shadow-lg z-50 py-1 rounded-sm"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code as Language); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors duration-150 ${
                  language === lang.code
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "sobre-nosotros", label: t.nav.about },
    { id: "productos", label: t.nav.products },
    { id: "galeria", label: t.nav.gallery },
    { id: "contacto", label: t.nav.contact },
  ];

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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group relative text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-foreground" : "bg-white"
                }`} />
              </button>
            ))}
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Abrir menú"
            >
              <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""} ${isScrolled ? "bg-foreground" : "bg-white"}`} />
            </button>
          </div>
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
            key={item.id}
            initial={false}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: menuOpen ? i * 0.07 : 0 }}
            onClick={() => scrollTo(item.id)}
            className="font-serif text-3xl text-foreground uppercase tracking-widest hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "8%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{
            y,
            willChange: "transform",
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 z-0"
        >
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
            {t.hero.subtitle}
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
              {t.hero.cta}
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
                {t.about.heading}
              </h2>
              <div className="w-12 h-[1px] bg-primary"></div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
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
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{t.products.heading}</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {t.products.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-6 bg-muted">
                  <img
                    src={productImages[i]}
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
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{t.gallery.heading}</h2>
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
                alt={`${t.gallery.heading} ${i + 1}`}
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">{t.contact.visitHeading}</h2>
              <div className="space-y-6 text-white/70 font-light text-lg">
                <p>{t.contact.location}</p>
                <div className="w-12 h-[1px] bg-white/20"></div>
                <p className="italic">{t.contact.quote}</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white mb-6">{t.contact.contactHeading}</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <a href="https://wa.me/523326313429" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none font-sans gap-2">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
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
                      {t.contact.follow}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm font-light flex flex-col md:flex-row justify-between items-center">
            <p>{t.contact.copyright}</p>
            <p className="mt-4 md:mt-0">{t.contact.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
