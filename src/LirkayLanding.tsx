import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Droplets, Wind, Leaf, Mountain, Heart, Globe, Users, ArrowUpRight, 
  MapPin, Compass, ShieldAlert, Sparkles, Footprints, Info, Download, Copy, Check
} from 'lucide-react';
import { ASSETS } from './assets';
import Logo from './Logo';
import { img } from 'framer-motion/client';

// --- DESIGN TOKENS ---
// Verde petróleo profundo: #003B46
// Verde azulado oscuro: #00252B
// Negro verdoso: #10191B
// Dorado andino: #C89B4A
// Oro claro: #E1BD78
// Blanco marfil: #F1EAE0
// Acento agua: #0099AE

// --- HELPER & UI COMPONENTS ---

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ImageSlot = ({ 
  src, 
  alt, 
  caption, 
  isConceptual = false, 
  fallbackIcon: FallbackIcon = Mountain, 
  className = "" 
}: { 
  src?: string; 
  alt: string; 
  caption?: string; 
  isConceptual?: boolean; 
  fallbackIcon?: React.ComponentType<{ size?: number; strokeWidth?: number }>; 
  className?: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-center bg-[#10191B] border border-[#C89B4A]/25 overflow-hidden group ${className}`}>
      {src && !hasError ? (
        <img 
          src={src} 
          alt={alt} 
          onError={() => setHasError(true)}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
        />
      ) : (
        <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#003B46]/30 via-[#10191B] to-[#00252B]">
          <div className="w-14 h-14 rounded-full border border-[#C89B4A]/40 flex items-center justify-center mb-3 bg-[#00252B]/80 text-[#C89B4A] shadow-inner">
            <FallbackIcon size={28} strokeWidth={1.5} />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E1BD78] font-medium max-w-[80%]">
            {alt}
          </span>
          <div className="mt-2 text-[10px] text-[#F1EAE0]/40 flex items-center gap-1">
            <Sparkles size={10} className="text-[#C89B4A]" /> Inspiración Andina
          </div>
        </div>
      )}

      {/* Pie de foto obligatorio para imágenes conceptuales */}
      {(caption || isConceptual) && (
        <div className="absolute bottom-0 inset-x-0 bg-[#10191B]/90 backdrop-blur-md text-[#F1EAE0]/80 text-[11px] p-2.5 text-center border-t border-[#C89B4A]/30 leading-snug">
          {caption || "*Imagen conceptual. No corresponde a una fotografía documental verificada."}
        </div>
      )}
    </div>
  );
};

const Pendiente = ({ text, children }: { text?: string; children: React.ReactNode }) => (
  <div className="border border-[#C89B4A]/50 bg-[#10191B]/90 p-6 my-6 relative font-manrope rounded-sm shadow-xl">
    <div className="absolute -top-3 left-4 bg-[#C89B4A] text-[#00252B] text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow">
      PENDIENTE DE VALIDACIÓN
    </div>
    <div className="mt-2 text-[#F1EAE0]/80">{children}</div>
    {text && <p className="text-[#E1BD78] text-xs mt-3 italic flex items-center gap-1"><Info size={12}/> {text}</p>}
  </div>
);

const ChakanaDivider = () => (
  <div className="flex justify-center items-center py-12 opacity-50">
    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C89B4A] to-transparent"></div>
    <div className="mx-4 text-[#C89B4A]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2H14V6H18V10H22V14H18V18H14V22H10V18H6V14H2V10H6V6H10V2Z" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    </div>
    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-[#C89B4A] to-transparent"></div>
  </div>
);

// --- MAIN LANDING COMPONENT ---

export default function LirkayLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const navLinks = [
    { name: "Nuestra esencia", href: "#nuestra-esencia" },
    { name: "Altitude Boost", href: "#altitude-boost" },
    { name: "Explora Cusco", href: "#explora-cusco" },
    { name: "Triple impacto", href: "#triple-impacto" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" },
  ];

  const routesData = [
    {
      id: "cusco-historico",
      title: "Cusco Histórico",
      subtitle: "Empieza por el corazón de los Andes",
      type: "Cultura",
      desc: "Conoce el Qorikancha, la Plaza de Armas y el patrimonio de una ciudad reconocida por la UNESCO. Continúa hacia Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay. Ideal para una primera conexión con la historia de Cusco.",
      ref: "[3]",
      icon: Compass,
      imageLabel: "Cusco Histórico"
    },
    {
      id: "valle-sagrado",
      title: "Valle Sagrado",
      subtitle: "Entre pueblos, terrazas y montañas",
      type: "Cultura",
      desc: "Recorre Pisac, Chinchero, Maras, Moray y Ollantaytambo. Descubre arquitectura, mercados, agricultura, tejidos y paisajes del valle del Urubamba. Ideal para cultura, fotografía y arqueología.",
      ref: "[4]",
      icon: MapPin,
      imageLabel: "Valle Sagrado"
    },
    {
      id: "machu-picchu",
      title: "Machu Picchu y Camino Inca",
      subtitle: "Un encuentro entre cultura y naturaleza",
      type: "Trekking",
      desc: "Visita el Santuario Histórico de Machu Picchu, inscrito como Patrimonio Mundial mixto por la UNESCO y situado alrededor de 2,430 m s. n. m. Los recorridos del Camino Inca requieren reserva y acceso conforme a las reglas oficiales.",
      ref: "[5]",
      icon: Mountain,
      imageLabel: "Machu Picchu"
    },
    {
      id: "salkantay",
      title: "Salkantay y Humantay",
      subtitle: "Para quienes prefieren llegar caminando",
      type: "Trekking",
      desc: "Explora paisajes de alta montaña en las rutas asociadas al nevado Salkantay. La Laguna Humantay es un atractivo destacado de la zona. Son recorridos que requieren preparación, equipo y planificación.",
      ref: "[6]",
      icon: Footprints,
      isConceptual: true,
      caption: "*Imagen conceptual de alta montaña. No corresponde a una fotografía documental verificada de Salkantay.",
      imageLabel: "Salkantay & Humantay"
    },
    {
      id: "vinicunca",
      title: "Vinicunca",
      subtitle: "Camina entre los colores de los Andes",
      type: "Fotografía",
      desc: "La Montaña de Siete Colores se encuentra por encima de los 5,000 m s. n. m. Sus franjas de color se relacionan con las formaciones geológicas del lugar. Prioriza aclimatación y condiciones meteorológicas adecuadas.",
      ref: "[7]",
      icon: Sparkles,
      isConceptual: true,
      caption: "*Recurso gráfico inspirado en montañas de colores. No utilizar como fotografía documental de Vinicunca.",
      imageLabel: "Montaña Vinicunca"
    },
    {
      id: "palccoyo",
      title: "Palccoyo",
      subtitle: "Una alternativa de montañas de colores",
      type: "Fotografía",
      desc: "Palccoyo ofrece montañas coloreadas y panoramas de la cordillera Vilcanota. Su caminata habitual es más corta que la de Vinicunca, aunque se desarrolla a gran altitud.",
      ref: "[8]",
      icon: Mountain,
      imageLabel: "Cordillera Palccoyo"
    },
    {
      id: "ausangate",
      title: "Ausangate y Siete Lagunas",
      subtitle: "El paisaje de la cordillera Vilcanota",
      type: "Trekking",
      desc: "Las rutas en torno al Ausangate atraviesan lagunas altoandinas, zonas de pastoreo y comunidades andinas. Una experiencia para visitantes preparados para trekking de montaña.",
      ref: "[9]",
      icon: Footprints,
      caption: "*Imagen aportada para el bloque Ausangate. Confirmar autoría y localización antes de su uso público.",
      imageLabel: "Ausangate"
    },
    {
      id: "valle-sur",
      title: "Valle Sur",
      subtitle: "Ingeniería del agua, historia y arte",
      type: "Cultura",
      desc: "Descubre Tipón y sus canales hidráulicos incas, continúa hacia Pikillaqta, antiguo asentamiento Wari, y conoce Andahuaylillas y su patrimonio artístico. Una ruta que conecta especialmente con nuestra identidad ligada al agua.",
      ref: "[10]",
      icon: Droplets,
      isConceptual: true,
      caption: "*Representación visual del manejo del agua en piedra. No identificar como fotografía documental de Tipón.*",
      imageLabel: "Valle Sur & Tipón"
    }
  ];

  const filteredRoutes = activeTab === 'all' 
    ? routesData 
    : routesData.filter(r => r.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-[#00252B] text-[#F1EAE0] font-manrope selection:bg-[#C89B4A]/30 selection:text-[#E1BD78] overflow-x-hidden antialiased">
      
      {/* GLOBAL STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        h1, h2, h3, h4, h5, h6, .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
        }
      `}} />

      {/* HEADER / NAVIGATION */}
      <header className="fixed w-full z-50 top-0 bg-[#00252B]/90 backdrop-blur-lg border-b border-[#C89B4A]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 group-hover:border-[#E1BD78] transition-colors" />
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-[0.2em] text-[#F1EAE0] uppercase leading-none">LIRKAY</span>
              <span className="text-[9px] tracking-[0.3em] text-[#C89B4A] uppercase font-semibold mt-1">Altitude Boost</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-widest text-[#F1EAE0]/80 hover:text-[#E1BD78] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-[#C89B4A]/30 mx-2"></div>
            <div className="flex items-center gap-1 text-xs font-semibold">
              <span className="text-[#E1BD78] px-1.5 py-0.5 rounded border border-[#C89B4A]/40">ES</span>
              <span className="text-[#F1EAE0]/40 px-1.5 py-0.5 hover:text-[#F1EAE0] cursor-pointer">EN</span>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-[#F1EAE0] p-2 focus:outline-none border border-[#C89B4A]/30 rounded-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#00252B] border-b border-[#C89B4A]/30 py-6 px-6 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-lg font-heading text-[#F1EAE0] border-b border-[#F1EAE0]/10 pb-2 hover:text-[#E1BD78]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 text-xs tracking-widest uppercase">
                <span className="text-[#F1EAE0]/60">Idioma:</span>
                <div className="flex gap-4">
                  <span className="text-[#E1BD78] font-bold">Español</span>
                  <span className="text-[#F1EAE0]/40">English</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-noise overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003B46] border border-[#C89B4A]/40 mb-6 rounded-full">
                <Sparkles size={14} className="text-[#C89B4A]" />
                <span className="text-[#E1BD78] tracking-[0.2em] uppercase text-[11px] font-semibold">
                  Origen Cusqueño · Hidratación Funcional
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[1.05] uppercase tracking-wide text-[#F1EAE0]">
                De Cusco para <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B4A] via-[#E1BD78] to-[#C89B4A]">
                  acompañarte más alto.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-base sm:text-lg text-[#F1EAE0]/85 mb-8 max-w-2xl leading-relaxed">
                LIRKAY Altitude Boost combina agua, electrolitos y muña en una bebida creada para acompañar tu hidratación mientras descubres Cusco. Desde una caminata entre montañas hasta un recorrido por el Valle Sagrado, queremos estar contigo en cada nueva experiencia.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="#altitude-boost" 
                  className="px-8 py-4 bg-[#C89B4A] hover:bg-[#E1BD78] text-[#00252B] font-bold tracking-widest text-xs uppercase transition-all duration-300 text-center shadow-lg hover:shadow-[#C89B4A]/20"
                >
                  Descubre Lirkay
                </a>
                <a 
                  href="#explora-cusco" 
                  className="px-8 py-4 border border-[#C89B4A] text-[#E1BD78] hover:bg-[#C89B4A]/10 font-bold tracking-widest text-xs uppercase transition-all duration-300 text-center"
                >
                  Explora Cusco
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual Asset */}
          {/* Hero Visual Asset */}
<div className="lg:col-span-5 mt-12 lg:mt-0">
  <Reveal delay={0.3}>
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-full xl:max-w-lg group">
      {/* Resplandor de fondo mejorado (Glow) */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C89B4A] to-[#0099AE] opacity-20 blur-2xl rounded-[3rem] transition-all duration-700 group-hover:opacity-40 group-hover:blur-3xl"></div>
      
      {/* Contenedor de la imagen */}
      <ImageSlot
        src="/img-botella.png"
        alt="LIRKAY Altitude Boost - Presentaciones Oficiales"
        isConceptual={true}
        caption="Presentaciones conceptuales de LIRKAY Altitude Boost sobre paisaje andino."
        className="relative w-full h-auto aspect-square sm:aspect-[4/5] rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#C89B4A]/30 overflow-hidden ring-1 ring-white/10"
      />
    </div>
  </Reveal>
</div>
        </div>
      </section>

      {/* 2. NUESTRA ESENCIA */}
      <section id="nuestra-esencia" className="py-24 bg-[#003B46] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C89B4A]/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6">
          
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">Identidad & Raíces</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 uppercase tracking-widest">Nuestra Esencia</h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.15}>
              <div className="space-y-6 text-[#F1EAE0]/85">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#E1BD78] border-b border-[#C89B4A]/30 pb-3">
                  LIRKAY. El encuentro de nuestras aguas
                </h3>
                <p className="leading-relaxed">
                  Para nuestra marca, LIRKAY expresa la unión o bifurcación del agua. Es un significado que representa nuestras raíces, el encuentro entre naturaleza y personas y el compromiso con nuestro territorio.
                </p>
                <p className="leading-relaxed">
                  Nacimos en Cusco como un emprendimiento familiar. Somos una marca de <strong>Corporación JOSAPI Perú S.A.C.</strong>, con operaciones en San Jerónimo, Cusco. Apostamos por transformar recursos y conocimientos de nuestra región en bebidas que reflejan origen, calidad e innovación.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="bg-[#10191B] p-8 sm:p-10 border border-[#C89B4A]/30 relative shadow-2xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C89B4A]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C89B4A]"></div>
                
                <div className="flex items-center gap-3 mb-4 text-[#C89B4A]">
                  <Droplets size={24} />
                  <h4 className="text-xl font-heading font-bold text-[#E1BD78] uppercase">El agua que inspira nuestra historia</h4>
                </div>
                
                <p className="text-sm sm:text-base text-[#F1EAE0]/80 leading-relaxed mb-6">
                  Nuestra fuente se ubica en la parte alta de San Jerónimo, sector Huaccoto, en el entorno del <strong>Apu Pachatusan</strong>, a más de 4,000 metros sobre el nivel del mar. Allí empieza la historia del agua de origen cusqueño que inspira LIRKAY.
                </p>
                
                <div className="pt-4 border-t border-[#C89B4A]/20">
                  <p className="font-heading text-lg sm:text-xl italic text-[#C89B4A] text-center">
                    "De nuestra tierra, para tu mesa. De los Andes de Cusco, para el mundo."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 3. CUSCO: UNA EXPERIENCIA EN ALTURA */}
      <section className="py-24 bg-[#00252B] relative">
        <ChakanaDivider />
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#E1BD78] mb-6 uppercase tracking-widest">
                Cusco: Una experiencia en altura
              </h2>
              <p className="text-[#F1EAE0]/85 leading-relaxed text-base sm:text-lg mb-6">
                Cusco se vive entre calles de piedra, centros arqueológicos, valles, lagunas y montañas. La ciudad se encuentra aproximadamente a 3,350 m s. n. m. Muchas rutas de trekking conducen a altitudes mayores de 4,000 metros.
              </p>
              <p className="text-[#F1EAE0]/80 leading-relaxed text-sm sm:text-base mb-8">
                Al llegar desde una zona de menor altitud, el organismo necesita tiempo para adaptarse. La altura puede provocar dolor de cabeza, cansancio o náuseas en algunas personas. La condición física no elimina ese riesgo [1].
              </p>
              <p className="font-heading text-2xl text-[#C89B4A] italic">
                Disfrutar Cusco también significa prepararte para vivir la altura.
              </p>
            </Reveal>
          </div>

          {/* Gráfico Interactivo de Altitudes */}
          <Reveal delay={0.2}>
            <div className="bg-[#10191B] border border-[#C89B4A]/30 p-6 sm:p-10 rounded-sm max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C89B4A]/20">
                <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#E1BD78] font-bold flex items-center gap-2">
                  <Mountain size={18} className="text-[#C89B4A]" />Perfil de Altitud en Rutas Cusqueñas
                </h3>
                <span className="text-[11px] text-[#F1EAE0]/50">Valores en m s. n. m.</span>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Machu Picchu", height: 2430, percent: "48%" },
                  { name: "Cusco (Ciudad)", height: 3350, percent: "67%" },
                  { name: "Apu Pachatusan", height: 4000, percent: "80%" },
                  { name: "Vinicunca (Montaña 7 Colores)", height: 5000, percent: "100%" }
                ].map((item, idx) => (
                  <div key={item.name} className="relative">
                    <div className="flex justify-between text-xs sm:text-sm mb-2 font-medium">
                      <span className="text-[#F1EAE0]">{item.name}</span>
                      <span className="text-[#C89B4A] font-mono font-bold">{item.height.toLocaleString()} m</span>
                    </div>
                    <div className="h-3 w-full bg-[#003B46] rounded-r-full overflow-hidden p-0.5 border border-[#C89B4A]/20">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.percent }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#0099AE] via-[#C89B4A] to-[#E1BD78] rounded-r-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 4. CONOCE LIRKAY ALTITUDE BOOST */}
      <section id="altitude-boost" className="py-24 bg-[#003B46] relative border-t border-[#C89B4A]/20">
        <div className="max-w-6xl mx-auto px-6">
          
          <Reveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">LIRKAY / Altitude Boost</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 mb-6 uppercase tracking-widest">
                Conoce LIRKAY Altitude Boost
              </h2>
              <p className="text-lg text-[#F1EAE0]/90 leading-relaxed">
                LIRKAY Altitude Boost es una bebida de hidratación funcional con identidad andina, concebida para acompañar a viajeros, turistas y personas que disfrutan las actividades al aire libre.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            
            <div className="lg:col-span-6 space-y-8">
              <Reveal delay={0.15}>
                <div className="bg-[#10191B] p-6 border-l-4 border-[#C89B4A] space-y-3">
                  <div className="flex items-center gap-3 text-[#E1BD78]">
                    <Leaf size={22} />
                    <h3 className="text-xl font-heading font-bold uppercase tracking-wider">Agua + Electrolitos + Muña</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#F1EAE0]/80 leading-relaxed">
                    La muña (<em>Minthostachys mollis</em>) es una planta aromática de los Andes, documentada por su uso tradicional en el Perú [2]. En LIRKAY representa nuestra conexión con la biodiversidad, los aromas y la cultura cusqueña.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="space-y-4">
                  <p className="font-heading text-2xl text-[#F1EAE0] leading-snug">
                    "De la ciudad a la montaña. Del Valle Sagrado al trekking. De Cusco a tu próxima aventura."
                  </p>
                  <p className="text-[#C89B4A] font-bold tracking-widest text-sm uppercase">LIRKAY Altitude Boost. Sigue tu ruta.</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <ImageSlot
                  src={ASSETS.PRODUCT_SHOWCASE}
                  alt="Presentaciones LIRKAY: Botella 330ml, Lata y Caja 4-Pack"
                  isConceptual={true}
                  caption="Empaques conceptuales de LIRKAY Altitude Boost: Botella retro de cierre mecánico, lata y caja 4-pack."
                  className="w-full aspect-square rounded-t-full border-t border-[#C89B4A]"
                />
              </Reveal>
            </div>

          </div>

          {/* Aviso Médico Prominente */}
          <Reveal delay={0.3}>
            <div className="border border-[#C89B4A]/50 bg-[#10191B] p-6 sm:p-8 rounded-sm mb-12 shadow-2xl">
              <div className="flex items-start gap-4">
                <ShieldAlert className="text-[#C89B4A] flex-shrink-0 mt-1" size={26} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#E1BD78] font-bold mb-1">Aviso Importante de Salud</h4>
                  <p className="text-[#F1EAE0] leading-relaxed text-sm sm:text-base">
                    Una hidratación adecuada acompaña la actividad física, pero ninguna bebida sustituye la aclimatación gradual ni constituye tratamiento para el mal de altura [1].
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Etiqueta / Nutricional Componente Pendiente */}
          <Reveal delay={0.35}>
            <Pendiente text="Los datos exactos de la tabla nutricional e ingredientes finales se mostrarán una vez confirmados administrativamente.">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-heading font-bold text-[#E1BD78] mb-3 uppercase">Ingredientes y Tabla Nutricional</h4>
                  <p className="text-sm text-[#F1EAE0]/80 mb-4">
                    Visualización previa de la etiqueta posterior del producto.
                  </p>
                  <ul className="text-xs text-[#F1EAE0]/70 space-y-2 font-mono">
                    <li className="flex justify-between border-b border-[#C89B4A]/20 pb-1"><span>Porción:</span><span>330 ml</span></li>
                    <li className="flex justify-between border-b border-[#C89B4A]/20 pb-1"><span>Energía:</span><span>8 kcal</span></li>
                    <li className="flex justify-between border-b border-[#C89B4A]/20 pb-1"><span>Sodio:</span><span>10 mg</span></li>
                    <li className="flex justify-between border-b border-[#C89B4A]/20 pb-1"><span>Azúcares:</span><span>0 g</span></li>
                  </ul>
                </div>
                <div>
                  <ImageSlot
                    src={ASSETS.LABEL_NUTRITION}
                    alt="Etiqueta Posterior LIRKAY Altitude Boost"
                    className="w-full h-auto max-h-[220px]"
                  />
                </div>
              </div>
            </Pendiente>
          </Reveal>

        </div>
      </section>

      {/* 5. EXPLORA CUSCO */}
      <section id="explora-cusco" className="py-24 bg-[#00252B] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">Rutas & Destinos</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 mb-6 uppercase tracking-widest">
                Explora Cusco
              </h2>
              <p className="text-[#F1EAE0]/85 text-base sm:text-lg leading-relaxed mb-4">
                Cada botella puede ser una puerta de entrada a Cusco. Recorre nuestros paisajes, descubre sitios arqueológicos y elige una experiencia que conecte contigo.
              </p>
              <p className="text-xs text-[#C89B4A] border border-[#C89B4A]/40 inline-block px-4 py-2 bg-[#003B46]/40 uppercase tracking-wider">
                Consulta las condiciones de acceso, permisos y clima antes de cada recorrido.
              </p>
            </Reveal>
          </div>

          {/* Filtros de Rutas */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {['all', 'Cultura', 'Trekking', 'Fotografía'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-[#C89B4A] text-[#00252B] font-bold' 
                    : 'bg-[#10191B] text-[#F1EAE0]/70 border border-[#C89B4A]/20 hover:border-[#C89B4A]'
                }`}
              >
                {tab === 'all' ? 'Todas las Rutas' : tab}
              </button>
            ))}
          </div>

          {/* Grid de Cards de Rutas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRoutes.map((route, idx) => (
              <Reveal key={route.id} delay={idx * 0.08}>
                <div className="group bg-[#10191B] border border-[#C89B4A]/20 hover:border-[#C89B4A] transition-all duration-300 flex flex-col h-full shadow-lg">
                  <ImageSlot 
                    alt={route.imageLabel}
                    isConceptual={route.isConceptual}
                    caption={route.caption}
                    fallbackIcon={route.icon}
                    className="h-44 w-full"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#0099AE] font-bold">{route.type}</span>
                      <span className="text-[10px] text-[#C89B4A]">{route.ref}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#E1BD78] mb-1">{route.title}</h3>
                    <p className="text-xs text-[#C89B4A] uppercase tracking-wide mb-3 font-medium">{route.subtitle}</p>
                    <p className="text-xs text-[#F1EAE0]/70 leading-relaxed mb-4 flex-grow">{route.desc}</p>
                    <a 
                      href="#contacto" 
                      className="text-xs text-[#E1BD78] hover:text-[#F1EAE0] flex items-center gap-1 transition-colors mt-auto pt-2 border-t border-[#C89B4A]/10 font-semibold"
                    >
                      Ver Referencia {route.ref} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ruta Lares (Destacada al final) */}
          <Reveal delay={0.2} className="mt-8">
            <div className="bg-[#10191B] border border-[#C89B4A]/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <ImageSlot 
                  alt="Valle de Lares" 
                  fallbackIcon={MapPin}
                  className="h-48 w-full" 
                />
              </div>
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0099AE] font-bold mb-1">
                  <span>Cultura Viva & Trekking</span> · <span>[11]</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#E1BD78] mb-2">Lares</h3>
                <p className="text-xs text-[#C89B4A] uppercase tracking-wide mb-3">Caminos y cultura viva</p>
                <p className="text-sm text-[#F1EAE0]/80 leading-relaxed mb-4">
                  El valle de Lares reúne aguas termales, escenarios montañosos, lagunas y comunidades dedicadas a actividades agropecuarias y textiles. Una alternativa para trekking y turismo cultural.
                </p>
                <a href="#contacto" className="text-xs text-[#E1BD78] hover:underline flex items-center gap-1 font-semibold">
                  Explorar información técnica [11] <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 6. VIAJA CON RESPONSABILIDAD */}
      <section className="py-20 bg-[#003B46] border-y border-[#C89B4A]/30">
        <div className="max-w-4xl mx-auto px-6">
          
          <Reveal>
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-full border border-[#C89B4A] flex items-center justify-center mx-auto mb-4 text-[#C89B4A]">
                <Wind size={24} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E1BD78] uppercase tracking-widest">
                Viaja con responsabilidad
              </h2>
              <p className="text-xl text-[#F1EAE0] font-heading italic mt-2">"Antes de subir, escucha a tu cuerpo."</p>
            </div>
          </Reveal>

          <div className="space-y-4 mb-10">
            {[
              "Reserva tiempo para adaptarte antes de realizar los recorridos más exigentes.",
              "Planifica ascensos progresivos y evita el esfuerzo intenso al llegar a la altura.",
              "Mantente hidratado según tus necesidades y condiciones de actividad.",
              "Si los síntomas de altura empeoran, no sigas ascendiendo y busca asistencia médica.",
              "Respeta caminos señalizados, comunidades locales y normas de las áreas culturales y naturales."
            ].map((rec, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-4 bg-[#10191B]/80 border border-[#C89B4A]/20">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#C89B4A] flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-[#F1EAE0]/90 leading-relaxed">{rec}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="bg-[#00252B] p-6 border-l-2 border-[#C89B4A]">
              <p className="text-xs sm:text-sm text-[#F1EAE0]/80 leading-relaxed">
                El CDC destaca la importancia de la aclimatación y del ascenso gradual. <strong>La hidratación por sí sola no previene el mal agudo de montaña [1].</strong>
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 7. TRIPLE IMPACTO */}
      <section id="triple-impacto" className="py-24 bg-[#00252B] relative">
        <ChakanaDivider />
        <div className="max-w-7xl mx-auto px-6">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">Sostenibilidad & Compromiso</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 mb-4 uppercase tracking-widest">
                Nuestro Compromiso de Triple Impacto
              </h2>
              <p className="text-xl text-[#C89B4A] font-heading italic mb-6">
                "Nuestro origen también define nuestra responsabilidad."
              </p>
              <p className="text-[#F1EAE0]/80 leading-relaxed text-sm sm:text-base">
                En LIRKAY impulsamos una visión empresarial que integra valor social, ambiental y económico. Nuestro objetivo es vincular el crecimiento de la marca con una cadena responsable y una mejor experiencia para quienes visitan Cusco.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[#10191B] p-8 border-t-2 border-[#C89B4A] h-full flex flex-col justify-between">
                <div>
                  <Users size={32} className="text-[#C89B4A] mb-6" />
                  <h3 className="text-xl font-heading font-bold text-[#E1BD78] mb-1 uppercase">Impacto Social</h3>
                  <p className="text-xs text-[#C89B4A] tracking-widest uppercase mb-4 font-semibold">Crecemos con nuestras comunidades</p>
                  <p className="text-xs sm:text-sm text-[#F1EAE0]/75 leading-relaxed mb-6">
                    Priorizamos la articulación con proveedores locales y buscamos fortalecer vínculos con comunidades altoandinas y amazónicas dedicadas al cultivo y aprovechamiento responsable de insumos naturales, entre ellos plantas aromáticas como la muña. Valoramos los conocimientos tradicionales y buscamos relaciones de abastecimiento claras y justas. Nuestro compromiso social también abarca al visitante: ofrecer una experiencia de calidad y compartir información útil sobre el territorio, la hidratación y las actividades en altura.
                  </p>
                </div>
                <p className="font-heading italic text-[#E1BD78] text-sm border-t border-[#C89B4A]/20 pt-4">
                  Valoramos a quienes cuidan nuestro origen y a quienes vienen a conocerlo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="bg-[#10191B] p-8 border-t-2 border-[#0099AE] h-full flex flex-col justify-between">
                <div>
                  <Leaf size={32} className="text-[#0099AE] mb-6" />
                  <h3 className="text-xl font-heading font-bold text-[#E1BD78] mb-1 uppercase">Impacto Ambiental</h3>
                  <p className="text-xs text-[#0099AE] tracking-widest uppercase mb-4 font-semibold">Reducir, recuperar y valorizar</p>
                  <p className="text-xs sm:text-sm text-[#F1EAE0]/75 leading-relaxed mb-6">
                    Apostamos por reducir nuestra dependencia del PET de un solo uso mediante envases de vidrio y aluminio y esquemas de recuperación, retorno y reciclaje cuando sean viables. También promovemos la segregación de residuos y el aprovechamiento de materia orgánica apta para compostaje. La sostenibilidad exige medir resultados. Por eso la recuperación de envases, la reducción de residuos y la valorización orgánica deben comunicarse mediante indicadores verificables, sin equiparar automáticamente reciclabilidad con menor impacto ambiental.
                  </p>
                </div>
                <p className="font-heading italic text-[#E1BD78] text-sm border-t border-[#C89B4A]/20 pt-4">
                  Una experiencia más responsable comienza con nuestras decisiones de producción y consumo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-[#10191B] p-8 border-t-2 border-[#C89B4A] h-full flex flex-col justify-between">
                <div>
                  <Globe size={32} className="text-[#C89B4A] mb-6" />
                  <h3 className="text-xl font-heading font-bold text-[#E1BD78] mb-1 uppercase">Impacto Económico</h3>
                  <p className="text-xs text-[#C89B4A] tracking-widest uppercase mb-4 font-semibold">Más valor desde Cusco</p>
                  <p className="text-xs sm:text-sm text-[#F1EAE0]/75 leading-relaxed mb-6">
                    Buscamos desarrollar demanda estable para proveedores y crear oportunidades de trabajo en abastecimiento, producción, distribución y comercialización. Al integrar insumos de origen local en productos con valor agregado, queremos fortalecer la actividad económica regional y las relaciones comerciales con el sector turístico.
                  </p>
                </div>
                <p className="font-heading italic text-[#E1BD78] text-sm border-t border-[#C89B4A]/20 pt-4">
                  Más valor local. Más oportunidades desde Cusco.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 8. ALINEACIÓN CON LOS ODS */}
      <section className="py-20 bg-[#10191B] border-y border-[#C89B4A]/20">
        <div className="max-w-6xl mx-auto px-6">
          
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-[#E1BD78] mb-12 uppercase tracking-widest">
              Alineación con los Objetivos de Desarrollo Sostenible (ODS)
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { num: "8", title: "Trabajo decente y crecimiento económico", desc: "Oportunidades productivas, empleo y relaciones comerciales responsables." },
              { num: "12", title: "Producción y consumo responsables", desc: "Uso eficiente de recursos, reciclaje, reutilización y valorización de residuos." },
              { num: "15", title: "Vida de ecosistemas terrestres", desc: "Abastecimiento responsable y respeto por la biodiversidad andina y amazónica." },
              { num: "17", title: "Alianzas para lograr los objetivos", desc: "Cooperación con comunidades, instituciones y actores turísticos." }
            ].map((ods, i) => (
              <Reveal key={ods.num} delay={i * 0.1}>
                <div className="p-6 border border-[#C89B4A]/20 bg-[#00252B] hover:border-[#C89B4A] transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-heading font-bold text-[#C89B4A] mb-2">ODS {ods.num}</div>
                    <h4 className="text-sm font-bold text-[#E1BD78] mb-2">{ods.title}</h4>
                    <p className="text-xs text-[#F1EAE0]/70 leading-relaxed">{ods.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="text-center text-[11px] text-[#F1EAE0]/50 max-w-2xl mx-auto border border-[#C89B4A]/20 p-4 bg-[#00252B]/50">
              Tomamos los ODS como marco orientador de nuestros compromisos. Esta alineación no representa una certificación ni un respaldo de Naciones Unidas. [12]
            </p>
          </Reveal>

        </div>
      </section>

      {/* 9. EL EQUIPO */}
      <section id="equipo" className="py-24 bg-[#003B46] relative">
        <div className="max-w-6xl mx-auto px-6">
          
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">Liderazgo & Origen</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 mb-4 uppercase tracking-widest">
                El equipo detrás de LIRKAY
              </h2>
              <p className="text-xl text-[#C89B4A] font-heading italic mb-3">"Somos de Cusco. Creamos desde Cusco."</p>
              <p className="text-sm text-[#F1EAE0]/80">
                Nuestra historia nace en una familia que cree en el potencial de su región y en la posibilidad de innovar con identidad territorial.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { name: "José Apaza Ima", role: "Fundador", desc: "Dirección empresarial y visión del emprendimiento familiar." },
              { name: "Ruth Gloria Apaza Huahuasoncco", role: "Cofundadora", desc: "Gestión económica y financiera." },
              { name: "Abelma Ynes Apaza Huahuasoncco", role: "Cofundadora", desc: "Liderazgo de Altitude Boost, desarrollo e innovación." }
            ].map((member, i) => (
              <Reveal key={member.name} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center p-6 bg-[#10191B] border border-[#C89B4A]/20 h-full">
                  <div className="w-24 h-24 rounded-full border-2 border-[#C89B4A] bg-[#00252B] mb-6 flex items-center justify-center relative shadow-inner">
                    <span className="text-2xl font-heading font-bold text-[#C89B4A]">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#E1BD78] mb-1">{member.name}</h3>
                  <p className="text-[11px] text-[#C89B4A] uppercase tracking-widest mb-3 font-semibold">{member.role}</p>
                  <p className="text-xs text-[#F1EAE0]/75 leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="bg-[#10191B] border border-[#C89B4A]/30 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-2xl">
              <p className="text-xs sm:text-sm text-[#F1EAE0]/90 leading-relaxed">
                LIRKAY Altitude Boost fue seleccionado en el programa <strong>Emprende Andina del Cusco 2026-II</strong> de la Universidad Andina del Cusco y participó en <strong>Startup Weekend Turismo 2026</strong>, donde obtuvo el cuarto lugar y mención honrosa. [13]
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 10. CONTACTO Y CIERRE */}
      <section id="contacto" className="py-24 bg-[#00252B] border-t border-[#C89B4A]/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Texto de Cierre */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal>
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#E1BD78] font-bold">Conecta con Nosotros</span>
                  <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#F1EAE0] mt-2 mb-6 uppercase leading-tight">
                    ¿Hasta dónde te llevará Cusco?
                  </h2>
                  <p className="text-base sm:text-lg text-[#F1EAE0]/80 leading-relaxed mb-4">
                    Una calle. Un valle. Un centro arqueológico. Una laguna. Una montaña. Cada viaje tiene su propia altura.
                  </p>
                  <p className="text-base sm:text-lg text-[#F1EAE0]/80 leading-relaxed mb-8">
                    LIRKAY Altitude Boost está hecho para acompañarte mientras encuentras la tuya.
                  </p>
                  <p className="font-heading text-2xl text-[#C89B4A] italic mb-8">
                    Mantente hidratado. Respeta la montaña. Disfruta el camino.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-6 py-3.5 bg-[#C89B4A] hover:bg-[#E1BD78] text-[#00252B] text-xs font-bold uppercase tracking-widest transition-colors shadow">
                      Encuentra Lirkay
                    </button>
                    <a href="#triple-impacto" className="px-6 py-3.5 border border-[#C89B4A] text-[#E1BD78] hover:bg-[#C89B4A]/10 text-xs font-bold uppercase tracking-widest transition-colors text-center">
                      Conoce Nuestro Impacto
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="bg-[#10191B] p-8 border border-[#C89B4A]/30 shadow-2xl">
                  <h3 className="text-2xl font-heading font-bold text-[#E1BD78] mb-6 uppercase tracking-widest">
                    Escríbenos
                  </h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    {/* Campo Honeypot invisible */}
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="b_website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-widest text-[#F1EAE0]/70 mb-2 font-semibold">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-[#00252B] border border-[#C89B4A]/30 p-3 text-sm text-[#F1EAE0] focus:outline-none focus:border-[#C89B4A] transition-colors" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-[#F1EAE0]/70 mb-2 font-semibold">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-[#00252B] border border-[#C89B4A]/30 p-3 text-sm text-[#F1EAE0] focus:outline-none focus:border-[#C89B4A] transition-colors" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-widest text-[#F1EAE0]/70 mb-2 font-semibold">Mensaje</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        required 
                        placeholder="¿Cómo podemos ayudarte?"
                        className="w-full bg-[#00252B] border border-[#C89B4A]/30 p-3 text-sm text-[#F1EAE0] focus:outline-none focus:border-[#C89B4A] transition-colors resize-none"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <input type="checkbox" id="consent" required className="mt-1 accent-[#C89B4A]" />
                      <label htmlFor="consent" className="text-xs text-[#F1EAE0]/70 leading-relaxed">
                        Acepto la <a href="#" className="text-[#C89B4A] underline hover:text-[#E1BD78]">política de privacidad</a> y el tratamiento de datos personales.
                      </label>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-[#C89B4A] hover:bg-[#E1BD78] text-[#00252B] text-xs font-bold uppercase tracking-widest transition-colors shadow-lg mt-4"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER & FUENTES */}
      <footer className="bg-[#10191B] py-12 border-t border-[#C89B4A]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="font-heading text-xl font-bold tracking-widest text-[#F1EAE0] uppercase">LIRKAY</span>
            </div>
            <p className="text-center md:text-right text-xs text-[#F1EAE0]/60 max-w-md leading-relaxed">
              LIRKAY. Pureza e identidad desde Cusco. <br/> 
              Una marca de <strong>Corporación JOSAPI Perú S.A.C.</strong> · San Jerónimo, Cusco, Perú.
            </p>
          </div>

          <div className="border-t border-[#C89B4A]/10 pt-8">
            <h4 className="text-xs uppercase tracking-widest text-[#E1BD78] mb-4 font-bold">Fuentes y Referencias Oficiales</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-[10px] text-[#F1EAE0]/50 leading-normal">
              <p>[1] CDC (2025). High-Altitude Travel and Altitude Illness.</p>
              <p>[2] Cano et al. (2008). Actividad antimicótica in vitro de Minthostachys mollis.</p>
              <p>[3] UNESCO. City of Cuzco.</p>
              <p>[4] PROMPERÚ. Valle Sagrado.</p>
              <p>[5] UNESCO. Historic Sanctuary of Machu Picchu.</p>
              <p>[6] PROMPERÚ. Nevado Salkantay.</p>
              <p>[7] PROMPERÚ. Vinicunca, montaña de siete colores.</p>
              <p>[8] PROMPERÚ. Palccoyo.</p>
              <p>[9] PROMPERÚ. Nevados importantes del Perú.</p>
              <p>[10] PROMPERÚ. Tipón, ciudadela del agua.</p>
              <p>[11] PROMPERÚ. Lares.</p>
              <p>[12] Naciones Unidas. Objetivos de Desarrollo Sostenible.</p>
              <p>[13] Universidad Andina del Cusco (2026). Emprende Andina 2026-II.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
