import { useEffect, useState } from "react";
import { Download, Menu, ShieldCheck, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks } from "../data/portfolio";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-cyanova/25 bg-void/86 shadow-[0_0_30px_rgba(0,245,212,.12)] backdrop-blur-2xl"
          : "border-cyanova/10 bg-void/70 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-[30px]">
        <ScrollLink
          to="home"
          smooth
          duration={650}
          offset={-88}
          className="group flex cursor-pointer items-center gap-3"
          aria-label="Kamal Haili home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/30 text-white transition-all duration-300 group-hover:border-cyanova group-hover:text-cyanova group-hover:shadow-glow">
            <ShieldCheck size={20} strokeWidth={1.6} />
          </span>
          <span className="font-display text-[22px] font-bold uppercase tracking-normal text-white">
            <span className="text-cyanova">Kamal</span> Haili
          </span>
        </ScrollLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.target}
              to={link.target}
              smooth
              spy
              duration={650}
              offset={-86}
              activeClass="text-cyanova after:scale-x-100"
              className="relative cursor-pointer font-display text-xs font-semibold uppercase tracking-normal text-white/84 transition-colors duration-300 after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-cyanova after:transition-transform hover:text-cyanova hover:drop-shadow-[0_0_12px_rgba(0,245,212,.75)]"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/Kamal-Haili-CV.pdf"
            download
            className="group inline-flex min-h-10 items-center gap-2 rounded-[18px] border border-cyanova/75 px-5 py-2 font-display text-xs font-semibold uppercase tracking-normal text-white transition-all duration-300 hover:bg-cyanova hover:text-void hover:shadow-glow-strong"
          >
            Download CV
            <Download size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-cyanova/30 text-cyanova lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-cyanova/15 bg-void/95 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-[1500px] gap-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.target}
                to={link.target}
                smooth
                duration={650}
                offset={-84}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-cyanova/10 px-4 py-3 font-display text-sm font-semibold uppercase text-white/86"
              >
                {link.label}
              </ScrollLink>
            ))}
            <a
              href="/Kamal-Haili-CV.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-cyanova bg-cyanova px-4 py-3 font-display text-sm font-bold uppercase text-void"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
