import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Text only */}
          <a href="#home" className="flex items-center group">
            <span className="font-display text-2xl font-bold text-foreground">
              Ahmad<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="nav-link text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* GitHub & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Muhammad-Ahmad-Lovable"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a href="#contact" className="btn-gradient text-sm">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card border-b border-border transition-all duration-300 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/Muhammad-Ahmad-Lovable"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all font-medium flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-gradient text-center mt-4"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
