import Link from "next/link";

export default function Home() {
  return (
    <main className="Accueil">
      <img src="/yvi-pay-accueil.jpeg" alt="YVI PAY" />
      <Link className="Home-Send" href="/Inscription" aria-label="Envoyer de l'argent" />
      <Link className="connexion à domicile" href="/Connexion" aria-label="Se connecter" />
    </main>
  );
}
