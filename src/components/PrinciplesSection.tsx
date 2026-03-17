import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const principles = [
  {
    id: "01",
    title: "Clareza Estrutural sobre Tempo, Capital e Exposição",
    summary: "Quanto capital será exposto? Por quanto tempo? Com qual rota de saída? A TE só se move quando há resposta precisa. Tempo é custo. Exposição sem retorno previsível é desordem.",
  },
  {
    id: "02",
    title: "Margem como Engenharia, Não como Aposta",
    summary: "Margem não nasce do otimismo, mas da estrutura. É resultado da leitura assimétrica do terreno, do ciclo, do funding ou da execução.",
  },
  {
    id: "03",
    title: "Risco só com Arquitetura de Travamento",
    summary: "O risco não é evitado, é travado. Blindagem jurídica, simulação de saída forçada e definição do ponto técnico de não retorno — com defesas acionadas.",
  },
  {
    id: "04",
    title: "Retorno como Consequência, Não Narrativa",
    summary: "O lucro é efeito colateral da engenharia. Não se vende uma ideia — se estrutura uma operação onde tempo, capital e mercado convergem.",
  },
  {
    id: "05",
    title: "Governança com Precisão, Não com Ritual",
    summary: "Governança é eficiência decisória. Relatórios orientam ação. Reuniões destravam margem. Tempo desperdiçado é margem que evapora.",
  },
  {
    id: "06",
    title: "Remuneração Derivada da Lógica do Negócio",
    summary: "Cada projeto tem engenharia própria. O valor extraído é função da complexidade estrutural, risco absorvido, tempo encurtado e patrimônio criado por técnica.",
  },
  {
    id: "07",
    title: "Liquidez como Condição de Entrada",
    summary: "Todo projeto nasce com plano de liquidez que resiste à oscilação do ciclo. A TE só entra quando sabe como sair — com margem ou proteção.",
  },
  {
    id: "08",
    title: "Curadoria Estrita",
    summary: "Não se empilham projetos por vaidade. Cada um é uma tese: ou tem estrutura clara e margem defensável, ou não entra.",
  },
  {
    id: "09",
    title: "Técnica Invisível como Vantagem Estrutural",
    summary: "Diagnóstico técnico, engenharia de estruturação e capacidade de ler o mercado sem se distrair com euforia. É nela que o retorno nasce.",
  },
  {
    id: "10",
    title: "O Valor Real Está Onde o Ruído Não Chega",
    summary: "A TE opera com escuta objetiva. Lê o que o mercado absorve — e estrutura o caminho até lá com controle. O plano sobrevive porque nasce do real.",
  },
];

const PrinciplesSection = () => {
  return (
    <section id="principios" className="relative py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 h-px w-12 bg-primary" />
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Princípios Inegociáveis
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que nos governa
          </h2>
          <p className="font-body text-base font-light text-muted-foreground">
            A TE não opera para impressionar. Opera para preservar, multiplicar e entregar com critério.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {principles.map((p) => (
              <AccordionItem key={p.id} value={p.id} className="border-border">
                <AccordionTrigger className="font-body text-sm font-normal text-foreground hover:no-underline hover:text-primary py-5">
                  <span className="flex items-center gap-4">
                    <span className="font-display text-lg font-bold text-primary/40">{p.id}</span>
                    <span>{p.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm font-light leading-relaxed text-muted-foreground pl-12">
                  {p.summary}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
