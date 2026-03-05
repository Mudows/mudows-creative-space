import { motion } from "framer-motion";
import avatarImg from "@/assets/diego-avatar.jpg";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-glow box-glow">
            <img src={avatarImg} alt="Diego M. Cezar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase">
            &gt; hello_world
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
            Diego M. <span className="gradient-text">Cezar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Game Designer · Front-End Developer · Instructor
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground max-w-lg leading-relaxed"
        >
          Instrutor de Game Design no Senac RJ. Apaixonado por criar experiências 
          interativas e compartilhar conhecimento.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Mudows", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dmcezar", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/diego.mcezar/", label: "Instagram" },
            { icon: Mail, href: "mailto:contato@diegocezar.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-lg border border-border bg-secondary/50 text-muted-foreground
                         hover:text-primary hover:border-primary/50 hover:box-glow
                         transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
