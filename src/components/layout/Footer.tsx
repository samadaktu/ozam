export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="mb-4">
              <span className="text-xl font-black text-[#111] tracking-tight">OZMA</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Orchestrating intelligent automation for the modern enterprise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Company</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                {["About Us", "Blog", "Careers"].map((link) => (
                  <a key={link} href="#" className="hover:text-[#111] transition-colors duration-150">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Services</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                {["AI Agents", "AI Automations", "AI Ads", "Custom AI"].map((link) => (
                  <a key={link} href="#" className="hover:text-[#111] transition-colors duration-150">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Legal</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
                  <a key={link} href="#" className="hover:text-[#111] transition-colors duration-150">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#aaa]">
          <p>© {year} OZMA. All rights reserved.</p>
          <p>Orchestrated Zenith of Machine Automation</p>
        </div>
      </div>
    </footer>
  );
}
