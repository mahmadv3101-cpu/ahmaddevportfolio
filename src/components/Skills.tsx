const skills = [
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'REST APIs', level: 85, category: 'Backend' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'Responsive Design', level: 95, category: 'Design' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, hsl(174 72% 50%), hsl(330 85% 60%))',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <SkillBar name={skill.name} level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-display font-semibold text-muted-foreground mb-8">
            Technologies I Love Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Tailwind', 'Bootstrap', 'Git'].map((tech, index) => (
              <div
                key={tech}
                className="group px-6 py-3 bg-secondary border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
