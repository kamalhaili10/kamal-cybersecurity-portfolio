import type { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  icon: LucideIcon;
  align?: "start" | "center";
  tone?: "white" | "cyan";
  hideIcon?: boolean;
};

export function SectionTitle({ title, icon: Icon, align = "start", tone = "white", hideIcon = false }: SectionTitleProps) {
  return (
    <div className={`mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      {!hideIcon && (
        <span className="grid h-7 w-7 shrink-0 place-items-center text-cyanova">
          <Icon size={25} strokeWidth={1.55} />
        </span>
      )}
      <h2
        className={`font-display text-[17px] font-semibold uppercase leading-none tracking-normal ${
          tone === "cyan" ? "text-cyanova" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
