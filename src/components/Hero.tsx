import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fadeInUp">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="gradient-text">Ahmad</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground/90 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Full Stack Web Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Building fast, responsive, and user-focused web applications that deliver exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn-gradient w-full sm:w-auto">
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border bg-secondary hover:bg-secondary/80 font-semibold transition-all duration-300 hover:border-primary/50"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ahmad@example.com"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
