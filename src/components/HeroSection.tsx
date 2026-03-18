import { motion } from "framer-motion";
import heroImg from "@/assets/hero-skyline.jpg";
import TELogo from "@/components/TELogo";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Skyline urbano sofisticado ao entardecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overlay-dark" />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-16 md:py-6 bg-background/55 md:bg-background/80 backdrop-blur-md border-b border-border/50">
        <TELogo className="h-12 w-auto text-foreground" />
        <div className="hidden gap-8 font-body text-sm tracking-widest uppercase md:flex">
          <a href="#missao" className="text-muted-foreground transition-colors hover:text-primary">Missão</a>
          <a href="#principios" className="text-muted-foreground transition-colors hover:text-primary">Princípios</a>
          <a href="#framework" className="text-muted-foreground transition-colors hover:text-primary">Framework</a>
          <a href="#tese" className="text-muted-foreground transition-colors hover:text-primary">Tese</a>
          <a href="#contato" className="text-muted-foreground transition-colors hover:text-primary">Contato</a>
        </div>
      </nav>

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/90">
              Técnica · Estratégia · Execução
            </span>
          </div>

          <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Investir com critério
            <br />
            <span className="text-primary md:text-gradient-accent">é investir com segurança</span>
          </h1>

          <p className="mb-4 max-w-lg font-display text-lg font-medium text-primary md:text-xl">
            Cada imóvel tem um caminho. Nós mapeamos o seu.
          </p>

          <p className="mb-10 max-w-lg font-body text-base font-light leading-relaxed text-muted-foreground/95">
            Transformamos imóveis em estratégia patrimonial real — com técnica, compromisso e bagagem de tempo.
          </p>

          <a
            href="#contato"
            className="inline-block border border-primary/70 px-8 py-3 font-body text-sm uppercase tracking-widest text-foreground md:text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Iniciar Conversa
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-primary/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
