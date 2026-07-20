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
              <div>
                <span className="eyebrow">YVI PAY</span>
                <h2>Votre transfert, sans frontières.</h2>
              </div>

              <div className="live-status">
                <span />
                Réseau actif
              </div>
            </div>

            <div
              className="premium-globe-stage"
              aria-label="Trajet Paris vers Brazzaville"
            >
              <div className="premium-globe-halo" />

              <img
                className="premium-globe-image"
                src="/yvi-globe-premium.png"
                alt="Globe YVI PAY reliant Paris à Brazzaville"
              />
            </div>

            <div className="premium-route-card">
              <div className="premium-location">
                <span className="premium-flag">🇫🇷</span>

                <div>
                  <small>Départ</small>
                  <strong>Paris</strong>
                </div>
              </div>

              <div
                className="premium-route-line"
                aria-hidden="true"
              >
                <span className="premium-route-point" />
                <span className="premium-route-light" />
                <span className="premium-route-traveler">✦</span>
                <span className="premium-route-point" />
              </div>

              <div className="premium-location premium-location-end">
                <span className="premium-flag">🇨🇬</span>

                <div>
                  <small>Destination</small>
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
          top: 50%;
          left: 50%;
          z-index: 3;
          color: #f3d491;
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
          color: #e2bd74;
          font-size: 0.7rem;
          font-weight: 700;
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
          margin: 3px 0;
          color: #f1ecdf;
          font-size: 0.86rem;
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

        .transfer-button,
        .confirmation-button {
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
          color: #08101d;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .transfer-button.loading {
          background: rgba(210, 170, 92, 0.07);
          color: #e9c985;
        }

        .transfer-button.success {
          background: rgba(191, 148, 72, 0.17);
          color: #d8bb7c;
        }

        .button-loader {
          width: 17px;
          height: 17px;
          border: 2px solid rgba(233, 201, 133, 0.25);
          border-top-color: #e9c985;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
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

        .visual-panel {
          display: flex;
          min-height: 690px;
          flex-direction: column;
          padding: clamp(23px, 3.5vw, 37px);
          background:
            radial-gradient(
              circle at 50% 38%,
              rgba(18, 57, 104, 0.3),
              transparent 42%
            ),
            linear-gradient(
              160deg,
              rgba(8, 18, 32, 0.96),
              rgba(2, 7, 14, 0.98)
            );
        }

        .visual-top {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .visual-top h2 {
          max-width: 330px;
          margin-bottom: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 400;
          line-height: 1.1;
        }

        .live-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-width: max-content;
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

        .premium-globe-stage {
          position: relative;
          display: grid;
          min-height: 410px;
          flex: 1;
          place-items: center;
          margin: 10px 0 5px;
        }

        .premium-globe-halo {
          position: absolute;
          width: min(430px, 94%);
          aspect-ratio: 1;
          border: 1px solid rgba(214, 176, 104, 0.12);
          border-radius: 50%;
          box-shadow:
            0 0 80px rgba(24, 72, 128, 0.32),
            inset 0 0 60px rgba(201, 158, 82, 0.05);
          animation: haloPulse 4s ease-in-out infinite;
        }

        .premium-globe-image {
          position: relative;
          z-index: 2;
          display: block;
          width: min(420px, 94%);
          height: auto;
          object-fit: contain;
          filter:
            drop-shadow(0 0 24px rgba(29, 82, 145, 0.45))
            drop-shadow(0 0 42px rgba(198, 154, 80, 0.16));
          animation: globeFloat 5s ease-in-out infinite;
        }

        .premium-route-card {
          display: grid;
          grid-template-columns: 1fr minmax(90px, 1fr) 1fr;
          align-items: center;
          gap: 18px;
          padding: 17px 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(1, 7, 15, 0.52);
        }

        .premium-location {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .premium-location-end {
          justify-content: flex-end;
          text-align: right;
        }

        .premium-location div {
          display: flex;
          flex-direction: column;
        }

        .premium-location small {
          color: #737f91;
          font-size: 0.66rem;
        }

        .premium-location strong {
          color: #f1ebdf;
          font-size: 0.82rem;
        }

        .premium-flag {
          font-size: 1.25rem;
        }

        .premium-route-line {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 20px;
        }

        .premium-route-line::before {
          position: absolute;
          right: 0;
          left: 0;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(213, 173, 98, 0.2),
              #d5ad62,
              rgba(213, 173, 98, 0.2)
            );
          content: "";
        }

        .premium-route-point {
          position: relative;
          z-index: 2;
          width: 7px;
          height: 7px;
          border: 1px solid #e9c477;
          border-radius: 50%;
          background: #08111f;
        }

        .premium-route-light {
          position: absolute;
          z-index: 2;
          left: -20%;
          width: 32%;
          height: 3px;
          border-radius: 999px;
          background: #f6d996;
          box-shadow: 0 0 14px #e9bc68;
          animation: routeTravel 2.8s linear infinite;
        }

        .premium-route-traveler {
          position: absolute;
          z-index: 3;
          left: 50%;
          color: #f2d38d;
          transform: translateX(-50%);
        }

        .visual-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 15px;
        }

        .visual-stat {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.025);
        }

        .visual-stat span {
          color: #737e90;
          font-size: 0.67rem;
        }

        .visual-stat strong {
          color: #d9b970;
          font-size: 0.82rem;
        }

        .confirmation-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0, 4, 10, 0.78);
          backdrop-filter: blur(18px);
        }

        .confirmation-card {
          position: relative;
          width: min(480px, 100%);
          overflow: hidden;
          padding: 40px;
          border: 1px solid rgba(216, 179, 107, 0.2);
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(12, 24, 40, 0.98),
              rgba(3, 9, 17, 0.98)
            );
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
          text-align: center;
        }

        .confirmation-close {
          position: absolute;
          top: 17px;
          right: 18px;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          color: #d9dee7;
          cursor: pointer;
        }

        .confirmation-icon {
          display: grid;
          width: 62px;
          height: 62px;
          place-items: center;
          margin: 0 auto 18px;
          border: 1px solid rgba(224, 188, 116, 0.45);
          border-radius: 50%;
          color: #e0bc74;
          font-size: 1.4rem;
        }

        .confirmation-eyebrow,
        .confirmation-brand {
          color: #d7ad61;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .confirmation-card h2 {
          margin: 13px 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2rem;
          font-weight: 400;
        }

        .confirmation-card > p {
          margin-bottom: 25px;
          color: #8994a6;
          font-size: 0.83rem;
          line-height: 1.6;
        }

        .confirmation-route {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          margin-bottom: 24px;
        }

        .confirmation-route > div:not(.confirmation-journey) {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .confirmation-flag {
          font-size: 1.45rem;
        }

        .confirmation-route small {
          color: #a4adba;
        }

        .confirmation-journey {
          display: flex;
          align-items: center;
        }

        .confirmation-journey span {
          flex: 1;
          height: 1px;
          background: rgba(213, 173, 98, 0.4);
        }

        .confirmation-journey strong {
          margin: 0 8px;
          color: #e2bf79;
        }

        .confirmation-details {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 22px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.025);
        }

        .confirmation-details > div {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .confirmation-details span {
          color: #788395;
          font-size: 0.72rem;
        }

        .confirmation-details strong {
          color: #e5dfd2;
          font-size: 0.76rem;
        }

        .confirmation-brand {
          display: block;
          margin-top: 20px;
        }

        @keyframes travel {
          from {
            left: -30%;
          }

          to {
            left: 100%;
          }
        }

        @keyframes routeTravel {
          from {
            left: -25%;
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
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
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

        @keyframes haloPulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.96);
          }

          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @media (max-width: 980px) {
          .main-grid {
            grid-template-columns: 1fr;
          }

          .visual-panel {
            min-height: auto;
          }
        }

        @media (max-width: 650px) {
          .send-page {
            padding: 28px 15px 50px;
          }

          .top-line {
            flex-direction: column;
          }

          .route-card {
            grid-template-columns: 1fr;
          }

          .route-visual {
            min-height: 20px;
          }

          .country-block.destination {
            justify-content: flex-start;
            flex-direction: row-reverse;
            text-align: left;
          }

          .conversion-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .premium-route-card {
            grid-template-columns: 1fr;
          }

          .premium-location-end {
            justify-content: flex-start;
            text-align: left;
          }

          .premium-route-line {
            min-height: 28px;
          }

          .visual-stats {
            grid-template-columns: 1fr;
          }

          .confirmation-card {
            padding: 34px 22px 28px;
          }
        }
      `}</style>
    </main>
  );
}
