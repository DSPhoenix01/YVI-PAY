"use client";

import { useMemo, useState } from "react";

const transactions = [
  {
    id: 1,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris",
    toFlag: "🇨🇬",
    toCity: "Brazzaville",
    date: "Aujourd’hui à 18:42",
    amount: "250,00 €",
    status: "Envoyé",
  },
  {
    id: 2,
    type: "received",
    title: "Transfert reçu",
    fromFlag: "🇨🇩",
    fromCity: "Kinshasa",
    toFlag: "🇫🇷",
    toCity: "Paris",
    date: "Aujourd’hui à 15:18",
    amount: "120,00 €",
    status: "Reçu",
  },
  {
    id: 3,
    type: "pending",
    title: "Transfert en cours",
    fromFlag: "🇫🇷",
    fromCity: "Paris",
    toFlag: "🇨🇲",
    toCity: "Douala",
    date: "Aujourd’hui à 12:05",
    amount: "85,00 €",
    status: "En cours",
  },
  {
    id: 4,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris",
    toFlag: "🇨🇮",
    toCity: "Abidjan",
    date: "Hier à 21:36",
    amount: "310,00 €",
    status: "Envoyé",
  },
  {
    id: 5,
    type: "sent",
    title: "Transfert envoyé",
    fromFlag: "🇫🇷",
    fromCity: "Paris",
    toFlag: "🇨🇩",
    toCity: "Kinshasa",
    date: "Hier à 16:22",
    amount: "175,00 €",
    status: "Envoyé",
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" />
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

function StatIcon({ type }) {
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

  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a13 13 0 0 1 0 16" />
        <path d="M12 4a13 13 0 0 0 0 16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M8 3v5" />
      <path d="M16 3v5" />
      <path d="M4 10h16" />
    </svg>
  );
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
      <div className="ambient ambient-blue" />
      <div className="ambient ambient-gold" />

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
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <article
                  key={transaction.id}
                  className={`transaction-card ${transaction.type}`}
                >
                  <span className="status-line" />

                  <div className="transaction-icon">
                    <TransactionIcon type={transaction.type} />
                    <span className="icon-dot" />
                  </div>

                  <div className="transaction-content">
                    <p className="transaction-title">
                      {transaction.title}
                    </p>

                    <div className="transaction-route">
                      <span className="flag">
                        {transaction.fromFlag}
                      </span>

                      <span>{transaction.fromCity}</span>
                      <span className="route-arrow">→</span>

                      <span className="flag">
                        {transaction.toFlag}
                      </span>

                      <span>{transaction.toCity}</span>
                    </div>

                    <p className="transaction-date">
                      {transaction.date}
                    </p>
                  </div>

                  <div className="transaction-value">
                    <strong>{transaction.amount}</strong>

                    <span
                      className={`status-badge ${transaction.type}`}
                    >
                      {transaction.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="details-button"
                    aria-label={`Voir les détails de ${transaction.title}`}
                  >
                    ›
                  </button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <span>⌕</span>
                <h2>Aucune opération trouvée</h2>
                <p>Essaie une autre recherche ou un autre filtre.</p>
              </div>
            )}
          </div>
        </section>
        <aside className="history-right">
          <section className="map-card">
            <header className="map-header">
              <div>
                <p className="map-eyebrow">RÉSEAU INTERNATIONAL</p>
                <h2>Carte des transferts</h2>
              </div>

              <div className="live-status">
                <span className="live-dot" />
                <span>Temps réel</span>
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
                aria-label="Carte des transferts internationaux YVI PAY"
              >
                <defs>
                  <linearGradient
                    id="continentFillV4"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#31577d" />
                    <stop offset="48%" stopColor="#1b3655" />
                    <stop offset="100%" stopColor="#0d2038" />
                  </linearGradient>

                  <linearGradient
                    id="continentStrokeV4"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6888a8" />
                    <stop offset="100%" stopColor="#284663" />
                  </linearGradient>

                  <linearGradient
                    id="goldRouteV4"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#fff2b5" />
                    <stop offset="46%" stopColor="#e9b64d" />
                    <stop offset="100%" stopColor="#9b6117" />
                  </linearGradient>

                  <radialGradient id="pointGoldV4">
                    <stop offset="0%" stopColor="#fff8d5" />
                    <stop offset="45%" stopColor="#f2c45d" />
                    <stop offset="100%" stopColor="#b97620" />
                  </radialGradient>

                  <filter id="continentShadowV4">
                    <feDropShadow
                      dx="0"
                      dy="10"
                      stdDeviation="12"
                      floodColor="#000000"
                      floodOpacity="0.35"
                    />
                  </filter>

                  <filter id="routeGlowV4">
                    <feGaussianBlur
                      stdDeviation="3.5"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="pointGlowV4">
                    <feGaussianBlur
                      stdDeviation="6"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g
                  className="world-continents"
                  fill="url(#continentFillV4)"
                  stroke="url(#continentStrokeV4)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  filter="url(#continentShadowV4)"
                >
                  <path
                    d="
                      M48 132
                      L78 94
                      L121 68
                      L170 57
                      L217 71
                      L257 96
                      L285 127
                      L273 153
                      L241 165
                      L220 191
                      L184 208
                      L147 201
                      L112 216
                      L78 193
                      L50 163
                      Z
                    "
                  />

                  <path
                    d="
                      M188 210
                      L219 218
                      L244 244
                      L236 265
                      L207 254
                      L187 233
                      Z
                    "
                  />

                  <path
                    d="
                      M239 262
                      L276 276
                      L304 309
                      L313 349
                      L302 391
                      L283 434
                      L257 477
                      L231 451
                      L216 408
                      L196 368
                      L195 322
                      Z
                    "
                  />

                  <path
                    d="
                      M241 54
                      L278 35
                      L315 43
                      L326 69
                      L305 91
                      L270 99
                      L247 82
                      Z
                    "
                  />

                  <path
                    d="
                      M434 136
                      L453 110
                      L478 96
                      L504 97
                      L522 109
                      L543 102
                      L564 116
                      L555 132
                      L532 140
                      L515 153
                      L491 150
                      L474 163
                      L452 152
                      Z
                    "
                  />

                  <path
                    d="
                      M466 166
                      L504 153
                      L544 160
                      L573 183
                      L588 216
                      L581 251
                      L563 287
                      L548 333
                      L523 365
                      L493 361
                      L474 331
                      L466 294
                      L439 263
                      L435 218
                      Z
                    "
                  />

                  <path
                    d="
                      M546 104
                      L585 78
                      L630 70
                      L669 84
                      L707 75
                      L750 87
                      L791 78
                      L838 97
                      L878 121
                      L916 139
                      L947 165
                      L938 190
                      L907 201
                      L875 196
                      L852 219
                      L814 211
                      L786 231
                      L750 216
                      L715 229
                      L680 207
                      L648 219
                      L614 193
                      L580 186
                      L561 155
                      L532 143
                      Z
                    "
                  />

                  <path
                    d="
                      M687 216
                      L715 229
                      L729 263
                      L719 296
                      L700 312
                      L686 282
                      L675 245
                      Z
                    "
                  />

                  <path
                    d="
                      M774 230
                      L809 238
                      L836 258
                      L830 281
                      L804 285
                      L781 266
                      L764 246
                      Z
                    "
                  />

                  <path
                    d="
                      M803 350
                      L842 329
                      L891 337
                      L925 365
                      L930 391
                      L904 416
                      L862 429
                      L820 415
                      L792 383
                      Z
                    "
                  />

                  <path
                    d="
                      M578 326
                      L592 347
                      L589 379
                      L574 391
                      L568 363
                      Z
                    "
                  />

                  <path
                    d="
                      M884 193
                      L896 207
                      L891 226
                      L880 234
                      L875 215
                      Z
                    "
                  />
                </g>

                <g
                  className="transfer-routes"
                  fill="none"
                  stroke="url(#goldRouteV4)"
                  strokeLinecap="round"
                  filter="url(#routeGlowV4)"
                >
                  <path
                    className="route-path route-main"
                    d="M500 135 C528 184 535 245 520 304"
                  />

                  <path
                    className="route-path route-secondary"
                    d="M500 135 C551 187 572 247 548 318"
                  />

                  <path
                    className="route-path route-secondary"
                    d="M500 135 C512 194 501 245 488 283"
                  />

                  <path
                    className="route-path route-secondary"
                    d="M500 135 C463 181 451 224 445 259"
                  />
                </g>

                <g
                  className="moving-particles"
                  fill="#ffe39a"
                  filter="url(#routeGlowV4)"
                >
                  <circle r="4">
                    <animateMotion
                      dur="3.4s"
                      repeatCount="indefinite"
                      path="M500 135 C528 184 535 245 520 304"
                    />
                  </circle>

                  <circle r="3.5">
                    <animateMotion
                      dur="4.2s"
                      repeatCount="indefinite"
                      path="M500 135 C551 187 572 247 548 318"
                    />
                  </circle>

                  <circle r="3.5">
                    <animateMotion
                      dur="4.8s"
                      repeatCount="indefinite"
                      path="M500 135 C512 194 501 245 488 283"
                    />
                  </circle>

                  <circle r="3.5">
                    <animateMotion
                      dur="5.3s"
                      repeatCount="indefinite"
                      path="M500 135 C463 181 451 224 445 259"
                    />
                  </circle>
                </g>

                <g
                  className="city-rings"
                  fill="none"
                  stroke="#e7b750"
                  strokeWidth="2"
                >
                  <circle cx="500" cy="135" r="15" />
                  <circle cx="520" cy="304" r="13" />
                  <circle cx="548" cy="318" r="13" />
                  <circle cx="488" cy="283" r="13" />
                  <circle cx="445" cy="259" r="13" />
                </g>

                <g
                  className="city-points"
                  fill="url(#pointGoldV4)"
                  stroke="#fff1b4"
                  strokeWidth="1.5"
                  filter="url(#pointGlowV4)"
                >
                  <circle cx="500" cy="135" r="7" />
                  <circle cx="520" cy="304" r="6" />
                  <circle cx="548" cy="318" r="6" />
                  <circle cx="488" cy="283" r="6" />
                  <circle cx="445" cy="259" r="6" />
                </g>
              </svg>

              <div className="city-label city-paris">
                <span className="city-flag">🇫🇷</span>
                <span className="city-text">
                  <strong>Paris</strong>
                  <small>France</small>
                </span>
              </div>

              <div className="city-label city-brazzaville">
                <span className="city-flag">🇨🇬</span>
                <span className="city-text">
                  <strong>Brazzaville</strong>
                  <small>Congo</small>
                </span>
              </div>

              <div className="city-label city-kinshasa">
                <span className="city-flag">🇨🇩</span>
                <span className="city-text">
                  <strong>Kinshasa</strong>
                  <small>RDC</small>
                </span>
              </div>

              <div className="city-label city-douala">
                <span className="city-flag">🇨🇲</span>
                <span className="city-text">
                  <strong>Douala</strong>
                  <small>Cameroun</small>
                </span>
              </div>

              <div className="city-label city-abidjan">
                <span className="city-flag">🇨🇮</span>
                <span className="city-text">
                  <strong>Abidjan</strong>
                  <small>Côte d’Ivoire</small>
                </span>
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

        .history-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 34px;
          color: #f6f1e8;
          background:
            radial-gradient(
              circle at 12% 10%,
              rgba(34, 75, 132, 0.24),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 18%,
              rgba(205, 151, 51, 0.08),
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
          width: 430px;
          height: 430px;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.15;
        }

        .ambient-blue {
          top: 5%;
          left: -230px;
          background: #2b65b7;
        }

        .ambient-gold {
          right: -250px;
          bottom: -170px;
          background: #b9791d;
        }

        .history-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            minmax(430px, 0.9fr)
            minmax(650px, 1.4fr);
          gap: 30px;
          width: min(1720px, 100%);
          margin: 0 auto;
        }

        .history-left,
        .history-right {
          min-width: 0;
        }

        .page-header {
          margin-bottom: 25px;
        }

        .eyebrow,
        .map-eyebrow {
          margin: 0 0 8px;
          color: #d9a743;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .page-header h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 4.5vw, 72px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .subtitle {
          margin: 12px 0 0;
          color: #aeb7c7;
          font-size: 17px;
        }

        .toolbar {
          position: relative;
          z-index: 20;
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
          border: 1px solid rgba(151, 172, 203, 0.18);
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(12, 25, 43, 0.88),
            rgba(6, 15, 29, 0.92)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .search-box svg {
          flex: 0 0 auto;
          width: 21px;
          height: 21px;
          margin-right: 12px;
          fill: none;
          stroke: #8d98aa;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
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
          border: 1px solid rgba(211, 153, 48, 0.5);
          border-radius: 14px;
          color: #e8b950;
          background: linear-gradient(
            145deg,
            rgba(18, 29, 45, 0.96),
            rgba(6, 14, 26, 0.97)
          );
          font: inherit;
          font-size: 14px;
          font-weight: 650;
          cursor: pointer;
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .filter-button:hover,
        .filter-button.active {
          border-color: rgba(242, 185, 78, 0.9);
          background: rgba(33, 28, 21, 0.94);
        }

        .filter-button svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
        }

        .filter-button b {
          font-size: 18px;
          font-weight: 400;
          transform: translateY(-2px);
        }

        .filter-menu {
          position: absolute;
          top: calc(100% + 9px);
          right: 0;
          z-index: 50;
          width: 205px;
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
          background: linear-gradient(
            100deg,
            rgba(10, 25, 43, 0.95),
            rgba(5, 15, 28, 0.95)
          );
          box-shadow: 0 14px 42px rgba(0, 0, 0, 0.14);
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
          box-shadow: 0 0 18px rgba(57, 219, 122, 0.72);
        }

        .transaction-card.pending .status-line {
          background: #e9ad34;
          box-shadow: 0 0 18px rgba(233, 173, 52, 0.72);
        }

        .transaction-card.received .status-line {
          background: #3da9ff;
          box-shadow: 0 0 18px rgba(61, 169, 255, 0.72);
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
          background: rgba(4, 13, 25, 0.84);
        }

        .transaction-card.received .transaction-icon {
          border-color: rgba(55, 164, 255, 0.52);
          color: #3da9ff;
        }

        .transaction-icon svg {
          width: 25px;
          height: 25px;
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
          box-shadow: 0 0 10px rgba(53, 218, 119, 0.9);
        }

        .transaction-card.pending .icon-dot {
          background: #e9ad34;
          box-shadow: 0 0 10px rgba(233, 173, 52, 0.9);
        }

        .transaction-card.received .icon-dot {
          background: #3da9ff;
          box-shadow: 0 0 10px rgba(61, 169, 255, 0.9);
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
        }

        .flag {
          font-size: 17px;
        }

        .route-arrow {
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
          cursor: pointer;
        }

        .details-button:hover {
          color: #e6b550;
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
          border: 1px solid rgba(218, 166, 71, 0.35);
          border-radius: 50%;
          color: #dba947;
          font-size: 30px;
        }

        .empty-state h2 {
          margin: 10px 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 500;
        }

        .empty-state p {
          margin: 0;
          color: #8691a3;
          font-size: 14px;
        }
                .history-right {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .map-card {
          overflow: hidden;
          border: 1px solid rgba(132, 157, 191, 0.17);
          border-radius: 22px;
          background:
            linear-gradient(
              145deg,
              rgba(9, 23, 41, 0.97),
              rgba(3, 11, 23, 0.98)
            );
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 26px 18px;
          border-bottom: 1px solid rgba(124, 147, 178, 0.12);
        }

        .map-header h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        .live-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 34px;
          padding: 0 12px;
          border: 1px solid rgba(57, 215, 117, 0.22);
          border-radius: 999px;
          color: #72e49e;
          background: rgba(42, 190, 101, 0.07);
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #44e082;
          box-shadow: 0 0 11px rgba(68, 224, 130, 0.95);
          animation: livePulse 1.8s ease-in-out infinite;
        }

        .world-map {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 52% 42%,
              rgba(29, 70, 112, 0.19),
              transparent 42%
            ),
            linear-gradient(
              180deg,
              rgba(6, 18, 34, 0.96),
              rgba(2, 8, 18, 0.98)
            );
        }

        .map-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.12;
          background-image:
            linear-gradient(
              rgba(118, 148, 184, 0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(118, 148, 184, 0.18) 1px,
              transparent 1px
            );
          background-size: 42px 42px;
          mask-image: radial-gradient(
            circle at center,
            black 25%,
            transparent 82%
          );
        }

        .map-halo {
          position: absolute;
          z-index: 0;
          border-radius: 50%;
          filter: blur(72px);
          pointer-events: none;
        }

        .map-halo-blue {
          top: 8%;
          left: 25%;
          width: 320px;
          height: 320px;
          background: rgba(42, 103, 174, 0.2);
        }

        .map-halo-gold {
          right: 10%;
          bottom: 8%;
          width: 210px;
          height: 210px;
          background: rgba(205, 148, 43, 0.1);
        }

        .world-svg {
          position: absolute;
          inset: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          padding: 22px 18px 8px;
          overflow: visible;
        }

        .world-continents {
          opacity: 0.94;
        }

        .world-continents path {
          transition:
            opacity 0.3s ease,
            filter 0.3s ease;
        }

        .world-continents path:hover {
          opacity: 1;
          filter: brightness(1.18);
        }

        .route-path {
          stroke-width: 3;
          stroke-dasharray: 9 11;
          animation: routeFlow 2.5s linear infinite;
        }

        .route-main {
          stroke-width: 4;
          opacity: 1;
        }

        .route-secondary {
          opacity: 0.7;
        }

        .city-rings circle {
          opacity: 0.5;
          transform-box: fill-box;
          transform-origin: center;
          animation: cityRing 2.4s ease-out infinite;
        }

        .city-rings circle:nth-child(2) {
          animation-delay: 0.25s;
        }

        .city-rings circle:nth-child(3) {
          animation-delay: 0.5s;
        }

        .city-rings circle:nth-child(4) {
          animation-delay: 0.75s;
        }

        .city-rings circle:nth-child(5) {
          animation-delay: 1s;
        }

        .city-label {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 124px;
          padding: 9px 11px;
          border: 1px solid rgba(221, 170, 73, 0.28);
          border-radius: 11px;
          background: rgba(3, 11, 22, 0.9);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(13px);
          transform: translate(-50%, -50%);
        }

        .city-flag {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          font-size: 18px;
        }

        .city-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .city-text strong {
          overflow: hidden;
          color: #f4efe6;
          font-size: 11px;
          font-weight: 720;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .city-text small {
          margin-top: 2px;
          color: #8995a7;
          font-size: 9px;
        }

        .city-paris {
          top: 24%;
          left: 50%;
        }

        .city-brazzaville {
          top: 64%;
          left: 53%;
        }

        .city-kinshasa {
          top: 68%;
          left: 58%;
        }

        .city-douala {
          top: 58%;
          left: 49%;
        }

        .city-abidjan {
          top: 53%;
          left: 42%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          min-width: 0;
          min-height: 126px;
          padding: 16px;
          border: 1px solid rgba(124, 148, 180, 0.16);
          border-radius: 16px;
          background: linear-gradient(
            145deg,
            rgba(10, 24, 42, 0.94),
            rgba(4, 13, 25, 0.96)
          );
          box-shadow: 0 15px 38px rgba(0, 0, 0, 0.16);
        }

        .stat-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 15px;
          color: #9ba7b9;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .stat-icon {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 29px;
          height: 29px;
          border: 1px solid rgba(222, 169, 68, 0.26);
          border-radius: 9px;
          color: #dba846;
          background: rgba(218, 164, 64, 0.06);
        }

        .stat-icon svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .stat-card strong {
          display: block;
          overflow: hidden;
          color: #f5f0e7;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 1.7vw, 28px);
          font-weight: 500;
          line-height: 1.05;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .stat-card small {
          display: block;
          margin-top: 7px;
          color: #788597;
          font-size: 11px;
        }

        .brand-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 72px;
          padding: 12px 20px;
          border: 1px solid rgba(217, 164, 65, 0.13);
          border-radius: 16px;
          background: rgba(6, 16, 29, 0.72);
        }

        .brand-monogram {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(225, 174, 77, 0.42);
          border-radius: 50%;
          color: #e2ae4d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          box-shadow: 0 0 22px rgba(217, 163, 64, 0.08);
        }

        .brand-note p {
          display: flex;
          flex-direction: column;
          margin: 0;
        }

        .brand-note strong {
          color: #e2ad4a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          letter-spacing: 0.18em;
        }

        .brand-note p span {
          margin-top: 3px;
          color: #7f8a9b;
          font-size: 10px;
        }

        @keyframes routeFlow {
          to {
            stroke-dashoffset: -40;
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

        @keyframes cityRing {
          0% {
            opacity: 0.65;
            transform: scale(0.65);
          }

          100% {
            opacity: 0;
            transform: scale(1.65);
          }
        }

        @media (max-width: 1320px) {
          .history-layout {
            grid-template-columns:
              minmax(390px, 0.9fr)
              minmax(560px, 1.25fr);
          }

          .world-map {
            min-height: 475px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1050px) {
          .history-page {
            overflow: visible;
            padding: 24px;
          }

          .history-layout {
            grid-template-columns: 1fr;
          }

          .history-right {
            margin-top: 10px;
          }

          .world-map {
            min-height: 520px;
          }
        }

        @media (max-width: 700px) {
          .history-page {
            padding: 18px 14px;
          }

          .page-header h1 {
            font-size: 48px;
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
            grid-template-columns: 48px minmax(0, 1fr) 20px;
            min-height: 124px;
            padding: 15px 13px 15px 19px;
          }

          .transaction-icon {
            width: 46px;
            height: 46px;
          }

          .transaction-value {
            grid-column: 2 / 3;
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .details-button {
            grid-column: 3;
            grid-row: 1 / span 2;
          }

          .map-header {
            align-items: flex-start;
            padding: 20px;
          }

          .map-header h2 {
            font-size: 23px;
          }

          .world-map {
            min-height: 430px;
          }

          .world-svg {
            padding: 24px 0 6px;
            transform: scale(1.08);
          }

          .city-label {
            min-width: 0;
            padding: 7px;
          }

          .city-text {
            display: none;
          }

          .city-flag {
            width: 29px;
            height: 29px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 430px) {
          .world-map {
            min-height: 390px;
          }

          .live-status span:last-child {
            display: none;
          }

          .live-status {
            width: 34px;
            padding: 0;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            min-height: 110px;
          }

          .brand-note p span {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .live-dot,
          .route-path,
          .city-rings circle {
            animation: none;
          }

          .transaction-card {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
