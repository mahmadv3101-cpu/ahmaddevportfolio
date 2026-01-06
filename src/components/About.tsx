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
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Turning Ideas into Reality
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-secondary rounded-xl border border-border">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl border border-border">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Technologies</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl border border-border">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 bg-card rounded-xl border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
