import { Sparkles, Phone } from "lucide-react";

const WhatsAppIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface FloatingWhatsAppProps {
  onScheduleClick: () => void;
}

export default function FloatingWhatsApp({ onScheduleClick }: FloatingWhatsAppProps) {
  const triggerWhatsApp = () => {
    const message = "Hi The Pink Laundry & Dry Cleaning! I'd like to book a doorstep pickup.";
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Floating pulsing WhatsApp bubble */}
      <div className="fixed bottom-[84px] md:bottom-6 right-5 md:right-6 z-[60]">
        <button
          onClick={triggerWhatsApp}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping pointer-events-none" />
          
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900/95 backdrop-blur-md text-white text-[10px] font-bold font-sans uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-800 pointer-events-none">
            Chat Support Online
          </span>
        </button>
      </div>

      {/* Sticky Mobile CTA Bar (Shown on small screens, hidden on lg screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-100 dark:border-white/5 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+919123153369"
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#EEF4FF] dark:bg-blue-500/12 border border-blue-200/50 dark:border-blue-900/30 text-[#3B82F6] dark:text-blue-400 text-xs font-bold font-sans hover:bg-[#DBE9FE] dark:hover:bg-blue-500/22 shadow-sm shadow-blue-500/5 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-[#3B82F6] dark:text-blue-400 fill-blue-500/5" />
            Call Support
          </a>
          <button
            onClick={onScheduleClick}
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-pink text-white text-xs font-bold shadow-lg shadow-primary-pink/20 active:scale-98 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Schedule Pickup
          </button>
        </div>
      </div>
    </>
  );
}
