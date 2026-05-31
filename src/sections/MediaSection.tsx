import { Send } from "lucide-react";
import { assets } from "../assets";
import { GlassCard } from "../components/GlassCard";
import { MediaGlyph } from "../components/IconGlyph";
import { SectionTitle } from "../components/SectionTitle";
import { mediaLinks } from "../data/portfolio";

export function MediaSection() {
  return (
    <GlassCard className="py-3">
      <SectionTitle title="My Media" icon={Send} tone="cyan" />
      <div className="grid gap-3 md:grid-cols-[1fr_126px]">
        <div className="-mt-1 grid grid-cols-4 gap-1.5">
          {mediaLinks.map((media) => (
            <a
              key={media.label}
              href={media.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[39px] flex-col items-center justify-center rounded-md border border-white/10 bg-void/35 p-1 text-center text-white/76 transition-all duration-300 hover:-translate-y-1 hover:border-cyanova/70 hover:text-cyanova hover:shadow-glow"
              aria-label={media.label}
            >
              <span className="mb-0.5 grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.035] text-cyanova transition-all duration-300 group-hover:border-cyanova/60 group-hover:bg-cyanova/10">
                <MediaGlyph icon={media.icon} />
              </span>
              <span className="text-[9px] leading-3">{media.label}</span>
            </a>
          ))}
        </div>
        <div className="relative hidden md:block">
          <img
            src={assets.referenceMediaShield}
            alt=""
            className="absolute -top-10 right-0 h-[126px] w-[126px] object-cover mix-blend-screen"
          />
        </div>
      </div>
    </GlassCard>
  );
}
