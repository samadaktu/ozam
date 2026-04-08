import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Clock, CheckCircle2, Loader2, MessageSquare, ArrowRight } from "lucide-react";
import { sendContactEmail } from "@/lib/emailService";
import { DemoModal } from "@/components/DemoModal";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "info@ozma.in",
    sub: "We reply within 24 hours",
    href: "mailto:info@ozma.in",
    color: "#7C3AED",
  },
  {
    Icon: MessageSquare,
    label: "Book a Call",
    value: "Free Discovery Call",
    sub: "30 minutes, no commitment",
    href: "#",
    color: "#F7803C",
  },
  {
    Icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    sub: "Monday – Saturday",
    href: null,
    color: "#3B82F6",
  },
  {
    Icon: MapPin,
    label: "Global Reach",
    value: "India Headquarters",
    sub: "Serving clients globally",
    href: null,
    color: "#14B8A6",
  },
];

const topics = [
  "AI Agents",
  "AI Automations",
  "AI Ads Optimization",
  "Custom AI Solutions",
  "Partnership",
  "General Inquiry",
];

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", company: "", topic: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111] flex flex-col">
      <Navbar onBookDemo={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-44 pb-20 relative overflow-hidden hero-gradient">
        <div className="hero-bottom-fade" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.25em] font-black mb-6"
          >
            Connect With Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[80px] font-black text-[#111] leading-[0.95] tracking-tight mb-8 max-w-2xl mx-auto"
          >
            Let's talk <br />
            <span className="text-gray-400 text-3xl md:text-5xl">about your future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#555] max-w-xl mx-auto leading-relaxed font-medium"
          >
            Whether you're ready to automate or just exploring possibilities — we're here to engineer your next phase of growth.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-black/5 hover:bg-white hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: item.color }}
                >
                  <item.Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888] mb-1">{item.label}</p>
                <p className="text-lg font-black text-[#111] tracking-tight mb-1">{item.value}</p>
                <p className="text-sm font-medium text-[#888]">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-14 bg-gray-50 rounded-[48px] border border-black/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7803C] opacity-[0.03] blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-[#111] mb-2 tracking-tight">Direct Inquiry</h2>
                <p className="text-[#555] font-medium mb-12">Complete the form and our lead architect will review it within 24 hours.</p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black text-[#111] mb-4">Inquiry Received.</h3>
                      <p className="text-[#555] font-medium max-w-xs mx-auto text-lg leading-relaxed">
                        We're reviewing your request and will reach out to schedule a call shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#111] ml-4">Full Name</label>
                          <input
                            required
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jordan Miller"
                            className="w-full h-14 rounded-full px-8 bg-white border border-black/5 text-[#111] font-medium placeholder:text-gray-300 focus:outline-none focus:border-[#F7803C] focus:ring-4 focus:ring-[#F7803C]/5 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#111] ml-4">Work Email</label>
                          <input
                            required
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jordan@company.com"
                            className="w-full h-14 rounded-full px-8 bg-white border border-black/5 text-[#111] font-medium placeholder:text-gray-300 focus:outline-none focus:border-[#F7803C] focus:ring-4 focus:ring-[#F7803C]/5 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#111] ml-4">Company</label>
                          <input
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="TechCorp Inc."
                            className="w-full h-14 rounded-full px-8 bg-white border border-black/5 text-[#111] font-medium placeholder:text-gray-300 focus:outline-none focus:border-[#F7803C] focus:ring-4 focus:ring-[#F7803C]/5 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#111] ml-4">Topic</label>
                          <div className="relative">
                            <select
                              required
                              name="topic"
                              value={formData.topic}
                              onChange={handleChange}
                              className="w-full h-14 rounded-full px-8 bg-white border border-black/5 text-[#111] font-medium appearance-none focus:outline-none focus:border-[#F7803C] focus:ring-4 focus:ring-[#F7803C]/5 transition-all cursor-pointer"
                            >
                              <option value="" disabled>Select a topic…</option>
                              {topics.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-[#111] ml-4">Message</label>
                        <textarea
                          required
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What is your biggest operational bottleneck?"
                          className="w-full rounded-[24px] px-8 py-6 bg-white border border-black/5 text-[#111] font-medium placeholder:text-gray-300 focus:outline-none focus:border-[#F7803C] focus:ring-4 focus:ring-[#F7803C]/5 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full h-16 rounded-full bg-[#111] text-white font-black text-lg hover:bg-[#F7803C] hover:shadow-[0_20px_40px_-10px_rgba(247,128,60,0.3)] transition-all duration-300 active:scale-[0.98] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-3"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Initiate Contact"
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Side info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-[#111] rounded-[48px] relative overflow-hidden group shadow-xl shadow-black/10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7803C] opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F7803C] mb-6">Discovery Protocol</p>
                  <h3 className="text-2xl font-black text-white mb-10 leading-tight tracking-tight">What happens next.</h3>
                  
                  <div className="space-y-8">
                    {[
                      { n: "01", t: "Review", d: "We analyze your inquiry within 24 hours." },
                      { n: "02", t: "Discovery", d: "A free 30-min call to map your workflows." },
                      { n: "03", t: "Engineered Plan", d: "We propose a tailored AI system." },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-6">
                        <span className="text-xl font-black text-[#F7803C] leading-none">{step.n}</span>
                        <div>
                          <p className="text-white font-black text-base tracking-tight mb-1">{step.t}</p>
                          <p className="text-gray-400 font-medium text-sm leading-relaxed">{step.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#" 
                    className="mt-12 inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#F7803C] group/btn"
                  >
                    View Our Process <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-[32px] border border-black/5 text-center"
              >
                <p className="text-[#555] font-medium mb-4">Looking for immediate answers?</p>
                <a
                  href="/faq"
                  className="inline-flex items-center h-12 px-6 rounded-full border border-black/5 bg-white text-[#111] font-black text-xs uppercase tracking-widest hover:bg-[#111] hover:text-white transition-all duration-300"
                >
                  Browse our FAQ
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

