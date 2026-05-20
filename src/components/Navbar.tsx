import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection, useScrollProgress } from '@/hooks/use-scroll';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full origin-left"
          style={{
            width: `${progress}%`,
            background: 'var(--gradient-primary)',
            boxShadow: '0 0 12px hsl(var(--primary) / 0.6)',
          }}
        />
      </div>

      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-1.5rem)] max-w-5xl`}
      >
        <div
          className={`rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'border-border/70 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
              : 'border-transparent bg-background/30 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between px-5 lg:px-6 h-14">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />
              <span className="font-display text-base font-semibold tracking-tight">
                Ahmad<span className="text-primary">.dev</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a href="#contact" className="btn-gradient !py-2 !px-5">Let's talk</a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={`md:hidden absolute top-full mt-2 left-0 right-0 rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <div className="p-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all font-medium ${
                  active === item.id ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-gradient mt-2 justify-center">
              Let's talk
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
