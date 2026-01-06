import { Code2, Palette, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive interfaces with attention to detail',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and exceptional user experience',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider" />
          <h2 className="section-heading text-foreground mb-4">
            About Me
          </h2>
          <p className="section-subheading mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Turning Ideas into <span className="gradient-text">Reality</span>
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-justify">
              <p>
                I'm a passionate Full Stack Web Developer with a strong focus on creating modern, responsive, and user-centric web applications. My journey in web development has equipped me with a comprehensive skill set spanning both frontend and backend technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code that not only works flawlessly but is also a pleasure for other developers to work with. Every project I undertake is an opportunity to push boundaries and deliver solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge to stay at the forefront of web development trends.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-between mt-10 gap-3">
              <div className="flex-1 text-center pro-card py-4 px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text whitespace-nowrap">4+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="flex-1 text-center pro-card py-4 px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text whitespace-nowrap">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Technologies</div>
              </div>
              <div className="flex-1 text-center pro-card py-4 px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text whitespace-nowrap">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="pro-card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;