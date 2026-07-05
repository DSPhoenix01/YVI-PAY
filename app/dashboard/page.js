"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="page">
      <style>{css}</style>

      <section className="app">
        <Hero />
        <Welcome />
        <Balance />
        <Actions />
        <CardBlock />
        <Network />
        <CloseOnes />
        <Transfers />
        <BottomNav />
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img src="/yvi-hero-dashboard.png" alt="YVI PAY globe" className="heroImage" />

      <div className="heroTop">
        <div className="brand">YVI PAY</div>
        <div className="icons">
          <span>🔔</span>
          <span>◎</span>
        </div>
      </div>

      <div className="slogan">
        <p>Votre argent.</p>
        <p>Vos proches.</p>
        <p className="gold">Sans frontières.</p>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="panel welcome">
      <div>
        <h1>Bonjour Nathalie 💗</h1>
        <p>Heureux de vous revoir.</p>
      </div>
      <div className="weather">
        <p>Mercredi 14 Mai</p>
        <strong>☀️ 16°C</strong>
      </div>
    </section>
  );
}

function Balance() {
  return (
    <section className="balance">
      <div>
        <p className="label">Solde disponible ◎</p>
        <h2>3 250,00 €</h2>
        <p className="positive">+120,00 € ce mois-ci ↗</p>
      </div>

      <svg className="chart" viewBox="0 0 180 70">
        <path
          d="M5 55 C25 42, 40 45, 55 34 S80 42, 95 25 S120 35, 135 22 S155 34, 175 8"
          fill="none"
          stroke="#f4c85d"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="175" cy="8" r="5" fill="#fff4c8" />
      </svg>
    </section>
  );
}

function Actions() {
  return (
    <section className="actions">
      <Link href="/envoyer" className="goldButton">✈ Envoyer</Link>
      <Link href="/beneficiaires" className="darkButton">👥 Vos proches</Link>
      <Link href="/beneficiaires" className="darkButton">＋ Ajouter</Link>
    </section>
  );
}

function CardBlock() {
  return (
    <section className="panel">
      <h3>Ma carte YVI PAY</h3>
      <div className="cardFrame">
        <img src="/yvi-card.png" alt="Carte YVI PAY" />
      </div>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section className="panel">
      <h3>Réseau actif</h3>
     <Country flag="🇨🇬" name="Congo-Brazzaville" />
<Country flag="🇨🇩" name="RDC" />
<Country flag="🇨🇲" name="Cameroun" />
<Country flag="🇨🇮" name="Côte d’Ivoire" />
    </section>
  );
}

function Country({ flag, name }) {
  return (
    <div className="country">
      <img src={flag} alt={name} style={{ width: "26px", borderRadius: "4px" }} />
      <span>{name}</span>
      <span className="greenDot"></span>
    </div>
  );
}

function CloseOnes() {
  return (
    <section className="panel">
      <div className="sectionHeader">
        <h3>Vos proches</h3>
        <Link href="/beneficiaires">Voir tout ›</Link>
      </div>

      <div className="people">
        <Person emoji="👨🏾" name="Papa" status="Reçu il y a 2 min" color="#56e58b" />
        <Person emoji="👩🏾" name="Maman" status="Merci 💗" color="#56e58b" />
        <Person emoji="👦🏾" name="Petit frère" status="En attente" color="#f4c85d" />
        <Person emoji="👩🏾" name="Tante" status="Vu il y a 1 h" color="#4fa3ff" />
      </div>
    </section>
  );
}

function Person({ emoji, name, status, color }) {
  return (
    <div className="person">
      <div className="avatar">
        {emoji}
        <span className="statusDot" style={{ background: color }}></span>
      </div>
      <div>
        <strong>{name}</strong>
        <p>{status}</p>
      </div>
    </div>
  );
}

function Transfers() {
  return (
    <section className="panel">
      <div className="sectionHeader">
        <h3>Derniers transferts</h3>
        <Link href="/historique">Voir tout ›</Link>
      </div>

      <Transfer city="Kinshasa, RDC" to="Maman" amount="-250,00 €" date="Aujourd’hui" />
      <Transfer city="Brazzaville, Congo" to="Papa" amount="-120,00 €" date="Hier" />
      <Transfer city="Paris, France" to="Vous" amount="+900,00 €" date="10 Mai" positive />
    </section>
  );
}

function Transfer({ city, to, amount, date, positive }) {
  return (
    <div className="transfer">
      <div className="transferLeft">
        <span className="transferIcon">{positive ? "↓" : "↗"}</span>
        <div>
          <strong>{city}</strong>
          <p>{to}</p>
        </div>
      </div>
      <div className="right">
        <strong className={positive ? "positiveText" : ""}>{amount}</strong>
        <p>{date}</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="nav">
      <Link href="/dashboard" className="active">⌂<br />Accueil</Link>
      <Link href="/envoyer">✈<br />Envoyer</Link>
      <Link href="/beneficiaires">👥<br />Vos proches</Link>
      <Link href="/historique">⌁<br />Activité</Link>
      <Link href="/profil">◎<br />Profil</Link>
    </nav>
  );
}

const css = `
.page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top,#09234f 0%,#020918 48%,#00040d 100%);
  color: white;
}

.app {
  width: 100%;
  max-width: 430px;
  padding: 0 16px 110px;
}

.hero {
  position: relative;
  height: 355px;
  overflow: hidden;
  margin: 0 -16px 18px;
  padding: 30px 22px;
  background: #020918;
}

.heroImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(2,9,24,.05), rgba(2,9,24,.15), #020918 96%);
  z-index: 2;
}

.heroTop {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  color: #f4c85d;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 7px;
}

.icons {
  display: flex;
  gap: 18px;
  color: #f4c85d;
  font-size: 24px;
}

.slogan {
  position: relative;
  z-index: 3;
  text-align: center;
  margin-top: 46px;
}

.slogan p {
  margin: 0;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 700;
}

.gold, .label, h3, .sectionHeader a {
  color: #f4c85d;
}

.panel, .balance {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  margin-bottom: 14px;
}

.welcome {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  align-items: center;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 20px 55px rgba(0,0,0,.35);
}

.welcome h1 {
  margin: 0;
  font-size: 25px;
}

.welcome p,
.weather p,
.person p,
.transfer p {
  margin: 6px 0 0;
  color: #cfd7e8;
  font-size: 13px;
}

.weather {
  border-left: 1px solid rgba(255,255,255,.25);
  padding-left: 18px;
}

.balance {
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 12px;
  align-items: center;
  background: rgba(255,255,255,.075);
}

.balance h2 {
  margin: 12px 0;
  font-size: 42px;
  letter-spacing: -2px;
}

.positive,
.positiveText {
  color: #37d978;
  font-weight: 900;
}

.chart {
  width: 100%;
  height: 70px;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}

.goldButton,
.darkButton {
  padding: 18px 8px;
  border-radius: 18px;
  font-weight: 900;
  text-align: center;
}

.goldButton {
  background: linear-gradient(180deg,#ffd36c,#c88c22);
  color: #120c02;
}

.darkButton {
  background: rgba(255,255,255,.07);
  color: white;
  border: 1px solid rgba(255,255,255,.12);
}

.cardFrame {
  margin-top: 10px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(244,200,93,.28);
  background: #020918;
}

.cardFrame img {
  width: 100%;
  display: block;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 12px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255,255,255,.25);
}

.dot.active {
  background: #f4c85d;
}

.country {
  display: grid;
  grid-template-columns: 34px 1fr auto;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.greenDot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #37d978;
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h3 {
  margin: 0;
  font-size: 18px;
}

.people {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.person {
  display: grid;
  grid-template-columns: 45px 1fr;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
}

.avatar {
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(244,200,93,.16);
  font-size: 24px;
}

.statusDot {
  position: absolute;
  right: 0;
  bottom: 2px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid #020918;
}

.transfer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.transferLeft {
  display: flex;
  gap: 12px;
  align-items: center;
}

.transferIcon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.08);
}

.right {
  text-align: right;
}

.nav {
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: min(410px,92vw);
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 4px;
  padding: 12px;
  border-radius: 22px;
  background: rgba(5,14,31,.96);
  border: 1px solid rgba(255,255,255,.12);
  z-index: 10;
}

.nav a {
  text-align: center;
  color: #aeb8cc;
  font-size: 11px;
  line-height: 1.4;
}

.nav a.active {
  color: #f4c85d;
  font-weight: 900;
}
`;
