import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Instrutor de Game Design",
    company: "Senac RJ",
    period: "Atual",
    description:
      "Leciona disciplinas de Game Design, desenvolvimento de jogos com Unity, Godot e Construct 3, e fundamentos de programação para jogos. Mentorias de projetos de conclusão de curso.",
    current: true,
  },
  {
    role: "Fundador & Game Designer",
    company: "Serratroz Game Studio",
    period: "Projeto Independente",
    description:
      "Estúdio indie focado em criação de jogos autorais. Prototipagem, design de mecânicas, level design e desenvolvimento com engines diversas.",
    current: true,
  },
  {
    role: "Técnico / Franqueado",
    company: "Conserta Smart",
    period: "Experiência Anterior",
    description:
      "Atuação em franquia de manutenção e assistência técnica de dispositivos móveis e eletrônicos.",
    current: false,
  },
  {
    role: "Analista de Reporting",
    company: "IBM",
    period: "5 anos",
    description:
      "Atuação na área de Reporting, análise de dados e geração de relatórios corporativos para grandes clientes. Experiência com ferramentas de BI e processos empresariais.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest">
            &gt; experiencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Trajetória <span className="gradient-text">Profissional</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6 md:gap-12`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 md:mt-0 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                  }`}
                >
                  <div className="p-5 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:box-glow transition-all duration-500">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/15 text-primary border border-primary/30">
                          Atual
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                    <p className="font-mono text-sm text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
