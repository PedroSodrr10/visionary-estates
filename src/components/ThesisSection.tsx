import { motion } from "framer-motion";
import diffImg from "@/assets/differentials-abstract.jpg";

const pillars = [
  {
    title: "Estrutura acima da Estética",
    description: "Estruturamos para proteger o capital — e só operamos onde o racional resiste à análise objetiva. Sem exposição desnecessária.",
  },
  {
    title: "Capital como Responsabilidade",
    description: "Cada centavo alocado carrega o dever de retorno. Exposição financeira é medida com régua de risco assimétrico — não com otimismo.",
  },
  {
    title: "Lucro Real, Não Narrativo",
    description: "A única métrica que importa é o que retorna à conta do investidor. Selic + prêmio de risco. Com proteção. Sem maquiagem.",
  },
  {
    title: "Tempo como Ativo Estruturante",
    description: "Não vendemos velocidade. Vendemos clareza. Sabemos quando entrar, e principalmente: sabemos quando não. Bagagem de tempo é vantagem.",
  },
];

const ThesisSection = () => {
  return (
    <section id="tese" className="relative overflow-hidden py-24 md:py-32">
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
          className="mb-6 max-w-2xl"
        >
          <div className="mb-4 h-px w-12 bg-primary" />
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Tese de Investimento
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            A Estrutura Precede o Lucro
          </h2>
          <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
            A TE não desenvolve empreendimentos. Ela desenha estruturas onde o capital se multiplica com margem, liquidez e clareza. Nossa tese atua apenas onde há assimetria a favor do investidor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
            O mercado está cheio de produtos, mas vazio de diagnóstico. Entregamos operações com entrada justificada, retorno projetável e saída possível, mesmo em cenário adverso. A margem nasce antes do lançamento, não depois da venda.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-accent"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)' }}
            >
              <span className="mb-4 block font-display text-2xl font-bold text-primary/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-2xl border-l-2 border-primary/20 pl-6"
        >
          <p className="font-body text-sm font-light italic leading-relaxed text-muted-foreground">
            Essa tese serve a quem sabe que capital não se expõe onde há ruído. A quem prefere 3 negócios bem estruturados a 30 feitos às pressas. A quem busca retorno real com critério técnico, não promessas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThesisSection;
