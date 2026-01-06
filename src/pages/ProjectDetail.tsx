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
    description: 'A premium e-commerce platform for footwear and accessories',
    overview: 'EliteWear is a modern e-commerce website designed for premium footwear and accessories. The platform offers a seamless shopping experience with intuitive navigation, product filtering, and a sleek dark-themed interface that highlights the products beautifully.',
    problem: 'Many e-commerce platforms lack visual appeal and fail to create an engaging shopping experience. Users often struggle with cluttered interfaces and poor product presentation.',
    solution: 'I designed a clean, modern interface with a dark theme that makes products stand out. The site features smooth animations, responsive design, and intuitive navigation to enhance the shopping experience.',
    features: [
      'Responsive design for all device sizes',
      'Product catalog with category filtering',
      'Size and variant selection',
      'Contact form for customer inquiries',
      'Smooth hover animations and transitions',
      'Modern dark theme UI',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Flexbox', 'CSS Grid'],
    images: [elitewearHero, elitewearShoes, elitewearAccessories, elitewearContact],
    liveUrl: '#',
    sourceUrl: '#',
  },
  'vikingz': {
    title: 'Vikingz Luxury Watches',
    description: 'Elegant e-commerce website for premium watches',
    overview: 'Vikingz is a luxury watch e-commerce platform inspired by Viking heritage, strength, and leadership. The website showcases premium watches with a sophisticated dark theme and golden accents that convey luxury and exclusivity.',
    problem: 'Luxury brands need websites that reflect their premium positioning. Generic e-commerce templates fail to capture the essence of luxury and exclusivity.',
    solution: 'I created a bespoke design with a dark theme and gold accents that embodies the luxury watch brand identity. The minimalist layout puts focus on the products while the typography and spacing create an air of sophistication.',
    features: [
      'Luxurious dark theme with gold accents',
      'Premium product showcase',
      'Elegant typography and spacing',
      'Responsive across all devices',
      'Contact information section',
      'Brand storytelling section',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Custom Fonts'],
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-border bg-secondary hover:bg-secondary/80 font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Github size={18} />
                Source Code
              </a>
            </div>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden border border-border mb-12">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Features */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More Screenshots */}
          {project.images.length > 1 && (
            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">More Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-border">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 2}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
