import TELogo from "@/components/TELogo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-8 md:flex-row md:px-16">
        <div className="flex items-center gap-6">
          <TELogo className="h-10 w-auto text-foreground" />
          <div className="hidden h-8 w-px bg-border md:block" />
          <p className="hidden font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
            Técnica → Estratégia → Execução
          </p>
        </div>
        <p className="font-body text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} TE Propriedades. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
