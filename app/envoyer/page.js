"use client";

import { useState } from "react";

function FranceFlag({ width = 30, height = 20 }) {
  return (
    <svg
      viewBox="0 0 3 2"
      width={width}
      height={height}
      aria-label="Drapeau de la France"
      style={{
        display: "block",
        flexShrink: 0,
        borderRadius: "3px",
        boxShadow: "0 3px 10px rgba(0,0,0,.35)",
      }}
    >
      <rect x="0" y="0" width="1" height="2" fill="#002395" />
      <rect x="1" y="0" width="1" height="2" fill="#ffffff" />
      <rect x="2" y="0" width="1" height="2" fill="#ed2939" />
    </svg>
  );
}

function CongoFlag({ width = 30, height = 20 }) {
  return (
    <svg
      viewBox="0 0 3 2"
      width={width}
      height={height}
      aria-label="Drapeau de la République du Congo"
      style={{
        display: "block",
        flexShrink: 0,
        borderRadius: "3px",
        boxShadow: "0 3px 10px rgba(0,0,0,.35)",
      }}
    >
      <rect x="0" y="0" width="3" height="2" fill="#009543" />
      <polygon
        points="0.65,2 1.35,2 2.35,0 1.65,0"
        fill="#fbde4a"
      />
      <polygon
        points="1.35,2 3,2 3,0 2.35,0"
        fill="#dc241f"
      />
    </svg>
  );
}

function PremiumGlobe() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        width: "350px",
        maxWidth: "76vw",
        aspectRatio: "1",
        filter:
          "drop-shadow(0 0 34px rgba(40, 96, 154, 0.35)) drop-shadow(0 0 18px rgba(214, 174, 97, 0.14))",
        animation: "globeFloat 5.5s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Globe terrestre montrant l’Europe et l’Afrique"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <radialGradient id="ocean" cx="32%" cy="25%" r="78%">
            <stop offset="0%" stopColor="#1d4e7d" />
            <stop offset="48%" stopColor="#0a294c" />
            <stop offset="100%" stopColor="#020916" />
          </radialGradient>

          <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8aacc5" />
            <stop offset="55%" stopColor="#436f91" />
            <stop offset="100%" stopColor="#244966" />
          </linearGradient>

          <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b17a2e" />
            <stop offset="50%" stopColor="#f7d88f" />
            <stop offset="100%" stopColor="#b77d2d" />
          </linearGradient>

          <radialGradient id="shine" cx="30%" cy="24%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="38%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.42" />
          </radialGradient>

          <clipPath id="earthCircle">
            <circle cx="200" cy="200" r="174" />
          </clipPath>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="174"
          fill="url(#ocean)"
          stroke="#d9b36b"
          strokeOpacity="0.55"
          strokeWidth="2"
        />

        <g clipPath="url(#earthCircle)">
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="50"
            fill="none"
            stroke="#a8c7dd"
            strokeOpacity="0.18"
          />

          <ellipse
            cx="200"
            cy="145"
            rx="155"
            ry="36"
            fill="none"
            stroke="#a8c7dd"
            strokeOpacity="0.13"
          />

          <ellipse
            cx="200"
            cy="255"
            rx="155"
            ry="36"
            fill="none"
            stroke="#a8c7dd"
            strokeOpacity="0.13"
          />

          <ellipse
            cx="200"
            cy="200"
            rx="58"
            ry="171"
            fill="none"
            stroke="#a8c7dd"
            strokeOpacity="0.16"
          />

          <ellipse
            cx="200"
            cy="200"
            rx="112"
            ry="171"
            fill="none"
            stroke="#a8c7dd"
            strokeOpacity="0.11"
          />

          <g
            fill="url(#land)"
            stroke="#c2d7e6"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          >
            <path
              d="
                M111 107
                L128 96
                L145 91
                L157 79
                L170 83
                L180 94
                L194 93
                L205 101
                L220 100
                L232 108
                L247 110
                L257 121
                L253 134
                L240 140
                L228 135
                L218 143
                L207 141
                L197 149
                L183 146
                L173 153
                L159 149
                L149 139
                L135 136
                L124 125
                Z
              "
            />

            <path
              d="
                M177 145
                L197 149
                L215 160
                L228 176
                L239 197
                L245 218
                L240 240
                L230 261
                L220 283
                L208 304
                L194 323
                L180 318
                L168 300
                L157 279
                L149 258
                L143 237
                L144 216
                L150 196
                L158 179
                L167 163
                Z
              "
            />

            <path
              d="
                M237 117
                L254 109
                L271 111
                L284 119
                L299 123
                L309 136
                L303 149
                L288 153
                L274 147
                L261 152
                L249 143
                Z
              "
            />

            <path
              d="
                M252 158
                L269 154
                L284 161
                L289 173
                L278 181
                L263 176
                Z
              "
            />

            <path
              d="
                M248 257
                L259 263
                L263 279
                L258 298
                L249 307
                L243 291
                L245 273
                Z
              "
            />
          </g>

          <path
            d="M170 135 C187 151 208 174 218 220"
            fill="none"
            stroke="url(#routeGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="8 7"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-30"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          <circle
            cx="170"
            cy="135"
            r="5.5"
            fill="#f4d48d"
            stroke="#fff3c6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          <circle
            cx="218"
            cy="220"
            r="5.5"
            fill="#f4d48d"
            stroke="#fff3c6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          <circle r="4.5" fill="#fff1bc" filter="url(#glow)">
            <animateMotion
              dur="2.7s"
              repeatCount="indefinite"
              path="M170 135 C187 151 208 174 218 220"
            />
          </circle>

          <circle
            cx="200"
            cy="200"
            r="174"
            fill="url(#shine)"
            pointerEvents="none"
          />
        </g>

        <circle
          cx="200"
          cy="200"
          r="174"
          fill="none"
          stroke="#e0ba70"
          strokeOpacity="0.4"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
export default function EnvoyerPage() {
  const [amount, setAmount] = useState("250");
  const [status, setStatus] = useState("ready");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const fees = 3.9;
  const rate = 655.957;
  const numericAmount = Number(amount) || 0;
  const received = Math.round(numericAmount * rate);

  const formatNumber = (value) =>
    new Intl.NumberFormat("fr-FR").format(value);

  const startTransfer = () => {
    if (numericAmount <= 0 || status === "loading") return;

    setStatus("loading");
    setShowConfirmation(false);

    window.setTimeout(() => {
      setStatus("success");
      setShowConfirmation(true);
    }, 2200);
  };

  const resetTransfer = () => {
    setStatus("ready");
    setShowConfirmation(false);
  };

  return (
    <main className="send-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="send-shell">
        <header className="top-line">
          <div>
            <span className="eyebrow">TRANSFERT INTERNATIONAL</span>
            <h1>Envoyer de l’argent</h1>
            <p className="intro">
              De Paris vers vos proches, en toute simplicité.
            </p>
          </div>

          <div className="secure-pill">
            <span className="secure-dot" />
            Transfert sécurisé
          </div>
        </header>

        <div className="main-grid">
          <section className="transfer-panel">
            <div className="route-title">
              <div>
                <span className="section-label">VOTRE TRANSFERT</span>
                <h2>Paris vers Brazzaville</h2>
              </div>

              <span className="instant-badge">Instantané</span>
            </div>

            <div className="route-card">
              <div className="country-block">
                <div className="flag-circle">
                  <FranceFlag width={31} height={21} />
                </div>

                <div className="country-text">
                  <span>Départ</span>
                  <strong>Paris</strong>
                  <small>France</small>
                </div>
              </div>

              <div className="route-visual">
                <span className="route-point left" />
                <span className="route-line">
                  <span className="route-light" />
                </span>
                <span className="route-star">✦</span>
                <span className="route-point right" />
              </div>

              <div className="country-block destination">
                <div className="country-text">
                  <span>Destination</span>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </div>

                <div className="flag-circle">
                  <CongoFlag width={31} height={21} />
                </div>
              </div>
            </div>

            <div className="amount-section">
              <label htmlFor="amount">Vous envoyez</label>

              <div className="amount-box">
                <input
                  id="amount"
                  type="number"
                  min="1"
                  value={amount}
                  disabled={status === "loading"}
                  onChange={(event) => {
                    setAmount(event.target.value);

                    if (status === "success") {
                      resetTransfer();
                    }
                  }}
                />

                <div className="currency-select">
                  <FranceFlag width={25} height={17} />
                  <strong>EUR</strong>
                  <span>⌄</span>
                </div>
              </div>
            </div>

            <div className="conversion-row">
              <div>
                <span>Votre proche reçoit</span>
                <strong>{formatNumber(received)} FCFA</strong>
              </div>

              <div className="exchange-info">
                <span>1 EUR</span>
                <span>=</span>
                <span>{rate.toFixed(3)} FCFA</span>
              </div>
            </div>

            <div className="beneficiary-card">
              <div className="beneficiary-avatar">ME</div>

              <div className="beneficiary-info">
                <span>Bénéficiaire</span>
                <strong>Marie-Espérance</strong>
                <small>Mobile Money • Brazzaville</small>
              </div>

              <button type="button" className="change-button">
                Modifier
              </button>
            </div>

            <div className="summary">
              <div>
                <span>Montant envoyé</span>
                <strong>{numericAmount.toFixed(2)} €</strong>
              </div>

              <div>
                <span>Frais YVI PAY</span>
                <strong>{fees.toFixed(2)} €</strong>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>{(numericAmount + fees).toFixed(2)} €</strong>
              </div>
            </div>

            <button
              type="button"
              className={`transfer-button ${status}`}
              onClick={status === "success" ? resetTransfer : startTransfer}
              disabled={numericAmount <= 0 || status === "loading"}
            >
              {status === "ready" && (
                <>
                  <span>Confirmer le transfert</span>
                  <span>→</span>
                </>
              )}

              {status === "loading" && (
                <>
                  <span className="loader" />
                  <span>Transfert en cours…</span>
                </>
              )}

              {status === "success" && (
                <>
                  <span className="success-check">✓</span>
                  <span>Transfert envoyé avec succès</span>
                </>
              )}
            </button>

            <p className="security-note">
              <span>◆</span>
              Vos données sont protégées par un chiffrement sécurisé.
            </p>
          </section>

          <aside className="visual-panel">
            <div className="visual-top">
              <span className="section-label">YVI PAY SIGNATURE</span>

              <span className="live-status">
                <span />
                Réseau actif
              </span>
            </div>

            <div className="globe-stage">
              <div className="halo halo-one" />
              <div className="halo halo-two" />

              <PremiumGlobe />

              <div className="floating-city paris-label">
                <FranceFlag width={30} height={20} />

                <div>
                  <small>Départ</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="floating-city brazza-label">
                <CongoFlag width={30} height={20} />

                <div>
                  <small>Arrivée</small>
                  <strong>Brazzaville</strong>
                </div>
              </div>
            </div>

            <div className="signature-route">
              <div className="signature-city">
                <FranceFlag width={30} height={20} />

                <div>
                  <small>France</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="signature-line">
                <span />
              </div>

              <div className="signature-city right-city">
                <div>
                  <small>Congo</small>
                  <strong>Brazzaville</strong>
                </div>

                <CongoFlag width={30} height={20} />
              </div>
            </div>

            <div className="visual-stats">
              <div>
                <span>Temps estimé</span>
                <strong>Moins de 2 min</strong>
              </div>

              <div>
                <span>Disponibilité</span>
                <strong>24h / 24</strong>
              </div>
            </div>
          </aside>
        </div>

        {showConfirmation && (
          <div className="confirmation-overlay">
            <div className="confirmation-card">
              <button
                type="button"
                className="confirmation-close"
                onClick={resetTransfer}
              >
                ×
              </button>

              <div className="confirmation-icon">✓</div>

              <span className="confirmation-eyebrow">
                TRANSFERT CONFIRMÉ
              </span>

              <h2>Votre argent est en route.</h2>

              <p>
                Marie-Espérance recevra son transfert directement sur son
                portefeuille Mobile Money.
              </p>

              <div className="confirmation-route">
                <div>
                  <FranceFlag width={36} height={24} />
                  <small>Paris</small>
                </div>

                <div className="confirmation-journey">
                  <span />
                  <strong>✦</strong>
                  <span />
                </div>

                <div>
                  <CongoFlag width={36} height={24} />
                  <small>Brazzaville</small>
                </div>
              </div>

              <div className="confirmation-details">
                <div>
                  <span>Montant envoyé</span>
                  <strong>{numericAmount.toFixed(2)} €</strong>
                </div>

                <div>
                  <span>Montant reçu</span>
                  <strong>{formatNumber(received)} FCFA</strong>
                </div>

                <div>
                  <span>Référence</span>
                  <strong>YVI-{new Date().getFullYear()}-0725</strong>
                </div>
              </div>

              <button
                type="button"
                className="confirmation-button"
                onClick={resetTransfer}
              >
                Terminer
              </button>

              <span className="confirmation-brand">YVI PAY</span>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
        }

        button,
        input {
          font: inherit;
        }

        .send-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 42px 28px 70px;
          color: #f8f4ea;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(44, 76, 116, 0.24),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 18%,
              rgba(194, 149, 65, 0.12),
              transparent 28%
            ),
            linear-gradient(145deg, #020711, #07101e 48%, #02050b);
          isolation: isolate;
        }

        .ambient {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          z-index: -1;
        }

        .ambient-one {
          top: 8%;
          left: -8%;
          width: 320px;
          height: 320px;
          background: rgba(34, 72, 123, 0.22);
        }

        .ambient-two {
          right: -8%;
          bottom: 0;
          width: 380px;
          height: 380px;
          background: rgba(183, 136, 52, 0.1);
        }

        .send-shell {
          width: min(1320px, 100%);
          margin: 0 auto;
        }

        .top-line {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 32px;
        }

        .eyebrow,
        .section-label {
          display: block;
          margin-bottom: 10px;
          color: #d6ad62;
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 9px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          font-weight: 400;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .intro {
          margin-bottom: 0;
          color: #8994a6;
          font-size: 0.98rem;
        }

        .secure-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px;
          border: 1px solid rgba(205, 168, 101, 0.19);
          border-radius: 999px;
          background: rgba(7, 14, 25, 0.75);
          color: #cfd7e4;
          font-size: 0.76rem;
        }

        .secure-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d5ad62;
          box-shadow: 0 0 14px rgba(213, 173, 98, 0.9);
        }

        .main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(390px, 0.96fr);
          gap: 24px;
        }

        .transfer-panel,
        .visual-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 28px;
          background: linear-gradient(
            145deg,
            rgba(12, 23, 39, 0.91),
            rgba(4, 10, 19, 0.92)
          );
          box-shadow:
            0 26px 70px rgba(0, 0, 0, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(22px);
        }

        .transfer-panel {
          padding: clamp(24px, 4vw, 42px);
        }

        .route-title {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .route-title h2 {
          margin-bottom: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.55rem, 3vw, 2.25rem);
          font-weight: 400;
        }

        .instant-badge {
          height: max-content;
          padding: 8px 12px;
          border: 1px solid rgba(216, 183, 113, 0.2);
          border-radius: 999px;
          background: rgba(216, 183, 113, 0.07);
          color: #d8b771;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .route-card {
          display: grid;
          grid-template-columns: 1fr minmax(100px, 0.8fr) 1fr;
          align-items: center;
          gap: 18px;
          margin-bottom: 27px;
          padding: 21px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          background: rgba(1, 6, 13, 0.48);
        }

        .country-block {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .destination {
          justify-content: flex-end;
          text-align: right;
        }

        .flag-circle {
          display: grid;
          flex: 0 0 45px;
          width: 45px;
          height: 45px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .country-text {
          display: flex;
          min-width: 0;
          flex-direction: column;
        }

        .country-text span,
        .country-text small {
          color: #747f91;
          font-size: 0.7rem;
        }

        .country-text strong {
          margin: 2px 0;
          color: #f5f0e5;
          font-size: 0.91rem;
        }

        .route-visual {
          position: relative;
          display: flex;
          align-items: center;
        }

        .route-line {
          position: relative;
          width: 100%;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            rgba(202, 157, 76, 0.22),
            #cfa75e,
            rgba(202, 157, 76, 0.22)
          );
        }

        .route-light {
          position: absolute;
          top: -1px;
          left: -30%;
          width: 34%;
          height: 3px;
          border-radius: 999px;
          background: #f5d592;
          box-shadow: 0 0 13px #e8bd6e;
          animation: travel 2.5s linear infinite;
        }

        .route-point {
          position: absolute;
          z-index: 2;
          width: 7px;
          height: 7px;
          border: 1px solid #e9c477;
          border-radius: 50%;
          background: #0b1320;
          box-shadow: 0 0 11px rgba(233, 196, 119, 0.9);
        }

        .route-point.left {
          left: -1px;
        }

        .route-point.right {
          right: -1px;
        }

        .route-star {
          position: absolute;
          left: 50%;
          color: #f3d491;
          transform: translateX(-50%);
        }

        .amount-section {
          margin-bottom: 17px;
        }

        .amount-section label {
          display: block;
          margin-bottom: 9px;
          color: #919baa;
          font-size: 0.75rem;
        }

        .amount-box {
          display: flex;
          overflow: hidden;
          border: 1px solid rgba(213, 173, 98, 0.18);
          border-radius: 18px;
          background: rgba(1, 6, 13, 0.62);
        }

        .amount-box input {
          width: 100%;
          min-width: 0;
          padding: 19px 20px;
          border: 0;
          outline: none;
          background: transparent;
          color: #fffaf0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.65rem, 4vw, 2.25rem);
        }

        .currency-select {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 118px;
          padding: 0 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          color: #ebe4d5;
          font-size: 0.82rem;
        }

        .currency-select span {
          margin-left: auto;
          color: #8c96a6;
        }

        .conversion-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 24px;
          padding: 0 3px;
        }

        .conversion-row > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .conversion-row span {
          color: #7f8999;
          font-size: 0.7rem;
        }

        .conversion-row strong {
          color: #dcb96f;
          font-size: 1rem;
        }

        .exchange-info {
          display: flex;
          gap: 7px;
        }

        .beneficiary-card {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 23px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
        }

        .beneficiary-avatar {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid rgba(218, 181, 109, 0.28);
          border-radius: 50%;
          color: #e2bd74;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .beneficiary-info {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .beneficiary-info span,
        .beneficiary-info small {
          color: #737e90;
          font-size: 0.68rem;
        }

        .beneficiary-info strong {
          margin: 3px 0;
          color: #f1ecdf;
          font-size: 0.86rem;
        }

        .change-button {
          border: 0;
          background: transparent;
          color: #d9b66d;
          cursor: pointer;
          font-size: 0.7rem;
        }

        .summary {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 22px;
        }

        .summary > div {
          display: flex;
          justify-content: space-between;
        }

        .summary span {
          color: #7e8999;
          font-size: 0.73rem;
        }

        .summary strong {
          color: #dfe4ec;
          font-size: 0.8rem;
        }

        .summary-total {
          margin-top: 4px;
          padding-top: 13px;
          border-top: 1px solid rgba(255, 255, 255, 0.065);
        }

        .summary-total span,
        .summary-total strong {
          color: #f5efe1;
        }

        .transfer-button {
          display: flex;
          width: 100%;
          min-height: 57px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 19px;
          border: 1px solid rgba(255, 231, 181, 0.52);
          border-radius: 17px;
          background: linear-gradient(
            110deg,
            #b98b3f,
            #e4c17c 48%,
            #b88739
          );
          color: #08101d;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .transfer-button.loading {
          color: #e9c985;
          background: rgba(210, 170, 92, 0.07);
        }

        .transfer-button.success {
          color: #d8bb7c;
          background: linear-gradient(
            110deg,
            rgba(109, 86, 44, 0.33),
            rgba(191, 148, 72, 0.17)
          );
        }

        .loader {
          width: 17px;
          height: 17px;
          border: 2px solid rgba(233, 201, 133, 0.25);
          border-top-color: #e9c985;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }

        .success-check {
          display: grid;
          width: 21px;
          height: 21px;
          place-items: center;
          border: 1px solid rgba(219, 189, 127, 0.65);
          border-radius: 50%;
        }

        .security-note {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 13px 0 0;
          color: #687487;
          font-size: 0.64rem;
        }

        .visual-panel {
          display: flex;
          min-height: 690px;
          flex-direction: column;
          padding: clamp(23px, 3.5vw, 37px);
          background:
            radial-gradient(
              circle at 50% 38%,
              rgba(18, 57, 104, 0.32),
              transparent 39%
            ),
            linear-gradient(
              160deg,
              rgba(8, 18, 32, 0.93),
              rgba(2, 7, 14, 0.96)
            );
        }

        .visual-top {
          display: flex;
          justify-content: space-between;
        }

        .live-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #9da8b7;
          font-size: 0.67rem;
        }

        .live-status > span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b99a59;
          box-shadow: 0 0 12px rgba(185, 154, 89, 0.95);
          animation: pulse 1.8s ease-in-out infinite;
        }

        .globe-stage {
          position: relative;
          display: grid;
          min-height: 420px;
          flex: 1;
          place-items: center;
        }

        .real-globe {
          position: relative;
          z-index: 2;
          width: min(350px, 76vw);
          aspect-ratio: 1;
          filter:
            drop-shadow(0 0 34px rgba(40, 96, 154, 0.28))
            drop-shadow(0 0 16px rgba(214, 174, 97, 0.09));
          animation: globeFloat 5.5s ease-in-out infinite;
        }

        .earth-svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .animated-route {
          stroke-dasharray: 8 8;
          animation: routeDash 2.5s linear infinite;
        }

        .halo {
          position: absolute;
          z-index: 1;
          border: 1px solid rgba(201, 163, 91, 0.11);
          border-radius: 50%;
        }

        .halo-one {
          width: min(390px, 89vw);
          aspect-ratio: 1;
          animation: haloSpin 18s linear infinite;
        }

        .halo-two {
          width: min(445px, 98vw);
          aspect-ratio: 1;
          border-style: dashed;
          animation: haloSpinReverse 26s linear infinite;
        }

        .floating-city {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 12px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
          background: rgba(3, 10, 19, 0.78);
        }

        .floating-city div {
          display: flex;
          flex-direction: column;
        }

        .floating-city small {
          color: #707d90;
          font-size: 0.57rem;
        }

        .floating-city strong {
          color: #eee8da;
          font-size: 0.72rem;
        }

        .paris-label {
          top: 23%;
          left: 1%;
        }

        .brazza-label {
          right: 0;
          bottom: 20%;
        }

        .signature-route {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 17px 18px;
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 18px;
          background: rgba(2, 8, 16, 0.62);
        }

        .signature-city {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .right-city {
          text-align: right;
        }

        .signature-city > div {
          display: flex;
          flex-direction: column;
        }

        .signature-city small {
          color: #6e7b8e;
          font-size: 0.59rem;
        }

        .signature-city strong {
          color: #e9e3d6;
          font-size: 0.72rem;
        }

        .signature-line {
          position: relative;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(220, 181, 107, 0.9),
            transparent
          );
        }

        .signature-line span {
          position: absolute;
          top: -2px;
          left: -30%;
          width: 34%;
          height: 5px;
          border-radius: 999px;
          background: #f5d592;
          box-shadow: 0 0 13px #e8bd6e;
          animation: travel 2.5s linear infinite;
        }

        .visual-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .visual-stats > div {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
        }

        .visual-stats span {
          color: #667387;
          font-size: 0.6rem;
        }

        .visual-stats strong {
          color: #c7ced8;
          font-size: 0.7rem;
        }

        .confirmation-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0, 4, 10, 0.79);
          backdrop-filter: blur(14px);
        }

        .confirmation-card {
          position: relative;
          width: min(485px, 100%);
          padding: 43px 35px 29px;
          border: 1px solid rgba(224, 190, 123, 0.26);
          border-radius: 29px;
          background: linear-gradient(155deg, #0c1726, #030913);
          text-align: center;
        }

        .confirmation-close {
          position: absolute;
          top: 15px;
          right: 17px;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.025);
          color: #7f8a9a;
          cursor: pointer;
        }

        .confirmation-icon {
          display: grid;
          width: 67px;
          height: 67px;
          place-items: center;
          margin: 0 auto 20px;
          border: 1px solid rgba(229, 196, 128, 0.52);
          border-radius: 50%;
          color: #ebce91;
          font-size: 1.4rem;
        }

        .confirmation-eyebrow {
          display: block;
          margin-bottom: 10px;
          color: #d7b66f;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .confirmation-card h2 {
          margin-bottom: 11px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.85rem, 5vw, 2.5rem);
          font-weight: 400;
        }

        .confirmation-card > p {
          max-width: 360px;
          margin: 0 auto 24px;
          color: #8995a6;
          font-size: 0.78rem;
          line-height: 1.65;
        }

        .confirmation-route {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding: 17px 19px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(0, 5, 12, 0.48);
        }

        .confirmation-route > div:not(.confirmation-journey) {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }

        .confirmation-route small {
          color: #aab4c2;
          font-size: 0.65rem;
        }

        .confirmation-journey {
          display: flex;
          align-items: center;
        }

        .confirmation-journey span {
          flex: 1;
          height: 1px;
          background: rgba(221, 184, 111, 0.74);
        }

        .confirmation-journey strong {
          color: #e7c984;
        }

        .confirmation-details {
          margin-bottom: 22px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 17px;
        }

        .confirmation-details > div {
          display: flex;
          justify-content: space-between;
          padding: 12px 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.045);
        }

        .confirmation-details > div:last-child {
          border-bottom: 0;
        }

        .confirmation-details span {
          color: #798597;
          font-size: 0.68rem;
        }

        .confirmation-details strong {
          color: #e7e1d5;
          font-size: 0.72rem;
        }

        .confirmation-button {
          width: 100%;
          min-height: 49px;
          border: 1px solid rgba(255, 238, 200, 0.46);
          border-radius: 15px;
          background: linear-gradient(
            110deg,
            #b8883c,
            #dfbd78,
            #b48334
          );
          color: #08101b;
          cursor: pointer;
          font-size: 0.77rem;
          font-weight: 800;
        }

        .confirmation-brand {
          display: block;
          margin-top: 19px;
          color: #5d687a;
          font-size: 0.57rem;
          font-weight: 800;
          letter-spacing: 0.28em;
        }

        @keyframes travel {
          from {
            left: -30%;
          }

          to {
            left: 105%;
          }
        }

        @keyframes routeDash {
          to {
            stroke-dashoffset: -32;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes globeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes haloSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes haloSpinReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @media (max-width: 1050px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 690px) {
          .send-page {
            padding: 25px 14px 50px;
          }

          .top-line {
            flex-direction: column;
          }

          .route-card {
            grid-template-columns: 1fr;
          }

          .destination {
            justify-content: flex-start;
            flex-direction: row-reverse;
            text-align: left;
          }

          .conversion-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .visual-stats {
            grid-template-columns: 1fr;
          }

          .confirmation-card {
            padding: 38px 20px 25px;
          }
        }
      `}</style>
    </main>
  );
}
