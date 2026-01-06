import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold mb-2 block">
              Ahmad<span className="text-accent">.</span>
            </span>
            <span className="text-primary-foreground/60 text-sm">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ahmad@example.com"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
