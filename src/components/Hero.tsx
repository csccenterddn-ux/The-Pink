import { motion } from "motion/react";
import { Sparkles, Star, ShieldCheck, Clock, Navigation } from "lucide-react";

// Official WhatsApp icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Premium, realistic laundry and garment photography from Unsplash
const heroImageUrl = "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800";

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  const handleWhatsAppClick = () => {
    const message = "Hi The Pink Laundry & Dry Cleaning! I'd like to inquire about your premium laundry services.";
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[55vh] md:min-h-[60vh] lg:min-h-[68vh] pt-2 pb-8 sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg overflow-hidden flex items-center transition-colors duration-300"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-pink/5 dark:bg-primary-pink/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-primary-pink/10 dark:bg-primary-pink/4 blur-[130px] pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Headline Content column (7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tag badge with stagger entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-pink/10 border border-primary-pink/20 text-primary-pink dark:text-primary-pink text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0 w-fit mb-4 md:mb-5 font-display"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Patna's Premium Fabric Care Startup</span>
            </motion.div>

            {/* Display Headings with custom tracking/leading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-deep-navy dark:text-[#F8FAFC] leading-[1.1] mb-4 md:mb-5"
            >
              Premium Laundry Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink via-pink-600 to-deep-navy dark:to-indigo-300">
                Delivered To Your Doorstep
              </span>
            </motion.h1>

            {/* Subheadline with high readability and contrast */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-muted-gray dark:text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-5 md:mb-6"
            >
              Professional dry cleaning, express laundry, fabric conditioning, and convenient doorstep pickup & delivery across Patna. Your garments deserve the elite touch.
            </motion.p>

            {/* Staggered CTAs with explicit visual click cues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button
                id="hero-primary-pickup-cta"
                onClick={onScheduleClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-deep-navy dark:bg-white text-white dark:text-deep-navy font-bold text-base shadow-xl shadow-deep-navy/15 hover:bg-primary-pink dark:hover:bg-primary-pink dark:hover:text-white hover:shadow-primary-pink/30 hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <Sparkles className="w-5 h-5 text-glow-pink" />
                Schedule Pickup
              </button>

              <button
                id="hero-whatsapp-cta"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-deep-navy dark:text-slate-200 font-bold text-base shadow-md hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 dark:hover:bg-[#25D366]/10 hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-display"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </button>
            </motion.div>

            {/* Value Indicators (Trust badges) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 mt-6 md:pt-8 md:mt-8 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-deep-navy dark:text-[#F8FAFC] leading-none font-display">100% Guarded</h4>
                  <p className="text-[10px] text-muted-gray dark:text-[#94A3B8] mt-1">Fabric Protection Guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-primary-pink/5 dark:bg-primary-pink/10 flex items-center justify-center text-primary-pink">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-deep-navy dark:text-[#F8FAFC] leading-none font-display">Fast Turnaround</h4>
                  <p className="text-[10px] text-muted-gray dark:text-[#94A3B8] mt-1">Express Care Available</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 md:col-span-1">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 flex items-center justify-center text-indigo-500 session-badge">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-deep-navy dark:text-[#F8FAFC] leading-none font-display">All Patna Coverage</h4>
                  <p className="text-[10px] text-muted-gray dark:text-[#94A3B8] mt-1">Doorstep Pickup/Drop</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Image Showcase column (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:pl-4">
            
            {/* Image Outer Containment Ring with subtle glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] lg:max-w-[440px] aspect-[1.15/1] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/85 bg-slate-100 dark:bg-slate-900 group"
            >
              <img
                src={heroImageUrl}
                alt="The Pink Laundry & Dry Cleaning Premium Laundry Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Element 1 - Google Stars Badge */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -right-2 md:-right-6 glassmorphism dark:glassmorphism-dark border border-white/60 dark:border-white/5 rounded-2xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Star className="w-5.5 h-5.5 fill-amber-500 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  <span className="font-display font-extrabold text-base text-deep-navy dark:text-slate-100">4.9</span>
                  <span className="text-xs text-muted-gray dark:text-slate-400">/5.0</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="text-[10px] text-muted-gray dark:text-slate-400 mt-0.5">Google Business verified</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Service statistics card (Bottom left) */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-2 md:-left-6 glassmorphism dark:glassmorphism-dark border border-white/60 dark:border-white/5 rounded-2xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-pink/10 flex items-center justify-center text-primary-pink font-bold font-display text-base">
                EXP
              </div>
              <div>
                <h4 className="text-sm font-bold text-deep-navy dark:text-slate-100 leading-none font-display">Express Clean</h4>
                <p className="text-[11px] text-muted-gray dark:text-slate-400 mt-1">Same-Day Service Available</p>
                <div className="w-20 bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-primary-pink h-full w-[85%] rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Floating Element 3 - Mini Delivery Tracker visual popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-12 glassmorphism dark:glassmorphism-dark border border-white/60 dark:border-white/5 rounded-xl px-3 py-1.5 shadow-lg items-center gap-2 bounce-slow"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-semibold text-deep-navy dark:text-slate-200 font-sans">Patna Pickup Live</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
