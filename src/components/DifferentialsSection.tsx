import { motion } from "framer-motion";
import { Shield, TrendingUp, Eye, Building2 } from "lucide-react";
import diffImg from "@/assets/differentials-abstract.jpg";

const differentials = [
  {
    icon: Shield,
    title: "Segurança Patrimonial",
    description: "Análise de risco e proteção para investimentos de longo prazo.",
  },
  {
    icon: TrendingUp,
    title: "Rentabilidade Estratégica",
    description: "Seleção criteriosa de ativos com alto potencial de valorização.",
  },
  {
    icon: Eye,
    title: "Visão de Mercado",
    description: "Inteligência de dados e tendências do mercado imobiliário.",
  },
  {
    icon: Building2,
    title: "Alto Padrão",
    description: "Foco exclusivo em empreendimentos premium e arquitetura contemporânea.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={diffImg}
        alt="Linhas arquitetônicas minimalistas"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="container relative z-10 mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-primary" />
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Por que a TE Propriedades
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-accent"
            >
              <item.icon className="mb-5 h-8 w-8 text-primary" />
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
