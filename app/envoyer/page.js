"use client";

import { useEffect, useState } from "react";

export default function EnvoyerPage() {
  const [amount, setAmount] = useState("250");
  const [step, setStep] = useState("ready");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const transferFee = 3.9;
  const exchangeRate = 655.957;

  const numericAmount = Number(amount) || 0;
  const receivedAmount = Math.round(numericAmount * exchangeRate);

  const formatNumber = (value) =>
    new Intl.NumberFormat("fr-FR").format(value);

  const startTransfer = () => {
    if (numericAmount <= 0 || step === "loading") return;

    setStep("loading");
    setShowConfirmation(false);

    window.setTimeout(() => {
      setStep("success");
      setShowConfirmation(true);
    }, 2200);
  };

  const resetTransfer = () => {
    setStep("ready");
    setShowConfirmation(false);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout();
    };
  }, []);

  return (
    <main className="send-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="send-shell">
        <div className="top-line">
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
        </div>

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
                <div className="flag-circle">🇫🇷</div>

                <div>
                  <span className="country-caption">Départ</span>
                  <strong>Paris</strong>
                  <small>France</small>
                </div>
              </div>

              <div className="route-visual">
                <span className="route-point route-point-left" />

                <span className="route-line">
                  <span className="route-light" />
                </span>

                <span className="route-plane">✦</span>
                <span className="route-point route-point-right" />
              </div>

              <div className="country-block destination">
                <div>
                  <span className="country-caption">Destination</span>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </div>

                <div className="flag-circle">🇨🇬</div>
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
                  disabled={step === "loading"}
                  onChange={(event) => {
                    setAmount(event.target.value);

                    if (step === "success") {
                      setStep("ready");
                      setShowConfirmation(false);
                    }
                  }}
                  aria-label="Montant envoyé"
                />

                <div className="currency-select">
                  <span>🇫🇷</span>
                  <strong>EUR</strong>
                  <span className="currency-arrow">⌄</span>
                </div>
              </div>
            </div>

            <div className="conversion-row">
              <div>
                <span>Votre proche reçoit</span>

                <strong>
                  {formatNumber(receivedAmount)} FCFA
                </strong>
              </div>

              <div className="exchange-info">
                <span>1 EUR</span>
                <span className="exchange-dash">=</span>
                <span>{exchangeRate.toFixed(3)} FCFA</span>
              </div>
            </div>

            <div className="beneficiary-card">
              <div className="beneficiary-avatar">ME</div>

              <div className="beneficiary-info">
                <span>Bénéficiaire</span>
                <strong>Marie-Espérance</strong>
                <small>Mobile Money • Brazzaville</small>
              </div>

              <button
                type="button"
                className="change-button"
                disabled={step === "loading"}
              >
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
                <strong>{transferFee.toFixed(2)} €</strong>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  {(numericAmount + transferFee).toFixed(2)} €
                </strong>
              </div>
            </div>

            <button
              type="button"
              className={`transfer-button ${step}`}
              onClick={
                step === "success"
                  ? resetTransfer
                  : startTransfer
              }
              disabled={
                numericAmount <= 0 ||
                step === "loading"
              }
            >
              {step === "ready" && (
                <>
                  <span>Confirmer le transfert</span>
                  <span className="button-arrow">→</span>
                </>
              )}

              {step === "loading" && (
                <>
                  <span className="button-loader" />
                  <span>Transfert en cours…</span>
                </>
              )}

              {step === "success" && (
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
              <span className="section-label">YVI PAY</span>

              <span className="live-status">
                <span />
                Réseau actif
              </span>
            </div>

            <div className="globe-stage">
              <div className="globe-halo globe-halo-one" />
              <div className="globe-halo globe-halo-two" />

              <div className="globe">
                <div className="globe-grid globe-grid-one" />
                <div className="globe-grid globe-grid-two" />

                <svg
                  className="continent-map"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <path
                    className="land land-europe"
                    d="M122 121 L132 108 L146 103 L155 95 L166 97 L174 91 L184 96 L192 91 L203 97 L213 95 L224 101 L237 99 L247 106 L260 107 L269 116 L265 126 L254 129 L247 138 L236 137 L229 145 L216 144 L207 153 L197 149 L187 157 L177 151 L169 141 L158 138 L151 130 L137 130 Z"
                  />

                  <path
                    className="land land-africa"
                    d="M160 143 L177 136 L195 139 L211 148 L225 164 L236 184 L239 205 L232 224 L226 246 L216 267 L207 288 L194 309 L184 300 L179 281 L168 267 L161 247 L151 228 L146 207 L147 187 L153 167 Z"
                  />

                  <path
                    className="land land-asia"
                    d="M233 101 L251 92 L273 88 L294 92 L311 99 L329 111 L344 126 L350 143 L341 154 L324 156 L310 166 L292 166 L280 157 L263 154 L248 145 L237 137 L246 125 L259 122 L269 116 L260 107 Z"
                  />

                  <path
                    className="land land-arabia"
                    d="M217 161 L234 157 L249 167 L255 181 L248 193 L232 193 L220 183 Z"
                  />

                  <path
                    className="land land-madagascar"
                    d="M232 274 L240 284 L241 300 L235 313 L229 304 L228 288 Z"
                  />
                </svg>

                <span className="city-dot paris-dot" />
                <span className="city-dot brazza-dot" />

                <svg
                  className="route-svg"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="routeGold"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#b98535"
                      />

                      <stop
                        offset="50%"
                        stopColor="#ffe5a0"
                      />

                      <stop
                        offset="100%"
                        stopColor="#c6923f"
                      />
                    </linearGradient>

                    <filter
                      id="routeGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur
                        stdDeviation="4"
                        result="blur"
                      />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path
                    d="M176 128 C225 157 256 218 248 286"
                    fill="none"
                    stroke="url(#routeGold)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#routeGlow)"
                  />

                  <circle
                    cx="176"
                    cy="128"
                    r="6"
                    className="route-node"
                  />

                  <circle
                    cx="248"
                    cy="286"
                    r="6"
                    className="route-node"
                  />

                  <circle
                    r="4.5"
                    fill="#fff4c8"
                    filter="url(#routeGlow)"
                  >
                    <animateMotion
                      dur="2.8s"
                      repeatCount="indefinite"
                      path="M176 128 C225 157 256 218 248 286"
                    />
                  </circle>
                </svg>
              </div>

              <div className="floating-city paris-label">
                <span>🇫🇷</span>

                <div>
                  <small>Départ</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="floating-city brazza-label">
                <span>🇨🇬</span>

                <div>
                  <small>Arrivée</small>
                  <strong>Brazzaville</strong>
                </div>
              </div>
            </div>

            <div className="signature-route">
              <div className="signature-city">
                <span>🇫🇷</span>

                <div>
                  <small>France</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="signature-line">
                <span className="signature-traveller" />
              </div>

              <div className="signature-city right">
                <div>
                  <small>Congo</small>
                  <strong>Brazzaville</strong>
                </div>

                <span>🇨🇬</span>
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
              <div className="confirmation-glow" />

              <button
                type="button"
                className="confirmation-close"
                onClick={resetTransfer}
                aria-label="Fermer la confirmation"
              >
                ×
              </button>

              <div className="confirmation-icon">
                <span>✓</span>
              </div>

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
                  <span className="confirmation-flag">🇫🇷</span>
                  <small>Paris</small>
                </div>

                <div className="confirmation-journey">
                  <span />
                  <strong>✦</strong>
                  <span />
                </div>

                <div>
                  <span className="confirmation-flag">🇨🇬</span>
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
                  <strong>{formatNumber(receivedAmount)} FCFA</strong>
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

        button {
          -webkit-tap-highlight-color: transparent;
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
            linear-gradient(
              145deg,
              #020711 0%,
              #07101e 48%,
              #02050b 100%
            );
          isolation: isolate;
        }

        .ambient {
          position: absolute;
          z-index: -1;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
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
          min-width: max-content;
          padding: 11px 16px;
          border: 1px solid rgba(205, 168, 101, 0.19);
          border-radius: 999px;
          background: rgba(7, 14, 25, 0.75);
          color: #cfd7e4;
          backdrop-filter: blur(18px);
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
          grid-template-columns:
            minmax(0, 1.04fr)
            minmax(390px, 0.96fr);
          gap: 24px;
          align-items: stretch;
        }

        .transfer-panel,
        .visual-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 28px;
          background:
            linear-gradient(
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
          align-items: flex-start;
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
          padding: 8px 12px;
          border: 1px solid rgba(216, 183, 113, 0.2);
          border-radius: 999px;
          background: rgba(216, 183, 113, 0.07);
          color: #d8b771;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .route-card {
          display: grid;
          grid-template-columns:
            1fr
            minmax(100px, 0.8fr)
            1fr;
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

        .country-block.destination {
          justify-content: flex-end;
          text-align: right;
        }

        .flag-circle {
          display: grid;
          flex: 0 0 auto;
          width: 45px;
          height: 45px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          box-shadow:
            inset 0 0 20px rgba(255, 255, 255, 0.02);
          font-size: 1.32rem;
        }

        .country-block div:not(.flag-circle) {
          display: flex;
          min-width: 0;
          flex-direction: column;
        }

        .country-caption,
        .country-block small {
          color: #747f91;
          font-size: 0.7rem;
        }

        .country-block strong {
          overflow: hidden;
          margin: 2px 0;
          color: #f5f0e5;
          font-size: 0.91rem;
          text-overflow: ellipsis;
          white-space: nowrap;
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
          background:
            linear-gradient(
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
          box-shadow:
            0 0 11px rgba(233, 196, 119, 0.9);
        }

        .route-point-left {
          left: -1px;
        }

        .route-point-right {
          right: -1px;
        }

        .route-plane {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 3;
          color: #f3d491;
          font-size: 0.72rem;
          text-shadow:
            0 0 10px rgba(243, 212, 145, 0.9);
          transform: translate(-50%, -50%);
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
          align-items: stretch;
          overflow: hidden;
          border: 1px solid rgba(213, 173, 98, 0.18);
          border-radius: 18px;
          background: rgba(1, 6, 13, 0.62);
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .amount-box:focus-within {
          border-color: rgba(213, 173, 98, 0.52);
          box-shadow:
            0 0 0 4px rgba(213, 173, 98, 0.055);
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

        .amount-box input::-webkit-inner-spin-button,
        .amount-box input::-webkit-outer-spin-button {
          margin: 0;
          appearance: none;
        }

        .currency-select {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 118px;
          padding: 0 18px;
          border-left:
            1px solid rgba(255, 255, 255, 0.06);
          color: #ebe4d5;
          font-size: 0.82rem;
        }

        .currency-select > span:first-child {
          font-size: 1.15rem;
        }

        .currency-arrow {
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
          align-items: center;
          gap: 7px;
        }

        .exchange-dash {
          color: #c19a56 !important;
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
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          place-items: center;
          border:
            1px solid rgba(218, 181, 109, 0.28);
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              rgba(203, 157, 73, 0.14),
              rgba(10, 19, 32, 0.8)
            );
          color: #e2bd74;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .beneficiary-info {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
        }

        .beneficiary-info span,
        .beneficiary-info small {
          color: #737e90;
          font-size: 0.68rem;
        }

        .beneficiary-info strong {
          overflow: hidden;
          margin: 3px 0;
          color: #f1ecdf;
          font-size: 0.86rem;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .change-button {
          padding: 8px 10px;
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
          padding: 4px 3px 0;
        }

        .summary > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
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
          border-top:
            1px solid rgba(255, 255, 255, 0.065);
        }

        .summary-total span,
        .summary-total strong {
          color: #f5efe1;
        }

        .summary-total strong {
          font-size: 1rem;
        }

        .transfer-button {
          display: flex;
          width: 100%;
          min-height: 57px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 19px;
          border:
            1px solid rgba(255, 231, 181, 0.52);
          border-radius: 17px;
          background:
            linear-gradient(
              110deg,
              #b98b3f,
              #e4c17c 48%,
              #b88739
            );
          box-shadow:
            0 13px 32px rgba(178, 127, 46, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          color: #08101d;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            filter 180ms ease;
        }

        .transfer-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow:
            0 17px 36px rgba(178, 127, 46, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.55);
          filter: brightness(1.04);
        }

        .transfer-button:disabled {
          cursor: not-allowed;
          opacity: 0.75;
        }

        .transfer-button.loading {
          border-color:
            rgba(222, 184, 108, 0.28);
          background:
            rgba(210, 170, 92, 0.07);
          box-shadow:
            inset 0 0 30px rgba(210, 170, 92, 0.04);
          color: #e9c985;
        }

        .transfer-button.success {
          border-color:
            rgba(216, 187, 124, 0.32);
          background:
            linear-gradient(
              110deg,
              rgba(109, 86, 44, 0.33),
              rgba(191, 148, 72, 0.17)
            );
          box-shadow:
            0 12px 30px rgba(178, 127, 46, 0.1);
          color: #d8bb7c;
        }

        .button-arrow {
          font-size: 1.15rem;
        }

        .button-loader {
          width: 17px;
          height: 17px;
          border:
            2px solid rgba(233, 201, 133, 0.25);
          border-top-color: #e9c985;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }

        .success-check {
          display: grid;
          width: 21px;
          height: 21px;
          place-items: center;
          border:
            1px solid rgba(219, 189, 127, 0.65);
          border-radius: 50%;
          font-size: 0.7rem;
        }

        .security-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 13px 0 0;
          color: #687487;
          font-size: 0.64rem;
          text-align: center;
        }

        .security-note span {
          color: #a68043;
          font-size: 0.55rem;
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

        .visual-panel::before {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            linear-gradient(
              120deg,
              transparent 10%,
              rgba(255, 255, 255, 0.025) 38%,
              transparent 62%
            );
          content: "";
          pointer-events: none;
        }

        .visual-top {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
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
          box-shadow:
            0 0 12px rgba(185, 154, 89, 0.95);
          animation: pulse 1.8s ease-in-out infinite;
        }

        .globe-stage {
          position: relative;
          display: grid;
          min-height: 420px;
          flex: 1;
          place-items: center;
          margin: 5px 0 15px;
        }

        .globe {
          position: relative;
          z-index: 2;
          width: min(335px, 76vw);
          aspect-ratio: 1;
          overflow: hidden;
          border:
            1px solid rgba(219, 188, 126, 0.28);
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 34% 28%,
              rgba(57, 105, 159, 0.3),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 50%,
              #0c213b 0%,
              #071526 53%,
              #020814 100%
            );
          box-shadow:
            0 0 0 12px rgba(204, 164, 88, 0.025),
            0 0 70px rgba(36, 90, 148, 0.28),
            inset -32px -20px 60px rgba(0, 0, 0, 0.55),
            inset 10px 10px 35px rgba(112, 157, 205, 0.1);
          animation:
            globeFloat 5.5s ease-in-out infinite;
        }

        .globe::after {
          position: absolute;
          inset: 0;
          z-index: 8;
          border-radius: 50%;
          background:
            linear-gradient(
              110deg,
              rgba(255, 255, 255, 0.12),
              transparent 30%,
              transparent 67%,
              rgba(0, 0, 0, 0.3)
            );
          content: "";
          pointer-events: none;
        }

        .globe-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: 50%;
          opacity: 0.36;
          pointer-events: none;
        }

        .globe-grid-one {
          background:
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 26px,
              rgba(165, 192, 222, 0.15) 27px,
              transparent 28px
            );
        }

        .globe-grid-two {
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 34px,
              rgba(165, 192, 222, 0.12) 35px,
              transparent 36px
            );
          transform: scaleX(0.72);
        }

        .continent-map {
          position: absolute;
          inset: 5%;
          z-index: 3;
          width: 90%;
          height: 90%;
          overflow: visible;
          filter:
            drop-shadow(
              0 0 9px rgba(83, 143, 194, 0.22)
            )
            drop-shadow(
              0 0 18px rgba(214, 179, 106, 0.08)
            );
        }

        .land {
          stroke: rgba(212, 180, 113, 0.35);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .land-europe {
          fill: rgba(70, 119, 161, 0.42);
        }

        .land-africa {
          fill: rgba(53, 104, 149, 0.5);
        }

        .land-asia {
          fill: rgba(62, 108, 150, 0.38);
        }

        .land-arabia {
          fill: rgba(75, 120, 158, 0.42);
        }

        .land-madagascar {
          fill: rgba(72, 119, 158, 0.4);
        }

        .city-dot {
          position: absolute;
          z-index: 7;
          width: 9px;
          height: 9px;
          border: 2px solid #f1d08b;
          border-radius: 50%;
          background: #ad7b30;
          box-shadow:
            0 0 0 5px rgba(238, 202, 127, 0.08),
            0 0 19px rgba(238, 202, 127, 0.95);
        }

        .paris-dot {
          top: 31%;
          left: 44%;
        }

        .brazza-dot {
          top: 69%;
          left: 61%;
        }

        .route-svg {
          position: absolute;
          inset: 0;
          z-index: 6;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .route-node {
          fill: #fff1b8;
          stroke: #d1a14c;
          stroke-width: 2;
          filter:
            drop-shadow(
              0 0 8px rgba(255, 218, 140, 0.85)
            );
        }

        .globe-halo {
          position: absolute;
          z-index: 1;
          border:
            1px solid rgba(201, 163, 91, 0.11);
          border-radius: 50%;
        }

        .globe-halo-one {
          width: min(390px, 89vw);
          aspect-ratio: 1;
          animation: haloSpin 18s linear infinite;
        }

        .globe-halo-two {
          width: min(445px, 98vw);
          aspect-ratio: 1;
          border-style: dashed;
          opacity: 0.55;
          animation:
            haloSpinReverse 26s linear infinite;
        }

        .floating-city {
          position: absolute;
          z-index: 12;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 12px;
          border:
            1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
          background: rgba(3, 10, 19, 0.82);
          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px);
        }

        .floating-city > span {
          font-size: 1.1rem;
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
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          margin-top: auto;
          padding: 17px 18px;
          border:
            1px solid rgba(255, 255, 255, 0.065);
          border-radius: 18px;
          background: rgba(2, 8, 16, 0.62);
        }

        .signature-city {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .signature-city.right {
          text-align: right;
        }

        .signature-city > span {
          font-size: 1.18rem;
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
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(220, 181, 107, 0.9),
              transparent
            );
        }

        .signature-traveller {
          position: absolute;
          top: -2px;
          left: -12%;
          width: 28%;
          height: 5px;
          border-radius: 999px;
          background: #f0ce87;
          box-shadow:
            0 0 12px rgba(240, 206, 135, 0.9);
          animation: travel 2.6s linear infinite;
        }

        .visual-stats {
          position: relative;
          z-index: 10;
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
          border:
            1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.018);
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
          animation: overlayIn 300ms ease both;
        }

        .confirmation-card {
          position: relative;
          width: min(485px, 100%);
          overflow: hidden;
          padding: 43px 35px 29px;
          border:
            1px solid rgba(224, 190, 123, 0.26);
          border-radius: 29px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(197, 151, 66, 0.13),
              transparent 35%
            ),
            linear-gradient(
              155deg,
              #0c1726 0%,
              #030913 100%
            );
          box-shadow:
            0 36px 100px rgba(0, 0, 0, 0.65),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          color: #f3eee2;
          text-align: center;
          animation:
            cardIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1)
            both;
        }

        .confirmation-glow {
          position: absolute;
          top: -95px;
          left: 50%;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(204, 160, 77, 0.11);
          filter: blur(55px);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .confirmation-close {
          position: absolute;
          top: 15px;
          right: 17px;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border:
            1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.025);
          color: #7f8a9a;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .confirmation-icon {
          position: relative;
          display: grid;
          width: 67px;
          height: 67px;
          place-items: center;
          margin: 0 auto 20px;
          border:
            1px solid rgba(229, 196, 128, 0.52);
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              rgba(217, 178, 104, 0.2),
              rgba(217, 178, 104, 0.04)
            );
          box-shadow:
            0 0 0 9px rgba(217, 178, 104, 0.035),
            0 0 32px rgba(217, 178, 104, 0.15);
        }

        .confirmation-icon span {
          color: #ebce91;
          font-size: 1.45rem;
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
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size:
            clamp(1.85rem, 5vw, 2.5rem);
          font-weight: 400;
          letter-spacing: -0.035em;
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
          border:
            1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(0, 5, 12, 0.48);
        }

        .confirmation-route
          > div:not(.confirmation-journey) {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .confirmation-flag {
          font-size: 1.35rem;
        }

        .confirmation-route small {
          color: #b4bdca;
          font-size: 0.65rem;
        }

        .confirmation-journey {
          display: flex;
          align-items: center;
        }

        .confirmation-journey span {
          flex: 1;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(221, 184, 111, 0.74)
            );
        }

        .confirmation-journey span:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(221, 184, 111, 0.74),
              transparent
            );
        }

        .confirmation-journey strong {
          color: #e7c984;
          font-size: 0.72rem;
          text-shadow:
            0 0 12px rgba(231, 201, 132, 0.8);
        }

        .confirmation-details {
          display: flex;
          flex-direction: column;
          margin-bottom: 22px;
          border:
            1px solid rgba(255, 255, 255, 0.055);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.018);
        }

        .confirmation-details > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 15px;
          border-bottom:
            1px solid rgba(255, 255, 255, 0.045);
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
          border:
            1px solid rgba(255, 238, 200, 0.46);
          border-radius: 15px;
          background:
            linear-gradient(
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
          0% {
            left: -30%;
          }

          100% {
            left: 105%;
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
            transform:
              translateY(0)
              rotate(-1deg);
          }

          50% {
            transform:
              translateY(-8px)
              rotate(1deg);
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

        @keyframes overlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform:
              translateY(22px)
              scale(0.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        @media (max-width: 1050px) {
          .main-grid {
            grid-template-columns: 1fr;
          }

          .visual-panel {
            min-height: 630px;
          }
        }

        @media (max-width: 690px) {
          .send-page {
            padding: 25px 14px 50px;
          }

          .top-line {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 24px;
          }

          .secure-pill {
            align-self: flex-start;
          }

          .transfer-panel,
          .visual-panel {
            border-radius: 22px;
          }

          .route-title {
            align-items: flex-start;
            flex-direction: column;
          }

          .route-card {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .country-block.destination {
            justify-content: flex-start;
            flex-direction: row-reverse;
            text-align: left;
          }

          .route-visual {
            width: calc(100% - 34px);
            margin: 2px auto;
          }

          .conversion-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .amount-box input {
            padding: 17px 15px;
          }

          .currency-select {
            min-width: 103px;
            padding: 0 12px;
          }

          .visual-panel {
            min-height: 570px;
          }

          .globe-stage {
            min-height: 365px;
          }

          .globe {
            width: min(315px, 82vw);
          }

          .floating-city {
            transform: scale(0.9);
          }

          .paris-label {
            left: -12px;
          }

          .brazza-label {
            right: -11px;
          }

          .signature-route {
            gap: 9px;
            padding: 14px 11px;
          }

          .signature-city {
            gap: 6px;
          }

          .signature-city strong {
            font-size: 0.65rem;
          }

          .visual-stats {
            grid-template-columns: 1fr;
          }

          .confirmation-card {
            padding: 38px 20px 25px;
            border-radius: 23px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
