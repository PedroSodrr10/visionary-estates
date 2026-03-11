import { motion } from "framer-motion";
import methodImg from "@/assets/method-planning.jpg";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Silencioso",
    description: "Escuta técnica que identifica assimetrias de tempo, capital e demanda. Somente entra no pipeline o que possui justificativa objetiva de entrada, racionalidade de saída e margem possível.",
  },
  {
    number: "02",
    title: "Engenharia de Estrutura",
    description: "Travamento de risco com blindagem jurídica, alocação proporcional com capital segregado e gatilhos de desmobilização. O risco existe, mas está travado.",
  },
  {
    number: "03",
    title: "Curadoria e Margem",
    description: "Só se avança no que resiste ao ciclo. Liquidez real como condição de entrada, margem defensável antes da comercialização e exclusão radical de produtos sem tese de absorção.",
  },
  {
    number: "04",
    title: "Execução com Precisão",
    description: "Operação com invisibilidade operacional. Controle integral de exposição e tempo. Governança como eficiência. Cada movimento responde a premissas estruturadas.",
  },
  {
    number: "05",
    title: "Saída Planejada",
    description: "O lucro não é surpresa: é consequência lógica da estrutura. Retorno líquido ao investidor, preservação de patrimônio e recorrência de performance pelo modelo — não por sorte.",
  },
];

const MethodSection = () => {
  return (
    <section id="framework" className="relative py-24 md:py-32">
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
              Framework Operacional
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              A Estrutura Invisível
              <br />
              da Decisão Patrimonial
            </h2>
            <p className="mb-10 font-body text-sm font-light text-muted-foreground">
              Um sistema de decisão embasado em racionalidade silenciosa, escuta técnica e estrutura invisível.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
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
            className="relative hidden md:block"
          >
            <img
              src={methodImg}
              alt="Blueprint arquitetônico sobre paisagem urbana"
              className="h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
