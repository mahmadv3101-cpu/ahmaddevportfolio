import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Layers, Globe, Sparkles } from 'lucide-react';
import Bento from './Bento';

const stats = [
  { value: '6+', label: 'Shipped projects' },
  { value: '3+', label: 'Years coding' },
  { value: '100%', label: 'Client focus' },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 noise">
      <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-5">01 — About</div>
          <h2 className="section-heading text-foreground mb-6">
            A developer who designs.<br />
            <span className="gradient-text italic font-medium">A designer who codes.</span>
          </h2>
          <p className="section-subheading">
            I build premium websites where craft meets conversion — blending pixel-level design with performant frontend code.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {/* Bio */}
          <Bento className="md:col-span-4 p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">The story</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 tracking-tight">
              I help founders, agencies and creators ship websites that feel handcrafted — not templated.
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a BSCS student and full-time Frontend & No-Code Developer. I specialize in turning Figma files into pixel-perfect, butter-smooth experiences using <span className="text-foreground">Webflow</span>, <span className="text-foreground">Framer</span>, and <span className="text-foreground">React + Tailwind</span>.
              </p>
              <p>
                My focus is the details most developers skip — micro-interactions, type, spacing, motion, and the conversion-driven structure that turns a visitor into a client.
              </p>
            </div>
          </Bento>

          {/* Stats */}
          <Bento className="md:col-span-2 p-8 flex flex-col justify-between">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">By the numbers</div>
            <div className="space-y-6 mt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <span className="text-4xl font-display font-semibold gradient-text">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </Bento>

          {/* Capabilities */}
          {[
            { Icon: Palette, title: 'Design-led', text: 'Awwwards-grade UI with a sharp eye for type & spacing.' },
            { Icon: Zap, title: 'Smooth motion', text: 'Framer Motion & GSAP — interactions that feel premium.' },
            { Icon: Code2, title: 'Clean code', text: 'Maintainable, accessible, component-driven React.' },
            { Icon: Layers, title: 'No-Code expert', text: 'Webflow & Framer sites built for editors, not engineers.' },
            { Icon: Globe, title: 'Fully responsive', text: 'Pixel-precise from 320px to 4K, tested everywhere.' },
            { Icon: Sparkles, title: 'Conversion-aware', text: 'Hero, CTAs, structure tuned to actually convert.' },
          ].map(({ Icon, title, text }) => (
            <Bento key={title} className="md:col-span-2 p-6">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-1.5">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </Bento>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
