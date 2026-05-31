import { BriefcaseBusiness } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { experience } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <GlassCard id="experience">
      <SectionTitle title="Work Experience" icon={BriefcaseBusiness} tone="cyan" />
      <div className="relative ml-2 border-l border-cyanova/55 pl-6">
        <span className="absolute -left-[8px] top-1 grid h-4 w-4 place-items-center rounded-full border border-cyanova bg-void">
          <span className="h-1.5 w-1.5 rounded-full bg-cyanova shadow-glow" />
        </span>
        <h3 className="font-display text-[14px] font-semibold leading-5 text-white">{experience.title}</h3>
        <p className="whitespace-nowrap font-display text-[14px] font-semibold leading-5 text-cyanova">
          {experience.dates}
        </p>
        <p className="whitespace-nowrap text-[11px] leading-4 text-white/65">{experience.location}</p>
        <ul className="mt-2 space-y-0.5 text-[10px] leading-[13px] text-white/74">
          {experience.responsibilities.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyanova shadow-glow" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
