import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { Target, Users, Zap, Globe, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const team = [
  { name: "Zeenath Fatimah", role: "CEO & Co-Founder", initial: "ZF", color: "#F7803C" },
  { name: "Ayesha Noor", role: "CTO & Co-Founder", initial: "AN", color: "#7C3AED" },
  { name: "Hira Siddiqui", role: "Head of AI Engineering", initial: "HS", color: "#3B82F6" },
  { name: "Ifra Nazim", role: "Head of Client Success", initial: "IN", color: "#14B8A6" },
  { name: "Fatima Arif", role: "Lead Automation Architect", initial: "FA", color: "#EC4899" },
  { name: "Maira Fatima", role: "AI Research Lead", initial: "MF", color: "#F59E0B" },
];

const values = [
  { Icon: Target, title: "Outcome-Driven", desc: "Every system we build is measured by business results — ROI, efficiency, and growth." },
  { Icon: Users, title: "Partner Mentality", desc: "We don't just deliver software. We embed as AI partners in your business for the long term." },
  { Icon: Zap, title: "Speed & Precision", desc: "We move fast without cutting corners. Most deployments go live within 2–4 weeks." },
  { Icon: Globe, title: "Global Scale", desc: "Our AI systems are built to operate at any scale, in any industry, anywhere in the world." },
];

export default function AboutPage() {
  useSEO({
    title: "About Us",
    description: "Learn about OZMA's mission to orchestrate the future of intelligent operations and our team of AI experts."
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
            The OZMA Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[80px] font-black text-[#111] leading-[0.95] tracking-[ -0.04em] mb-10 max-w-4xl mx-auto"
          >
            We build the AI <br />
            <span className="text-gray-400">that builds businesses.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#555] max-w-2xl mx-auto leading-relaxed font-medium mb-16"
          >
            OZMA was founded to bridge the gap between complex AI engineering and real business growth. We turn cutting-edge tech into scalable revenue engines.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Brands Scaled" },
              { value: "10M+", label: "Tasks Automated Yearly" },
              { value: "2–4 wks", label: "Live Deployment" },
              { value: "4.9/5", label: "Client Rating" },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-8 bg-gray-50 rounded-[32px] border border-black/5 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all"
              >
                <div className="text-3xl font-black text-[#111] mb-2">{s.value}</div>
                <div className="text-xs text-[#888] font-black uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4">The Mission</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8">
                Orchestrating the future of <span className="text-gray-400">intelligent operations.</span>
              </h2>
              <p className="text-[#555] text-lg leading-relaxed font-medium mb-8">
                The world's most successful companies don't compete with human hours — they leverage AI to do more with less. OZMA exists to make that future available today.
              </p>
              <div className="space-y-4">
                {["Autonomous AI Agents", "Hyper-Automation at Scale", "Media Buying AI"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7803C]" />
                    <span className="text-[#111] font-bold tracking-tight">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white rounded-[48px] border border-black/5 shadow-sm overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7803C]/5 blur-3xl rounded-full" />
              <div className="relative z-10 space-y-8">
                <div className="text-5xl font-black text-[#111] leading-none">$2M+</div>
                <p className="text-[#555] font-medium text-lg leading-relaxed">
                  Average yearly operational overhead saved for our enterprise partners through coordinated AI deployment.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[#F7803C] font-black tracking-widest text-xs uppercase"
                >
                  Join them <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#111] leading-tight flex flex-col sm:flex-row items-center justify-center gap-x-3"
            >
              The core principles <span className="text-gray-400">that drive us.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-gray-50 rounded-[40px] border border-transparent hover:border-black/5 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center mb-8 group-hover:bg-[#F7803C]/10 group-hover:border-[#F7803C]/20 transition-all">
                  <v.Icon className="w-6 h-6 text-gray-400 group-hover:text-[#F7803C] transition-colors" strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-black text-[#111] mb-5 tracking-tight">{v.title}</h3>
                <p className="text-[#555] text-lg leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-gray-50/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#F7803C] uppercase tracking-[0.2em] font-black mb-4"
            >
              The People
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#111] leading-tight"
            >
              Built by the <span className="text-gray-400">best in AI.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group p-10 bg-white rounded-[40px] border border-black/5 hover:border-black/10 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <div
                  className="w-20 h-20 rounded-[28px] mx-auto flex items-center justify-center text-white font-black text-3xl mb-8 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initial}
                </div>
                <p className="text-xl font-black text-[#111] tracking-tight">{member.name}</p>
                <p className="text-xs text-[#888] font-black uppercase tracking-[0.15em] mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-[48px] bg-[#111] py-24 px-8 md:px-16 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7803C] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8"
            >
              Build your AI <br />
              <span className="text-gray-400 text-3xl md:text-5xl">workforce today.</span>
            </motion.h2>
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

