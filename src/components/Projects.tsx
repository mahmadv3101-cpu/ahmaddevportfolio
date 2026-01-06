import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import elitewearHero from '@/assets/projects/elitewear-hero.jpeg';
import vikingzHero from '@/assets/projects/vikingz-hero.jpeg';
import laxuraHero from '@/assets/projects/laxura-hero.jpeg';
import learnifyHero from '@/assets/projects/learnify-hero.jpeg';

const projects = [
  {
    id: 'elitewear',
    title: 'EliteWear E-Commerce',
    description: 'Premium footwear and accessories platform with modern UI and seamless shopping experience.',
    image: elitewearHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'vikingz',
    title: 'Vikingz Luxury Watches',
    description: 'Elegant e-commerce website with sophisticated dark theme for premium watches.',
    image: vikingzHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
  },
  {
    id: 'laxura',
    title: 'Laxura Palace Hotel',
    description: 'Luxury hotel booking website with elegant design and premium hospitality features.',
    image: laxuraHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'learnify',
    title: 'Learnify Education',
    description: 'Online education platform with courses, instructors, and modern learning experience.',
    image: learnifyHero,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
];

const MobileFrame = ({ image, title, isHovered }: { image: string; title: string; isHovered: boolean }) => {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[240px]">
      {/* Phone Frame */}
      <div className="relative bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[2.5rem] p-1.5 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative bg-black rounded-[2rem] p-1">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-8 h-2 rounded-full bg-zinc-800" />
          </div>
          
          {/* Screen */}
          <div className="relative rounded-[1.5rem] overflow-hidden bg-background h-[380px] sm:h-[440px]">
            <div 
              className={`absolute top-0 left-0 right-0 transition-transform duration-[4000ms] ease-in-out ${isHovered ? '-translate-y-[calc(100%-380px)] sm:-translate-y-[calc(100%-440px)]' : 'translate-y-0'}`}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Screen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute -inset-4 bg-primary/20 rounded-[3rem] blur-xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Mobile Frame */}
      <div 
        className={`${!isEven ? 'lg:order-2' : ''} flex justify-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/project/${project.id}`} className="block group">
          <MobileFrame image={project.image} title={project.title} isHovered={isHovered} />
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
          <Link
            to={`/project/${project.id}`}
            className="flex items-center gap-2 btn-gradient text-sm"
          >
            View Project
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
        <div className="space-y-24 max-w-5xl mx-auto">
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
