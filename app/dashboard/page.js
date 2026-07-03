import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={page}>
      <section style={phone}>
        <div style={glowBlue}></div>
        <div style={glowGold}></div>

        <header style={top}>
          <div>
            <p style={muted}>Bienvenue</p>
            <h1 style={title}>Bonjour Phoenix 👋</h1>
          </div>
          <div style={avatar}>Y</div>
        </header>

        <div style={balanceCard}>
          <p style={gold}>Solde disponible</p>
          <h2 style={amount}>3 250,00 €</h2>
          <p style={muted}>Compte premium YVI PAY</p>
          <div style={curve}></div>
        </div>

        <div style={actions}>
          <Link href="/envoyer" style={goldButton}>↗ Envoyer</Link>
          <Link href="/beneficiaires" style={darkButton}>👥 Proches</Link>
        </div>

        <div style={bankCard}>
          <div style={chip}></div>
          <p style={muted}>YVI PAY BLACK</p>
          <h3 style={brand}>YVI PAY</h3>
          <div style={cardBottom}>
            <span>PHOENIX</span>
            <span>•••• 8842</span>
          </div>
        </div>

        <div style={networkCard}>
          <p style={gold}>Réseau actif</p>
          <h3 style={{margin:"8px 0 12px"}}>France → Afrique</h3>
          <p style={muted}>Orange Money · MTN MoMo · Mobile Money</p>
          <div style={orbit}></div>
        </div>

        <div style={transactions}>
          <h3 style={{marginTop:0}}>Derniers transferts</h3>
          <Row city="🇨🇩 Kinshasa" detail="Orange Money" amount="-250 €" />
          <Row city="🇨🇬 Brazzaville" detail="MTN MoMo" amount="-120 €" />
          <Row city="🇫🇷 Paris" detail="Recharge YVI" amount="+900 €" />
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

function Row({city, detail, amount}) {
  return (
    <div style={row}>
      <span>{city}<br/><small style={muted}>{detail}</small></span>
      <strong>{amount}</strong>
    </div>
  );
}

const page={minHeight:"100vh",background:"#020918",color:"white",display:"flex",justifyContent:"center",fontFamily:"Arial,sans-serif",padding:"22px",overflow:"hidden"};
const phone={width:"100%",maxWidth:"430px",position:"relative",paddingBottom:"90px"};
const glowBlue={position:"absolute",width:"230px",height:"230px",borderRadius:"50%",background:"#0b63ff",filter:"blur(60px)",opacity:.25,top:"140px",right:"-90px"};
const glowGold={position:"absolute",width:"180px",height:"180px",borderRadius:"50%",background:"#f4c85d",filter:"blur(70px)",opacity:.2,bottom:"220px",left:"-80px"};
const top={display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"22px",position:"relative",zIndex:2};
const muted={color:"#cfd7e8",margin:0};
const gold={color:"#f4c85d",margin:0,fontWeight:"700"};
const title={fontSize:"28px",margin:"6px 0 0"};
const avatar={width:"48px",height:"48px",borderRadius:"50%",background:"linear-gradient(180deg,#ffd36c,#c88c22)",color:"#141006",display:"grid",placeItems:"center",fontWeight:"900"};
const balanceCard={background:"rgba(255,255,255,.07)",border:"1px solid rgba(244,200,93,.25)",borderRadius:"30px",padding:"24px",boxShadow:"0 25px 80px rgba(0,0,0,.45)",marginBottom:"18px",position:"relative",zIndex:2};
const amount={fontSize:"46px",margin:"12px 0"};
const curve={height:"38px",marginTop:"16px",borderBottom:"3px solid #f4c85d",borderRadius:"50%",opacity:.85};
const actions={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"18px"};
const goldButton={padding:"17px",borderRadius:"999px",background:"linear-gradient(180deg,#ffd36c,#c88c22)",color:"#141006",textAlign:"center",fontWeight:"900",textDecoration:"none"};
const darkButton={padding:"17px",borderRadius:"999px",background:"rgba(255,255,255,.09)",color:"#fff",textAlign:"center",fontWeight:"800",textDecoration:"none",border:"1px solid rgba(255,255,255,.14)"};
const bankCard={height:"220px",borderRadius:"34px",padding:"25px",background:"linear-gradient(135deg,#101827,#020918 70%)",border:"1px solid rgba(244,200,93,.42)",boxShadow:"0 25px 80px rgba(0,0,0,.55)",marginBottom:"18px",position:"relative",zIndex:2};
const chip={width:"50px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#ffd36c,#9b6b19)",marginBottom:"22px"};
const brand={letterSpacing:"9px",color:"#f4c85d",fontSize:"28px",margin:"18px 0 38px"};
const cardBottom={display:"flex",justifyContent:"space-between",letterSpacing:"2px"};
const networkCard={height:"165px",borderRadius:"28px",padding:"22px",background:"radial-gradient(circle at 30% 40%,#163b75,#071735 45%,#020918)",border:"1px solid rgba(244,200,93,.25)",marginBottom:"18px",position:"relative",overflow:"hidden"};
const orbit={position:"absolute",width:"210px",height:"210px",border:"1px solid rgba(244,200,93,.45)",borderRadius:"50%",right:"-70px",top:"-40px"};
const transactions={background:"rgba(255,255,255,.07)",borderRadius:"26px",padding:"22px",border:"1px solid rgba(255,255,255,.1)",boxShadow:"0 20px 60px rgba(0,0,0,.35)"};
const row={display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,.08)"};
const nav={position:"fixed",left:"50%",bottom:"16px",transform:"translateX(-50%)",width:"min(390px,92vw)",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"6px",background:"rgba(2,9,24,.94)",border:"1px solid rgba(244,200,93,.18)",borderRadius:"22px",padding:"12px",zIndex:10};
const navItem={textAlign:"center",color:"#cfd7e8",fontSize:"12px",textDecoration:"none"};
