import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="mb-4">
              <img src={`${import.meta.env.BASE_URL}ozma-logo.png`.replace(/\/+/g, '/')} alt="OZMA Logo" className="h-10 w-auto" />
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Orchestrating intelligent automation for the modern enterprise. 
              The leading <strong>AI Agency in Aligarh</strong>, India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Company</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                <Link href="/about" className="hover:text-[#111] transition-colors duration-150">About Us</Link>
                <Link href="/blog" className="hover:text-[#111] transition-colors duration-150">Blog</Link>
                <Link href="/faq" className="hover:text-[#111] transition-colors duration-150">FAQ</Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Services</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                <Link href="/services" className="hover:text-[#111] transition-colors duration-150">Our Services</Link>
                <Link href="/services" className="hover:text-[#111] transition-colors duration-150">AI Agents</Link>
                <Link href="/services" className="hover:text-[#111] transition-colors duration-150">AI Automations</Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111] uppercase tracking-widest mb-4">Legal</p>
              <nav className="flex flex-col gap-3 text-sm text-[#666]">
                <Link href="/contact" className="hover:text-[#111] transition-colors duration-150">Contact</Link>
                <a href="#" className="hover:text-[#111] transition-colors duration-150">Privacy Policy</a>
                <a href="#" className="hover:text-[#111] transition-colors duration-150">Terms</a>
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
