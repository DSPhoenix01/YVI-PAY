"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={phone}>
        <div style={heroImage}></div>

        <header style={top}>
          <div>
            <p style={gold}>YVI PAY PRIVATE</p>
            <h1 style={title}>Bonjour Phoenix</h1>
            <p style={muted}>Votre espace premium de transfert.</p>
          </div>
          <div style={avatar}>Y</div>
        </header>

        <div style={balance}>
          <p style={gold}>Solde disponible</p>
          <h2 style={amount}>3 250,00 €</h2>
          <p style={muted}>Compte vérifié · Réseau opérationnel</p>

          <svg width="100%" height="55" viewBox="0 0 320 55">
            <path d="M5 42 C70 10, 110 50, 165 22 S260 20, 315 8" fill="none" stroke="#f4c85d" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0,400;400,0" dur="2s" fill="freeze" />
            </path>
          </svg>
        </div>

        <div style={actions}>
          <Link href="/envoyer" style={goldBtn}>↗ Envoyer</Link>
          <Link href="/beneficiaires" style={darkBtn}>👥 Proches</Link>
        </div>

        <div style={bankCard}>
          <div style={shine}></div>
          <div style={chip}></div>
          <p style={muted}>YVI PAY BLACK</p>
          <h3 style={brand}>YVI PAY</h3>
          <div style={cardBottom}>
            <span>PHOENIX</span>
            <span>•••• 8842</span>
          </div>
        </div>

        <div style={network}>
          <p style={gold}>Réseau actif</p>
          <h3 style={networkTitle}>France → Afrique</h3>
          <p style={muted}>Orange Money · MTN MoMo · Mobile Money</p>
        </div>

        <div style={transactions}>
          <h3 style={sectionTitle}>Derniers transferts</h3>
          <Transfer country="RDC" city="Kinshasa" method="Orange Money" amount="-250 €" />
          <Transfer country="CG" city="Brazzaville" method="MTN MoMo" amount="-120 €" />
          <Transfer country="FR" city="Paris" method="Recharge YVI" amount="+900 €" />
        </div>

        <nav style={nav}>
          <Link href="/dashboard" style={navItem}>Accueil</Link>
          <Link href="/envoyer" style={navItem}>Envoyer</Link>
          <Link href="/historique" style={navItem}>Historique</Link>
          <Link href="/profil" style={navItem}>Profil</Link>
        </nav>
      </section>
    </main>
  );
}

function Transfer({ country, city, method, amount }) {
  return (
    <div style={transfer}>
      <div style={transferLeft}>
        <span style={badge}>{country}</span>
        <div>
          <strong>{city}</strong>
          <p style={muted}>{method}</p>
        </div>
      </div>
      <strong>{amount}</strong>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#08214a 0%,#020918 48%,#00040d 100%)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
  padding: "22px",
};

const phone = { width: "100%", maxWidth: "430px", paddingBottom: "92px", position: "relative" };

const heroImage = {
  height: "170px",
  borderRadius: "34px",
  backgroundImage: "linear-gradient(rgba(2,9,24,.15),rgba(2,9,24,.65)), url('/yvi-pay-accueil.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center 58%",
  border: "1px solid rgba(244,200,93,.35)",
  boxShadow: "0 30px 90px rgba(0,0,0,.55)",
  marginBottom: "18px",
};

const top = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" };
const gold = { color: "#f4c85d", margin: 0, fontWeight: 800 };
const muted = { color: "#cfd7e8", margin: "4px 0 0" };
const title = { fontSize: "31px", margin: "7px 0 4px" };

const avatar = {
  width: "52px", height: "52px", borderRadius: "50%",
  background: "linear-gradient(180deg,#ffd36c,#b97812)",
  color: "#130d02", display: "grid", placeItems: "center",
  fontWeight: 900, fontSize: "22px",
};

const balance = {
  borderRadius: "34px", padding: "26px",
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(244,200,93,.35)",
  boxShadow: "0 30px 90px rgba(0,0,0,.55)",
  marginBottom: "18px",
};

const amount = { fontSize: "48px", margin: "12px 0" };

const actions = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "18px" };

const goldBtn = {
  padding: "18px", borderRadius: "999px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#120c02", textAlign: "center", fontWeight: 900,
  textDecoration: "none",
};

const darkBtn = {
  padding: "18px", borderRadius: "999px",
  background: "rgba(255,255,255,.08)", color: "#fff",
  textAlign: "center", fontWeight: 900, textDecoration: "none",
  border: "1px solid rgba(255,255,255,.14)",
};

const bankCard = {
  height: "235px", borderRadius: "36px", padding: "26px",
  background: "linear-gradient(135deg,#151f35,#020918 72%)",
  border: "1px solid rgba(244,200,93,.55)",
  boxShadow: "0 35px 100px rgba(0,0,0,.65)",
  marginBottom: "18px", position: "relative", overflow: "hidden",
};

const shine = {
  position: "absolute", width: "180px", height: "180px",
  borderRadius: "50%", background: "rgba(244,200,93,.18)",
  filter: "blur(45px)", top: "-60px", right: "-60px",
};

const chip = {
  width: "54px", height: "40px", borderRadius: "12px",
  background: "linear-gradient(135deg,#ffe28a,#9b6b19)",
  marginBottom: "22px",
};

const brand = { color: "#f4c85d", letterSpacing: "10px", fontSize: "30px", margin: "18px 0 50px" };
const cardBottom = { display: "flex", justifyContent: "space-between", letterSpacing: "2px", fontWeight: 700 };

const network = {
  borderRadius: "30px", padding: "24px",
  background: "radial-gradient(circle at 20% 20%,#16427f,#071735 55%,#020918)",
  border: "1px solid rgba(244,200,93,.28)",
  marginBottom: "18px",
};

const networkTitle = { margin: "8px 0", fontSize: "24px" };

const transactions = {
  borderRadius: "30px", padding: "24px",
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.10)",
  boxShadow: "0 25px 70px rgba(0,0,0,.45)",
};

const sectionTitle = { margin: "0 0 18px", fontSize: "22px" };
const transfer = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.08)" };
const transferLeft = { display: "flex", gap: "12px", alignItems: "center" };
const badge = { width: "42px", height: "42px", borderRadius: "50%", background: "rgba(244,200,93,.14)", color: "#f4c85d", display: "grid", placeItems: "center", fontWeight: 900, fontSize: "12px" };

const nav = {
  position: "fixed", left: "50%", bottom: "16px",
  transform: "translateX(-50%)", width: "min(390px,92vw)",
  display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "6px",
  background: "rgba(2,9,24,.96)", border: "1px solid rgba(244,200,93,.22)",
  borderRadius: "24px", padding: "13px",
};

const navItem = { textAlign: "center", color: "#cfd7e8", fontSize: "12px", textDecoration: "none" };
