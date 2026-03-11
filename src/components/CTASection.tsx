import { motion } from "framer-motion";
import ctaImg from "@/assets/cta-sunset.jpg";

const CTASection = () => {
  return (
    <section id="contato" className="relative h-[70vh] overflow-hidden">
      <img
        src={ctaImg}
        alt="Skyline ao pôr do sol com edifícios iluminados"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-primary" />
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Nosso trabalho não é
            <br />
            <span className="text-gradient-accent">acelerar ciclos</span>
          </h2>
          <p className="mb-10 font-body text-base font-light text-muted-foreground">
            É construir margens. É proteger patrimônio. Se o objetivo é preservar, multiplicar e sair com controle, a TE é a estrutura que organiza esse caminho.
          </p>
          <a
            href="mailto:contato@tepropriedades.com.br"
            className="inline-block border border-accent px-10 py-4 font-body text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Iniciar Conversa
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
