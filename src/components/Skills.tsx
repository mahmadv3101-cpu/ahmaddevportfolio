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
    <section id="skills" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider" />
          <h2 className="section-heading text-foreground">
            Skills & Expertise
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-badge animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Level */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="professional-card p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Professional Level
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced proficiency in modern web technologies with hands-on experience in building production-ready applications. Committed to writing clean, efficient, and maintainable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
