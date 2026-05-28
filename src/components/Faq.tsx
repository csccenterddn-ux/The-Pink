import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { Faq } from "../types";

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

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: Faq[] = [
    {
      question: "Which areas in Patna do you serve for pickup and delivery?",
      answer: "We cover almost all major residential and corporate blocks in Patna, including Boring Road, Kankarbagh, Patliputra Colony, Bailey Road, North Patel Nagar, Kidwaipuri, Rajendra Nagar, Ashiana Nagar, and Anisabad. If you are unsure about your location, feel free to send us a quick WhatsApp message!"
    },
    {
      question: "Is there a minimum order requirement for free delivery?",
      answer: "Yes, doorstep pickup and express home delivery are completely free for all orders above ₹399. For orders below this amount, a nominal convenience fee of ₹49 is added to cover logistics."
    },
    {
      question: "How do you ensure fabric safety during the cleaning process?",
      answer: "We sort all garments individually by material type, density, and color. Delicate fabrics like silks and woolens are dry-cleaned using premium organic hydrocarbon solvents instead of aggressive perchloroethylene (perc). Additionally, we condition washing water to less than 10 PPM hardness levels to safeguard fiber integrity."
    },
    {
      question: "Do you offer superfast or same-day express service?",
      answer: "Absolutely! We offer an Express Care tier with a guaranteed same-day turnaround time for urgent corporate laundry, suits, blazers, and steam pressing needs. Select the express option when booking your appointment."
    },
    {
      question: "How does the doorstep pickup process work?",
      answer: "Once you schedule an appointment through our website or WhatsApp, a uniform-clad courier agent will arrive at your door within your selected time slot. They will secure your garments in an individual, sanitarily sealed transit bag. They'll also log your custom instructions directly into our digital system."
    },
    {
      question: "How can I pay for my laundry?",
      answer: "We support cash on delivery, UPI (GPay, PhonePe, Paytm), and major credit/debit cards. The exact digital invoice is sent to your WhatsApp number once your garments are processed and weighed at our studio."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSupportClick = () => {
    const message = "Hi The Pink Laundry & Dry Cleaning! I have a question not listed on your FAQ.";
    window.open(`https://wa.me/919123153369?text=${encodeURIComponent(message)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Decorative background glow bubble */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-primary-pink/5 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Header Block */}
        <motion.div variants={headerVariants} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-pink/10 border border-primary-pink/20 text-primary-pink text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-deep-navy dark:text-[#F8FAFC] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-muted-gray dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our premium operations, water-conditioning chemistry, and Patna service areas.
          </p>
        </motion.div>

        {/* FAQs Accordion Block */}
        <motion.div
          id="faq-accordions"
          className="space-y-4 mb-16"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-slate-50/80 dark:bg-dark-card border-primary-pink/25 dark:border-primary-pink/30 shadow-md shadow-primary-pink/5"
                    : "bg-white dark:bg-dark-card/40 border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-primary-pink" : "text-muted-gray dark:text-slate-450 group-hover:text-deep-navy dark:group-hover:text-white"
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base text-deep-navy dark:text-[#F8FAFC] transition-colors group-hover:text-primary-pink dark:group-hover:text-primary-pink">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-primary-pink text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-sans text-muted-gray dark:text-slate-350 leading-relaxed border-t border-slate-100/50 dark:border-white/5 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support helper CTA */}
        <motion.div variants={headerVariants} className="bg-slate-50 dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-white/5 text-center max-w-xl mx-auto">
          <h4 className="font-display font-bold text-base text-deep-navy dark:text-[#F8FAFC] mb-2">
            Still have an unanswered question?
          </h4>
          <p className="font-sans text-xs text-muted-gray dark:text-slate-400 leading-relaxed mb-6">
            Our consumer care desks are operating live. Ask us directly on WhatsApp for custom requirements or immediate updates.
          </p>
          <button
            onClick={handleSupportClick}
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
            Connect on WhatsApp
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
