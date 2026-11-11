import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PRICING_BREAKPOINTS = [
  { maxSubscribers: 1000, price: 0 },
  { maxSubscribers: 5000, price: 49 },
  { maxSubscribers: 10000, price: 99 },
  { maxSubscribers: 15000, price: 149 },
  { maxSubscribers: 25000, price: 199 },
  { maxSubscribers: 50000, price: 249 },
  { maxSubscribers: 100000, price: 399 },
  { maxSubscribers: 150000, price: 599 },
  { maxSubscribers: 200000, price: 799 },
];

const BREAKPOINT_SUB_VALUES = [
  ...Array.from({ length: 11 }, (_, i) => i * 100),
  5000, 10000, 15000, 25000, 50000, 100000, 150000, 200000,
  300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000,
];

const getPriceForSubscribers = (subs: number): { price: number | null; label: string } => {
  if (subs === 1000000) return { price: null, label: ">1M Subscribers" };

  const breakpoint = PRICING_BREAKPOINTS.find((tier) => subs <= tier.maxSubscribers);
  if (breakpoint) return { price: breakpoint.price, label: `${subs.toLocaleString()} subscribers` };

  const basePrice = 799;
  const extraSubs = subs - 200000;
  const extraUnits = Math.ceil(extraSubs / 100000);
  const price = basePrice + extraUnits * 400;
  return { price, label: `${subs.toLocaleString()} subscribers` };
};

export const PricingSlider: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const subscribers = BREAKPOINT_SUB_VALUES[sliderIndex];
  const { price, label } = getPriceForSubscribers(subscribers);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderIndex(Number(e.target.value));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
      {/* Left Card - Calculator */}
      <div className="flex-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between shadow-card">
        <h3 className="text-2xl font-display font-bold text-foreground mb-6">
          Calculate your pricing
        </h3>
        <p className="text-lg text-muted-foreground mb-8">{label}</p>
        <input
          type="range"
          min={0}
          max={BREAKPOINT_SUB_VALUES.length - 1}
          value={sliderIndex}
          onChange={handleSliderChange}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mb-8"
        />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Need a custom solution?</span>
          <a
            href="#contact"
            className="text-primary font-medium flex items-center hover:underline"
          >
            Contact us <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Card - Plan Details */}
      <div className="flex-1 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between shadow-elevated">
        <h3 className="text-xl font-semibold mb-4">Your plan</h3>
        <div className="mb-6">
          <p className="text-5xl md:text-6xl font-display font-bold">
            {price === 0 ? "Free" : price === null ? "Contact us" : `$${price}`}
            {price !== null && price !== 0 && (
              <span className="text-xl font-normal opacity-80"> / mo</span>
            )}
          </p>
        </div>
        <p className="text-primary-foreground/80 leading-relaxed mb-8">
          {price === 0
            ? "Our free plan allows up to 4,000 sends a month, enough to email your audience every week. All features are included."
            : price === null
            ? "Need custom support for >1M subscribers? Contact us for enterprise pricing."
            : "Enjoy unlimited email sending to your subscribers. All features are included with priority support."}
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="w-full group"
          asChild
        >
          <a href="#contact">
            {price === null ? "Contact us" : "Get started"}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};
