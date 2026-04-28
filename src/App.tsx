/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Users, 
  ChevronRight, 
  Play, 
  Award, 
  Home, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Menu,
  X
} from 'lucide-react';
import { useState, useRef } from 'react';

const WHATSAPP_NUMBER = "2348102480531";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};

const PROPERTIES = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    location: "Lekki Phase 1, Lagos",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Crystal Waters Estate",
    location: "Victoria Island, Lagos",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1600607687940-477a47514a60?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Emerald Heights",
    location: "Ikoyi, Lagos",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 4,
    title: "The Onyx Mansion",
    location: "Asokoro, Abuja",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 5,
    title: "Ivory Sanctuary",
    location: "Maitama, Abuja",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 6,
    title: "Sapphire Residences",
    location: "Guzape, Abuja",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-bg font-sans text-text selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-bg/95 backdrop-blur-md transition-all duration-300 border-b border-gold/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="bg-gold/10 p-1.5 rounded border border-gold/30">
              <Building2 className="text-gold h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter md:text-2xl font-serif text-gold">
              OMEGA TRINITY VIEW
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {['Home', 'About', 'Properties', 'Mentorship'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={getWhatsAppLink("Hi Omega Trinity View, I want to explore premium property deals.")}
              className="rounded-sm bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-gold-dark hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] active:scale-95"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-bg px-6 py-8 md:hidden shadow-xl border-b border-gold/20"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Home', 'About', 'Properties', 'Mentorship'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-muted hover:text-gold"
                >
                  {item}
                </a>
              ))}
              <a 
                href={getWhatsAppLink("Hi Omega Trinity View, I'm interested in your services!")}
                className="rounded-sm bg-gold py-4 text-center text-xs font-bold uppercase tracking-widest text-black"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Mansion" 
            className="h-full w-full object-cover brightness-[0.3]"
            loading="eager"
          />
        </motion.div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
          <motion.div 
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <span className="mb-6 inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-gold backdrop-blur-md uppercase">
              Defining Luxury Living
            </span>
            <h1 className="mb-6 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-text">
              Elevate Your Lifestyle with <span className="italic text-gold">Omega Trinity View</span>
            </h1>
            <p className="mb-10 text-sm sm:text-base md:text-lg uppercase tracking-widest text-muted max-w-2xl font-medium leading-relaxed">
              Premium properties curated for the discerning investor and expert mentorship to build lasting generational wealth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a 
                href={getWhatsAppLink("Hi Omega Trinity View, I am interested in your luxury properties!")}
                className="group flex items-center justify-center gap-3 rounded-sm bg-gold px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-gold-dark hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
              >
                View Properties
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={getWhatsAppLink("Hello! I want to join the Mentorship Program at Omega Trinity View.")}
                className="flex items-center justify-center gap-3 rounded-sm border border-gold/30 bg-transparent px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-md transition-all hover:bg-gold/10"
              >
                Mentorship Program
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="h-2 w-1 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 md:py-32 bg-bg relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office" 
                  className="rounded-lg shadow-2xl border border-gold/10 grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute -bottom-10 -right-10 hidden md:block w-64 rounded-sm bg-gold p-8 text-black shadow-2xl">
                  <span className="text-4xl font-serif font-bold">100%</span>
                  <p className="font-bold uppercase tracking-[0.2em] text-[10px] mt-1 opacity-80 leading-tight">Trust & Transparency</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-4 block">Our Heritage</span>
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl text-text">
                A Legacy Built on <br />
                <span className="text-gold italic">Vision and Integrity</span>
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted uppercase tracking-wider">
                Omega Trinity View is more than a real estate firm; we are the bridge between your aspirations and your reality. As a premier boutique agency, we specialize in high-end residential and commercial properties in Nigeria's most coveted vicinities.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted uppercase tracking-wider">
                Whether you are looking for your forever home or seeking to master the art of real estate investment through our mentorship, we provide the expertise, network, and dedication required to succeed in today's dynamic market.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8 border-t border-gold/10 pt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded border border-gold/20">
                    <Award className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gold">Premium Quality</h4>
                    <p className="text-[10px] text-muted uppercase tracking-wider mt-1">Only the finest builds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded border border-gold/20">
                    <Users className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gold">Expert Guidance</h4>
                    <p className="text-[10px] text-muted uppercase tracking-wider mt-1">Tailored mentorship.</p>
                  </div>
                </div>
              </div>

              <a 
                href={getWhatsAppLink("Hi! I'd like to learn more about Omega Trinity View.")}
                className="inline-flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-[0.3em] hover:translate-x-2 transition-transform"
              >
                Learn More <ChevronRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section id="properties" className="py-24 md:py-32 bg-bg border-y border-gold/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-4 block">Curated Collection</span>
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-6xl text-text">Exquisite Properties</h2>
            <p className="mx-auto max-w-2xl text-sm uppercase tracking-widest text-muted">
              Browse our curated collection of Lagos and Abuja's most prestigious addresses.
            </p>
          </motion.div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROPERTIES.map((prop, index) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-sm bg-card border border-gold/10 transition-all hover:border-gold/40 shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent flex items-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={getWhatsAppLink(`I'm interested in viewing: ${prop.title} in ${prop.location}.`)}
                      className="w-full rounded-sm bg-gold py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
                <div className="p-8 text-left">
                  <div className="flex items-center gap-2 text-gold mb-3">
                    <MapPin size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{prop.location}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-text tracking-wide">{prop.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gold font-bold text-sm tracking-widest">{prop.price}</p>
                    <ChevronRight size={16} className="text-gold/30 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <a 
              href={getWhatsAppLink("I'd like to see your full property portfolio.")}
              className="rounded-sm border border-gold/30 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold/5 hover:border-gold"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-24 md:py-32 bg-card relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid gap-20 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-4 block text-center md:text-left">Wealth Creation</span>
              <h2 className="mb-6 font-serif text-4xl font-bold text-text md:text-6xl text-center md:text-left leading-tight">
                Real Estate <br />
                <span className="text-gold italic">Mentorship Program</span>
              </h2>
              <p className="mb-10 text-sm uppercase tracking-widest text-muted text-center md:text-left leading-relaxed">
                Learn the market dynamics that create multi-generational wealth. Our program is designed for discerning investors.
              </p>
              
              <ul className="grid gap-6 mb-12 sm:grid-cols-2 md:grid-cols-1">
                {[
                  "One-on-One Portfolio Strategy",
                  "High-Yield Asset Selection",
                  "Exclusive Network Access",
                  "Market Analysis & Mastery",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-text">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                      <ChevronRight size={10} strokeWidth={4} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center md:justify-start">
                <a 
                  href={getWhatsAppLink("I want to Join the Mentorship Program. Please send me more details.")}
                  className="group flex w-full sm:w-fit items-center justify-center gap-3 rounded-sm bg-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-gold-dark hover:scale-105 active:scale-95 shadow-2xl"
                >
                  Join the Program
                  <Play className="h-3 w-3 fill-current group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-sm overflow-hidden border border-gold/20 relative shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Coaching Session" 
                  className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gold/5" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -top-10 -left-10 hidden lg:block bg-bg p-8 rounded-sm border border-gold/30 shadow-2xl max-w-[240px]">
                <div className="flex gap-1 text-gold mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Home key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-gold font-bold text-2xl tracking-tighter mb-1">500+ MENTEES</p>
                <p className="text-muted text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Successfully trained across Nigeria.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg pt-24 pb-12 text-muted border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-4 mb-20">
            <div className="md:col-span-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                <div className="bg-gold/10 p-1.5 rounded border border-gold/30">
                  <Building2 className="text-gold h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-text font-serif">
                  OMEGA <span className="text-gold italic">TRINITY</span> VIEW
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed mb-8 opacity-70">
                Redefining the luxury real estate experience in Nigeria through innovation, integrity, and expert mentorship.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a href="#" className="hover:text-gold transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-gold transition-colors"><Facebook size={18} /></a>
                <a href={getWhatsAppLink("Hi Omega Trinity View!")} className="hover:text-gold transition-colors">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gold font-bold mb-8 tracking-[0.3em] uppercase text-[10px]">Quick Links</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em]">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#properties" className="hover:text-gold transition-colors">Properties</a></li>
                <li><a href="#mentorship" className="hover:text-gold transition-colors">Mentorship</a></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gold font-bold mb-8 tracking-[0.3em] uppercase text-[10px]">Contact Us</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em]">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={14} className="text-gold" />
                  Lagos, Nigeria
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={14} className="text-gold" />
                  +234 810 248 0531
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 text-text">
                  <Mail size={14} className="text-gold" />
                  info@omegatrinityview.com
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gold font-bold mb-8 tracking-[0.3em] uppercase text-[10px]">Newsletter</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-60">Stay updated with the latest luxury deals.</p>
              <div className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-card border border-gold/10 px-4 py-3 text-[10px] font-bold tracking-widest w-full focus:outline-none focus:border-gold/50"
                />
                <button className="bg-gold text-black p-3 hover:bg-gold-dark transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gold/5 text-[9px] font-bold tracking-[0.3em] uppercase">
            <p>© {new Date().getFullYear()} OMEGA TRINITY VIEW. All Rights Reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Bubble */}
      <motion.a 
        href={getWhatsAppLink("Hi! I'm on your website and I need assistance.")}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600"
      >
        <Phone className="h-8 w-8" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">1</span>
      </motion.a>
    </div>
  );
}
