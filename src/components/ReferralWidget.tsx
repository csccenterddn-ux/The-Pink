import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Gift, 
  Copy, 
  Check, 
  Share2, 
  Users, 
  Award, 
  ArrowRight,
  TrendingUp,
  Heart,
  Smartphone,
  Sparkles,
  Facebook
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

const FacebookColorIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function ReferralWidget() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdCode, setCreatedCode] = useState("");
  const [previewPlatform, setPreviewPlatform] = useState<"whatsapp" | "facebook">("whatsapp");

  const generateReferral = (e: FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;

    setLoading(true);
    setTimeout(() => {
      // Create a deterministic premium code based on name/phone
      const cleanName = name.trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4) || "PINK";
      const suffix = phone.slice(-4);
      const code = `${cleanName}${suffix}`;
      setCreatedCode(code);
      setIsGenerated(true);
      setLoading(false);
    }, 700);
  };

  const getReferralUrl = () => {
    return `https://thepinklaundry.in/pickup?ref=${createdCode}`;
  };

  const handleCopy = () => {
    const url = getReferralUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `Hey! I highly recommend *The Pink Laundry & Dry Cleaning* for premium fabric care & dry cleaning in Patna. Get flat *10% OFF* on your first doorstep pickup with my referral link. Use this link to order:\n\n${getReferralUrl()}`;

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  return (
    <div className="w-full bg-white dark:bg-dark-surface rounded-3xl border border-slate-100 dark:border-white/5 p-6 sm:p-8 md:p-10 shadow-xl transition-colors duration-300 mt-12 relative overflow-hidden">
      {/* Decorative top pink highlight */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-pink via-rose-500 to-indigo-500" />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[250px] h-[250px] rounded-full bg-primary-pink/10 dark:bg-primary-pink/3 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/3 blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Premium Referral Pitch */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-pink/10 border border-primary-pink/20 text-primary-pink text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Referral Program</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3.5xl text-deep-navy dark:text-[#F8FAFC] tracking-tight leading-none">
            Share the sparkle.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-indigo-600 dark:from-primary-pink dark:to-indigo-400">
              Get rewarded together.
            </span>
          </h3>

          <p className="font-sans text-muted-gray dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Give your friends flat <strong className="text-secondary-cyan dark:text-teal-400 font-bold">10% OFF</strong> on their first state-of-the-art fabric wash or dry clean pickup in Patna, and earn <strong className="text-primary-pink font-bold">₹50 cash discount credits</strong> directly in your wallet on their completion!
          </p>

          {/* Simple step pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            
            {/* Step 1 */}
            <div className="flex sm:flex-col gap-3.5 sm:gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-white/5 flex items-center justify-center font-mono font-extrabold text-[#0EA5E9] text-base shadow-sm shrink-0">
                1
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs text-deep-navy dark:text-slate-200 uppercase tracking-wider">
                  Invite Friends
                </h4>
                <p className="text-[11px] text-muted-gray dark:text-slate-400 mt-0.5">
                  Generate and share your unique referral link easily.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex sm:flex-col gap-3.5 sm:gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-white/5 flex items-center justify-center font-mono font-extrabold text-primary-pink text-base shadow-sm shrink-0">
                2
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs text-deep-navy dark:text-slate-200 uppercase tracking-wider">
                  They Order First
                </h4>
                <p className="text-[11px] text-muted-gray dark:text-slate-400 mt-0.5">
                  They get flat 10% off their ultra-hygienic Patna order.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex sm:flex-col gap-3.5 sm:gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-white/5 flex items-center justify-center font-mono font-extrabold text-[#22C55E] text-base shadow-sm shrink-0">
                3
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs text-deep-navy dark:text-slate-200 uppercase tracking-wider">
                  You Get Wallet cash
                </h4>
                <p className="text-[11px] text-muted-gray dark:text-slate-400 mt-0.5">
                  ₹50 is credited instantly to reduce your next laundry bill.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Interaction Card */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {!isGenerated ? (
              <motion.form
                key="referral-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={generateReferral}
                className="bg-slate-50 dark:bg-dark-card border border-slate-150/60 dark:border-white/5 rounded-2xl p-6 md:p-7 shadow-lg space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-slate-200/60 dark:border-white/5 pb-3">
                  <Award className="w-5 h-5 text-primary-pink" />
                  <span className="font-display font-extrabold text-xs text-deep-navy dark:text-slate-200 uppercase tracking-wider">
                    Generate Your Coupon
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-gray dark:text-slate-400 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface text-deep-navy dark:text-slate-100 text-sm focus:outline-none focus:border-primary-pink dark:focus:border-primary-pink transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-gray dark:text-slate-400 mb-1.5">
                      Your Phone Number (For Rewards Wallet)
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface text-deep-navy dark:text-slate-100 text-sm focus:outline-none focus:border-primary-pink dark:focus:border-primary-pink transition font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || phone.length < 10 || !name.trim()}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    phone.length === 10 && name.trim() && !loading
                      ? "bg-gradient-to-r from-primary-pink to-rose-500 hover:from-rose-500 hover:to-primary-pink text-white shadow-primary-pink/20 hover:scale-[1.01] cursor-pointer"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-300 border-t-primary-pink rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get My Link</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-muted-gray dark:text-slate-450 leading-normal">
                  No login required. We use your mobile number as your digital wallet identity.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="referral-reward"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white border border-indigo-500/30 rounded-2xl p-6 shadow-xl space-y-5 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Visual ticket punched decorative holes, perfectly aligned with coupon bottom border */}
                <div className="absolute top-[101px] left-0 w-4 h-8 bg-white dark:bg-dark-surface rounded-r-full border-r border-[#334155]/60 z-10" />
                <div className="absolute top-[101px] right-0 w-4 h-8 bg-white dark:bg-dark-surface rounded-l-full border-l border-[#334155]/60 z-10" />

                <div className="border-b border-indigo-500/20 pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#0EA5E9] font-black">
                      Unique Referral code
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase">
                      <TrendingUp className="w-3 h-3" /> Active
                    </span>
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-white/95 tracking-wider bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-500/20 text-center uppercase select-all">
                    {createdCode}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Your Personalized Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={getReferralUrl()}
                      className="flex-1 bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition focus:outline-none rounded-xl px-3 py-2 text-xs font-mono text-slate-300 truncate"
                    />
                    <button
                      onClick={handleCopy}
                      className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition flex items-center justify-center shrink-0 cursor-pointer"
                      title="Copy Links"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-300" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Media Link Unfurl Preview Simulator */}
                <div className="space-y-2 border-t border-indigo-500/20 pt-4">
                  <div className="flex justify-between items-center bg-slate-950/40 p-1 rounded-lg border border-indigo-500/10">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-2">
                      Live Share Preview
                    </span>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setPreviewPlatform("whatsapp")}
                        className={`px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                          previewPlatform === "whatsapp" 
                            ? "bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30" 
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewPlatform("facebook")}
                        className={`px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                          previewPlatform === "facebook" 
                            ? "bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/30" 
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Facebook
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {previewPlatform === "whatsapp" ? (
                      <motion.div
                        key="whatsapp-preview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#0b141a] border border-[#222e35] rounded-xl p-3 text-[11px] font-sans text-stone-200 select-none text-left leading-normal space-y-2 shadow-inner"
                      >
                        <div className="bg-[#005c4b] text-[#e9edef] rounded-lg p-2 rounded-tl-none relative break-words">
                          <div className="absolute top-0 left-[-6px] w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-[#005c4b]" />
                          
                          <p className="mb-2 text-xs text-[#e9edef] leading-normal font-sans whitespace-pre-wrap">
                            Hey! I highly recommend *The Pink Laundry & Dry Cleaning* for premium fabric care & dry cleaning in Patna. Get flat *10% OFF* on your first doorstep pickup with my referral link. Use this link to order: <span className="text-[#53bdeb] underline cursor-pointer">{getReferralUrl()}</span>
                          </p>

                          <div className="bg-[#202c33] rounded-lg border-l-4 border-[#00a884] overflow-hidden flex flex-row items-stretch select-none">
                            <div className="p-2 flex-1 space-y-0.5 text-left min-w-0">
                              <div className="text-[#00a884] text-[10px] uppercase tracking-wider font-extrabold truncate">
                                The Pink Laundry & Dry Cleaning
                              </div>
                              <div className="text-[#e9edef] text-xs font-bold truncate">
                                Get Flat 10% Off on Laundry
                              </div>
                              <div className="text-[#8696a0] text-[10px] leading-relaxed line-clamp-2">
                                {name || "Your friend"} has invited you to experience premium, state-of-the-art fabric wash & dry cleaning services in Patna with free doorstep pickup.
                              </div>
                              <div className="text-[#8696a0] text-[9px] font-mono pt-1">
                                thepinklaundry.in
                              </div>
                            </div>
                            
                            <div className="w-20 bg-gradient-to-tr from-primary-pink to-indigo-600 flex flex-col items-center justify-center shrink-0 border-l border-[#2e3b43] relative overflow-hidden">
                              <div className="absolute inset-0 bg-black/15" />
                              <span className="font-mono font-black text-lg text-white tracking-tighter relative z-10">10%</span>
                              <span className="font-sans font-extrabold text-[8px] text-white/90 uppercase tracking-widest relative z-10">OFF</span>
                            </div>
                          </div>
                          
                          <div className="text-[9px] text-[#8696a0]/80 text-right mt-1 select-none font-sans font-medium">
                            12:00 PM ✓✓
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="facebook-preview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#18191a] border border-[#2f3031] rounded-xl p-3.5 text-left text-stone-200 select-none leading-normal font-sans space-y-3 shadow-inner"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-pink to-indigo-500 font-extrabold text-white text-xs flex items-center justify-center shadow-md">
                            {(name ? name.trim().slice(0, 1).toUpperCase() : "P")}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-white/95 leading-tight hover:underline cursor-pointer">
                              {name || "Patna Resident"}
                            </div>
                            <div className="text-[10.5px] text-[#b0b3b8] leading-tight flex items-center gap-1.5 mt-0.5 font-medium">
                              <span>Just now</span>
                              <span>·</span>
                              <span className="text-[9px]" title="Shared with Public">🌐</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-[#e4e6eb] whitespace-pre-wrap leading-relaxed">
                          Looking for Patna's finest laundry? Book with The Pink Laundry & Dry Cleaning! Get flat 10% off with my referral link. Free doorstep pickup & world-class modern hygienic processing centers! 🧺🧼 <span className="text-[#4599ff] hover:underline cursor-pointer">{getReferralUrl()}</span>
                        </p>

                        <div className="bg-[#242526] rounded-xl border border-[#3e4042] overflow-hidden hover:bg-[#303031] cursor-pointer transition">
                          <div className="aspect-[1.91/1] w-full bg-gradient-to-br from-primary-pink/90 via-rose-500/90 to-indigo-600/90 relative overflow-hidden flex flex-col justify-between p-4 whitespace-normal select-none">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 rounded-full bg-indigo-500/30 blur-2xl pointer-events-none" />
                            
                            <div className="flex justify-between items-start z-10 w-full">
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 backdrop-blur-md text-white font-mono text-[8px] uppercase tracking-widest font-bold">
                                The Pink Laundry Patna
                              </span>
                              <Gift className="w-4 h-4 text-yellow-300 drop-shadow animate-bounce" />
                            </div>

                            <div className="z-10 text-left space-y-0.5">
                              <span className="text-[8px] font-extrabold text-white/70 uppercase tracking-widest block font-mono">Special Invite</span>
                              <h4 className="font-display font-black text-base sm:text-lg text-white leading-none tracking-tight drop-shadow-sm">
                                FLAT 10% DISCOUNT
                              </h4>
                              <p className="text-[9px] text-white/95 leading-snug tracking-wide">
                                State-of-the-Art Dry Cleaning & Laundry delivered to your doorstep.
                              </p>
                            </div>
                          </div>

                          <div className="p-3 bg-[#242526] border-t border-[#3e4042] text-left">
                            <div className="text-[#b0b3b8] text-[9px] uppercase tracking-wider font-semibold font-mono">
                              THEPINKLAUNDRY.IN
                            </div>
                            <div className="text-[#e4e6eb] text-xs font-semibold mt-0.5 hover:underline truncate">
                              Experience Premium Wardrobe Care - Flat 10% Off Your First Booking
                            </div>
                            <div className="text-[#b0b3b8] text-[10px] leading-relaxed mt-0.5 line-clamp-1">
                              Professional processing plants, skin-safe solvents, soft water conditioning, & real-time tracking in Patna.
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-3.5">
                  <button
                    onClick={handleWhatsAppShare}
                    className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl text-center text-xs font-bold transition flex items-center justify-center cursor-pointer shadow-md shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
                    Share WhatsApp
                  </button>

                  <button
                    onClick={() => {
                      setPhone("");
                      setName("");
                      setIsGenerated(false);
                    }}
                    className="flex-1 border border-slate-700 hover:bg-slate-800 text-slate-300 py-3 rounded-xl text-center text-xs font-bold transition flex items-center justify-center cursor-pointer"
                  >
                    Generate New
                  </button>
                </div>

                <div className="text-[10px] text-slate-450 text-center flex items-center justify-center gap-1">
                  <Heart className="w-3 h-3 text-primary-pink fill-current" />
                  <span>Empowering dry cleaning & laundry in Patna</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
