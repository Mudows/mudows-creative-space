import { motion } from "framer-motion";
import { Gamepad2, Code, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: Gamepad2,
    title: "Game Design",
    description: "Instrutor no Senac RJ, criando jogos com Unity, Godot e Construct 3. Fundador da Serratroz Game Studio.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Front-end com React, TypeScript e Tailwind. Back-end com Django, Node.js e Express.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Pós-graduação em BI com Big Data e IA, e em Desenvolvimento Full-Stack. Graduado em Jogos Digitais.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest">&gt; sobre_mim</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Quem sou <span className="gradient-text">eu</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm
                         hover:border-primary/30 hover:box-glow transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
