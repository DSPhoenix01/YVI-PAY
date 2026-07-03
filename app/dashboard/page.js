"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={phone}>
        <Hero />

        <Balance />

        <section style={actions}>
          <Link href="/envoyer" style={goldButton}>Envoyer</Link>
          <Link href="/beneficiaires" style={darkButton}>Vos proches</Link>
          <Link href="/beneficiaires" style={darkButton}>Ajouter</Link>
        </section>

        <YviCard />

        <CloseOnes />

        <Network />

        <Activity />

        <nav style={nav}>
          <Link href="/dashboard" style={navActive}>Accueil</Link>
          <Link href="/envoyer" style={navItem}>Envoyer</Link>
          <Link href="/beneficiaires" style={navItem}>Vos proches</Link>
          <Link href="/historique" style={navItem}>Activité</Link>
          <Link href="/profil" style={navItem}>Profil</Link>
        </nav>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section style={hero}>
      <div style={heroOverlay}></div>

      <div style={heroTop}>
        <div>
          <p style={privateLabel}>YVI PAY PRIVATE</p>
          <h1 style={heroTitle}>Bonjour Nathalie ❤️</h1>
          <p style={slogan}>Votre argent. Vos proches. Sans frontières.</p>
        </div>
        <div style={icons}>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>

      <svg style={globeSvg} viewBox="0 0 430 190">
        <circle cx="215" cy="170" r="165" fill="none" stroke="rgba(90,160,255,.55)" strokeWidth="2" />
        <circle cx="215" cy="170" r="125" fill="none" stroke="rgba(244,200,93,.18)" strokeWidth="1" />
        <path d="M80 150 C150 80, 250 95, 350 45" fill="none" stroke="#f4c85d" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M95 155 C175 110, 235 130, 335 95" fill="none" stroke="#f4c85d" strokeWidth="1.5" opacity=".75" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,400;400,0" dur="4s" repeatCount="indefinite" />
        </path>
        <circle cx="110" cy="145" r="5" fill="#f4c85d" />
        <circle cx="335" cy="95" r="4" fill="#f4c85d" />
        <circle cx="350" cy="45" r="4" fill="#f4c85d" />
      </svg>
    </section>
  );
}

function Balance() {
  return (
    <section style={balanceCard}>
      <p style={goldText}>Solde principal</p>
      <h2 style={amount}>3 250,00 €</h2>
      <div style={balanceMeta}>
        <span style={positive}>+120,00 € ce mois-ci</span>
        <span style={pill}>↗ +8%</span>
      </div>

      <svg width="100%" height="55" viewBox="0 0 340 55">
        <path d="M5 42 C60 20, 95 45, 140 28 S220 10, 270 24 S315 18, 335 7" fill="none" stroke="#f4c85d" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="2.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </section>
  );
}

function YviCard() {
  return (
    <section style={bankCard}>
      <div style={goldGlow}></div>
      <div style={chip}></div>
      <div style={bigLogo}>Y</div>
      <div style={orbit}>✦</div>
      <div style={cardCurve}></div>
      <p style={cardName}>YVI PAY</p>
      <p style={cardHolder}>NATHALIE</p>
      <p style={cardNumber}>•••• 8842</p>
    </section>
  );
}

function CloseOnes() {
  return (
    <section style={panel}>
      <div style={sectionHead}>
        <h3 style={sectionTitle}>Vos proches</h3>
        <Link href="/beneficiaires" style={seeAll}>Voir tout</Link>
      </div>

      <div style={peopleGrid}>
        <Person emoji="👩🏾" name="Maman ❤️" status="Bien reçu" online />
        <Person emoji="👨🏾" name="Papa" status="Photo reçue" online />
        <Person emoji="👩🏾" name="Grâce" status="Vous écrit..." online />
        <Person emoji="👨🏾" name="Patrick" status="Il y a 15 min" />
      </div>
    </section>
  );
}

function Person({ emoji, name, status, online }) {
  return (
    <div style={person}>
      <div style={avatarBox}>
        {emoji}
        {online && <span style={onlineDot}></span>}
      </div>
      <strong style={personName}>{name}</strong>
      <span style={personStatus}>{status}</span>
    </div>
  );
}

function Network() {
  return (
    <section style={network}>
      <h3 style={sectionTitle}>Réseau YVI PAY</h3>
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
      <strong>{name}</strong>
      <span style={available}>Disponible</span>
    </div>
  );
}

function Activity() {
  return (
    <section style={panel}>
      <div style={sectionHead}>
        <h3 style={sectionTitle}>Activité récente</h3>
        <Link href="/historique" style={seeAll}>Voir tout</Link>
      </div>

      <ActivityRow icon="💸" title="Transfert à Maman ❤️" detail="Reçu avec succès" amount="250,00 €" />
      <ActivityRow icon="💬" title="Patrick" detail="Vous a envoyé un message" time="Il y a 15 min" />
      <ActivityRow icon="🎤" title="Papa" detail="Message vocal reçu" time="Il y a 1 h" />
    </section>
  );
}

function ActivityRow({ icon, title, detail, amount, time }) {
  return (
    <div style={activityRow}>
      <div style={activityLeft}>
        <div style={activityIcon}>{icon}</div>
        <div>
          <strong>{title}</strong>
          <p style={activityDetail}>{detail}</p>
        </div>
      </div>
      <strong>{amount || time}</strong>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#0b2149 0%,#020918 46%,#00040d 100%)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const phone = {
  width: "100%",
  maxWidth: "430px",
  paddingBottom: "95px",
};

const hero = {
  position: "relative",
  minHeight: "260px",
  borderRadius: "34px",
  padding: "22px",
  overflow: "hidden",
  background: "linear-gradient(rgba(2,9,24,.1),rgba(2,9,24,.75)), url('/yvi-pay-accueil.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "1px solid rgba(244,200,93,.35)",
  boxShadow: "0 30px 90px rgba(0,0,0,.55)",
  marginBottom: "18px",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at 70% 35%,rgba(244,200,93,.25),transparent 34%)",
};

const heroTop = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
};

const privateLabel = {
  color: "#f4c85d",
  fontWeight: 900,
  letterSpacing: "1px",
  margin: 0,
};

const heroTitle = {
  fontSize: "30px",
  margin: "8px 0 4px",
  letterSpacing: "-1px",
};

const slogan = {
  color: "#fff",
  margin: 0,
  lineHeight: 1.35,
  fontWeight: 700,
};

const icons = {
  display: "flex",
  gap: "10px",
  color: "#f4c85d",
  fontSize: "22px",
};

const globeSvg = {
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "185px",
  zIndex: 1,
};

const balanceCard = {
  borderRadius: "30px",
  padding: "24px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(244,200,93,.26)",
  boxShadow: "0 25px 70px rgba(0,0,0,.42)",
  marginBottom: "18px",
};

const goldText = {
  color: "#f4c85d",
  margin: 0,
  fontWeight: 900,
};

const amount = {
  fontSize: "48px",
  margin: "12px 0",
  letterSpacing: "-2px",
};

const balanceMeta = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
};

const positive = {
  color: "#56e58b",
  fontWeight: 700,
};

const pill = {
  background: "rgba(86,229,139,.16)",
  color: "#56e58b",
  padding: "7px 12px",
  borderRadius: "999px",
  fontWeight: 900,
};

const actions = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "10px",
  marginBottom: "18px",
};

const goldButton = {
  padding: "16px 10px",
  borderRadius: "22px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#110b01",
  fontWeight: 900,
  textAlign: "center",
  textDecoration: "none",
};

const darkButton = {
  padding: "16px 10px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.08)",
  color: "#fff",
  fontWeight: 800,
  textAlign: "center",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,.12)",
};

const bankCard = {
  position: "relative",
  height: "235px",
  borderRadius: "34px",
  padding: "24px",
  overflow: "hidden",
  background: "linear-gradient(135deg,#101010,#020918 70%)",
  border: "1px solid rgba(244,200,93,.55)",
  boxShadow: "0 35px 100px rgba(0,0,0,.65)",
  marginBottom: "18px",
};

const goldGlow = {
  position: "absolute",
  width: "190px",
  height: "190px",
  right: "-70px",
  top: "-55px",
  borderRadius: "50%",
  background: "rgba(244,200,93,.16)",
  filter: "blur(45px)",
};

const chip = {
  position: "absolute",
  top: "30px",
  left: "28px",
  width: "54px",
  height: "40px",
  borderRadius: "12px",
  background: "linear-gradient(135deg,#ffe28a,#9b6b19)",
};

const bigLogo = {
  position: "absolute",
  left: "50%",
  top: "48%",
  transform: "translate(-50%,-50%)",
  fontSize: "115px",
  fontWeight: 900,
  color: "#f4c85d",
  textShadow: "0 0 35px rgba(244,200,93,.45)",
  fontFamily: "Georgia, serif",
};

const orbit = {
  position: "absolute",
  right: "118px",
  top: "50px",
  color: "#f4c85d",
  fontSize: "32px",
};

const cardCurve = {
  position: "absolute",
  width: "420px",
  height: "180px",
  borderBottom: "2px solid rgba(244,200,93,.85)",
  borderRadius: "50%",
  left: "-40px",
  bottom: "25px",
  transform: "rotate(-10deg)",
};

const cardName = {
  position: "absolute",
  left: "28px",
  bottom: "25px",
  color: "#f4c85d",
  letterSpacing: "6px",
  fontWeight: 700,
};

const cardHolder = {
  position: "absolute",
  right: "28px",
  bottom: "54px",
  letterSpacing: "2px",
  fontWeight: 700,
};

const cardNumber = {
  position: "absolute",
  right: "28px",
  bottom: "25px",
  letterSpacing: "2px",
  fontWeight: 700,
};

const panel = {
  borderRadius: "28px",
  padding: "22px",
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.10)",
  boxShadow: "0 25px 70px rgba(0,0,0,.40)",
  marginBottom: "18px",
};

const sectionHead = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "21px",
};

const seeAll = {
  color: "#f4c85d",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "13px",
};

const peopleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "10px",
};

const person = {
  textAlign: "center",
};

const avatarBox = {
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  margin: "0 auto 8px",
  display: "grid",
  placeItems: "center",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(244,200,93,.22)",
  position: "relative",
  fontSize: "28px",
};

const onlineDot = {
  position: "absolute",
  right: "2px",
  bottom: "4px",
  width: "12px",
  height: "12px",
  background: "#56e58b",
  borderRadius: "50%",
  border: "2px solid #020918",
};

const personName = {
  display: "block",
  fontSize: "13px",
};

const personStatus = {
  display: "block",
  color: "#cfd7e8",
  fontSize: "11px",
  marginTop: "3px",
};

const network = {
  borderRadius: "28px",
  padding: "22px",
  background: "radial-gradient(circle at 20% 20%,#16427f,#071735 55%,#020918)",
  border: "1px solid rgba(244,200,93,.28)",
  marginBottom: "18px",
};

const country = {
  display: "grid",
  gridTemplateColumns: "34px 1fr auto",
  gap: "10px",
  alignItems: "center",
  padding: "12px 0",
  borderBottom: "1px solid rgba(255,255,255,.08)",
};

const available = {
  color: "#56e58b",
  fontSize: "12px",
  fontWeight: 800,
};

const activityRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  padding: "14px 0",
  borderBottom: "1px solid rgba(255,255,255,.08)",
};

const activityLeft = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const activityIcon = {
  width: "42px",
  height: "42px",
  borderRadius: "16px",
  display: "grid",
  placeItems: "center",
  background: "rgba(244,200,93,.13)",
};

const activityDetail = {
  color: "#cfd7e8",
  margin: "4px 0 0",
  fontSize: "13px",
};

const nav = {
  position: "fixed",
  left: "50%",
  bottom: "15px",
  transform: "translateX(-50%)",
  width: "min(410px,92vw)",
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "5px",
  background: "rgba(2,9,24,.96)",
  border: "1px solid rgba(244,200,93,.22)",
  borderRadius: "24px",
  padding: "12px",
  zIndex: 10,
};

const navItem = {
  textAlign: "center",
  color: "#cfd7e8",
  fontSize: "11px",
  textDecoration: "none",
};

const navActive = {
  ...navItem,
  color: "#f4c85d",
  fontWeight: 900,
};
