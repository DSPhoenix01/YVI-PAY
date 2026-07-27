"use client";

import { useMemo, useState } from "react";

const transactions = [
  {
    id: 1,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris, France",
    toFlag: "🇨🇬",
    toCity: "Brazzaville, Congo",
    date: "Aujourd’hui · 18:42",
    amount: "250,00 €",
    status: "Réussi",
    statusClass: "success",
  },
  {
    id: 2,
    type: "pending",
    title: "En cours",
    fromFlag: "🇫🇷",
    fromCity: "Paris, France",
    toFlag: "🇨🇩",
    toCity: "Kinshasa, RDC",
    date: "Il y a 12 min",
    amount: "500,00 €",
    status: "En cours",
    statusClass: "pending",
  },
  {
    id: 3,
    type: "received",
    title: "Reçu avec succès",
    fromFlag: "🇫🇷",
    fromCity: "Paris, France",
    toFlag: "🇨🇲",
    toCity: "Douala, Cameroun",
    date: "Hier · 21:15",
    amount: "120,00 €",
    status: "Reçu",
    statusClass: "received",
  },
  {
    id: 4,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris, France",
    toFlag: "🇨🇮",
    toCity: "Abidjan, Côte d’Ivoire",
    date: "15 juillet · 16:03",
    amount: "350,00 €",
    status: "Réussi",
    statusClass: "success",
  },
  {
    id: 5,
    type: "received",
    title: "Reçu avec succès",
    fromFlag: "🇨🇬",
    fromCity: "Brazzaville, Congo",
    toFlag: "🇫🇷",
    toCity: "Paris, France",
    date: "14 juillet · 11:28",
    amount: "75,00 €",
    status: "Reçu",
    statusClass: "received",
  },
  {
    id: 6,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris, France",
    toFlag: "🇨🇬",
    toCity: "Pointe-Noire, Congo",
    date: "12 juillet · 09:14",
    amount: "180,00 €",
    status: "Réussi",
    statusClass: "success",
  },
];

const filters = [
  { value: "all", label: "Toutes" },
  { value: "sent", label: "Envoyées" },
  { value: "received", label: "Reçues" },
  { value: "pending", label: "En cours" },
];

function TransactionIcon({ type }) {
  if (type === "pending") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "received") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
        <path d="M5 20h14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 11 15-7-6.5 16-2.3-6.2L4 11Z" />
      <path d="m10.2 13.8 3.6-3.6" />
    </svg>
  );
}

function StatIcon({ type }) {
  const icons = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7.5h14a2 2 0 0 1 2 2v8.5H6a2 2 0 0 1-2-2V7.5Z" />
        <path d="M5 7.5 16 4v3.5M15 12h5" />
      </>
    ),
    speed: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m12 7-2 5h4l-2 5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.2 3.2 4.9 3.2 8S14.2 17.8 12 20M12 4C9.8 6.2 8.8 8.9 8.8 12s1 5.8 3.2 8" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function HistoriquePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);
  const [showFilters, setShowFilters] = useState(false);

  const filteredTransactions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return transactions.filter((transaction) => {
      const matchesFilter =
        filter === "all" || transaction.type === filter;

      const searchableText = [
        transaction.title,
        transaction.fromCity,
        transaction.toCity,
        transaction.amount,
        transaction.status,
        transaction.date,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  const visibleTransactions = filteredTransactions.slice(0, visibleCount);

  const selectFilter = (value) => {
    setFilter(value);
    setVisibleCount(5);
    setShowFilters(false);
  };
    return (
    <main className="activity-page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="activity-shell">
        <section className="left-panel">
          <header className="page-heading">
            <p className="eyebrow">YVI PAY · VOTRE ACTIVITÉ</p>
            <h1>Activité</h1>
            <p className="subtitle">Vos dernières opérations</p>
          </header>

          <div className="tools-row">
            <label className="search-box">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setVisibleCount(5);
                }}
                placeholder="Rechercher une transaction, un pays..."
                aria-label="Rechercher une transaction"
              />
            </label>

            <div className="filter-wrapper">
              <button
                type="button"
                className={`filter-button ${showFilters ? "active" : ""}`}
                onClick={() => setShowFilters((current) => !current)}
                aria-expanded={showFilters}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M8 14v6M16 4v6M16 14v6" />
                </svg>

                Filtrer
                <span className="filter-chevron">⌄</span>
              </button>

              {showFilters && (
                <div className="filter-menu">
                  {filters.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={filter === item.value ? "selected" : ""}
                      onClick={() => selectFilter(item.value)}
                    >
                      {item.label}
                      {filter === item.value && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="transactions-list">
            {visibleTransactions.length > 0 ? (
              visibleTransactions.map((transaction) => (
                <article
                  key={transaction.id}
                  className={`transaction-card ${transaction.statusClass}`}
                >
                  <div className="status-bar" />

                  <div className="transaction-icon">
                    <TransactionIcon type={transaction.type} />
                    <span className="icon-dot" />
                  </div>

                  <div className="transaction-main">
                    <p className="transaction-title">{transaction.title}</p>

                    <div className="route">
                      <span className="flag">{transaction.fromFlag}</span>
                      <span>{transaction.fromCity}</span>
                      <span className="route-arrow">→</span>
                      <span className="flag">{transaction.toFlag}</span>
                      <span>{transaction.toCity}</span>
                    </div>

                    <p className="transaction-date">{transaction.date}</p>
                  </div>

                  <div className="transaction-value">
                    <strong>{transaction.amount}</strong>

                    <span className={`status-badge ${transaction.statusClass}`}>
                      {transaction.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="details-button"
                    aria-label={`Voir le détail de ${transaction.title}`}
                  >
                    ›
                  </button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">⌕</div>
                <h2>Aucune opération trouvée</h2>
                <p>Essayez un autre pays, montant ou statut.</p>
              </div>
            )}
          </div>

          {visibleCount < filteredTransactions.length && (
            <button
              type="button"
              className="load-more"
              onClick={() => setVisibleCount((count) => count + 3)}
            >
              Charger plus de transactions
              <span>⌄</span>
            </button>
          )}
        </section>

        <aside className="right-panel">
          <section className="map-card">
            <header className="map-header">
              <div>
                <p className="map-eyebrow">RÉSEAU INTERNATIONAL</p>
                <h2>Carte des transferts</h2>
              </div>

              <div className="live-status">
                <span />
                Temps réel
              </div>
            </header>

            <div className="world-map">
              <div className="map-glow map-glow-one" />
              <div className="map-glow map-glow-two" />

              <svg
                className="map-svg"
                viewBox="0 0 900 500"
                role="img"
                aria-label="Carte des transferts YVI PAY entre Paris et l’Afrique"
              >
                <defs>
                  <linearGradient id="landGold" x1="0" x2="1">
                    <stop offset="0%" stopColor="#182942" />
                    <stop offset="55%" stopColor="#122036" />
                    <stop offset="100%" stopColor="#0a1425" />
                  </linearGradient>

                  <linearGradient id="routeGold" x1="0" x2="1">
                    <stop offset="0%" stopColor="#fff1a8" />
                    <stop offset="45%" stopColor="#f6bf4f" />
                    <stop offset="100%" stopColor="#8d5c12" />
                  </linearGradient>

                  <filter id="routeGlow">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="pointGlow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g className="continents">
                  <path d="M37 111 74 77l72-20 61 14 45 40-4 45-31 18-15 47-42 15-41-24-34-1-36-27Z" />
                  <path d="m153 237 40 23 27 47-7 56-27 69-31-15-13-52-29-36 12-48Z" />
                  <path d="m405 103 35-33 62-8 37 26 24-5 39 13 39-18 72 5 47 27 52-6 80 51-20 39-61 11-22 24-62-18-41 16-43-27-62 9-46-30-44 5-42-31-38-5Z" />
                  <path d="m470 213 65-20 55 22 38 60-15 51-34 32-22 73-42-10-23-55-43-44 13-55Z" />
                  <path d="m740 344 46-26 56 18 24 42-34 33-57-4-40-29Z" />
                  <path d="m305 91 34-26 25 10 4 31-36 13Z" />
                </g>
                <g className="map-lines">
                  <path d="M469 153 Q500 230 558 285" />
                  <path d="M469 153 Q555 218 620 298" />
                  <path d="M469 153 Q570 245 601 361" />
                </g>

                <g className="route-particles">
                  <circle r="4">
                    <animateMotion
                      dur="3.6s"
                      repeatCount="indefinite"
                      path="M469 153 Q500 230 558 285"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4.2s"
                      repeatCount="indefinite"
                      path="M469 153 Q555 218 620 298"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4.8s"
                      repeatCount="indefinite"
                      path="M469 153 Q570 245 601 361"
                    />
                  </circle>
                </g>

                <g className="map-points">
                  <circle cx="469" cy="153" r="7" />
                  <circle cx="558" cy="285" r="6" />
                  <circle cx="620" cy="298" r="6" />
                  <circle cx="601" cy="361" r="6" />
                </g>
              </svg>

              <div className="city-label city-paris">
                <span>🇫🇷</span>

                <div>
                  <strong>Paris</strong>
                  <small>France</small>
                </div>
              </div>

              <div className="city-label city-kinshasa">
                <span>🇨🇩</span>

                <div>
                  <strong>Kinshasa</strong>
                  <small>RDC</small>
                </div>
              </div>

              <div className="city-label city-brazzaville">
                <span>🇨🇬</span>

                <div>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </div>
              </div>

              <div className="city-label city-douala">
                <span>🇨🇲</span>

                <div>
                  <strong>Douala</strong>
                  <small>Cameroun</small>
                </div>
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

          <div className="signature">
            <span className="signature-shield">◇</span>

            <p>
              <strong>YVI PAY</strong>, votre argent. Vos proches. Sans
              frontières.
            </p>
          </div>
        </aside>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .activity-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 34px 34px 48px;
          color: #f7f4ed;
          background:
            radial-gradient(
              circle at 13% 9%,
              rgba(20, 54, 100, 0.24),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 32%,
              rgba(194, 133, 32, 0.08),
              transparent 31%
            ),
            linear-gradient(145deg, #020814 0%, #030a16 47%, #020711 100%);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .ambient {
          position: fixed;
          z-index: 0;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.15;
        }

        .ambient-left {
          top: 7%;
          left: -230px;
          background: #2457aa;
        }

        .ambient-right {
          right: -250px;
          bottom: -160px;
          background: #b87a1d;
        }

        .activity-shell {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            minmax(430px, 0.9fr)
            minmax(620px, 1.35fr);
          gap: 30px;
          width: min(1680px, 100%);
          margin: 0 auto;
        }

        .left-panel,
        .right-panel {
          min-width: 0;
        }

        .page-heading {
          margin-bottom: 25px;
        }

        .eyebrow,
        .map-eyebrow {
          margin: 0 0 8px;
          color: #d9a743;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.19em;
        }

        .page-heading h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 4.4vw, 72px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .subtitle {
          margin: 11px 0 0;
          color: #aeb7c7;
          font-size: 17px;
        }
                .tools-row {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 14px;
          margin-bottom: 18px;
        }

        .search-box {
          display: flex;
          align-items: center;
          min-height: 56px;
          padding: 0 18px;
          border: 1px solid rgba(154, 173, 203, 0.18);
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(12, 25, 43, 0.86),
            rgba(6, 15, 29, 0.9)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .search-box svg {
          width: 21px;
          margin-right: 12px;
          color: #8d98aa;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #eef1f6;
          background: transparent;
          font: inherit;
          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #778398;
        }

        .filter-wrapper {
          position: relative;
        }

        .filter-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 56px;
          padding: 0 18px;
          border: 1px solid rgba(211, 153, 48, 0.52);
          border-radius: 14px;
          color: #e8b950;
          background: linear-gradient(
            145deg,
            rgba(18, 29, 45, 0.95),
            rgba(6, 14, 26, 0.96)
          );
          font: inherit;
          font-size: 14px;
          font-weight: 650;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .filter-button:hover,
        .filter-button.active {
          border-color: rgba(242, 185, 78, 0.9);
          background: rgba(33, 28, 21, 0.94);
        }

        .filter-button svg {
          width: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
        }

        .filter-chevron {
          font-size: 18px;
          transform: translateY(-2px);
        }

        .filter-menu {
          position: absolute;
          top: calc(100% + 9px);
          right: 0;
          z-index: 30;
          width: 180px;
          overflow: hidden;
          padding: 7px;
          border: 1px solid rgba(219, 166, 70, 0.34);
          border-radius: 14px;
          background: rgba(4, 12, 24, 0.98);
          box-shadow: 0 24px 65px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(18px);
        }

        .filter-menu button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 12px;
          border: 0;
          border-radius: 9px;
          color: #bbc4d2;
          background: transparent;
          font: inherit;
          font-size: 13px;
          cursor: pointer;
        }

        .filter-menu button:hover,
        .filter-menu button.selected {
          color: #f1c35f;
          background: rgba(229, 174, 71, 0.1);
        }

        .transactions-list {
          display: grid;
          gap: 11px;
        }

        .transaction-card {
          position: relative;
          display: grid;
          grid-template-columns: 60px minmax(0, 1fr) auto 24px;
          gap: 15px;
          align-items: center;
          min-height: 111px;
          overflow: hidden;
          padding: 17px 16px 17px 23px;
          border: 1px solid rgba(119, 143, 177, 0.16);
          border-radius: 16px;
          background:
            linear-gradient(
              100deg,
              rgba(10, 25, 43, 0.94),
              rgba(5, 15, 28, 0.94)
            ),
            rgba(7, 16, 29, 0.94);
          box-shadow: 0 14px 42px rgba(0, 0, 0, 0.13);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .transaction-card:hover {
          transform: translateY(-2px);
          border-color: rgba(220, 168, 70, 0.3);
        }

        .status-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 5px;
          background: #d9a43a;
          box-shadow: 0 0 20px currentColor;
        }

        .transaction-card.success .status-bar {
          color: #39db7a;
          background: #39db7a;
        }

        .transaction-card.pending .status-bar {
          color: #e9ad34;
          background: #e9ad34;
        }

        .transaction-card.received .status-bar {
          color: #3da9ff;
          background: #3da9ff;
        }

        .transaction-icon {
          position: relative;
          display: grid;
          place-items: center;
          width: 55px;
          height: 55px;
          border: 1px solid rgba(226, 170, 62, 0.42);
          border-radius: 50%;
          color: #e8ad39;
          background: rgba(4, 13, 25, 0.82);
        }

        .transaction-card.received .transaction-icon {
          border-color: rgba(55, 164, 255, 0.52);
          color: #3da9ff;
        }

        .transaction-icon svg {
          width: 25px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.55;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .icon-dot {
          position: absolute;
          right: 2px;
          bottom: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #35da77;
          box-shadow: 0 0 10px currentColor;
        }

        .pending .icon-dot {
          background: #e9ad34;
        }

        .received .icon-dot {
          background: #3da9ff;
        }

        .transaction-title {
          margin: 0 0 7px;
          color: #38d978;
          font-size: 13px;
          font-weight: 720;
        }

        .transaction-card.pending .transaction-title {
          color: #e8b13e;
        }

        .transaction-card.received .transaction-title {
          color: #44b5ff;
        }
                .route {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          color: #d7dce5;
          font-size: 13px;
          font-weight: 560;
          line-height: 1.45;
        }

        .flag {
          font-size: 17px;
          line-height: 1;
        }

        .route-arrow {
          margin: 0 2px;
          color: #c99232;
          font-size: 15px;
        }

        .transaction-date {
          margin: 7px 0 0;
          color: #7f899a;
          font-size: 12px;
        }

        .transaction-value {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 9px;
          white-space: nowrap;
        }

        .transaction-value strong {
          color: #f5f1e8;
          font-size: 17px;
          font-weight: 720;
          letter-spacing: -0.02em;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          min-height: 26px;
          padding: 0 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 720;
        }

        .status-badge.success {
          border-color: rgba(52, 216, 118, 0.24);
          color: #42df82;
          background: rgba(43, 197, 103, 0.09);
        }

        .status-badge.pending {
          border-color: rgba(235, 174, 55, 0.28);
          color: #efbb52;
          background: rgba(219, 155, 35, 0.1);
        }

        .status-badge.received {
          border-color: rgba(61, 169, 255, 0.26);
          color: #56baff;
          background: rgba(50, 146, 223, 0.1);
        }

        .details-button {
          display: grid;
          place-items: center;
          width: 24px;
          height: 38px;
          padding: 0;
          border: 0;
          color: #8490a3;
          background: transparent;
          font-size: 27px;
          font-weight: 300;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .details-button:hover {
          color: #e6b550;
          transform: translateX(2px);
        }

        .empty-state {
          display: grid;
          place-items: center;
          min-height: 270px;
          padding: 36px;
          border: 1px dashed rgba(177, 145, 86, 0.28);
          border-radius: 18px;
          text-align: center;
          background: rgba(8, 18, 32, 0.62);
        }

        .empty-icon {
          display: grid;
          place-items: center;
          width: 62px;
          height: 62px;
          margin-bottom: 10px;
          border: 1px solid rgba(218, 166, 71, 0.35);
          border-radius: 50%;
          color: #dba947;
          font-size: 30px;
        }

        .empty-state h2 {
          margin: 0 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 500;
        }

        .empty-state p {
          margin: 0;
          color: #8691a3;
          font-size: 14px;
        }

        .load-more {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          min-height: 49px;
          margin-top: 15px;
          border: 1px solid rgba(208, 156, 61, 0.25);
          border-radius: 13px;
          color: #dca943;
          background: rgba(8, 18, 32, 0.72);
          font: inherit;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .load-more:hover {
          border-color: rgba(230, 177, 76, 0.55);
          background: rgba(19, 27, 39, 0.92);
        }

        .load-more span {
          font-size: 18px;
          transform: translateY(-2px);
        }

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 17px;
          padding-top: 5px;
        }

        .map-card {
          overflow: hidden;
          border: 1px solid rgba(149, 170, 200, 0.14);
          border-radius: 23px;
          background:
            linear-gradient(
              145deg,
              rgba(10, 23, 41, 0.94),
              rgba(4, 12, 24, 0.97)
            ),
            #06101e;
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 24px 26px 0;
        }

        .map-header h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(27px, 2.2vw, 38px);
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .live-status {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          padding: 9px 12px;
          border: 1px solid rgba(63, 212, 124, 0.22);
          border-radius: 999px;
          color: #70df9d;
          background: rgba(34, 155, 88, 0.08);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .live-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #43db81;
          box-shadow: 0 0 12px #43db81;
          animation: livePulse 1.8s ease-in-out infinite;
        }

        .world-map {
          position: relative;
          min-height: 470px;
          overflow: hidden;
          margin-top: 8px;
          background:
            linear-gradient(
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            );
          background-size: 42px 42px;
        }

        .world-map::before {
          content: "";
          position: absolute;
          inset: 14% 12%;
          border: 1px solid rgba(193, 148, 65, 0.08);
          border-radius: 50%;
          box-shadow:
            0 0 90px rgba(210, 157, 57, 0.04),
            inset 0 0 80px rgba(39, 79, 131, 0.04);
        }

        .map-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(55px);
        }

        .map-glow-one {
          top: 7%;
          left: 46%;
          width: 210px;
          height: 210px;
          background: rgba(33, 87, 157, 0.13);
        }

        .map-glow-two {
          right: 10%;
          bottom: 3%;
          width: 190px;
          height: 190px;
          background: rgba(211, 151, 45, 0.09);
        }

        .map-svg {
          position: absolute;
          inset: 34px 2% 0;
          width: 96%;
          height: calc(100% - 40px);
          overflow: visible;
        }

        .continents path {
          fill: url(#landGold);
          stroke: rgba(127, 153, 187, 0.38);
          stroke-width: 1.4;
          vector-effect: non-scaling-stroke;
          transition: 0.3s ease;
        }

        .continents path:hover {
          fill: #182a43;
          stroke: rgba(221, 171, 76, 0.48);
        }

        .map-lines path {
          fill: none;
          stroke: url(#routeGold);
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-dasharray: 8 10;
          opacity: 0.72;
          filter: url(#routeGlow);
          animation: routeDash 4s linear infinite;
        }

        .route-particles circle {
          fill: #ffe394;
          filter: url(#routeGlow);
        }

        .map-points circle {
          fill: #e0a43b;
          stroke: #fff0b1;
          stroke-width: 1.5;
          filter: url(#pointGlow);
          animation: pointPulse 2.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .map-points circle:nth-child(2) {
          animation-delay: 0.4s;
        }

        .map-points circle:nth-child(3) {
          animation-delay: 0.8s;
        }

        .map-points circle:nth-child(4) {
          animation-delay: 1.2s;
        }
                .city-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(220, 170, 75, 0.18);
          border-radius: 14px;
          background: rgba(5, 14, 27, 0.92);
          backdrop-filter: blur(14px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.28);
        }

        .city-label span {
          font-size: 22px;
        }

        .city-label strong {
          display: block;
          color: #f6f1e6;
          font-size: 13px;
          font-weight: 700;
        }

        .city-label small {
          color: #8f99aa;
          font-size: 11px;
        }

        .city-paris {
          top: 90px;
          left: 43%;
        }

        .city-brazzaville {
          top: 250px;
          left: 56%;
        }

        .city-kinshasa {
          top: 266px;
          left: 66%;
        }

        .city-douala {
          top: 330px;
          left: 52%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-card {
          padding: 20px;
          border: 1px solid rgba(173, 185, 205, 0.12);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(11, 24, 42, 0.94),
            rgba(5, 13, 25, 0.96)
          );
        }

        .stat-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: #97a4b7;
          font-size: 12px;
          font-weight: 600;
        }

        .stat-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #dfae49;
          border: 1px solid rgba(223, 174, 73, 0.22);
          background: rgba(223, 174, 73, 0.08);
        }

        .stat-icon svg {
          width: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .stat-card strong {
          display: block;
          color: #f6f2e8;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .stat-card small {
          color: #8894a5;
          font-size: 13px;
        }

        .signature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 22px;
          border: 1px solid rgba(217, 167, 67, 0.14);
          border-radius: 18px;
          background: rgba(7, 16, 30, 0.82);
        }

        .signature-shield {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: #d9a743;
          border: 1px solid rgba(217, 167, 67, 0.28);
          background: rgba(217, 167, 67, 0.08);
        }

        .signature p {
          margin: 0;
          color: #b9c2cf;
          font-size: 13px;
        }

        .signature strong {
          color: #f4efe5;
        }

        @keyframes routeDash {
          to {
            stroke-dashoffset: -36;
          }
        }

        @keyframes pointPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.65;
          }
        }

        @keyframes livePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.45);
            opacity: 0.55;
          }
        }

        @media (max-width: 1200px) {
          .activity-shell {
            grid-template-columns: 1fr;
          }

          .world-map {
            min-height: 430px;
          }
        }

        @media (max-width: 768px) {
          .activity-page {
            padding: 18px;
          }

          .tools-row,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .transaction-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .transaction-icon,
          .transaction-value,
          .details-button {
            justify-self: center;
          }

          .route {
            justify-content: center;
          }

          .city-label {
            transform: scale(0.88);
          }
        }
      `}</style>
    </main>
  );
}
