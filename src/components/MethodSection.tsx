import { motion } from "framer-motion";
import methodImg from "@/assets/method-planning.jpg";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Técnico",
    description: "Análise objetiva de tempo, capital e demanda. Só entra no pipeline o que possui justificativa de entrada, rota de saída e margem defensável.",
  },
  {
    number: "02",
    title: "Engenharia de Estrutura",
    description: "Travamento de risco com blindagem jurídica, alocação proporcional com capital segregado e gatilhos de desmobilização definidos.",
  },
  {
    number: "03",
    title: "Curadoria e Margem",
    description: "Liquidez real como condição de entrada. Margem defensável antes da comercialização. Exclusão de produtos sem tese de absorção comprovada.",
  },
  {
    number: "04",
    title: "Execução com Precisão",
    description: "Controle integral de exposição e tempo. Governança como eficiência decisória. Cada movimento responde a premissas estruturadas.",
  },
  {
    number: "05",
    title: "Saída Planejada",
    description: "Retorno líquido ao investidor, preservação de patrimônio e recorrência de performance pelo modelo — não por sorte. O lucro é consequência da estrutura.",
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
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-primary rotate-[-45deg] origin-left" />
              <div className="h-px w-8 bg-primary" />
            </div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
              Framework Operacional
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              A forma segue
              <br />
              a função
            </h2>
            <p className="mb-10 font-body text-sm font-light text-muted-foreground">
              Um sistema de decisão objetivo, construído sobre critério técnico e senioridade operacional.
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
                  <div className="flex flex-col items-center">
                    <span className="font-display text-2xl font-bold text-primary/30">
                      {step.number}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
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
            {/* 45° corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-6 right-6 w-10 h-px bg-primary rotate-[45deg]" />
              <div className="absolute top-6 right-6 w-px h-10 bg-primary" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20">
              <div className="absolute bottom-6 left-6 w-10 h-px bg-primary rotate-[45deg]" />
              <div className="absolute bottom-6 left-6 w-px h-10 bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
