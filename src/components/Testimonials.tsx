import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Star, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Check } from "lucide-react";

const GoogleColorIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.66-.63-1.12-1.42-1.12-2.63c0-1.21.46-2 1.12-2.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

interface ReviewData {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const reviews: ReviewData[] = [
    {
      id: "review-1",
      name: "Rajeev Kumar",
      role: "Senior IT Consultant",
      location: "Boring Road",
      text: "Very professional pickup service. Clothes came back fresh and perfectly packed.",
      rating: 5,
      avatar: "RK"
    },
    {
      id: "review-2",
      name: "Sneha Sen",
      role: "Boutique Designer",
      location: "Patliputra Colony",
      text: "Fast delivery and great stain removal on my heavy silk sarees. Highly recommended.",
      rating: 5,
      avatar: "SS"
    },
    {
      id: "review-3",
      name: "Aman Verma",
      role: "Co-founder, EdTech",
      location: "Bailey Road",
      text: "Best laundry service experience in Patna so far. Extremely convenient doorstep pickup.",
      rating: 5,
      avatar: "AV"
    },
    {
      id: "review-4",
      name: "Dr. Ananya Jha",
      role: "Pediatrician",
      location: "Rajendra Nagar",
      text: "Hygienic bio-wash with mild detergent. Perfect for my child's sensitive skin.",
      rating: 5,
      avatar: "AJ"
    },
    {
      id: "review-5",
      name: "Vikram Aditya",
      role: "Advocate",
      location: "Kidwaipuri",
      text: "Punctual delivery and amazing packing. Courteous pickup executives who value time.",
      rating: 5,
      avatar: "VA"
    },
    {
      id: "review-6",
      name: "Kriti Sharma",
      role: "Architect",
      location: "Kankarbagh",
      text: "Outstanding dry cleaning. Every garment looks pristine and feels brand new.",
      rating: 5,
      avatar: "KS"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, reviews.length - visibleCount);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, currentIndex, reviews.length]);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = reviews.length - visibleCount;
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoplay, visibleCount, reviews.length]);

  const handlePrev = () => {
    setIsAutoplay(false);
    const maxIndex = reviews.length - visibleCount;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoplay(false);
    const maxIndex = reviews.length - visibleCount;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoplay(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const maxIndex = reviews.length - visibleCount;
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Glow bubble background */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary-pink/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
            <span>100% Google Verified</span>
          </div>
          <h2 className="font-display font-black text-3.5xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
            Trusted By Patna Families
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-4 text-sm font-sans mb-5">
            <div className="flex items-center gap-1.5 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-white/5 px-3 py-1.5 rounded-full shadow-xs">
              <GoogleColorIcon />
              <span className="font-bold text-deep-navy dark:text-[#F8FAFC]">4.9 Rating</span>
            </div>
            <div className="text-slate-200 dark:text-slate-800 font-extralight hidden sm:inline">|</div>
            <span className="text-muted-gray dark:text-slate-300 font-medium">573+ Verified Reviews</span>
            <div className="text-slate-200 dark:text-slate-800 font-extralight hidden sm:inline">|</div>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold">Google Verified</span>
            </div>
          </div>
 
          <p className="font-sans text-muted-gray dark:text-slate-300 text-base max-w-xl mx-auto mb-6">
            We deliver crisp, immaculate garments to premium households across Patna. Read why families trust our specialized pickup executives.
          </p>
 
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold bg-white dark:bg-dark-surface text-deep-navy dark:text-slate-205 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:bg-slate-800 hover:bg-slate-50 transition-all duration-200 px-4 py-2.5 rounded-xl shadow-xs"
          >
            <GoogleColorIcon />
            <span>View Google Reviews</span>
          </a>
        </div>
 
        {/* Google Trust Bar */}
        <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm p-4 sm:p-5 max-w-4xl mx-auto mb-14 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <div className="flex items-center gap-3.5 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-dark-surface flex items-center justify-center border border-slate-100 dark:border-white/5 shadow-xs shrink-0">
              <GoogleColorIcon />
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                <span className="font-display font-bold text-lg text-deep-navy dark:text-slate-100 leading-none">4.9</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">/ 5 Google Rating</span>
                <div className="flex gap-0.5 ml-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-gray dark:text-slate-400 mt-0.5">Verified Local Resident Feedback</p>
            </div>
          </div>
 
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30">
              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
              <span>100% Genuine</span>
            </div>
            <button 
              onClick={() => {
                document.getElementById('reviews-carousel')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold text-primary-pink hover:text-white bg-primary-pink/5 hover:bg-primary-pink transition-all duration-200 px-4 py-1.5 rounded-xl border border-primary-pink/15"
            >
              Read Reviews
            </button>
          </div>
        </div>
 
        {/* Testimonials Slider */}
        <div 
          id="reviews-carousel"
          className="relative overflow-hidden cursor-grab active:cursor-grabbing px-2"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows for Slider */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden sm:block">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-deep-navy dark:text-slate-100 shadow-md hover:shadow-lg transition-all ml-1 duration-200"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden sm:block">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-deep-navy dark:text-slate-100 shadow-md hover:shadow-lg transition-all mr-1 duration-200"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
 
          {/* Carousel Track wrapper */}
          <div className="overflow-hidden sm:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-out py-4"
              style={{
                transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`
              }}
            >
              {reviews.map((rev) => (
                <div 
                  key={rev.id}
                  className="flex-none px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white dark:bg-dark-card rounded-3xl p-6 sm:p-7 border border-slate-150 dark:border-white/5 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 relative h-full flex flex-col justify-between group">
                    <div>
                      {/* Rating block */}
                      <div className="flex gap-0.5 mb-3.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      
                      {/* Review text */}
                      <p className="font-sans text-[13.5px] sm:text-[14px] text-deep-navy/85 dark:text-slate-200 leading-relaxed mb-6 italic">
                        "{rev.text}"
                      </p>
                    </div>
 
                    {/* Customer Profiling */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-dark-surface flex items-center justify-center text-deep-navy dark:text-slate-250 font-bold text-xs tracking-wider border border-slate-200 dark:border-white/5 font-display shrink-0">
                          {rev.avatar}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-extrabold text-[13.5px] text-deep-navy dark:text-slate-100 leading-tight truncate">
                            {rev.name}
                          </h4>
                          <p className="font-sans text-[10px] text-muted-gray dark:text-slate-400 leading-none mt-0.5 truncate">
                            {rev.role} • <span className="font-medium text-slate-500 dark:text-slate-400">{rev.location}</span>
                          </p>
                        </div>
                      </div>
                      
                      {/* Mini Verified Badge */}
                      <div className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 px-1.5 py-0.5 rounded shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                        <span>VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Slider Indicators Dots */}
          <div className="flex justify-center gap-1.5 mt-8">
            {[...Array(reviews.length - visibleCount + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoplay(false);
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-6 bg-primary-pink" : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
}

