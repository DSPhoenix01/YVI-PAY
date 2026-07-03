import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={phone}>
        <div style={top}>
          <div>
            <p style={small}>Bienvenue</p>
            <h1 style={title}>Bonjour Phoenix 👋</h1>
          </div>
          <div style={avatar}>Y</div>
        </div>

        <div style={card}>
          <p style={smallGold}>Solde disponible</p>
          <h2 style={amount}>3 250,00 €</h2>
          <p style={muted}>Compte premium YVI PAY</p>
        </div>

        <div style={actions}>
          <Link href="/envoyer" style={goldBtn}>Envoyer</Link>
          <Link href="/beneficiaires" style={darkBtn}>Bénéficiaires</Link>
        </div>

        <div style={bankCard}>
          <p style={small}>Carte YVI PAY</p>
          <h3 style={cardLogo}>YVI PAY</h3>
          <p style={cardNumber}>•••• 8842</p>
        </div>

        <div style={list}>
          <h3 style={sectionTitle}>Derniers transferts</h3>
          <div style={item}><span>Kinshasa</span><strong>-250 €</strong></div>
          <div style={item}><span>Brazzaville</span><strong>-120 €</strong></div>
          <div style={item}><span>Paris</span><strong>+900 €</strong></div>
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

const page={minHeight:"100vh",background:"#020918",color:"white",display:"flex",justifyContent:"center",fontFamily:"Arial,sans-serif",padding:"22px"};
const phone={width:"100%",maxWidth:"430px",paddingBottom:"90px"};
const top={display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"};
const small={margin:0,color:"#cfd7e8",fontSize:"14px"};
const smallGold={margin:0,color:"#f4c85d",fontSize:"14px"};
const title={margin:"6px 0 0",fontSize:"28px"};
const avatar={width:"44px",height:"44px",borderRadius:"50%",background:"linear-gradient(180deg,#ffd36c,#c88c22)",color:"#141006",display:"grid",placeItems:"center",fontWeight:"900"};
const card={background:"rgba(255,255,255,.07)",border:"1px solid rgba(244,200,93,.22)",borderRadius:"28px",padding:"24px",boxShadow:"0 20px 60px rgba(0,0,0,.35)",marginBottom:"18px"};
const amount={fontSize:"42px",margin:"10px 0"};
const muted={color:"#cfd7e8",margin:0};
const actions={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"18px"};
const goldBtn={padding:"16px",borderRadius:"999px",background:"linear-gradient(180deg,#ffd36c,#c88c22)",color:"#141006",textAlign:"center",fontWeight:"900",textDecoration:"none"};
const darkBtn={padding:"16px",borderRadius:"999px",background:"rgba(255,255,255,.08)",color:"#fff",textAlign:"center",fontWeight:"800",textDecoration:"none",border:"1px solid rgba(255,255,255,.12)"};
const bankCard={height:"190px",borderRadius:"30px",padding:"24px",background:"linear-gradient(135deg,#071735,#020918 70%)",border:"1px solid rgba(244,200,93,.35)",boxShadow:"0 20px 60px rgba(0,0,0,.45)",marginBottom:"18px"};
const cardLogo={letterSpacing:"8px",color:"#f4c85d",fontSize:"24px",margin:"28px 0 38px"};
const cardNumber={fontSize:"22px",letterSpacing:"4px",margin:0};
const list={background:"rgba(255,255,255,.06)",borderRadius:"24px",padding:"20px",border:"1px solid rgba(255,255,255,.1)"};
const sectionTitle={margin:"0 0 14px",fontSize:"18px"};
const item={display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,.08)"};
const nav={position:"fixed",left:"50%",bottom:"16px",transform:"translateX(-50%)",width:"min(390px,92vw)",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"6px",background:"rgba(2,9,24,.92)",border:"1px solid rgba(244,200,93,.18)",borderRadius:"22px",padding:"12px"};
const navItem={textAlign:"center",color:"#cfd7e8",fontSize:"12px",textDecoration:"none"};
