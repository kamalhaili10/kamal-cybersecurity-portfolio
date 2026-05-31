import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050816",
        panel: "rgba(6, 17, 31, 0.72)",
        cyanova: "#00F5D4",
        aqua: "#03D8FF",
        signal: "#F97316",
        graphite: "#7E8DA2"
      },
      fontFamily: {
        sans: ["Inter", "Rajdhani", "Segoe UI", "Arial", "sans-serif"],
        display: ["Rajdhani", "Inter", "Segoe UI", "Arial", "sans-serif"],
        hero: ["Bebas Neue", "Rajdhani", "Arial Narrow", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 245, 212, 0.26)",
        "glow-strong": "0 0 42px rgba(0, 245, 212, 0.42)",
        insetline: "inset 0 0 34px rgba(0, 245, 212, 0.08)"
      },
      backgroundImage: {
        "radial-cyan": "radial-gradient(circle at center, rgba(0,245,212,0.22), transparent 58%)",
        "panel-sheen":
          "linear-gradient(135deg, rgba(0,245,212,0.12), rgba(255,255,255,0.025) 42%, rgba(3,216,255,0.09))"
      },
      keyframes: {
        "grid-shift": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "88px 88px, -88px -88px" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.58", filter: "drop-shadow(0 0 10px rgba(0,245,212,.45))" },
          "50%": { opacity: "1", filter: "drop-shadow(0 0 26px rgba(0,245,212,.9))" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "grid-shift": "grid-shift 18s linear infinite",
        "glow-pulse": "glow-pulse 2.8s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 26s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
