/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, PortfolioItem, Service, Review } from '../types';
import { 
  Sparkles, 
  Award, 
  Crown, 
  Clock, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  MessageCircle, 
  GraduationCap, 
  ShieldCheck, 
  X,
  Heart,
  Sliders,
  ChevronRight,
  MapPin,
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onBookService: (serviceName?: string) => void;
  onOpenPortfolioModal: (item: PortfolioItem) => void;
  portfolioItems: PortfolioItem[];
  services: Service[];
  reviews: Review[];
  onShowToast: (msg: string) => void;
}

const HERO_CONCEPTS = [
  {
    title: 'The Art of Radiance.',
    subtitle: 'SOFT GLAM & DEWY BASE',
    accentText: 'Radiance',
    description: 'Specializing in light-reflective, skin-first masterstrokes that feel weightless and radiate natural luxury from every perspective.',
    bgColor: '#EFEBE6',
    imageUrl: 'https://scontent.flko1-2.fna.fbcdn.net/v/t1.15752-9/783406514_3187007901493600_7873042593095188934_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=ZQp-7lsm_a0Q7kNvwFpXjTZ&_nc_oc=AdpxH4tSKRk3S3ie2_DJpOrOcUC9wnxOcKrhm1S9z-d_bya6joRMyltWZveVNf3_twvln0pEipo_00eTk0E8ps8q&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD6QHpJqJ5BPx9vg05Z4r-m5ad5jSMz2DpzJg79THEy0C6Nw&oe=6AB9CDDD',
    badge: 'Certified VLCC Professional',
    tag: 'Soft Glam'
  },
  {
    title: 'The Art of Heritage.',
    subtitle: 'ROYAL HD BRIDAL GLOW',
    accentText: 'Heritage',
    description: 'Intricate, timeless bridal silhouettes combining rich pigments, flawless contours, and seamless royal dupatta draping.',
    bgColor: '#F4ECE1',
    imageUrl: 'https://scontent.flko2-1.fna.fbcdn.net/v/t1.15752-9/780550818_1605849674544713_287040913512456892_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=RI4iGjGBbtUQ7kNvwE4tjA1&_nc_oc=Adr7OGf_xzPY_jVduLFL12gWm99Vv4wgrf2-XilasVawEj2kN-gxzNeQCjLobxXaf0SYcT9ItOkZWuSqhGmzkH75&_nc_zt=23&_nc_ht=scontent.flko2-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFWPryR0X-HkxNY89s3vaL70f0qBbQjmroGsviUCS-uBg&oe=6AB9D1E1',
    badge: 'Master Bridal Stylist',
    tag: 'Bridal Base'
  },
  {
    title: 'The Art of Drama.',
    subtitle: 'VOGUE EDITORIAL MASTERPIECES',
    accentText: 'Drama',
    description: 'High-contrast graphic detailing, sculpted architectural dimensions, and textures engineered for high-resolution studio cameras.',
    bgColor: '#EAE5DC',
    imageUrl: 'https://scontent.flko1-1.fna.fbcdn.net/v/t1.15752-9/785349728_1060427426713925_5536480585746540937_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=uPU0ypx25hcQ7kNvwHR8-2w&_nc_oc=Adp2d9bq49ZTuMJUmEhkMS8zR_w92DUFFumi8jCny7XtSk_rIWMrr8lJpZqj7GLYl0eym614k00qfKl_u6_u-fJd&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_ss=7b6a8&oh=03_Q7cD6QFUTUdGDqOobHgHuxx6jC4mq73qJ-RCnXbYIcPxLQnCyA&oe=6AB9E32D',
    badge: 'Fashion Week Artist',
    tag: 'Editorial'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onBookService,
  onOpenPortfolioModal,
  portfolioItems,
  services,
  reviews,
  onShowToast,
}) => {
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  // Aesthetic Quiz State
  const [quizStep, setQuizStep] = useState<number>(-1);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizRecommendation, setQuizRecommendation] = useState<PortfolioItem | null>(null);

  // Auto-switch hero concepts every 9 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % HERO_CONCEPTS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleStartQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizRecommendation(null);
  };

  const handleSelectQuizAnswer = (answer: string) => {
    const nextAnswers = [...quizAnswers, answer];
    setQuizAnswers(nextAnswers);

    if (quizStep < 2) {
      setQuizStep(quizStep + 1);
    } else {
      const eventType = nextAnswers[0];
      const undertone = nextAnswers[1];
      const intensity = nextAnswers[2];

      let recommended: PortfolioItem = portfolioItems[0];
      
      if (intensity === 'Dramatic' || eventType === 'Editorial') {
        recommended = portfolioItems[2] || portfolioItems[0];
      } else if (eventType === 'Bridal') {
        if (intensity === 'Regal') {
          recommended = portfolioItems[0];
        } else {
          recommended = portfolioItems[3] || portfolioItems[0];
        }
      } else {
        if (undertone === 'Warm') {
          recommended = portfolioItems[4] || portfolioItems[1];
        } else {
          recommended = portfolioItems[1] || portfolioItems[0];
        }
      }

      setQuizRecommendation(recommended);
      setQuizStep(3);
      onShowToast(`Discovered your signature match: ${recommended.title}!`);
    }
  };

  return (
    <div id="home_page" className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION: ADAPTIVE SPLIT SCREEN */}
      <section id="hero_split_section" className="border-b border-[#C5A059]/15 min-h-[calc(100vh-120px)] flex flex-col lg:flex-row bg-white">
        
        {/* LEFT PANEL: LUXURY VISUAL CHASSIS */}
        <div id="hero_visual_panel" className="w-full lg:w-1/2 relative bg-[#EFEBE6] overflow-hidden p-6 sm:p-10 lg:p-16 flex flex-col justify-between min-h-[520px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/15 via-transparent to-[#EAC9C1]/15 transition-all duration-1000"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-3 sm:mb-4">
              {HERO_CONCEPTS[activeHeroIdx].badge}
            </span>
            
            <AnimatePresence mode="wait">
              <motion.h1 
                key={activeHeroIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-6xl lg:text-[76px] font-serif leading-[0.95] italic font-light tracking-tight text-[#1A1A1A]"
              >
                The Art of <br />
                <span className="text-[#C5A059] block mt-1 not-italic font-medium font-serif">
                  {HERO_CONCEPTS[activeHeroIdx].accentText}.
                </span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeHeroIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-600 max-w-sm sm:max-w-md font-sans tracking-wide leading-relaxed"
              >
                {HERO_CONCEPTS[activeHeroIdx].description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Interactive Artistic Vision Tabs */}
          <div className="relative z-10 mt-6 mb-4 lg:mb-0">
            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-2 font-bold">Select Creative Vision</p>
            <div className="flex flex-wrap gap-2">
              {HERO_CONCEPTS.map((concept, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveHeroIdx(idx);
                    onShowToast(`Artistic Concept: ${concept.subtitle}`);
                  }}
                  className={`px-3.5 sm:px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold transition-all border cursor-pointer ${
                    activeHeroIdx === idx 
                      ? 'bg-[#1A1A1A] text-white border-transparent shadow-md' 
                      : 'bg-white/80 text-neutral-700 border-[#C5A059]/25 hover:bg-white'
                  }`}
                >
                  {concept.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Prestige Portrait Arched Frame with Real Model Photography */}
          <div 
            id="prestige_mask_container" 
            className="absolute bottom-[-2%] right-[-2%] w-[200px] h-[280px] sm:w-[280px] sm:h-[380px] lg:w-[340px] lg:h-[460px] rounded-t-full bg-neutral-900 shadow-2xl border-[6px] sm:border-[8px] border-white overflow-hidden flex items-center justify-center transition-all duration-1000"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHeroIdx}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
              >
                <img
                  src={HERO_CONCEPTS[activeHeroIdx].imageUrl}
                  alt={HERO_CONCEPTS[activeHeroIdx].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
                    {HERO_CONCEPTS[activeHeroIdx].subtitle}
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-neutral-200">
                    {activeHeroIdx === 0 ? 'Luminescent Glass Skin' : activeHeroIdx === 1 ? 'Matte Royal Crimson HD' : 'Vogue Runway Precision'}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL: DETAILS, STATS & AESTHETIC QUIZ */}
        <div id="hero_details_panel" className="w-full lg:w-1/2 flex flex-col p-6 sm:p-10 lg:p-16 justify-between border-t lg:border-t-0 lg:border-l border-[#C5A059]/20">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Signature Philosophy */}
            <div className="flex gap-4 sm:gap-8 items-start">
              <span className="text-4xl sm:text-6xl font-serif text-[#C5A059] opacity-25 leading-none">01</span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-xs uppercase tracking-[0.25em] font-bold mb-2 sm:mb-3 text-[#C5A059]">Signature Philosophy</h3>
                <p className="text-base sm:text-xl leading-relaxed font-serif italic text-neutral-700">
                  "Specializing in HD Bridal Base, engagement settings, and high-fashion editorial. Each layout is a bespoke masterpiece designed to expose your innate luminescence."
                </p>
              </div>
            </div>

            {/* Master Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 bg-[#FAF7F2]/80 p-4 sm:p-6 border border-[#C5A059]/20">
              <div className="border-l-2 border-[#C5A059]/40 pl-4 sm:pl-6">
                <p className="text-2xl sm:text-4xl font-serif italic font-medium text-[#1A1A1A]">300+</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 mt-1 font-semibold">Brides Transformed</p>
              </div>
              <div className="border-l-2 border-[#C5A059]/40 pl-4 sm:pl-6">
                <p className="text-2xl sm:text-4xl font-serif italic font-medium text-[#1A1A1A]">05+</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 mt-1 font-semibold">Years of Mastery</p>
              </div>
            </div>

            {/* Endorsed Credentials Badges */}
            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-bold">Endorsed Credentials</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white border border-[#C5A059]/20 text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 text-neutral-700">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  VLCC Certified Elite
                </span>
                <span className="px-3 py-1.5 bg-white border border-[#C5A059]/20 text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 text-neutral-700">
                  <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
                  HD Base Specialist
                </span>
                <span className="px-3 py-1.5 bg-white border border-[#C5A059]/20 text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 text-neutral-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Waterproof Airbrush Tier
                </span>
              </div>
            </div>

            {/* AESTHETIC MATCHMAKER QUIZ */}
            <div id="beauty_matchmaker_widget" className="border border-[#C5A059]/30 bg-[#FAF7F2] p-5 sm:p-6 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 rounded-full -mr-10 -mt-10"></div>
              
              {quizStep === -1 ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                  <div className="max-w-md">
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1">Aesthetic Matchmaker</h4>
                    <p className="text-xs text-neutral-600">Unsure which look complements your facial structure & event setting? Take our 3-step luxury curation questionnaire.</p>
                  </div>
                  <button
                    onClick={handleStartQuiz}
                    className="px-4 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#C5A059] text-[9px] uppercase tracking-widest font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Begin Quiz
                  </button>
                </div>
              ) : quizStep < 3 ? (
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">Beauty Discovery: Question {quizStep + 1}/3</span>
                    <button onClick={() => setQuizStep(-1)} className="text-neutral-400 hover:text-[#1A1A1A]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {quizStep === 0 && (
                    <div>
                      <p className="text-xs font-serif italic text-[#1A1A1A] mb-3">1. What is the nature of your upcoming celebratory occasion?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Bridal', 'Party', 'Editorial'].map((ans) => (
                          <button
                            key={ans}
                            onClick={() => handleSelectQuizAnswer(ans)}
                            className="p-2.5 bg-white border border-[#C5A059]/20 hover:border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                          >
                            {ans}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizStep === 1 && (
                    <div>
                      <p className="text-xs font-serif italic text-[#1A1A1A] mb-3">2. How would you best classify your skin’s warm undertone?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Warm', 'Cool', 'Neutral'].map((ans) => (
                          <button
                            key={ans}
                            onClick={() => handleSelectQuizAnswer(ans)}
                            className="p-2.5 bg-white border border-[#C5A059]/20 hover:border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                          >
                            {ans}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizStep === 2 && (
                    <div>
                      <p className="text-xs font-serif italic text-[#1A1A1A] mb-3">3. What is your desired aesthetic finish?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Dewy', 'Regal', 'Dramatic'].map((ans) => (
                          <button
                            key={ans}
                            onClick={() => handleSelectQuizAnswer(ans)}
                            className="p-2.5 bg-white border border-[#C5A059]/20 hover:border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                          >
                            {ans}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5 text-green-700 text-[10px] uppercase tracking-wider font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Recommendation Ready</span>
                    </div>
                    <button onClick={() => setQuizStep(-1)} className="text-neutral-400 hover:text-[#1A1A1A]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {quizRecommendation?.imageUrl && (
                        <img
                          src={quizRecommendation.imageUrl}
                          alt={quizRecommendation.title}
                          className="w-14 h-14 object-cover rounded-xs border border-[#C5A059]/30 shrink-0"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div>
                        <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 font-bold block">Your Recommended Concept</span>
                        <h5 className="text-sm font-serif italic text-[#C5A059] font-bold">{quizRecommendation?.title}</h5>
                        <p className="text-xs text-neutral-600 mt-0.5 line-clamp-1">{quizRecommendation?.description}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          if (quizRecommendation) onOpenPortfolioModal(quizRecommendation);
                        }}
                        className="flex-1 sm:flex-initial px-3 py-1.5 bg-white border border-[#C5A059]/30 hover:border-[#C5A059] text-[9px] uppercase tracking-widest font-semibold cursor-pointer text-center"
                      >
                        Inspect
                      </button>
                      <button
                        onClick={() => {
                          if (quizRecommendation) onBookService(quizRecommendation.title);
                        }}
                        className="flex-1 sm:flex-initial px-3 py-1.5 bg-[#C5A059] text-white hover:bg-[#A68041] text-[9px] uppercase tracking-widest font-bold cursor-pointer text-center"
                      >
                        Book Look
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Quick Inquiry Bar */}
          <div className="space-y-4 mt-8 pt-6 border-t border-[#C5A059]/15">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#FAF7F2] text-[#C5A059] shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">VIP Concierge Inquiries</p>
                  <p className="text-xs text-neutral-500">Connect via WhatsApp or book direct online</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="text-[10px] uppercase tracking-widest text-[#C5A059] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Consultation</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PORTFOLIO HIGHLIGHTS PREVIEW */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#FAF7F2] border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">Featured Artistry</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-none text-[#1A1A1A]">Curated Looks Preview</h2>
              <p className="text-xs text-neutral-500 mt-2 max-w-md">A glimpse of our signature bridal, soft glam, and editorial looks.</p>
            </div>

            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 border border-[#C5A059] bg-white hover:bg-[#C5A059] hover:text-white text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2 cursor-pointer self-start md:self-auto"
            >
              <span>Explore Complete Gallery ({portfolioItems.length} Looks)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Featured Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenPortfolioModal(item)}
                className="group bg-white border border-[#C5A059]/20 overflow-hidden flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="h-64 sm:h-72 relative overflow-hidden bg-neutral-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[8px] uppercase tracking-widest font-bold text-[#C5A059] border border-[#C5A059]/30">
                    {item.category}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2.5 py-1 text-[8px] uppercase tracking-widest font-bold border border-[#C5A059]/40">
                    Est. ${item.priceEst}
                  </div>

                  <div className="absolute bottom-3 left-3 right-16 text-white">
                    <h3 className="font-serif text-lg italic font-semibold leading-snug drop-shadow-xs">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techniques.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-[8px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF7F2] text-neutral-600 border border-neutral-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex justify-between items-center text-[9px] uppercase tracking-widest text-[#C5A059] font-bold border-t border-neutral-100">
                    <span className="flex items-center gap-1 text-neutral-400">
                      <Clock className="w-3 h-3 text-[#C5A059]" />
                      {item.timeEst}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Inspect Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BESPOKE SERVICES & SUITE HIGHLIGHT */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block">Artistry Suites</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Bespoke Bridal & Event Suites
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-serif italic">
              "From bespoke airbrush waterproofing to royal dupatta draping and jewelry setting, our suites are calibrated to deliver total serenity and immaculate longevity on your special day."
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>16-Hour Sweatproof & Teardrop-resistant HD Formulation</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Complimentary Luxury Lip Touch-up Mini Kit with Bridal Suites</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Available in Studio (Aligarh) & Destination On-Location Worldwide</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#1A1A1A] text-white hover:bg-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Explore Full Services Menu</span>
                <Sliders className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onBookService()}
                className="px-6 py-3.5 border border-[#C5A059] text-[#1A1A1A] hover:bg-[#FAF7F2] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Interactive Pricing Teaser Card with Service Image Thumbnails */}
          <div className="w-full lg:w-1/2 bg-[#FAF7F2] border border-[#C5A059]/25 p-6 sm:p-8 relative shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Popular Signature Suites</span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-400">All-Inclusive Rates</span>
            </div>

            <div className="divide-y divide-[#C5A059]/10 mt-2">
              {services.slice(0, 3).map((srv) => (
                <div key={srv.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {srv.imageUrl && (
                      <img
                        src={srv.imageUrl}
                        alt={srv.name}
                        className="w-12 h-12 object-cover rounded-xs border border-[#C5A059]/20 shrink-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div>
                      <h4 className="font-serif text-sm sm:text-base italic font-bold text-[#1A1A1A]">{srv.name}</h4>
                      <span className="text-[9px] uppercase tracking-wider text-neutral-500">{srv.duration} • {srv.category}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#C5A059]">₹{srv.price.toLocaleString('en-IN')}</span>
                    <button
                      onClick={() => onBookService(srv.name)}
                      className="block text-[8px] uppercase tracking-widest text-neutral-500 hover:text-[#C5A059] mt-0.5 font-bold cursor-pointer"
                    >
                      Book →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#C5A059]/20 text-center">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-bold hover:underline cursor-pointer"
              >
                View Complete Services Menu & Addons →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ACADEMY PRO DIPLOMA TEASER WITH REAL WORKSHOP PHOTO */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#1A1A1A] text-white border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Zash Makeup Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight">
              Master the Craft. <br />
              <span className="text-[#C5A059]">Become a Certified Pro MUA.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Step into the world of professional bridal makeup artistry with our VLCC-aligned Diploma programs, hands-on live model vanity sessions, and full business monetization training.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-[#C5A059]">
              <span>✓ Live Model Shoots</span>
              <span>✓ 32-Pc Pro Kit Included</span>
              <span>✓ Lifetime Mentorship</span>
            </div>
          </div>

          {/* Academy Visual Card */}
          <div className="bg-neutral-900 border border-[#C5A059]/30 overflow-hidden shrink-0 w-full lg:w-96 shadow-2xl">
            <div className="h-44 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
                alt="Zash Academy Masterclass"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
              <span className="absolute top-3 right-3 bg-[#C5A059] text-black px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest">
                VLCC Aligned
              </span>
            </div>

            <div className="p-6 text-center space-y-4">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-neutral-400">30-Day Pro Diploma</p>
                <p className="font-serif text-2xl sm:text-3xl italic text-white font-bold mt-1">$750 All-Inclusive</p>
              </div>
              <button
                onClick={() => {
                  onNavigate('academy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#C5A059] hover:bg-[#A68041] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Explore Academy Courses
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. LOVE STORIES / TESTIMONIAL PREVIEW WITH CLIENT AVATARS */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">Verified Testimonials</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-none text-[#1A1A1A]">Love Stories</h2>
              <p className="text-xs text-neutral-500 mt-2">Real reviews from our delighted brides and creative editorial directors.</p>
            </div>

            <button
              onClick={() => {
                onNavigate('reviews');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Read All Love Stories & Leave a Review →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((rev) => (
              <div key={rev.id} className="bg-white p-6 sm:p-8 border border-[#C5A059]/20 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                      ))}
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-[#C5A059] font-bold px-2 py-0.5 bg-[#C5A059]/10">
                      Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 font-serif italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                  {rev.avatarUrl ? (
                    <img
                      src={rev.avatarUrl}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/30 shrink-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center font-serif font-bold text-[#C5A059] shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A1A]">{rev.name}</h4>
                    <p className="text-[9px] text-neutral-400 uppercase tracking-wider">{rev.role}</p>
                    {rev.eventLocation && (
                      <p className="text-[8px] text-[#C5A059] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{rev.eventLocation}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
