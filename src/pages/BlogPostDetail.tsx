import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/DemoModal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./not-found";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return <NotFound />;
  }

  useSEO({
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords
  });

  // Simple markdown to HTML converter for basic tags
  const renderContent = (content: string) => {
    return content
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("# ")) {
          return <h1 key={i} className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{block.replace("# ", "")}</h1>;
        }
        if (block.startsWith("## ")) {
          return <h2 key={i} className="text-2xl md:text-3xl font-black mt-12 mb-6 tracking-tight">{block.replace("## ", "")}</h2>;
        }
        if (block.startsWith("### ")) {
          return <h3 key={i} className="text-xl md:text-2xl font-black mt-10 mb-4 tracking-tight">{block.replace("### ", "")}</h3>;
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter(li => li.startsWith("- "));
          return (
            <ul key={i} className="list-disc list-inside mb-8 space-y-3">
              {items.map((item, j) => <li key={j} className="text-lg text-[#555] font-medium">{item.replace("- ", "")}</li>)}
            </ul>
          );
        }
        if (block.startsWith("| ")) {
           // Skip tables for simplicity or render basic
           return null;
        }
        return <p key={i} className="text-lg text-[#555] leading-relaxed font-medium mb-6" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      });
  };

  return (
    <div className="min-h-screen bg-white text-[#111] flex flex-col">
      <Navbar onBookDemo={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Back Button */}
          <Link href="/blog">
            <motion.button 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#888] hover:text-[#F7803C] transition-colors mb-12 cursor-pointer group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </motion.button>
          </Link>

          {/* Header */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-gray-100 text-[#F7803C] border border-black/5">
                {post.tag}
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-[#111] leading-[1] tracking-tight mb-10"
            >
              {post.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8 py-8 border-y border-black/5 mb-12"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black"
                  style={{ backgroundColor: post.authorColor }}
                >
                  {post.authorInitial}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#888] mb-0.5">Author</p>
                  <p className="font-black text-[#111]">{post.author}</p>
                </div>
              </div>
              <div className="h-10 w-px bg-black/5 hidden sm:block" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#888] mb-0.5">Published</p>
                <div className="flex items-center gap-2 font-black text-[#111]">
                  <Calendar size={14} className="text-[#F7803C]" /> {post.date}
                </div>
              </div>
              <div className="h-10 w-px bg-black/5 hidden sm:block" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#888] mb-0.5">Reading Time</p>
                <div className="flex items-center gap-2 font-black text-[#111]">
                  <Clock size={14} className="text-[#F7803C]" /> {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Image placeholder/style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-[21/9] w-full rounded-[48px] bg-gray-100 mb-20 overflow-hidden border border-black/5 relative group"
          >
             <img 
               src={`${import.meta.env.BASE_URL}${post.image}`.replace(/\/+/g, '/')} 
               alt={post.title}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-20 items-start">
            <article className="max-w-3xl">
              <div className="prose prose-lg prose-orange max-w-none">
                {renderContent(post.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="sticky top-32 hidden lg:block">
              <div className="p-8 bg-gray-50 rounded-[32px] border border-black/5">
                <h4 className="text-lg font-black mb-6 tracking-tight">Stay Informed</h4>
                <p className="text-sm text-[#555] font-medium mb-8 leading-relaxed">
                  Join 2,000+ executives receiving our weekly automation frameworks.
                </p>
                <Link href="/blog">
                  <button className="w-full h-12 rounded-full bg-[#111] text-white font-black text-xs uppercase tracking-widest hover:bg-[#F7803C] transition-all cursor-pointer">
                    Subscribe
                  </button>
                </Link>
                <div className="mt-12 pt-8 border-t border-black/5">
                   <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors cursor-pointer">
                     <Share2 size={14} /> Share Article
                   </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
