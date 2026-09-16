import React from "react";

export default function Hero() {
  return (
    <section className="bty-hero" id="inicio">
      <div className="bty-hero-bg-glow" aria-hidden="true" />

      <div className="bty-hero-content">
        <h1 className="bty-hero-title">
          Cuidado que se vê na pele.
        </h1>

        <p className="bty-hero-desc">
          Um espaço dedicado a tratamentos de estética facial e corporal,
          pensado para quem busca resultado com calma e atenção — sem pressa
          e sem excessos.
        </p>

        {/* CTAs principais */}
        <div className="bty-hero-ctas">
          <a className="bty-cta-primary" href="#contato">
            <span>Agendar avaliação</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Atalho rápido para os dois telefones */}
        <div className="bty-hero-quick-phones">
          <span className="bty-quick-label">Atendimento rápido:</span>
          <div className="bty-quick-phone-pills">
            <a
              href="https://wa.me/5549988343100"
              target="_blank"
              rel="noreferrer"
              className="bty-quick-pill"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>(49) 98834-3100</span>
            </a>

            <a
              href="https://wa.me/5549999198033"
              target="_blank"
              rel="noreferrer"
              className="bty-quick-pill"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>(49) 99919-8033</span>
            </a>
          </div>
        </div>
      </div>

      {/* Arte visual refinada */}
      <div className="bty-hero-art" aria-hidden="true">
        <div className="bty-art-card">
          <svg viewBox="0 0 420 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="bty-art-svg">
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C98F79" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#A7AE86" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#62734C" stopOpacity="0.5" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DFC3A2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C98F79" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="210" cy="230" r="180" stroke="rgba(98, 115, 76, 0.18)" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="210" cy="230" r="140" fill="url(#glowGrad)" />
            <circle cx="210" cy="190" r="80" fill="url(#sunGlow)" />
            <path
              d="M170 140 Q210 90 250 140 T270 240 Q250 330 210 330 T150 240 Q150 170 170 140Z"
              fill="rgba(253, 251, 247, 0.85)"
              stroke="#62734C"
              strokeWidth="1.6"
            />
            <path d="M210 320 C210 270 200 220 230 180" stroke="#62734C" strokeWidth="2" strokeLinecap="round" />
            <path d="M210 260 C230 250 245 235 240 220 C220 225 215 245 210 260 Z" fill="#A7AE86" opacity="0.85" />
            <path d="M208 285 C190 280 178 265 182 250 C200 255 204 272 208 285 Z" fill="#C98F79" opacity="0.75" />
          </svg>
        </div>
      </div>
    </section>
  );
}
