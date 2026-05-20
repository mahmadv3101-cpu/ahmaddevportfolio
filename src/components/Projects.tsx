import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, MouseEvent } from 'react';

import elitewearHero from '@/assets/projects/elitewear-hero.jpeg';
import vikingzHero from '@/assets/projects/vikingz-hero.jpeg';
import laxuraHero from '@/assets/projects/laxura-hero.jpeg';
import learnifyHero from '@/assets/projects/learnify-hero.jpeg';
import golfHero from '@/assets/projects/golf-hero.png';
import netflixHero from '@/assets/projects/netflix-hero.png';

const projects = [
  {
    id: 'golf-forecaster',
    title: 'Golf Forecaster',
    category: 'Webflow · SaaS',
    description: 'Futuristic dark-themed landing page for an AI golf-analysis SaaS — built entirely in Webflow.',
    image: golfHero,
    tech: ['Webflow', 'Interactions', 'SaaS'],
    featured: true,
  },
  {
    id: 'laxura',
    title: 'Laxura Palace',
    category: 'Hospitality · Web',
    description: 'Luxury hotel booking experience with cinematic visuals and refined typography.',
    image: laxuraHero,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    featured: true,
  },
  {
    id: 'elitewear',
    title: 'EliteWear',
    category: 'E-Commerce',
    description: 'Premium footwear & accessories storefront with clean product flow.',
    image: elitewearHero,
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'vikingz',
    title: 'Vikingz Watches',
    category: 'Luxury · E-Commerce',
    description: 'Sophisticated dark e-commerce concept for a premium watch brand.',
    image: vikingzHero,
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'learnify',
    title: 'Learnify',
    category: 'EdTech · React',
    description: 'Online learning platform with course catalog, instructors and stats.',
    image: learnifyHero,
    tech: ['React', 'CSS', 'JS'],
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    category: 'UI Clone',
    description: 'Pixel-perfect Netflix landing rebuilt with pure HTML & CSS.',
    image: netflixHero,
    tech: ['HTML', 'CSS'],
  },
];

const ProjectCard = ({
  project,
  large,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${-y * 4}deg`);
    el.style.setProperty('--ry', `${x * 4}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="bento p-3 md:p-4 h-full"
        style={{
          transform: 'perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))',
          transition: 'transform 400ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div className={`relative overflow-hidden rounded-[calc(var(--radius)-6px)] ${large ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

          {/* Hover CTA */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center text-foreground translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight size={18} />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary bg-primary/15 border border-primary/30 px-2.5 py-1 rounded-full backdrop-blur">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-border/70 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36 noise">
      <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">03 — Selected work</div>
            <h2 className="section-heading text-foreground">
              Recent <span className="gradient-text italic font-medium">case studies</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md md:text-right">
            A snapshot of websites I've designed and shipped across SaaS, hospitality, fashion and education.
          </p>
        </motion.div>

        {/* Featured row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard project={p} large />
            </motion.div>
          ))}
        </div>

        {/* Remaining grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
