import { Cog, MessageCircle, Search, ShieldPlus, Sparkles, UsersRound } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { personalSkills } from "../data/portfolio";

const skillIcons = [Search, Cog, Sparkles, ShieldPlus, MessageCircle, UsersRound];

export function PersonalSkillsSection() {
  return (
    <GlassCard className="py-3">
      <SectionTitle title="Personal Skills" icon={UsersRound} tone="cyan" />
      <div className="grid grid-cols-2 gap-1.5">
        {personalSkills.map((skill, index) => {
          const Icon = skillIcons[index] ?? Sparkles;
          return (
            <div
              key={skill}
              className="flex min-h-[26px] items-center gap-1.5 rounded-md border border-white/10 bg-void/35 px-2 py-0.5 text-[10px] leading-3 text-white/76 transition-all duration-300 hover:border-cyanova/60 hover:text-cyanova hover:shadow-glow"
            >
              <Icon className="shrink-0 text-cyanova" size={15} strokeWidth={1.65} />
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
