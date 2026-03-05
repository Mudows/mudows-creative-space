import { Github, Linkedin, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> Diego M. Cezar © {new Date().getFullYear()}
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/Mudows" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dmcezar" },
            { icon: Instagram, href: "https://www.instagram.com/diego.mcezar/" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          Rio de Janeiro, Brasil 🇧🇷
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
