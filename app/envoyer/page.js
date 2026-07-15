"use client";

import { useState } from "react";

function FranceFlag({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 3 2"
      role="img"
      aria-label="Drapeau de la France"
    >
      <rect width="1" height="2" x="0" fill="#002395" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#ed2939" />
    </svg>
  );
}

function CongoFlag({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 3 2"
      role="img"
      aria-label="Drapeau de la République du Congo"
    >
      <defs>
        <clipPath id="congoClip">
          <rect width="3" height="2" rx="0.08" />
        </clipPath>
      </defs>

      <g clipPath="url(#congoClip)">
        <rect width="3" height="2" fill="#009543" />
        <polygon
          points="0.65,2 1.35,2 2.35,0 1.65,0"
          fill="#fbde4a"
        />
        <polygon
          points="1.35,2 3,2 3,0 2.35,0"
          fill="#dc241f"
        />
      </g>
    </svg>
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
            <span className="eyebrow">
              TRANSFERT INTERNATIONAL
            </span>

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
                <span className="section-label">
                  VOTRE TRANSFERT
                </span>

                <h2>Paris vers Brazzaville</h2>
              </div>

              <span className="instant-badge">
                Instantané
              </span>
            </div>

            <div className="route-card">
              <div className="country-block">
                <div className="flag-circle">
                  <FranceFlag className="flag-image" />
                </div>

                <div>
                  <span className="country-caption">
                    Départ
                  </span>

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
                  <span className="country-caption">
                    Destination
                  </span>

                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </div>

                <div className="flag-circle">
                  <CongoFlag className="flag-image" />
                </div>
              </div>
            </div>

            <div className="amount-section">
              <label htmlFor="amount">
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
                      resetTransfer();
                    }
                  }}
                />

                <div className="currency-select">
                  <FranceFlag className="currency-flag" />

                  <strong>EUR</strong>

                  <span className="currency-arrow">
                    ⌄
                  </span>
                </div>
              </div>
            </div>

            <div className="conversion-row">
              <div>
                <span>Votre proche reçoit</span>

                <strong>
                  {formatNumber(received)} FCFA
                </strong>
              </div>

              <div className="exchange-info">
                <span>1 EUR</span>

                <span className="exchange-dash">
                  =
                </span>

                <span>
                  {rate.toFixed(3)} FCFA
                </span>
              </div>
            </div>

            <div className="beneficiary-card">
              <div className="beneficiary-avatar">
                ME
              </div>

              <div className="beneficiary-info">
                <span>Bénéficiaire</span>

                <strong>
                  Marie-Espérance
                </strong>

                <small>
                  Mobile Money • Brazzaville
                </small>
              </div>

              <button
                type="button"
                className="change-button"
              >
                Modifier
              </button>
            </div>

            <div className="summary">
              <div>
                <span>Montant envoyé</span>

                <strong>
                  {numericAmount.toFixed(2)} €
                </strong>
              </div>

              <div>
                <span>Frais YVI PAY</span>

                <strong>
                  {fees.toFixed(2)} €
                </strong>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  {(numericAmount + fees).toFixed(2)} €
                </strong>
              </div>
            </div>

            <button
              type="button"
              className={`transfer-button ${status}`}
              onClick={
                status === "success"
                  ? resetTransfer
                  : startTransfer
              }
              disabled={
                numericAmount <= 0 ||
                status === "loading"
              }
            >
              {status === "ready" && (
                <>
                  <span>
                    Confirmer le transfert
                  </span>

                  <span className="button-arrow">
                    →
                  </span>
                </>
              )}

              {status === "loading" && (
                <>
                  <span className="button-loader" />

                  <span>
                    Transfert en cours…
                  </span>
                </>
              )}

              {status === "success" && (
                <>
                  <span className="success-check">
                    ✓
                  </span>

                  <span>
                    Transfert envoyé avec succès
                  </span>
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
              <span className="section-label">
                YVI PAY SIGNATURE
              </span>

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

                <div className="continent continent-one" />
                <div className="continent continent-two" />
                <div className="continent continent-three" />

                <span className="city-dot paris-dot" />
                <span className="city-dot brazza-dot" />

                <div className="globe-route">
                  <span className="globe-route-light" />
                </div>
              </div>

              <div className="floating-city paris-label">
                <FranceFlag className="floating-flag" />

                <div>
                  <small>Départ</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div className="floating-city brazza-label">
                <CongoFlag className="floating-flag" />

                <div>
                  <small>Arrivée</small>
                  <strong>Brazzaville</strong>
                </div>
              </div>
            </div>

            <div className="signature-route">
              <div className="signature-city">
                <FranceFlag className="signature-flag" />

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

                <CongoFlag className="signature-flag" />
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

              <div className="confirmation-icon">
                <span>✓</span>
              </div>

              <span className="confirmation-eyebrow">
                TRANSFERT CONFIRMÉ
              </span>

              <h2>
                Votre argent est en route.
              </h2>

              <p>
                Marie-Espérance recevra son transfert directement sur son
                portefeuille Mobile Money.
              </p>

              <div className="confirmation-route">
                <div>
                  <FranceFlag className="confirmation-flag" />
                  <small>Paris</small>
                </div>

                <div className="confirmation-journey">
                  <span />
                  <strong>✦</strong>
                  <span />
                </div>

                <div>
                  <CongoFlag className="confirmation-flag" />
                  <small>Brazzaville</small>
                </div>
              </div>

              <div className="confirmation-details">
                <div>
                  <span>Montant envoyé</span>

                  <strong>
                    {numericAmount.toFixed(2)} €
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
                className="confirmation-button"
                onClick={resetTransfer}
              >
                Terminer
              </button>

              <span className="confirmation-brand">
                YVI PAY
              </span>
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
          grid-template-columns:
            minmax(0, 1.04fr)
            minmax(390px, 0.96fr);
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
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .flag-image {
          width: 31px;
          height: 21px;
          border-radius: 3px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
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

        .route-light,
        .signature-traveller {
          position: absolute;
          left: -30%;
          width: 34%;
          border-radius: 999px;
          background: #f5d592;
          box-shadow: 0 0 13px #e8bd6e;
          animation: travel 2.5s linear infinite;
        }

        .route-light {
          top: -1px;
          height: 3px;
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

        .route-point-left {
          left: -1px;
        }

        .route-point-right {
          right: -1px;
        }

        .route-plane {
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

        .currency-flag {
          width: 25px;
          height: 17px;
          border-radius: 3px;
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
            0 0 70px rgba(36, 90, 148, 0.28),
            inset -32px -20px 60px rgba(0, 0, 0, 0.55);
          animation: globeFloat 5.5s ease-in-out infinite;
        }

        .globe-grid {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          opacity: 0.36;
        }

        .globe-grid-one {
          background: repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 26px,
            rgba(165, 192, 222, 0.15) 27px,
            transparent 28px
          );
        }

        .globe-grid-two {
          background: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 34px,
            rgba(165, 192, 222, 0.12) 35px,
            transparent 36px
          );
          transform: scaleX(0.72);
        }

        .continent {
          position: absolute;
          border: 1px solid rgba(212, 180, 113, 0.19);
          background: linear-gradient(
            145deg,
            rgba(75, 119, 156, 0.3),
            rgba(28, 66, 104, 0.17)
          );
        }

        .continent-one {
          top: 24%;
          left: 28%;
          width: 72px;
          height: 107px;
          border-radius:
            48% 40% 52% 37% /
            30% 48% 49% 64%;
        }

        .continent-two {
          top: 31%;
          left: 49%;
          width: 101px;
          height: 149px;
          border-radius:
            45% 56% 42% 57% /
            38% 37% 63% 61%;
          transform: rotate(12deg);
        }

        .continent-three {
          top: 18%;
          right: 14%;
          width: 73px;
          height: 66px;
          border-radius:
            57% 44% 53% 35% /
            47% 39% 62% 51%;
        }

        .city-dot {
          position: absolute;
          z-index: 6;
          width: 9px;
          height: 9px;
          border: 2px solid #f1d08b;
          border-radius: 50%;
          background: #ad7b30;
          box-shadow: 0 0 19px rgba(238, 202, 127, 0.95);
        }

        .paris-dot {
          top: 34%;
          left: 40%;
        }

        .brazza-dot {
          top: 65%;
          left: 55%;
        }

        .globe-route {
          position: absolute;
          top: 38%;
          left: 41%;
          z-index: 5;
          width: 32%;
          height: 31%;
          overflow: hidden;
          border-top: 2px solid rgba(235, 198, 121, 0.82);
          border-right: 2px solid rgba(235, 198, 121, 0.25);
          border-radius: 0 100% 0 0;
          transform: rotate(19deg);
        }

        .globe-route-light {
          position: absolute;
          top: -3px;
          left: -20%;
          width: 34%;
          height: 4px;
          border-radius: 999px;
          background: #fff0bd;
          box-shadow: 0 0 14px rgba(255, 220, 146, 1);
          animation: globeTravel 2.7s ease-in-out infinite;
        }

        .globe-halo {
          position: absolute;
          z-index: 1;
          border: 1px solid rgba(201, 163, 91, 0.11);
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

        .floating-flag {
          width: 30px;
          height: 20px;
          border-radius: 3px;
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
          grid-template-columns:
            auto
            1fr
            auto;
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

        .signature-city.right {
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

        .signature-flag {
          width: 30px;
          height: 20px;
          border-radius: 3px;
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

        .signature-traveller {
          top: -2px;
          height: 5px;
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
          background: linear-gradient(
            155deg,
            #0c1726 0%,
            #030913 100%
          );
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
          grid-template-columns:
            auto
            1fr
            auto;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding: 17px 19px;
          border: 1px solid rgba(255, 255, 255, 0.06);
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
          width: 36px;
          height: 24px;
          border-radius: 3px;
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

        @keyframes globeTravel {
          from {
            left: -20%;
            opacity: 0;
          }

          20%,
          80% {
            opacity: 1;
          }

          to {
            left: 100%;
            opacity: 0;
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

          .country-block.destination {
            justify-content: flex-start;
            flex-direction: row-reverse;
            text-align: left;
          }

          .conversion-row {
            flex-direction: column;
            align-items: flex-start;
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
