import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bty-footer">
      <div className="bty-footer-top">
        <div className="bty-footer-col bty-footer-brand">
          <a href="#" className="bty-footer-logo" onClick={scrollToTop}>
            <span className="bty-footer-logo-title">LOGO</span>
          </a>
          <p className="bty-footer-tagline">
            Atendimento com atenção, pontualidade e dedicação.
            Agende seu horário ou tire suas dúvidas diretamente em nosso WhatsApp.
          </p>
        </div>

        <div className="bty-footer-col">
          <h4 className="bty-footer-heading">Navegação</h4>
          <ul className="bty-footer-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
            <li><a href="#localizacao">Nossa Localização</a></li>
          </ul>
        </div>

        <div className="bty-footer-col">
          <h4 className="bty-footer-heading">Canais de Atendimento</h4>
          <ul className="bty-footer-contact-list">
            <li>
              <span className="bty-footer-sublabel">Atendimento & Agendamentos:</span>
              <a href="https://wa.me/5549988343100" target="_blank" rel="noreferrer">
                (49) 98834-3100 (WhatsApp)
              </a>
            </li>
            <li>
              <span className="bty-footer-sublabel">Recepção & Informações:</span>
              <a href="https://wa.me/5549999198033" target="_blank" rel="noreferrer">
                (49) 99919-8033 (WhatsApp)
              </a>
            </li>
          </ul>
        </div>

        <div className="bty-footer-col">
          <h4 className="bty-footer-heading">Localização</h4>
          <p className="bty-footer-text">
            <strong>Ao lado do Via Passarela</strong><br />
            GPS: 27°13'44.6"S 52°01'07.4"W
          </p>
          <div className="bty-footer-social">
            <a
              href="https://www.google.com/maps/search/?api=1&query=-27.229056,-52.018722"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir no Google Maps"
              className="bty-social-link"
              title="Google Maps"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
            <a
              href="https://wa.me/5549988343100"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp (49) 98834-3100"
              className="bty-social-link"
              title="WhatsApp Linha 1"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5549999198033"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp (49) 99919-8033"
              className="bty-social-link"
              title="WhatsApp Linha 2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bty-footer-bottom">
        <span>&copy; {year} Todos os direitos reservados.</span>
        <button type="button" onClick={scrollToTop} className="bty-footer-top-btn" aria-label="Voltar ao topo">
          <span>Voltar ao topo</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
