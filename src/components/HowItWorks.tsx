import { motion } from "motion/react";
import { Calendar, RefreshCw, Sparkles, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      title: "Schedule Pickup",
      subtitle: "Effortless Appointment Booking",
      description: "Book an express or standard doorstep pickup from our platform or via simple WhatsApp click. Select your preferred date, time slot, and core clothes count.",
      icon: Calendar,
      color: "bg-pink-50 text-pink-500 border-pink-100",
      pillText: "Open All 7 Days",
    },
    {
      stepNumber: "02",
      title: "Premium Cleaning",
      subtitle: "State-of-the-Art Fabric Care",
      description: "Our logistics team delivers your bag to our specialized studio. Garments are custom-sorted, checked under high-intensity grids, stain-tested, and cleaned with softened pH water.",
      icon: RefreshCw,
      color: "bg-indigo-50 text-indigo-500 border-indigo-100",
      pillText: "Soft Water",
    },
    {
      stepNumber: "03",
      title: "Fresh Doorstep Delivery",
      subtitle: "Hanger-Packaged Freshness",
      description: "Perfectly steam-compressed and vacuum folded in bio-degradable bags with signature perfume. Our dry courier handles premium delivery safely directly to Patna doorsteps.",
      icon: MapPin,
      color: "bg-emerald-50 text-emerald-500 border-emerald-100",
      pillText: "Fast Turnaround",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-dark-surface relative overflow-hidden transition-colors duration-300">
      {/* Dynamic background element */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/35 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smooth Operations</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
            How The Pink Laundry Works
          </h2>
          <p className="font-sans text-muted-gray dark:text-[#CBD5E1] text-base max-w-xl mx-auto">
            We've engineered the traditional local dry cleaner model into a premium doorstep ecosystem built for demanding Patna lifestyles.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Connector timeline graphics (Desktop only) */}
          <div className="hidden lg:block absolute top-[25%] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 dark:from-pink-950/20 dark:via-indigo-950/20 dark:to-emerald-950/20 -z-10" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-slate-100 dark:border-white/5 hover:border-white dark:hover:border-white/10 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Floating Indicator card badge */}
                <div className="absolute top-6 right-6 font-mono font-extrabold text-xs text-muted-gray dark:text-slate-500 flex items-center gap-1">
                  <span>STEP</span>
                  <span className="text-lg text-primary-pink -mt-1">{step.stepNumber}</span>
                </div>

                <div>
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 rounded-2xl ${step.color} dark:bg-indigo-950/20 dark:border-indigo-900/30 border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className="w-6.5 h-6.5" />
                  </div>

                  {/* Core Content */}
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-primary-pink block mb-1">
                    {step.subtitle}
                  </span>
                  
                  <h3 className="font-display font-black text-xl text-deep-navy dark:text-[#F8FAFC] mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm text-muted-gray dark:text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Footer status block */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-gray dark:text-slate-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {step.pillText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-300 group-hover:bg-primary-pink group-hover:text-white dark:group-hover:text-white transition-all duration-300 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Helper beneath timeline */}
        <div className="mt-16 text-center animate-pulse">
          <span className="font-sans text-xs font-semibold text-deep-navy/80 dark:text-slate-300/80">
            Average collection response metric: <strong className="text-primary-pink"> Patna doorstep service responds within 15 minutes of booking!</strong>
          </span>
        </div>

      </div>
    </section>
  );
}
