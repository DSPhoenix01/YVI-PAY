import Link from "next/link";

export default function Connexion() {
  return (
    <main style={{
      minHeight:"100vh", background:"#020918", color:"white",
      display:"flex", justifyContent:"center", alignItems:"center",
      fontFamily:"Arial, sans-serif", padding:"24px"
    }}>
      <section style={{
        width:"100%", maxWidth:"430px", minHeight:"100vh",
        display:"flex", flexDirection:"column", justifyContent:"center",
        gap:"28px"
      }}>
        <Link href="/" style={{color:"#f4c85d", textDecoration:"none"}}>← Accueil</Link>

        <div style={{
          textAlign:"center", color:"#f4c85d", letterSpacing:"9px",
          fontWeight:"700", fontSize:"24px"
        }}>
          YVI PAY
        </div>

        <div style={{
          background:"rgba(255,255,255,.06)",
          border:"1px solid rgba(244,200,93,.25)",
          borderRadius:"28px", padding:"28px",
          boxShadow:"0 20px 60px rgba(0,0,0,.35)"
        }}>
          <p style={{color:"#f4c85d", margin:"0 0 10px"}}>Espace sécurisé</p>
          <h1 style={{fontSize:"34px", margin:"0 0 12px"}}>Connexion</h1>
          <p style={{color:"#cfd7e8", margin:"0 0 24px"}}>Accédez à votre compte YVI PAY.</p>

          <input placeholder="Adresse e-mail" style={inputStyle} />
          <input placeholder="Mot de passe" type="password" style={inputStyle} />

          <Link href="/dashboard" style={buttonStyle}>Se connecter</Link>

          <p style={{textAlign:"center", color:"#cfd7e8", marginTop:"22px"}}>
            Pas encore de compte ?{" "}
            <Link href="/inscription" style={{color:"#f4c85d", textDecoration:"none"}}>
              Créer un compte
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width:"100%", padding:"16px", marginBottom:"14px",
  borderRadius:"16px", border:"1px solid rgba(255,255,255,.18)",
  background:"rgba(255,255,255,.08)", color:"white", fontSize:"16px"
};

const buttonStyle = {
  display:"block", width:"100%", textAlign:"center", marginTop:"10px",
  padding:"17px", borderRadius:"999px",
  background:"linear-gradient(180deg,#ffd36c,#c88c22)",
  color:"#141006", fontWeight:"800", textDecoration:"none"
};
