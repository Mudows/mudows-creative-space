import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Linguagens",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "HTML5", "CSS3", "Sass"],
  },
  {
    title: "Frameworks & Libs",
    skills: ["React", "Redux", "Django", "Node.js", "Express", "Bootstrap", "Tailwind CSS", "jQuery"],
  },
  {
    title: "Game Engines",
    skills: ["Unity", "Godot", "Construct 3", "GameMaker Studio"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "Docker", "Azure", "MongoDB", "MySQL", "Photoshop", "Illustrator", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest">&gt; habilidades</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/30"
            >
              <h3 className="font-mono text-sm text-primary mb-4">{`// ${cat.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-secondary text-secondary-foreground
                               border border-border hover:border-primary/40 hover:text-primary
                               transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
