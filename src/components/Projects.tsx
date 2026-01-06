import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import elitewearHero from '@/assets/projects/elitewear-hero.jpeg';
import vikingzHero from '@/assets/projects/vikingz-hero.jpeg';

const projects = [
  {
    id: 'elitewear',
    title: 'EliteWear E-Commerce',
    description: 'A premium e-commerce platform for footwear and accessories with modern UI, product filtering, and seamless shopping experience.',
    image: elitewearHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'vikingz',
    title: 'Vikingz Luxury Watches',
    description: 'Elegant e-commerce website showcasing premium watches with sophisticated dark theme and luxurious brand aesthetics.',
    image: vikingzHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
        <Link to={`/project/${project.id}`} className="block group">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                View Project <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:order-1 lg:text-right' : ''}`}>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Featured Project
        </p>
        <Link to={`/project/${project.id}`}>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 mb-6 ${!isEven ? 'lg:justify-end' : ''}`}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className={`flex items-center gap-5 ${!isEven ? 'lg:justify-end' : ''}`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            Source Code
          </a>
          <Link
            to={`/project/${project.id}`}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="divider" />
          <h2 className="section-heading text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="section-subheading mx-auto">
            Showcasing real-world applications I've built with passion and precision
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;