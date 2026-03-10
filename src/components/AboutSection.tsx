import { motion } from "framer-motion";
import aboutImg from "@/assets/about-architecture.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={aboutImg}
                alt="Arquitetura moderna em vidro com linhas geométricas"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 h-px w-12 bg-primary" />
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
              Sobre nós
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Excelência em
              <br />
              Patrimônio Imobiliário
            </h2>
            <p className="mb-6 font-body text-base font-light leading-relaxed text-muted-foreground">
              A TE Propriedades atua no mercado imobiliário de alto padrão com foco em planejamento patrimonial estratégico. Combinamos análise criteriosa, visão de mercado e arquitetura contemporânea para construir portfólios sólidos e rentáveis.
            </p>
            <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
              Nosso compromisso é com a construção de valor a longo prazo, oferecendo aos nossos clientes segurança, sofisticação e resultados consistentes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
