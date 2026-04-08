import { motion } from "framer-motion";

interface CtaProps {
  onBookDemo: () => void;
}

export function Cta({ onBookDemo }: CtaProps) {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-[48px] bg-[#111] py-24 px-8 md:px-16 text-center">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7803C] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F7803C] text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Ready for the next level?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Build your high-performance <br />
            <span className="text-gray-400 text-3xl md:text-5xl">AI workforce today.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium mb-12"
          >
            Join 50+ innovative companies already leveraging OZMA to scale their operations, 
            reduce overheads by up to 80%, and drive autonomous growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-10 h-16 rounded-full bg-[#F7803C] text-white font-black text-lg hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(247,128,60,0.3)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Book Your AI Audit
            </button>
            <button className="w-full sm:w-auto px-10 h-16 rounded-full border border-white/10 text-white font-black text-lg hover:bg-white/5 transition-all duration-300">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

