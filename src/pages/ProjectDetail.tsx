import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import elitewearHero from '@/assets/projects/elitewear-hero.jpeg';
import elitewearShoes from '@/assets/projects/elitewear-shoes.jpeg';
import elitewearAccessories from '@/assets/projects/elitewear-accessories.jpeg';
import elitewearContact from '@/assets/projects/elitewear-contact.jpeg';
import vikingzHero from '@/assets/projects/vikingz-hero.jpeg';
import vikingzCollection from '@/assets/projects/vikingz-collection.jpeg';
import vikingzFooter from '@/assets/projects/vikingz-footer.jpeg';

const projectsData: Record<string, {
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  images: string[];
  liveUrl: string;
  sourceUrl: string;
}> = {
  'elitewear': {
    title: 'EliteWear E-Commerce',
    description: 'Premium footwear and accessories platform',
    overview: 'EliteWear is a modern e-commerce platform designed for premium footwear and fashion accessories. The website features a clean, professional design with intuitive navigation and a seamless shopping experience.',
    problem: 'Many e-commerce platforms struggle with cluttered interfaces and poor user experience, making it difficult for customers to find and purchase products efficiently.',
    solution: 'I designed and developed a clean, modern interface with organized product categories, clear product displays, and an intuitive shopping flow. The design emphasizes the premium nature of the products while maintaining excellent usability.',
    features: [
      'Responsive design for all devices',
      'Product category filtering',
      'Clean product card layouts',
      'Interactive shopping cart',
      'Contact form integration',
      'Modern UI/UX design',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    images: [elitewearHero, elitewearShoes, elitewearAccessories, elitewearContact],
    liveUrl: '#',
    sourceUrl: '#',
  },
  'vikingz': {
    title: 'Vikingz Luxury Watches',
    description: 'Elegant luxury watch showcase',
    overview: 'Vikingz is a luxury watch e-commerce platform featuring a sophisticated dark theme that perfectly complements the premium nature of the products. The website showcases high-end timepieces with elegant typography and refined visual design.',
    problem: 'Luxury brands need websites that reflect their premium positioning while still providing excellent functionality and user experience.',
    solution: 'I created a dark-themed, elegant website that emphasizes the luxury aesthetic of the brand. The design uses refined typography, strategic white space, and high-quality imagery to create an immersive shopping experience.',
    features: [
      'Sophisticated dark theme',
      'Premium product showcase',
      'Elegant typography',
      'Smooth animations',
      'Responsive layout',
      'Brand-focused design',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    images: [vikingzHero, vikingzCollection, vikingzFooter],
    liveUrl: '#',
    sourceUrl: '#',
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Case Study
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {project.overview}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={16} className="mr-2" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="professional-card overflow-hidden rounded-lg">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="professional-card p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="professional-card p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                The Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="skill-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="professional-card overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can help bring your project to life.
          </p>
          <Link to="/#contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
