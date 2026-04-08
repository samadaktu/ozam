import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "E-commerce Giant Saved $2M+ in Operational Overheads",
    category: "Warehouse Automation",
    stats: "94% Accuracy",
    impact: "+40% Throughput",
  },
  {
    title: "Global SaaS Brand Automated 80% of Sales Development",
    category: "Lead Generation",
    stats: "5x Pipeline",
    impact: "0ms Latency",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
            >
              Real World Results
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#111] tracking-tight leading-tight"
            >
              Proven AI systems <br />
              <span className="text-gray-400">deployed at scale.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[40px] bg-white border border-black/5 hover:border-black/10 transition-all duration-300"
            >
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7803C] bg-orange-50 px-3 py-1 rounded-full">
                    {c.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#111] mb-10 tracking-tight leading-snug">
                  {c.title}
                </h3>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 rounded-3xl">
                    <p className="text-[10px] font-bold text-[#888] uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-xl font-black text-[#111]">{c.impact}</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-3xl">
                    <p className="text-[10px] font-bold text-[#888] uppercase tracking-wider mb-1">Metric</p>
                    <p className="text-xl font-black text-[#111]">{c.stats}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

