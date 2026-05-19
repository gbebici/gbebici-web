import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-28 md:py-36 border-t border-border">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Contato</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Vamos criar algo <span className="italic text-gold">inesquecível</span>
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-10 max-w-md mx-auto">
            Entre em contato para consultar a disponibilidade e descobrirmos qual a apresentação perfeita para seu evento.
          </p>

          <a
            href="https://wa.me/5527995096289?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20evento%20particular!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-gold text-primary-foreground font-sans font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-100 transition-all duration-300 mb-12"
          >
            Falar pelo WhatsApp
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://www.instagram.com/gbebici/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:+5527995096289"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Location */}
          <p className="text-muted-foreground text-xs tracking-wide">
            Vitória · ES · Brasil
          </p>
          <p className="text-muted-foreground/50 text-[10px] mt-4 tracking-wide">
            © {new Date().getFullYear()} Gabriel Bebici. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
