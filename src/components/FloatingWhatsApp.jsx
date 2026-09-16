import React, { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bty-floating-wa-container">
      {/* Popover de escolha de número */}
      {isOpen && (
        <div className="bty-floating-popover">
          <div className="bty-popover-header">
            <div className="bty-popover-title-row">
              <span className="bty-popover-badge">Online</span>
              <button
                type="button"
                className="bty-popover-close"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar janela"
              >
                &times;
              </button>
            </div>
            <h4>Iniciar Conversa</h4>
            <p>Escolha a linha de atendimento para falar conosco agora:</p>
          </div>

          <div className="bty-popover-body">
            <a
              href="https://wa.me/5549988343100?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noreferrer"
              className="bty-popover-option"
              onClick={() => setIsOpen(false)}
            >
              <div className="bty-popover-opt-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="bty-popover-opt-info">
                <strong>Agendamentos & Avaliações</strong>
                <span className="bty-popover-phone">(49) 98834-3100</span>
                <span className="bty-popover-sub">Resposta em poucos minutos</span>
              </div>
            </a>

            <a
              href="https://wa.me/5549999198033?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noreferrer"
              className="bty-popover-option"
              onClick={() => setIsOpen(false)}
            >
              <div className="bty-popover-opt-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="bty-popover-opt-info">
                <strong>Recepção & Informações</strong>
                <span className="bty-popover-phone">(49) 99919-8033</span>
                <span className="bty-popover-sub">Tire suas dúvidas</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        type="button"
        className="bty-floating-wa-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Atendimento rápido via WhatsApp"
        aria-expanded={isOpen}
      >
        <span className="bty-floating-pulse" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="bty-floating-wa-icon">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.761.884 2.8.884l.004-.001c3.181 0 5.766-2.587 5.766-5.769 0-3.18-2.585-5.767-5.774-5.767zm3.366 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.076-2.28-.581-1.89-1.045-2.73-2.607-2.825-2.734-.095-.127-.768-1.021-.768-1.948 0-.926.485-1.381.656-1.572.172-.19.376-.239.502-.239.127 0 .253.002.363.007.118.005.275-.045.43.329.16.386.545 1.332.593 1.43.048.098.08.214.015.342-.065.128-.098.208-.194.32-.095.113-.201.251-.287.337-.095.096-.195.2-.084.391.111.191.494.814 1.06 1.319.728.649 1.342.85 1.533.945.191.096.303.08.416-.048.112-.128.481-.56.61-.752.128-.192.257-.16.43-.096.173.064 1.096.517 1.285.612.189.096.315.143.362.223.047.08.047.464-.097.869z"/>
        </svg>
        <span className="bty-floating-label">Falar Conosco</span>
      </button>
    </div>
  );
}
