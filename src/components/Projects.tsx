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

const LaptopFrame = ({ image, title, isHovered }: { image: string; title: string; isHovered: boolean }) => {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Laptop Screen */}
      <div className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-t-xl p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
        {/* Camera */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-600 rounded-full" />
        
        {/* Screen Bezel */}
        <div className="relative bg-black rounded-lg overflow-hidden mt-2">
          {/* Screen */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover object-top transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}
            />
            {/* subtle reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* Laptop Base/Keyboard */}
      <div className="relative">
        {/* Hinge */}
        <div className="h-2 bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-b-sm" />
        
        {/* Base */}
        <div className="h-3 bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 rounded-b-xl mx-[-2%]" />
        
        {/* Bottom edge */}
        <div className="h-1 bg-zinc-900 rounded-b-xl mx-[-1%] mt-[-1px]" />
      </div>

      {/* Glow Effect */}
      <div className={`absolute -inset-6 bg-primary/25 rounded-2xl blur-2xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Laptop Frame */}
      <div 
        className={`${!isEven ? 'lg:order-2' : ''} flex justify-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/project/${project.id}`} className="block group w-full">
          <LaptopFrame image={project.image} title={project.title} isHovered={isHovered} />
        </Link>
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
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
        <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="flex items-center gap-5">
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
