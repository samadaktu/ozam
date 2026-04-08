import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    Icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Intelligent agents that navigate complex workflows, make decisions, and execute tasks with human-level reasoning.",
    color: "#DBEAFE",
    iconColor: "#1E3A8A",
  },
  {
    Icon: Workflow,
    title: "Hyper-Automation",
    desc: "End-to-end process automation that connects your entire tech stack into a single, cohesive neural engine.",
    color: "#EDE9FE",
    iconColor: "#4C1D95",
  },
  {
    Icon: BarChart3,
    title: "AI Media Buying",
    desc: "Performance-first AI that manages millions in ad spend, optimizing for ROAS across Meta, Google, and TikTok.",
    color: "#DCFCE7",
    iconColor: "#14532D",
  },
  {
    Icon: Cpu,
    title: "Custom LLM Solutions",
    desc: "Fine-tuned models specifically trained on your proprietary data to automate specialized business logic.",
    color: "#FEF3C7",
    iconColor: "#92400E",
  },
];

export function Services() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
            >
              Enterprise Capabilities
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#111] leading-[1.05] tracking-tight"
            >
              AI systems that <br />
              <span className="text-gray-400">actually move the needle.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full border border-black/5"
          >
            <Sparkles className="w-4 h-4 text-[#F7803C]" />
            <span className="text-xs font-bold text-[#444] uppercase tracking-wider">Scroll for more</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col p-10 bg-[#F9FAFB] rounded-[40px] border border-transparent hover:border-black/5 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div 
                className="w-16 h-16 rounded-[24px] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:rotate-6"
                style={{ backgroundColor: service.color }}
              >
                <service.Icon className="w-8 h-8" style={{ color: service.iconColor }} strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-5 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#555] text-lg leading-relaxed font-medium mb-8 flex-1">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-[#F7803C] font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

