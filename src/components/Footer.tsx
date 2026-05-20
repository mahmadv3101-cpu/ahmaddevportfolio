import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 noise">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="font-display text-lg font-semibold">
                Ahmad<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Frontend & No-Code developer crafting premium, interactive websites for ambitious brands.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {['About', 'Stack', 'Work', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase() === 'work' ? 'projects' : l.toLowerCase() === 'stack' ? 'skills' : l.toLowerCase()}`} className="text-foreground/80 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Connect</div>
            <a href="mailto:mahmadv3101@gmail.com" className="inline-flex items-center gap-1 text-foreground hover:text-primary font-display text-xl mb-4 group">
              mahmadv3101@gmail.com
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: 'https://github.com/mahmadv3101-cpu', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-ahmad-a8a682397', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:mahmadv3101@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant brand mark */}
        <div className="border-t border-border/60 pt-10">
          <div className="font-display font-semibold text-[18vw] md:text-[14vw] leading-none tracking-tighter text-foreground/[0.04] select-none text-center -mb-4">
            Ahmad.dev
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
            <p className="text-xs text-muted-foreground">© {currentYear} Muhammad Ahmad — All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Designed & built with care in Pakistan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
