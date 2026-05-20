import { motion } from 'framer-motion';
import Bento from './Bento';

const skillGroups = [
  {
    title: 'No-Code',
    accent: 'from-primary to-accent',
    items: ['Webflow', 'Framer', 'CMS Setup', 'Interactions', 'Webflow Ecommerce'],
  },
  {
    title: 'Frontend',
    accent: 'from-accent to-primary',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Motion & Design',
    accent: 'from-primary to-primary-glow',
    items: ['Framer Motion', 'GSAP', 'Figma', 'UI/UX', 'Responsive Design'],
  },
  {
    title: 'Workflow',
    accent: 'from-accent to-primary-glow',
    items: ['Git & GitHub', 'Vite', 'Vercel', 'Netlify', 'Lighthouse'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 noise">
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-5">02 — Toolkit</div>
          <h2 className="section-heading text-foreground mb-6">
            The stack behind the <span className="gradient-text italic font-medium">craft</span>.
          </h2>
          <p className="section-subheading">
            A focused toolkit for designing, building and shipping high-end interactive websites end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Bento className="p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-display text-2xl font-semibold bg-gradient-to-r ${group.accent} bg-clip-text text-transparent`}>
                    {group.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">0{idx + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="skill-badge cursor-default">{s}</span>
                  ))}
                </div>
              </Bento>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
