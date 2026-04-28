import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { sendNewsletterSubscription } from "@/lib/emailService";
import { Loader2, CheckCircle2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const posts = blogPosts;

export default function BlogPage() {
  useSEO({
    title: "AI & Automation Blog | OZMA AI Agency Aligarh",
    description: "Read the latest insights on AI, automation, and business growth from OZMA, the top AI agency in Aligarh. Learn how to scale your business with autonomous AI agents.",
    keywords: "AI Blog Aligarh, Automation Insights India, AI Agency Blog, Autonomous Agents News, Business AI Strategy"
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [featured, ...rest] = posts;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    try {
      await sendNewsletterSubscription(email);
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Newsletter submission error:", error);
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
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#F7803C] uppercase tracking-[0.25em] font-black mb-6"
          >
            OZMA Intelligence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[80px] font-black text-[#111] leading-[0.95] tracking-tight mb-8"
          >
            Insights on AI, <br />
            <span className="text-gray-400">automation & growth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#555] max-w-2xl leading-relaxed font-medium"
          >
            Practical guides, high-stakes case studies, and engineering strategies from the forefront of business automation.
          </motion.p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link href={`/blog/${featured.slug}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-[48px] p-8 md:p-14 bg-gray-50 border border-black/5 hover:bg-white hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer"
            >
              <div className="max-w-3xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-[#F7803C]">
                    {featured.tag}
                  </span>
                  <span className="text-xs font-black text-[#888] uppercase tracking-widest">Featured Article</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-[1] mb-6 group-hover:text-[#F7803C] transition-colors duration-500">
                  {featured.title}
                </h2>
                <p className="text-[#555] text-xl leading-relaxed font-medium mb-10 max-w-2xl">{featured.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-10 border-t border-black/5">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                      style={{ backgroundColor: featured.authorColor }}
                    >
                      {featured.authorInitial}
                    </div>
                    <span className="font-black text-[#111] tracking-tight">{featured.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888] font-bold text-sm">
                    <Calendar size={14} /> {featured.date}
                  </div>
                  <div className="flex items-center gap-2 text-[#888] font-bold text-sm">
                    <Clock size={14} /> {featured.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex flex-col p-10 bg-gray-50 rounded-[40px] border border-transparent hover:border-black/5 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white border border-black/5 text-[#888] group-hover:text-[#F7803C] transition-colors">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#111] mb-5 leading-[1.2] tracking-tight group-hover:text-[#F7803C] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-[#555] text-base leading-relaxed font-medium mb-10">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-black/5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-[10px]"
                        style={{ backgroundColor: post.authorColor }}
                      >
                        {post.authorInitial}
                      </div>
                      <span className="text-sm font-black text-[#111] tracking-tight">{post.author}</span>
                    </div>
                    <div className="text-[10px] font-black text-[#888] uppercase tracking-widest">
                      {post.readTime}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-[48px] bg-[#111] py-24 px-8 md:px-16 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7803C] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8"
            >
              Stay ahead <br />
              <span className="text-gray-400">of the AI curve.</span>
            </motion.h2>
            <p className="text-lg text-gray-400 font-medium mb-12">
              Get our proprietary insights and automation frameworks delivered to your inbox once a week.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 h-16 rounded-full px-8 bg-white/5 border border-white/10 text-white font-medium placeholder:text-gray-500 focus:outline-none focus:border-[#F7803C] focus:bg-white/10 transition-all"
                disabled={status === "submitting" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="h-16 px-10 rounded-full bg-[#F7803C] text-white font-black text-base hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#F7803C]/20 flex items-center justify-center gap-2 min-w-[140px] disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Joined!
                  </>
                ) : (
                  "Join Now"
                )}
              </button>

              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-green-400 text-sm font-bold"
                >
                  Welcome to the newsletter!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-red-400 text-sm font-bold"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

