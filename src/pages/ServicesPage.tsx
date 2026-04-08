import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { Bot, Workflow, TrendingUp, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const services = [
  {
    Icon: Bot,
    title: "AI Agents",
    tagline: "Autonomous intelligence that works for you 24/7",
    desc: "Our AI agents are fully autonomous programs that perceive context, reason through complex decisions, and take actions — without needing a human in the loop.",
    features: [
      "Custom-built for your exact workflow",
      "Integrates with CRM, email, and Slack",
      "Handles exceptions intelligently",
      "Fully auditable decision logs",
    ],
    color: "#F7803C",
    lightColor: "rgba(247, 128, 60, 0.05)",
  },
  {
    Icon: Workflow,
    title: "AI Automations",
    tagline: "Replace repetitive work at every level",
    desc: "We map your manual workflows end-to-end and replace them with intelligent automations that run faster, cheaper, and more accurately.",
    features: [
      "Full workflow audit and mapping",
      "Trigger-based and scheduled runs",
      "Multi-step conditional logic",
      "Real-time monitoring and alerts",
    ],
    color: "#7C3AED",
    lightColor: "rgba(124, 58, 237, 0.05)",
  },
  {
    Icon: TrendingUp,
    title: "AI Ads Optimization",
    tagline: "Let AI manage your ad spend for maximum ROI",
    desc: "Our AI ads system continuously analyzes your campaigns, tests audiences, and reallocates budget in real-time for peak performance.",
    features: [
      "Google, Meta, and TikTok support",
      "Automated A/B testing cycles",
      "Real-time budget reallocation",
      "Predictive ROAS modeling",
    ],
    color: "#3B82F6",
    lightColor: "rgba(59, 130, 246, 0.05)",
  },
  {
    Icon: Cpu,
    title: "Custom AI Solutions",
    tagline: "Bespoke AI engineered for your unique challenges",
    desc: "Some problems don't fit a template. Our team builds fully custom systems — from proprietary ML models to advanced data pipelines.",
    features: [
      "Custom model training/fine-tuning",
      "Proprietary data pipelines",
      "API-first architecture",
      "Ongoing model improvement",
    ],
    color: "#14B8A6",
    lightColor: "rgba(20, 184, 166, 0.05)",
  },
];

export default function ServicesPage() {
  useSEO({
    title: "Our Services",
    description: "Explore our AI solutions: Autonomous AI Agents, Workflow Automation, AI Ads Optimization, and Custom AI Engineering."
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111] flex flex-col">
      <Navbar onBookDemo={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-44 pb-32 relative overflow-hidden hero-gradient">
        <div className="hero-bottom-fade" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.25em] font-black mb-6"
          >
            The OZMA Stack
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[80px] font-black text-[#111] leading-[0.95] tracking-tight mb-8 max-w-4xl mx-auto"
          >
            AI systems engineered <br />
            <span className="text-gray-400">for business outcomes.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#555] max-w-2xl mx-auto leading-relaxed font-medium mb-12"
          >
            From autonomous agents to custom ML models — every OZMA service is built to replace human hours with machine precision.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-[48px] border border-black/5 bg-gray-50/50 p-8 md:p-14 overflow-hidden hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div 
                className="absolute top-0 right-0 w-96 h-96 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />

              <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 relative z-10">
                <div className="flex flex-col justify-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-black/5"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-lg font-bold text-[#F7803C] mb-6 tracking-tight">{service.tagline}</p>
                  <p className="text-[#555] text-xl leading-relaxed font-medium mb-10 max-w-2xl">
                    {service.desc}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="self-start inline-flex items-center gap-2 font-black tracking-widest text-xs uppercase text-[#F7803C] group-hover:gap-4 transition-all"
                  >
                    Discuss implementation <ArrowRight size={14} />
                  </button>
                </div>

                <div className="bg-white rounded-[40px] p-10 border border-black/5 shadow-sm group-hover:border-black/10 transition-all duration-500">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#888] mb-8">Technical Scope</p>
                  <ul className="space-y-5">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                        <span className="text-[#111] font-bold text-base leading-tight tracking-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-12 w-full h-14 rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
                    style={{ backgroundColor: service.color, color: "#fff" }}
                  >
                    Deploy This System
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8"
          >
            Not sure where to <br />
            <span className="text-gray-400">begin your AI journey?</span>
          </motion.h2>
          <p className="text-[#555] text-xl font-medium mb-12 max-w-2xl mx-auto">
            Book a free 30-minute discovery call and we'll map the right AI solution to your specific business challenges.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 h-16 rounded-full bg-[#111] text-white font-black text-lg hover:bg-[#F7803C] hover:shadow-[0_20px_40px_-10px_rgba(247,128,60,0.3)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            Book a Free AI Audit
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

