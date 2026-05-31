import {
  AlertTriangle,
  Atom,
  Box,
  Crosshair,
  Database,
  Eye,
  Github,
  KeyRound,
  Linkedin,
  Shield,
  Terminal,
  Waves,
  X,
  Zap
} from "lucide-react";

type GlyphProps = {
  icon: string;
  color?: string;
  size?: number;
};

export function ToolGlyph({ icon, color = "#00F5D4", size = 30 }: GlyphProps) {
  const props = { size, color, strokeWidth: 1.8 };

  switch (icon) {
    case "waves":
      return <Waves {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "atom":
      return <Atom {...props} />;
    case "scan":
      return <Crosshair {...props} />;
    case "alert":
      return <AlertTriangle {...props} />;
    case "database":
      return <Database {...props} />;
    case "key":
      return <KeyRound {...props} />;
    default:
      return <Shield {...props} />;
  }
}

export function MediaGlyph({ icon }: { icon: string }) {
  if (icon === "linkedin") {
    return <Linkedin size={22} strokeWidth={1.8} />;
  }

  if (icon === "github") {
    return <Github size={23} strokeWidth={1.8} />;
  }

  if (icon === "hackthebox") {
    return <Box size={23} strokeWidth={1.8} />;
  }

  if (icon === "x") {
    return <X size={22} strokeWidth={1.8} />;
  }

  const labels: Record<string, string> = {
    bugcrowd: "b",
    hackerone: "h1",
    intigriti: "i",
    tryhackme: "THM"
  };

  return (
    <span className="font-display text-lg font-bold leading-none text-current">
      {labels[icon] ?? icon.slice(0, 2).toUpperCase()}
    </span>
  );
}
