import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="phone-frame">
        <img src="/yvi-pay-accueil.jpeg" alt="YVI PAY" />
        <Link className="send-zone" href="/Inscription" aria-label="Envoyer de l'argent" />
        <Link className="login-zone" href="/Connexion" aria-label="Se connecter" />
      </section>
    </main>
  );
}
