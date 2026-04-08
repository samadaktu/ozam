import { motion } from "framer-motion";
import { Search, PenTool, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Project Discovery",
    desc: "We dive deep into your workflows to identify high-value automation opportunities.",
    icon: Search,
    color: "#DBEAFE",
    iconColor: "#1E3A8A",
  },
  {
    n: "02",
    title: "AI Strategy & Design",
    desc: "We architect bespoke AI systems and agents tailored to your unique business logic.",
    icon: PenTool,
    color: "#EDE9FE",
    iconColor: "#4C1D95",
  },
  {
    n: "03",
    title: "Seamless Integration",
    desc: "Rapid deployment into your existing CRM, ad platforms, and operations stack.",
    icon: Zap,
    color: "#DCFCE7",
    iconColor: "#14532D",
  },
  {
    n: "04",
    title: "Continuous Scaling",
    desc: "Ongoing monitoring and refinement to ensure your AI systems evolve with your business.",
    icon: TrendingUp,
    color: "#FEF3C7",
    iconColor: "#92400E",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent" />
        <div 
          className="w-full h-full"
          style={{ 
            backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)", 
            backgroundSize: "24px 24px" 
          }} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
          >
            The OZMA Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#111] mb-6 leading-tight"
          >
            From Discovery to <span className="text-[#F7803C]">AI Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A streamlined, expert-led journey designed to deploy high-performance 
            AI systems that scale your business operations around the clock.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#F9FAFB] rounded-[32px] p-8 transition-all duration-300 border border-transparent hover:border-black/5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-8 text-4xl font-black text-black/5 select-none transition-colors group-hover:text-[#F7803C]/10">
                {step.n}
              </div>

              {/* Icon Container */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative"
                style={{ backgroundColor: step.color }}
              >
                <step.icon size={26} style={{ color: step.iconColor }} strokeWidth={2.5} />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-white" />
              </div>

              <h3 className="text-xl font-black text-[#111] mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Connecting line (only on desktop and not for the last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-black/5 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-[#111] font-bold text-lg inline-flex items-center gap-2">
            Looking for a custom solution? 
            <span className="text-[#F7803C] hover:underline cursor-pointer">Let's talk →</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

