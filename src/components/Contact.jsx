import React, { useState } from "react";

const CONTACT_DATA = {
  phone1: {
    number: "(49) 98834-3100",
    label: "Atendimento & Agendamentos",
    desc: "Linha direta para agendamento de horários, confirmações e atendimento personalizado.",
    rawNumber: "5549988343100",
    waLink: "https://wa.me/5549988343100?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.",
    telLink: "tel:+5549988343100"
  },
  phone2: {
    number: "(49) 99919-8033",
    label: "Recepção & Informações",
    desc: "Para tirar dúvidas, solicitar orientações, localização e informações gerais.",
    rawNumber: "5549999198033",
    waLink: "https://wa.me/5549999198033?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
    telLink: "tel:+5549999198033"
  },
  location: "Ao lado do Via Passarela",
  coordsDms: "27°13'44.6\"S 52°01'07.4\"W"
};

export default function Contact() {
  const [subject, setSubject] = useState("Agendamento de Horário");
  const [selectedPhone, setSelectedPhone] = useState("phone1");
  const [clientName, setClientName] = useState("");

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const phoneObj = CONTACT_DATA[selectedPhone];
    const greeting = clientName.trim() ? `Olá, me chamo ${clientName.trim()}!` : "Olá!";
    const msg = `${greeting} Gostaria de atendimento sobre: ${subject}.`;
    const fullUrl = `https://wa.me/${phoneObj.rawNumber}?text=${encodeURIComponent(msg)}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <section className="bty-contact-section" id="contato">
      <div className="bty-contact-container">
        {/* Cabeçalho da seção */}
        <div className="bty-section-header bty-contact-header">
          <span className="bty-section-eyebrow">Fale Conosco</span>
          <h2 className="bty-section-title">Canais de Atendimento Direto</h2>
          <p className="bty-section-subtitle">
            Entre em contato pelos nossos números oficiais de WhatsApp ou ligação telefônica.
            Estamos à disposição para lhe atender.
          </p>
        </div>

        {/* Destaque dos Dois Números Solicitados */}
        <div className="bty-phones-showcase">
          {/* Card Linha 1 */}
          <div className="bty-phone-card bty-phone-card--featured">
            <div className="bty-phone-badge">Linha 1 &bull; Atendimento Prioritário</div>
            <div className="bty-phone-header">
              <div className="bty-phone-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="bty-phone-title">{CONTACT_DATA.phone1.label}</h3>
                <a href={CONTACT_DATA.phone1.telLink} className="bty-phone-display">
                  {CONTACT_DATA.phone1.number}
                </a>
              </div>
            </div>

            <p className="bty-phone-desc">{CONTACT_DATA.phone1.desc}</p>

            <div className="bty-phone-actions">
              <a
                href={CONTACT_DATA.phone1.waLink}
                target="_blank"
                rel="noreferrer"
                className="bty-btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.761.884 2.8.884l.004-.001c3.181 0 5.766-2.587 5.766-5.769 0-3.18-2.585-5.767-5.774-5.767zm3.366 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.076-2.28-.581-1.89-1.045-2.73-2.607-2.825-2.734-.095-.127-.768-1.021-.768-1.948 0-.926.485-1.381.656-1.572.172-.19.376-.239.502-.239.127 0 .253.002.363.007.118.005.275-.045.43.329.16.386.545 1.332.593 1.43.048.098.08.214.015.342-.065.128-.098.208-.194.32-.095.113-.201.251-.287.337-.095.096-.195.2-.084.391.111.191.494.814 1.06 1.319.728.649 1.342.85 1.533.945.191.096.303.08.416-.048.112-.128.481-.56.61-.752.128-.192.257-.16.43-.096.173.064 1.096.517 1.285.612.189.096.315.143.362.223.047.08.047.464-.097.869z"/>
                </svg>
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={CONTACT_DATA.phone1.telLink}
                className="bty-btn-call"
                title="Ligar para linha 1"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Card Linha 2 */}
          <div className="bty-phone-card">
            <div className="bty-phone-badge">Linha 2 &bull; Informações Gerais</div>
            <div className="bty-phone-header">
              <div className="bty-phone-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h3 className="bty-phone-title">{CONTACT_DATA.phone2.label}</h3>
                <a href={CONTACT_DATA.phone2.telLink} className="bty-phone-display">
                  {CONTACT_DATA.phone2.number}
                </a>
              </div>
            </div>

            <p className="bty-phone-desc">{CONTACT_DATA.phone2.desc}</p>

            <div className="bty-phone-actions">
              <a
                href={CONTACT_DATA.phone2.waLink}
                target="_blank"
                rel="noreferrer"
                className="bty-btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.761.884 2.8.884l.004-.001c3.181 0 5.766-2.587 5.766-5.769 0-3.18-2.585-5.767-5.774-5.767zm3.366 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.076-2.28-.581-1.89-1.045-2.73-2.607-2.825-2.734-.095-.127-.768-1.021-.768-1.948 0-.926.485-1.381.656-1.572.172-.19.376-.239.502-.239.127 0 .253.002.363.007.118.005.275-.045.43.329.16.386.545 1.332.593 1.43.048.098.08.214.015.342-.065.128-.098.208-.194.32-.095.113-.201.251-.287.337-.095.096-.195.2-.084.391.111.191.494.814 1.06 1.319.728.649 1.342.85 1.533.945.191.096.303.08.416-.048.112-.128.481-.56.61-.752.128-.192.257-.16.43-.096.173.064 1.096.517 1.285.612.189.096.315.143.362.223.047.08.047.464-.097.869z"/>
                </svg>
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={CONTACT_DATA.phone2.telLink}
                className="bty-btn-call"
                title="Ligar para linha 2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>
        </div>

        {/* Informações de Localização e Envio Rápido */}
        <div className="bty-contact-bottom-grid">
          {/* Card de Localização Sintetizado */}
          <div className="bty-info-card">
            <h4 className="bty-info-card-title">Ponto de Referência & Localização</h4>

            <div className="bty-info-list">
              <div className="bty-info-item">
                <div className="bty-info-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.4" />
                  </svg>
                </div>
                <div>
                  <strong>Endereço / Referência</strong>
                  <span>{CONTACT_DATA.location}</span>
                  <small className="bty-info-note">Localizado ao lado do Via Passarela</small>
                </div>
              </div>

              <div className="bty-info-item">
                <div className="bty-info-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <strong>Coordenadas Geográficas (GPS)</strong>
                  <span className="bty-mono-coords">{CONTACT_DATA.coordsDms}</span>
                  <a href="#localizacao" className="bty-view-map-link">
                    Ver mapa interativo detalhado &darr;
                  </a>
                </div>
              </div>

              <div className="bty-info-item">
                <div className="bty-info-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Telefones Diretos</strong>
                  <span>{CONTACT_DATA.phone1.number} &bull; {CONTACT_DATA.phone2.number}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Interativo: Mensagem Direta via WhatsApp */}
          <div className="bty-scheduler-card">
            <h4 className="bty-scheduler-title">Iniciar Conversa no WhatsApp</h4>
            <p className="bty-scheduler-desc">
              Escolha a linha e envie uma mensagem pré-formatada com apenas um clique.
            </p>

            <form onSubmit={handleQuickWhatsApp} className="bty-scheduler-form">
              <div className="bty-form-group">
                <label htmlFor="client-name">Seu Nome (opcional):</label>
                <input
                  id="client-name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bty-form-input"
                />
              </div>

              <div className="bty-form-group">
                <label htmlFor="service-select">Assunto do Atendimento:</label>
                <select
                  id="service-select"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bty-form-select"
                >
                  <option value="Agendamento de Horário">Agendamento de Horário</option>
                  <option value="Dúvidas e Informações Gerais">Dúvidas e Informações Gerais</option>
                  <option value="Valores e Tratamentos">Valores e Tratamentos</option>
                  <option value="Como Chegar / Localização">Como Chegar / Localização</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>

              <div className="bty-form-group">
                <label>Enviar para qual linha?</label>
                <div className="bty-phone-selector-radios">
                  <label className={`bty-radio-label ${selectedPhone === "phone1" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="phone"
                      value="phone1"
                      checked={selectedPhone === "phone1"}
                      onChange={() => setSelectedPhone("phone1")}
                    />
                    <span>
                      <strong>(49) 98834-3100</strong>
                      <small>Agendamentos</small>
                    </span>
                  </label>

                  <label className={`bty-radio-label ${selectedPhone === "phone2" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="phone"
                      value="phone2"
                      checked={selectedPhone === "phone2"}
                      onChange={() => setSelectedPhone("phone2")}
                    />
                    <span>
                      <strong>(49) 99919-8033</strong>
                      <small>Recepção</small>
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="bty-scheduler-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.761.884 2.8.884l.004-.001c3.181 0 5.766-2.587 5.766-5.769 0-3.18-2.585-5.767-5.774-5.767zm3.366 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.076-2.28-.581-1.89-1.045-2.73-2.607-2.825-2.734-.095-.127-.768-1.021-.768-1.948 0-.926.485-1.381.656-1.572.172-.19.376-.239.502-.239.127 0 .253.002.363.007.118.005.275-.045.43.329.16.386.545 1.332.593 1.43.048.098.08.214.015.342-.065.128-.098.208-.194.32-.095.113-.201.251-.287.337-.095.096-.195.2-.084.391.111.191.494.814 1.06 1.319.728.649 1.342.85 1.533.945.191.096.303.08.416-.048.112-.128.481-.56.61-.752.128-.192.257-.16.43-.096.173.064 1.096.517 1.285.612.189.096.315.143.362.223.047.08.047.464-.097.869z"/>
                </svg>
                <span>Conversar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
