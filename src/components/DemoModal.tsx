import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setTimeout(() => setStatus("idle"), 300);
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 relative shadow-xl pointer-events-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111] mb-2">Request Received</h3>
                  <p className="text-[#666]">
                    Our team will be in touch shortly to schedule your demo.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-[#111] mb-1">Book a Demo</h2>
                  <p className="text-[#888] text-sm mb-7">
                    See how OZMA can transform your operations.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: "Name", key: "name", type: "text", placeholder: "Jordan Miller" },
                      { label: "Work Email", key: "email", type: "email", placeholder: "jordan@company.com" },
                      { label: "Company", key: "company", type: "text", placeholder: "TechCorp Inc." },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5">{label}</label>
                        <input
                          required
                          type={type}
                          value={formData[key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#F7803C] focus:ring-1 focus:ring-[#F7803C]/30 transition-all text-sm"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      style={{ backgroundColor: "#F7803C", color: "#ffffff" }}
                      className="w-full mt-3 h-11 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Demo"
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
