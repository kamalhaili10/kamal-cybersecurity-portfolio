import { Cpu, Lock, Scale, ShieldCheck } from "lucide-react";
import { footerValues } from "../data/portfolio";

const icons = [Lock, ShieldCheck, Cpu, Scale];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1180px] px-4 pb-3 sm:px-6 lg:px-[30px]">
      <div className="overflow-hidden rounded-lg border border-white/15 bg-panel backdrop-blur-xl">
        <div className="grid gap-px bg-white/15 md:grid-cols-4">
          {footerValues.map((value, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <div key={value} className="flex h-10 items-center justify-center gap-3 bg-[#07101b] px-3 text-center">
                <Icon className="text-cyanova" size={19} strokeWidth={1.6} />
                <span className="font-display text-[11px] font-semibold uppercase text-white/78">{value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 flex flex-col justify-between gap-2 text-[11px] text-white/45 sm:flex-row">
        <p>{"\u00A9"} 2026 Kamal Haili. All rights reserved.</p>
        <p>Built with passion for cybersecurity</p>
      </div>
    </footer>
  );
}
