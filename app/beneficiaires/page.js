"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const proches = [
  {
    id: 1,
    initials: "ME",
    nom: "Marie-Espérance",
    ville: "Brazzaville",
    pays: "Congo",
    drapeau: "🇨🇬",
    message: "Merci, j’ai bien reçu le transfert.",
    statut: "En ligne",
    heure: "À l’instant",
    vedette: true,
  },
  {
    id: 2,
    initials: "JM",
    nom: "Jean-Marc",
    ville: "Kinshasa",
    pays: "RDC",
    drapeau: "🇨🇩",
    message: "Je te confirme dès que tout est arrivé.",
    statut: "Actif récemment",
    heure: "Il y a 12 min",
  },
  {
    id: 3,
    initials: "AN",
    nom: "Aïcha N.",
    ville: "Abidjan",
    pays: "Côte d’Ivoire",
    drapeau: "🇨🇮",
    message: "Merci beaucoup pour ton aide.",
    statut: "Hors ligne",
    heure: "Hier",
  },
  {
    id: 4,
    initials: "SK",
    nom: "Samuel K.",
    ville: "Douala",
    pays: "Cameroun",
    drapeau: "🇨🇲",
    message: "Tout est bon de mon côté.",
    statut: "Actif récemment",
    heure: "Hier",
  },
];

export default function BeneficiairesPage() {
  const router = useRouter();
  const [recherche, setRecherche] = useState("");

  const prochesFiltres = useMemo(() => {
    const valeur = recherche.trim().toLowerCase();

    if (!valeur) return proches;

    return proches.filter((proche) =>
      `${proche.nom} ${proche.ville} ${proche.pays}`
        .toLowerCase()
        .includes(valeur)
    );
  }, [recherche]);

  const envoyerArgent = () => {
    router.push("/envoyer");
  };

  return (
    <main className="page-proches">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="layout">
        <div className="colonne-gauche">
          <header className="entete">
            <p className="eyebrow">RELATIONS YVI PAY</p>

            <h1>Vos proches</h1>

            <p className="introduction">
              Votre argent. Vos proches. Sans frontières.
            </p>
          </header>

          <div className="recherche">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="icone-recherche"
            >
              <path
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              value={recherche}
              onChange={(event) => setRecherche(event.target.value)}
              placeholder="Rechercher un proche, une ville ou un pays"
              aria-label="Rechercher un proche"
            />
          </div>

          <div className="titre-liste">
            <div>
              <span>Votre cercle</span>
              <strong>{prochesFiltres.length} proches</strong>
            </div>

            <button type="button" className="ajouter">
              <span>+</span>
              Ajouter
            </button>
          </div>

          <div className="liste-proches">
            {prochesFiltres.length > 0 ? (
              prochesFiltres.map((proche) => (
                <article
                  key={proche.id}
                  className={`carte-proche ${
                    proche.vedette ? "carte-vedette" : ""
                  }`}
                >
                  {proche.vedette && (
                    <div className="badge-favori">Proche principal</div>
                  )}

                  <div className="avatar-zone">
                    <div className="avatar">{proche.initials}</div>

                    <span
                      className={`point-statut ${
                        proche.statut === "En ligne" ? "en-ligne" : ""
                      }`}
                    />
                  </div>

                  <div className="identite">
                    <div className="ligne-nom">
                      <h2>{proche.nom}</h2>

                      <span className="heure">{proche.heure}</span>
                    </div>

                    <p className="localisation">
                      <span>{proche.drapeau}</span>
                      {proche.ville} · {proche.pays}
                    </p>

                    <p className="message">{proche.message}</p>

                    <p
                      className={`statut ${
                        proche.statut === "En ligne" ? "statut-actif" : ""
                      }`}
                    >
                      {proche.statut}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="bouton-envoyer"
                    onClick={envoyerArgent}
                  >
                    Envoyer
                    <span>→</span>
                  </button>
                </article>
              ))
            ) : (
              <div className="aucun-resultat">
                <span>○</span>
                <h2>Aucun proche trouvé</h2>
                <p>Essayez un autre nom, une autre ville ou un autre pays.</p>
              </div>
            )}
          </div>
        </div>

        <aside className="colonne-droite">
          <div className="signature-haut">
            <div>
              <p className="eyebrow">RÉSEAU INTERNATIONAL</p>
              <h2>Connectés aujourd’hui</h2>
            </div>

            <div className="reseau-actif">
              <span />
              Réseau actif
            </div>
          </div>

          <div className="zone-carte">
            <div className="halo-carte" />

            <img
              src="/yvi-globe-premium.png"
              alt="Réseau international YVI PAY entre l’Europe et l’Afrique"
              className="globe"
            />

            <div className="ville ville-paris">
              <span className="point-ville" />
              <div>
                <strong>Paris</strong>
                <small>France</small>
              </div>
            </div>

            <div className="ville ville-brazzaville">
              <span className="point-ville actif" />
              <div>
                <strong>Brazzaville</strong>
                <small>Congo</small>
              </div>
            </div>

            <div className="ligne-signature ligne-une" />
            <div className="ligne-signature ligne-deux" />

            <div className="legende-carte">
              <span>YVI PAY</span>
              <p>La proximité, partout où votre argent doit aller.</p>
            </div>
          </div>

          <div className="statistiques">
            <article>
              <span className="icone-stat">⌁</span>
              <div>
                <p>Temps moyen</p>
                <strong>Moins de 2 min</strong>
                <small>Transfert instantané</small>
              </div>
            </article>

            <article>
              <span className="icone-stat">◉</span>
              <div>
                <p>Disponibilité</p>
                <strong>24h / 24</strong>
                <small>Réseau toujours actif</small>
              </div>
            </article>

            <article>
              <span className="icone-stat">◇</span>
              <div>
                <p>Réseau actuel</p>
                <strong>4 pays</strong>
                <small>Afrique francophone</small>
              </div>
            </article>
          </div>

          <div className="securite">
            <div className="bouclier">✓</div>

            <div>
              <strong>Relations protégées</strong>
              <p>
                Vos transferts et vos échanges sont sécurisés par YVI PAY.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page-proches {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 54px;
          color: #f5f1e8;
          background:
            radial-gradient(
              circle at 10% 12%,
              rgba(25, 53, 83, 0.36),
              transparent 34%
            ),
            radial-gradient(
              circle at 87% 42%,
              rgba(183, 139, 59, 0.09),
              transparent 30%
            ),
            linear-gradient(135deg, #07111f 0%, #050b13 52%, #090d12 100%);
          font-family:
            Inter, Arial, Helvetica, sans-serif;
        }

        .ambient {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.22;
        }

        .ambient-one {
          width: 420px;
          height: 420px;
          left: -220px;
          top: 18%;
          background: #1d4f77;
        }

        .ambient-two {
          width: 360px;
          height: 360px;
          right: -180px;
          bottom: 4%;
          background: #a8782f;
        }

        .layout {
          width: min(1560px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.16fr) minmax(480px, 0.84fr);
          gap: 42px;
          position: relative;
          z-index: 1;
        }

        .colonne-gauche,
        .colonne-droite {
          min-width: 0;
        }

        .colonne-gauche {
          padding: 20px 4px 20px 0;
        }

        .entete {
          margin-bottom: 30px;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #d8aa52;
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.26em;
        }

        .entete h1 {
          margin: 0;
          color: #f7f2e9;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 5vw, 72px);
          line-height: 0.98;
          font-weight: 600;
          letter-spacing: -0.04em;
        }

        .introduction {
          margin: 13px 0 0;
          max-width: 600px;
          color: #929dad;
          font-size: 17px;
          line-height: 1.6;
        }

        .recherche {
          height: 56px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 0 18px;
          margin-bottom: 30px;
          border: 1px solid rgba(189, 203, 220, 0.11);
          border-radius: 16px;
          background: rgba(14, 27, 43, 0.72);
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.025);
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .recherche:focus-within {
          border-color: rgba(216, 170, 82, 0.46);
          background: rgba(14, 27, 43, 0.92);
        }

        .icone-recherche {
          width: 20px;
          flex: 0 0 20px;
          color: #758294;
        }

        .recherche input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #f5f1e8;
          background: transparent;
          font-size: 15px;
        }

        .recherche input::placeholder {
          color: #6f7c8c;
        }

        .titre-liste {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .titre-liste div {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .titre-liste span {
          color: #d8dee7;
          font-size: 15px;
          font-weight: 600;
        }

        .titre-liste strong {
          color: #687587;
          font-size: 13px;
          font-weight: 500;
        }

        .ajouter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 0;
          padding: 8px 4px;
          color: #909cac;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
        }

        .ajouter span {
          color: #d8aa52;
          font-size: 19px;
          font-weight: 400;
        }

        .liste-proches {
          display: grid;
          gap: 14px;
        }

        .carte-proche {
          min-height: 134px;
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          padding: 24px;
          overflow: hidden;
          border: 1px solid rgba(185, 198, 214, 0.09);
          border-radius: 20px;
          background:
            linear-gradient(
              135deg,
              rgba(15, 28, 44, 0.82),
              rgba(8, 17, 29, 0.9)
            );
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .carte-proche:hover {
          transform: translateY(-2px);
          border-color: rgba(216, 170, 82, 0.24);
          background:
            linear-gradient(
              135deg,
              rgba(17, 32, 50, 0.94),
              rgba(8, 18, 30, 0.96)
            );
        }

        .carte-vedette {
          min-height: 156px;
          padding: 29px 26px;
          border-color: rgba(216, 170, 82, 0.32);
          background:
            radial-gradient(
              circle at 82% 30%,
              rgba(216, 170, 82, 0.08),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              rgba(20, 37, 57, 0.98),
              rgba(8, 18, 31, 0.98)
            );
          box-shadow:
            0 22px 65px rgba(0, 0, 0, 0.28),
            inset 0 1px rgba(255, 255, 255, 0.03);
        }

        .badge-favori {
          position: absolute;
          top: 0;
          right: 24px;
          padding: 6px 13px;
          border-radius: 0 0 10px 10px;
          color: #d9b66f;
          background: rgba(216, 170, 82, 0.1);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .avatar-zone {
          position: relative;
        }

        .avatar {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(216, 170, 82, 0.28);
          border-radius: 50%;
          color: #e5bd6a;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(216, 170, 82, 0.13),
              transparent 48%
            ),
            #0c1725;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 700;
        }

        .carte-vedette .avatar {
          width: 68px;
          height: 68px;
          font-size: 19px;
        }

        .point-statut {
          position: absolute;
          right: 1px;
          bottom: 4px;
          width: 12px;
          height: 12px;
          border: 3px solid #0c1725;
          border-radius: 50%;
          background: #5b6573;
        }

        .point-statut.en-ligne {
          background: #46bd82;
          box-shadow: 0 0 11px rgba(70, 189, 130, 0.7);
        }

        .identite {
          min-width: 0;
        }

        .ligne-nom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .ligne-nom h2 {
          margin: 0;
          overflow: hidden;
          color: #f4f0e7;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.2;
          font-weight: 600;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .carte-vedette .ligne-nom h2 {
          font-size: 24px;
        }

        .heure {
          flex: 0 0 auto;
          color: #697688;
          font-size: 12px;
        }

        .localisation {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 6px 0 0;
          color: #9aa5b3;
          font-size: 14px;
        }

        .localisation span {
          font-size: 15px;
        }

        .message {
          margin: 12px 0 0;
          overflow: hidden;
          color: #778496;
          font-size: 14px;
          line-height: 1.45;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .statut {
          margin: 7px 0 0;
          color: #697587;
          font-size: 12px;
        }

        .statut-actif {
          color: #57b987;
        }

        .bouton-envoyer {
          min-width: 112px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border: 1px solid rgba(226, 185, 101, 0.32);
          border-radius: 12px;
          color: #090d12;
          background: linear-gradient(135deg, #e7c176, #b98737);
          box-shadow: 0 10px 28px rgba(191, 139, 55, 0.18);
          cursor: pointer;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .carte-proche:not(.carte-vedette) .bouton-envoyer {
          color: #d8b569;
          background: rgba(216, 170, 82, 0.06);
          box-shadow: none;
        }

        .bouton-envoyer:hover {
          transform: translateY(-1px);
          box-shadow: 0 13px 34px rgba(191, 139, 55, 0.27);
        }

        .bouton-envoyer span {
          font-size: 17px;
        }

        .aucun-resultat {
          padding: 60px 24px;
          text-align: center;
          border: 1px solid rgba(185, 198, 214, 0.09);
          border-radius: 20px;
          background: rgba(11, 23, 38, 0.68);
        }

        .aucun-resultat span {
          color: #d8aa52;
          font-size: 34px;
        }

        .aucun-resultat h2 {
          margin: 12px 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
        }

        .aucun-resultat p {
          margin: 0;
          color: #778496;
          font-size: 14px;
        }

        .colonne-droite {
          align-self: start;
          padding: 32px;
          border: 1px solid rgba(179, 194, 211, 0.1);
          border-radius: 28px;
          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(24, 51, 78, 0.28),
              transparent 46%
            ),
            rgba(6, 15, 26, 0.72);
          box-shadow:
            0 26px 90px rgba(0, 0, 0, 0.28),
            inset 0 1px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(16px);
        }

        .signature-haut {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 22px;
        }

        .signature-haut h2 {
          margin: 0;
          color: #ebe7df;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 500;
        }

        .reseau-actif {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 3px;
          color: #8995a5;
          font-size: 12px;
          white-space: nowrap;
        }

        .reseau-actif span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d1a34e;
          box-shadow: 0 0 13px rgba(209, 163, 78, 0.75);
        }

        .zone-carte {
          min-height: 470px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(181, 195, 211, 0.07);
          border-radius: 22px;
          background:
            linear-gradient(rgba(5, 13, 23, 0.22), rgba(5, 13, 23, 0.68)),
            #050d18;
        }

        .halo-carte {
          width: 360px;
          height: 360px;
          position: absolute;
          border-radius: 50%;
          background: rgba(36, 90, 137, 0.17);
          filter: blur(44px);
        }

        .globe {
          width: 108%;
          max-width: 650px;
          position: absolute;
          top: 48%;
          left: 50%;
          opacity: 0.72;
          filter: brightness(0.76) saturate(0.88) contrast(1.08);
          transform: translate(-50%, -50%);
          object-fit: contain;
        }

        .zone-carte::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              to bottom,
              rgba(3, 10, 19, 0.1),
              transparent 55%,
              rgba(3, 10, 19, 0.92)
            ),
            linear-gradient(
              to right,
              rgba(3, 10, 19, 0.36),
              transparent 30%,
              transparent 70%,
              rgba(3, 10, 19, 0.36)
            );
        }

        .ville {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 11px;
          border: 1px solid rgba(213, 170, 87, 0.16);
          border-radius: 11px;
          background: rgba(5, 14, 25, 0.76);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(9px);
        }

        .ville-paris {
          top: 28%;
          left: 18%;
        }

        .ville-brazzaville {
          right: 14%;
          bottom: 27%;
        }

        .point-ville {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c99b47;
          box-shadow: 0 0 12px rgba(201, 155, 71, 0.7);
        }

        .point-ville.actif {
          background: #edc977;
        }

        .ville strong,
        .ville small {
          display: block;
        }

        .ville strong {
          color: #e9e5dd;
          font-size: 11px;
        }

        .ville small {
          margin-top: 2px;
          color: #768395;
          font-size: 9px;
        }

        .ligne-signature {
          position: absolute;
          z-index: 2;
          height: 1px;
          opacity: 0.5;
          background: linear-gradient(
            90deg,
            transparent,
            #d4a751,
            transparent
          );
          transform-origin: left center;
        }

        .ligne-une {
          width: 230px;
          top: 41%;
          left: 32%;
          transform: rotate(58deg);
        }

        .ligne-deux {
          width: 180px;
          top: 37%;
          left: 37%;
          opacity: 0.2;
          transform: rotate(35deg);
        }

        .legende-carte {
          position: absolute;
          z-index: 4;
          right: 24px;
          bottom: 22px;
          left: 24px;
        }

        .legende-carte span {
          color: #d8aa52;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.24em;
        }

        .legende-carte p {
          max-width: 380px;
          margin: 7px 0 0;
          color: #8995a5;
          font-size: 13px;
          line-height: 1.45;
        }

        .statistiques {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .statistiques article {
          min-height: 112px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 15px;
          border: 1px solid rgba(181, 195, 211, 0.07);
          border-radius: 15px;
          background: rgba(10, 21, 35, 0.65);
        }

        .icone-stat {
          color: #b58a40;
          font-size: 14px;
        }

        .statistiques p,
        .statistiques strong,
        .statistiques small {
          display: block;
        }

        .statistiques p {
          margin: 0;
          color: #6f7c8d;
          font-size: 11px;
        }

        .statistiques strong {
          margin-top: 8px;
          color: #ded9d0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 600;
        }

        .statistiques small {
          margin-top: 5px;
          color: #5e6b7c;
          font-size: 9px;
          line-height: 1.35;
        }

        .securite {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 14px;
          padding: 16px;
          border: 1px solid rgba(181, 195, 211, 0.07);
          border-radius: 15px;
          background: rgba(8, 18, 30, 0.54);
        }

        .bouclier {
          width: 34px;
          height: 34px;
          display: grid;
          flex: 0 0 34px;
          place-items: center;
          border: 1px solid rgba(216, 170, 82, 0.22);
          border-radius: 50%;
          color: #cfa34f;
          font-size: 13px;
        }

        .securite strong {
          color: #c9c5bd;
          font-size: 12px;
        }

        .securite p {
          margin: 4px 0 0;
          color: #667385;
          font-size: 10px;
          line-height: 1.45;
        }

        @media (max-width: 1180px) {
          .page-proches {
            padding: 34px;
          }

          .layout {
            grid-template-columns: 1fr;
          }

          .colonne-droite {
            margin-top: 12px;
          }
        }

        @media (max-width: 720px) {
          .page-proches {
            padding: 24px 16px;
          }

          .entete h1 {
            font-size: 44px;
          }

          .carte-proche,
          .carte-vedette {
            grid-template-columns: auto minmax(0, 1fr);
            padding: 22px 18px;
          }

          .bouton-envoyer {
            grid-column: 1 / -1;
            width: 100%;
          }

          .heure {
            display: none;
          }

          .colonne-droite {
            padding: 20px;
          }

          .signature-haut {
            display: block;
          }

          .reseau-actif {
            margin-top: 13px;
          }

          .zone-carte {
            min-height: 390px;
          }

          .statistiques {
            grid-template-columns: 1fr;
          }

          .statistiques article {
            min-height: auto;
          }
        }
      `}</style>
    </main>
  );
}
