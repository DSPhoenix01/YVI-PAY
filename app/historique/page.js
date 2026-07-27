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
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
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
  const icons = {
    calendar: (
      <>
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 3v5" />
        <path d="M16 3v5" />
        <path d="M4 10h16" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7h14a2 2 0 0 1 2 2v9H6a2 2 0 0 1-2-2Z" />
        <path d="M4 7 15 4a2 2 0 0 1 2 2v1" />
        <path d="M15 12h5v4h-5a2 2 0 0 1 0-4Z" />
      </>
    ),
    speed: (
      <>
        <path d="M5 18a8 8 0 1 1 14 0" />
        <path d="m12 14 4-4" />
        <circle cx="12" cy="14" r="1" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a13 13 0 0 1 0 16" />
        <path d="M12 4a13 13 0 0 0 0 16" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type] || icons.globe}
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
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="history-shell">
        <section className="left-panel">
          <header className="page-heading">
            <p className="eyebrow">YVI PAY — ACTIVITÉ</p>
            <h1>Historique</h1>
            <p className="subtitle">
              Retrouvez tous vos transferts en un seul endroit.
            </p>
          </header>

          <div className="tools-row">
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
                className={`filter-button ${showFilters ? "active" : ""}`}
                onClick={() => setShowFilters((current) => !current)}
              >
                <FilterIcon />
                Filtrer
                <span>⌄</span>
              </button>

              {showFilters && (
                <div className="filter-menu">
                  {[
                    ["all", "Toutes les opérations"],
                    ["sent", "Transferts envoyés"],
                    ["received", "Transferts reçus"],
                    ["pending", "En cours"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={filter === value ? "selected" : ""}
                      onClick={() => {
                        setFilter(value);
                        setShowFilters(false);
                      }}
                    >
                      {label}
                      {filter === value ? "✓" : ""}
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
                <p>
                  Essaie une autre ville, un autre montant ou un autre
                  filtre.
                </p>
              </div>
            )}
          </div>
        </section>

        <aside className="right-panel">
          <section className="map-card">
            <header className="map-header">
              <div>
                <p className="map-eyebrow">
                  RÉSEAU INTERNATIONAL
                </p>

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
                aria-label="Carte mondiale des transferts YVI PAY"
              >
                <defs>
                  <linearGradient
                    id="continentFillV3"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#244365" />
                    <stop offset="55%" stopColor="#152b47" />
                    <stop offset="100%" stopColor="#0a172b" />
                  </linearGradient>

                  <linearGradient
                    id="goldRouteV3"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#fff1ae" />
                    <stop offset="45%" stopColor="#f0bd54" />
                    <stop offset="100%" stopColor="#a66717" />
                  </linearGradient>

                  <filter id="goldGlowV3">
                    <feGaussianBlur
                      stdDeviation="4"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="pointGlowV3">
                    <feGaussianBlur
                      stdDeviation="7"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g className="world-continents">
                  <path
                    d="
                      M52 130
                      L82 91
                      L126 66
                      L176 58
                      L222 74
                      L263 101
                      L286 132
                      L272 157
                      L238 166
                      L219 195
                      L181 211
                      L145 203
                      L110 219
                      L76 194
                      L47 162
                      Z
                    "
                  />

                  <path
                    d="
                      M194 214
                      L224 222
                      L247 247
                      L237 266
                      L207 255
                      L187 233
                      Z
                    "
                  />

                  <path
                    d="
                      M239 263
                      L278 278
                      L305 311
                      L313 351
                      L302 393
                      L282 438
                      L254 479
                      L229 453
                      L216 410
                      L194 367
                      L196 321
                      Z
                    "
                  />

                  <path
                    d="
                      M242 54
                      L280 34
                      L316 43
                      L326 70
                      L305 92
                      L269 99
                      L246 81
                      Z
                    "
                  />

                  <path
                    d="
                      M439 135
                      L456 112
                      L480 96
                      L505 97
                      L521 110
                      L543 102
                      L564 116
                      L554 133
                      L531 140
                      L515 154
                      L490 151
                      L474 163
                      L451 151
                      Z
                    "
                  />

                  <path
                    d="
                      M467 166
                      L505 153
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
                      M547 104
                      L585 78
                      L631 70
                      L669 84
                      L707 75
                      L750 87
                      L792 78
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
                      M775 230
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

                <g className="transfer-routes">
                  <path
                    className="route-path route-one"
                    d="M500 135 C530 185 535 242 520 304"
                  />

                  <path
                    className="route-path route-two"
                    d="M500 135 C552 188 573 247 548 318"
                  />

                  <path
                    className="route-path route-three"
                    d="M500 135 C513 194 501 244 488 283"
                  />

                  <path
                    className="route-path route-four"
                    d="M500 135 C463 181 451 223 445 259"
                  />
                </g>

                <g className="moving-particles">
                  <circle r="4">
                    <animateMotion
                      dur="3.4s"
                      repeatCount="indefinite"
                      path="M500 135 C530 185 535 242 520 304"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M500 135 C552 188 573 247 548 318"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="4.6s"
                      repeatCount="indefinite"
                      path="M500 135 C513 194 501 244 488 283"
                    />
                  </circle>

                  <circle r="4">
                    <animateMotion
                      dur="5.1s"
                      repeatCount="indefinite"
                      path="M500 135 C463 181 451 223 445 259"
                    />
                  </circle>
                </g>

                <g className="city-points">
                  <circle cx="500" cy="135" r="7" />
                  <circle cx="520" cy="304" r="6" />
                  <circle cx="548" cy="318" r="6" />
                  <circle cx="488" cy="283" r="6" />
                  <circle cx="445" cy="259" r="6" />
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

        .history-page {
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

        .history-shell {
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
          width: 190px;
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
            rgba(10, 25, 43, 0.94),
            rgba(5, 15, 28, 0.94)
          );
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
                .visual-panel {
          position: relative;
          min-height: 100%;
          overflow: hidden;
          padding: 30px;
          border: 1px solid rgba(129, 151, 183, 0.17);
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(33, 83, 126, 0.22),
              transparent 34%
            ),
            linear-gradient(
              155deg,
              rgba(8, 22, 39, 0.97),
              rgba(3, 11, 22, 0.99)
            );
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .visual-panel::before {
          content: "";
          position: absolute;
          top: -160px;
          right: -130px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: rgba(199, 142, 41, 0.08);
          filter: blur(55px);
          pointer-events: none;
        }

        .visual-panel::after {
          content: "";
          position: absolute;
          bottom: -180px;
          left: -140px;
          width: 370px;
          height: 370px;
          border-radius: 50%;
          background: rgba(28, 111, 175, 0.1);
          filter: blur(65px);
          pointer-events: none;
        }

        .visual-header {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .visual-eyebrow {
          margin: 0 0 8px;
          color: #c99436;
          font-size: 10px;
          font-weight: 760;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .visual-header h2 {
          margin: 0;
          color: #f4f0e8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(24px, 2.2vw, 34px);
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 30px;
          padding: 0 12px;
          border: 1px solid rgba(51, 214, 119, 0.24);
          border-radius: 999px;
          color: #46dc83;
          background: rgba(34, 181, 96, 0.08);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #3cdf7d;
          box-shadow: 0 0 13px rgba(60, 223, 125, 0.9);
          animation: livePulse 1.8s ease-in-out infinite;
        }

        .map-shell,
        .world-map-shell {
          position: relative;
          z-index: 3;
          display: grid;
          place-items: center;
          min-height: 470px;
          margin-top: 18px;
        }

        .map-glow {
          position: absolute;
          top: 48%;
          left: 50%;
          width: 82%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(33, 108, 166, 0.12),
            rgba(19, 71, 112, 0.035) 44%,
            transparent 70%
          );
          filter: blur(3px);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .world-map,
        .map-svg {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          overflow: visible;
          filter: drop-shadow(0 18px 38px rgba(0, 0, 0, 0.22));
        }

        .map-continent,
        .continent {
          fill: rgba(44, 76, 108, 0.22);
          stroke: rgba(102, 139, 172, 0.32);
          stroke-width: 1;
          transition: 0.3s ease;
        }

        .map-continent:hover,
        .continent:hover {
          fill: rgba(55, 93, 128, 0.31);
          stroke: rgba(206, 161, 76, 0.45);
        }

        .map-grid,
        .grid-line {
          fill: none;
          stroke: rgba(111, 139, 169, 0.1);
          stroke-width: 0.75;
          stroke-dasharray: 3 7;
        }

        .route-line,
        .map-route {
          fill: none;
          stroke: url(#routeGold);
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-dasharray: 5 7;
          opacity: 0.7;
          filter: drop-shadow(0 0 5px rgba(224, 170, 69, 0.5));
          animation: routeFlow 9s linear infinite;
        }

        .route-line.secondary,
        .map-route.secondary {
          stroke-width: 1.15;
          opacity: 0.44;
          animation-duration: 12s;
        }

        .route-halo {
          fill: none;
          stroke: rgba(231, 179, 79, 0.12);
          stroke-width: 5;
          stroke-linecap: round;
          filter: blur(2px);
        }

        .city-point,
        .location-point {
          fill: #e2ae4c;
          stroke: rgba(255, 233, 181, 0.86);
          stroke-width: 1.2;
          filter: drop-shadow(0 0 6px rgba(228, 174, 73, 0.95));
        }

        .city-ring,
        .location-ring {
          fill: none;
          stroke: rgba(226, 174, 76, 0.55);
          stroke-width: 1;
          transform-box: fill-box;
          transform-origin: center;
          animation: mapPulse 2.4s ease-out infinite;
        }

        .map-particle,
        .route-particle {
          fill: #ffe3a0;
          filter: drop-shadow(0 0 5px rgba(255, 210, 117, 0.95));
        }

        .city-label,
        .map-label {
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 30px;
          padding: 0 10px;
          border: 1px solid rgba(161, 180, 204, 0.17);
          border-radius: 9px;
          color: #dce2eb;
          background: rgba(4, 14, 27, 0.88);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(10px);
          font-size: 10px;
          font-weight: 650;
          white-space: nowrap;
        }

        .city-label span,
        .map-label span {
          font-size: 14px;
        }

        .city-label.paris,
        .map-label.paris {
          top: 25%;
          left: 45%;
        }

        .city-label.brazzaville,
        .map-label.brazzaville {
          top: 62%;
          left: 51%;
        }

        .city-label.kinshasa,
        .map-label.kinshasa {
          top: 70%;
          left: 57%;
        }

        .city-label.douala,
        .map-label.douala {
          top: 52%;
          left: 42%;
        }

        .city-label.abidjan,
        .map-label.abidjan {
          top: 58%;
          left: 27%;
        }

        .visual-stats,
        .map-stats {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 4px;
        }

        .stat-card,
        .map-stat {
          min-height: 92px;
          padding: 15px;
          border: 1px solid rgba(130, 154, 186, 0.16);
          border-radius: 15px;
          background: rgba(5, 16, 29, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.018);
        }

        .stat-icon {
          display: grid;
          place-items: center;
          width: 28px;
          height: 28px;
          margin-bottom: 10px;
          border: 1px solid rgba(220, 168, 67, 0.28);
          border-radius: 9px;
          color: #daa744;
          background: rgba(209, 153, 51, 0.07);
        }

        .stat-icon svg {
          width: 15px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .stat-card small,
        .map-stat small {
          display: block;
          margin-bottom: 5px;
          color: #778397;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .stat-card strong,
        .map-stat strong {
          display: block;
          color: #eef0f3;
          font-size: 14px;
          font-weight: 680;
        }

        .visual-signature,
        .yvi-signature {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 22px;
          color: #d6a648;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 12px;
          letter-spacing: 0.3em;
        }

        .visual-signature::before,
        .visual-signature::after,
        .yvi-signature::before,
        .yvi-signature::after {
          content: "";
          width: 52px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(214, 166, 72, 0.55)
          );
        }

        .visual-signature::after,
        .yvi-signature::after {
          background: linear-gradient(
            90deg,
            rgba(214, 166, 72, 0.55),
            transparent
          );
        }

        @keyframes livePulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.42;
            transform: scale(0.72);
          }
        }

        @keyframes routeFlow {
          to {
            stroke-dashoffset: -120;
          }
        }

        @keyframes mapPulse {
          0% {
            opacity: 0.85;
            transform: scale(0.5);
          }

          75%,
          100% {
            opacity: 0;
            transform: scale(2.4);
          }
        }

        @media (max-width: 1180px) {
          .history-layout,
          .activity-layout {
            grid-template-columns: 1fr;
          }

          .visual-panel {
            min-height: auto;
          }

          .map-shell,
          .world-map-shell {
            min-height: 430px;
          }
        }

        @media (max-width: 760px) {
          .history-page,
          .activity-page {
            padding: 22px 14px 40px;
          }

          .page-header,
          .activity-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .history-toolbar,
          .activity-toolbar {
            width: 100%;
          }

          .search-box {
            flex: 1;
          }

          .transaction-card {
            grid-template-columns: 48px minmax(0, 1fr) 22px;
            min-height: 104px;
            padding: 15px 12px 15px 18px;
          }

          .transaction-icon {
            width: 45px;
            height: 45px;
          }

          .transaction-value {
            grid-column: 2 / 3;
            align-items: flex-start;
            gap: 5px;
          }

          .details-button {
            grid-column: 3;
            grid-row: 1 / span 2;
          }

          .visual-panel {
            padding: 22px 14px;
            border-radius: 20px;
          }

          .map-shell,
          .world-map-shell {
            min-height: 370px;
          }

          .visual-stats,
          .map-stats {
            grid-template-columns: 1fr;
          }

          .city-label,
          .map-label {
            padding: 0 7px;
            font-size: 8px;
          }
        }

        @media (max-width: 480px) {
          .history-toolbar,
          .activity-toolbar {
            flex-direction: column;
          }

          .filter-wrapper,
          .filter-button {
            width: 100%;
          }

          .filter-menu {
            left: 0;
            right: auto;
            width: 100%;
          }

          .transaction-route {
            font-size: 11px;
          }

          .transaction-value strong {
            font-size: 15px;
          }

          .visual-header {
            flex-direction: column;
          }

          .map-shell,
          .world-map-shell {
            min-height: 320px;
          }

          .city-label.kinshasa,
          .map-label.kinshasa {
            top: 72%;
            left: 52%;
          }

          .visual-signature,
          .yvi-signature {
            letter-spacing: 0.18em;
          }
        }
              `}</style>
    </main>
  );
}
