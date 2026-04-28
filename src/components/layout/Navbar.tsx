import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";

interface NavbarProps {
  onBookDemo: () => void;
}

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ onBookDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center select-none cursor-pointer">
              <img src={`${import.meta.env.BASE_URL}ozma-logo.png`.replace(/\/+/g, '/')} alt="OZMA Logo" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    location === href
                      ? "text-[#F7803C]"
                      : "text-[#333] hover:text-[#111]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#111]/20 bg-white text-[#111] font-semibold text-sm h-9 px-5 transition-all duration-200 hover:border-[#F7803C] hover:text-[#F7803C] cursor-pointer"
            >
              Let's Talk →
            </Link>
            <button
              onClick={onBookDemo}
              style={{ backgroundColor: "#F7803C", color: "#ffffff" }}
              className="hidden md:inline-flex items-center justify-center rounded-full font-semibold text-sm h-9 px-5 transition-all duration-200 hover:opacity-90 active:scale-[0.97] cursor-pointer shadow-sm"
            >
              Book a Demo
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-[#111]/20 bg-white p-2 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[90] bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="fixed right-0 top-0 bottom-0 w-80 sm:w-72 bg-white shadow-2xl overflow-y-auto z-[100] flex flex-col border-l border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#e5e7eb] pb-4">
                <Link href="/" className="flex items-center">
                  <img src={`${import.meta.env.BASE_URL}ozma-logo.png`.replace(/\/+/g, '/')} alt="OZMA Logo" className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-2 hover:bg-[#f3f4f6]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                      location === href ? "bg-[#f6e7df] text-[#F7803C]" : "text-[#111] hover:bg-[#f8f8f8]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onBookDemo();
                }}
                className="mt-5 w-full rounded-md bg-[#F7803C] px-3 py-2 text-sm font-semibold text-white"
              >
                Book a Demo
              </button>
              <Link
                href="/contact"
                className="mt-3 block rounded-md border border-[#111]/20 px-3 py-2 text-center text-sm font-semibold text-[#111]"
                onClick={() => setMobileOpen(false)}
              >
                Let's Talk →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}