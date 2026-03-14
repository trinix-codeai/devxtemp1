'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import {
  Plane, Users, BarChart3, Shield, Building2, Brain, Sparkles,
  Server, Database, Zap, Radio, Globe, CreditCard, BarChart,
  CheckCircle, ArrowRight, ChevronRight, Eye, EyeOff, Mail,
  Lock, User, Briefcase, Key,
} from 'lucide-react';

/* ─────────── NAVBAR ─────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-card border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal to-navy flex items-center justify-center">
            <Globe size={18} className="text-white" />
          </div>
          <span className={`font-heading font-bold text-xl ${scrolled ? 'text-navy' : 'text-white'}`}>TravelOS</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
          <a href="#features" className="hover:text-teal transition-colors">Features</a>
          <a href="#architecture" className="hover:text-teal transition-colors">Architecture</a>
          <a href="#auth" className="hover:text-teal transition-colors">Get Started</a>
        </div>
        <a href="#auth" className="px-5 py-2 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral-dark hover:shadow-glow-coral transition-all duration-300">
          Get Started
        </a>
      </div>
    </nav>
  );
}

/* ─────────── HERO SECTION ─────────── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'CRM. ERP. AI. Booking Engine. Unified.';

  /* Floating icon positions */
  const floatingIcons = [
    { icon: Plane, x: '10%', y: '20%', delay: 0, size: 28 },
    { icon: Building2, x: '85%', y: '15%', delay: 0.5, size: 24 },
    { icon: CreditCard, x: '5%', y: '65%', delay: 1, size: 22 },
    { icon: Globe, x: '90%', y: '60%', delay: 1.5, size: 26 },
    { icon: BarChart, x: '15%', y: '80%', delay: 2, size: 20 },
    { icon: Shield, x: '80%', y: '82%', delay: 2.5, size: 22 },
  ];

  useEffect(() => {
    /* Typewriter */
    let charIndex = 0;
    const typeTimer = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, charIndex));
        charIndex++;
      } else { clearInterval(typeTimer); }
    }, 60);

    /* Globe animation */
    if (globeRef.current) {
      anime({ targets: globeRef.current.querySelectorAll('.globe-orbit'), strokeDashoffset: [anime.stagger([1200, 600]), 0], opacity: [0, 0.6], duration: 3000, delay: anime.stagger(200, { start: 500 }), easing: 'easeOutSine' });
      anime({ targets: globeRef.current.querySelectorAll('.flight-dot'), scale: [0, 1], opacity: [0, 1], delay: anime.stagger(300, { start: 1500 }), duration: 600, easing: 'easeOutBack' });
    }

    /* Staggered reveal for hero elements */
    anime({ targets: '.hero-element', translateY: [40, 0], opacity: [0, 1], delay: anime.stagger(120, { start: 200 }), duration: 800, easing: 'easeOutCubic' });

    /* Floating cards */
    anime({ targets: '.floating-icon', translateY: [-20, 20], direction: 'alternate', loop: true, duration: (el: Element, i: number) => 3000 + i * 500, delay: anime.stagger(400), easing: 'easeInOutSine' });

    /* Parallax on mouse move */
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      anime({ targets: '.parallax-slow', translateX: x * 20, translateY: y * 20, duration: 800, easing: 'easeOutQuad', });
      anime({ targets: '.parallax-fast', translateX: x * 40, translateY: y * 40, duration: 600, easing: 'easeOutQuad', });
    };
    heroRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(typeTimer);
      heroRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Gradient BG */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal/10 blur-[120px] animate-pulse-glow parallax-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-coral/10 blur-[100px] animate-pulse-glow parallax-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Animated Globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none parallax-slow">
        <svg ref={globeRef} className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] opacity-30" viewBox="0 0 500 500">
          {/* Globe circles */}
          <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(27,156,133,0.15)" strokeWidth="1" />
          <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(27,156,133,0.1)" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" fill="none" stroke="rgba(27,156,133,0.08)" strokeWidth="1" />
          {/* Orbits / Flight paths */}
          <ellipse className="globe-orbit" cx="250" cy="250" rx="200" ry="80" fill="none" stroke="rgba(27,156,133,0.4)" strokeWidth="1.5" strokeDasharray="1200" transform="rotate(-20 250 250)" />
          <ellipse className="globe-orbit" cx="250" cy="250" rx="180" ry="60" fill="none" stroke="rgba(255,184,0,0.3)" strokeWidth="1.5" strokeDasharray="1000" transform="rotate(30 250 250)" />
          <ellipse className="globe-orbit" cx="250" cy="250" rx="160" ry="100" fill="none" stroke="rgba(255,107,74,0.3)" strokeWidth="1.5" strokeDasharray="1100" transform="rotate(-45 250 250)" />
          <ellipse className="globe-orbit" cx="250" cy="250" rx="140" ry="50" fill="none" stroke="rgba(27,156,133,0.25)" strokeWidth="1" strokeDasharray="800" transform="rotate(60 250 250)" />
          {/* Flight dots */}
          <circle className="flight-dot" cx="180" cy="180" r="4" fill="#1B9C85" />
          <circle className="flight-dot" cx="320" cy="150" r="3" fill="#FFB800" />
          <circle className="flight-dot" cx="350" cy="300" r="4" fill="#FF6B4A" />
          <circle className="flight-dot" cx="150" cy="320" r="3" fill="#1B9C85" />
          <circle className="flight-dot" cx="250" cy="100" r="3.5" fill="#FFB800" />
          <circle className="flight-dot" cx="380" cy="220" r="3" fill="#FF6B4A" />
          <circle className="flight-dot" cx="120" cy="240" r="4" fill="#1B9C85" />
        </svg>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <div key={i} className="floating-icon parallax-fast absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" style={{ left: item.x, top: item.y, opacity: 0 }}>
          <item.icon size={item.size} className="text-white/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="hero-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-8 text-sm text-teal-light opacity-0">
          <Sparkles size={14} />
          Powered by AI · Trusted by 500+ Agencies Worldwide
        </div>

        <h1 ref={titleRef} className="hero-element font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight opacity-0">
          The Operating System for
          <span className="block bg-gradient-to-r from-teal-light via-amber to-coral bg-clip-text text-transparent">
            Modern Travel Agencies
          </span>
        </h1>

        <p className="hero-element text-lg md:text-xl text-white/60 mb-3 font-medium opacity-0">
          {typewriterText}<span className="typewriter-cursor" />
        </p>

        <p className="hero-element text-sm md:text-base text-white/40 mb-10 max-w-2xl mx-auto opacity-0">
          From booking to invoicing, from CRM to compliance — manage your entire travel business with a single, intelligent platform.
        </p>

        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a href="#auth" className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-coral to-coral-dark text-white font-semibold text-base shadow-glow-coral hover:shadow-[0_0_50px_rgba(255,107,74,0.4)] transition-all duration-300 flex items-center gap-2">
            Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#features" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300">
            Request Demo
          </a>
        </div>

        {/* Metrics strip */}
        <div className="hero-element mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0">
          {[
            { value: '500+', label: 'Agencies' },
            { value: '2.5M', label: 'Bookings' },
            { value: '99.95%', label: 'Uptime' },
          ].map(m => (
            <div key={m.label}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-white">{m.value}</div>
              <div className="text-xs text-white/40 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-teal animate-pulse" />
        </div>
      </div>
    </section>
  );
}

/* ─────────── FEATURES SECTION ─────────── */
const features = [
  { icon: Users, title: 'Agent Portal', desc: '360° client management, booking engine, itinerary builder, commission tracking — everything a travel pro needs, beautifully unified.', color: 'teal', gradient: 'from-teal to-teal-dark' },
  { icon: BarChart3, title: 'Admin Portal', desc: 'Agency-wide analytics, multi-agent oversight, financial dashboards, and compliance tools — command your entire operation.', color: 'navy', gradient: 'from-navy to-navy-light' },
  { icon: Brain, title: 'AI Itinerary Builder', desc: 'Describe the perfect trip in natural language — AI generates day-by-day itineraries from 500,000+ activities worldwide.', color: 'coral', gradient: 'from-coral to-coral-dark' },
  { icon: CreditCard, title: 'Financial Engine', desc: 'Multi-currency accounting, automated invoicing, P&L dashboards, supplier payments — real-time financial control.', color: 'amber', gradient: 'from-amber to-amber-dark' },
  { icon: Building2, title: 'Supplier Management', desc: 'GDS integration, contract management, performance scoring, and automated purchase orders across all vendor types.', color: 'teal', gradient: 'from-teal-dark to-navy' },
  { icon: Shield, title: 'Compliance & Security', desc: 'GDPR/CCPA compliance, role-based access, audit trails, PCI DSS encryption — enterprise-grade security built-in.', color: 'navy', gradient: 'from-navy-dark to-navy' },
];

function FeaturesSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({ targets: '.feature-card', translateY: [60, 0], opacity: [0, 1], delay: anime.stagger(100), duration: 700, easing: 'easeOutCubic' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
    anime({ targets: `.feature-desc-${index}`, height: expandedCard === index ? [null, 0] : [0, null], opacity: expandedCard === index ? [1, 0] : [0, 1], duration: 400, easing: 'easeInOutQuad' });
  };

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal text-sm font-semibold mb-4">
            <Sparkles size={14} /> Platform Features
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-4">
            Everything. <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">Unified.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Six powerful modules, one seamless experience. Built for scale, designed for humans.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-400 cursor-pointer border border-gray-100 overflow-hidden opacity-0"
              onClick={() => handleCardClick(i)}
            >
              <div className="feature-card-glow rounded-2xl" />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

                <motion.div
                  initial={false}
                  animate={{ height: expandedCard === i ? 'auto' : 0, opacity: expandedCard === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {['Real-time data sync', 'Role-based access control', 'REST & GraphQL APIs', 'Mobile responsive'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-teal shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-teal">
                  Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ARCHITECTURE SECTION ─────────── */
const archNodes = [
  { id: 'gql', label: 'GraphQL Gateway', icon: Globe, x: 250, y: 80, color: '#1B9C85', desc: 'Apollo Federation — handles 50k+ req/sec with intelligent query planning and caching' },
  { id: 'auth', label: 'Auth Service', icon: Lock, x: 80, y: 180, color: '#0A2647', desc: 'JWT + OAuth 2.0 with role-based access control for Admin and Agent portals' },
  { id: 'booking', label: 'Booking Service', icon: Plane, x: 420, y: 180, color: '#FF6B4A', desc: 'Real-time inventory from Amadeus, Sabre, Travelport via GDS adapters' },
  { id: 'kafka', label: 'Kafka Events', icon: Zap, x: 250, y: 260, color: '#FFB800', desc: 'Event-driven architecture — 100k events/sec for real-time updates' },
  { id: 'redis', label: 'Redis Cache', icon: Database, x: 80, y: 350, color: '#E11D48', desc: 'Sub-millisecond caching layer for search results, sessions, and rate limiting' },
  { id: 'pg', label: 'PostgreSQL', icon: Database, x: 250, y: 420, color: '#336791', desc: 'ACID-compliant relational DB for users, bookings, and financial transactions' },
  { id: 'mongo', label: 'MongoDB', icon: Database, x: 420, y: 350, color: '#47A248', desc: 'Flexible document store for product catalogs, itineraries, and profiles' },
  { id: 'es', label: 'Elasticsearch', icon: Radio, x: 420, y: 420, color: '#FEC514', desc: 'Full-text search across millions of products with <50ms response times' },
];

const archLines = [
  { from: 'gql', to: 'auth' }, { from: 'gql', to: 'booking' },
  { from: 'gql', to: 'kafka' }, { from: 'kafka', to: 'redis' },
  { from: 'kafka', to: 'pg' }, { from: 'kafka', to: 'mongo' },
  { from: 'booking', to: 'mongo' }, { from: 'redis', to: 'pg' },
  { from: 'mongo', to: 'es' },
];

function ArchitectureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          anime({ targets: '.arch-node', scale: [0, 1], opacity: [0, 1], delay: anime.stagger(80, { start: 200 }), duration: 600, easing: 'easeOutBack' });
          anime({ targets: '.arch-line', strokeDashoffset: [200, 0], opacity: [0, 0.4], delay: anime.stagger(100, { start: 800 }), duration: 800, easing: 'easeOutSine' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getNodeById = (id: string) => archNodes.find(n => n.id === id)!;
  const hoveredInfo = hoveredNode ? getNodeById(hoveredNode) : null;

  return (
    <section id="architecture" ref={sectionRef} className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-coral/5 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-teal-light text-sm font-semibold mb-4">
            <Server size={14} /> System Architecture
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="bg-gradient-to-r from-teal-light to-amber bg-clip-text text-transparent">Enterprise Scale</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Microservices, event-driven, cloud-native. Hover each component to explore.
          </p>
        </div>

        <div className="relative flex justify-center">
          <svg className="w-full max-w-[500px]" viewBox="0 0 500 500" style={{ aspectRatio: '1/1' }}>
            {/* Lines */}
            {archLines.map((line, i) => {
              const from = getNodeById(line.from);
              const to = getNodeById(line.to);
              return (
                <line key={i} className="arch-line pulse-line" x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke={hoveredNode === line.from || hoveredNode === line.to ? '#1B9C85' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={hoveredNode === line.from || hoveredNode === line.to ? 2 : 1}
                  strokeDasharray="200" style={{ transition: 'all 0.3s' }}
                />
              );
            })}
            {/* Nodes */}
            {archNodes.map(node => (
              <g key={node.id} className="arch-node cursor-pointer" style={{ opacity: 0, transformOrigin: `${node.x}px ${node.y}px` }}
                onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}>
                <circle cx={node.x} cy={node.y} r={hoveredNode === node.id ? 30 : 26} fill={node.color + '20'} stroke={node.color} strokeWidth={hoveredNode === node.id ? 2 : 1} style={{ transition: 'all 0.3s' }} />
                <circle cx={node.x} cy={node.y} r={12} fill={node.color} />
                <text x={node.x} y={node.y + 46} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600" fontFamily="Inter">{node.label}</text>
              </g>
            ))}
          </svg>

          {/* Tooltip */}
          {hoveredInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 max-w-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: hoveredInfo.color }}>
                  <hoveredInfo.icon size={16} className="text-white" />
                </div>
                <span className="text-white font-semibold">{hoveredInfo.label}</span>
              </div>
              <p className="text-white/60 text-sm">{hoveredInfo.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────── AUTH SECTION ─────────── */
function AuthSection() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const [showPwd, setShowPwd] = useState(false);
  const [role, setRole] = useState<'agent' | 'admin'>('agent');
  const underlineRef = useRef<HTMLDivElement>(null);

  const switchMode = (newMode: 'signin' | 'signup') => {
    setMode(newMode);
    if (underlineRef.current) {
      anime({ targets: underlineRef.current, translateX: newMode === 'signin' ? 0 : '100%', duration: 300, easing: 'easeInOutQuad' });
    }
  };

  return (
    <section id="auth" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">
            {mode === 'signin' ? 'Welcome Back' : 'Get Started Free'}
          </h2>
          <p className="text-gray-500">
            {mode === 'signin' ? 'Sign in to access your dashboard' : 'Create your account in 60 seconds'}
          </p>
        </div>

        {/* Tab Switch */}
        <div className="relative flex bg-gray-100 rounded-xl p-1 mb-8">
          <div ref={underlineRef} className="absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-sm transition-transform" style={{ transform: mode === 'signin' ? 'translateX(0)' : 'translateX(100%)' }} />
          <button className={`relative z-10 flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${mode === 'signin' ? 'text-navy' : 'text-gray-400'}`} onClick={() => switchMode('signin')}>
            Sign In
          </button>
          <button className={`relative z-10 flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${mode === 'signup' ? 'text-navy' : 'text-gray-400'}`} onClick={() => switchMode('signup')}>
            Sign Up
          </button>
        </div>

        <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-card border border-gray-100 p-8"
        >
          <form onSubmit={e => e.preventDefault()} className="space-y-5">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder="you@agency.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPwd ? 'text' : 'password'} className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder="••••••••" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {mode === 'signup' && (
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-1 flex-1 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-teal" style={{ width: i <= 2 ? '100%' : '0%' }} />
                    </div>
                  ))}
                  <span className="text-xs text-gray-400 ml-2">Medium</span>
                </div>
              )}
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'agent' as const, label: 'Travel Agent', icon: Users, desc: 'Book & manage clients' },
                      { value: 'admin' as const, label: 'Administrator', icon: Shield, desc: 'Manage the agency' },
                    ].map(r => (
                      <button key={r.value} type="button"
                        className={`p-3 rounded-xl border-2 text-left transition-all ${role === r.value ? 'border-teal bg-teal-50' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => setRole(r.value)}>
                        <r.icon size={18} className={role === r.value ? 'text-teal' : 'text-gray-400'} />
                        <div className="mt-1 text-sm font-semibold text-gray-700">{r.label}</div>
                        <div className="text-xs text-gray-400">{r.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {role === 'admin' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Agency Name</label>
                    <div className="relative">
                      <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder="Acme Travel Co." />
                    </div>
                  </motion.div>
                )}

                {role === 'agent' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Invite Code <span className="text-gray-400">(optional)</span></label>
                    <div className="relative">
                      <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder="XXXX-XXXX" />
                    </div>
                  </motion.div>
                )}
              </>
            )}

            <button type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white font-semibold hover:shadow-glow-coral transition-all duration-300 flex items-center justify-center gap-2">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
              <ArrowRight size={16} />
            </button>

            {mode === 'signin' && (
              <div className="text-center">
                <a href="#" className="text-sm text-teal hover:underline">Forgot password?</a>
              </div>
            )}
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-gray-400">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Google
            </button>
            <button className="py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="bg-navy py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal to-navy-light flex items-center justify-center">
            <Globe size={14} className="text-white" />
          </div>
          <span className="font-heading font-bold text-white">TravelOS</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-white/40">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/70 transition-colors">Status</a>
          <a href="#" className="hover:text-white/70 transition-colors">Docs</a>
        </div>
        <p className="text-sm text-white/30">© 2025 TravelOS. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─────────── MAIN PAGE ─────────── */
export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <AuthSection />
      <Footer />
    </main>
  );
}
