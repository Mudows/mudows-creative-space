import { motion } from "framer-motion";
import { Gamepad2, Code, GraduationCap, BookOpen, Cpu, Users } from "lucide-react";

const cards = [
  {
    icon: Gamepad2,
    title: "Game Design",
    description:
      "Instrutor no Senac RJ, criando jogos com Unity, Godot e Construct 3. Fundador da Serratroz Game Studio. Experiência em level design, mecânicas de jogo e prototipagem.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Front-end com React, TypeScript e Tailwind. Back-end com Django, Node.js e Express. 5 anos de experiência corporativa na IBM em Reporting e BI.",
  },
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description:
      "Pós-graduação em BI com Big Data e IA, e em Desenvolvimento Full-Stack. Graduado em Jogos Digitais pela Seven Game e Senac RJ.",
  },
];

const highlights = [
  { icon: Cpu, value: "5+", label: "Anos na IBM" },
  { icon: Users, value: "100+", label: "Alunos formados" },
  { icon: Gamepad2, value: "10+", label: "Jogos criados" },
  { icon: BookOpen, value: "3", label: "Especializações" },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest">&gt; sobre_mim</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Quem sou <span className="gradient-text">eu</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Moro no Rio de Janeiro e sou movido por criar experiências interativas e compartilhar
          conhecimento. Passei por grandes empresas como a IBM, empreendi no ramo de tecnologia,
          e hoje dedico minha carreira à educação e ao desenvolvimento de jogos independentes.
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-xl border border-border bg-card/30"
            >
              <item.icon size={20} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold font-display gradient-text">{item.value}</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

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
