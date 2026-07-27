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
        <path d="M4 7.5h14a2 2 0 0 1 2 2V18H6a2 2 0 0 1-2-2V7.5Z" />
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

      return (
        matchesFilter &&
        (!normalizedSearch || searchableText.includes(normalizedSearch))
      );
    });
  }, [search, filter]);

  const chooseFilter = (value) => {
    setFilter(value);
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
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher une transaction, un pays..."
                aria-label="Rechercher une transaction"
              />
            </label>

            <div className="filter-wrapper">
              <button
                type="button"
                className={`filter-button ${showFilters ? "active" : ""}`}
                onClick={() => setShowFilters((current) => !current)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M8 14v6M16 4v6M16 14v6" />
                </svg>

                Filtrer
                <span>⌄</span>
              </button>

              {showFilters && (
                <div className="filter-menu">
                  {filters.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={filter === item.value ? "selected" : ""}
                      onClick={() => chooseFilter(item.value)}
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
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <article
                  key={transaction.id}
                  className={`transaction-card ${transaction.type}`}
                >
                  <div className="status-line" />

                  <div className="transaction-icon">
                    <TransactionIcon type={transaction.type} />
                    <span className="icon-dot" />
                  </div>

                  <div className="transaction-content">
                    <p className="transaction-title">{transaction.title}</p>

                    <div className="transaction-route">
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

                    <span className={`status-badge ${transaction.type}`}>
                      {transaction.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="details-button"
                    aria-label={`Afficher le détail de ${transaction.title}`}
                  >
                    ›
                  </button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <span>⌕</span>
                <h2>Aucune opération trouvée</h2>
                <p>Essaie un autre pays, un montant ou un statut.</p>
              </div>
            )}
          </div>
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
              <div className="map-grid" />
              <div className="map-halo map-halo-blue" />
              <div className="map-halo map-halo-gold" />

              <svg
                className="world-svg"
                viewBox="0 0 1000 560"
                role="img"
                aria-label="Carte du monde avec les transferts YVI PAY entre Paris et l’Afrique"
              >
                <defs>
                  <linearGradient id="continentFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#203550" />
                    <stop offset="55%" stopColor="#14253d" />
                    <stop offset="100%" stopColor="#091529" />
                  </linearGradient>

                  <linearGradient id="goldRoute" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff1aa" />
                    <stop offset="45%" stopColor="#f6c45c" />
                    <stop offset="100%" stopColor="#a96c18" />
                  </linearGradient>

                  <filter id="goldGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="pointGlow">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g className="world-continents">
                  <path
                    className="north-america"
                    d="M58 122 92 83 146 63 197 68 242 91 276 127 263 157 228 166 213 196 181 215 145 203 112 218 79 191 48 164Z"
                  />

                  <path
                    className="central-america"
                    d="M197 213 229 224 249 250 236 266 207 252 188 232Z"
                  />

                  <path
                    className="south-america"
                    d="M238 261 279 279 306 315 310 359 292 405 268 466 238 450 221 401 196 361 199 319Z"
                  />

                  <path
                    className="greenland"
                    d="M239 52 282 32 317 45 323 76 290 97 254 87Z"
                  />

                  <path
                    className="europe"
                    d="M455 116 481 93 511 96 527 112 548 103 565 119 552 136 526 142 512 157 487 151 472 162 451 149 435 134Z"
                  />

                  <path
                    className="africa"
                    d="M474 166 518 153 560 169 587 203 579 245 560 286 544 337 511 371 479 347 467 299 438 261 438 215Z"
                  />

                  <path
                    className="asia"
                    d="M548 104 588 79 636 74 670 88 708 77 747 89 786 80 837 99 878 126 920 141 945 170 926 197 885 196 858 221 817 213 789 234 750 215 713 226 682 205 646 218 616 192 580 187 563 153 534 143Z"
                  />

                  <path
                    className="india"
                    d="M692 221 718 230 731 269 714 307 691 282 677 246Z"
                  />

                  <path
                    className="south-east-asia"
                    d="M782 232 818 239 839 260 827 283 798 273 772 249Z"
                  />

                  <path
                    className="australia"
                    d="M801 349 845 327 897 339 926 373 909 409 863 427 818 413 789 379Z"
                  />

                  <path
                    className="madagascar"
                    d="M581 326 594 349 588 387 572 370Z"
                  />

                  <path
                    className="japan"
                    d="M883 195 894 210 887 230 877 214Z"
                  />
                </g>

                <g className="transfer-routes">
                  <path
                    className="route-path route-one"
                    d="M500 135 C530 185 535 240 520 300"
                  />

                  <path
                    className="route-path route-two"
                    d="M500 135 C550 190 575 245 548 314"
                  />

                  <path
                    className="route-path route-three"
                    d="M500 135 C515 200 500 250 488 283"
                  />

                  <path
                    className="route-path route-four"
                    d="M500 135 C460 185 450 225 445 258"
                  />
                </g>

                <g className="moving-particles">
                  <circle r="4">
                    <animateMotion
                      dur="3.4s"
                      repeatCount="indefinite"
                      path="M500 135 C530 185 535 240 520 300"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M500 135 C550 190 575 245 548 314"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4.6s"
                      repeatCount="indefinite"
                      path="M500 135 C515 200 500 250 488 283"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="5.1s"
                      repeatCount="indefinite"
                      path="M500 135 C460 185 450 225 445 258"
                    />
                  </circle>
                </g>

                <g className="city-points">
                  <circle cx="500" cy="135" r="7" />
                  <circle cx="520" cy="300" r="6" />
                  <circle cx="548" cy="314" r="6" />
                  <circle cx="488" cy="283" r="6" />
                  <circle cx="445" cy="258" r="6" />
                </g>
              </svg>
              <div className="city-label city-paris">
                <span className="city-flag">🇫🇷</span>
                <div>
                  <strong>Paris</strong>
                  <small>France</small>
                </div>
              </div>

              <div className="city-label city-brazzaville">
                <span className="city-flag">🇨🇬</span>
                <div>
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </div>
              </div>

              <div className="city-label city-kinshasa">
                <span className="city-flag">🇨🇩</span>
                <div>
                  <strong>Kinshasa</strong>
                  <small>RDC</small>
                </div>
              </div>

              <div className="city-label city-douala">
                <span className="city-flag">🇨🇲</span>
                <div>
                  <strong>Douala</strong>
                  <small>Cameroun</small>
                </div>
              </div>

              <div className="city-label city-abidjan">
                <span className="city-flag">🇨🇮</span>
                <div>
                  <strong>Abidjan</strong>
                  <small>Côte d’Ivoire</small>
                </div>
              </div>
            </div>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-heading">
                <span className="stat-icon">
                  <StatIcon type="calendar" />
                </span>
                <span>Aujourd’hui</span>
              </div>

              <strong>8</strong>
              <small>transferts</small>
            </article>

            <article className="stat-card">
              <div className="stat-heading">
                <span className="stat-icon">
                  <StatIcon type="wallet" />
                </span>
                <span>Montant total</span>
              </div>

              <strong>3 250 €</strong>
              <small>aujourd’hui</small>
            </article>

            <article className="stat-card">
              <div className="stat-heading">
                <span className="stat-icon">
                  <StatIcon type="speed" />
                </span>
                <span>Temps moyen</span>
              </div>

              <strong>1 min 42 s</strong>
              <small>par transfert</small>
            </article>

            <article className="stat-card">
              <div className="stat-heading">
                <span className="stat-icon">
                  <StatIcon type="globe" />
                </span>
                <span>Pays actifs</span>
              </div>

              <strong>4</strong>
              <small>pays</small>
            </article>
          </section>

          <div className="brand-note">
            <span className="brand-monogram">Y</span>

            <p>
              <strong>YVI PAY</strong>
              <span>Votre argent. Vos proches. Sans frontières.</span>
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
          color: #f7f3e9;
          background:
            radial-gradient(
              circle at 12% 7%,
              rgba(27, 67, 121, 0.23),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 28%,
              rgba(205, 150, 48, 0.07),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #020713 0%,
              #030a16 48%,
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

        .ambient {
          position: fixed;
          z-index: 0;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(85px);
          opacity: 0.14;
        }

        .ambient-left {
          top: 6%;
          left: -230px;
          background: #285ca9;
        }

        .ambient-right {
          right: -240px;
          bottom: -150px;
          background: #b4771e;
        }

        .activity-shell {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            minmax(430px, 0.88fr)
            minmax(650px, 1.42fr);
          gap: 30px;
          width: min(1720px, 100%);
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
          font-size: clamp(48px, 4.5vw, 72px);
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

        .filter-button > span {
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

        .status-line {
          position: absolute;
          inset: 0 auto 0 0;
          width: 5px;
          background: #39db7a;
          box-shadow: 0 0 18px currentColor;
        }

        .transaction-card.pending .status-line {
          color: #e9ad34;
          background: #e9ad34;
        }

        .transaction-card.received .status-line {
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

        .transaction-route {
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

        .status-badge.sent {
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

        .empty-state > span {
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
                .right-panel {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .map-card {
          overflow: hidden;
          border: 1px solid rgba(140, 160, 189, 0.18);
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(9, 22, 39, 0.96),
              rgba(3, 12, 24, 0.98)
            );
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .map-header {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 26px 19px;
          border-bottom: 1px solid rgba(139, 157, 183, 0.12);
        }

        .map-header h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        .live-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 34px;
          padding: 0 13px;
          border: 1px solid rgba(48, 215, 118, 0.2);
          border-radius: 999px;
          color: #50dd88;
          background: rgba(33, 174, 91, 0.07);
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .live-status > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #42df82;
          box-shadow: 0 0 12px #42df82;
          animation: livePulse 1.8s ease-in-out infinite;
        }

        .world-map {
          position: relative;
          min-height: 570px;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 52% 44%,
              rgba(30, 70, 116, 0.16),
              transparent 39%
            ),
            linear-gradient(
              180deg,
              rgba(6, 17, 32, 0.3),
              rgba(2, 9, 20, 0.7)
            );
        }

        .map-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.18;
          background-image:
            linear-gradient(
              rgba(118, 150, 188, 0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(118, 150, 188, 0.15) 1px,
              transparent 1px
            );
          background-size: 48px 48px;
          mask-image: radial-gradient(
            circle at center,
            black 18%,
            transparent 74%
          );
        }

        .map-halo {
          position: absolute;
          z-index: -1;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(55px);
        }

        .map-halo-blue {
          top: 90px;
          left: 31%;
          width: 320px;
          height: 320px;
          background: rgba(31, 91, 158, 0.16);
        }

        .map-halo-gold {
          right: 19%;
          bottom: 70px;
          width: 230px;
          height: 230px;
          background: rgba(211, 153, 47, 0.08);
        }

        .world-svg {
          position: absolute;
          inset: 35px 20px 0;
          width: calc(100% - 40px);
          height: calc(100% - 45px);
          overflow: visible;
        }

        .world-continents path {
          fill: url(#continentFill);
          stroke: rgba(121, 155, 197, 0.42);
          stroke-width: 1.5;
          vector-effect: non-scaling-stroke;
          filter: drop-shadow(0 12px 22px rgba(0, 0, 0, 0.25));
          transition:
            fill 0.3s ease,
            stroke 0.3s ease;
        }

        .world-continents path:hover {
          fill: #1b3554;
          stroke: rgba(225, 178, 86, 0.65);
        }

        .transfer-routes {
          fill: none;
          stroke-linecap: round;
        }

        .route-path {
          stroke: url(#goldRoute);
          stroke-width: 2.2;
          opacity: 0.78;
          filter: url(#goldGlow);
          stroke-dasharray: 7 9;
          animation: routeFlow 2.8s linear infinite;
        }

        .route-two {
          animation-duration: 3.4s;
          opacity: 0.66;
        }

        .route-three {
          animation-duration: 3.9s;
          opacity: 0.58;
        }

        .route-four {
          animation-duration: 4.3s;
          opacity: 0.52;
        }

        .moving-particles circle {
          fill: #ffe8a1;
          filter: url(#goldGlow);
        }

        .city-points circle {
          fill: #f3c45f;
          stroke: #fff1b3;
          stroke-width: 2;
          filter: url(#pointGlow);
          transform-box: fill-box;
          transform-origin: center;
          animation: cityPulse 2.2s ease-in-out infinite;
        }

        .city-points circle:nth-child(2) {
          animation-delay: 0.25s;
        }

        .city-points circle:nth-child(3) {
          animation-delay: 0.5s;
        }

        .city-points circle:nth-child(4) {
          animation-delay: 0.75s;
        }

        .city-points circle:nth-child(5) {
          animation-delay: 1s;
        }

        .city-label {
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 132px;
          padding: 10px 12px;
          border: 1px solid rgba(221, 171, 75, 0.31);
          border-radius: 13px;
          background:
            linear-gradient(
              145deg,
              rgba(12, 27, 47, 0.93),
              rgba(4, 13, 25, 0.96)
            );
          box-shadow:
            0 15px 36px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(14px);
          transform: translate(-50%, -50%);
        }

        .city-label::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -17px;
          width: 1px;
          height: 16px;
          background: linear-gradient(
            to bottom,
            rgba(224, 174, 78, 0.6),
            transparent
          );
        }

        .city-flag {
          font-size: 23px;
          line-height: 1;
        }

        .city-label div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .city-label strong {
          color: #f7f3e9;
          font-size: 12px;
          line-height: 1.1;
        }

        .city-label small {
          color: #8793a7;
          font-size: 9px;
          line-height: 1.1;
        }

        .city-paris {
          top: 25%;
          left: 50%;
        }

        .city-brazzaville {
          top: 59%;
          left: 53%;
        }

        .city-kinshasa {
          top: 67%;
          left: 62%;
        }

        .city-douala {
          top: 51%;
          left: 47%;
        }

        .city-abidjan {
          top: 46%;
          left: 35%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          min-width: 0;
          padding: 17px;
          border: 1px solid rgba(130, 151, 181, 0.15);
          border-radius: 16px;
          background:
            linear-gradient(
              145deg,
              rgba(10, 24, 42, 0.91),
              rgba(4, 13, 25, 0.93)
            );
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .stat-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          color: #8e99aa;
          font-size: 10px;
          font-weight: 650;
          white-space: nowrap;
        }

        .stat-icon {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          border: 1px solid rgba(218, 166, 70, 0.25);
          border-radius: 8px;
          color: #dfa947;
          background: rgba(219, 166, 65, 0.06);
        }

        .stat-icon svg {
          width: 14px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .stat-card > strong {
          display: block;
          overflow: hidden;
          color: #f4efe5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 1.7vw, 27px);
          font-weight: 500;
          letter-spacing: -0.025em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .stat-card > small {
          display: block;
          margin-top: 5px;
          color: #717d90;
          font-size: 10px;
        }

        .brand-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 10px 0 0;
          color: #7f8998;
        }

        .brand-monogram {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border: 1px solid rgba(220, 169, 72, 0.33);
          border-radius: 50%;
          color: #e0aa48;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
        }

        .brand-note p {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin: 0;
        }

        .brand-note strong {
          color: #d7a54a;
          font-size: 11px;
          letter-spacing: 0.16em;
        }

        .brand-note p span {
          font-size: 9px;
        }

        @keyframes routeFlow {
          to {
            stroke-dashoffset: -32;
          }
        }

        @keyframes cityPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.85;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes livePulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
                @media (max-width: 1450px) {
          .activity-shell {
            grid-template-columns:
              minmax(400px, 0.92fr)
              minmax(590px, 1.28fr);
            gap: 22px;
          }

          .world-map {
            min-height: 530px;
          }

          .city-label {
            min-width: 118px;
            padding: 9px 10px;
          }

          .city-flag {
            font-size: 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1120px) {
          .activity-page {
            padding: 28px 24px 42px;
          }

          .activity-shell {
            grid-template-columns: 1fr;
          }

          .right-panel {
            margin-top: 12px;
          }

          .world-map {
            min-height: 560px;
          }

          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .activity-page {
            padding: 24px 17px 36px;
          }

          .page-heading h1 {
            font-size: 48px;
          }

          .subtitle {
            font-size: 15px;
          }

          .tools-row {
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
            grid-template-columns: 52px minmax(0, 1fr) auto;
            gap: 12px;
            min-height: 120px;
            padding: 16px 14px 16px 20px;
          }

          .transaction-icon {
            width: 48px;
            height: 48px;
          }

          .details-button {
            display: none;
          }

          .transaction-value strong {
            font-size: 15px;
          }

          .map-header {
            padding: 21px 18px 17px;
          }

          .map-header h2 {
            font-size: 24px;
          }

          .world-map {
            min-height: 470px;
          }

          .world-svg {
            inset: 42px 4px 0;
            width: calc(100% - 8px);
            height: calc(100% - 48px);
          }

          .city-label {
            min-width: 104px;
            gap: 7px;
            padding: 8px 9px;
          }

          .city-label strong {
            font-size: 10px;
          }

          .city-label small {
            font-size: 8px;
          }

          .city-flag {
            font-size: 18px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .activity-page {
            padding: 20px 12px 30px;
          }

          .page-heading h1 {
            font-size: 42px;
          }

          .transaction-card {
            grid-template-columns: 44px minmax(0, 1fr);
          }

          .transaction-icon {
            width: 42px;
            height: 42px;
          }

          .transaction-icon svg {
            width: 21px;
          }

          .transaction-value {
            grid-column: 2;
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .map-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .world-map {
            min-height: 410px;
          }

          .city-label {
            min-width: auto;
            padding: 7px;
          }

          .city-label div {
            display: none;
          }

          .city-label::after {
            height: 11px;
            bottom: -12px;
          }

          .city-paris {
            top: 27%;
          }

          .city-brazzaville {
            top: 58%;
            left: 54%;
          }

          .city-kinshasa {
            top: 66%;
            left: 63%;
          }

          .city-douala {
            top: 50%;
            left: 46%;
          }

          .city-abidjan {
            top: 45%;
            left: 34%;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stat-card {
            padding: 14px;
          }

          .stat-heading {
            white-space: normal;
          }

          .brand-note {
            text-align: left;
          }
        }
      `}</style>
    </main>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16.4 16.4 4.1 4.1" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </svg>
  );
}

function TransactionIcon({ type }) {
  if (type === "received") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v13" />
        <path d="m7 12 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
    );
  }

  if (type === "pending") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5" />
        <path d="M12 16h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5" />
      <path d="M10 5h9v9" />
      <path d="M5 8v11h11" />
    </svg>
  );
}



  if (type === "wallet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h14a2 2 0 0 1 2 2v9H6a2 2 0 0 1-2-2Z" />
        <path d="M4 7 15 4a2 2 0 0 1 2 2v1" />
        <path d="M15 12h5v4h-5a2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  if (type === "speed") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18a8 8 0 1 1 14 0" />
        <path d="m12 14 4-4" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4a13 13 0 0 1 0 16" />
      <path d="M12 4a13 13 0 0 0 0 16" />
    </svg>
  );
}
