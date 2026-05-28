import { motion } from "motion/react";
import { Sparkles, AlertCircle, Shirt } from "lucide-react";

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

interface CTAProps {
  onScheduleClick: () => void;
}

export default function CTA({ onScheduleClick }: CTAProps) {
  const handleWhatsAppClick = () => {
    const message = "Hi The Pink Laundry & Dry Cleaning! I'd like to book an express laundry pickup.";
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="cta-conversion" className="py-16 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card wrapper */}
        <div className="relative bg-deep-navy dark:bg-dark-card text-white rounded-[40px] px-6 py-12 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border border-slate-800 dark:border-white/5 transition-colors duration-300">
          
          {/* Subtle accent lightings mapped to startup brand */}
          <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary-pink/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-35%] left-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

          {/* Hanging laundry icon visual */}
          <div className="absolute top-10 right-10 opacity-5 sm:opacity-10 scale-150 pointer-events-none rotate-[15deg]">
            <Shirt className="w-48 h-48" />
          </div>

          <div className="max-w-3xl text-center sm:text-left relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-pink text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UPGRADE YOUR FABRIC ROUTINE</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5.5xl leading-[1.1] mb-6">
              Your Clothes Deserve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-indigo-300">
                Premium Fabric Care
              </span>
            </h2>

            {/* Subheadline block */}
            <p className="font-sans text-slate-350 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Experience modern laundry and dry cleaning services designed for busy urban lifestyles. Free pickup and doorstep drop-off across Patna.
            </p>

            {/* Dual CTAs tailored for mobile layouts */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                id="cta-section-primary-pickup-cta"
                onClick={onScheduleClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-deep-navy font-black text-base shadow-lg hover:bg-primary-pink hover:text-white hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-primary-pink" />
                Book Laundry Pickup
              </button>

              <button
                id="cta-section-whatsapp-cta"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent border border-white/20 text-white font-bold text-base hover:bg-[#25D366]/10 hover:border-[#25D366] hover:text-[#25D366] hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Policy footnotes to handle consumer doubt instantly */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-10 border-t border-white/5 mt-10 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-sans font-medium text-slate-300">
                <AlertCircle className="w-4 h-4 text-primary-pink" />
                No minimum order constraints
              </span>
              <span className="hidden sm:inline bg-slate-800 w-1 h-1 rounded-full" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Available all across patna, bihar
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
