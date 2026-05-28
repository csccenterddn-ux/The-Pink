import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Phone, Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onScheduleClick: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({ onScheduleClick, isDarkMode, onThemeToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-slate-800/60 shadow-[0_4px_24px_rgba(15,23,42,0.04)] py-2 px-4 sm:px-6"
          : "bg-white/20 dark:bg-slate-950/20 backdrop-blur-xl border-b border-white/10 dark:border-white/5 py-3.5 px-4 sm:px-6"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center">
          {/* Logo - Modern Startup Aesthetic & Premium Monogram */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-deep-navy to-slate-900 dark:from-slate-800 dark:to-slate-950 p-[1px] shadow-lg shadow-deep-navy/10 group-hover:shadow-primary-pink/20 transition-all duration-300">
              <div className="w-full h-full rounded-[11px] bg-white dark:bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50 dark:group-hover:bg-slate-850 transition-all duration-300">
                {/* Custom Elegant Hanger + Flowing Fabric Wave + Monogram P SVG */}
                <svg
                  className="w-5.5 h-5.5 text-deep-navy dark:text-slate-200 group-hover:text-primary-pink transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Coat Hanger hook flowing from top-center */}
                  <path d="M12 6c0-1.8 1.5-2.5 2.5-1.5s-1.5 2.5-2.5 3" />
                  {/* Monogram P outer structure */}
                  <path d="M8 20V8a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H8" />
                  {/* Flowing silk/water wave layer flowing out from the center */}
                  <path d="M11 12c1.8 0 2.5 2 4.5 2s3-2 4.5-2" strokeWidth="1.3" className="text-primary-pink" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-deep-navy dark:text-slate-100 leading-none">
                The <span className="text-primary-pink">Pink</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.14em] font-extrabold text-primary-pink uppercase mt-1.5 leading-none">
                Laundry & Dry Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Balanced Spacing, Clean Typography & Elegant Hover */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-xs sm:text-sm tracking-wide font-semibold text-deep-navy/80 dark:text-slate-300/90 hover:text-primary-pink dark:hover:text-primary-pink hover:translate-y-[-1px] transition-all duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-pink rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Compact Premium CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Elegant luxury Sun/Moon switcher */}
            <button
              id="theme-toggle-desktop"
              onClick={onThemeToggle}
              className="w-10 h-10 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/85 text-slate-700 dark:text-slate-300 hover:text-primary-pink dark:hover:text-primary-pink transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm group relative overflow-hidden backdrop-blur-md"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun-desktop"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-center pointer-events-none"
                  >
                    <Sun className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-desktop"
                    initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-center pointer-events-none"
                  >
                    <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              id="header-phone-cta"
              href="tel:+919123153369"
              className="flex items-center gap-2 text-xs font-bold text-deep-navy/95 dark:text-slate-100 hover:text-[#3B82F6] dark:hover:text-blue-400 transition-colors duration-300 select-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] dark:bg-blue-500/10 flex items-center justify-center text-[#3B82F6] dark:text-blue-400 hover:bg-[#DBE9FE] dark:hover:bg-blue-500/20 hover:scale-105 active:scale-95 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-300">
                <Phone className="w-3.5 h-3.5 fill-blue-500/5 dark:fill-blue-400/5" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-200 transition-colors duration-300">+91 91231 53369</span>
            </a>
            <button
              id="header-pickup-cta"
              onClick={onScheduleClick}
              className="px-4 py-2 rounded-xl bg-deep-navy dark:bg-white dark:text-deep-navy text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-deep-navy/5 hover:bg-primary-pink dark:hover:bg-primary-pink dark:hover:text-white hover:shadow-primary-pink/15 hover:scale-[1.01] active:scale-98 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-glow-pink" />
              Schedule Pickup
            </button>
          </div>

          {/* Mobile elements including theme toggle & hamburger menu */}
          <div className="flex lg:hidden items-center gap-2">
            
            {/* Mobile Mode Light/Dark switch */}
            <button
              id="theme-toggle-mobile"
              onClick={onThemeToggle}
              className="w-9 h-9 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-primary-pink transition-all duration-300 flex items-center justify-center cursor-pointer relative overflow-hidden backdrop-blur-md shadow-sm"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-center pointer-events-none"
                  >
                    <Sun className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-center pointer-events-none"
                  >
                    <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              id="header-mobile-phone-cta"
              href="tel:+919123153369"
              className="w-9 h-9 rounded-xl bg-[#EEF4FF] dark:bg-blue-500/10 flex items-center justify-center text-[#3B82F6] dark:text-blue-400 hover:bg-[#DBE9FE] dark:hover:bg-blue-500/22 active:scale-95 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 fill-blue-500/5 dark:fill-blue-400/5" />
            </a>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center text-deep-navy dark:text-slate-200 cursor-pointer focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl border-b border-slate-200/50 dark:border-slate-800/80 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 relative">
              {/* Subtle background wash of pink for a premium startup vibe */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary-pink/5 blur-3xl pointer-events-none" />

              <div className="w-full max-w-sm flex flex-col gap-5 items-center relative z-10">
                {navItems.map((item, index) => {
                  const label = item.label === "Why Us" ? "Why The Pink Laundry" : item.label;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="group font-sans text-sm tracking-wider font-extrabold text-deep-navy/90 dark:text-slate-200 hover:text-primary-pink dark:hover:text-primary-pink py-1 transition-all duration-300 relative block w-full text-center"
                    >
                      <span className="relative z-10 transition-colors uppercase text-xs tracking-[0.12em]">
                        {label}
                      </span>
                      {/* Subtle elegant glowing hover line underneath */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-pink/80 rounded-full transition-all duration-300 group-hover:w-12 group-active:w-16 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                    </motion.a>
                  );
                })}

                {/* Highly refined modern divider line */}
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-slate-200/60 dark:via-slate-800 to-transparent my-3 shrink-0" />

                {/* Unified Mobile Action Container with Subtle Glassmorphism Feel */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="w-full max-w-[280px] bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-3.5 rounded-2xl flex flex-col gap-2.5 items-center shadow-[0_8px_32px_rgba(15,23,42,0.03)]"
                >
                  {/* Phone Details: Compact, perfect center alignment, soft premium shadow */}
                  <a
                    id="drawer-phone-cta"
                    href="tel:+919123153369"
                    className="w-full inline-flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:border-blue-400/30 dark:hover:border-blue-500/35 hover:shadow-md text-[#3B82F6] dark:text-blue-400 text-[10.5px] font-bold font-mono transition-all duration-200 active:scale-98"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-[#EEF4FF] dark:bg-blue-500/15 flex items-center justify-center text-[#3B82F6] dark:text-blue-400">
                      <Phone className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 font-semibold tracking-wide">+91 91231 53369</span>
                  </a>

                  {/* Active Premium CTA Button */}
                  <button
                    id="drawer-pickup-cta"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onScheduleClick();
                    }}
                    className="w-full py-2 px-4 rounded-xl bg-deep-navy dark:bg-white dark:text-deep-navy hover:bg-primary-pink dark:hover:bg-primary-pink dark:hover:text-white text-white text-[10px] font-extrabold tracking-widest uppercase shadow-[0_4px_12px_rgba(15,23,42,0.12)] hover:shadow-[0_4px_12px_rgba(244,63,94,0.2)] active:scale-97 transition-all duration-350 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-glow-pink animate-pulse" />
                    <span>Schedule Pickup</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
