import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden flex flex-col pt-0">
      {/* Premium Glassmorphic Header Skeleton */}
      <header className="w-full bg-white/60 backdrop-blur-md border-b border-slate-200/40 py-3.5 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 animate-pulse relative overflow-hidden flex items-center justify-center border border-slate-200/60">
              <div className="w-4 h-4 rounded bg-primary-pink/20 animate-pulse" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-24 h-2 bg-slate-150 rounded animate-pulse" />
            </div>
          </div>

          {/* Nav Items (Desktop only) */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="w-12 h-3 bg-slate-200 rounded animate-pulse" />
            <div className="w-16 h-3 bg-slate-200 rounded animate-pulse" />
            <div className="w-14 h-3 bg-slate-200 rounded animate-pulse" />
            <div className="w-20 h-3 bg-slate-200 rounded animate-pulse" />
            <div className="w-12 h-3 bg-slate-200 rounded animate-pulse" />
          </div>

          {/* CTA Header Button */}
          <div className="w-32 h-9 rounded-xl bg-slate-200 animate-pulse border border-slate-200/40" />
        </div>
      </header>

      {/* Main Skeleton Layout mimicking The Pink Laundry & Dry Cleaning Landing Page */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-12 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Premium Text Stack */}
        <div className="lg:col-span-7 space-y-8">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 min-w-[200px]">
            <Sparkles className="w-3.5 h-3.5 text-primary-pink animate-pulse" />
            <div className="w-24 h-2.5 bg-slate-200 rounded animate-pulse" />
          </div>

          {/* Huge Main Headline Skeletons */}
          <div className="space-y-4">
            <div className="w-full sm:w-[85%] h-12 bg-slate-200/80 rounded-2xl animate-pulse" />
            <div className="w-[90%] sm:w-[75%] h-12 bg-slate-200/80 rounded-2xl animate-pulse" />
            <div className="w-[60%] sm:w-[50%] h-12 bg-slate-200/80 rounded-2xl animate-pulse" />
          </div>

          {/* Subtitle Description */}
          <div className="space-y-3 pt-2">
            <div className="w-full h-3 bg-slate-250/70 rounded animate-pulse" />
            <div className="w-[95%] h-3 bg-slate-250/70 rounded animate-pulse" />
            <div className="w-[80%] h-3 bg-slate-250/70 rounded animate-pulse" />
          </div>

          {/* Buttons Stack */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <div className="w-full sm:w-44 h-12 rounded-xl bg-slate-200 animate-pulse border border-slate-200" />
            <div className="w-full sm:w-36 h-12 rounded-xl bg-slate-150 animate-pulse" />
          </div>

          {/* Trust Highlights */}
          <div className="flex items-center gap-6 pt-6 border-t border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-200 animate-pulse" />
              <div className="w-24 h-3 bg-slate-200 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-200 animate-pulse" />
              <div className="w-20 h-3 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Column: High-End Hero Media Block */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Subtle background glow mimicking premium pink style direction */}
          <div className="absolute top-[20%] left-[20%] w-[320px] h-[320px] rounded-full bg-primary-pink/10 blur-[120px] animate-pulse pointer-events-none" />
          
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] bg-white border border-slate-200/80 p-5 shadow-2xl shadow-slate-200/50 flex flex-col justify-between">
            {/* Top header indicator */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div className="w-16 h-3 bg-slate-150 rounded animate-pulse" />
              <div className="w-12 h-3 bg-slate-150 rounded animate-pulse" />
            </div>

            {/* Middle decorative fabric wave pattern skeleton */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 my-8">
              <div className="relative w-24 h-24 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center animate-pulse">
                <div className="absolute inset-2 rounded-full border border-primary-pink/15 animate-ping duration-1000" />
                <div className="w-12 h-12 rounded-full bg-primary-pink/5 flex items-center justify-center text-primary-pink">
                  <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
              </div>
              <div className="space-y-2 text-center w-full max-w-[200px]">
                <div className="w-full h-3 bg-slate-150 rounded animate-pulse mx-auto" />
                <div className="w-[80%] h-2.5 bg-slate-150 rounded animate-pulse mx-auto" />
              </div>
            </div>

            {/* Bottom mini-dashboard layout */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-24 h-3 bg-slate-200 rounded animate-pulse" />
                <div className="w-10 h-3 bg-primary-pink/20 rounded animate-pulse" />
              </div>
              <div className="w-full h-2 bg-slate-200/60 rounded animate-pulse" />
              <div className="w-[85%] h-2 bg-slate-200/60 rounded animate-pulse" />
            </div>
          </div>
        </div>

      </main>

      {/* Grid of cards as sub-section representation */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="bg-white/60 p-6 rounded-2xl border border-slate-150/50 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-slate-150 animate-pulse" />
            <div className="w-32 h-4 bg-slate-250 animate-pulse rounded" />
            <div className="space-y-2">
              <div className="w-full h-2 bg-slate-150/80 rounded animate-pulse" />
              <div className="w-[90%] h-2 bg-slate-150/80 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
