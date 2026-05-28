import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  MapPin,
  Smartphone,
  User,
  Check,
  Sparkles,
  Truck,
  PackageCheck
} from "lucide-react";
import deliveryImage from "../assets/images/laundry_pickup_executive_1779715670965.png";

const WhatsAppIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PickupExperience() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Premium Wet Wash",
    pickupDate: "",
    pickupTime: "10:00 AM - 01:00 PM",
    address: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    "Premium Wet Wash",
    "Express Dry Cleaning",
    "Steam Ironing Only",
    "Premium Fabric Conditioning",
    "Premium Bundle Contract",
  ];

  const timeSlots = [
    "07:00 AM - 10:00 AM (Early Rush)",
    "10:00 AM - 01:00 PM (Morning)",
    "01:00 PM - 04:00 PM (Afternoon)",
    "04:00 PM - 07:00 PM (Evening)",
    "07:00 PM - 10:00 PM (Late Collection)",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.pickupDate || !formData.address) {
      alert("Please fill in all the required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleTriggerWhatsApp = () => {
    const wMessage = `Hi The Pink Laundry & Dry Cleaning! I've booked a doorstep laundry pickup via your website Form:\n\n👤 *Name*: ${formData.fullName}\n📞 *Phone*: ${formData.phone}\n🧺 *Service*: ${formData.serviceType}\n📅 *Date*: ${formData.pickupDate}\n🕒 *Time Slot*: ${formData.pickupTime}\n📍 *Address*: ${formData.address}${formData.notes ? `\n📝 *Notes*: ${formData.notes}` : ""}\n\nPlease dispatch a courier for confirmation!`;
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(wMessage)}`, "_blank");
  };

  return (
    <section id="pickup-experience" className="py-24 bg-white dark:bg-dark-surface relative overflow-hidden transition-colors duration-300">
      {/* Dynamic background lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary-pink/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual column showing status flow/illustrations and image (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <span className="font-mono text-xs font-extrabold tracking-wider text-primary-pink uppercase mb-3 block">
              Instant Collection
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
              Laundry Pickup <br />
              <span className="text-primary-pink">In Minutes</span>
            </h2>
            <p className="font-sans text-muted-gray dark:text-slate-300 text-base leading-relaxed mb-8">
              Book pickup easily and get professionally cleaned clothes delivered back to your doorstep. Our localized routing engines allocate Patna's nearest logistics coordinator instantly.
            </p>
 
            {/* Premium Delivery workflow visual diagram */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 mb-8 aspect-[16/10]">
              <img
                src={deliveryImage}
                alt="The Pink Laundry & Dry Cleaning Premium Delivery Courier"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 via-deep-navy/10 to-transparent" />
              
              {/* Dynamic app status popup card floated on top */}
              <div className="absolute bottom-4 left-4 right-4 glassmorphism-dark border border-white/10 rounded-2xl p-4 flex items-center justify-between text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-pink flex items-center justify-center text-white shrink-0">
                    <Truck className="w-5.5 h-5.5 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight font-display">Laundry Pickup Executive</h4>
                    <p className="text-[10px] text-slate-300 mt-0.5">Pickup Available Across Patna</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase font-bold tracking-widest leading-none">
                  Online
                </span>
              </div>
            </div>
 
            {/* Quick interactive bullet points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/25 text-primary-pink flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-navy dark:text-slate-100 leading-snug font-display">GPS-Tracked Couriers</h4>
                  <p className="text-xs text-muted-gray dark:text-slate-400">Direct geo-fencing for real time Patna dispatches.</p>
                </div>
              </div>
 
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/25 text-primary-pink flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-navy dark:text-slate-100 leading-snug font-display">Dirtproof Hanger Boxes</h4>
                  <p className="text-xs text-muted-gray dark:text-slate-400">Dustproof packaging wraps protect linen crispness.</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Core Interactive Appointment Form column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div id="booking-card" className="bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-white/5 shadow-xl rounded-3xl p-6 sm:p-10 relative overflow-hidden transition-colors duration-300">
              
              {/* Card top banner */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary-pink via-indigo-400 to-emerald-400" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h3 className="font-display font-black text-2xl text-deep-navy dark:text-[#F8FAFC] mb-1 flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-primary-pink" />
                        Schedule Your Pickup
                      </h3>
                      <p className="text-xs text-muted-gray dark:text-slate-400 font-sans">
                        Provide your details below to dispatch Patna's professional doorstep laundry couriers.
                      </p>
                    </div>
 
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      
                      {/* Name & Phone details (Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-muted-gray dark:text-slate-400" />
                            Full Name <span className="text-primary-pink">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="e.g. Priyanshu Ranjan"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                          />
                        </div>
 
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block flex items-center gap-1">
                            <Smartphone className="w-3.5 h-3.5 text-muted-gray dark:text-slate-400" />
                            Phone Number <span className="text-primary-pink">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 9XXXX XXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
 
                      {/* Service Selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block">
                          Core Service Required <span className="text-primary-pink">*</span>
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                        >
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv} className="dark:bg-slate-900">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
 
                      {/* Date & Time slot selectors (Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-muted-gray dark:text-slate-400" />
                            Preferred Pickup Date <span className="text-primary-pink">*</span>
                          </label>
                          <input
                            type="date"
                            name="pickupDate"
                            required
                            value={formData.pickupDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                          />
                        </div>
 
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-muted-gray dark:text-slate-400" />
                            Preferred Time Slot <span className="text-primary-pink">*</span>
                          </label>
                          <select
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                          >
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot} className="dark:bg-slate-900">
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
 
                      {/* Address detail */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-muted-gray dark:text-slate-400" />
                          Patna Doorstep Address <span className="text-primary-pink">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          placeholder="Apartment, Street Name, Landmark, Patna"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors"
                        />
                      </div>
 
                      {/* Custom instructions */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-deep-navy dark:text-slate-200 block">
                          Specific instructions (e.g. delicate buttons, mild starch)
                        </label>
                        <textarea
                          name="notes"
                          rows={2}
                          value={formData.notes || ""}
                          onChange={handleInputChange}
                          placeholder="Any explicit fabric sorting guidelines..."
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-deep-navy dark:text-slate-100 text-sm font-medium focus:border-primary-pink focus:outline-none transition-colors resize-none mb-1"
                        />
                      </div>
 
                      {/* Submit form button */}
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-primary-pink hover:bg-pink-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-primary-pink/20 hover:scale-[1.01] active:scale-99 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        Book Doorstep Collection
                      </button>
 
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                      <PackageCheck className="w-8 h-8" />
                    </div>
 
                    <h3 className="font-display font-black text-2xl text-deep-navy dark:text-[#F8FAFC] mb-2">
                      Booking Initialized!
                    </h3>
                    <p className="font-sans text-xs text-muted-gray dark:text-slate-400 max-w-sm mx-auto mb-8">
                      Thank you, <strong className="text-deep-navy dark:text-slate-250">{formData.fullName}</strong>. Your pickup request has been processed inside our local database.
                    </p>
 
                    {/* Booking specifications sheet */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 text-left space-y-3 mb-8 max-w-sm mx-auto shadow-sm">
                      <div className="flex justify-between border-b dark:border-white/5 pb-2 text-xs">
                        <span className="text-muted-gray dark:text-slate-400 font-sans">Service:</span>
                        <strong className="text-deep-navy dark:text-slate-100 font-sans">{formData.serviceType}</strong>
                      </div>
                      <div className="flex justify-between border-b dark:border-white/5 pb-2 text-xs">
                        <span className="text-muted-gray dark:text-slate-400 font-sans">Date:</span>
                        <strong className="text-deep-navy dark:text-slate-150 font-mono">{formData.pickupDate}</strong>
                      </div>
                      <div className="flex justify-between border-b dark:border-white/5 pb-2 text-xs">
                        <span className="text-muted-gray dark:text-slate-400 font-sans">Time/Slot:</span>
                        <strong className="text-deep-navy dark:text-slate-150 font-mono text-right">{formData.pickupTime.split(" ")[0]} {formData.pickupTime.split(" ")[1]}</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-gray dark:text-slate-400 font-sans">Address:</span>
                        <strong className="text-deep-navy dark:text-slate-100 font-sans truncate max-w-[180px]" title={formData.address}>
                          {formData.address}
                        </strong>
                      </div>
                    </div>
 
                    {/* Trigger direct WhatsApp dispatcher */}
                    <div className="space-y-3.5 max-w-sm mx-auto">
                      <button
                        onClick={handleTriggerWhatsApp}
                        className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] active:scale-99 transition-all cursor-pointer flex justify-center items-center gap-2.5"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-white" />
                        Confirm & Dispatch on WhatsApp
                      </button>
 
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: "",
                            phone: "",
                            serviceType: "Premium Wet Wash",
                            pickupDate: "",
                            pickupTime: "10:00 AM - 01:00 PM",
                            address: "",
                            notes: "",
                          });
                        }}
                        className="text-xs text-primary-pink font-bold hover:underline cursor-pointer py-1.5"
                      >
                        Book another appointment
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
