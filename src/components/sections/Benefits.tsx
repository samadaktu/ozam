import { motion } from "framer-motion";
import { Zap, TrendingUp, Infinity, Rocket } from "lucide-react";

const benefits = [
  {
    Icon: Zap,
    title: "80% Work Reduction",
    desc: "We eliminate the manual bottlenecks that slow down your growth, freeing your team for high-level strategy.",
  },
  {
    Icon: TrendingUp,
    title: "Exponential ROI",
    desc: "Our AI systems don't just save time—they act as profit centers that optimize performance in real time.",
  },
  {
    Icon: Infinity, // Use Lucide's Infinity icon (spelled as Infinity)
    title: "Infinite Scalability",
    desc: "Scale from 1,000 to 1,000,000 tasks instantly. Your AI workforce grows with you, without increasing headcount.",
  },
  {
    Icon: Rocket,
    title: "Rapid Deployment",
    desc: "Zero-friction integration. We go from audit to live AI deployment in weeks, not months.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
          >
            The OZMA Edge
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#111] mb-6 tracking-tight leading-tight"
          >
            Stop competing with human hours. <br />
            <span className="text-gray-400">Scale with infinite AI capacity.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white border border-black/5 rounded-[32px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#F7803C]/10 transition-colors">
                <b.Icon className="w-5 h-5 text-gray-400 group-hover:text-[#F7803C] transition-colors" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-[#111] mb-3 tracking-tight">{b.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed font-medium">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

