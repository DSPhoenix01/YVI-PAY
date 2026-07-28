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
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      aria-hidden="true"
    >
      <path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path d="m17 17 4 4" />
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
               placeholder="Ville ou montant..."
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
                      <img
                        src={transaction.fromFlag}
                        alt=""
                      />
                    </span>

                    <span>{transaction.fromCity}</span>

                    <span className="route-arrow">→</span>

                    <span className="country-flag">
                      <img
                        src={transaction.toFlag}
                        alt=""
                      />
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
                    <stop
                      offset="0%"
                      stopColor="#fff4b8"
                    />
                    <stop
                      offset="45%"
                      stopColor="#f2bd4c"
                    />
                    <stop
                      offset="100%"
                      stopColor="#c98118"
                    />
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
                <span>
                  <img src="/flags/fr.png" alt="" />
                </span>

                <p>
                  <strong>Paris</strong>
                  <small>France</small>
                </p>
              </div>

              <div className="city-card city-abidjan">
                <span>
                  <img src="/flags/ci.png" alt="" />
                </span>

                <p>
                  <strong>Abidjan</strong>
                  <small>Côte d’Ivoire</small>
                </p>
              </div>

              <div className="city-card city-douala">
                <span>
                  <img src="/flags/cm.png" alt="" />
                </span>

                <p>
                  <strong>Douala</strong>
                  <small>Cameroun</small>
                </p>
              </div>

              <div className="city-card city-brazzaville">
                <span>
                  <img src="/flags/cg.png" alt="" />
                </span>

                <p>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </p>
              </div>

              <div className="city-card city-kinshasa">
                <span>
                  <img src="/flags/cd.png" alt="" />
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
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .country-flag img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .route-arrow {
          color: #e8ab32;
          font-size: 17px;
        }

        .transaction-date {
          margin: 8px 0 0;
          color: #7f8999;
          font-size: 12px;
        }

        .transaction-amount {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          white-space: nowrap;
        }

        .transaction-amount strong {
          color: #f4f1eb;
          font-size: 18px;
          font-weight: 800;
        }

        .transaction-status {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 27px;
          padding: 0 11px;
          border: 1px solid rgba(35, 223, 118, 0.3);
          border-radius: 999px;
          color: #23df76;
          background: rgba(35, 223, 118, 0.08);
          font-size: 11px;
          font-weight: 800;
        }

        .transaction-status.received {
          border-color: rgba(38, 174, 244, 0.32);
          color: #26aef4;
          background: rgba(38, 174, 244, 0.08);
        }

        .transaction-status.pending {
          border-color: rgba(244, 179, 43, 0.32);
          color: #f4b32b;
          background: rgba(244, 179, 43, 0.08);
        }

        .transaction-details {
          width: 24px;
          height: 40px;
          padding: 0;
          border: 0;
          color: #98a4b5;
          background: transparent;
          font-size: 28px;
          cursor: pointer;
        }

        .history-right {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .map-panel {
          overflow: hidden;
          border: 1px solid rgba(127, 154, 188, 0.24);
          border-radius: 23px;
          background: rgba(4, 14, 27, 0.96);
          box-shadow:
            0 24px 65px rgba(0, 0, 0, 0.26),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 102px;
          padding: 22px 30px;
          border-bottom: 1px solid rgba(126, 150, 180, 0.16);
        }

        .map-header h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 500;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 39px;
          padding: 0 15px;
          border: 1px solid rgba(33, 221, 117, 0.26);
          border-radius: 999px;
          color: #48e38a;
          background: rgba(33, 221, 117, 0.06);
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        .live-badge span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #48e38a;
          box-shadow: 0 0 12px rgba(72, 227, 138, 0.9);
          animation: livePulse 1.8s ease-in-out infinite;
        }

        .map-area {
          position: relative;
          min-height: 540px;
          overflow: hidden;
          isolation: isolate;
          background: #03101f;
        }

        .map-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: url("/yvi-history-map.png") center / cover
            no-repeat;
          transform: scale(1.015);
        }

        .map-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(
              circle at 50% 36%,
              rgba(237, 179, 57, 0.1),
              transparent 20%
            ),
            linear-gradient(
              180deg,
              rgba(1, 8, 17, 0.08),
              rgba(1, 8, 17, 0.3)
            );
          pointer-events: none;
        }

        .routes-svg {
          position: absolute;
          inset: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .route {
          stroke-width: 3;
          stroke-dasharray: 10 12;
          opacity: 0.82;
          animation: routeFlow 2.4s linear infinite;
        }

        .route-main {
          stroke-width: 4.2;
          opacity: 1;
        }

        .route-points circle {
          fill: #f4ba42;
          stroke: #fff2ae;
          stroke-width: 2;
          filter: url(#goldGlow);
        }

        .city-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 130px;
          padding: 9px 12px;
          border: 1px solid rgba(232, 169, 50, 0.46);
          border-radius: 11px;
          background: rgba(3, 12, 23, 0.93);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(12px);
          transform: translate(-50%, -50%);
        }

        .city-card > span {
          display: grid;
          place-items: center;
          width: 31px;
          height: 31px;
          overflow: hidden;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
        }

        .city-card > span img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .city-card p {
          display: flex;
          flex-direction: column;
          margin: 0;
        }

        .city-card strong {
          color: #f4f0e8;
          font-size: 11px;
          font-weight: 800;
        }

        .city-card small {
          margin-top: 2px;
          color: #9aa4b4;
          font-size: 9px;
        }

        .city-paris {
          top: 20%;
          left: 50%;
        }

        .city-abidjan {
          top: 57%;
          left: 38%;
        }

        .city-douala {
          top: 65%;
          left: 49%;
        }

        .city-brazzaville {
          top: 76%;
          left: 53%;
        }

        .city-kinshasa {
          top: 82%;
          left: 64%;
        }
                .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .stat-card {
          min-width: 0;
          min-height: 130px;
          padding: 18px;
          border: 1px solid rgba(122, 148, 181, 0.24);
          border-radius: 17px;
          background: linear-gradient(
            145deg,
            rgba(7, 21, 38, 0.97),
            rgba(3, 13, 26, 0.98)
          );
          box-shadow:
            0 16px 38px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .stat-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: #9fa9b9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .stat-icon {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 31px;
          height: 31px;
          border: 1px solid rgba(230, 168, 49, 0.4);
          border-radius: 9px;
          color: #efb43a;
          background: rgba(229, 166, 45, 0.06);
          font-size: 17px;
        }

        .stat-card strong {
          display: block;
          overflow: hidden;
          color: #f4f0e8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 1.8vw, 30px);
          font-weight: 500;
          line-height: 1.05;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .stat-card small {
          display: block;
          margin-top: 7px;
          color: #8994a5;
          font-size: 11px;
        }

        .brand-banner {
          display: grid;
          grid-template-columns:
            auto auto minmax(0, 1fr)
            minmax(90px, 180px);
          gap: 18px;
          align-items: center;
          min-height: 94px;
          padding: 14px 20px;
          border: 1px solid rgba(125, 151, 184, 0.22);
          border-radius: 17px;
          background: linear-gradient(
            145deg,
            rgba(7, 20, 36, 0.98),
            rgba(3, 12, 24, 0.98)
          );
          box-shadow:
            0 16px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .brand-logo {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border: 1px solid rgba(234, 172, 51, 0.75);
          border-radius: 50%;
          color: #eaae3d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 37px;
          box-shadow:
            0 0 25px rgba(224, 162, 44, 0.08),
            inset 0 0 18px rgba(224, 162, 44, 0.04);
        }

        .brand-banner > strong {
          color: #eaae3d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        .brand-banner > p {
          margin: 0;
          color: #d39226;
          font-size: 14px;
          text-align: center;
        }

        .brand-line {
          position: relative;
          display: block;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(229, 168, 54, 0.05),
            rgba(229, 168, 54, 0.85),
            rgba(229, 168, 54, 0.08)
          );
        }

        .brand-line i {
          position: absolute;
          top: 50%;
          right: 12%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f5bd49;
          box-shadow:
            0 0 8px #f5bd49,
            0 0 18px rgba(245, 189, 73, 0.8);
          transform: translateY(-50%);
          animation: starPulse 2s ease-in-out infinite;
        }

        @keyframes routeFlow {
          to {
            stroke-dashoffset: -44;
          }
        }

        @keyframes livePulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.88);
          }

          50% {
            opacity: 1;
            transform: scale(1.16);
          }
        }

        @keyframes starPulse {
          0%,
          100% {
            opacity: 0.55;
            transform: translateY(-50%) scale(0.85);
          }

          50% {
            opacity: 1;
            transform: translateY(-50%) scale(1.2);
          }
        }
                @media (max-width: 1380px) {
          .history-layout {
            grid-template-columns:
              minmax(400px, 0.9fr)
              minmax(620px, 1.42fr);
          }

          .map-area {
            min-height: 500px;
          }

          .brand-banner {
            grid-template-columns: auto auto minmax(0, 1fr);
          }

          .brand-line {
            display: none;
          }
        }

        @media (max-width: 1120px) {
          .history-page {
            overflow: visible;
          }

          .history-layout {
            grid-template-columns: 1fr;
          }

          .history-right {
            margin-top: 8px;
          }

          .map-area {
            min-height: 540px;
          }
        }

        @media (max-width: 760px) {
          .history-page {
            padding: 16px 13px;
          }

          .page-header h1 {
            font-size: 52px;
          }

          .subtitle {
            font-size: 15px;
          }

          .toolbar {
            grid-template-columns: 1fr;
          }

          .filter-button {
            width: 100%;
          }

          .filter-menu {
            right: auto;
            left: 0;
            width: 100%;
          }

          .transaction-card {
            grid-template-columns: 50px minmax(0, 1fr) 22px;
            min-height: 126px;
            padding: 16px 13px 16px 20px;
          }

          .transaction-icon {
            width: 46px;
            height: 46px;
            font-size: 27px;
          }

          .transaction-amount {
            grid-column: 2 / 3;
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .transaction-details {
            grid-column: 3;
            grid-row: 1 / span 2;
          }

          .map-header {
            padding: 20px;
          }

          .map-header h2 {
            font-size: 24px;
          }

          .map-area {
            min-height: 430px;
          }

          .map-background {
            background-position: center;
            transform: scale(1.12);
          }

          .city-card {
            min-width: 0;
            padding: 7px;
          }

          .city-card p {
            display: none;
          }

          .city-card > span {
            width: 30px;
            height: 30px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .brand-banner {
            grid-template-columns: auto 1fr;
          }

          .brand-banner > p {
            grid-column: 1 / -1;
            text-align: left;
          }
        }

        @media (max-width: 460px) {
          .page-header h1 {
            font-size: 46px;
          }

          .map-area {
            min-height: 390px;
          }

          .live-badge {
            width: 38px;
            padding: 0;
            justify-content: center;
            font-size: 0;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .brand-banner > strong {
            font-size: 23px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .route,
          .live-badge span,
          .brand-line i {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
