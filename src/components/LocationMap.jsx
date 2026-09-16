import React, { useState } from "react";

const LOCATION = {
  name: "Ao lado do Via Passarela",
  coordsDms: "27°13'44.6\"S 52°01'07.4\"W",
  lat: -27.229056,
  lng: -52.018722,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-27.229056,-52.018722",
  googleEarthUrl: "https://earth.google.com/web/search/-27.229056,-52.018722",
  wazeUrl: "https://waze.com/ul?ll=-27.229056,-52.018722&navigate=yes",
  osmUrl: "https://www.openstreetmap.org/?mlat=-27.229056&mlon=-52.018722#map=17/-27.229056/-52.018722",
  googleEmbedUrl: "https://maps.google.com/maps?q=-27.229056,-52.018722&hl=pt-BR&z=17&output=embed",
  osmEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-52.022722%2C-27.231056%2C-52.014722%2C-27.227056&layer=mapnik&marker=-27.229056%2C-52.018722"
};

export default function LocationMap() {
  const [mapProvider, setMapProvider] = useState("google"); // "google" | "osm"
  const [copied, setCopied] = useState(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(LOCATION.coordsDms);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bty-map-section" id="localizacao">
      <div className="bty-map-container">
        {/* Cabeçalho da Seção de Localização */}
        <div className="bty-section-header">
          <span className="bty-section-eyebrow">Como Chegar</span>
          <h2 className="bty-section-title">Nossa Localização</h2>
          <p className="bty-section-subtitle">
            Localização privilegiada e de fácil acesso, <strong>ao lado do Via Passarela</strong>.
            Confira o mapa interativo abaixo ou abra diretamente no seu aplicativo de navegação favorito.
          </p>
        </div>

        {/* Card Principal do Mapa */}
        <div className="bty-map-wrapper">
          {/* Barra de Controles e Links Rápidos */}
          <div className="bty-map-toolbar">
            <div className="bty-map-info-pill">
              <span className="bty-map-pin-pulse" />
              <div>
                <strong>{LOCATION.name}</strong>
                <span className="bty-map-coords-text">{LOCATION.coordsDms}</span>
              </div>
            </div>

            {/* Alternador de Provedor do Mapa (Google Maps / OpenStreetMap) */}
            <div className="bty-map-provider-toggle" role="tablist" aria-label="Visualização do Mapa">
              <button
                type="button"
                className={`bty-provider-btn ${mapProvider === "google" ? "active" : ""}`}
                onClick={() => setMapProvider("google")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Google Maps</span>
              </button>

              <button
                type="button"
                className={`bty-provider-btn ${mapProvider === "osm" ? "active" : ""}`}
                onClick={() => setMapProvider("osm")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span>OpenStreetMap</span>
              </button>
            </div>
          </div>

          {/* Iframe Interativo do Mapa */}
          <div className="bty-map-frame-container">
            <iframe
              title={`Mapa interativo mostrando localização ${LOCATION.name}`}
              src={mapProvider === "google" ? LOCATION.googleEmbedUrl : LOCATION.osmEmbedUrl}
              className="bty-map-iframe"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Botões de Ação Externa (Google Maps, Waze, Google Earth, Copiar) */}
          <div className="bty-map-actions-bar">
            <a
              href={LOCATION.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bty-map-action-btn bty-map-btn--google"
              title="Abrir rota no Google Maps"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Abrir no Google Maps</span>
            </a>

            <a
              href={LOCATION.wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="bty-map-action-btn bty-map-btn--waze"
              title="Traçar rota no Waze"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.43 12.98c-.13-.42-.31-.82-.54-1.18-.74-1.19-1.92-2.03-3.29-2.33-.27-.06-.55-.1-.84-.11-1.04-.04-2.04.28-2.87.89-.5.37-.91.85-1.22 1.4-.41-.12-.85-.18-1.3-.18-2.6 0-4.73 2.02-4.91 4.58-.08 1.15.28 2.27.99 3.16.71.9 1.74 1.48 2.89 1.62.24.03.48.04.72.04 1.25 0 2.41-.45 3.32-1.22.42.36.93.63 1.5.76.24.06.49.09.74.09 1.34 0 2.58-.65 3.34-1.74.52-.75.8-1.65.8-2.58 0-1.12-.41-2.2-1.13-3.03zm-7.66 3.75c-.39 0-.71-.32-.71-.71s.32-.71.71-.71.71.32.71.71-.32.71-.71.71zm3.8 0c-.39 0-.71-.32-.71-.71s.32-.71.71-.71.71.32.71.71-.32.71-.71.71z" />
              </svg>
              <span>Traçar rota no Waze</span>
            </a>

            <a
              href={LOCATION.googleEarthUrl}
              target="_blank"
              rel="noreferrer"
              className="bty-map-action-btn bty-map-btn--earth"
              title="Visualizar em 3D no Google Earth"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Ver no Google Earth</span>
            </a>

            <button
              type="button"
              onClick={handleCopyCoords}
              className={`bty-map-action-btn bty-map-btn--copy ${copied ? "copied" : ""}`}
              title="Copiar coordenadas geográficas"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {copied ? (
                  <polyline points="20 6 9 17 4 12" />
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
              <span>{copied ? "Coordenadas Copiadas!" : "Copiar Coordenadas"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
