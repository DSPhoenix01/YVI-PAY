import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="page">
      <section className="phone">
        <div className="glow one"></div>
        <div className="glow two"></div>

        <header className="top">
          <div>
            <p>Bienvenue</p>
            <h1>Bonjour Phoenix 👋</h1>
          </div>
          <div className="avatar">Y</div>
        </header>

        <div className="hero-card">
          <p className="label">Solde disponible</p>
          <h2>3 250,00 €</h2>
          <span>+12% ce mois-ci</span>
          <div className="curve"></div>
        </div>

        <div className="quick">
          <Link href="/envoyer">↗ Envoyer</Link>
          <Link href="/beneficiaires">👥 Proches</Link>
        </div>

        <div className="bank-card">
          <div className="chip"></div>
          <p>YVI PAY BLACK</p>
          <h3>YVI PAY</h3>
          <div className="card-bottom">
            <span>PHOENIX</span>
            <span>•••• 8842</span>
          </div>
        </div>

        <div className="map-card">
          <p>Réseau actif</p>
          <h3>France → Afrique</h3>
          <div className="orbit"></div>
          <span>Mobile Money connecté</span>
        </div>

        <div className="transactions">
          <h3>Derniers transferts</h3>
          <div><span>🇨🇩 Kinshasa<br/><small>Orange Money</small></span><strong>-250 €</strong></div>
          <div><span>🇨🇬 Brazzaville<br/><small>MTN MoMo</small></span><strong>-120 €</strong></div>
          <div><span>🇫🇷 Paris<br/><small>Recharge YVI</small></span><strong>+900 €</strong></div>
        </div>

        <nav>
          <Link href="/dashboard">Accueil</Link>
          <Link href="/envoyer">Envoyer</Link>
          <Link href="/historique">Historique</Link>
          <Link href="/profil">Profil</Link>
        </nav>
      </section>

      <style jsx>{`
        .page{min-height:100vh;background:#020918;color:white;display:flex;justify-content:center;font-family:Arial,sans-serif;padding:22px;overflow:hidden}
        .phone{width:100%;max-width:430px;position:relative;padding-bottom:92px}
        .glow{position:absolute;border-radius:50%;filter:blur(45px);opacity:.45;animation:pulse 4s ease-in-out infinite}
        .one{width:220px;height:220px;background:#0b63ff;top:150px;right:-80px}
        .two{width:180px;height:180px;background:#f4c85d;bottom:180px;left:-90px}
        .top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;position:relative;z-index:2}
        .top p,.label{color:#cfd7e8;margin:0;font-size:14px}
        h1{font-size:28px;margin:6px 0 0}
        .avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(180deg,#ffd36c,#c88c22);color:#141006;display:grid;place-items:center;font-weight:900}
        .hero-card,.transactions{background:rgba(255,255,255,.07);border:1px solid rgba(244,200,93,.22);border-radius:30px;padding:24px;box-shadow:0 20px 70px rgba(0,0,0,.45);position:relative;z-index:2}
        .hero-card h2{font-size:44px;margin:12px 0}
        .hero-card span,.map-card span{color:#f4c85d;font-weight:700}
        .curve{height:42px;margin-top:18px;border-bottom:3px solid #f4c85d;border-radius:50%;opacity:.8}
        .quick{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0}
        .quick a{padding:17px;border-radius:999px;text-align:center;text-decoration:none;font-weight:900}
        .quick a:first-child{background:linear-gradient(180deg,#ffd36c,#c88c22);color:#141006}
        .quick a:last-child{background:rgba(255,255,255,.09);color:white;border:1px solid rgba(255,255,255,.12)}
        .bank-card{height:220px;border-radius:34px;padding:25px;background:linear-gradient(135deg,#111827,#020918 65%);border:1px solid rgba(244,200,93,.42);box-shadow:0 25px 80px rgba(0,0,0,.55);margin-bottom:18px;position:relative;z-index:2}
        .chip{width:48px;height:36px;border-radius:10px;background:linear-gradient(135deg,#ffd36c,#9b6b19);margin-bottom:22px}
        .bank-card p{color:#cfd7e8;margin:0}
        .bank-card h3{letter-spacing:9px;color:#f4c85d;font-size:28px;margin:18px 0 38px}
        .card-bottom{display:flex;justify-content:space-between;letter-spacing:2px}
        .map-card{height:170px;border-radius:28px;padding:22px;background:radial-gradient(circle at 30% 40%,#163b75,#071735 45%,#020918);border:1px solid rgba(244,200,93,.25);margin-bottom:18px;position:relative;overflow:hidden}
        .orbit{position:absolute;width:210px;height:210px;border:1px solid rgba(244,200,93,.45);border-radius:50%;right:-70px;top:-40px;animation:spin 8s linear infinite}
        .transactions h3{margin-top:0}
        .transactions div{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.08)}
        small{color:#cfd7e8}
        nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);width:min(390px,92vw);display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:rgba(2,9,24,.94);border:1px solid rgba(244,200,93,.18);border-radius:22px;padding:12px;z-index:10}
        nav a{text-align:center;color:#cfd7e8;font-size:12px;text-decoration:none}
        @keyframes pulse{50%{transform:scale(1.15);opacity:.65}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </main>
  );
}
