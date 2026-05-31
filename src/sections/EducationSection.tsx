import { GraduationCap } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { education } from "../data/portfolio";

export function EducationSection() {
  return (
    <GlassCard id="education">
      <SectionTitle title="Education" icon={GraduationCap} tone="cyan" />
      <div className="relative ml-2 space-y-7 border-l border-cyanova/55 pl-6">
        {education.map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border border-cyanova bg-void">
              <span className="h-1.5 w-1.5 rounded-full bg-cyanova shadow-glow" />
            </span>
            <h3 className="font-display text-[14px] font-semibold leading-5 text-white">{item.title}</h3>
            <p className="text-[13px] leading-5 text-white/82">{item.detail}</p>
            <p className="mt-0.5 text-[11px] uppercase leading-4 text-white/62">{item.institution}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
