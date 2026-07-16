"use client";

import { useState } from "react";

const EARTH_IMAGE =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Earth_seen_from_Apollo_17.jpg";

function Flag({ country, width = 30, height = 20 }) {
  if (country === "france") {
    return (
      <svg
        viewBox="0 0 3 2"
        width={width}
        height={height}
        aria-label="Drapeau français"
        style={flagStyle}
      >
        <rect width="1" height="2" fill="#002395" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#ed2939" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 3 2"
      width={width}
      height={height}
      aria-label="Drapeau du Congo"
      style={flagStyle}
    >
      <rect width="3" height="2" fill="#009543" />

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

const flagStyle = {
  display: "block",
  flexShrink: 0,
  borderRadius: "3px",
  boxShadow: "0 3px 10px rgba(0,0,0,.4)",
};

function PremiumGlobe() {
  return (
    <div className="globe-area">
      <div className="globe-halo" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="globe">
        <img
          src={EARTH_IMAGE}
          alt="Globe terrestre centré sur l’Europe et l’Afrique"
          className="earth-photo"
        />

        <div className="earth-gold" />
        <div className="earth-grid earth-grid-horizontal" />
        <div className="earth-grid earth-grid-vertical" />
        <div className="earth-light" />
        <div className="earth-shadow" />

        <svg
          className="globe-route"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="routeGold" x1="0" x2="1">
              <stop offset="0%" stopColor="#b77722" />
              <stop offset="45%" stopColor="#fff1bd" />
              <stop offset="100%" stopColor="#c98b31" />
            </linearGradient>

            <filter
              id="routeGlow"
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M270 151 C319 202 338 268 329 341"
            fill="none"
            stroke="url(#routeGold)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#routeGlow)"
          />

          <circle
            cx="270"
            cy="151"
            r="8"
            fill="#fff4c8"
            stroke="#e5b75f"
            strokeWidth="3"
            filter="url(#routeGlow)"
          />

          <circle
            cx="329"
            cy="341"
            r="8"
            fill="#fff4c8"
            stroke="#e5b75f"
            strokeWidth="3"
            filter="url(#routeGlow)"
          />

          <circle
            r="5.5"
            fill="#fff9de"
            filter="url(#routeGlow)"
          >
            <animateMotion
              dur="2.8s"
              repeatCount="indefinite"
              path="M270 151 C319 202 338 268 329 341"
            />
          </circle>
        </svg>

        <div className="globe-border" />
      </div>

      <div className="city-card paris-card">
        <Flag
          country="france"
          width={32}
          height={22}
        />

        <div>
          <small>Départ</small>
          <strong>Paris</strong>
        </div>
      </div>

      <div className="city-card brazzaville-card">
        <Flag
          country="congo"
          width={32}
          height={22}
        />

        <div>
          <small>Arrivée</small>
          <strong>Brazzaville</strong>
        </div>
      </div>
    </div>
  );
}

export default function EnvoyerPage() {
  const [amount, setAmount] = useState("250");
  const [status, setStatus] = useState("ready");
  const [confirmation, setConfirmation] =
    useState(false);

  const rate = 655.957;
  const fees = 3.9;
  const amountNumber = Number(amount) || 0;
  const received = Math.round(amountNumber * rate);

  const formatNumber = (value) =>
    new Intl.NumberFormat("fr-FR").format(value);

  const reset = () => {
    setStatus("ready");
    setConfirmation(false);
  };

  const transfer = () => {
    if (
      amountNumber <= 0 ||
      status === "loading"
    ) {
      return;
    }

    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
      setConfirmation(true);
    }, 2200);
  };

  return (
    <main className="page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="shell">
        <header className="header">
          <div>
            <span className="eyebrow">
              TRANSFERT INTERNATIONAL
            </span>

            <h1>Envoyer de l’argent</h1>

            <p>
              De Paris vers vos proches, en toute
              simplicité.
            </p>
          </div>

          <div className="secure">
            <span />
            Transfert sécurisé
          </div>
        </header>

        <div className="layout">
          <section className="panel transfer-panel">
            <div className="title-row">
              <div>
                <span className="section-label">
                  VOTRE TRANSFERT
                </span>

                <h2>Paris vers Brazzaville</h2>
              </div>

              <span className="instant">
                Instantané
              </span>
            </div>

            <div className="route-card">
              <div className="country">
                <div className="flag-circle">
                  <Flag
                    country="france"
                    width={31}
                    height={21}
                  />
                </div>

                <div>
                  <small>Départ</small>
                  <strong>Paris</strong>
                  <span>France</span>
                </div>
              </div>

              <div className="route">
                <i className="point point-left" />

                <div className="route-line">
                  <i />
                </div>

                <b>✦</b>

                <i className="point point-right" />
              </div>

              <div className="country country-right">
                <div>
                  <small>Destination</small>
                  <strong>Brazzaville</strong>
                  <span>Congo</span>
                </div>

                <div className="flag-circle">
                  <Flag
                    country="congo"
                    width={31}
                    height={21}
                  />
                </div>
              </div>
            </div>

            <label
              className="input-label"
              htmlFor="amount"
            >
              Vous envoyez
            </label>

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
                    reset();
                  }
                }}
              />

              <div className="currency">
                <Flag
                  country="france"
                  width={25}
                  height={17}
                />

                <strong>EUR</strong>
                <span>⌄</span>
              </div>
            </div>

            <div className="conversion">
              <div>
                <span>Votre proche reçoit</span>

                <strong>
                  {formatNumber(received)} FCFA
                </strong>
              </div>

              <small>
                1 EUR = {rate.toFixed(3)} FCFA
              </small>
            </div>

            <div className="beneficiary">
              <div className="avatar">ME</div>

              <div className="beneficiary-text">
                <span>Bénéficiaire</span>

                <strong>
                  Marie-Espérance
                </strong>

                <small>
                  Mobile Money • Brazzaville
                </small>
              </div>

              <button type="button">
                Modifier
              </button>
            </div>

            <div className="summary">
              <div>
                <span>Montant envoyé</span>

                <strong>
                  {amountNumber.toFixed(2)} €
                </strong>
              </div>

              <div>
                <span>Frais YVI PAY</span>

                <strong>
                  {fees.toFixed(2)} €
                </strong>
              </div>

              <div className="total">
                <span>Total</span>

                <strong>
                  {(amountNumber + fees).toFixed(2)} €
                </strong>
              </div>
            </div>

            <button
              type="button"
              className={`transfer-button ${status}`}
              disabled={
                amountNumber <= 0 ||
                status === "loading"
              }
              onClick={
                status === "success"
                  ? reset
                  : transfer
              }
            >
              {status === "ready" && (
                <>
                  Confirmer le transfert
                  <span>→</span>
                </>
              )}

              {status === "loading" && (
                <>
                  <span className="loader" />
                  Transfert en cours…
                </>
              )}

              {status === "success" && (
                <>
                  <span className="check">
                    ✓
                  </span>

                  Transfert envoyé avec succès
                </>
              )}
            </button>

            <p className="security-note">
              ◆ Vos données sont protégées par un
              chiffrement sécurisé.
            </p>
          </section>

          <aside className="panel visual-panel">
            <div className="visual-header">
              <span className="section-label">
                YVI PAY SIGNATURE
              </span>

              <span className="network">
                <i />
                Réseau actif
              </span>
            </div>

            <PremiumGlobe />

            <div className="signature-route">
              <div className="signature-city">
                <Flag country="france" />

                <div>
                  <small>France</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="signature-line">
                <i />
              </div>

              <div className="signature-city signature-right">
                <div>
                  <small>Congo</small>

                  <strong>
                    Brazzaville
                  </strong>
                </div>

                <Flag country="congo" />
              </div>
            </div>
            <div className="stats">
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
      </section>

      {confirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-card">
            <button
              type="button"
              className="close"
              onClick={reset}
            >
              ×
            </button>

            <div className="confirmation-check">
              ✓
            </div>

            <span className="confirmation-label">
              TRANSFERT CONFIRMÉ
            </span>

            <h2>Votre argent est en route.</h2>

            <p>
              Marie-Espérance recevra son transfert
              directement sur son portefeuille Mobile Money.
            </p>

            <div className="confirmation-route">
              <div>
                <Flag
                  country="france"
                  width={36}
                  height={24}
                />
                <small>Paris</small>
              </div>

              <span>━━━━ ✦ ━━━━</span>

              <div>
                <Flag
                  country="congo"
                  width={36}
                  height={24}
                />
                <small>Brazzaville</small>
              </div>
            </div>

            <div className="confirmation-details">
              <div>
                <span>Montant envoyé</span>
                <strong>
                  {amountNumber.toFixed(2)} €
                </strong>
              </div>

              <div>
                <span>Montant reçu</span>
                <strong>
                  {formatNumber(received)} FCFA
                </strong>
              </div>

              <div>
                <span>Référence</span>
                <strong>
                  YVI-{new Date().getFullYear()}-0725
                </strong>
              </div>
            </div>

            <button
              type="button"
              className="finish"
              onClick={reset}
            >
              Terminer
            </button>

            <span className="brand">YVI PAY</span>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
          background: #020711;
        }

        button,
        input {
          font: inherit;
        }

        .page {
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
              #020711,
              #07101e 48%,
              #02050b
            );
          isolation: isolate;
        }

        .ambient {
          position: absolute;
          z-index: -1;
          border-radius: 999px;
          filter: blur(90px);
        }

        .ambient-left {
          top: 8%;
          left: -8%;
          width: 320px;
          height: 320px;
          background: rgba(34, 72, 123, 0.22);
        }

        .ambient-right {
          right: -8%;
          bottom: 0;
          width: 380px;
          height: 380px;
          background: rgba(183, 136, 52, 0.1);
        }

        .shell {
          width: min(1320px, 100%);
          margin: auto;
        }

        .header {
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
          font-family: Georgia, serif;
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          font-weight: 400;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .header p {
          margin-bottom: 0;
          color: #8994a6;
        }

        .secure {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px;
          border: 1px solid rgba(205, 168, 101, 0.19);
          border-radius: 999px;
          background: rgba(7, 14, 25, 0.75);
          color: #cfd7e4;
          font-size: 0.76rem;
        }

        .secure span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d5ad62;
          box-shadow: 0 0 14px #d5ad62;
        }

        .layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.04fr)
            minmax(390px, 0.96fr);
          gap: 24px;
        }

        .panel {
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
            inset 0 1px rgba(255, 255, 255, 0.045);
        }

        .transfer-panel {
          padding: clamp(24px, 4vw, 42px);
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .title-row h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(1.55rem, 3vw, 2.25rem);
          font-weight: 400;
        }

        .instant {
          height: max-content;
          padding: 8px 12px;
          border: 1px solid rgba(216, 183, 113, 0.2);
          border-radius: 999px;
          color: #d8b771;
          font-size: 0.68rem;
        }

        .route-card {
          display: grid;
          grid-template-columns: 1fr 0.8fr 1fr;
          align-items: center;
          gap: 18px;
          margin-bottom: 27px;
          padding: 21px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          background: rgba(1, 6, 13, 0.48);
        }

        .country {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .country-right {
          justify-content: flex-end;
          text-align: right;
        }

        .country > div:not(.flag-circle) {
          display: flex;
          flex-direction: column;
        }

        .country small,
        .country span {
          color: #747f91;
          font-size: 0.7rem;
        }

        .country strong {
          margin: 2px 0;
          font-size: 0.91rem;
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

        .route {
          position: relative;
          display: flex;
          align-items: center;
        }

        .route-line {
          position: relative;
          width: 100%;
          height: 1px;
          overflow: hidden;
          background: #cfa75e;
        }

        .route-line i,
        .signature-line i {
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

        .route b {
          position: absolute;
          left: 50%;
          color: #f3d491;
          transform: translateX(-50%);
        }

        .point {
          position: absolute;
          z-index: 2;
          width: 7px;
          height: 7px;
          border: 1px solid #e9c477;
          border-radius: 50%;
          background: #0b1320;
          box-shadow: 0 0 11px #e9c477;
        }

        .point-left {
          left: -1px;
        }

        .point-right {
          right: -1px;
        }

        .input-label {
          display: block;
          margin-bottom: 9px;
          color: #919baa;
          font-size: 0.75rem;
        }

        .amount-box {
          display: flex;
          overflow: hidden;
          margin-bottom: 17px;
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
          font-family: Georgia, serif;
          font-size: 2rem;
        }

        .currency {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 118px;
          padding: 0 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.06);
        }

        .currency span {
          margin-left: auto;
          color: #8c96a6;
        }

        .conversion {
          display: flex;
          align-items: flex-end;
                    justify-content: space-between;
          gap: 18px;
          margin-bottom: 24px;
        }

        .conversion > div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .conversion span,
        .conversion small {
          color: #7f8999;
          font-size: 0.7rem;
        }

        .conversion strong {
          color: #dcb96f;
        }

        .beneficiary {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 23px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
        }

        .avatar {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid rgba(218, 181, 109, 0.28);
          border-radius: 50%;
          color: #e2bd74;
          font-size: 0.7rem;
        }

        .beneficiary-text {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .beneficiary-text span,
        .beneficiary-text small {
          color: #737e90;
          font-size: 0.68rem;
        }

        .beneficiary-text strong {
          margin: 3px 0;
          font-size: 0.86rem;
        }

        .beneficiary button {
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

        .summary div {
          display: flex;
          justify-content: space-between;
        }

        .summary span {
          color: #7e8999;
          font-size: 0.73rem;
        }

        .summary strong {
          font-size: 0.8rem;
        }

        .summary .total {
          margin-top: 4px;
          padding-top: 13px;
          border-top: 1px solid rgba(255, 255, 255, 0.065);
        }

        .transfer-button,
        .finish {
          display: flex;
          width: 100%;
          min-height: 57px;
          align-items: center;
          justify-content: center;
          gap: 12px;
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
          font-weight: 800;
        }

        .transfer-button.loading {
          color: #e9c985;
          background: rgba(210, 170, 92, 0.07);
        }

        .transfer-button.success {
          color: #d8bb7c;
          background: rgba(191, 148, 72, 0.17);
        }

        .loader {
          width: 17px;
          height: 17px;
          border: 2px solid rgba(233, 201, 133, 0.25);
          border-top-color: #e9c985;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }

        .check {
          display: grid;
          width: 21px;
          height: 21px;
          place-items: center;
          border: 1px solid #d8bb7c;
          border-radius: 50%;
        }

        .security-note {
          margin: 13px 0 0;
          color: #687487;
          text-align: center;
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

        .visual-header {
          display: flex;
          justify-content: space-between;
        }

        .network {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #9da8b7;
          font-size: 0.67rem;
        }

        .network i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b99a59;
          box-shadow: 0 0 12px #b99a59;
        }

        .globe-area {
          position: relative;
          display: grid;
          min-height: 455px;
          flex: 1;
          place-items: center;
        }

        .globe-halo {
          position: absolute;
          width: min(470px, 94vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(32, 101, 164, 0.3),
            rgba(17, 65, 112, 0.12) 42%,
            transparent 70%
          );
          filter: blur(10px);
        }

        .globe {
          position: relative;
          z-index: 2;
          width: min(355px, 75vw);
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 50%;
          background: #031023;
          box-shadow:
            0 0 0 1px rgba(224, 186, 112, 0.44),
            0 0 45px rgba(45, 111, 181, 0.45),
            0 0 100px rgba(24, 74, 128, 0.3);
          animation: float 5.5s ease-in-out infinite;
        }

        .earth-photo {
          position: absolute;
          inset: -3%;
          width: 106%;
          height: 106%;
          object-fit: cover;
          object-position: 52% 48%;
          filter:
            brightness(0.68)
            contrast(1.2)
            saturate(0.8)
            sepia(0.08);
          transform: scale(1.04);
        }

        .earth-gold {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            linear-gradient(
              120deg,
              rgba(5, 20, 40, 0.08),
              rgba(211, 164, 78, 0.12)
            ),
            radial-gradient(
              circle at 55% 45%,
              transparent 42%,
              rgba(3, 10, 22, 0.3) 72%
            );
          mix-blend-mode: screen;
        }

        .earth-grid {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }

        .earth-grid-horizontal {
          background: repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 35px,
            rgba(202, 220, 237, 0.13) 36px,
            transparent 37px
          );
        }

        .earth-grid-vertical {
          background: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 44px,
            rgba(202, 220, 237, 0.12) 45px,
            transparent 46px
          );
          transform: scaleX(0.74);
        }

        .earth-light {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle at 28% 22%,
            rgba(255, 255, 255, 0.22),
            transparent 34%
          );
        }

        .earth-shadow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow:
            inset -58px -34px 90px rgba(0, 0, 0, 0.78),
            inset 28px 16px 42px rgba(82, 146, 208, 0.13);
        }

        .globe-route {
          position: absolute;
          inset: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
        }

        .globe-border {
          position: absolute;
          inset: 0;
          z-index: 6;
          border: 1.5px solid rgba(228, 190, 115, 0.52);
          border-radius: 50%;
          box-shadow:
            inset 0 0 24px rgba(222, 181, 104, 0.12),
            0 0 20px rgba(222, 181, 104, 0.12);
        }

        .orbit {
          position: absolute;
          z-index: 1;
          border: 1px solid rgba(201, 163, 91, 0.11);
          border-radius: 50%;
        }

        .orbit-one {
          width: min(405px, 88vw);
          aspect-ratio: 1;
          animation: orbit 18s linear infinite;
        }

        .orbit-two {
          width: min(455px, 96vw);
          aspect-ratio: 1;
          border-style: dashed;
          animation: reverseOrbit 25s linear infinite;
        }

        .city-card {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 13px;
          background: rgba(3, 10, 19, 0.9);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(8px);
        }

        .city-card div {
          display: flex;
          flex-direction: column;
        }

        .city-card small {
          color: #707d90;
          font-size: 0.57rem;
        }

        .city-card strong {
          font-size: 0.72rem;
        }

        .paris-card {
          top: 23%;
          left: 0;
        }

        .brazzaville-card {
          right: 0;
          bottom: 18%;
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

        .signature-city div {
          display: flex;
          flex-direction: column;
        }

        .signature-city small {
          color: #6e7b8e;
          font-size: 0.59rem;
        }

        .signature-city strong {
          font-size: 0.72rem;
        }

        .signature-right {
          text-align: right;
        }

        .signature-line {
          position: relative;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            transparent,
            #dcb56b,
            transparent
          );
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .stats div {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
        }

        .stats span {
          color: #667387;
          font-size: 0.6rem;
        }

        .stats strong {
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
          background: rgba(0, 4, 10, 0.82);
          backdrop-filter: blur(14px);
        }

        .confirmation-card {
          position: relative;
          width: min(485px, 100%);
          padding: 43px 35px 29px;
          border: 1px solid rgba(224, 190, 123, 0.26);
          border-radius: 29px;
          background: linear-gradient(
            155deg,
            #0c1726,
            #030913
          );
          text-align: center;
        }

        .close {
          position: absolute;
          top: 15px;
          right: 17px;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          background: transparent;
          color: #7f8a9a;
          cursor: pointer;
        }

        .confirmation-check {
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

        .confirmation-label {
          display: block;
          margin-bottom: 10px;
          color: #d7b66f;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .confirmation-card h2 {
          margin-bottom: 11px;
          font-family: Georgia, serif;
          font-size: 2.2rem;
          font-weight: 400;
        }

        .confirmation-card > p {
          color: #8995a6;
          font-size: 0.78rem;
          line-height: 1.65;
        }

        .confirmation-route {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 15px;
          margin: 24px 0 20px;
          padding: 17px 19px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
        }

        .confirmation-route div {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }

        .confirmation-route span {
          color: #e7c984;
          font-size: 0.75rem;
        }

        .confirmation-details {
          margin-bottom: 22px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 17px;
        }

        .confirmation-details div {
          display: flex;
          justify-content: space-between;
          padding: 12px 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.045);
        }

        .confirmation-details div:last-child {
          border-bottom: 0;
        }

        .confirmation-details span {
          color: #798597;
          font-size: 0.68rem;
        }

        .confirmation-details strong {
          font-size: 0.72rem;
        }

        .finish {
          min-height: 49px;
        }

        .brand {
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

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverseOrbit {
          to {
            transform: rotate(-360deg);
          }
        }

        @media (max-width: 1050px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 690px) {
          .page {
            padding: 25px 14px 50px;
          }

          .header {
            flex-direction: column;
          }

          .route-card {
            grid-template-columns: 1fr;
          }

          .country-right {
            justify-content: flex-start;
            flex-direction: row-reverse;
            text-align: left;
          }

          .conversion {
            align-items: flex-start;
            flex-direction: column;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .globe {
            width: min(320px, 82vw);
          }

          .city-card {
            transform: scale(0.9);
          }
        }
      `}</style>
    </main>
  );
}
