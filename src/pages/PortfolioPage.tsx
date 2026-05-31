import { motion } from "framer-motion";
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { staggerContainer } from "../animations/variants";
import { AboutSection } from "../sections/AboutSection";
import { CertificationsSection } from "../sections/CertificationsSection";
import { CyberSkillsSection } from "../sections/CyberSkillsSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { MediaSection } from "../sections/MediaSection";
import { PersonalSkillsSection } from "../sections/PersonalSkillsSection";
import { QuotePanel } from "../sections/QuotePanel";
import { SpecializationsSection } from "../sections/SpecializationsSection";
import { ToolsSection } from "../sections/ToolsSection";

export default function PortfolioPage() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[1180px] gap-[10px] px-4 pb-[7px] sm:px-6 lg:px-[30px]"
        >
          <div className="grid gap-[10px] lg:h-[269px] lg:grid-cols-[1fr_1fr]">
            <AboutSection />
            <SpecializationsSection />
          </div>

          <div className="grid gap-[10px] lg:h-[238px] lg:grid-cols-[0.47fr_0.53fr]">
            <CyberSkillsSection />
            <ToolsSection />
          </div>

          <div className="grid gap-[10px] lg:h-[248px] lg:grid-cols-[0.29fr_0.26fr_0.45fr]">
            <EducationSection />
            <ExperienceSection />
            <CertificationsSection />
          </div>

          <div className="grid gap-[10px] lg:h-[166px] lg:grid-cols-[0.31fr_0.24fr_0.45fr]">
            <PersonalSkillsSection />
            <QuotePanel />
            <MediaSection />
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
