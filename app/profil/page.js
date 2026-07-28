"use client";

import { useState } from "react";
import Link from "next/link";
import "./profil.css";

export default function ProfilPage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <main>
      <aside>
        <div>
          <strong>YVI PAY</strong>
          <span>PRIVATE TRANSFER</span>
        </div>

        <nav>
          <Link href="/dashboard">Accueil</Link>
          <Link href="/envoyer">Envoyer</Link>
          <Link href="/historique">Activités</Link>
          <Link href="/profil">Profil</Link>
        </nav>
      </aside>

      <section>
        <header>
          <p>ESPACE PERSONNEL</p>
          <h1>Mon profil</h1>
          <p>
            Gérez vos informations personnelles, votre sécurité et vos
            préférences YVI PAY.
          </p>
        </header>

        <div>
          <section>
            <p>COMPTE PERSONNEL</p>
            <h2>Phoenix YVI</h2>
            <p>phoenix@yvipay.com</p>

            <div>
              <p>Nom complet</p>
              <strong>Phoenix YVI</strong>
            </div>

            <div>
              <p>Téléphone</p>
              <strong>+33 6 12 34 56 78</strong>
            </div>

            <div>
              <p>Pays de résidence</p>
              <strong>🇫🇷 France</strong>
            </div>
          </section>

          <section>
            <p>STATUT DU COMPTE</p>
            <h2>Compte vérifié</h2>
            <p>Votre identité, votre téléphone et votre email sont confirmés.</p>
          </section>

          <section>
            <p>PRÉFÉRENCES</p>
            <h2>Notifications</h2>

            <button
              type="button"
              onClick={() => setNotifications((current) => !current)}
            >
              Notifications : {notifications ? "Activées" : "Désactivées"}
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}
