import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tilt?: boolean;
  glow?: boolean;
};

export function GlassCard({ children, className = "", id, tilt = false, glow = false }: GlassCardProps) {
  const card = (
    <motion.article
      id={id}
      whileHover={glow ? { y: -4, boxShadow: "0 0 34px rgba(0,245,212,.24)" } : undefined}
      className={`relative h-full overflow-hidden rounded-lg border border-white/15 bg-panel px-6 py-4 shadow-insetline backdrop-blur-xl transition-colors duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:bg-panel-sheen before:opacity-20 hover:border-cyanova/55 ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );

  if (!tilt) {
    return card;
  }

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#00F5D4"
      glarePosition="all"
      scale={1.01}
      transitionSpeed={900}
      className="h-full"
    >
      {card}
    </Tilt>
  );
}
