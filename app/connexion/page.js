import Link from "next/link";

export default function Connexion() {
  return (
    <main style={page}>
      <section style={container}>
        <Link href="/" style={backLink}>← Accueil</Link>

        <div style={brand}>YVI PAY</div>

        <div style={card}>
          <p style={eyebrow}>Espace sécurisé</p>

          <h1 style={title}>Connexion</h1>

          <p style={subtitle}>
            Accédez à votre compte YVI PAY en toute sécurité.
          </p>

          <input style={input} placeholder="Adresse e-mail" type="email" />

          <input style={input} placeholder="Mot de passe" type="password" />

          <Link href="/dashboard" style={button}>
            Se connecter
          </Link>

          <Link href="/connexion" style={forgot}>
            Mot de passe oublié ?
          </Link>

          <div style={separator}></div>

          <p style={footerText}>
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
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  background: "radial-gradient(circle at top,#09234f 0%,#020918 55%,#00040d 100%)",
  color: "#ffffff",
};

const container = {
  width: "100%",
  maxWidth: "430px",
  margin: "0 auto",
};

const backLink = {
  display: "inline-block",
  marginBottom: "26px",
  color: "#f4c85d",
  fontSize: "14px",
  fontWeight: "700",
};

const brand = {
  textAlign: "center",
  color: "#f4c85d",
  fontSize: "28px",
  fontWeight: "900",
  letterSpacing: "8px",
  marginBottom: "30px",
};

const card = {
  width: "100%",
  padding: "32px 28px",
  borderRadius: "32px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(244,200,93,.22)",
  boxShadow: "0 24px 70px rgba(0,0,0,.45)",
};

const eyebrow = {
  margin: "0 0 10px",
  color: "#f4c85d",
  fontSize: "14px",
  fontWeight: "800",
};

const title = {
  margin: 0,
  fontSize: "36px",
  lineHeight: 1.1,
};

const subtitle = {
  margin: "14px 0 26px",
  color: "#cfd7e8",
  lineHeight: 1.6,
};

const input = {
  width: "100%",
  height: "54px",
  marginBottom: "14px",
  padding: "0 16px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.08)",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
};

const button = {
  display: "block",
  width: "100%",
  marginTop: "8px",
  padding: "17px",
  borderRadius: "999px",
  background: "linear-gradient(180deg,#ffd36c,#c88c22)",
  color: "#141006",
  fontWeight: "900",
  textAlign: "center",
};

const forgot = {
  display: "block",
  marginTop: "18px",
  textAlign: "center",
  color: "#cfd7e8",
  fontSize: "14px",
};

const separator = {
  height: "1px",
  margin: "24px 0 18px",
  background: "rgba(255,255,255,.12)",
};

const footerText = {
  margin: 0,
  textAlign: "center",
  color: "#cfd7e8",
  fontSize: "14px",
};

const goldLink = {
  color: "#f4c85d",
  fontWeight: "800",
};
