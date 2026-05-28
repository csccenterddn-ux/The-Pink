import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, HeartPulse, CheckSquare, Sparkles } from "lucide-react";

function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse values
  const cleanString = value.replace(/,/g, ""); 
  const numberMatch = cleanString.match(/[\d.]+/);
  const targetNumber = numberMatch ? parseFloat(numberMatch[0]) : 0;
  const suffix = value.replace(/[\d.,]+/g, ""); 
  const isDecimal = value.includes(".");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= duration) {
              setCount(targetNumber);
              return;
            }
            const progress = elapsedTime / duration;
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutCubic * targetNumber;
            setCount(currentVal);
            requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  const formattedCount = count.toLocaleString("en-US", {
    minimumFractionDigits: isDecimal ? 1 : 0,
    maximumFractionDigits: isDecimal ? 1 : 0,
  });

  return (
    <span ref={elementRef} className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function TrustSocialProof() {
  const metrics = [
    { value: "15,000+", label: "Garments Cleaned", detail: "Premium Fabric Care" },
    { value: "4.9★", label: "Google Business Rating", detail: "Verified Google Reviews" },
    { value: "99.8%", label: "Perfect Safety Rate", detail: "Safe Garment Handling" },
    { value: "3,500+", label: "Active Patna Customers", detail: "Trusted Across Patna" },
  ];

  const badges = [
    {
      title: "Hygienic Bio-Wash",
      description: "Antibacterial, hypoallergenic eco-friendly detergents safe for sensitive skin.",
      icon: HeartPulse,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Stain Chemistry Experts",
      description: "Advanced non-hazardous chemical formula target arrays for paint, grease, oil, and ink.",
      icon: ShieldCheck,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Woolmark-Certified Pride",
      description: "Highest level fabric sorting parameters explicitly designed for delicate yarns & silks.",
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Premium Water Conditioning",
      description: "We filter and soften our washing water to preserve colored yarn fibers and white brilliance.",
      icon: CheckSquare,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section id="trust-pillars" className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core metrics panel structured in elegant glassmorphic cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="p-6 md:p-8 rounded-2xl bg-white/75 dark:bg-dark-card/90 backdrop-blur-md border border-slate-200/50 dark:border-white/5 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_45px_rgba(15,23,42,0.06)] dark:hover:shadow-[0_15px_45px_rgba(255,92,168,0.1)] hover:-translate-y-1.5 transition-all duration-300 text-center relative overflow-hidden group"
            >
              {/* Dynamic premium top border highlight */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary-pink/30 to-indigo-500/30 group-hover:from-primary-pink group-hover:to-indigo-500 transition-all duration-500" />
              <div className="absolute top-0 left-[-100%] group-hover:left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 ease-out pointer-events-none" />
              
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-4.5xl text-deep-navy dark:text-[#F8FAFC] mb-2.5 tracking-tight group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-0.5">
                <CountUp value={metric.value} />
              </h3>
              <p className="font-sans font-bold text-xs sm:text-sm text-deep-navy/90 dark:text-slate-200 tracking-tight mb-2">
                {metric.label}
              </p>
              <div className="inline-block px-2.5 py-1 rounded-full bg-slate-50/80 dark:bg-slate-900 border border-slate-100 dark:border-white/5 group-hover:bg-slate-100/50 dark:group-hover:bg-slate-800 transition-colors">
                <p className="font-mono text-[9px] text-slate-400 dark:text-slate-400 font-bold uppercase tracking-widest leading-none">
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand care indicators grids (Two unequal columns or balanced bento) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Leading brand tag and graphics (5 columns) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="font-mono text-xs font-extrabold tracking-wider text-primary-pink uppercase mb-3 block">
              Pristine Operations
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-6">
              Our Professional Care Standard
            </h2>
            <p className="font-sans text-muted-gray dark:text-slate-300 text-base leading-relaxed mb-8">
              We do not treat laundry as a regular utility chore. Our Patna facilities operate using computerized washing technologies, custom pH water controls, and high-efficiency bio-formulations to maintain premium garment density.
            </p>
            
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-white/5 text-left">
              <div className="w-8 h-8 rounded-full bg-primary-pink flex items-center justify-center text-white shrink-0">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-deep-navy dark:text-slate-200">Patna's Dynamic Choice</p>
                <p className="text-[10px] text-muted-gray dark:text-slate-400 font-sans mt-0.5">Recommended by top urban startup founders</p>
              </div>
            </div>
          </div>

          {/* Core items (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {badges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <div className={`w-10 h-10 rounded-xl ${badge.bgColor} dark:bg-indigo-950/20 ${badge.color} flex items-center justify-center mb-4`}>
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-deep-navy dark:text-slate-100 mb-2">
                      {badge.title}
                    </h4>
                    <p className="font-sans text-xs text-muted-gray dark:text-slate-400 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
