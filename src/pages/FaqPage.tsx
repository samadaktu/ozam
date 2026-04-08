import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const categories = [
  {
    category: "General",
    faqs: [
      { q: "What is OZMA?", a: "OZMA (Orchestrated Zenith of Machine Automation) is an AI automation agency that builds autonomous AI agents, intelligent workflow automations, and custom AI solutions for enterprise partners." },
      { q: "What types of businesses do you work with?", a: "We partner with e-commerce brands, SaaS companies, high-growth agencies, and enterprises with high-volume, repetitive workflows." },
      { q: "Do you work globally?", a: "Yes. We serve clients across 50+ countries. Our AI systems are built for global scale and comply with international data security standards." },
    ],
  },
  {
    category: "AI Agents",
    faqs: [
      { q: "What are AI agents?", a: "AI agents are autonomous programs that perceive context, reason through decisions, and take actions to achieve goals — without constant human oversight." },
      { q: "What tasks can AI agents handle?", a: "Customer support, lead qualification, email outreach, data research, internal reporting, and hundreds of other operationally heavy tasks." },
      { q: "Can AI agents replace human employees?", a: "AI agents replace competitive, rules-based work. This allows your human team to focus on high-value creative and strategic decision-making." },
    ],
  },
  {
    category: "Implementation",
    faqs: [
      { q: "How long does implementation take?", a: "Most systems go live within 2–4 weeks. Simple automations can be deployed in days, while custom enterprise solutions take 6–8 weeks." },
      { q: "Do you integrate with existing tools?", a: "Yes. We integrate with all major CRMs, ERPs, ad platforms, and any system with a REST API or webhook-compatible architecture." },
      { q: "What happens after launch?", a: "We provide 24/7 monitoring and optimization. Our retainer models ensure your AI systems evolve with your business." },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`group transition-all duration-500 rounded-[32px] border ${
        open ? "border-black/10 bg-gray-50/50 shadow-sm" : "border-black/5 bg-white hover:border-black/10 hover:shadow-sm"
      }`}
    >
      <button
        className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg md:text-xl font-black text-[#111] pr-8 tracking-tight leading-tight">{q}</span>
        <div className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-all duration-500 ${open ? "bg-[#F7803C] border-[#F7803C] rotate-180" : "bg-white"}`}>
          {open ? (
            <Minus className="w-4 h-4 text-white" strokeWidth={3} />
          ) : (
            <Plus className="w-4 h-4 text-gray-400 group-hover:text-[#111]" strokeWidth={3} />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-8 pb-8 text-[#555] text-lg leading-relaxed font-medium max-w-2xl">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  useSEO({
    title: "FAQ",
    description: "Common questions about AI scaling, autonomous agents, and how OZMA helps businesses automate operations."
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111] flex flex-col">
      <Navbar onBookDemo={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-44 pb-32 relative overflow-hidden hero-gradient">
        <div className="hero-bottom-fade" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.25em] font-black mb-6"
          >
            Knowledge Base
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[80px] font-black text-[#111] leading-[0.95] tracking-tight mb-8"
          >
            Got questions?<br />
            <span className="text-gray-400">We've got answers.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#555] max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Everything you need to know about OZMA, our autonomous systems, and how we orbit your business constraints.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 space-y-20">
          {categories.map((cat, ci) => (
            <motion.div 
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-black text-[#111] tracking-tight whitespace-nowrap">{cat.category}</h2>
                <div className="h-px flex-1 bg-black/5" />
              </div>
              <div className="space-y-4">
                {cat.faqs.map((faq, fi) => (
                  <FaqItem key={fi} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-[48px] bg-[#111] py-24 px-8 md:px-16 text-center shadow-2xl shadow-black/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7803C] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-8"
            >
              Still have questions about <br />
              <span className="text-gray-400">your specific use case?</span>
            </motion.h2>
            <p className="text-lg text-gray-400 font-medium mb-12 max-w-xl mx-auto">
              Skip the reading and jump on a call. We'll map a custom AI solution for your business in real-time.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 h-16 rounded-full bg-[#F7803C] text-white font-black text-lg hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(247,128,60,0.3)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Book Your AI Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

