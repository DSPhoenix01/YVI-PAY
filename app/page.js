import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <img src="/yvi-pay-accueil.jpeg" alt="YVI PAY" />
      <Link className="home-send" href="/inscription" aria-label="Envoyer de l'argent" />
      <Link className="home-login" href="/connexion" aria-label="Se connecter" />
    </main>
  );
}
