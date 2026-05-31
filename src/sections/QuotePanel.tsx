import { Quote } from "lucide-react";
import { GlassCard } from "../components/GlassCard";

export function QuotePanel() {
  return (
    <GlassCard className="flex items-center py-3">
      <div>
        <Quote className="mb-1 text-cyanova" size={26} fill="currentColor" strokeWidth={1.5} />
        <blockquote className="text-[13px] leading-[18px] text-white/84">
          Cybersecurity is not just about tools and techniques, it&apos;s about mindset, curiosity, and
          responsibility.
        </blockquote>
        <p className="mt-1 text-right font-display text-lg text-cyanova">Kamal Haili</p>
      </div>
    </GlassCard>
  );
}
