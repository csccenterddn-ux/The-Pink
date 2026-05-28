import { useState } from "react";
import { motion } from "motion/react";
import ReferralWidget from "./ReferralWidget";
import {
  WashingMachine,
  Shirt,
  Sparkles,
  Droplet,
  Briefcase,
  Home,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Plus,
  Minus,
  Calculator,
  Building2
} from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Custom premium minimalist SVG outline icons
const HangerIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 7a3 3 0 1 1-3-3" />
    <path d="m12 7 9 9c.6.6.4 1.5-.4 1.5H3.4c-.8 0-1-.9-.4-1.5z" />
  </svg>
);

const SteamIronIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 18h14a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-2" />
    <path d="M12 8H4a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2" />
    <path d="M9 5h6a2 2 0 0 1 2 2v1" />
    <circle cx="6" cy="21" r="0.5" fill="currentColor" />
    <circle cx="11" cy="21" r="0.5" fill="currentColor" />
    <circle cx="16" cy="21" r="0.5" fill="currentColor" />
  </svg>
);

const FabricSparkleIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20.38 3.46L16 6V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2L3.62 3.46c-.72-.43-1.62.08-1.62.91V8.5c0 1 1.5 1.5 1.5 1.5L7 12v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9l3.5-2s1.5-.5 1.5-1.5V4.37c0-.83-.9-1.34-1.62-.91z" />
    <path d="M12 11.5l.5.5-.5.5-.5-.5z" />
    <path d="M15 15.5l.5.5-.5.5-.5-.5z" />
    <path d="M9 16.5l.5.5-.5.5-.5-.5z" />
  </svg>
);

import { Service } from "../types";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"standard" | "calculator">("standard");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 30px 60px -15px rgba(15, 23, 42, 0.12), 0 15px 25px -10px rgba(15, 23, 42, 0.08)",
      borderColor: "rgba(244, 63, 94, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const iconWrapperVariants = {
    visible: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.12,
      rotate: -4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 14,
      },
    },
  };

  const iconVariants = {
    visible: { rotate: 0, scale: 1 },
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const services: Service[] = [
    {
      id: "wet-wash",
      name: "Premium Wet Wash",
      description: "Deep fiber clean with soft pH water, conditioning solutions, and micro-extraction to protect texture, ideal for everyday casual wear.",
      priceDetail: "Starts at ₹69/kg",
      features: ["pH Softened Water", "Individual Machines Used", "Bio-degradable Freshness"],
      iconName: "wet-wash"
    },
    {
      id: "dry-cleaning",
      name: "Express Dry Cleaning",
      description: "Delicate hydrocarbon solvent care for designer suits, premium silk bridal sarees, lehengas, pure wool jackets, and sensitive gowns.",
      priceDetail: "Starts at ₹199/piece",
      features: ["Custom Stain Sorting", "Silk & Woolmark Experts", "Luxury Transparent Covers"],
      iconName: "dry-clean"
    },
    {
      id: "steam-ironing",
      name: "Steam Ironing",
      description: "Crease-free premium finishing using industrial vacuum pressing tables with customized garment temperatures for zero sheen.",
      priceDetail: "Starts at ₹15/piece",
      features: ["High-pressure Press", "Standard Wooden Hangers", "Anti-shine Shield Care"],
      iconName: "steam-iron"
    },
    {
      id: "fabric-conditioning",
      name: "Fabric Conditioning",
      description: "Signature silicon-based micro fiber nourishing treatments to maintain material stretch, rich fabric density, and ambient perfumes.",
      priceDetail: "Starts at ₹39/piece",
      features: ["Color Lock Protection", "Fiber Restoration Technology", "Premium Signature Scent"],
      iconName: "conditioning"
    },
    {
      id: "commercial-laundry",
      name: "Commercial Contracts",
      description: "Dedicated scalable laundry logistics tailored specifically to Patna's leading hotels, corporate hubs, gyms, salons, and boutique spas.",
      priceDetail: "Custom Volume Quotes",
      features: ["Dedicated Route Logistics", "Priority 12-Hour turnaround", "Institutional Invoices"],
      iconName: "commercial"
    },
    {
      id: "residential-bundles",
      name: "Residential Bundles",
      description: "Effortless, discounted laundry subscription schemes designed for active modern Patna families, residential blocks, and students.",
      priceDetail: "Starts at ₹1499/month",
      features: ["4 Pickups Per Month", "Priority Ironing included", "Dedicated Support Line"],
      iconName: "residential"
    }
  ];

  // Pricing Estimator state
  const pricingItems = [
    { name: "Shirt / T-Shirt", wetWash: 49, dryClean: 89, iron: 15 },
    { name: "Jeans / Trousers", wetWash: 59, dryClean: 99, iron: 20 },
    { name: "Premium Saree (Silk)", wetWash: 149, dryClean: 249, iron: 49 },
    { name: "Blazer / Jacket", wetWash: 119, dryClean: 199, iron: 39 },
    { name: "Bedsheet (Double)", wetWash: 99, dryClean: 149, iron: 29 },
  ];

  const [quantities, setQuantities] = useState<Record<string, { wetWash: number; dryClean: number; iron: number }>>(
    pricingItems.reduce((acc, item) => {
      acc[item.name] = { wetWash: 0, dryClean: 0, iron: 0 };
      return acc;
    }, {} as Record<string, { wetWash: number; dryClean: number; iron: number }>)
  );

  const updateQuantity = (itemName: string, type: "wetWash" | "dryClean" | "iron", change: number) => {
    setQuantities((prev) => {
      const current = prev[itemName][type];
      const next = Math.max(0, current + change);
      return {
        ...prev,
        [itemName]: {
          ...prev[itemName],
          [type]: next,
        },
      };
    });
  };

  const calculateTotal = () => {
    return pricingItems.reduce((total, item) => {
      const itemQ = quantities[item.name];
      const itemTotal =
        itemQ.wetWash * item.wetWash +
        itemQ.dryClean * item.dryClean +
        itemQ.iron * item.iron;
      return total + itemTotal;
    }, 0);
  };

  const hasSelectedItems = calculateTotal() > 0;

  const handleBookEstimate = () => {
    const selectedText = pricingItems
      .filter((item) => {
        const q = quantities[item.name];
        return q.wetWash > 0 || q.dryClean > 0 || q.iron > 0;
      })
      .map((item) => {
        const q = quantities[item.name];
        const parts = [];
        if (q.wetWash > 0) parts.push(`${q.wetWash}x Wet Wash`);
        if (q.dryClean > 0) parts.push(`${q.dryClean}x Dry Clean`);
        if (q.iron > 0) parts.push(`${q.iron}x Iron`);
        return `${item.name} (${parts.join(", ")})`;
      })
      .join("\n");

    const message = `Hi The Pink Laundry & Dry Cleaning! I've estimated my laundry needs on your website:\n\n${selectedText}\n\nEstimated Total: ₹${calculateTotal()}\n\nI'd like to book a doorstep pickup for these!`;
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "wet-wash":
        return <Droplet className="w-6 h-6" />;
      case "dry-clean":
        return <HangerIcon className="w-6 h-6" />;
      case "steam-iron":
        return <SteamIronIcon className="w-6 h-6" />;
      case "conditioning":
        return <FabricSparkleIcon className="w-6 h-6" />;
      case "commercial":
        return <Building2 className="w-6 h-6" />;
      case "residential":
        return <Home className="w-6 h-6" />;
      default:
        return <Shirt className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Visual glowing bubbles */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary-pink/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headliner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-pink/10 border border-primary-pink/20 text-primary-pink text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Fabric Solutions</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
            Elite Care & Restoration
          </h2>
          <p className="font-sans text-muted-gray dark:text-[#CBD5E1] text-base max-w-xl mx-auto">
            Choose from dry cleaning, premium sorting washes, and custom pressing options managed by professional laundry artisans.
          </p>
 
          {/* Sub menu controls */}
          <div className="flex bg-slate-100 dark:bg-slate-900 border dark:border-white/5 p-1.5 rounded-2xl w-fit mx-auto mt-8 relative">
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "standard"
                  ? "bg-white dark:bg-slate-800 text-deep-navy dark:text-slate-100 shadow"
                  : "text-muted-gray dark:text-slate-400 hover:text-deep-navy dark:hover:text-slate-250"
              }`}
            >
              <Shirt className="w-4 h-4" />
              Our Core Services
            </button>
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "calculator"
                  ? "bg-white dark:bg-slate-800 text-deep-navy dark:text-slate-100 shadow"
                  : "text-muted-gray dark:text-slate-400 hover:text-deep-navy dark:hover:text-slate-250"
              }`}
            >
              <Calculator className="w-4 h-4" />
              Patna Instant Pricing Estimator
            </button>
          </div>
        </div>
 
        {/* Tab content 1: Service Cards */}
        {activeTab === "standard" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-slate-50 dark:bg-dark-card hover:bg-white dark:hover:bg-dark-card/90 rounded-3xl p-6 border border-slate-100/80 dark:border-white/5 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Neon back glow */}
                <div className="absolute top-[-50%] right-[-50%] w-[150px] h-[150px] rounded-full bg-primary-pink/0 group-hover:bg-primary-pink/5 blur-[35px] transition-all duration-500 pointer-events-none" />
 
                <div>
                  {/* Premium Minimalist Service Icon Container with Staggered Interactive Scaling/Rotation on Hover */}
                  <motion.div 
                    variants={iconWrapperVariants}
                    className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 group-hover:bg-pink-50/50 dark:group-hover:bg-pink-950/20 group-hover:border-primary-pink/25 flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(15,23,42,0.01)] group-hover:shadow-[0_8px_24px_rgba(244,63,94,0.05)] transition-all duration-350"
                  >
                    <motion.div 
                      variants={iconVariants}
                      className="text-deep-navy/85 dark:text-slate-200 group-hover:text-primary-pink transition-colors duration-300"
                    >
                      {getServiceIcon(service.iconName)}
                    </motion.div>
                  </motion.div>
 
                  <span className="font-mono text-[10px] text-primary-pink uppercase font-extrabold tracking-widest block mb-1">
                    {service.priceDetail}
                  </span>
                  
                  <h3 className="font-display font-black text-lg sm:text-xl text-deep-navy dark:text-slate-100 mb-2.5">
                    {service.name}
                  </h3>
 
                  <p className="font-sans text-xs sm:text-sm text-muted-gray dark:text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>
 
                {/* Features Checklist */}
                <div>
                  <div className="pt-6 border-t border-slate-200/50 dark:border-white/5 space-y-2.5 mb-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0" />
                        <span className="font-sans text-xs text-deep-navy/80 dark:text-slate-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
 
        {/* Tab content 2: Pricing Estimator Widget */}
        {activeTab === "calculator" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-slate-50 dark:bg-dark-surface rounded-3xl border border-slate-100 dark:border-white/5 p-6 sm:p-10 shadow-xl transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Quantities Editor column */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                  <span className="font-display font-extrabold text-base text-deep-navy dark:text-[#F8FAFC] uppercase tracking-wider">
                    Select Your Items
                  </span>
                  <p className="text-xs text-muted-gray dark:text-[#94A3B8]">Pricing estimate (Standard Patna rates)</p>
                </div>
 
                <div className="space-y-4">
                  {pricingItems.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white dark:bg-dark-card p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all shadow-sm"
                    >
                      <div className="font-sans font-bold text-sm text-deep-navy dark:text-[#F8FAFC] mb-3">
                        {item.name}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {/* Wet Wash controls */}
                        <div className="flex items-center justify-between p-3.5 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-white/5">
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-[10px] font-bold text-deep-navy/80 dark:text-slate-300">Wet Wash</span>
                            <span className="text-xs sm:text-[10px] text-primary-pink font-semibold">₹{item.wetWash}/pc</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-2">
                            <button
                              onClick={() => updateQuantity(item.name, "wetWash", -1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Decrease ${item.name} wet wash quantity`}
                            >
                              <Minus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                            <span className="w-8 sm:w-6 text-center font-mono text-sm sm:text-xs font-bold text-deep-navy dark:text-slate-200">
                              {quantities[item.name].wetWash}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, "wetWash", 1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Increase ${item.name} wet wash quantity`}
                            >
                              <Plus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Dry Clean controls */}
                        <div className="flex items-center justify-between p-3.5 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-white/5">
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-[10px] font-bold text-deep-navy/80 dark:text-slate-300">Dry Clean</span>
                            <span className="text-xs sm:text-[10px] text-primary-pink font-semibold">₹{item.dryClean}/pc</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-2">
                            <button
                              onClick={() => updateQuantity(item.name, "dryClean", -1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Decrease ${item.name} dry clean quantity`}
                            >
                              <Minus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                            <span className="w-8 sm:w-6 text-center font-mono text-sm sm:text-xs font-bold text-deep-navy dark:text-slate-200">
                              {quantities[item.name].dryClean}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, "dryClean", 1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Increase ${item.name} dry clean quantity`}
                            >
                              <Plus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Iron controls */}
                        <div className="flex items-center justify-between p-3.5 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-white/5">
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-[10px] font-bold text-deep-navy/80 dark:text-slate-300">Steam Iron</span>
                            <span className="text-xs sm:text-[10px] text-primary-pink font-semibold">₹{item.iron}/pc</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-2">
                            <button
                              onClick={() => updateQuantity(item.name, "iron", -1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Decrease ${item.name} steam iron quantity`}
                            >
                              <Minus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                            <span className="w-8 sm:w-6 text-center font-mono text-sm sm:text-xs font-bold text-deep-navy dark:text-slate-200">
                              {quantities[item.name].iron}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, "iron", 1)}
                              className="w-11 h-11 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-primary-pink hover:text-white transition cursor-pointer"
                              aria-label={`Increase ${item.name} steam iron quantity`}
                            >
                              <Plus className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Total Calculation panel (Right layout) */}
              <div className="w-full lg:w-80 bg-deep-navy dark:bg-dark-card text-white rounded-2xl p-6 flex flex-col justify-between border border-slate-800 dark:border-white/5 shadow-xl self-start">
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-pink mb-4">
                    Order Calculation
                  </h4>
                  <div className="space-y-3.5 max-h-56 overflow-y-auto mb-6 pr-1 feedback-scrollbar">
                    {pricingItems.some((item) => {
                      const q = quantities[item.name];
                      return q.wetWash > 0 || q.dryClean > 0 || q.iron > 0;
                    }) ? (
                      pricingItems.map((item) => {
                        const q = quantities[item.name];
                        if (q.wetWash === 0 && q.dryClean === 0 && q.iron === 0) return null;
                        
                        return (
                          <div key={item.name} className="flex justify-between text-xs border-b border-slate-850 pb-2">
                            <div>
                              <p className="font-semibold text-white/90">{item.name}</p>
                              <p className="text-[10px] text-slate-400 mt-0.5">
                                {q.wetWash > 0 && `${q.wetWash}x Wash `}
                                {q.dryClean > 0 && `${q.dryClean}x Dry `}
                                {q.iron > 0 && `${q.iron}x Iron`}
                              </p>
                            </div>
                            <span className="font-mono font-bold text-primary-pink">
                              ₹{q.wetWash * item.wetWash + q.dryClean * item.dryClean + q.iron * item.iron}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-xs text-slate-400 py-6 text-center">
                        Select items using the controllers to compile an instant estimation.
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-sm font-bold text-slate-300">Estimated Total</span>
                    <span className="font-display font-black text-2xl text-white">
                      ₹{calculateTotal()}
                    </span>
                  </div>

                  <button
                    onClick={handleBookEstimate}
                    disabled={!hasSelectedItems}
                    className={`w-full py-3.5 rounded-xl text-center text-sm font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      hasSelectedItems
                        ? "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:scale-[1.02] cursor-pointer"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
                    Book via WhatsApp
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
                    Pickup & doorstep delivery is FREE for orders above ₹399!
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* Tab content 2: Pricing Estimator Widget (Referral Card rendered underneath for maximum conversion) */}
        {activeTab === "calculator" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ReferralWidget />
          </motion.div>
        )}

      </div>
    </section>
  );
}
