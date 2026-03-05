import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Habit Tracker Dashboard",
    description: "Dashboard rich-based para rastrear hábitos. Feito com Python.",
    tags: ["Python", "Rich", "CLI"],
    github: "https://github.com/Mudows/habit-tracker",
    status: "Em Desenvolvimento",
  },
  {
    title: "Dungeon Delvers",
    description: "Jogo de dungeon crawling em fase de prototipação.",
    tags: ["Game Design", "Prototyping"],
    status: "Rascunho",
  },
  {
    title: "Earth Defense Game",
    description: "Jogo STU desenvolvido com Construct 3.",
    tags: ["Construct 3", "Game Dev"],
    github: "https://github.com/Mudows/earth-defense-game",
  },
  {
    title: "JavaScript Calculator",
    description: "Calculadora interativa criada como projeto FreeCodeCamp.",
    tags: ["JavaScript", "React"],
    github: "https://github.com/Mudows/fcc-javascript-calculator",
  },
  {
    title: "Markdown Previewer",
    description: "Previsualizador de Markdown em tempo real.",
    tags: ["JavaScript", "React"],
    github: "https://github.com/Mudows/fcc-markdown-previewer",
  },
  {
    title: "Pixel Art Project",
    description: "Canvas de pixel art interativo.",
    tags: ["JavaScript", "Canvas"],
    github: "https://github.com/Mudows/pixel-art-project",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest">&gt; projetos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm
                         hover:border-primary/30 hover:box-glow transition-all duration-500
                         flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.status && (
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-accent/20 text-accent border border-accent/30">
                    {project.status}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground">
                    {tag}
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

export default ProjectsSection;
