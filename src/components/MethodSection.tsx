import { motion } from "framer-motion";
import methodImg from "@/assets/method-planning.jpg";

const steps = [
  { number: "01", title: "Análise", description: "Estudo completo do perfil do investidor e objetivos patrimoniais." },
  { number: "02", title: "Estratégia", description: "Definição de portfólio com base em dados de mercado e projeções." },
  { number: "03", title: "Curadoria", description: "Seleção criteriosa de imóveis e empreendimentos de alto padrão." },
  { number: "04", title: "Gestão", description: "Acompanhamento contínuo e otimização do patrimônio imobiliário." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="relative py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 h-px w-12 bg-primary" />
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
              Nosso Método
            </p>
            <h2 className="mb-10 font-display text-3xl font-bold text-foreground md:text-4xl">
              Planejamento
              <br />
              com Precisão
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-6"
                >
                  <span className="font-display text-3xl font-bold text-primary/30">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm font-light text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={methodImg}
              alt="Blueprint arquitetônico sobre paisagem urbana"
              className="h-[550px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
