import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const headlineWords = ['Frontend', '&', 'No-Code', 'experiences'];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Mesh + grid background */}
      <div className="absolute inset-0 bg-mesh" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] bg-primary/25 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-[24rem] h-[24rem] bg-accent/25 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 lg:px-8 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for freelance · 2026
          </motion.div>

          <h1 className="font-display font-semibold tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mb-8">
            <span className="block text-foreground">Designing</span>
            <span className="block">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={w + i}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-3 ${w === 'experiences' ? 'gradient-text italic font-medium' : 'text-foreground'}`}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="block text-foreground/80 text-3xl md:text-4xl lg:text-5xl mt-4 font-normal"
            >
              that convert.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Muhammad Ahmad</span> — a Frontend & No-Code Developer crafting premium, interactive websites in
            <span className="text-foreground"> Webflow</span>,
            <span className="text-foreground"> Framer</span> and
            <span className="text-foreground"> React</span> for brands that want to stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a href="#projects" className="btn-gradient group">
              <Sparkles size={16} />
              View selected work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">Start a project</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
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
                className="w-11 h-11 rounded-full border border-border bg-card/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Marquee of tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
        >
          <div className="flex gap-12 animate-[grid-pan_30s_linear_infinite] whitespace-nowrap text-muted-foreground/60 text-sm uppercase tracking-[0.25em]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>Webflow</span><span>·</span>
                <span>Framer</span><span>·</span>
                <span>React</span><span>·</span>
                <span>TypeScript</span><span>·</span>
                <span>Tailwind CSS</span><span>·</span>
                <span>GSAP</span><span>·</span>
                <span>Figma</span><span>·</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
