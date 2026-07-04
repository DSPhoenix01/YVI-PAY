import Link from "next/link";

export default function Home() {
  return (
    <main style={page}>
      <section style={card}>
        <div style={logo}>YVI PAY</div>

        <h1 style={title}>
          Votre argent.
          <br />
          Vos proches.
          <br />
          <span style={gold}>Sans frontières.</span>
        </h1>

        <p style={text}>
          Transférez de l’argent depuis la France vers l’Afrique avec une expérience simple, sécurisée et premium.
        </p>

        <Link href="/connexion" style={button}>
          Se connecter
        </Link>
      </section>
    </main>
  );
}

const page = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  background: "radial-gradient(circle at top,#09234f 0%,#020918 55%,#00040d 100%)",
};

const card = {
  width: "100%",
  maxWidth: "430px",
  padding: "34px 28px",
  borderRadius: "32px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(244,200,93,.22)",
  boxShadow: "0 24px 70px rgba(0,0,0,.45)",
  textAlign: "center",
};

const logo = {
  color: "#f4c85d",
  fontSize: "26px",
  fontWeight: "900",
  letterSpacing: "8px",
  marginBottom: "34px",
};

const title = {
  margin: 0,
  fontSize: "38px",
  lineHeight: 1.1,
  letterSpacing: "-1px",
};

const gold = {
  color: "#f4c85d",
};

const text = {
  color: "#cfd7e8",
  fontSize: "16px",
  lineHeight: 1.6,
  margin: "24px 0 32px",
};

const button = {
  display: "block",
  width: "100%",
  padding: "17px",
  borderRadius: "999px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#141006",
  fontWeight: "900",
};
