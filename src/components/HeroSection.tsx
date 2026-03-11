import { motion } from "framer-motion";
import heroImg from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Skyline urbano sofisticado ao entardecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overlay-dark" />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="font-display text-2xl font-bold tracking-wider text-foreground">
          TE <span className="text-gradient-accent">Propriedades</span>
        </div>
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
          <div className="mb-4 h-px w-16 bg-primary" />
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Estrutura que
            <br />
            <span className="text-gradient-accent">atravessa o ciclo</span>
          </h1>
          <p className="mb-10 max-w-lg font-body text-lg font-light leading-relaxed text-muted-foreground">
            Em um mercado movido por narrativas, a TE nasceu para escutar o que o mercado realmente absorve — e estruturar o caminho entre capital e retorno com lógica, não com opinião.
          </p>
          <a
            href="#contato"
            className="inline-block border border-accent px-8 py-3 font-body text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
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
