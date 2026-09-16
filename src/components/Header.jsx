import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao clicar em um link
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setShowContactDropdown(false);
  };

  return (
    <header className={`bty-header ${scrolled ? "bty-header--scrolled" : ""}`}>
      <div className="bty-header-inner">
        {/* Logotipo */}
        <a href="#" className="bty-logo" onClick={closeMenu}>
          <span className="bty-logo-title">LOGO</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="bty-nav-desktop" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#contato">Contato</a>
          <a href="#localizacao">Localização</a>
        </nav>

        {/* Ações de Contato Desktop */}
        <div className="bty-header-actions">
          <div className="bty-header-phone-group">
            <button
              type="button"
              className="bty-header-cta"
              onClick={() => setShowContactDropdown(!showContactDropdown)}
              aria-expanded={showContactDropdown}
              aria-label="Falar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="bty-icon-wa">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`bty-icon-arrow ${showContactDropdown ? "rotate" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown de telefones no desktop */}
            {showContactDropdown && (
              <div className="bty-header-dropdown">
                <div className="bty-dropdown-header">Escolha uma linha de atendimento:</div>
                <a
                  href="https://wa.me/5549988343100"
                  target="_blank"
                  rel="noreferrer"
                  className="bty-dropdown-item"
                  onClick={() => setShowContactDropdown(false)}
                >
                  <div className="bty-dropdown-dot" />
                  <div>
                    <strong>Atendimento</strong>
                    <span className="bty-dropdown-phone">(49) 98834-3100</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/5549999198033"
                  target="_blank"
                  rel="noreferrer"
                  className="bty-dropdown-item"
                  onClick={() => setShowContactDropdown(false)}
                >
                  <div className="bty-dropdown-dot" />
                  <div>
                    <strong>Atendimento</strong>
                    <span className="bty-dropdown-phone">(49) 99919-8033</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            className="bty-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`bty-burger-line ${mobileMenuOpen ? "open" : ""}`} />
            <span className={`bty-burger-line ${mobileMenuOpen ? "open" : ""}`} />
            <span className={`bty-burger-line ${mobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Menu Drawer Mobile */}
      <div className={`bty-mobile-menu ${mobileMenuOpen ? "bty-mobile-menu--open" : ""}`}>
        <nav className="bty-mobile-nav">
          <a href="#inicio" onClick={closeMenu}>
            <span>Início</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
          <a href="#contato" onClick={closeMenu}>
            <span>Contato</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
          <a href="#localizacao" onClick={closeMenu}>
            <span>Localização (Mapa)</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
        </nav>

        {/* Bloco de Atendimento Direto no Menu Mobile */}
        <div className="bty-mobile-contacts">
          <div className="bty-mobile-contacts-title">Atendimento Direto WhatsApp:</div>
          
          <a
            href="https://wa.me/5549988343100"
            target="_blank"
            rel="noreferrer"
            className="bty-mobile-contact-card"
          >
            <div className="bty-mobile-number">(49) 98834-3100</div>
            <span className="bty-mobile-cta-action">Chamar no WhatsApp &rarr;</span>
          </a>

          <a
            href="https://wa.me/5549999198033"
            target="_blank"
            rel="noreferrer"
            className="bty-mobile-contact-card"
          >
            <div className="bty-mobile-number">(49) 99919-8033</div>
            <span className="bty-mobile-cta-action">Chamar no WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
