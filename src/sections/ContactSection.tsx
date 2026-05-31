import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { SectionTitle } from "../components/SectionTitle";
import { NeonButton } from "../components/NeonButton";

const emptyForm = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:hailikamal97@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <GlassCard id="contact" className="overflow-visible">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr]">
        <div>
          <SectionTitle title="Contact" icon={Send} />
          <p className="max-w-xl text-base leading-7 text-white/72">
            Open to cybersecurity internships, freelance assessments, junior offensive security roles, and
            collaboration with teams that care about secure digital environments.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="mailto:hailikamal97@gmail.com"
              className="flex items-center gap-4 rounded-lg border border-cyanova/14 bg-void/45 p-4 text-white/78 transition-all duration-300 hover:border-cyanova/60 hover:text-cyanova hover:shadow-glow"
            >
              <Mail className="text-cyanova" size={24} strokeWidth={1.8} />
              <span>hailikamal97@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-cyanova/14 bg-void/45 p-4 text-white/78">
              <MapPin className="text-cyanova" size={24} strokeWidth={1.8} />
              <span>Morocco</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2">
            <span className="font-display text-sm font-semibold uppercase text-white/74">Name</span>
            <input
              required
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="min-h-12 rounded-lg border border-cyanova/16 bg-void/62 px-4 text-white outline-none transition-all duration-300 placeholder:text-white/32 focus:border-cyanova focus:shadow-glow"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-display text-sm font-semibold uppercase text-white/74">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              className="min-h-12 rounded-lg border border-cyanova/16 bg-void/62 px-4 text-white outline-none transition-all duration-300 placeholder:text-white/32 focus:border-cyanova focus:shadow-glow"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-display text-sm font-semibold uppercase text-white/74">Message</span>
            <textarea
              required
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="min-h-36 resize-y rounded-lg border border-cyanova/16 bg-void/62 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/32 focus:border-cyanova focus:shadow-glow"
              placeholder="Tell me about the security challenge."
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <NeonButton buttonType="submit" icon={<Send size={18} />} className="w-full sm:w-auto">
              Send Message
            </NeonButton>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-cyanova"
                aria-live="polite"
              >
                Email draft opened. Send it from your mail app.
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </GlassCard>
  );
}
