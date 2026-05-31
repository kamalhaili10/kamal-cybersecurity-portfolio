import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

type NeonButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  buttonType?: "button" | "submit";
};

const baseClasses =
  "group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg px-5 py-2.5 font-display text-sm font-bold uppercase tracking-normal outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyanova focus-visible:ring-offset-2 focus-visible:ring-offset-void";

const variants = {
  primary:
    "border border-cyanova/70 bg-cyanova text-void shadow-glow hover:bg-aqua hover:shadow-glow-strong",
  ghost:
    "border border-cyanova/25 bg-white/[0.025] text-white backdrop-blur-xl hover:border-cyanova hover:text-cyanova hover:shadow-glow"
};

export function NeonButton({
  children,
  to,
  href,
  download,
  target,
  rel,
  variant = "primary",
  className = "",
  icon,
  onClick,
  buttonType = "button"
}: NeonButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {icon ?? <ArrowRight size={18} />}
      </span>
    </>
  );
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <ScrollLink to={to} smooth duration={650} offset={-82} className={classes} role="button" tabIndex={0}>
        {content}
      </ScrollLink>
    );
  }

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={buttonType} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
