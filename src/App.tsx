/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Droplets, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Waves, 
  ShowerHead, 
  Sprout, 
  LayoutDashboard, 
  Wrench, 
  Leaf, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  ChevronUp, 
  Star,
  Users,
  Trophy,
  Globe
} from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  key?: string | number;
}

const Reveal = ({ children, className = "" }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="relative bg-canvas text-body">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* ===== SECTION 2: STICKY NAVIGATION ===== */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-canvas/95 backdrop-blur-md shadow-sm border-b border-hairline py-4' : 'bg-canvas border-b border-hairline py-5'
        }`}
      >
        <div className="container flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold text-ink">
              3C Irri-Tech
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium transition-colors text-muted hover:text-ink"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-2 px-6 text-sm">
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-ink" />
            ) : (
              <Menu className="text-ink" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-canvas border-t border-hairline overflow-hidden"
            >
              <div className="container py-6 flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-body font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#contact" className="btn-primary mt-2" onClick={() => setIsMenuOpen(false)}>
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== SECTION 3: HERO SECTION ===== */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-disabled/40 blur-3xl"
              style={{
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 text-center text-ink">
          <Reveal>
            <div className="inline-block py-1 px-3 bg-canvas text-ink text-[11px] font-bold tracking-widest uppercase rounded-full mb-6 border border-hairline">
              Philippines' Trusted Irrigation Specialists
            </div>
            <h1 className="text-[28px] md:text-[44px] font-semibold mb-6 !text-ink leading-[1.2]">
              Smart Irrigation.<br />Better Harvests.
            </h1>
            <p className="text-base md:text-lg text-body max-w-xl mx-auto mb-10 leading-relaxed">
              Delivering modern, water-efficient systems designed for Filipino terrain. From highland vegetable farms to lowland rice fields — we make every drop count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#services" className="btn-primary !px-10">
                View Services <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline !px-10">
                Book Assessment
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Licensed & Certified Engineers" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "10+ Years Experience" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "500+ Completed Projects" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Free Farm Site Assessment" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-canvas p-3 rounded-[14px] border border-hairline">
                  {badge.icon}
                  <span className="text-xs font-medium text-body text-left">{badge.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-hairline rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-muted rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ===== SECTION 4: STATS STRIP ===== */}
      <section className="bg-surface-soft py-12 text-ink border-y border-hairline-soft">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-hairline">
            {[
              { number: "500+", label: "Projects Completed", icon: <Trophy /> },
              { number: "98%", label: "Client Satisfaction", icon: <Users /> },
              { number: "10+", label: "Years in Industry", icon: <Clock /> },
              { number: "12", label: "Provinces Served", icon: <Globe /> },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <span className="block text-3xl md:text-5xl font-bold mb-2 tracking-tight">{stat.number}</span>
                <span className="text-sm font-medium text-muted uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SERVICES ===== */}
      <section id="services" className="section-padding bg-gray-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">What We Offer</span>
              <h2 className="text-3xl md:text-4xl mb-4">Complete Irrigation Solutions for Every Farm</h2>
              <p className="text-text-muted">From design consultation to post-installation support — we handle it all.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Waves className="w-6 h-6" />, 
                title: "Drip Irrigation Systems", 
                desc: "Precision water delivery directly to root zones. Reduces water use by up to 60% compared to traditional flooding." 
              },
              { 
                icon: <ShowerHead className="w-6 h-6" />, 
                title: "Sprinkler Irrigation", 
                desc: "Uniform overhead coverage ideal for open fields, lawns, and row crops." 
              },
              { 
                icon: <Sprout className="w-6 h-6" />, 
                title: "Fertigation Systems", 
                desc: "Integrate fertilizer delivery directly through your irrigation lines for faster nutrient uptake." 
              },
              { 
                icon: <LayoutDashboard className="w-6 h-6" />, 
                title: "Farm Water Management", 
                desc: "Full consultation, water source assessment, system design, and long-term planning." 
              },
              { 
                icon: <Wrench className="w-6 h-6" />, 
                title: "Installation & Maintenance", 
                desc: "End-to-end professional installation with testing, handover training, and packages." 
              },
              { 
                icon: <Leaf className="w-6 h-6" />, 
                title: "Agri-Tech Consulting", 
                desc: "Technology-driven advisory — soil sensors, automated timers, and smart integration." 
              }
            ].map((service, idx) => (
              <Reveal key={idx} className="card-base group">
                <div className="w-14 h-14 bg-green-pale text-green-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="text-green-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHY CHOOSE US ===== */}
      <section id="why-us" className="section-padding overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Reveal>
                <span className="eyebrow text-left">Why 3C Irri-Tech</span>
                <h2 className="text-3xl md:text-4xl mb-6">Why Filipino Farmers Trust Us</h2>
                <p className="text-text-body text-lg mb-8 leading-relaxed">
                  We're not just irrigation suppliers — we're long-term partners invested in your farm's productivity. With deep roots in Cordillera agriculture and a team of certified engineers, we deliver systems built to perform in Philippine conditions.
                </p>
                <a href="#projects" className="btn-primary flex items-center justify-center gap-2 w-fit">
                  See Our Projects <ChevronRight className="w-5 h-5" />
                </a>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Local Terrain Expertise", desc: "We understand the slopes, rainfall patterns, and soil types of the Cordillera provinces." },
                { title: "End-to-End Service", desc: "One team handles everything: design, supply, installation, training, and maintenance." },
                { title: "Affordable & Scalable", desc: "Solutions designed to fit smallholder farms and large commercial operations alike." },
                { title: "Certified Professionals", desc: "Our engineers hold TESDA certifications and irrigation engineering accreditations." },
                { title: "Documented Results", desc: "We track yield and water savings data on partner farms to prove real ROI." },
                { title: "Year-Round Support", desc: "24/7 technical hotline and quarterly maintenance check-ins for all clients." }
              ].map((item, idx) => (
                <Reveal key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-accent flex-shrink-0" />
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-text-muted pl-8">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: HOW IT WORKS ===== */}
      <section id="process" className="section-padding bg-green-pale">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Process</span>
              <h2 className="text-3xl md:text-4xl mb-4">From Farm Visit to Full System — Here's How We Work</h2>
            </Reveal>
          </div>

          <div className="relative">
            {/* Desktop Connect line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-green-mid/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Free Site Assessment", desc: "We visit your farm, evaluate your water source, terrain, and crop type at no charge." },
                { step: "02", title: "Custom System Design", desc: "Our engineers create a detailed layout plan with materials list and cost estimate tailored to you." },
                { step: "03", title: "Professional Installation", desc: "Our licensed team installs the system with full quality assurance testing before handover." },
                { step: "04", title: "Maintenance & Support", desc: "Regular visits and a dedicated hotline keep your system running at peak performance." }
              ].map((step, idx) => (
                <Reveal key={idx} className="text-center">
                  <div className="w-16 h-16 bg-green-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed px-4">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: PROJECTS PORTFOLIO ===== */}
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl mb-4">Real Farms. Real Results.</h2>
              <p className="text-text-muted">A selection of completed irrigation projects across the Cordillera and nearby regions.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Benguet Strawberry Farm", 
                type: "DRIP IRRIGATION", 
                scale: "5 Hectares · La Trinidad, Benguet", 
                result: "💧 Water cost reduced by 40% · Yield up 35%",
                bg: "bg-gradient-to-br from-green-dark to-green-primary" 
              },
              { 
                title: "Nueva Vizcaya Rice Cooperative", 
                type: "SPRINKLER SYSTEM", 
                scale: "12 Hectares · Bayombong, Nueva Vizcaya", 
                result: "🌾 Labor hours reduced by 50% · Consistent crop coverage",
                bg: "bg-gradient-to-br from-green-mid to-green-accent" 
              },
              { 
                title: "Mountain Province Vegetable Farm", 
                type: "FERTIGATION", 
                scale: "3 Hectares · Bontoc, Mountain Province", 
                result: "🥬 Fertilizer cost down 30% · Faster growth cycle",
                bg: "bg-gradient-to-br from-brown-earth to-[#8B735B]" 
              }
            ].map((project, idx) => (
              <Reveal key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <div className={`absolute inset-0 ${project.bg} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{project.scale}</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm font-medium">{project.result}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="btn-white-outline !bg-white !text-green-dark py-2 px-6">View Details</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: TESTIMONIALS ===== */}
      <section id="testimonials" className="section-padding bg-gray-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl mb-4">What Farmers Are Saying</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Since installing the drip system from 3C Irri-Tech, our water cost dropped by 40% and our cabbage yield has improved significantly every season.",
                name: "Roberto M.",
                role: "Vegetable Farmer, La Trinidad, Benguet"
              },
              {
                text: "Their team was professional from start to finish. They explained everything clearly and our sprinkler system has been running perfectly for over two years now.",
                name: "Marites A.",
                role: "Head, Nueva Vizcaya Farmers Cooperative"
              },
              {
                text: "Finally, an irrigation company that truly understands mountain farming. 3C Irri-Tech knows the Cordillera climate and soil conditions better than anyone.",
                name: "Jun dela Cruz",
                role: "Municipal Agricultural Officer, Bontoc"
              }
            ].map((testimonial, idx) => (
              <Reveal key={idx} className="card-base">
                <div className="text-green-accent mb-6">
                  <svg className="w-8 h-8 fill-current opacity-30" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 13V10C3 5.02944 7.02944 1 12 1V4C8.68629 4 6 6.68629 6 10V13H3ZM14 13V10C14 5.02944 18.0294 1 23 1V4C19.6863 4 17 6.68629 17 10V13H14Z" />
                  </svg>
                </div>
                <p className="text-text-body italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-green-accent text-green-accent" />)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: PACKAGES / PRICING TEASER ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Investment Guide</span>
              <h2 className="text-3xl md:text-4xl mb-4">Flexible Packages for Every Farm Size</h2>
              <p className="text-text-muted">Prices depend on customized engineering designs. Contact us for a free quote.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Starter Package", 
                ideal: "Smallholder farms up to 1 hectare", 
                features: ["Site assessment", "Basic drip line layout", "Materials & Installation"],
                cta: "Get a Quote",
                popular: false
              },
              { 
                name: "Farm Pro Package", 
                ideal: "1–5 hectare farms", 
                features: ["Full system design", "Premium drip/sprinkler lines", "Fertigation integration", "1-year maintenance"],
                cta: "Get a Quote",
                popular: true
              },
              { 
                name: "Commercial Package", 
                ideal: "5+ hectare / Cooperatives / LGUs", 
                features: ["Custom engineering design", "Automated controls", "Smart sensors", "Dedicated account manager"],
                cta: "Discuss Your Project",
                popular: false
              }
            ].map((pkg, idx) => (
              <Reveal key={idx} className={`card-base flex flex-col ${pkg.popular ? 'border-green-primary border-2 ring-4 ring-green-primary/5' : ''}`}>
                {pkg.popular && <span className="bg-green-primary text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full w-fit mx-auto -mt-11 mb-6">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-text-muted mb-8">Ideal for: {pkg.ideal}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-accent flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={pkg.popular ? 'btn-primary w-full' : 'btn-outline w-full'}>
                  {pkg.cta}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: FAQ ===== */}
      <section id="faq" className="section-padding bg-green-pale">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            </Reveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What areas do you serve?", a: "We are based in Baguio City and primarily serve the Cordillera Administrative Region as well as nearby provinces including Nueva Vizcaya, Isabela, and Pangasinan." },
              { q: "How long does installation take?", a: "A typical farm installation (1–3 hectares) takes 3–7 working days depending on terrain complexity and system type." },
              { q: "Do you offer financing or payment terms?", a: "Yes, we work with select rural banks and government agri-loan programs. We also offer installment arrangements for qualified clients." },
              { q: "What's included in the free site assessment?", a: "Our engineer evaluates water source, terrain, crop type, and soil condition — all at no cost and no obligation." },
              { q: "Do you provide training after installation?", a: "Absolutely. Every installation includes a handover training session for the farm owner and staff, covering operation and basic maintenance." },
              { q: "What warranty do you provide?", a: "We offer a 1-year workmanship warranty and pass through manufacturer warranties on equipment (typically 1–5 years)." }
            ].map((faq, idx) => (
              <Accordion key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 12: CTA BANNER ===== */}
      <section className="bg-green-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Droplets className="w-[500px] h-[500px] absolute -right-20 -bottom-20" />
        </div>
        <div className="container relative z-10 text-center">
          <Reveal>
            <span className="inline-block bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6 text-white">⚡ Limited Free Slots This Month</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 !text-white">Ready to Upgrade Your Farm's Irrigation?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Get a FREE site assessment and custom irrigation proposal — no commitment required. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-white-outline !bg-white !text-green-primary">Book Your Free Assessment</a>
              <a href="tel:+63900000000" className="btn-white-outline">Call Us Now</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 13: CONTACT ===== */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl mb-4">Let's Talk About Your Farm</h2>
            </Reveal>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-2/5">
              <Reveal>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-green-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p className="text-text-muted text-sm">Baguio City, Philippines (Serving Cordillera + Region 1 & 2)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-green-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <a href="tel:+63900000000" className="text-text-muted text-sm hover:text-green-primary transition-colors">+63 900 000 0000</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-green-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <a href="mailto:info@3cirritech.com" className="text-text-muted text-sm hover:text-green-primary transition-colors">info@3cirritech.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-green-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Office Hours</h4>
                      <p className="text-text-muted text-sm">Monday – Saturday: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-green-pale rounded-2xl border-2 border-dashed border-green-mid/20 text-center">
                  <MapPin className="w-8 h-8 text-green-primary mx-auto mb-4" />
                  <p className="font-bold text-green-dark">Baguio City HQ</p>
                  <p className="text-xs text-text-muted">Serving all highland and lowland provinces</p>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 14: FOOTER ===== */}
      <footer className="bg-green-dark pt-16 pb-8 text-white/90">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <Droplets className="w-8 h-8 text-green-accent" />
                <span className="text-2xl font-bold text-white">3C Irri-Tech</span>
              </div>
              <p className="text-sm text-white/60 mb-8">
                Growing the Future of Philippine Agriculture through smart, sustainable, and high-efficiency irrigation technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-accent hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-accent hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-accent hover:text-white transition-all"><Youtube size={20} /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-grow lg:pl-16">
              <div>
                <h5 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Services</h5>
                <ul className="space-y-4 text-sm text-white/60">
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Drip Irrigation</a></li>
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Sprinkler Systems</a></li>
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Fertigation</a></li>
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Water Management</a></li>
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Installation</a></li>
                  <li><a href="#services" className="hover:text-green-accent transition-colors">Consulting</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Quick Links</h5>
                <ul className="space-y-4 text-sm text-white/60">
                  <li><a href="#home" className="hover:text-green-accent transition-colors">Home</a></li>
                  <li><a href="#why-us" className="hover:text-green-accent transition-colors">Why Us</a></li>
                  <li><a href="#projects" className="hover:text-green-accent transition-colors">Projects</a></li>
                  <li><a href="#faq" className="hover:text-green-accent transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-green-accent transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h5 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Contact</h5>
                <ul className="space-y-4 text-sm text-white/60">
                  <li>Baguio City, Philippines</li>
                  <li><a href="tel:+63900000000" className="hover:text-green-accent transition-colors">+63 900 000 0000</a></li>
                  <li><a href="mailto:info@3cirritech.com" className="hover:text-green-accent transition-colors">info@3cirritech.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © 2025 3C Irri-Tech Enterprise. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="hover:text-green-accent">Privacy Policy</a>
              <a href="#" className="hover:text-green-accent">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <a 
        href="https://wa.me/63900000000?text=Hi%2C%20I%27m%20interested%20in%203C%20Irri-Tech%27s%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-text-dark text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sleek border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need help? Chat with us
        </span>
      </a>

      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 w-12 h-12 bg-white text-green-primary rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-green-primary hover:text-white transition-all z-50"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}

{/* Helper Components */}
interface AccordionProps {
  question: string;
  answer: string;
  key?: string | number;
}

function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-text-dark">{question}</span>
        <ChevronRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-text-muted text-sm leading-relaxed bg-gray-50/50 border-t border-gray-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-pale p-12 rounded-2xl text-center border-2 border-green-primary/20">
        <div className="w-20 h-20 bg-green-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-primary/20">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Inquiry Sent Successfully!</h3>
        <p className="text-text-muted leading-relaxed">
          Thank you! We'll reach out within 24 hours. In the meantime, feel free to WhatsApp us for a faster response.
        </p>
        <button label="Reset Form" onClick={() => setStatus('idle')} className="mt-8 text-green-primary font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone Number</label>
          <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all" placeholder="+63 900 000 0000" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
          <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Farm Location</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all" placeholder="Municipality, Province" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Service Interested In</label>
          <select required className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all bg-white">
            <option value="">Select Service</option>
            <option>Drip Irrigation</option>
            <option>Sprinkler System</option>
            <option>Fertigation</option>
            <option>Water Management</option>
            <option>Installation & Maintenance</option>
            <option>Agri-Tech Consulting</option>
            <option>Not Sure Yet</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Farm Size</label>
          <select required className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all bg-white">
            <option value="">Select Size</option>
            <option>Less than 1 ha</option>
            <option>1–3 ha</option>
            <option>3–10 ha</option>
            <option>10 ha+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message / Additional Details</label>
        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-border focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary outline-none transition-all" placeholder="Tell us more about your farm..."></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full flex items-center justify-center gap-2 group">
        {status === 'submitting' ? 'Sending...' : 'Send My Inquiry'} 
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <div className="text-center text-[10px] text-text-muted uppercase tracking-widest">
        We respond within 24 hours · No spam · No obligation
      </div>
    </form>
  );
}