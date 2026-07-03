import Link from "next/link";

export default function Connexion() {
  return (
    <main className="screen">
      <section className="phone">
        <Link className="back-link" href="/">← Accueil</Link>

        <div className="logo">YVI PAY</div>

        <div className="card">
          <p className="eyebrow">Espace sécurisé</p>
          <h1>Connexion</h1>
          <p>Accédez à votre compte YVI PAY.</p>

          <input className="field" type="email" placeholder="Adresse e-mail" />
          <input className="field" type="password" placeholder="Mot de passe" />

          <Link className="btn" href="/dashboard">
            Se connecter
          </Link>

          <p className="center">
            Pas encore de compte ?{" "}
            <Link className="gold" href="/inscription">
              Créer un compte
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
