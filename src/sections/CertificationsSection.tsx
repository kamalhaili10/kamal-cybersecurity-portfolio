import { Award } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { certifications } from "../data/portfolio";

export function CertificationsSection() {
  return (
    <GlassCard id="certifications">
      <SectionTitle title="Certifications" icon={Award} tone="cyan" />
      <div className="relative">
        <ul className="space-y-1 text-[12px] leading-[17px] text-white/76">
          {certifications.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border border-cyanova shadow-glow" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Award className="absolute bottom-0 right-1 hidden text-cyanova/55 lg:block" size={82} strokeWidth={1.15} />
      </div>
    </GlassCard>
  );
}
