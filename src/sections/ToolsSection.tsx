import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Wrench } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ToolGlyph } from "../components/IconGlyph";
import { SectionTitle } from "../components/SectionTitle";
import { tools } from "../data/portfolio";

export function ToolsSection() {
  return (
    <GlassCard>
      <SectionTitle title="Tools I Use" icon={Wrench} hideIcon />
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5">
        {tools.map((tool) => (
          <Tilt key={tool.name} tiltMaxAngleX={9} tiltMaxAngleY={9} scale={1.03}>
            <motion.div
              whileHover={{ rotate: 1.4, y: -4 }}
              className="group flex min-h-[78px] flex-col items-center justify-center text-center transition-all duration-300"
            >
              <span className="mb-1.5 grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-void/45 transition-all duration-300 group-hover:border-cyanova/55 group-hover:shadow-glow">
                <ToolGlyph icon={tool.icon} color={tool.color} size={27} />
              </span>
              <span className="text-[12px] leading-4 text-white/75">{tool.name}</span>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </GlassCard>
  );
}
