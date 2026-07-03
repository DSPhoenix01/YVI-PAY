"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={app}>
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
    <section style={hero}>
      <div style={topBar}>
        <div>
          <div style={brand}>YVI PAY</div>
          <div style={privateText}>PRIVATE</div>
        </div>
        <div style={topIcons}>
          <span>🔔</span>
          <span>◎</span>
        </div>
      </div>

      <div style={sloganBox}>
        <p style={sloganWhite}>Votre argent.</p>
        <p style={sloganWhite}>Vos proches.</p>
        <p style={sloganGold}>Sans frontières.</p>
      </div>

      <svg style={globeSvg} viewBox="0 0 430 260">
        <defs>
          <radialGradient id="earthGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#123c75" stopOpacity=".65" />
            <stop offset="70%" stopColor="#071735" stopOpacity=".75" />
            <stop offset="100%" stopColor="#020918" stopOpacity="1" />
          </radialGradient>
        </defs>

        <circle cx="215" cy="255" r="210" fill="url(#earthGlow)" />
        <circle cx="215" cy="255" r="210" fill="none" stroke="rgba(80,160,255,.55)" strokeWidth="2" />
        <path d="M28 215 C100 130, 185 150, 245 108" fill="none" stroke="#f4c85d" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M75 225 C155 120, 270 120, 385 68" fill="none" stroke="#f4c85d" strokeWidth="2" opacity=".9" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,600;600,0" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M115 230 C175 160, 255 165, 360 120" fill="none" stroke="#f4c85d" strokeWidth="1.5" opacity=".75" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="6s" repeatCount="indefinite" />
        </path>

        <circle cx="75" cy="225" r="5" fill="#f4c85d" />
        <circle cx="245" cy="108" r="5" fill="#f4c85d" />
        <circle cx="360" cy="120" r="5" fill="#f4c85d" />
        <circle cx="385" cy="68" r="5" fill="#f4c85d" />
      </svg>
    </section>
  );
}

function Welcome() {
  return (
    <section style={welcome}>
      <div>
        <h1 style={welcomeTitle}>Bonjour Nathalie ❤️</h1>
        <p style={muted}>Heureux de vous revoir.</p>
      </div>
      <div style={weather}>
        <p style={muted}>Mercredi 14 Mai</p>
        <strong>☀️ 16°C</strong>
      </div>
    </section>
  );
}

function Balance() {
  return (
    <section style={balance}>
      <div>
        <p style={goldLabel}>Solde disponible 👁</p>
        <h2 style={amount}>3 250,00 €</h2>
        <p style={positive}>+120,00 € ce mois-ci ↗</p>
      </div>
      <svg style={miniChart} viewBox="0 0 180 70">
        <path d="M5 55 C25 42, 40 45, 55 34 S80 42, 95 25 S120 35, 135 22 S155 34, 175 8" fill="none" stroke="#f4c85d" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2.8s" repeatCount="indefinite" />
        </path>
        <circle cx="175" cy="8" r="5" fill="#fff4c8" />
      </svg>
    </section>
  );
}

function Actions() {
  return (
    <section style={actions}>
      <Link href="/envoyer" style={goldButton}>➤ Envoyer</Link>
      <Link href="/beneficiaires" style={darkButton}>👥 Vos proches</Link>
      <Link href="/beneficiaires" style={darkButton}>＋ Ajouter</Link>
    </section>
  );
}

function CardBlock() {
  return (
    <section style={twoCols}>
      <div style={cardPanel}>
        <h3 style={sectionTitle}>Ma carte YVI PAY</h3>
        <div style={cardFrame}>
          <img src="/yvi-card.png" alt="Carte YVI PAY" style={cardImage} />
        </div>
        <div style={dots}>
          <span style={dotActive}></span>
          <span style={dot}></span>
          <span style={dot}></span>
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section style={network}>
      <h3 style={sectionTitle}>Réseau actif</h3>
      <Country flag="🇨🇬" name="Congo-Brazzaville" />
      <Country flag="🇨🇩" name="RDC" />
      <Country flag="🇨🇲" name="Cameroun" />
      <Country flag="🇨🇮" name="Côte d’Ivoire" />
    </section>
  );
}

function Country({ flag, name }) {
  return (
    <div style={country}>
      <span>{flag}</span>
      <span>{name}</span>
      <span style={greenDot}></span>
    </div>
  );
}

function CloseOnes() {
  return (
    <section style={panel}>
      <div style={sectionHeader}>
        <h3 style={sectionTitle}>Vos proches</h3>
        <Link href="/beneficiaires" style={seeAll}>Voir tout ›</Link>
      </div>
      <div style={people}>
        <Person emoji="👨🏾" name="Papa" status="Reçu il y a 2 min" color="#56e58b" />
        <Person emoji="👩🏾" name="Maman" status="Merci ❤️" color="#56e58b" />
        <Person emoji="👦🏾" name="Petit frère" status="En attente" color="#f4c85d" />
        <Person emoji="👩🏾" name="Tante" status="Vu il y a 1 h" color="#4fa3ff" />
      </div>
    </section>
  );
}

function Person({ emoji, name, status, color }) {
  return (
    <div style={person}>
      <div style={avatar}>
        {emoji}
        <span style={{ ...statusDot, background: color }}></span>
      </div>
      <div>
        <strong>{name}</strong>
        <p style={smallMuted}>{status}</p>
      </div>
    </div>
  );
}

function Transfers() {
  return (
    <section style={panel}>
      <div style={sectionHeader}>
        <h3 style={sectionTitle}>Derniers transferts</h3>
        <Link href="/historique" style={seeAll}>Voir tout ›</Link>
      </div>
      <Transfer city="Kinshasa, RDC" to="Maman" amount="-250,00 €" date="Aujourd’hui" />
      <Transfer city="Brazzaville, Congo" to="Papa" amount="-120,00 €" date="Hier" />
      <Transfer city="Paris, France" to="Vous" amount="+900,00 €" date="10 Mai" positive />
    </section>
  );
}

function Transfer({ city, to, amount, date, positive }) {
  return (
    <div style={transfer}>
      <div style={transferLeft}>
        <span style={transferIcon}>{positive ? "↓" : "↗"}</span>
        <div>
          <strong>{city}</strong>
          <p style={smallMuted}>{to}</p>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <strong style={positive ? positiveAmount : null}>{amount}</strong>
        <p style={smallMuted}>{date}</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <nav style={nav}>
      <Link href="/dashboard" style={navActive}>⌂<br />Accueil</Link>
      <Link href="/envoyer" style={navItem}>➤<br />Envoyer</Link>
      <Link href="/beneficiaires" style={navItem}>👥<br />Vos proches</Link>
      <Link href="/historique" style={navItem}>⌁<br />Activité</Link>
      <Link href="/profil" style={navItem}>◎<br />Profil</Link>
    </nav>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#09234f 0%,#020918 48%,#00040d 100%)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
};

const app = {
  width: "100%",
  maxWidth: "430px",
  padding: "18px 16px 95px",
};

const hero = {
  position: "relative",
  height: "330px",
  overflow: "hidden",
  margin: "-18px -16px 14px",
  padding: "22px 18px",
  background: "linear-gradient(180deg,#071b3d 0%,#06142d 45%,#020918 100%)",
};

const topBar = {
  position: "relative",
  zIndex: 3,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const brand = {
  color: "#f4c85d",
  fontSize: "28px",
  fontWeight: 900,
  letterSpacing: "6px",
};

const privateText = {
  color: "#f4c85d",
  fontSize: "12px",
  letterSpacing: "7px",
  textAlign: "center",
  marginTop: "4px",
};

const topIcons = {
  display: "flex",
  gap: "22px",
  color: "#f4c85d",
  fontSize: "28px",
};

const sloganBox = {
  position: "relative",
  zIndex: 3,
  textAlign: "center",
  marginTop: "24px",
};

const sloganWhite = {
  fontSize: "28px",
  lineHeight: 1.05,
  margin: 0,
};

const sloganGold = {
  fontSize: "28px",
  lineHeight: 1.05,
  margin: 0,
  color: "#f4c85d",
};

const globeSvg = {
  position: "absolute",
  left: "-10%",
  bottom: "-38px",
  width: "120%",
  height: "245px",
};

const welcome = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "18px",
  alignItems: "center",
  padding: "18px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.12)",
  boxShadow: "0 20px 55px rgba(0,0,0,.35)",
  marginBottom: "14px",
};

const welcomeTitle = {
  margin: 0,
  fontSize: "26px",
  letterSpacing: "-.5px",
};

const muted = {
  margin: "6px 0 0",
  color: "#cfd7e8",
};

const weather = {
  borderLeft: "1px solid rgba(255,255,255,.25)",
  paddingLeft: "18px",
};

const balance = {
  display: "grid",
  gridTemplateColumns: "1fr 160px",
  gap: "12px",
  alignItems: "center",
  padding: "22px",
  borderRadius: "24px",
  background: "rgba(255,255,255,.075)",
  border: "1px solid rgba(255,255,255,.10)",
  marginBottom: "14px",
};

const goldLabel = {
  margin: 0,
  color: "#f4c85d",
  fontWeight: 900,
};

const amount = {
  margin: "12px 0",
  fontSize: "45px",
  letterSpacing: "-2px",
};

const positive = {
  margin: 0,
  color: "#37d978",
  fontWeight: 900,
  fontSize: "17px",
};

const miniChart = {
  width: "100%",
  height: "70px",
};

const actions = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "10px",
  marginBottom: "14px",
};

const goldButton = {
  padding: "18px 8px",
  borderRadius: "18px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#120c02",
  fontWeight: 900,
  textDecoration: "none",
  textAlign: "center",
};

const darkButton = {
  padding: "18px 8px",
  borderRadius: "18px",
  background: "rgba(255,255,255,.07)",
  color: "#fff",
  fontWeight: 900,
  textDecoration: "none",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,.12)",
};

const twoCols = {
  marginBottom: "14px",
};

const cardPanel = {
  padding: "16px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.10)",
};

const cardFrame = {
  borderRadius: "18px",
  overflow: "hidden",
  border: "1px solid rgba(244,200,93,.28)",
  background: "#020918",
};

const cardImage = {
  width: "100%",
  display: "block",
};

const dots = {
  display: "flex",
  justifyContent: "center",
  gap: "9px",
  marginTop: "12px",
};

const dotActive = {
  width: "9px",
  height: "9px",
  borderRadius: "50%",
  background: "#f4c85d",
};

const dot = {
  width: "9px",
  height: "9px",
  borderRadius: "50%",
  background: "rgba(255,255,255,.25)",
};

const network = {
  padding: "18px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.10)",
  marginBottom: "14px",
};

const country = {
  display: "grid",
  gridTemplateColumns: "34px 1fr auto",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid rgba(255,255,255,.08)",
};

const greenDot = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  background: "#37d978",
};

const panel = {
  padding: "18px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.10)",
  marginBottom: "14px",
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px",
};

const sectionTitle = {
  margin: 0,
  color: "#f4c85d",
  fontSize: "18px",
};

const seeAll = {
  color: "#f4c85d",
  textDecoration: "none",
  fontWeight: 800,
};

const people = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const person = {
  display: "grid",
  gridTemplateColumns: "45px 1fr",
  gap: "10px",
  alignItems: "center",
  padding: "10px",
  borderRadius: "16px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
};

const avatar = {
  position: "relative",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  background: "rgba(244,200,93,.16)",
  fontSize: "24px",
};

const statusDot = {
  position: "absolute",
  right: "0",
  bottom: "2px",
  width: "11px",
  height: "11px",
  borderRadius: "50%",
  border: "2px solid #020918",
};

const smallMuted = {
  margin: "3px 0 0",
  color: "#aeb8cc",
  fontSize: "12px",
};

const transfer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0",
  borderBottom: "1px solid rgba(255,255,255,.08)",
};

const transferLeft = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

const transferIcon = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  background: "rgba(255,255,255,.08)",
};

const positiveAmount = {
  color: "#37d978",
};

const nav = {
  position: "fixed",
  bottom: "12px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "min(410px,92vw)",
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "4px",
  padding: "12px",
  borderRadius: "22px",
  background: "rgba(5,14,31,.96)",
  border: "1px solid rgba(255,255,255,.12)",
  zIndex: 10,
};

const navItem = {
  textAlign: "center",
  color: "#aeb8cc",
  textDecoration: "none",
  fontSize: "11px",
  lineHeight: 1.4,
};

const navActive = {
  ...navItem,
  color: "#f4c85d",
  fontWeight: 900,
};
