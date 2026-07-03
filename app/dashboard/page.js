"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={phone}>
        <section style={hero}>
          <div style={heroText}>
            <p style={gold}>YVI PAY PRIVATE</p>
            <h1 style={title}>Bonjour Nathalie ❤️</h1>
            <p style={slogan}>Votre argent.<br />Vos proches.<br />Sans frontières.</p>
          </div>

          <svg style={globe} viewBox="0 0 430 240">
            <circle cx="215" cy="210" r="175" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1" />
            <circle cx="215" cy="210" r="130" fill="none" stroke="rgba(244,200,93,.18)" strokeWidth="1" />
            <path d="M70 180 C140 95, 250 110, 365 62" fill="none" stroke="#f4c85d" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M85 190 C150 140, 250 150, 345 105" fill="none" stroke="#f4c85d" strokeWidth="1.4" opacity=".7" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0,450;450,0" dur="5s" repeatCount="indefinite" />
            </path>
            <circle cx="78" cy="180" r="5" fill="#f4c85d" />
            <circle cx="345" cy="105" r="4" fill="#f4c85d" />
            <circle cx="365" cy="62" r="4" fill="#f4c85d" />
          </svg>
        </section>

        <section style={balance}>
          <p style={gold}>Solde disponible</p>
          <h2 style={amount}>3 250,00 €</h2>
          <p style={muted}>+120 € ce mois-ci · Compte vérifié</p>
          <svg width="100%" height="48" viewBox="0 0 330 48">
            <path d="M5 36 C70 15, 95 42, 145 24 S225 10, 325 8" fill="none" stroke="#f4c85d" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="2.5s" repeatCount="indefinite" />
            </path>
          </svg>
        </section>

        <section style={actions}>
          <Link href="/envoyer" style={goldBtn}>Envoyer</Link>
          <Link href="/beneficiaires" style={darkBtn}>Vos proches</Link>
          <Link href="/beneficiaires" style={darkBtn}>Ajouter</Link>
        </section>

        <section style={cardWrap}>
          <img src="/yvi-card.png" alt="Carte YVI PAY" style={cardImage} />
        </section>

        <section style={panel}>
          <div style={head}>
            <h3 style={h3}>Vos proches</h3>
            <Link href="/beneficiaires" style={link}>Voir tout</Link>
          </div>
          <Person emoji="👩🏾" name="Maman ❤️" text="Merci, bien reçu ❤️" />
          <Person emoji="👨🏾" name="Papa" text="Photo reçue" />
          <Person emoji="👩🏾" name="Grâce" text="Vous écrit..." />
        </section>

        <section style={network}>
          <h3 style={h3}>Réseau YVI PAY</h3>
          <Country flag="🇨🇬" name="Congo-Brazzaville" />
          <Country flag="🇨🇩" name="RDC" />
          <Country flag="🇨🇲" name="Cameroun" />
          <Country flag="🇨🇮" name="Côte d’Ivoire" />
        </section>

        <nav style={nav}>
          <Link href="/dashboard" style={active}>Accueil</Link>
          <Link href="/envoyer" style={navItem}>Envoyer</Link>
          <Link href="/beneficiaires" style={navItem}>Vos proches</Link>
          <Link href="/historique" style={navItem}>Activité</Link>
          <Link href="/profil" style={navItem}>Profil</Link>
        </nav>
      </section>
    </main>
  );
}

function Person({ emoji, name, text }) {
  return (
    <div style={person}>
      <span style={avatar}>{emoji}</span>
      <div>
        <strong>{name}</strong>
        <p style={muted}>{text}</p>
      </div>
      <span style={dot}></span>
    </div>
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

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#09204a 0%,#020918 48%,#00040d 100%)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
  padding: "18px",
};

const phone = { width: "100%", maxWidth: "430px", paddingBottom: "92px" };

const hero = {
  position: "relative",
  minHeight: "260px",
  borderRadius: "34px",
  overflow: "hidden",
  padding: "24px",
  marginBottom: "18px",
  background: "linear-gradient(180deg,#071735,#020918)",
  border: "1px solid rgba(244,200,93,.28)",
  boxShadow: "0 30px 90px rgba(0,0,0,.55)",
};

const heroText = { position: "relative", zIndex: 2 };
const gold = { color: "#f4c85d", margin: 0, fontWeight: 900 };
const title = { fontSize: "30px", margin: "10px 0 12px", letterSpacing: "-1px" };
const slogan = { margin: 0, fontSize: "20px", lineHeight: 1.25, fontWeight: 800 };
const globe = { position: "absolute", left: 0, bottom: 0, width: "100%", height: "210px", opacity: .95 };

const balance = {
  borderRadius: "30px",
  padding: "24px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(244,200,93,.26)",
  boxShadow: "0 25px 70px rgba(0,0,0,.42)",
  marginBottom: "18px",
};

const amount = { fontSize: "48px", margin: "12px 0", letterSpacing: "-2px" };
const muted = { color: "#cfd7e8", margin: "4px 0 0" };

const actions = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "18px" };
const goldBtn = { padding: "16px 8px", borderRadius: "22px", background: "linear-gradient(180deg,#ffd36c,#c88c22)", color: "#120c02", textAlign: "center", fontWeight: 900, textDecoration: "none" };
const darkBtn = { padding: "16px 8px", borderRadius: "22px", background: "rgba(255,255,255,.08)", color: "#fff", textAlign: "center", fontWeight: 800, textDecoration: "none", border: "1px solid rgba(255,255,255,.12)" };

const cardWrap = {
  borderRadius: "34px",
  padding: "12px",
  marginBottom: "18px",
  background: "linear-gradient(135deg,rgba(244,200,93,.18),rgba(255,255,255,.04))",
  border: "1px solid rgba(244,200,93,.35)",
  boxShadow: "0 35px 100px rgba(0,0,0,.65)",
};

const cardImage = { width: "100%", borderRadius: "26px", display: "block" };

const panel = {
  borderRadius: "28px",
  padding: "22px",
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.10)",
  boxShadow: "0 25px 70px rgba(0,0,0,.40)",
  marginBottom: "18px",
};

const head = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" };
const h3 = { margin: 0, fontSize: "21px" };
const link = { color: "#f4c85d", textDecoration: "none", fontWeight: 900, fontSize: "13px" };

const person = { display: "grid", gridTemplateColumns: "48px 1fr 10px", gap: "12px", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.08)" };
const avatar = { width: "48px", height: "48px", borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(244,200,93,.14)", fontSize: "24px" };
const dot = { width: "10px", height: "10px", borderRadius: "50%", background: "#56e58b" };

const network = {
  borderRadius: "28px",
  padding: "22px",
  background: "radial-gradient(circle at 20% 20%,#16427f,#071735 55%,#020918)",
  border: "1px solid rgba(244,200,93,.28)",
  marginBottom: "18px",
};

const country = { display: "grid", gridTemplateColumns: "34px 1fr auto", gap: "10px", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.08)" };
const available = { color: "#56e58b", fontSize: "12px", fontWeight: 900 };

const nav = { position: "fixed", left: "50%", bottom: "15px", transform: "translateX(-50%)", width: "min(410px,92vw)", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "5px", background: "rgba(2,9,24,.96)", border: "1px solid rgba(244,200,93,.22)", borderRadius: "24px", padding: "12px", zIndex: 10 };
const navItem = { textAlign: "center", color: "#cfd7e8", fontSize: "11px", textDecoration: "none" };
const active = { ...navItem, color: "#f4c85d", fontWeight: 900 };
