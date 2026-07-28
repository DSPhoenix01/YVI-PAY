"use client";

import { useMemo, useState } from "react";

const transactions = [
  {
    id: 1,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "/flags/fr.png",
    fromCity: "Paris",
    toFlag: "/flags/cg.png",
    toCity: "Brazzaville",
    date: "Aujourd’hui à 18:42",
    amount: "250,00 €",
    status: "Envoyé",
  },
  {
    id: 2,
    type: "received",
    title: "Transfert reçu",
    fromFlag: "/flags/cd.png",
    fromCity: "Kinshasa",
    toFlag: "/flags/fr.png",
    toCity: "Paris",
    date: "Aujourd’hui à 15:18",
    amount: "120,00 €",
    status: "Reçu",
  },
  {
    id: 3,
    type: "pending",
    title: "Transfert en cours",
    fromFlag: "/flags/fr.png",
    fromCity: "Paris",
    toFlag: "/flags/cm.png",
    toCity: "Douala",
    date: "Aujourd’hui à 12:05",
    amount: "85,00 €",
    status: "En cours",
  },
  {
    id: 4,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "/flags/fr.png",
    fromCity: "Paris",
    toFlag: "/flags/ci.png",
    toCity: "Abidjan",
    date: "Hier à 21:36",
    amount: "310,00 €",
    status: "Envoyé",
  },
  {
    id: 5,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "/flags/fr.png",
    fromCity: "Paris",
    toFlag: "/flags/cd.png",
    toCity: "Kinshasa",
    date: "Hier à 16:22",
    amount: "175,00 €",
    status: "Envoyé",
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4 4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16l-6.2 7.2V18l-3.6 1.8v-7.6Z" />
    </svg>
  );
}

function TransactionIcon({ type }) {
  if (type === "received") {
    return <span className="transaction-symbol">↘</span>;
  }

  if (type === "pending") {
    return <span className="transaction-clock">◷</span>;
  }

  return <span className="transaction-symbol">↗</span>;
}

function StatIcon({ type }) {
  if (type === "calendar") {
    return <span>▣</span>;
  }

  if (type === "wallet") {
    return <span>▰</span>;
  }

  if (type === "speed") {
    return <span>◴</span>;
  }

  return <span>◎</span>;
}

export default function HistoriquePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTransactions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return transactions.filter((transaction) => {
      const matchesFilter =
        filter === "all" || transaction.type === filter;

      const matchesSearch =
        !query ||
        transaction.title.toLowerCase().includes(query) ||
        transaction.fromCity.toLowerCase().includes(query) ||
        transaction.toCity.toLowerCase().includes(query) ||
        transaction.amount.toLowerCase().includes(query) ||
        transaction.status.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  return (
    <main className="history-page">
      <div className="page-glow page-glow-blue" />
      <div className="page-glow page-glow-gold" />

      <section className="history-layout">
        <section className="history-left">
          <header className="page-header">
            <p className="eyebrow">YVI PAY — ACTIVITÉ</p>

            <h1>Historique</h1>

            <p className="subtitle">
              Retrouvez tous vos transferts en un seul endroit.
            </p>
          </header>

          <div className="toolbar">
            <label className="search-box">
              <SearchIcon />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher une ville, un montant..."
              />
            </label>

            <div className="filter-wrapper">
              <button
                type="button"
                className={`filter-button ${
                  showFilters ? "active" : ""
                }`}
                onClick={() =>
                  setShowFilters((current) => !current)
                }
              >
                <FilterIcon />
                <span>Filtrer</span>
                <b>⌄</b>
              </button>

              {showFilters && (
                <div className="filter-menu">
                  {[
                    ["all", "Toutes les opérations"],
                    ["sent", "Transferts envoyés"],
                    ["received", "Transferts reçus"],
                    ["pending", "Transferts en cours"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={
                        filter === value ? "selected" : ""
                      }
                      onClick={() => {
                        setFilter(value);
                        setShowFilters(false);
                      }}
                    >
                      <span>{label}</span>
                      <span>{filter === value ? "✓" : ""}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="transactions-list">
            {filteredTransactions.map((transaction) => (
              <article
                key={transaction.id}
                className={`transaction-card ${transaction.type}`}
              >
                <span className="transaction-line" />

                <div className="transaction-icon">
                  <TransactionIcon type={transaction.type} />
                </div>

                <div className="transaction-info">
                  <p className="transaction-title">
                    {transaction.title}
                  </p>

                  <div className="transaction-route">
                    <span className="country-flag">
                      <img src={transaction.fromFlag} alt="" />
                    </span>

                    <span>{transaction.fromCity}</span>

                    <span className="route-arrow">→</span>

                    <span className="country-flag">
                      <img src={transaction.toFlag} alt="" />
                    </span>

                    <span>{transaction.toCity}</span>
                  </div>

                  <p className="transaction-date">
                    {transaction.date}
                  </p>
                </div>

                <div className="transaction-amount">
                  <strong>{transaction.amount}</strong>

                  <span
                    className={`transaction-status ${transaction.type}`}
                  >
                    {transaction.status}
                  </span>
                </div>

                <button
                  type="button"
                  className="transaction-details"
                  aria-label="Voir les détails"
                >
                  ›
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="history-right">
          <section className="map-panel">
            <header className="map-header">
              <div>
                <p className="map-eyebrow">
                  RÉSEAU INTERNATIONAL
                </p>

                <h2>Carte des transferts</h2>
              </div>

              <div className="live-badge">
                <span />
                Temps réel
              </div>
            </header>

            <div className="map-area">
              <div className="map-background" />
              <div className="map-overlay" />

              <svg
                className="routes-svg"
                viewBox="0 0 1000 560"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="goldGlow">
                    <feGaussianBlur
                      stdDeviation="4"
                      result="blur"
                    />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <linearGradient
                    id="routeGold"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#fff4b8" />
                    <stop offset="45%" stopColor="#f2bd4c" />
                    <stop offset="100%" stopColor="#c98118" />
                  </linearGradient>
                </defs>

                <g
                  fill="none"
                  stroke="url(#routeGold)"
                  strokeLinecap="round"
                  filter="url(#goldGlow)"
                >
                  <path
                    className="route route-main"
                    d="M500 130 C520 205 535 290 530 390"
                  />

                  <path
                    className="route"
                    d="M500 130 C570 210 600 295 605 415"
                  />

                  <path
                    className="route"
                    d="M500 130 C480 220 470 300 475 350"
                  />

                  <path
                    className="route"
                    d="M500 130 C430 215 405 285 395 315"
                  />
                </g>

                <g className="route-points">
                  <circle cx="500" cy="130" r="9" />
                  <circle cx="530" cy="390" r="7" />
                                        <circle cx="605" cy="415" r="7" />
                  <circle cx="475" cy="350" r="7" />
                  <circle cx="395" cy="315" r="7" />
                </g>
              </svg>

              <div className="city-card city-paris">
                <span className="city-flag">
                  <img src="/flags/fr.png" alt="France" />
                </span>

                <p>
                  <strong>Paris</strong>
                  <small>France</small>
                </p>
              </div>

              <div className="city-card city-abidjan">
                <span className="city-flag">
                  <img
                    src="/flags/ci.png"
                    alt="Côte d’Ivoire"
                  />
                </span>

                <p>
                  <strong>Abidjan</strong>
                  <small>Côte d’Ivoire</small>
                </p>
              </div>

              <div className="city-card city-douala">
                <span className="city-flag">
                  <img src="/flags/cm.png" alt="Cameroun" />
                </span>

                <p>
                  <strong>Douala</strong>
                  <small>Cameroun</small>
                </p>
              </div>

              <div className="city-card city-brazzaville">
                <span className="city-flag">
                  <img src="/flags/cg.png" alt="Congo" />
                </span>

                <p>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </p>
              </div>

              <div className="city-card city-kinshasa">
                <span className="city-flag">
                  <img src="/flags/cd.png" alt="RDC" />
                </span>

                <p>
                  <strong>Kinshasa</strong>
                  <small>RDC</small>
                </p>
              </div>
            </div>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">
                  <StatIcon type="calendar" />
                </span>
                <span>Aujourd’hui</span>
              </div>

              <strong>8</strong>
              <small>transferts</small>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">
                  <StatIcon type="wallet" />
                </span>
                <span>Montant total</span>
              </div>

              <strong>3 250 €</strong>
              <small>aujourd’hui</small>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">
                  <StatIcon type="speed" />
                </span>
                <span>Temps moyen</span>
              </div>

              <strong>1 min 42 s</strong>
              <small>par transfert</small>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">
                  <StatIcon type="globe" />
                </span>
                <span>Pays actifs</span>
              </div>

              <strong>4</strong>
              <small>pays</small>
            </article>
          </section>

          <section className="brand-banner">
            <div className="brand-logo">Y</div>

            <strong>YVI PAY</strong>

            <p>
              Votre argent. Vos proches. Sans frontières.
            </p>

            <span className="brand-line">
              <i />
            </span>
          </section>
        </aside>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .history-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 22px;
          color: #f5f0e8;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(28, 70, 125, 0.2),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 88%,
              rgba(197, 132, 27, 0.08),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              #020812 0%,
              #030a15 48%,
              #020711 100%
            );
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .page-glow {
          position: fixed;
          z-index: 0;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.13;
        }

        .page-glow-blue {
          top: 4%;
          left: -230px;
          background: #265ea8;
        }

        .page-glow-gold {
          right: -220px;
          bottom: -180px;
          background: #b7791e;
        }

        .history-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            minmax(430px, 0.92fr)
            minmax(720px, 1.58fr);
          gap: 22px;
          width: min(1800px, 100%);
          margin: 0 auto;
        }

        .history-left,
        .history-right {
          min-width: 0;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .eyebrow,
        .map-eyebrow {
          margin: 0 0 8px;
          color: #e4ad40;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .page-header h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(54px, 5vw, 82px);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .subtitle {
          margin: 14px 0 0;
          color: #aab4c4;
          font-size: 17px;
        }

        .toolbar {
          position: relative;
          z-index: 30;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 14px;
          margin-bottom: 22px;
        }

        .search-box {
          display: flex;
          align-items: center;
          height: 60px;
          padding: 0 18px;
          border: 1px solid rgba(128, 153, 186, 0.24);
          border-radius: 15px;
          background: rgba(5, 16, 31, 0.9);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.02),
            0 10px 28px rgba(0, 0, 0, 0.12);
        }

        .search-box svg {
          flex: 0 0 auto;
          width: 23px;
          height: 23px;
          margin-right: 13px;
          fill: none;
          stroke: #9aa6b8;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #edf1f7;
          background: transparent;
          font: inherit;
          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #7f8a9c;
        }

        .filter-wrapper {
          position: relative;
        }

        .filter-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 60px;
          padding: 0 20px;
          border: 1px solid rgba(221, 156, 39, 0.7);
          border-radius: 15px;
          color: #efb43a;
          background: rgba(7, 17, 30, 0.95);
          font: inherit;
          font-size: 14px;
          font-weight: 750;
          cursor: pointer;
        }

        .filter-button:hover,
        .filter-button.active {
          background: rgba(41, 29, 10, 0.72);
          border-color: #efb43a;
        }

        .filter-button svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linejoin: round;
        }

        .filter-button b {
          font-size: 17px;
          font-weight: 400;
          transform: translateY(-2px);
        }

        .filter-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          z-index: 60;
          width: 215px;
          padding: 8px;
          border: 1px solid rgba(224, 164, 54, 0.35);
          border-radius: 14px;
          background: rgba(3, 12, 24, 0.98);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.48);
        }

        .filter-menu button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 12px;
          border: 0;
          border-radius: 9px;
          color: #b8c1cf;
          background: transparent;
          font: inherit;
          font-size: 13px;
          cursor: pointer;
        }

        .filter-menu button:hover,
        .filter-menu button.selected {
          color: #f1ba4a;
          background: rgba(230, 168, 55, 0.1);
        }

        .transactions-list {
          display: grid;
          gap: 13px;
        }

        .transaction-card {
          position: relative;
          display: grid;
          grid-template-columns: 62px minmax(0, 1fr) auto 24px;
          gap: 15px;
          align-items: center;
          min-height: 116px;
          overflow: hidden;
          padding: 18px 15px 18px 25px;
          border: 1px solid rgba(115, 142, 176, 0.18);
          border-radius: 18px;
          background: linear-gradient(
            100deg,
            rgba(7, 23, 40, 0.97),
            rgba(3, 14, 27, 0.97)
          );
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.17);
        }

        .transaction-line {
          position: absolute;
          inset: 0 auto 0 0;
          width: 5px;
          background: #23df76;
          box-shadow: 0 0 20px rgba(35, 223, 118, 0.7);
        }

        .transaction-card.received .transaction-line {
          background: #26aef4;
          box-shadow: 0 0 20px rgba(38, 174, 244, 0.7);
        }

        .transaction-card.pending .transaction-line {
          background: #f4b32b;
          box-shadow: 0 0 20px rgba(244, 179, 43, 0.7);
        }

        .transaction-icon {
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border: 1px solid rgba(40, 220, 118, 0.55);
          border-radius: 50%;
          color: #23df76;
          background: rgba(2, 12, 23, 0.84);
          font-size: 31px;
        }

        .transaction-card.received .transaction-icon {
          border-color: rgba(38, 174, 244, 0.62);
          color: #26aef4;
        }

        .transaction-card.pending .transaction-icon {
          border-color: rgba(244, 179, 43, 0.62);
          color: #f4b32b;
        }

        .transaction-symbol {
          display: block;
          line-height: 1;
          transform: translateY(-1px);
        }

        .transaction-clock {
          display: block;
          font-size: 29px;
          line-height: 1;
        }

        .transaction-title {
          margin: 0 0 8px;
          color: #23df76;
          font-size: 14px;
          font-weight: 800;
        }

        .transaction-card.received .transaction-title {
          color: #26aef4;
        }

        .transaction-card.pending .transaction-title {
          color: #f4b32b;
        }

        .transaction-route {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          color: #e1e5eb;
          font-size: 13px;
          font-weight: 650;
        }

        .country-flag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 27px;
          height: 20px;
          overflow: hidden;
          border-radius: 4px;
          line-height: 1;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .country-flag img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
                .route-arrow {
          color: #d7a53a;
          font-weight: 700;
        }

        .transaction-date {
          margin: 9px 0 0;
          color: #8893a4;
          font-size: 12px;
        }

        .transaction-amount {
          text-align: right;
        }

        .transaction-amount strong {
          display: block;
          color: #ffffff;
          font-size: 21px;
          font-weight: 800;
        }

        .transaction-status {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
        }

        .transaction-status.sent {
          color: #23df76;
          background: rgba(35, 223, 118, 0.12);
        }

        .transaction-status.received {
          color: #26aef4;
          background: rgba(38, 174, 244, 0.12);
        }

        .transaction-status.pending {
          color: #f4b32b;
          background: rgba(244, 179, 43, 0.12);
        }

        .transaction-details {
          border: 0;
          color: #8d97a7;
          background: transparent;
          font-size: 28px;
          cursor: pointer;
        }

        .map-panel,
        .brand-banner,
        .stat-card {
          border: 1px solid rgba(123, 147, 176, 0.16);
          border-radius: 22px;
          background: rgba(5, 16, 30, 0.92);
        }

        .map-panel {
          padding: 22px;
        }

        .map-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 18px;
        }

        .map-header h2 {
          margin: 0;
          font-size: 30px;
          font-family: Georgia, serif;
          font-weight: 600;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          color: #b8f9d2;
          background: rgba(35, 223, 118, 0.12);
          font-size: 12px;
          font-weight: 700;
        }

        .live-badge span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #23df76;
          box-shadow: 0 0 10px #23df76;
        }

        .map-area {
          position: relative;
          overflow: hidden;
          height: 560px;
          border-radius: 22px;
          background:
            radial-gradient(circle at center,
              rgba(27, 59, 109, 0.30),
              transparent 70%),
            #030c18;
        }

        .map-background,
        .map-overlay,
        .routes-svg {
          position: absolute;
          inset: 0;
        }

        .map-background {
          opacity: .35;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .routes-svg {
          width: 100%;
          height: 100%;
        }

        .route {
          stroke-width: 2.8;
          opacity: .75;
          stroke-dasharray: 12 10;
          animation: routeMove 10s linear infinite;
        }

        .route-main {
          stroke-width: 4;
        }

        .route-points circle {
          fill: #f2bd4c;
          filter: drop-shadow(0 0 8px #f2bd4c);
        }

        .city-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 14px;
          background: rgba(6,17,31,.92);
          backdrop-filter: blur(8px);
        }

        .city-card strong {
          display: block;
          font-size: 13px;
        }

        .city-card small {
          color: #8c98aa;
          font-size: 11px;
        }

        .city-flag {
          width: 30px;
          height: 22px;
          overflow: hidden;
          border-radius: 5px;
          flex-shrink: 0;
        }

        .city-flag img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .city-paris {
          top: 65px;
          left: 49%;
          transform: translateX(-50%);
        }

        .city-abidjan {
          bottom: 82px;
          left: 34%;
        }

        .city-douala {
          bottom: 118px;
          left: 52%;
        }

        .city-brazzaville {
          bottom: 72px;
          left: 58%;
        }

        .city-kinshasa {
          bottom: 110px;
          left: 68%;
        }
                .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .stat-card {
          padding: 18px;
        }

        .stat-top {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #9ba8ba;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .stat-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(228, 173, 64, 0.12);
          color: #e4ad40;
        }

        .stat-card strong {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
        }

        .stat-card small {
          color: #8d99aa;
        }

        .brand-banner {
          position: relative;
          overflow: hidden;
          margin-top: 20px;
          padding: 28px;
          text-align: center;
        }

        .brand-logo {
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: radial-gradient(circle, #f3c868, #b97b1b);
          color: #04111d;
          font-size: 30px;
          font-weight: 900;
        }

        .brand-banner strong {
          display: block;
          font-size: 28px;
          letter-spacing: .08em;
        }

        .brand-banner p {
          margin: 10px 0 18px;
          color: #9aa6b8;
        }

        .brand-line {
          display: block;
          width: 100%;
          height: 2px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255,255,255,.06);
        }

        .brand-line i {
          display: block;
          width: 120px;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            #efb43a,
            transparent
          );
          animation: lineMove 3.5s linear infinite;
        }

        @keyframes routeMove {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -220;
          }
        }

        @keyframes lineMove {
          from {
            transform: translateX(-130px);
          }
          to {
            transform: translateX(700px);
          }
        }

        @media (max-width: 1400px) {
          .history-layout {
            grid-template-columns: 1fr;
          }

          .map-area {
            height: 500px;
          }
        }

        @media (max-width: 900px) {
          .toolbar {
            grid-template-columns: 1fr;
          }

          .transaction-card {
            grid-template-columns: 56px 1fr;
            gap: 14px;
          }

          .transaction-amount,
          .transaction-details {
            grid-column: 2;
            justify-self: start;
            text-align: left;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .map-area {
            height: 420px;
          }
        }
      `}</style>
    </main>
  );
}
