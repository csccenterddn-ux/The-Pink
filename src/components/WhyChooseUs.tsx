import { motion } from "motion/react";
import {
  Clock,
  Truck,
  Heart,
  Droplet,
  Zap,
  Shield,
  Palette,
  Wand2,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Doorstep Pickup Service",
      description: "Schedule a collection during convenient business hours (9:00 AM - 9:00 PM). Our Patna couriers coordinate seamlessly around your busy schedule to make laundry effortless.",
      icon: Clock,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      title: "Doorstep Pickup & Delivery",
      description: "Express priority pickup from north to south Patna. Perfectly tracked deliveries packaged in dirtproof custom boxes delivered direct to your door.",
      icon: Truck,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Organic Fabric Protection",
      description: "Specific pH buffers prevent fiber degradation. Whites stay bright, colors lock tightly, and woolen cardigans maintain initial structural shape.",
      icon: Shield,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Hygienic Bio-Sterilized Cleaning",
      description: "Our fully localized modern machinery sanitizes garments with antibacterial steaming treatments, totally removing dust mites and chemical allergens.",
      icon: Heart,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Superfast Express Turnaround",
      description: "In a corporate pinch? Our state-of-the-art steam iron units and express washing extract systems deliver your garments back with same-day service available.",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Expert Stain Chemistry",
      description: "Tough gravy, red wine, turmeric or ink? Our certified specialists treat fibers individually using premium imported spotting agent systems.",
      icon: Wand2,
      color: "text-primary-pink",
      bgColor: "bg-pink-50/50",
    },
    {
      title: "Customized Water Softening",
      description: "We filter Patna ground water to less than 10 PPM hardness levels, completely precluding mineral deposits that stiffen your casual cotton shirts.",
      icon: Droplet,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Modern European Wash Methods",
      description: "Replacing aggressive manual scrubbing lines with computer-controlled mechanical spin sequences adapted for fine lace, embroidery, and silk.",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-dark-surface dark:to-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Visual background lights */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-primary-pink/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Headliner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900/35 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Patna Chooses The Pink Laundry</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
            Designed for Modern Lifestyles
          </h2>
          <p className="font-sans text-muted-gray dark:text-[#CBD5E1] text-base max-w-xl mx-auto">
            Traditional laundromats damage clothes with hard tap-water and heavy chemicals. The Pink Laundry implements world-class science to give your favorite clothes a lifespan boost.
          </p>
        </div>
 
        {/* Features Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Frame with pop transition */}
                  <div className={`w-11 h-11 rounded-xl ${feat.bgColor} dark:bg-indigo-950/30 ${feat.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  
                  <h3 className="font-display font-bold text-sm sm:text-base text-deep-navy dark:text-slate-100 mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-muted-gray dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
 
                {/* Micro interactivity details */}
                <div className="pt-4 border-t border-slate-50 dark:border-white/5 mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-primary-pink uppercase font-extrabold tracking-wider">
                    Premium Standard
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-pink animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
