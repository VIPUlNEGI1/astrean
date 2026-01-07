'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
 
  {
    label: 'AI Consulting',
    href: '/ai-transformation',
    dropdown: [
      { label: 'AI Transformation', href: '/ai-transformation' },
      { label: 'AI Engineering', href: '/ai-engineering' },
      { label: 'Intelligent Automations', href: '/intelligent-automations' },
    ],
  },
  {
    label: 'Products',
    href: '/anx-intelligence',
    dropdown: [
      { label: 'Solvoris', href: '/products/solvoris' },
      { label: 'Orzo (ANX Intelligence)', href: '/anx-intelligence' },
    ],
  },
  {
    label: 'Digital Services',
    href: '/consulting-modernization',
    dropdown: [
      { label: 'IT Consulting & Modernization', href: '/consulting-modernization' },
      { label: 'Hire Talent', href: '/hire-talent' },
      { label: 'MVP Studio', href: '/mvp-studio' },
    ],
  },
  {
    label: 'Company',
    href: '/about-us',
    dropdown: [
      { label: 'Who We Are', href: '/about-us' },
      { label: 'Company Story', href: '/company' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on a link
      if (target.tagName === 'A' || target.closest('a')) {
        return;
      }
      
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key]?.contains(event.target as Node)
        ) {
          setOpenDropdown(null);
        }
      });
    };

    if (openDropdown) {
      // Use click instead of mousedown to allow link clicks to complete first
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2 duration-500 ${
          isScrolled
            ? 'bg-slate-950/55 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 text-white transition-colors hover:text-white shrink-0">
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/5">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/80" />
              </span>
              <span className="text-[13px] sm:text-[15px] font-semibold tracking-tight">
                Astrenox
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  ref={(el) => {
                    if (item.dropdown) {
                      dropdownRefs.current[item.label] = el;
                    }
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div
                          className="absolute top-full left-0 mt-2 w-64 bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-[16px] shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                          onMouseEnter={() => setOpenDropdown(item.label)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                              onClick={() => {
                                setOpenDropdown(null);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 btn-icon" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/85 backdrop-blur-xl animate-in slide-in-from-top duration-200 max-h-[85svh] overflow-y-auto custom-scrollbar">
            <nav className="px-3.5 sm:px-4 py-4 space-y-1.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 space-y-3">
                <Link
                  href="/contact"
                  className="btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4 btn-icon" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-md text-white/70 hover:border-white/40 hover:text-white transition-all duration-200 px-4 py-2 shadow-lg hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-medium">Back to top</span>
        </button>
      )}
    </>
  );
}

