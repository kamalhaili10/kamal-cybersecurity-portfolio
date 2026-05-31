import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import { assets } from "../assets";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { cyberSkills } from "../data/portfolio";

export function CyberSkillsSection() {
  const left = cyberSkills.slice(0, 3);
  const right = cyberSkills.slice(3);

  return (
    <GlassCard id="skills">
      <SectionTitle title="My Cyber Skills" icon={Radar} hideIcon />
      <div className="relative mx-auto grid h-[184px] max-w-[540px] grid-cols-[1fr_146px_1fr] items-center gap-2">
        <div className="z-10 grid gap-3">
          {left.map((skill, index) => (
            <SkillNode key={skill} label={skill} delay={index * 0.08} />
          ))}
        </div>

        <div className="relative z-0 mx-auto grid h-[166px] w-[146px] place-items-center">
          <img
            src={assets.referenceSkillChip}
            alt=""
            className="h-full w-full object-contain object-center mix-blend-screen"
          />
        </div>

        <div className="z-10 grid gap-3">
          {right.map((skill, index) => (
            <SkillNode key={skill} label={skill} delay={(index + 3) * 0.08} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function SkillNode({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="relative z-20 rounded-full border border-white/10 bg-void/95 px-3 py-2 text-center text-[12px] leading-4 text-white/85 shadow-[inset_0_0_16px_rgba(0,245,212,.04)] transition-colors duration-300 hover:border-cyanova/60 hover:text-cyanova hover:shadow-glow"
    >
      {label}
    </motion.div>
  );
}
