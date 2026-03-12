const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-8 md:flex-row md:px-16">
        <img 
          src="/te-logo.svg" 
          alt="TE Propriedades" 
          className="h-12 w-auto"
        />
        <p className="font-body text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} TE Propriedades. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
