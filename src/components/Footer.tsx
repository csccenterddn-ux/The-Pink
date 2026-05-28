import { Phone, Mail, Clock, MapPin, Heart, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-deep-navy dark:bg-dark-bg text-slate-400 py-16 sm:py-20 border-t border-slate-800 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      
      {/* Accent back-glow lights */}
      <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-primary-pink/5 blur-[100px] pointer-events-none" />

      {/* Footer Ambient Animated Water Bubbles (11 High-Fidelity Glassmorphism Elements with realistic transparent centers) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
        {/* Bubble 1: Left Rise */}
        <div 
          className="absolute bottom-[-50px] left-[6%] w-13 h-13 rounded-full border border-white/70 dark:border-white/40 bg-gradient-to-tr from-pink-500/5 via-white/1 to-blue-500/5 shadow-[inset_-3px_-3px_9px_rgba(255,255,255,0.9),inset_3px_3px_6px_rgba(0,0,0,0.012),0_10px_20px_rgba(255,92,168,0.1)] backdrop-blur-[0.5px] animate-bubble-footer-1" 
          style={{ animationDelay: "0s" }}
        >
          {/* Main top specular glint */}
          <div className="absolute top-1.2 left-1.5 w-[38%] h-[20%] rounded-full bg-gradient-to-b from-white/95 to-white/20 rotate-[-15deg] shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
          {/* Bottom backside reflection */}
          <div className="absolute bottom-1 right-1.5 w-[18%] h-[18%] rounded-full bg-white/35 filter blur-[0.2px]" />
        </div>

        {/* Bubble 2: Left-Center Rise (Small) */}
        <div 
          className="absolute bottom-[-40px] left-[20%] w-8 h-8 rounded-full border border-white/70 dark:border-white/45 bg-gradient-to-tr from-white/8 to-white/0 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.95),0_6px_12px_rgba(255,255,255,0.12)] animate-bubble-footer-2" 
          style={{ animationDelay: "4s" }}
        >
          <div className="absolute top-0.8 left-1 w-[40%] h-[22%] rounded-full bg-white/95 rotate-[-15deg]" />
        </div>

        {/* Bubble 3: Left-Center Wide Rise (Medium) */}
        <div 
          className="absolute bottom-[-50px] left-[34%] w-11 h-11 rounded-full border border-white/70 dark:border-white/40 bg-gradient-to-tr from-pink-500/4 via-white/1 to-blue-500/4 shadow-[inset_-2.5px_-2.5px_8px_rgba(255,255,255,0.9)] animate-bubble-footer-3 hidden sm:block" 
          style={{ animationDelay: "1.5s" }}
        >
          <div className="absolute top-1 left-1.2 w-[38%] h-[20%] rounded-full bg-gradient-to-b from-white/95 to-white/25 rotate-[-15deg] shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-1 right-1.2 w-[18%] h-[18%] rounded-full bg-white/30 filter blur-[0.1px]" />
        </div>

        {/* Bubble 4: Center Rise */}
        <div 
          className="absolute bottom-[-40px] left-[48%] w-10 h-10 rounded-full border border-white/70 dark:border-white/40 bg-gradient-to-tr from-white/8 to-white/0 shadow-[inset_-2.2px_-2.2px_7px_rgba(255,255,255,0.9)] animate-bubble-footer-1" 
          style={{ animationDelay: "6s" }}
        >
          <div className="absolute top-1 left-1.2 w-[38%] h-[20%] rounded-full bg-white/95 rotate-[-15deg]" />
        </div>

        {/* Bubble 5: Middle Right Rise */}
        <div 
          className="absolute bottom-[-50px] left-[64%] w-12 h-12 rounded-full border border-white/70 dark:border-white/40 bg-gradient-to-tr from-indigo-500/5 via-white/1 to-pink-500/5 shadow-[inset_-2.8px_-2.8px_8.5px_rgba(255,255,255,0.9),0_8px_16px_rgba(99,102,241,0.08)] animate-bubble-footer-2" 
          style={{ animationDelay: "9s" }}
        >
          <div className="absolute top-1 left-1.5 w-[38%] h-[20%] rounded-full bg-gradient-to-b from-white/95 to-white/20 rotate-[-15deg] shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-1 right-1.5 w-[18%] h-[18%] rounded-full bg-white/35 filter blur-[0.2px]" />
        </div>

        {/* Bubble 6: Right Rise Huge */}
        <div 
          className="absolute bottom-[-60px] right-[22%] w-15 h-15 rounded-full border border-white/75 dark:border-white/45 bg-gradient-to-tr from-pink-500/5 via-white/1 to-blue-500/5 shadow-[inset_-3.5px_-3.5px_11px_rgba(255,255,255,0.92),inset_3.5px_3px_7px_rgba(0,0,0,0.012),0_12px_24px_rgba(244,63,94,0.08)] backdrop-blur-[0.5px] animate-bubble-footer-3 hidden md:block" 
          style={{ animationDelay: "3s" }}
        >
          <div className="absolute top-1.5 left-2 w-[38%] h-[20%] rounded-full bg-gradient-to-b from-white/95 to-white/22 rotate-[-15deg] shadow-[0_1.5px_3px_rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-1.5 right-2  w-[22%] h-[22%] rounded-full bg-white/40 filter blur-[0.2px]" />
        </div>

        {/* Bubble 7: Right Edge Soft Mini */}
        <div 
          className="absolute bottom-[-40px] right-[8%] w-9 h-9 rounded-full border border-white/70 dark:border-white/45 bg-gradient-to-tr from-blue-500/4 via-white/1 to-pink-500/4 shadow-[inset_-1.8px_-1.8px_5.5px_rgba(255,255,255,0.9)] animate-bubble-footer-1" 
          style={{ animationDelay: "11s" }}
        >
          <div className="absolute top-0.8 left-1 w-[40%] h-[22%] rounded-full bg-white/95 rotate-[-15deg]" />
        </div>

        {/* Static Swaying Bubbles for Upper Ambient Depth */}
        <div className="absolute top-[15%] left-[12%] w-11 h-11 rounded-full border border-white/65 dark:border-white/35 bg-gradient-to-tr from-white/5 to-white/0 animate-bubble-sway-slow opacity-85 hidden lg:block shadow-[inset_-2.5px_-2.5px_7.5px_rgba(255,255,255,0.9)]">
          <div className="absolute top-1 left-2 w-[38%] h-[20%] rounded-full bg-white/60 rotate-[-15deg]" />
        </div>

        <div className="absolute top-[38%] right-[11%] w-8 h-8 rounded-full border border-white/65 dark:border-white/35 bg-gradient-to-tr from-white/5 to-white/0 animate-bubble-sway-medium opacity-75 hidden lg:block shadow-[inset_-1.8px_-1.8px_5.5px_rgba(255,255,255,0.9)]">
          <div className="absolute top-0.8 left-1.2 w-[38%] h-[20%] rounded-full bg-white/60 rotate-[-15deg]" />
        </div>

        <div className="absolute top-[22%] right-[32%] w-13 h-13 rounded-full border border-white/65 dark:border-white/35 bg-gradient-to-tr from-pink-500/4 via-white/1 to-blue-500/4 animate-bubble-sway-slow opacity-80 hidden sm:block shadow-[inset_-3px_-3px_9px_rgba(255,255,255,0.9)]">
          <div className="absolute top-1.5 left-2 w-[38%] h-[20%] rounded-full bg-white/60 rotate-[-15deg]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-12 mb-16">
          
          {/* Logo brand intro (4 columns) - Center aligned on mobile, left aligned on desktop */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <a href="#home" className="flex items-center gap-3 group justify-center lg:justify-start">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950 p-[1px] shadow-lg shadow-black/20 transition-all duration-300">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-all duration-300">
                  {/* Custom Elegant Hanger + Flowing Fabric Wave + Monogram P SVG */}
                  <svg
                    className="w-5.5 h-5.5 text-white group-hover:text-primary-pink transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Coat Hanger hook flowing from top-center */}
                    <path d="M12 6c0-1.8 1.5-2.5 2.5-1.5s-1.5 2.5-2.5 3" />
                    {/* Monogram P outer structure */}
                    <path d="M8 20V8a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H8" />
                    {/* Flowing silk/water wave layer flowing out from the center */}
                    <path d="M11 12c1.8 0 2.5 2 4.5 2s3-2 4.5-2" strokeWidth="1.3" className="text-primary-pink" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-base tracking-tight text-white leading-none">
                  The <span className="text-primary-pink">Pink</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.14em] font-extrabold text-primary-pink uppercase mt-1.5 leading-none">
                  Laundry & Dry Cleaning
                </span>
              </div>
            </a>
            
            {/* Left aligned paragraph under centered/left brand */}
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm text-left w-full">
              We are a modern, high-grade technology startup brand reinventing dry cleaning and laundry in Patna. Backed by organic chemicals and premium sorting protocols.
            </p>

            {/* Centered on mobile, left on desktop */}
            <div className="flex items-center justify-center lg:justify-start gap-1 w-full">
              <span className="text-xs text-slate-300 font-sans font-bold">Google Rating: </span>
              <div className="flex gap-0.5 items-center ml-1">
                <span className="text-xs font-mono font-bold text-amber-400 mr-1">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
            </div>
          </div>

          {/* Quick links: Services (3 columns) - Left Aligned */}
          <div className="lg:col-span-3 text-left w-full text-slate-405">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-xs text-left">
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Premium Wet Wash
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Express Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Steam Ironing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Fabric Conditioning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Commercial Laundry Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Residential Bundle Schemes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: Core Facilities (2 columns) - Left Aligned */}
          <div className="lg:col-span-2 text-left w-full">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Why Choose The Pink Laundry
            </h4>
            <ul className="space-y-3.5 text-xs text-left">
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Open All 7 Days</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Doorstep Pickup</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Fabric Sorting</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Stain Spotting</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Bio-detergents Only</span>
              </li>
            </ul>
          </div>

          {/* Patna coordinates (3 columns) - Left Aligned */}
          <div className="lg:col-span-3 space-y-4 text-left w-full">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Contact Information
            </h4>
            <div className="space-y-4 text-xs text-slate-350 text-left">
              <div className="flex items-start gap-2.5 justify-start">
                <MapPin className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                <span>90 Feet Road, Vijay Nagar, Hanuman Nagar, opposite NBCC Tower, SBI Officers Colony, Kankarbagh, Patna, Bihar 800026</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Phone className="w-4 h-4 text-primary-pink shrink-0" />
                <span className="font-mono">+91 91231 53369</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Mail className="w-4 h-4 text-primary-pink shrink-0" />
                <span className="font-mono">thepinklaundry@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Clock className="w-4 h-4 text-primary-pink shrink-0" />
                <span>Monday – Sunday: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer legalities row - Centered on mobile */}
        <div className="pt-8 border-t border-slate-800 dark:border-white/5 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p>© {currentYear} The Pink Laundry & Dry Cleaning. All rights reserved across Patna, Bihar.</p>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-sans">
            <span>Made with precision for luxury garments</span>
            <Heart className="w-3.5 h-3.5 text-primary-pink fill-primary-pink" />
            <span>in Patna.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
