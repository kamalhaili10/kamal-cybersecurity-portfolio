import { UserRound } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";

export function AboutSection() {
  return (
    <GlassCard id="about">
      <SectionTitle title="About Me" icon={UserRound} />
      <p className="text-[14px] leading-[19px] text-white/78">
        Cybersecurity Technician with a strong passion for{" "}
        <span className="text-cyanova">Penetration Testing</span>,{" "}
        <span className="text-cyanova">Ethical Hacking</span>, and{" "}
        <span className="text-cyanova">Red Teaming</span>. Experienced in{" "}
        <span className="text-cyanova">vulnerability assessment</span>,{" "}
        <span className="text-cyanova">web application security testing</span>, and{" "}
        <span className="text-cyanova">cybersecurity analysis</span>. Possesses hands-on knowledge of{" "}
        <span className="text-cyanova">offensive security</span> methodologies and security best practices.
        Continuously developing technical skills through <span className="text-cyanova">certifications</span>,{" "}
        <span className="text-cyanova">practical labs</span>, and{" "}
        <span className="text-cyanova">real-world security projects</span>. Seeking opportunities to contribute
        to offensive security teams and help organizations <span className="text-cyanova">identify</span> and{" "}
        <span className="text-cyanova">remediate</span> security vulnerabilities.
      </p>
    </GlassCard>
  );
}
