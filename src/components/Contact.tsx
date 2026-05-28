import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  HelpCircle,
  Smartphone,
  CheckCircle2
} from "lucide-react";

const WhatsAppIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.536-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface PatnaZone {
  id: string;
  name: string;
  type: string;
  timing: string;
  minOrder: string;
  badgeColor: string;
  coords: { x: number; y: number };
  description: string;
  sectors: string;
}

const patnaZones: PatnaZone[] = [
  {
    id: "kankarbagh",
    name: "Kankarbagh & Hanuman Nagar",
    type: "Studio Hub Zone",
    timing: "Instant Pickup (<45m)",
    minOrder: "₹199 Min",
    badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30",
    coords: { x: 50, y: 50 },
    description: "Centering our advanced wet wash and premium dry cleaning processing hub opposite NBCC Tower.",
    sectors: "Kankarbagh Colony, Vijay Nagar, Hanuman Nagar, Sector-1 to 10, SBI Officers Colony, Rajendra Nagar, Lohia Nagar, Kadamkuan, Lohanipur, Chiraiyatand"
  },
  {
    id: "patliputra",
    name: "Patliputra & Boring Road",
    type: "Core Express Hub",
    timing: "Express Pickup (2 Hours)",
    minOrder: "₹249 Min",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
    coords: { x: 55, y: 32 },
    description: "Full priority dry cleaning and valet route dispatch, highly optimized.",
    sectors: "Patliputra Colony, Boring Road, Boring Canal Road, Kidwaipuri, Alpana Market"
  },
  {
    id: "bailey-road",
    name: "Bailey Road & Ashiana",
    type: "Active Corridor",
    timing: "Scheduled Quick (3 Hours)",
    minOrder: "₹249 Min",
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-indigo-500/30",
    coords: { x: 28, y: 58 },
    description: "Constant courier delivery vans operating along the highway corridor.",
    sectors: "Ashiana Nagar, Raja Bazar, Jagdeo Path, Khajpura, Pillar 1 to 100"
  },
  {
    id: "patel-nagar",
    name: "Patel Nagar & Keshri Nagar",
    type: "High Density Zone",
    timing: "Standard Twice Daily Run",
    minOrder: "₹299 Min",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30",
    coords: { x: 76, y: 65 },
    description: "Scheduled dispatch runs occurring twice every day (morning and evening).",
    sectors: "North Patel Nagar, Keshri Nagar, Rajeev Nagar, Mahesh Nagar, Kautilya Nagar"
  },
  {
    id: "danapur",
    name: "Danapur & Khagaul",
    type: "Extended Reach",
    timing: "Scheduled Daily Route",
    minOrder: "₹349 Min",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30",
    coords: { x: 16, y: 45 },
    description: "Covered by our scheduled long-distance dispatch networks daily.",
    sectors: "Danapur Cantt, Khagaul, Saguna More, Gola Road, RK Puram"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Premium Wet Wash",
    message: "",
  });

  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);
  const [mapMode, setMapMode] = useState<"location" | "zones">("location");
  const [activeZoneId, setActiveZoneId] = useState<string>("kankarbagh");

  const activeZone = patnaZones.find((z) => z.id === activeZoneId) || patnaZones[0];

  const servicesList = [
    "Premium Wet Wash",
    "Express Dry Cleaning",
    "Steam Ironing",
    "Fabric Conditioning",
    "Commercial Laundry Contracts",
    "Residential Laundry Service",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all the required fields.");
      return;
    }
    setIsInquirySubmitted(true);
  };

  const triggerInquiryWhatsApp = () => {
    const msg = `Hi The Pink Laundry & Dry Cleaning! I've sent an inquiry via your Contact Form:\n\n👤 *Name*: ${formData.name}\n✉️ *Email*: ${formData.email || "N/A"}\n📞 *Phone*: ${formData.phone}\n🧺 *Interest*: ${formData.service}\n📝 *Message*: ${formData.message}`;
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Decorative premium soft ambient glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-primary-pink/5 to-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[5%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/5 to-primary-pink/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content with premium startup styling */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-pink/10 border border-primary-pink/15 text-primary-pink text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary-pink" />
            <span>Support Center</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-deep-navy dark:text-[#F8FAFC] tracking-tight leading-tight mb-4">
            We're Always Listening
          </h2>
          <p className="font-sans text-slate-500 dark:text-slate-350 text-sm sm:text-base leading-relaxed leading-normal">
            Visit our state-of-the-art Patna processing studio or reach out with your questions. Our dedicated customer team is ready to assist you.
          </p>
        </div>

        {/* Balanced 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Column 1: Contact details & Map inside a beautiful flex column */}
          <div className="flex flex-col justify-between gap-8 h-full">
            
            {/* 2x2 Bento-Grid Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Visit Our Location */}
              <div className="bg-white/75 dark:bg-dark-card/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 text-primary-pink flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 block">
                  <h4 className="font-display font-bold text-xs text-deep-navy dark:text-slate-100 tracking-wider uppercase font-sans">Visit Our Location</h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    90 Feet Road, Vijay Nagar, Hanuman Nagar, opposite NBCC Tower, SBI Officers Colony, Kankarbagh, Patna, Bihar 800026
                  </p>
                  <a
                    href="https://maps.google.com/?q=90+Feet+Road,+Vijay+Nagar,+Hanuman+Nagar,+opposite+NBCC+Tower,+SBI+Officers+Colony,+Kankarbagh,+Patna,+Bihar+800026"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] uppercase font-bold text-primary-pink hover:text-pink-600 transition-colors tracking-wider inline-flex items-center gap-1 mt-1 font-sans"
                  >
                    View Directions
                  </a>
                </div>
              </div>

              {/* Call Or WhatsApp */}
              <div className="bg-white/75 dark:bg-dark-card/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 text-indigo-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 block">
                  <h4 className="font-display font-bold text-xs text-deep-navy dark:text-slate-100 tracking-wider uppercase font-sans">Call Or WhatsApp</h4>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold tracking-tight">
                    +91 91231 53369
                  </p>
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 font-sans font-medium">
                    Open daily 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              {/* Email Support */}
              <div className="bg-white/75 dark:bg-dark-card/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 text-purple-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 block">
                  <h4 className="font-display font-bold text-xs text-deep-navy dark:text-slate-100 tracking-wider uppercase font-sans">Email Support</h4>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold tracking-tight">
                    thepinklaundry@gmail.com
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                    Expect reply in 3 hours
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/75 dark:bg-dark-card/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 text-orange-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 block">
                  <h4 className="font-display font-bold text-xs text-deep-navy dark:text-slate-100 tracking-wider uppercase font-sans">Business Hours</h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    Monday – Sunday: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-[10px] text-primary-pink font-sans font-semibold">
                    Timely Pickup & Delivery
                  </p>
                </div>
              </div>

            </div>

            {/* Map & Delivery Zones Wrapper with absolute controls */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/5 h-64 sm:h-72 shadow-lg group bg-slate-100 dark:bg-[#070d14] flex flex-col justify-end transition-all duration-300">
              
              {/* Premium Glassmorphism Overlay (Our Brand & Dynamic Status) */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md shadow-[0_8px_32px_rgba(15,23,42,0.08)] border border-slate-100 dark:border-white/5 px-3 py-1.5 rounded-xl flex items-center gap-2.5 transition-all duration-300 pointer-events-none">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-display font-black text-[9px] tracking-widest uppercase text-deep-navy dark:text-slate-100">
                    {mapMode === "location" ? "Live Studio Hub" : "Delivery Coverage"}
                  </span>
                </div>
              </div>

              {/* Mode Toggle Button Pill */}
              <div className="absolute top-4 right-4 z-20 flex bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-md">
                <button
                  type="button"
                  onClick={() => setMapMode("location")}
                  className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    mapMode === "location"
                      ? "bg-deep-navy dark:bg-slate-800 text-white shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-deep-navy dark:hover:text-slate-200"
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  Our Location
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode("zones")}
                  className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    mapMode === "zones"
                      ? "bg-deep-navy dark:bg-slate-800 text-white shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-deep-navy dark:hover:text-slate-200"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-primary-pink" />
                  Delivery Zones
                </button>
              </div>

              {/* AnimatePresence for Map Contents */}
              <AnimatePresence mode="wait">
                {mapMode === "location" ? (
                  <motion.div
                    key="google-map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    <iframe
                      title="The Pink Laundry & Dry Cleaning Patna Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.177093206259!2d85.1610419!3d25.6006198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29f072ec86ec7%3A0xf6031f8b1d9d15ad!2sNBCC%20Tower%2C%20Kankarbagh%2C%20Patna%2C%2520Bihar%2520800026!5e0!3m2!1sen!2sin!4v1716613300000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[20%] contrast-[110%] dark:invert-[90%] dark:hue-rotate-180 transition-transform duration-500 w-full h-full"
                    ></iframe>
                  </motion.div>
                ) : (
                  <motion.div
                    key="patna-zones-panel"
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex flex-col sm:grid sm:grid-cols-12 bg-slate-900 text-white font-sans text-left"
                  >
                    {/* Interactive Geographic Hub-centered Vector SVG Map (Left side: 7/12 cols) */}
                    <div className="sm:col-span-7 relative h-36 sm:h-full bg-slate-950/80 dark:bg-[#03070c] flex items-center justify-center p-3 overflow-hidden select-none">
                      
                      {/* Grid overlay pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                      <svg className="w-full h-full min-h-[130px]" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Concentric distance wave rings */}
                        <circle cx="50" cy="50" r="15" className="stroke-indigo-500/10 fill-none stroke-[0.4]" strokeDasharray="1.5 1" />
                        <circle cx="50" cy="50" r="30" className="stroke-indigo-500/10 fill-none stroke-[0.4]" strokeDasharray="1.5 1" />
                        <circle cx="50" cy="50" r="45" className="stroke-indigo-500/10 fill-none stroke-[0.4]" strokeDasharray="1.5 1" />

                        <text x="50" y="38" className="fill-slate-500/50 font-mono text-[2.5px] text-center font-bold" textAnchor="middle">2 KM Core</text>
                        <text x="50" y="22" className="fill-slate-500/50 font-mono text-[2.5px] text-center font-bold" textAnchor="middle">5 KM Ring</text>
                        <text x="50" y="7" className="fill-slate-500/50 font-mono text-[2.5px] text-center font-bold" textAnchor="middle">10 KM Extended</text>

                        {/* Dashed connector rays from central hub to all active pins */}
                        {patnaZones.map((z) => {
                          if (z.id === "patel-nagar") return null;
                          const isActive = z.id === activeZoneId;
                          return (
                            <line
                              key={`ray-${z.id}`}
                              x1="50"
                              y1="50"
                              x2={z.coords.x}
                              y2={z.coords.y}
                              className={`stroke-[0.5] transition-all duration-300 ${
                                isActive ? "stroke-primary-pink/50 stroke-[0.8] stroke-dash-none" : "stroke-slate-700/30 stroke-dash-2 stroke-dash-array-1"
                              }`}
                              strokeDasharray={isActive ? "none" : "1"}
                            />
                          );
                        })}

                        {/* Central Hub Core pulsing backing */}
                        <circle cx="50" cy="50" r="4.5" className="fill-primary-pink/15 animate-ping" />
                        <circle cx="50" cy="50" r="2.5" className="fill-primary-pink" />
                        
                        {/* Interactive Markers for all neighborhoods */}
                        {patnaZones.map((z) => {
                          const isActive = z.id === activeZoneId;
                          const isHub = z.id === "patel-nagar";
                          
                          return (
                            <g
                              key={`marker-${z.id}`}
                              className="cursor-pointer group/marker"
                              onClick={() => setActiveZoneId(z.id)}
                              onMouseEnter={() => setActiveZoneId(z.id)}
                            >
                              {/* Pulse effect */}
                              {isActive && (
                                <circle
                                  cx={z.coords.x}
                                  cy={z.coords.y}
                                  r={isHub ? "6" : "5"}
                                  className="fill-indigo-400/20 stroke-indigo-400/30 stroke-[0.3] animate-pulse"
                                />
                              )}

                              {/* Interactive Dot Pin */}
                              <circle
                                cx={z.coords.x}
                                cy={z.coords.y}
                                r={isActive ? (isHub ? "3.2" : "2.8") : (isHub ? "2.6" : "2.2")}
                                className={`transition-all duration-300 ${
                                  isActive
                                    ? "fill-[#F43F5E] stroke-white stroke-[0.4]"
                                    : "fill-slate-400 hover:fill-indigo-400 stroke-slate-900 stroke-[0.3]"
                                }`}
                              />
                            </g>
                          );
                        })}
                      </svg>

                      {/* Map labels and legend */}
                      <div className="absolute bottom-2 left-3 flex gap-4 select-none pointer-events-none">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-pink" />
                          <span className="text-[7.5px] font-mono text-slate-400 font-extrabold uppercase tracking-widest">Base Studio</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span className="text-[7.5px] font-mono text-slate-400 font-extrabold uppercase tracking-widest">Delivery Route</span>
                        </div>
                      </div>
                    </div>

                    {/* Zone Details Column (Right side: 5/12 cols) with customized controls */}
                    <div className="sm:col-span-5 h-[120px] sm:h-full bg-slate-950 dark:bg-[#04080e] p-3.5 sm:p-4 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-slate-800/80">
                      
                      {/* Active Zone Fast Pill Hub */}
                      <div className="space-y-1 sm:space-y-2 select-none">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                          <span className={`px-1.5 py-0.5 rounded border text-[7.5px] font-extrabold uppercase tracking-widest font-mono leading-none ${activeZone.badgeColor}`}>
                            {activeZone.type}
                          </span>
                          <span className="text-[7.5px] text-slate-400 font-medium font-sans flex items-center gap-1">
                            ⏱️ {activeZone.timing}
                          </span>
                        </div>

                        {/* Zone Selected Title */}
                        <div>
                          <h4 className="font-display font-bold text-xs sm:text-sm text-white tracking-tight leading-tight truncate">
                            {activeZone.name}
                          </h4>
                          <span className="text-[9px] text-[#A1A1AA] font-mono leading-none block font-semibold">
                            {activeZone.minOrder} Doorstep Pickup
                          </span>
                        </div>

                        {/* Localities covered breakdown */}
                        <div className="hidden sm:block">
                          <p className="text-[9.5px] text-slate-400 leading-normal line-clamp-2">
                            {activeZone.description}
                          </p>
                          <div className="mt-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                            <span className="text-[8px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">Locality list:</span>
                            <span className="text-[9px] text-indigo-200/90 leading-tight font-sans block line-clamp-2">
                              {activeZone.sectors}
                            </span>
                          </div>
                        </div>

                        {/* Mini cover details for small heights/mobile */}
                        <div className="block sm:hidden flex items-center justify-between text-[9px] text-slate-400 leading-tight">
                          <span className="truncate pr-2 max-w-[150px] font-sans">
                            {activeZone.sectors}
                          </span>
                          <span className="shrink-0 font-mono text-indigo-400 font-extrabold uppercase">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      {/* Call to action for selected zone */}
                      <div className="flex gap-1.5 pt-1.5 sm:pt-0">
                        {/* Grid link select to easily change active zones via tiny pills */}
                        <div className="hidden sm:flex gap-1 overflow-x-auto pb-1 scrollbar-none w-full border-t border-slate-800/40 pt-2.5">
                          {patnaZones.map((z) => (
                            <button
                              key={`tab-${z.id}`}
                              type="button"
                              onClick={() => setActiveZoneId(z.id)}
                              className={`px-1.5 py-1 rounded text-[8px] font-extrabold uppercase tracking-widest transition-all shrink-0 cursor-pointer ${
                                z.id === activeZoneId
                                  ? "bg-primary-pink/10 text-primary-pink font-black border border-primary-pink/20"
                                  : "text-slate-500 dark:text-slate-400 hover:text-slate-300 hover:bg-slate-900"
                              }`}
                            >
                              {z.id.split("-")[0]}
                            </button>
                          ))}
                        </div>

                        {/* Action WhatsApp Trigger */}
                        <button
                          type="button"
                          onClick={() => {
                            const customMsg = `Hi The Pink Laundry & Dry Cleaning! Is my area in Patna covered for delivery? I'm near *${activeZone.name}* (Localities: ${activeZone.sectors}). I'd like to book a doorstep pickup.`;
                            window.open(`https://wa.me/919123153369?text=${encodeURIComponent(customMsg)}`, "_blank");
                          }}
                          className="w-full py-1.5 sm:py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[9.5px] uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 hover:scale-[1.01] active:translate-y-0 shadow-md transition-all cursor-pointer select-none font-sans"
                        >
                          <WhatsAppIcon className="w-3 h-3" />
                          <span>Dispatch Courier</span>
                        </button>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Column 2: Interactive Contact Inquiry Form  */}
          <div className="lg:col-span-1 font-sans">
            <div className="bg-white dark:bg-dark-card rounded-3xl p-6 sm:p-10 border border-slate-200/70 dark:border-white/5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] relative overflow-hidden h-full flex flex-col justify-between transition-colors duration-300">
              
              {/* Premium Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary-pink to-indigo-500" />
              
              <AnimatePresence mode="wait">
                {!isInquirySubmitted ? (
                  <motion.div
                    key="inquiry-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="mb-6">
                      <h3 className="font-display font-black text-xl sm:text-2xl text-deep-navy dark:text-[#F8FAFC] tracking-tight mb-1.5">
                        Submit An Inquiry
                      </h3>
                      <p className="font-sans text-xs text-slate-400 dark:text-slate-400">
                        Have specific corporate volume demands or laundry contracts? Leave us a line and we'll connect shortly.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      {/* Name fields */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-deep-navy dark:text-slate-200 tracking-wider uppercase block">
                          Your Name <span className="text-primary-pink">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Priyanshu Ranjan"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-xs font-semibold placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Phone & Email (Responsive Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-deep-navy dark:text-slate-200 tracking-wider uppercase block flex items-center gap-1">
                            <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                            Phone Number <span className="text-primary-pink">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 91234 56789"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-xs font-semibold placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-deep-navy dark:text-slate-200 tracking-wider uppercase block">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. user@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-xs font-semibold placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Dropdown service selector */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-deep-navy dark:text-slate-200 tracking-wider uppercase block">
                          Core Service of Interest
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-xs font-semibold focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            {servicesList.map((srv) => (
                              <option key={srv} value={srv} className="dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                                {srv}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Message body */}
                      <div className="space-y-1 font-sans">
                        <label className="text-[10px] font-bold text-deep-navy dark:text-slate-200 tracking-wider uppercase block">
                          Explain your inquiry <span className="text-primary-pink">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements of wet wash, contracts, etc..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-xs font-semibold placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300 resize-none font-sans"
                        />
                      </div>

                      {/* Submit form line with luxury design */}
                      <button
                        type="submit"
                        className="w-full px-6 py-3.5 rounded-xl bg-deep-navy dark:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-gradient-to-r hover:from-primary-pink hover:to-indigo-500 hover:shadow-lg hover:shadow-primary-pink/15 hover:scale-[1.01] active:scale-99 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer self-start"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Inquiry
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="inquiry-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-10 flex flex-col justify-center items-center h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 text-emerald-500 border border-emerald-500/10 flex items-center justify-center mb-6 shadow-inner animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-black text-2xl text-deep-navy dark:text-[#F8FAFC] tracking-tight mb-2">
                      Inquiry Logged!
                    </h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8">
                      Thank you for contacting us. We have cached your dispatch request, <strong className="text-deep-navy dark:text-slate-200 font-semibold">{formData.name}</strong>. Our team will review your message immediately.
                    </p>

                    <div className="space-y-3.5 w-full max-w-xs mx-auto">
                      <button
                        onClick={triggerInquiryWhatsApp}
                        className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4.5 h-4.5 text-white animate-pulse" />
                        Send copy via WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setIsInquirySubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "Premium Wet Wash",
                            message: "",
                          });
                        }}
                        className="text-xs font-bold text-primary-pink hover:text-pink-600 tracking-wider uppercase transition-colors inline-block py-2 cursor-pointer"
                      >
                        Send another inquiry
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
