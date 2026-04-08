import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need technical expertise to use OZMA?",
    a: "Not at all. We handle the entire engineering process—from audit to deployment. You focus on your business while we build and manage your AI systems.",
  },
  {
    q: "How long does it take to see positive ROI?",
    a: "Most of our clients see substantial operational savings and efficiency gains within the first 30–45 days of deployment.",
  },
  {
    q: "Is OZMA compatible with my current software?",
    a: "Yes. Our AI systems are designed to integrate seamlessly with your existing stack, including CRMs (Salesforce, HubSpot), ERPs, and marketing platforms (Ads Manager, TikTok).",
  },
  {
    q: "What makes OZMA different from typical 'low-code' tools?",
    a: "We build high-performance, custom-engineered AI agents and fine-tuned models tailored to your specific logic, offering a level of autonomy and complexity that standard tools can't reach.",
  },
];

function FaqItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#F7803C]' : 'text-[#111] group-hover:text-[#F7803C]'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#F7803C] border-[#F7803C] text-white rotate-0' : 'rotate-90 group-hover:rotate-0'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[#555] text-lg leading-relaxed font-medium max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
          >
            Direct Answers
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#111] leading-tight"
          >
            Common questions <br />
            <span className="text-gray-400">about scaling with AI.</span>
          </motion.h2>
        </div>

        <div className="border-t border-black/5">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

