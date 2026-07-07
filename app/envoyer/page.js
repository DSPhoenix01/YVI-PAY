"use client";

import { useState } from "react";

export default function EnvoyerPage() {
  const [status, setStatus] = useState("idle");

  const envoyer = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 2500);
  };

  return (
    <main className="send-page">
      <section className="send-card">
        <p className="eyebrow">YVI PAY TRANSFERT</p>
        <h1>Envoyer de l’argent</h1>
        <p className="subtitle">
          Depuis Paris vers vos proches en Afrique, avec une expérience premium,
          rapide et sécurisée.
        </p>

        <div className="form-box">
          <label>Montant à envoyer</label>
          <input type="text" placeholder="250 €" />

          <label>Bénéficiaire</label>
          <input type="text" placeholder="Ex : Maman Brazzaville" />

          <label>Pays de réception</label>
          <select defaultValue="cg">
            <option value="cg">🇨🇬 Congo-Brazzaville</option>
            <option value="cd">🇨🇩 RDC</option>
            <option value="cm">🇨🇲 Cameroun</option>
            <option value="ci">🇨🇮 Côte d’Ivoire</option>
          </select>

          <button onClick={envoyer}>Envoyer maintenant</button>
        </div>

        <div className={`globe ${status !== "idle" ? "active" : ""}`}>
          <span className="city left">🇫🇷 Paris</span>
          <div className="world">
            <div className="gold-line"></div>
          </div>
          <span className="city right">🇨🇬 Brazzaville</span>
        </div>

        {status === "loading" && (
          <p className="status loading">Transfert en cours...</p>
        )}

        {status === "success" && (
          <p className="status success">✅ Transfert envoyé avec succès.</p>
        )}
      </section>

      <style jsx>{`
        .send-page {
          min-height: 100vh;
          padding: 40px 20px;
          background:
            radial-gradient(circle at top, rgba(212, 175, 55, 0.14), transparent 35%),
            linear-gradient(135deg, #020617, #07111f 45%, #000000);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
        }

        .send-card {
          width: 100%;
          max-width: 760px;
          padding: 34px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 28px;
          background: rgba(3, 10, 25, 0.82);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
          text-align: center;
        }

        .eyebrow {
          color: #d4af37;
          letter-spacing: 3px;
          font-size: 12px;
          margin-bottom: 14px;
        }

        h1 {
          font-size: 42px;
          margin: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.72);
          max-width: 560px;
          margin: 16px auto 30px;
          line-height: 1.6;
        }

        .form-box {
          display: grid;
          gap: 12px;
          text-align: left;
        }

        label {
          color: #d4af37;
          font-size: 14px;
          margin-top: 8px;
        }

        input,
        select {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          font-size: 16px;
          outline: none;
        }

        option {
          color: black;
        }

        button {
          margin-top: 18px;
          padding: 17px;
          border-radius: 18px;
          border: none;
          background: linear-gradient(135deg, #d4af37, #f5d76e);
          color: #07111f;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
        }

        .globe {
          margin: 34px auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          opacity: 0.65;
        }

        .city {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
        }

        .world {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background:
            radial-gradient(circle, rgba(212, 175, 55, 0.12), transparent 60%),
            linear-gradient(135deg, #081c35, #020617);
          position: relative;
          overflow: hidden;
        }

        .gold-line {
          position: absolute;
          top: 74px;
          left: -160px;
          width: 160px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f5d76e, transparent);
          box-shadow: 0 0 18px #f5d76e;
        }

        .active .gold-line {
          animation: travel 2.2s ease-in-out forwards;
        }

        @keyframes travel {
          from {
            left: -160px;
          }
          to {
            left: 150px;
          }
        }

        .status {
          margin-top: 22px;
          font-weight: 700;
          font-size: 17px;
        }

        .loading {
          color: #f5d76e;
        }

        .success {
          color: #7df0a4;
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 32px;
          }

          .send-card {
            padding: 24px;
          }

          .globe {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
