import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Play, Check, Star, Send, Instagram, Twitter, Linkedin, Github, Menu, X, ArrowRight, MoreHorizontal, Mail, MessageSquare, ArrowUp, ChevronDown, Layout, Cpu, Film, Palette, Monitor, MessageCircle, Infinity, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import * as CONSTANTS from './constants';

// --- Components ---

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");
  
  // Extract number and suffix (e.g., "2000+" -> 2000 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration });
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toLocaleString());
    });
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const AnimatedDots = () => {
  return (
    <div className="flex gap-1.5 items-center">
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        className="w-2 h-2 rounded-full bg-white/40" 
      />
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        className="w-2 h-2 rounded-full bg-white/40" 
      />
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="w-2 h-2 rounded-full bg-white" 
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[100]">
      <motion.nav 
        layout
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : '64px',
          borderRadius: isOpen ? '32px' : '9999px'
        }}
        className="bg-black/80 backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Navbar Header (Always visible) */}
        <div className="h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={CONSTANTS.SITE_INFO.logo} 
              alt={`${CONSTANTS.SITE_INFO.name} Logo`} 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-black text-xl tracking-tighter text-white lowercase">{CONSTANTS.SITE_INFO.name.replace(/\s/g, '').toLowerCase()}</span>
          </div>
          
          <button 
            className="hover:bg-white/5 transition-colors p-2 rounded-full" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <AnimatedDots />}
          </button>
        </div>
        
        {/* Expanded Menu Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-8 pb-8 flex flex-col"
            >
              <div className="h-[1px] w-full bg-white/10 mb-8" />
              
              <div className="flex flex-col gap-6">
                {CONSTANTS.NAVIGATION.map((item, idx) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label} 
                    href={item.href} 
                    className="text-2xl font-black text-white/60 hover:text-brand transition-colors uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href={`https://wa.me/2250708105701?text=${encodeURIComponent(`Bonjour AKA Junior,\n\nJe souhaite démarrer un projet avec vous.\n\nPouvez-vous me renseigner sur vos services ?`)}`}
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand text-white py-4 rounded-2xl font-black text-center block text-lg uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20"
                >
                  Démarrer un projet
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Background Overlay (Click to close) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-md h-screen w-screen left-1/2 -translate-x-1/2 top-[-24px]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ScanningLights = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Horizontal Pulses */}
      <div className="grid-pulse-h" style={{ top: '40px', left: '0', animationDelay: '0s' }} />
      <div className="grid-pulse-h" style={{ top: '160px', left: '0', animationDelay: '1.2s' }} />
      <div className="grid-pulse-h" style={{ top: '280px', left: '0', animationDelay: '0.5s' }} />
      <div className="grid-pulse-h" style={{ top: '400px', left: '0', animationDelay: '1.8s' }} />
      <div className="grid-pulse-h" style={{ top: '520px', left: '0', animationDelay: '0.3s' }} />
      <div className="grid-pulse-h" style={{ top: '640px', left: '0', animationDelay: '1.5s' }} />
      <div className="grid-pulse-h" style={{ top: '760px', left: '0', animationDelay: '0.7s' }} />
      <div className="grid-pulse-h" style={{ top: '880px', left: '0', animationDelay: '1.1s' }} />
      
      {/* Vertical Pulses */}
      <div className="grid-pulse-v" style={{ left: '40px', top: '0', animationDelay: '0.8s' }} />
      <div className="grid-pulse-v" style={{ left: '200px', top: '0', animationDelay: '0s' }} />
      <div className="grid-pulse-v" style={{ left: '360px', top: '0', animationDelay: '1.4s' }} />
      <div className="grid-pulse-v" style={{ left: '520px', top: '0', animationDelay: '0.4s' }} />
      <div className="grid-pulse-v" style={{ left: '680px', top: '0', animationDelay: '1.9s' }} />
      <div className="grid-pulse-v" style={{ left: '840px', top: '0', animationDelay: '0.2s' }} />
      <div className="grid-pulse-v" style={{ left: '1000px', top: '0', animationDelay: '1.3s' }} />
      <div className="grid-pulse-v" style={{ left: '1160px', top: '0', animationDelay: '0.6s' }} />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative self-end mt-12 lg:mt-0 order-1 lg:order-2"
          >
            <div className="relative z-10 w-full h-[500px] md:h-[600px] lg:h-[700px]">
              <img 
                src={CONSTANTS.HERO.image} 
                alt={`${CONSTANTS.SITE_INFO.name} Portrait`} 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left py-12 lg:py-20 relative z-30 order-2 lg:order-1"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {CONSTANTS.HERO.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60 bg-bg-dark/50 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase text-white font-black tracking-tighter">
              {CONSTANTS.HERO.title.main} <br />
              <span className="text-brand italic">{CONSTANTS.HERO.title.highlight}</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed">
              {CONSTANTS.HERO.description}
            </p>
            
            <a href="#services" className="inline-block bg-brand text-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-brand/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand/20">
              {CONSTANTS.HERO.cta}
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-12 md:gap-24 border-t border-white/5 pt-12"
        >
          {CONSTANTS.HERO.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl md:text-6xl font-black mb-1 text-white">
                <Counter value={stat.value} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="à propos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{CONSTANTS.ABOUT.badge}</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase mb-10 leading-tight">
          {CONSTANTS.ABOUT.title.main} <br />
          <span className="text-brand italic">{CONSTANTS.ABOUT.title.highlight}</span>
        </h2>
        <p className="text-white/60 text-lg max-w-4xl leading-relaxed">
          {CONSTANTS.ABOUT.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CONSTANTS.ABOUT.cards.map((card, idx) => (
          <div key={idx} className="bg-card-dark p-10 rounded-3xl border border-white/5 hover:border-brand/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
              {idx === 0 && <div className="w-6 h-6 rounded-full border-2 border-brand flex items-center justify-center"><div className="w-2 h-2 bg-brand rounded-full" /></div>}
              {idx === 1 && <div className="w-6 h-6 bg-brand/40 rounded-sm flex items-center justify-center"><div className="w-3 h-1 bg-brand rounded-full" /></div>}
              {idx === 2 && <div className="w-6 h-6 border-2 border-brand rounded-sm flex items-end justify-center pb-1"><div className="w-4 h-1 bg-brand" /></div>}
            </div>
            <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-brand transition-colors">{card.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
  const filteredItems = filter === 'Tous' ? CONSTANTS.PORTFOLIO.items : CONSTANTS.PORTFOLIO.items.filter(i => i.type === filter);
  
  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl uppercase mb-8">{CONSTANTS.PORTFOLIO.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {CONSTANTS.PORTFOLIO.filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                filter === f ? 'bg-brand text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => {
                setSelectedItem(item);
                setSelectedImageIndex(0);
              }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-card-dark border border-white/5 cursor-pointer"
            >
              {item.type === 'Vidéos' ? (
                <>
                  <video 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-brand/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-brand/50">
                      <Play className="text-white fill-white w-6 h-6 ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand text-xs font-bold uppercase tracking-widest mb-2">{item.type}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
              </div>
              
              {item.type === 'Vidéos' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl shadow-brand/50">
                    <Play className="text-white fill-white ml-1" />
                  </div>
                </div>
              )}
              
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 border-2 border-brand/0 group-hover:border-brand/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center cursor-default my-auto"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="w-full">
                {/* Main Image */}
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-brand/20">
                  {selectedItem.type === 'Vidéos' ? (
                    <video 
                      src={selectedItem.img} 
                      className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                      controls
                      autoPlay
                      muted
                    />
                  ) : (
                    <img 
                      src={selectedItem.gallery && selectedItem.gallery.length > 0 
                        ? [selectedItem.img, ...selectedItem.gallery][selectedImageIndex] 
                        : selectedItem.img} 
                      alt={selectedItem.title} 
                      className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>
              
              {/* Gallery for images */}
              {selectedItem.type === 'Images' && (
                <div className="mt-8">
                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
                    {[selectedItem.img, ...(selectedItem.gallery || [])].map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-full h-20 object-cover rounded-xl border-2 transition-all ${
                          selectedImageIndex === idx 
                            ? 'border-brand shadow-lg shadow-brand/30' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${selectedItem.title} ${idx + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                        {selectedImageIndex === idx && (
                          <div className="absolute inset-0 bg-brand/20 rounded-xl pointer-events-none" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-8 text-center px-6">
                <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{selectedItem.type}</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{CONSTANTS.SERVICES.badge}</span>
          <h2 className="text-4xl md:text-6xl uppercase mb-8">{CONSTANTS.SERVICES.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSTANTS.SERVICES.items.map((service, idx) => (
            <div key={idx} className="group relative bg-card-dark rounded-3xl border border-white/5 hover:border-brand/30 transition-all duration-300 flex flex-col overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent" />
                <div className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                  {service.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tight leading-tight">{service.title}</h3>
                <p className="text-white/60 text-sm mb-8 flex-grow leading-relaxed">{service.desc}</p>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full border border-white/10 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-brand hover:border-brand transition-all"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-card-dark rounded-[40px] border border-white/10 p-8 md:p-12 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-brand transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-8">{selectedService.icon}</div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white">{selectedService.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                {selectedService.details}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {selectedService.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  const whatsappMessage = `Bonjour AKA Junior,\n\nJe suis intéressé(e) par votre service : ${selectedService.title}\n\nJe souhaite démarrer un projet avec vous. Pouvez-vous me renseigner sur ce service ?`;
                  const whatsappUrl = `https://wa.me/2250708105701?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, '_blank');
                  setSelectedService(null);
                }}
                className="w-full bg-brand text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand/90 transition-all"
              >
                Démarrer un projet
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Formations = () => {
  return (
    <section id="formations" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{CONSTANTS.FORMATIONS.badge}</span>
          <h2 className="text-4xl md:text-6xl uppercase mb-8">{CONSTANTS.FORMATIONS.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONSTANTS.FORMATIONS.items.map((course, idx) => (
            <div key={idx} className="bg-card-dark/40 backdrop-blur-sm rounded-[32px] border border-white/5 flex flex-col group hover:border-brand/30 transition-all duration-500 overflow-hidden">
              {/* Course Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent" />
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  {course.icon}
                </div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-md">
                  {course.badge}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">{course.title}</h3>
                
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  {course.desc}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {course.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Info Bar */}
                <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    <Monitor className="w-3.5 h-3.5 text-brand" />
                    <span>E-learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    <MessageCircle className="w-3.5 h-3.5 text-brand" />
                    <span>WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    <Infinity className="w-3.5 h-3.5 text-brand" />
                    <span>Illimité</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(course.link, '_blank')}
                  className="w-full bg-brand text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95"
                >
                  Découvrir la formation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[180px] pointer-events-none opacity-30" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Vos questions, mes réponses</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-white leading-tight">
            Tout ce que vous devez <br />
            <span className="text-brand">savoir</span>
          </h2>
        </div>

        <div className="space-y-4">
          {CONSTANTS.FAQ_DATA.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-card-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-brand/30 ring-1 ring-brand/20' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{CONSTANTS.EXPERTISE.badge}</span>
          <h2 className="text-4xl md:text-6xl uppercase">{CONSTANTS.EXPERTISE.title.main} <span className="text-brand italic">{CONSTANTS.EXPERTISE.title.highlight}</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-12">
            {CONSTANTS.EXPERTISE.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl md:text-6xl font-black mb-1 text-white"><Counter value={stat.value} /></div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CONSTANTS.EXPERTISE.logos.map((logo) => (
              <div key={logo.name} className="aspect-square bg-card-dark border border-white/5 rounded-2xl flex flex-col items-center justify-center group hover:border-brand/30 transition-all">
                <div className="text-3xl font-display font-black mb-2 text-white/20 group-hover:text-brand transition-colors">{logo.icon}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Certifications Marquee - Dark band style */}
      <div className="relative flex overflow-x-hidden bg-black py-6 border-y border-white/5">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {CONSTANTS.EXPERTISE.certs.map((cert, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">{cert}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="témoignages" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl uppercase mb-6">Ils ont transformé leur approche</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CONSTANTS.TESTIMONIALS_DATA.map((review, idx) => (
          <div key={idx} className="bg-card-dark p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 text-brand/10 group-hover:text-brand/20 transition-colors">
              <Star className="w-32 h-32 fill-current" />
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand fill-brand" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              
              <div>
                <div className="font-bold uppercase tracking-tight text-white">{review.name}</div>
                <div className="text-xs text-brand font-bold uppercase tracking-widest">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*Nouveau message de contact*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/2250708105701?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow - Similar to competitor image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/10 blur-[180px] pointer-events-none opacity-50" />
      
      {/* Enhanced Grid Background for this section */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{CONSTANTS.CONTACT.badge}</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            {CONSTANTS.CONTACT.title.main} <span className="text-brand">{CONSTANTS.CONTACT.title.highlight}</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            {CONSTANTS.CONTACT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Form Card */}
          <div className="bg-card-dark/80 backdrop-blur-md p-8 md:p-12 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <form 
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/80 ml-1">Nom</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={CONSTANTS.CONTACT.form.namePlaceholder}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors placeholder:text-white/20"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={CONSTANTS.CONTACT.form.emailPlaceholder}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors placeholder:text-white/20"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/80 ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder={CONSTANTS.CONTACT.form.messagePlaceholder}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-white/20"
                  required
                />
              </div>
              
              <button className="bg-brand text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-brand/80 transition-all shadow-lg shadow-brand/20">
                <Send className="w-5 h-5" /> {CONSTANTS.CONTACT.form.submitButton}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card-dark/80 backdrop-blur-md p-10 rounded-[32px] border border-white/5 flex flex-col items-center text-center group hover:border-brand/30 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 border border-brand/20 relative z-10">
                <Mail className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Email</h3>
              <p className="text-white/40 relative z-10">{CONSTANTS.SITE_INFO.email}</p>
            </div>

            <div className="bg-card-dark/80 backdrop-blur-md p-10 rounded-[32px] border border-white/5 flex flex-col items-center text-center group hover:border-brand/30 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 border border-brand/20 relative z-10">
                <MessageSquare className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">WhatsApp</h3>
              <p className="text-white/40 mb-8 relative z-10">Discutons sur WhatsApp</p>
              <button 
                onClick={() => window.open(CONSTANTS.SITE_INFO.whatsapp, '_blank')}
                className="bg-brand text-white px-8 py-3 rounded-xl font-bold hover:bg-brand/80 transition-all shadow-lg shadow-brand/20 relative z-10"
              >
                Envoyer un message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-brand transition-all z-50 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={CONSTANTS.SITE_INFO.logo} 
              alt={`${CONSTANTS.SITE_INFO.name} Logo`} 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tighter uppercase">{CONSTANTS.SITE_INFO.name}</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs text-center md:text-left">
            {CONSTANTS.SITE_INFO.tagline}
          </p>
        </div>
        
        <div className="flex gap-6">
          {CONSTANTS.SOCIALS.map((social, i) => (
            <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand hover:border-brand transition-all">
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
          {CONSTANTS.SITE_INFO.copyright}
        </div>
      </div>
    </footer>
  );
};

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/10 blur-[150px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -120, 60, 0],
          y: [0, 150, -80, 0],
          scale: [1, 1.1, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-brand/5 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, 80, -40, 0],
          y: [0, -120, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-[25%] h-[25%] bg-brand/10 blur-[100px] rounded-full"
      />
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand selection:text-white">
      <BackgroundBlobs />
      <ScanningLights />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Formations />
        <Expertise />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
