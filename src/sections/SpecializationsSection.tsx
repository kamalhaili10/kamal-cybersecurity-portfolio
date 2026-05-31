import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Bot, Network, ShieldAlert, ShieldCheck, UserRoundCog } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { specializations } from "../data/portfolio";

const specializationIcons = [UserRoundCog, Network, ShieldAlert, Bot];

export function SpecializationsSection() {
  return (
    <GlassCard>
      <SectionTitle title="Specializations" icon={ShieldCheck} hideIcon />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {specializations.map((item, index) => {
          const Icon = specializationIcons[index] ?? ShieldCheck;
          return (
          <Tilt key={item.title} tiltMaxAngleX={7} tiltMaxAngleY={7} scale={1.02} className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex min-h-[176px] flex-col items-center justify-center rounded-lg border border-white/15 bg-void/35 px-3 py-4 text-center transition-all duration-300 hover:border-cyanova/70 hover:bg-cyanova/[0.045] hover:shadow-glow"
            >
              <Icon
                className="mb-5 text-cyanova drop-shadow-[0_0_12px_rgba(0,245,212,.35)] transition-transform duration-300 group-hover:scale-110"
                size={58}
                strokeWidth={1.45}
              />
              <h3 className="max-w-24 font-display text-[16px] font-medium leading-6 text-white">{item.title}</h3>
            </motion.div>
          </Tilt>
          );
        })}
      </div>
    </GlassCard>
  );
}
