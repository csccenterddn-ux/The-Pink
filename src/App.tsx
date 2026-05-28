import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSocialProof from "./components/TrustSocialProof";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import PickupExperience from "./components/PickupExperience";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/Faq";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SkeletonLoader from "./components/SkeletonLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") return true;
      if (savedTheme === "light") return false;
    }
    return false; // Default to Light Mode on first load/visit (no auto OS schema check)
  });

  // Sync dark mode class on DOM root for Tailwind v4 styles
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Smooth scroll handler to scroll to booking card and highlight it
  const scrollToBooking = () => {
    const element = document.getElementById("pickup-experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Highlight the booking card visually after scroll completes
      setTimeout(() => {
        const bookingCard = document.getElementById("booking-card");
        if (bookingCard) {
          bookingCard.classList.add("ring-4", "ring-primary-pink/30", "scale-[1.01]");
          setTimeout(() => {
            bookingCard.classList.remove("ring-4", "ring-primary-pink/30", "scale-[1.01]");
          }, 2000);
        }
      }, 800);
    }
  };

  useEffect(() => {
    // Dynamic page title validation
    document.title = "The Pink Laundry & Dry Cleaning | Premium Fabric Care Patna";

    // Simulate asset/component initialization with a premium-feeling fade transition delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <SkeletonLoader />
        </motion.div>
      ) : (
        <motion.div
          key="website-root"
          id="website-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 overflow-x-hidden selection:bg-primary-pink/30 selection:text-deep-navy transition-colors duration-300"
        >
          {/* Sticky glassmorphic navbar with premium dark mode support */}
          <Header 
            onScheduleClick={scrollToBooking} 
            isDarkMode={isDarkMode} 
            onThemeToggle={() => setIsDarkMode(!isDarkMode)} 
          />

          <main id="main-content" className="pt-20 md:pt-24 lg:pt-28">
            {/* Stunning Landing Hero with floating elements */}
            <Hero onScheduleClick={scrollToBooking} />

            {/* Stats and operational certifications */}
            <TrustSocialProof />

            {/* Timeline representation of brand operations */}
            <HowItWorks />

            {/* Modular services grid and interactive pricing estimator */}
            <Services />

            {/* Unique Selling Points bento grid */}
            <WhyChooseUs />

            {/* Target appointment collector and illustration columns */}
            <PickupExperience />

            {/* Verified testimonials from Patna customers */}
            <Testimonials />

            {/* Dynamic FAQ section covering key concerns */}
            <FaqSection />

            {/* Conversion-optimized large branding card */}
            <CTA onScheduleClick={scrollToBooking} />

            {/* Coordinates, hours sheet, form inquiry & Google Maps embedded */}
            <Contact />
          </main>

          {/* Structured brand footer catalog */}
          <Footer />

          {/* Pulsing floating WhatsApp bubble and mobile quick touch CTAs */}
          <FloatingWhatsApp onScheduleClick={scrollToBooking} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
