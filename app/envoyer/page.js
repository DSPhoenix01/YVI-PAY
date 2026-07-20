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
        role="img"
        aria-label="Globe représentant l’Europe, l’Afrique et l’Asie"
      >
        <defs>
          <linearGradient
            id="landGold"
            x1="80"
            y1="70"
            x2="330"
            y2="325"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#f7dfa4" stopOpacity="0.96" />
            <stop offset="45%" stopColor="#cfa45a" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#745329" stopOpacity="0.72" />
          </linearGradient>

          <linearGradient
            id="landShadow"
            x1="100"
            y1="90"
            x2="310"
            y2="310"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fff0bd" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#8d642e" stopOpacity="0.08" />
          </linearGradient>

          <filter id="continentGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="cityGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="178" />
          </clipPath>
        </defs>

        <g clipPath="url(#globeClip)">
          <circle
            cx="200"
            cy="200"
            r="178"
            fill="rgba(3, 12, 24, 0.2)"
          />

          <g
            fill="none"
            stroke="rgba(220, 186, 112, 0.13)"
            strokeWidth="1"
          >
            <ellipse cx="200" cy="200" rx="177" ry="58" />
            <ellipse cx="200" cy="200" rx="177" ry="108" />
            <ellipse cx="200" cy="200" rx="68" ry="177" />
            <ellipse cx="200" cy="200" rx="120" ry="177" />
          </g>

          <g
            fill="url(#landGold)"
            stroke="rgba(255, 225, 163, 0.62)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            filter="url(#continentGlow)"
          >
            {/* EUROPE */}
            <path
              className="land land-europe"
              d="
                M94 130
                L102 119
                L114 115
                L119 104
                L130 101
                L139 92
                L151 94
                L159 85
                L170 89
                L179 82
                L190 87
                L199 83
                L209 91
                L218 88
                L228 95
                L239 92
                L248 100
                L260 100
                L268 108
                L281 111
                L287 121
                L280 129
                L270 129
                L265 138
                L254 136
                L247 145
                L236 141
                L227 150
                L216 146
                L207 155
                L196 152
                L187 160
                L178 153
                L167 151
                L159 143
                L147 144
                L138 136
                L126 138
                L116 131
                L105 135
                Z
              "
            />

            {/* PÉNINSULE IBÉRIQUE */}
            <path
              d="
                M105 135
                L117 132
                L126 138
                L124 148
                L116 158
                L105 155
                L98 147
                Z
              "
            />

            {/* ITALIE */}
            <path
              d="
                M178 153
                L186 158
                L190 168
                L198 175
                L194 182
                L187 177
                L183 168
                L175 163
                Z
              "
            />

            {/* ROYAUME-UNI */}
            <path
              d="
                M126 102
                L132 92
                L139 89
                L143 97
                L138 106
                L130 110
                Z
              "
            />

            {/* AFRIQUE */}
            <path
              className="land land-africa"
              d="
                M128 151
                L143 143
                L160 141
                L178 145
                L195 151
                L211 162
                L224 176
                L232 192
                L237 210
                L235 227
                L228 243
                L224 259
                L215 275
                L208 292
                L197 310
                L187 324
                L177 316
                L172 301
                L163 289
                L158 274
                L149 260
                L145 244
                L137 229
                L134 211
                L136 194
                L130 180
                L119 169
                L116 159
                Z
              "
            />

            {/* CORNE DE L’AFRIQUE */}
            <path
              d="
                M224 208
                L239 214
                L252 221
                L241 229
                L229 230
                L220 224
                Z
              "
            />

            {/* MADAGASCAR */}
            <path
              d="
                M248 265
                L255 274
                L254 289
                L248 303
                L242 296
                L243 281
                Z
              "
            />

            {/* ASIE */}
            <path
              className="land land-asia"
              d="
                M218 89
                L233 80
                L251 76
                L270 74
                L289 79
                L307 84
                L324 94
                L340 106
                L354 121
                L364 137
                L371 154
                L365 166
                L351 169
                L340 178
                L326 177
                L315 185
                L303 180
                L291 188
                L279 182
                L267 190
                L254 184
                L244 190
                L234 181
                L224 176
                L211 162
                L198 153
                L207 143
                L216 146
                L227 137
                L239 140
                L249 130
                L260 132
                L270 124
                L281 120
                L269 109
                L257 102
                L244 102
                L232 95
                Z
              "
            />

            {/* PÉNINSULE ARABIQUE */}
            <path
              d="
                M224 176
                L239 177
                L250 186
                L246 200
                L235 211
                L224 204
                L217 190
                Z
              "
            />

            {/* INDE */}
            <path
              d="
                M274 181
                L288 188
                L294 203
                L289 221
                L280 238
                L272 224
                L267 208
                L260 196
                Z
              "
            />

            {/* ASIE DU SUD-EST */}
            <path
              d="
                M303 180
                L316 187
                L322 199
                L318 210
                L327 219
                L322 229
                L312 222
                L309 210
                L299 201
                L294 190
                Z
              "
            />

            {/* JAPON */}
            <path
              d="
                M351 151
                L357 158
                L354 169
                L347 177
                L343 171
                L347 161
                Z
              "
            />
          </g>

          <g
            fill="url(#landShadow)"
            opacity="0.65"
            pointerEvents="none"
          >
            <path
              d="
                M94 130
                L102 119
                L114 115
                L119 104
                L130 101
                L139 92
                L151 94
                L159 85
                L170 89
                L179 82
                L190 87
                L199 83
                L209 91
                L218 88
                L228 95
                L239 92
                L248 100
                L260 100
                L268 108
                L281 111
                L287 121
                L280 129
                L270 129
                L265 138
                L254 136
                L247 145
                L236 141
                L227 150
                L216 146
                L207 155
                L196 152
                L187 160
                L178 153
                L167 151
                L159 143
                L147 144
                L138 136
                L126 138
                L116 131
                L105 135
                Z
              "
            />

            <path
              d="
                M128 151
                L143 143
                L160 141
                L178 145
                L195 151
                L211 162
                L224 176
                L232 192
                L237 210
                L235 227
                L228 243
                L224 259
                L215 275
                L208 292
                L197 310
                L187 324
                L177 316
                L172 301
                L163 289
                L158 274
                L149 260
                L145 244
                L137 229
                L134 211
                L136 194
                L130 180
                L119 169
                L116 159
                Z
              "
            />

            <path
              d="
                M218 89
                L233 80
                L251 76
                L270 74
                L289 79
                L307 84
                L324 94
                L340 106
                L354 121
                L364 137
                L371 154
                L365 166
                L351 169
                L340 178
                L326 177
                L315 185
                L303 180
                L291 188
                L279 182
                L267 190
                L254 184
                L244 190
                L234 181
                L224 176
                L211 162
                L198 153
                L207 143
                L216 146
                L227 137
                L239 140
                L249 130
                L260 132
                L270 124
                L281 120
                L269 109
                L257 102
                L244 102
                L232 95
                Z
              "
            />
          </g>

          <path
            className="signature-route"
            d="M151 128 C168 157 181 185 190 226"
            fill="none"
            stroke="rgba(220, 183, 105, 0.22)"
            strokeWidth="2.3"
            strokeLinecap="round"
          />

          <path
            className="route-light"
            d="M151 128 C168 157 181 185 190 226"
            fill="none"
            stroke="#f4d58b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12 90"
            filter="url(#cityGlow)"
          />

          <circle
            cx="151"
            cy="128"
            r="4"
            fill="#f7dda0"
            filter="url(#cityGlow)"
          />
          <circle
            cx="190"
            cy="226"
            r="4"
            fill="#f7dda0"
            filter="url(#cityGlow)"
          />
        </g>

        <circle
          cx="200"
          cy="200"
          r="178"
          fill="none"
          stroke="rgba(228, 196, 126, 0.36)"
          strokeWidth="1.5"
        />

        <circle
          cx="200"
          cy="200"
          r="171"
          fill="none"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="1"
        />
      </svg>
<div className="city-dot paris-dot" />
<div className="city-dot brazza-dot" />
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

  <div className="visual-route">
    <div className="visual-location">
      <span className="visual-location-flag">🇫🇷</span>
      <div>
        <small>France</small>
        <strong>Paris</strong>
      </div>
    </div>

    <div className="visual-route-line">
      <span className="visual-route-dot visual-route-dot-start" />
      <span className="visual-route-glow" />
      <span className="visual-route-traveler">✦</span>
      <span className="visual-route-dot visual-route-dot-end" />
    </div>

    <div className="visual-location visual-location-end">
      <span className="visual-location-flag">🇨🇬</span>
      <div>
        <small>Congo</small>
        <strong>Brazzaville</strong>
      </div>
    </div>
  </div>

  <div className="visual-stats">
    <div className="visual-stat">
      <span>Temps estimé</span>
      <strong>Moins de 2 min</strong>
    </div>

    <div className="visual-stat">
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
          border-left: 1px solid rgba(255, 255, 255, 0.06);
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
          border: 1px solid rgba(218, 181, 109, 0.28);
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
          border-top: 1px solid rgba(255, 255, 255, 0.065);
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
          border: 1px solid rgba(255, 231, 181, 0.52);
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
          border-color: rgba(222, 184, 108, 0.28);
          background: rgba(210, 170, 92, 0.07);
          box-shadow:
            inset 0 0 30px rgba(210, 170, 92, 0.04);
          color: #e9c985;
        }

        .transfer-button.success {
          border-color: rgba(216, 187, 124, 0.32);
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
          box-shadow: 0 0 12px rgba(185, 154, 89, 0.95);
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
          border: 1px solid rgba(219, 188, 126, 0.28);
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
          animation: globeFloat 5.5s ease-in-out infinite;
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
          filter:
            drop-shadow(0 0 10px rgba(219, 180, 106, 0.2))
            drop-shadow(0 0 24px rgba(35, 87, 141, 0.2));
        }

        .land {
          fill: rgba(38, 70, 104, 0.94);
          stroke: rgba(216, 181, 112, 0.52);
          stroke-width: 1.15;
          stroke-linejoin: round;
          transition:
            fill 300ms ease,
            filter 300ms ease;
        }

        .land-europe {
          fill: rgba(59, 91, 126, 0.96);
        }

        .land-africa {
          fill: rgba(44, 79, 116, 0.98);
        }

        .land-asia {
          fill: rgba(35, 67, 102, 0.96);
        }

        .land-arabia,
        .land-india {
          fill: rgba(48, 81, 115, 0.96);
        }

        .land-madagascar,
        .land-uk,
        .land-italy {
          fill: rgba(65, 97, 130, 0.98);
        }

        .globe:hover .land {
          fill: rgba(54, 92, 132, 0.98);
          filter: brightness(1.08);
        }

        .route-svg {
          position: absolute;
          inset: 5%;
          z-index: 5;
          width: 90%;
          height: 90%;
          overflow: visible;
          pointer-events: none;
        }

        .route-node {
          fill: #071525;
          stroke: #f0cf88;
          stroke-width: 2;
          filter: drop-shadow(0 0 6px rgba(240, 207, 136, 0.95));
          animation: nodePulse 2s ease-in-out infinite;
        }

        .city-dot {
          position: absolute;
          z-index: 7;
          width: 9px;
          height: 9px;
          border: 2px solid #fff0bd;
          border-radius: 50%;
          background: #c89442;
          box-shadow:
            0 0 0 6px rgba(209, 164, 83, 0.1),
            0 0 18px rgba(240, 204, 133, 0.95);
        }

        .paris-dot {
          top: 30.5%;
          left: 42.5%;
        }

        .brazza-dot {
          top: 69.5%;
          left: 60.5%;
        }

        .globe-halo {
          position: absolute;
          z-index: 1;
          border: 1px solid rgba(206, 168, 96, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .globe-halo-one {
          width: min(390px, 88vw);
          aspect-ratio: 1;
          animation: haloRotate 18s linear infinite;
        }

        .globe-halo-two {
          width: min(435px, 95vw);
          aspect-ratio: 1;
          border-color: rgba(83, 128, 178, 0.09);
          animation: haloRotateReverse 24s linear infinite;
        }

        .globe-halo-one::before,
        .globe-halo-one::after,
        .globe-halo-two::before,
        .globe-halo-two::after {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #cda45d;
          box-shadow: 0 0 12px rgba(205, 164, 93, 0.9);
          content: "";
        }

        .globe-halo-one::before {
          top: 15%;
          left: 14%;
        }

        .globe-halo-one::after {
          right: 12%;
          bottom: 22%;
        }

        .globe-halo-two::before {
          top: 47%;
          right: -2px;
          background: #7e9ec2;
          box-shadow: 0 0 12px rgba(126, 158, 194, 0.8);
        }

        .globe-halo-two::after {
          bottom: 7%;
          left: 28%;
          background: #7e9ec2;
          box-shadow: 0 0 12px rgba(126, 158, 194, 0.8);
        }

        .floating-city {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 13px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(4, 11, 21, 0.86);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
        }

        .floating-city > span {
          font-size: 1.12rem;
        }

        .floating-city div {
          display: flex;
          flex-direction: column;
        }

        .floating-city small {
          color: #778395;
          font-size: 0.58rem;
        }

        .floating-city strong {
          margin-top: 2px;
          color: #ede7db;
          font-size: 0.72rem;
        }

        .paris-label {
          top: 23%;
          left: 0;
          animation: cityFloat 4.5s ease-in-out infinite;
        }

        .brazza-label {
          right: 0;
          bottom: 16%;
          animation: cityFloat 4.5s ease-in-out 1s infinite;
        }

        .signature-route {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns:
            minmax(90px, auto)
            minmax(70px, 1fr)
            minmax(120px, auto);
          align-items: center;
          gap: 15px;
          margin-bottom: 18px;
          padding: 15px 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 17px;
          background: rgba(2, 8, 16, 0.52);
        }

        .signature-city {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .signature-city.right {
          justify-content: flex-end;
          text-align: right;
        }

        .signature-city > span {
          font-size: 1.08rem;
        }

        .signature-city div {
          display: flex;
          flex-direction: column;
        }

        .signature-city small {
          color: #727e90;
          font-size: 0.58rem;
        }

        .signature-city strong {
          margin-top: 2px;
          color: #eee8dc;
          font-size: 0.72rem;
        }

        .signature-line {
          position: relative;
          height: 1px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(193, 147, 66, 0.12),
              rgba(230, 194, 123, 0.85),
              rgba(193, 147, 66, 0.12)
            );
        }

        .signature-traveller {
          position: absolute;
          top: 50%;
          left: -10%;
          width: 27px;
          height: 3px;
          border-radius: 999px;
          background: #ffe8a8;
          box-shadow:
            0 0 8px rgba(255, 224, 150, 1),
            0 0 18px rgba(222, 178, 92, 0.78);
          transform: translateY(-50%);
          animation: signatureTravel 2.7s linear infinite;
        }

        .visual-stats {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .visual-stats > div {
          display: flex;
          min-height: 74px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.022);
        }

        .visual-stats span {
          color: #737f91;
          font-size: 0.62rem;
        }

        .visual-stats strong {
          margin-top: 6px;
          color: #d9bb7c;
          font-size: 0.79rem;
          font-weight: 600;
        }
                .confirmation-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0, 4, 10, 0.82);
          backdrop-filter: blur(18px);
          animation: overlayAppear 240ms ease both;
        }

        .confirmation-card {
          position: relative;
          width: min(490px, 100%);
          overflow: hidden;
          padding: 40px;
          border: 1px solid rgba(218, 182, 111, 0.22);
          border-radius: 27px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(200, 155, 74, 0.14),
              transparent 36%
            ),
            linear-gradient(
              155deg,
              rgba(10, 21, 37, 0.98),
              rgba(2, 8, 16, 0.99)
            );
          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.055);
          text-align: center;
          animation: cardAppear 360ms ease both;
        }

        .confirmation-glow {
          position: absolute;
          top: -150px;
          left: 50%;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          background: rgba(197, 151, 70, 0.12);
          filter: blur(70px);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .confirmation-close {
          position: absolute;
          top: 17px;
          right: 17px;
          z-index: 5;
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.025);
          color: #9ba5b4;
          cursor: pointer;
          font-size: 1.15rem;
        }

        .confirmation-icon {
          position: relative;
          z-index: 2;
          display: grid;
          width: 68px;
          height: 68px;
          place-items: center;
          margin: 0 auto 20px;
          border: 1px solid rgba(226, 194, 128, 0.5);
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(214, 174, 96, 0.21),
              rgba(214, 174, 96, 0.04)
            );
          box-shadow:
            0 0 0 9px rgba(209, 166, 86, 0.035),
            0 0 30px rgba(209, 166, 86, 0.2);
          color: #edcf91;
          font-size: 1.45rem;
        }

        .confirmation-eyebrow {
          position: relative;
          z-index: 2;
          display: block;
          margin-bottom: 12px;
          color: #d3ad65;
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .confirmation-card h2 {
          position: relative;
          z-index: 2;
          margin-bottom: 12px;
          color: #f8f2e7;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.8rem, 5vw, 2.55rem);
          font-weight: 400;
          line-height: 1.08;
        }

        .confirmation-card > p {
          position: relative;
          z-index: 2;
          max-width: 390px;
          margin: 0 auto 26px;
          color: #8994a5;
          font-size: 0.79rem;
          line-height: 1.65;
        }

        .confirmation-route {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding: 17px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 17px;
          background: rgba(1, 6, 13, 0.48);
        }

        .confirmation-route > div:first-child,
        .confirmation-route > div:last-child {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .confirmation-flag {
          font-size: 1.45rem;
        }

        .confirmation-route small {
          color: #9aa4b3;
          font-size: 0.66rem;
        }

        .confirmation-journey {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .confirmation-journey span {
          width: 100%;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(222, 184, 108, 0.8)
            );
        }

        .confirmation-journey span:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(222, 184, 108, 0.8),
              transparent
            );
        }

        .confirmation-journey strong {
          color: #f2d28e;
          font-size: 0.78rem;
          text-shadow: 0 0 12px rgba(242, 210, 142, 0.85);
        }

        .confirmation-details {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.018);
        }

        .confirmation-details > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .confirmation-details > div:last-child {
          border-bottom: 0;
        }

        .confirmation-details span {
          color: #778294;
          font-size: 0.69rem;
        }

        .confirmation-details strong {
          color: #e8dfcf;
          font-size: 0.74rem;
        }

        .confirmation-details > div:nth-child(2) strong {
          color: #d8b873;
        }

        .confirmation-button {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 15px 18px;
          border: 1px solid rgba(255, 233, 188, 0.5);
          border-radius: 15px;
          background:
            linear-gradient(
              110deg,
              #b88a3d,
              #e1bd74,
              #b78536
            );
          color: #08101b;
          cursor: pointer;
          font-size: 0.77rem;
          font-weight: 800;
        }

        .confirmation-brand {
          position: relative;
          z-index: 2;
          display: block;
          margin-top: 18px;
          color: #706044;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.28em;
        }

        @keyframes travel {
          from {
            left: -34%;
          }

          to {
            left: 100%;
          }
        }

        @keyframes signatureTravel {
          from {
            left: -15%;
          }

          to {
            left: 100%;
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
            transform: scale(0.82);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            opacity: 0.75;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes globeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes cityFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes haloRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes haloRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes overlayAppear {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1040px) {
          .main-grid {
            grid-template-columns: 1fr;
          }

          .visual-panel {
            min-height: 670px;
          }

          .globe-stage {
            min-height: 430px;
          }
        }

        @media (max-width: 680px) {
          .send-page {
            padding: 27px 14px 45px;
          }

          .top-line {
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

          .transfer-panel {
            padding: 22px 17px;
          }

          .visual-panel {
            min-height: 605px;
            padding: 22px 16px;
          }

          .route-title {
            align-items: center;
          }

          .route-card {
            grid-template-columns: 1fr;
          }

          .country-block.destination {
            flex-direction: row-reverse;
            justify-content: flex-start;
            text-align: left;
          }

          .route-visual {
            width: calc(100% - 25px);
            margin: 5px auto;
          }

          .amount-box input {
            padding: 17px 14px;
          }

          .currency-select {
            min-width: 103px;
            padding: 0 13px;
          }

          .conversion-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .globe-stage {
            min-height: 385px;
          }

          .globe {
            width: min(300px, 78vw);
          }

          .globe-halo-one {
            width: min(345px, 91vw);
          }

          .globe-halo-two {
            width: min(375px, 98vw);
          }

          .floating-city {
            padding: 8px 10px;
          }

          .paris-label {
            top: 18%;
          }

          .brazza-label {
            bottom: 12%;
          }

          .signature-route {
            grid-template-columns: auto minmax(35px, 1fr) auto;
            gap: 8px;
            padding: 13px 10px;
          }

          .signature-city {
            gap: 6px;
          }

          .signature-city strong {
            font-size: 0.63rem;
          }

          .visual-stats {
            gap: 8px;
          }

          .visual-stats > div {
            min-height: 68px;
            padding: 12px;
          }

          .confirmation-card {
            padding: 36px 20px 25px;
          }
        }

        @media (max-width: 420px) {
          h1 {
            font-size: 2.45rem;
          }

          .instant-badge {
            display: none;
          }

          .beneficiary-card {
            align-items: flex-start;
          }

          .change-button {
            padding-right: 0;
          }

          .globe-stage {
            min-height: 345px;
          }

          .globe {
            width: 260px;
          }

          .globe-halo-one {
            width: 290px;
          }

          .globe-halo-two {
            width: 315px;
          }

          .floating-city {
            transform: scale(0.9);
          }

          .paris-label {
            left: -8px;
          }

          .brazza-label {
            right: -8px;
          }

          .confirmation-route {
            gap: 8px;
            padding: 14px 10px;
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
