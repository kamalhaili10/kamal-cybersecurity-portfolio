import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Briefcase, Mail, MapPin } from "lucide-react";
import { assets } from "../assets";
import { slideInLeft } from "../animations/variants";
import { heroInfo } from "../data/portfolio";
import { NeonButton } from "../components/NeonButton";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const infoIcons = {
  mail: Mail,
  location: MapPin,
  briefcase: Briefcase
};

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hailikamal97@gmail.com";

export function Hero() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!visualRef.current || reducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(".hero-parallax", { opacity: 0.94 }, { opacity: 1, duration: 1.4, ease: "sine.out" });
    }, visualRef);

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      gsap.to(".hero-parallax", {
        x: x * 12,
        y: y * 8,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      context.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[650px] max-w-[1180px] items-start overflow-hidden px-4 pb-5 pt-[92px] sm:px-6 lg:h-[510px] lg:min-h-0 lg:grid-cols-[1fr_1fr] lg:px-[30px]"
    >
      <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="relative z-20">
        <p className="mb-3 font-display text-[17px] font-medium uppercase tracking-normal text-white/86">
          Hello, I&apos;m <span aria-hidden="true">👋</span>
        </p>
        <h1 className="font-hero text-7xl font-normal uppercase leading-[0.82] tracking-normal text-white sm:whitespace-nowrap sm:text-[7rem] lg:text-[7.5rem]">
          <span className="block bg-gradient-to-b from-cyanova via-cyanova to-[#057a86] bg-clip-text text-transparent sm:inline">
            Kamal
          </span>
          <span className="hidden sm:inline"> </span>
          <span className="block text-white drop-shadow-[0_0_24px_rgba(255,255,255,.16)] sm:inline">Haili</span>
        </h1>
        <p className="mt-2 font-display text-[25px] font-semibold uppercase leading-none tracking-normal text-cyanova">
          Cybersecurity Technician
        </p>
        <svg className="mt-3 h-8 w-40 text-cyanova" viewBox="0 0 220 42" fill="none" aria-hidden="true">
          <path
            d="M4 28C33 23 61 6 82 10C96 13 76 36 92 35C114 33 128 13 146 16C160 19 149 35 166 35C186 35 199 24 216 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-4 max-w-xl text-[17px] leading-8 text-white/82">
          I <span className="text-cyanova">protect</span> systems, detect threats,
          <br className="hidden sm:block" /> and build <span className="text-cyanova">secure</span> digital environments.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <NeonButton href={gmailComposeUrl} target="_blank" rel="noreferrer">
            Contact Me
          </NeonButton>
          <NeonButton to="skills" variant="ghost">
            View My Work
          </NeonButton>
        </div>

        <div id="contact" className="mt-5 grid gap-3 text-[13px] text-white/70 sm:grid-cols-3 lg:w-[570px]">
          {heroInfo.map((item) => {
            const Icon = infoIcons[item.icon as keyof typeof infoIcons];
            return (
              <span key={item.label} className="flex min-w-0 items-center gap-3">
                <Icon className="shrink-0 text-cyanova" size={18} strokeWidth={1.8} />
                <span className="truncate">{item.label}</span>
              </span>
            );
          })}
        </div>
      </motion.div>

      <div
        ref={visualRef}
        className="relative z-10 mt-5 min-h-[320px] lg:absolute lg:bottom-0 lg:right-0 lg:top-[68px] lg:mt-0 lg:w-[55%]"
      >
        <img
          src={assets.referenceHero}
          alt="Cyberpunk illustration of a cybersecurity specialist"
          className="hero-parallax absolute inset-0 h-full w-full object-cover object-center"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 11%, black 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 11%, black 100%)"
          }}
        />
      </div>
    </section>
  );
}
