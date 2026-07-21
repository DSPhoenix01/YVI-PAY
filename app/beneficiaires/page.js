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
      <div className="lueur lueur-gauche" />
      <div className="lueur lueur-droite" />

      <section className="interface">
        <div className="colonne-gauche">
          <header className="entete">
            <p className="sur-titre">RELATIONS YVI PAY</p>

            <h1>Vos proches</h1>

            <p className="introduction">
              Votre argent. Vos proches. Sans frontières.
            </p>
          </header>

          <div className="recherche">
            <svg viewBox="0 0 24 24" aria-hidden="true">
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

          <div className="entete-liste">
            <div className="compteur">
              <strong>Votre cercle</strong>
              <span>{prochesFiltres.length} proches</span>
            </div>

            <button type="button" className="ajouter">
              <span>+</span>
              Ajouter un proche
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
                    <span className="badge-principal">Proche principal</span>
                  )}

                  <div className="avatar-zone">
                    <div className="avatar">{proche.initials}</div>

                    <span
                      className={`point-statut ${
                        proche.statut === "En ligne" ? "en-ligne" : ""
                      }`}
                    />
                  </div>

                  <div className="informations">
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
                        proche.statut === "En ligne" ? "statut-en-ligne" : ""
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
          <header className="entete-reseau">
            <div>
              <p className="sur-titre">RÉSEAU INTERNATIONAL</p>
              <h2>Connectés aujourd’hui</h2>
            </div>

            <div className="reseau-actif">
              <span />
              Réseau actif
            </div>
          </header>

          <div className="carte-monde">
            <div className="halo-globe" />

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

            <div className="signature-carte">
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
            <div className="icone-securite">✓</div>

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
          overflow-x: hidden;
          padding: 42px 38px 60px;
          color: #f4efe6;
          background:
            radial-gradient(
              circle at 8% 14%,
              rgba(27, 60, 94, 0.34),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 42%,
              rgba(180, 132, 49, 0.065),
              transparent 28%
            ),
            linear-gradient(135deg, #07111f 0%, #050b13 54%, #080c11 100%);
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        .lueur {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }

        .lueur-gauche {
          width: 420px;
          height: 420px;
          top: 20%;
          left: -240px;
          background: rgba(31, 84, 125, 0.2);
        }

        .lueur-droite {
          width: 350px;
          height: 350px;
          right: -190px;
          bottom: 6%;
          background: rgba(172, 122, 42, 0.11);
        }

        .interface {
          width: min(1520px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.34fr) minmax(400px, 0.76fr);
          gap: 30px;
          position: relative;
          z-index: 1;
        }

        .colonne-gauche,
        .colonne-droite {
          min-width: 0;
        }

        .colonne-gauche {
          padding: 18px 0;
        }

        .entete {
          margin-bottom: 29px;
        }

        .sur-titre {
          margin: 0 0 13px;
          color: #d8aa52;
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.26em;
        }

        .entete h1 {
          margin: 0;
          color: #f7f1e7;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5vw, 72px);
          line-height: 0.98;
          font-weight: 600;
          letter-spacing: -0.04em;
        }

        .introduction {
          margin: 13px 0 0;
          color: #8d99aa;
          font-size: 17px;
          line-height: 1.6;
        }

        .recherche {
          width: 100%;
          height: 56px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          margin-bottom: 30px;
          border: 1px solid rgba(189, 203, 220, 0.11);
          border-radius: 16px;
          background: rgba(14, 27, 43, 0.72);
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.02);
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .recherche:focus-within {
          border-color: rgba(216, 170, 82, 0.42);
          background: rgba(14, 27, 43, 0.92);
        }

        .recherche svg {
          width: 20px;
          flex: 0 0 20px;
          color: #748193;
        }

        .recherche input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          color: #f5f1e8;
          background: transparent;
          font-size: 15px;
        }

        .recherche input::placeholder {
          color: #6e7b8c;
        }

        .entete-liste {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 16px;
        }

        .compteur {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .compteur strong {
          color: #dce2e9;
          font-size: 15px;
        }

        .compteur span {
          color: #687587;
          font-size: 13px;
        }

        .ajouter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 0;
          padding: 8px 4px;
          color: #8995a5;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
        }

        .ajouter span {
          color: #d8aa52;
          font-size: 19px;
        }

        .liste-proches {
          display: grid;
          gap: 13px;
        }

        .carte-proche {
          width: 100%;
          min-height: 124px;
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) 108px;
          align-items: center;
          gap: 17px;
          padding: 22px;
          overflow: hidden;
          border: 1px solid rgba(185, 198, 214, 0.08);
          border-radius: 19px;
          background: linear-gradient(
            135deg,
            rgba(14, 27, 43, 0.82),
            rgba(8, 17, 29, 0.9)
          );
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.16);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .carte-proche:hover {
          transform: translateY(-2px);
          border-color: rgba(216, 170, 82, 0.22);
          background: linear-gradient(
            135deg,
            rgba(17, 32, 50, 0.94),
            rgba(8, 18, 30, 0.96)
          );
        }

        .carte-vedette {
          min-height: 154px;
          padding: 27px 24px;
          border-color: rgba(216, 170, 82, 0.34);
          background:
            radial-gradient(
              circle at 84% 44%,
              rgba(216, 170, 82, 0.075),
              transparent 31%
            ),
            linear-gradient(
              135deg,
              rgba(20, 38, 58, 0.99),
              rgba(8, 18, 31, 0.98)
            );
          box-shadow:
            0 22px 62px rgba(0, 0, 0, 0.27),
            inset 0 1px rgba(255, 255, 255, 0.03);
        }

        .badge-principal {
          position: absolute;
          top: 0;
          right: 22px;
          padding: 6px 13px;
          border-radius: 0 0 10px 10px;
          color: #d7b167;
          background: rgba(216, 170, 82, 0.1);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .avatar-zone {
          position: relative;
        }

        .avatar {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(216, 170, 82, 0.25);
          border-radius: 50%;
          color: #dfb65f;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(216, 170, 82, 0.12),
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
          border-color: rgba(225, 184, 98, 0.38);
          font-size: 19px;
          box-shadow: 0 0 28px rgba(204, 151, 63, 0.08);
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

        .informations {
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
          color: #f1ede5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.2;
          font-weight: 600;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .carte-vedette .ligne-nom h2 {
          color: #fff8eb;
          font-size: 24px;
        }

        .heure {
          flex: 0 0 auto;
          color: #667487;
          font-size: 12px;
        }

        .localisation {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 6px 0 0;
          color: #96a2b1;
          font-size: 14px;
        }

        .localisation span {
          font-size: 15px;
        }

        .message {
          margin: 11px 0 0;
          overflow: hidden;
          color: #768395;
          font-size: 14px;
          line-height: 1.4;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .statut {
          margin: 7px 0 0;
          color: #687587;
          font-size: 12px;
        }

        .statut-en-ligne {
          color: #52b985;
        }

        .bouton-envoyer {
          width: 108px;
          height: 43px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid rgba(226, 185, 101, 0.3);
          border-radius: 12px;
          color: #0a0d11;
          background: linear-gradient(135deg, #e4bd70, #b98737);
          box-shadow: 0 10px 26px rgba(191, 139, 55, 0.17);
          cursor: pointer;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .carte-proche:not(.carte-vedette) .bouton-envoyer {
          color: #d5b267;
          background: rgba(216, 170, 82, 0.055);
          box-shadow: none;
        }

        .bouton-envoyer:hover {
          transform: translateY(-1px);
          box-shadow: 0 13px 32px rgba(191, 139, 55, 0.25);
        }

        .bouton-envoyer span {
          font-size: 16px;
        }

        .aucun-resultat {
          padding: 58px 24px;
          text-align: center;
          border: 1px solid rgba(185, 198, 214, 0.09);
          border-radius: 20px;
          background: rgba(11, 23, 38, 0.68);
        }

        .aucun-resultat > span {
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
          padding: 27px;
          border: 1px solid rgba(179, 194, 211, 0.09);
          border-radius: 27px;
          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(24, 51, 78, 0.21),
              transparent 45%
            ),
            rgba(6, 15, 26, 0.66);
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.25),
            inset 0 1px rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
        }

        .entete-reseau {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 21px;
        }

        .entete-reseau h2 {
          margin: 0;
          color: #e7e2da;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          line-height: 1.12;
          font-weight: 500;
        }

        .reseau-actif {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 3px;
          color: #8390a0;
          font-size: 12px;
          white-space: nowrap;
        }

        .reseau-actif span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #cca04c;
          box-shadow: 0 0 12px rgba(204, 160, 76, 0.65);
        }

        .carte-monde {
          min-height: 450px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(181, 195, 211, 0.065);
          border-radius: 21px;
          background: #050d18;
        }

        .halo-globe {
          width: 330px;
          height: 330px;
          position: absolute;
          border-radius: 50%;
          background: rgba(34, 86, 130, 0.11);
          filter: blur(48px);
        }

        .globe {
          width: 111%;
          max-width: 610px;
          position: absolute;
          top: 47%;
          left: 50%;
          opacity: 0.59;
          filter: brightness(0.66) saturate(0.82) contrast(1.08);
          transform: translate(-50%, -50%);
          object-fit: contain;
        }

        .carte-monde::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              to bottom,
              rgba(3, 10, 19, 0.13),
              transparent 48%,
              rgba(3, 10, 19, 0.93)
            ),
            linear-gradient(
              to right,
              rgba(3, 10, 19, 0.42),
              transparent 35%,
              transparent 68%,
              rgba(3, 10, 19, 0.42)
            );
        }

        .ville {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border: 1px solid rgba(213, 170, 87, 0.14);
          border-radius: 10px;
          background: rgba(5, 14, 25, 0.78);
          box-shadow: 0 9px 26px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
        }

        .ville-paris {
          top: 29%;
          left: 18%;
        }

        .ville-brazzaville {
          right: 13%;
          bottom: 27%;
        }

        .point-ville {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c99b47;
          box-shadow: 0 0 10px rgba(201, 155, 71, 0.6);
        }

        .point-ville.actif {
          background: #e5bf6c;
        }

        .ville strong,
        .ville small {
          display: block;
        }

        .ville strong {
          color: #e7e2da;
          font-size: 11px;
        }

        .ville small {
          margin-top: 2px;
          color: #738093;
          font-size: 9px;
        }

        .signature-carte {
          position: absolute;
          z-index: 4;
          right: 23px;
          bottom: 21px;
          left: 23px;
        }

        .signature-carte span {
          color: #d4a54d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.24em;
        }

        .signature-carte p {
          margin: 7px 0 0;
          color: #818d9d;
          font-size: 12px;
          line-height: 1.45;
        }

        .statistiques {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 9px;
          margin-top: 13px;
        }

        .statistiques article {
          min-height: 102px;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 14px 12px;
          border: 1px solid rgba(181, 195, 211, 0.065);
          border-radius: 14px;
          background: rgba(10, 21, 35, 0.54);
        }

        .icone-stat {
          color: #ae853d;
          font-size: 13px;
        }

        .statistiques p,
        .statistiques strong,
        .statistiques small {
          display: block;
        }

        .statistiques p {
          margin: 0;
          color: #697688;
          font-size: 10px;
        }

        .statistiques strong {
          margin-top: 7px;
          color: #d8d3ca;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          line-height: 1.1;
          font-weight: 600;
        }

        .statistiques small {
          margin-top: 5px;
          color: #586577;
          font-size: 8px;
          line-height: 1.35;
        }

        .securite {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 13px;
          padding: 14px 15px;
          border: 1px solid rgba(181, 195, 211, 0.06);
          border-radius: 14px;
          background: rgba(8, 18, 30, 0.45);
        }

        .icone-securite {
          width: 32px;
          height: 32px;
          display: grid;
          flex: 0 0 32px;
          place-items: center;
          border: 1px solid rgba(216, 170, 82, 0.19);
          border-radius: 50%;
          color: #c79b48;
          font-size: 12px;
        }

        .securite strong {
          color: #c2beb6;
          font-size: 11px;
        }

        .securite p {
          margin: 4px 0 0;
          color: #606d7e;
          font-size: 9px;
          line-height: 1.4;
        }

        @media (max-width: 1240px) {
          .page-proches {
            padding: 32px 26px 50px;
          }

          .interface {
            grid-template-columns: minmax(0, 1.2fr) minmax(370px, 0.8fr);
            gap: 24px;
          }

          .carte-proche {
            grid-template-columns: auto minmax(0, 1fr) 100px;
            padding: 20px;
          }

          .bouton-envoyer {
            width: 100px;
          }
        }

        @media (max-width: 1040px) {
          .interface {
            grid-template-columns: 1fr;
          }

          .colonne-droite {
            margin-top: 10px;
          }

          .carte-monde {
            min-height: 500px;
          }
        }

        @media (max-width: 700px) {
          .page-proches {
            padding: 24px 15px 40px;
          }

          .entete h1 {
            font-size: 45px;
          }

          .introduction {
            font-size: 15px;
          }

          .entete-liste {
            align-items: flex-start;
          }

          .ajouter {
            font-size: 12px;
          }

          .carte-proche,
          .carte-vedette {
            grid-template-columns: auto minmax(0, 1fr);
            padding: 22px 17px;
          }

          .bouton-envoyer {
            width: 100%;
            grid-column: 1 / -1;
          }

          .heure {
            display: none;
          }

          .colonne-droite {
            padding: 19px;
          }

          .entete-reseau {
            display: block;
          }

          .reseau-actif {
            margin-top: 13px;
          }

          .carte-monde {
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
