import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "OZMA transformed our entire back-office. We cut costs by 60% and scaled without hiring a single new operations manager. Their AI agents are truly autonomous.",
    name: "Jordan M.",
    role: "CEO at TechCorp",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    quote: "Their AI agents handle our pipeline better than any human team. Always accurate, always on. We've seen a 5x ROI in the first quarter alone.",
    name: "Priya K.",
    role: "COO at NovaBase",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    quote: "Implementation was seamless. We were live in two weeks and saw positive ROI in the very first month. The best investment we've made this year.",
    name: "Alex R.",
    role: "Founder at FluxHQ",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
          >
            Client Success
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#111] leading-tight"
          >
            Trusted by teams <br />
            <span className="text-gray-400">building the future.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col p-8 bg-white rounded-[32px] border border-black/5 hover:border-black/10 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F7803C] text-[#F7803C]" />
                ))}
              </div>
              <p className="text-[#333] text-lg leading-relaxed font-medium mb-10 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
                <div>
                  <p className="text-[#111] font-black text-sm tracking-tight">{t.name}</p>
                  <p className="text-[#888] text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

