import { motion } from "framer-motion";
import aboutImg from "@/assets/about-architecture.jpg";

const AboutSection = () => {
  return (
    <section id="missao" className="relative py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-primary rotate-[-45deg]" />
            <div className="h-px w-8 bg-primary" />
            <div className="h-px w-8 bg-primary rotate-[45deg]" />
          </div>
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Quem somos
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Técnica e compromisso como método
          </h2>
        </motion.div>

        <div className="grid items-start gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">Missão</h3>
              <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
                Sustentar decisões patrimoniais com critério técnico, estrutura e transparência. Transformamos imóveis em decisões de alocação coerentes com o tempo, o capital e o risco de quem opera com patrimônio real.
              </p>
              <p className="mt-4 font-display text-sm font-semibold text-primary">
                A gente entrega o que faz sentido: técnica e compromisso.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={aboutImg}
                alt="Arquitetura moderna em vidro com linhas geométricas"
                className="h-[350px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
              {/* 45° corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-4 left-4 w-8 h-px bg-primary rotate-[-45deg] origin-left" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">Visão</h3>
              <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
                Ser a referência estrutural para quem aloca capital em imóveis com critério de entrada, projeção de saída e preservação de margem — mesmo sob pressão de ciclo.
              </p>
              <p className="mt-4 font-display text-sm font-semibold text-primary">
                Liquidez começa no planejamento.
              </p>
            </div>
            <div className="border border-border bg-card/50 p-8">
              <p className="mb-4 font-body text-sm font-light italic leading-relaxed text-muted-foreground">
                "Não buscamos escala, visibilidade ou protagonismo de mercado. Somos método, não estética. Somos estrutura, não símbolo. É por isso que atravessamos o tempo."
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-primary/50 rotate-[-45deg]" />
                  <span className="font-body text-xs uppercase tracking-widest text-primary">Resultado, não vaidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-primary/50 rotate-[-45deg]" />
                  <span className="font-body text-xs uppercase tracking-widest text-primary">Coerência acima de performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-primary/50 rotate-[-45deg]" />
                  <span className="font-body text-xs uppercase tracking-widest text-primary">Retorno líquido, não narrativa</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
