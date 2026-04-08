import { motion } from "framer-motion";

interface HeroProps {
  onBookDemo: () => void;
}

type CardItem = {
  type: "stat" | "profile" | "badge";
  value?: string;
  label?: string;
  name?: string;
  role?: string;
  initial?: string;
  bg?: string;
  textColor?: string;
  color?: string;
  icon?: string;
};

type ColumnItem = 
  | { kind: "single"; card: CardItem }
  | { kind: "double"; top: CardItem; bottom: CardItem };

const columns: ColumnItem[] = [
  { 
    kind: "single", 
    card: { type: "profile", name: "Elena S.", role: "AI Workflow Architect", initial: "E", color: "#F7803C" } 
  },
  { 
    kind: "double", 
    top: { type: "stat", value: "92%", label: "Reduction in manual entry", bg: "#DBEAFE", textColor: "#1E3A8A" },
    bottom: { type: "profile", name: "Amara K.", role: "Ads Strategist", initial: "A", color: "#10B981" }
  },
  { 
    kind: "single", 
    card: { type: "profile", name: "Julian M.", role: "LLM Fine-tuning Expert", initial: "J", color: "#3B82F6" } 
  },
  { 
    kind: "double", 
    top: { type: "stat", value: "24/7", label: "Autonomous Support", bg: "#EDE9FE", textColor: "#4C1D95" },
    bottom: { type: "stat", value: "5x", label: "Average ROI on AI Ads", bg: "#DCFCE7", textColor: "#14532D" }
  },
  { 
    kind: "single", 
    card: { type: "profile", name: "Vikram R.", role: "Automation Lead", initial: "V", color: "#8B5CF6" } 
  },
  { 
    kind: "double", 
    top: { type: "stat", value: "$2M+", label: "Operating costs saved", bg: "#Fef3c7", textColor: "#92400e" },
    bottom: { type: "profile", name: "Sophie T.", role: "Integration Lead", initial: "S", color: "#EC4899" }
  },
  { 
    kind: "single", 
    card: { type: "profile", name: "Marcus D.", role: "Data Scientist", initial: "M", color: "#6366F1" } 
  },
  { 
    kind: "double", 
    top: { type: "stat", value: "10k+", label: "Tasks automated / mo", bg: "#CCFBF1", textColor: "#0F4A3A" },
    bottom: { type: "stat", value: "0ms", label: "Latency in Workflows", bg: "#F1F5F9", textColor: "#475569" }
  },
];

function Card({ item, height }: { item: CardItem; height: "tall" | "short" }) {
  if (item.type === "stat") {
    return (
      <div
        className={`flex-shrink-0 w-full rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-black/5 hover:scale-[1.02] transition-transform duration-300`}
        style={{ backgroundColor: item.bg, height: height === "tall" ? "320px" : "154px" }}
      >
        <span className={`${height === "tall" ? "text-5xl" : "text-4xl"} font-black leading-none tracking-tight`} style={{ color: item.textColor }}>
          {item.value}
        </span>
        <span className="text-sm font-semibold leading-tight opacity-90" style={{ color: item.textColor }}>
          {item.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex-shrink-0 w-full rounded-3xl overflow-hidden relative shadow-md group border border-white/20 hover:scale-[1.02] transition-transform duration-300`}
      style={{ backgroundColor: item.color, height: height === "tall" ? "320px" : "154px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm mb-2 border border-white/30">
          {item.initial}
        </div>
        <p className="text-white font-bold text-lg leading-tight mb-0.5">{item.name}</p>
        <p className="text-white/80 text-xs font-medium">{item.role}</p>
      </div>
    </div>
  );
}

export function Hero({ onBookDemo }: HeroProps) {
  const doubledColumns = [...columns, ...columns, ...columns];

  return (
    <section className="relative min-h-[110vh] hero-gradient overflow-hidden flex flex-col">
      <div className="relative z-20 pt-32 pb-12 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-[84px] font-black text-[#111] leading-[1.02] tracking-tightest mb-6">
            The power of AI, <br className="hidden md:block" />
            <span className="text-[#F7803C]">built for your business.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#444] max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Scale your operations with intelligent AI agents and high-performance 
          automation. Join the forward-thinking companies already leveraging OZMA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={onBookDemo}
            className="group relative inline-flex items-center justify-center rounded-full bg-[#111] text-white font-bold text-lg h-14 px-10 transition-all duration-300 hover:bg-[#F7803C] hover:shadow-[0_0_20px_rgba(247,128,60,0.4)] active:scale-[0.98] cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Single Masonry-style scrolling section */}
      <div className="relative flex-1 flex flex-col justify-center -mt-8 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full overflow-hidden"
        >
          <div className="animate-cards-slide flex gap-4 w-max px-4 items-start">
            {doubledColumns.map((col, i) => (
              <div key={i} className="flex-shrink-0 w-[240px]">
                {col.kind === "single" ? (
                  <Card item={col.card} height="tall" />
                ) : (
                  <div className="flex flex-col gap-3">
                    <Card item={col.top} height="short" />
                    <Card item={col.bottom} height="short" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gradient Overlays for Fading edges */}
        <div className="absolute inset-y-0 left-0 w-60 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-60 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />
      </div>

      <div className="hero-bottom-fade" />
    </section>
  );
}

