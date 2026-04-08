import { motion } from "framer-motion";

const stats = [
  { label: "Tasks Automated Yearly", value: "1.2M+" },
  { label: "Active Deployments", value: "250+" },
  { label: "Efficiency Gain", value: "82%" },
  { label: "Countries Served", value: "48" },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-black/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div 
                className="text-4xl md:text-6xl font-black text-[#111] leading-none mb-3 tracking-tighter"
                style={{
                  background: "linear-gradient(to bottom, #111, #444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-[#F7803C]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

