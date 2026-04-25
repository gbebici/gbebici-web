import { motion } from "framer-motion";
import { FileText, Music, Mic, RefreshCw, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Briefing",
    description:
      "We discuss your vision, references, and goals for the track.",
  },
  {
    icon: Music,
    title: "Production",
    description:
      "I build the instrumental foundation with arrangement and sound design.",
  },
  {
    icon: Mic,
    title: "Vocal Guidance",
    description: "Direction and support for recording your best vocal takes.",
  },
  {
    icon: RefreshCw,
    title: "Revisions",
    description: "Collaborative refinement until everything sounds perfect.",
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "Mixed, mastered, and release-ready files delivered to you.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Process & Pricing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold">
            HOW WE<br />
            <span className="text-muted-foreground">WORK</span>
          </h2>
        </motion.div>

        <div className="space-y-0 mb-12 md:mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="process-step flex gap-4 md:gap-6 pb-6 md:pb-8"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="pt-1 md:pt-2">
                <h3 className="font-display font-bold text-foreground mb-1 text-base md:text-lg">
                  <span className="font-mono text-primary text-xs md:text-sm mr-2">0{index + 1}</span>
                  {step.title}
                </h3>
                <p className="font-mono text-xs md:text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 md:p-12 bg-secondary/30"
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Full Music Production
          </p>
          <p className="font-sans text-6xl sm:text-7xl md:text-8xl font-bold text-foreground mb-2">
            <span className="text-primary tracking-tight">€ 970</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground mb-6 md:mb-8">Starting price · 3–4 weeks delivery</p>
          <a
            href="#contact"
            className="btn-premium inline-block"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
