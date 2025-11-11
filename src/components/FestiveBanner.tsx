import { Sparkles } from "lucide-react";

export const FestiveBanner = () => {
  return (
    <div className="relative overflow-hidden bg-black py-3 w-full border-b border-primary/20">
      <div className="marquee-container flex">
        <div className="marquee-content flex items-center gap-8 animate-marquee whitespace-nowrap">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold text-primary">Smell Divine, Spend Less</span>
          <span className="text-base text-primary/60">-</span>
          <span className="text-base text-primary">Festive price</span>
          <span className="text-base text-primary/60">-</span>
          <span className="text-base text-primary">Any perfume you love, <span className="text-xl font-bold text-primary">Just 1000 rupees</span></span>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div className="marquee-content flex items-center gap-8 animate-marquee whitespace-nowrap" aria-hidden="true">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold text-primary">Smell Divine, Spend Less</span>
          <span className="text-base text-primary/60">-</span>
          <span className="text-base text-primary">Festive price</span>
          <span className="text-base text-primary/60">-</span>
          <span className="text-base text-primary">Any perfume you love, <span className="text-xl font-bold text-primary">Just 1000 rupees</span></span>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
};
