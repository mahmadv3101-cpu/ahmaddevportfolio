const skills = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Responsive Design', category: 'Design' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider" />
          <h2 className="section-heading text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-badge animate-fade-in-up cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Level */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="pro-card text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Advanced / Professional Level
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Hands-on experience in building production-ready applications with a strong foundation in both frontend and backend technologies. Committed to writing clean, efficient, and maintainable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;