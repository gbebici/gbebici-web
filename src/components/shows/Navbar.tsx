"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Formatos", href: "#formatos" },
    { label: "Repertório", href: "#repertorio" },
    { label: "Vídeo", href: "#video" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    // Injetando o escopo aqui para isolar todo o comportamento visual da Navbar
    <nav className="gabriel-bebici fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="container px-6 pt-4">
        <div
          className={`flex h-14 items-center justify-between px-4 md:px-6 transition-all duration-500 ${scrolled ? "rounded-full border border-border/80 bg-background/55 backdrop-blur-sm" : ""
            }`}
        >
          {/* Ajustado de font-serif para font-serif-display para puxar a Playfair Display */}
          <a href="#hero" className="font-serif-display text-lg tracking-wide text-gold">
            GB
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-xs tracking-[0.15em] uppercase transition-colors duration-300 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5527995096289?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20evento%20particular!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-xs tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-300 font-semibold"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;