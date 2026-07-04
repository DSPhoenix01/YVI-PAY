import Link from "next/link";

export default function Connexion() {
  return (
    <main style={page}>
      <section style={container}>
        <Link href="/" style={backLink}>← Accueil</Link>

        <div style={logo}>YVI PAY</div>

        <div style={card}>
          <p style={label}>Espace sécurisé</p>
          <h1 style={title}>Connexion</h1>
          <p style={subtitle}>Accédez à votre compte YVI PAY.</p>

          <input placeholder="Adresse e-mail" style={inputStyle} />
          <input placeholder="Mot de passe" type="password" style={inputStyle} />

          <Link href="/dashboard" style={buttonStyle}>
            Se connecter
          </Link>

          <p style={bottomText}>
            Pas encore de compte ?{" "}
            <Link href="/inscription" style={goldLink}>
              Créer un compte
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

const page = {
  width: "100vw",
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#09234f 0%,#020918 50%,#00040d 100%)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const container = {
  width: "100%",
  maxWidth: "430px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "28px",
};

const backLink = {
  color: "#f4c85d",
  textDecoration: "none",
  fontSize: "14px",
};

const logo = {
  textAlign: "center",
  color: "#f4c85d",
  letterSpacing: "9px",
  fontWeight: "700",
  fontSize: "24px",
};

const card = {
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(244,200,93,.25)",
  borderRadius: "28px",
  padding: "28px",
  boxShadow: "0 20px 60px rgba(0,0,0,.35)",
};

const label = {
  color: "#f4c85d",
  margin: "0 0 10px",
};

const title = {
  fontSize: "34px",
  margin: "0 0 12px",
};

const subtitle = {
  color: "#cfd7e8",
  margin: "0 0 24px",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "14px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.08)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  textAlign: "center",
  marginTop: "10px",
  padding: "17px",
  borderRadius: "999px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#141006",
  fontWeight: "800",
  textDecoration: "none",
};

const bottomText = {
  textAlign: "center",
  color: "#cfd7e8",
  marginTop: "22px",
};

const goldLink = {
  color: "#f4c85d",
  textDecoration: "none",
};
