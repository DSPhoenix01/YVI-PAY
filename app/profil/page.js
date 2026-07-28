"use client";

import { useState } from "react";
import Link from "next/link";

const Icon = ({ children, size = 22, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const HomeIcon = () => (
  <Icon>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 10v10h5v-6h4v6h5V10" />
  </Icon>
);

const SendIcon = () => (
  <Icon>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Icon>
);

const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

const UsersIcon = () => (
  <Icon>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const DocumentIcon = () => (
  <Icon>
    <path d="M6 2h8l4 4v16H6Z" />
    <path d="M14 2v5h5" />
    <path d="M9 13h6M9 17h6M9 9h2" />
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

const BellIcon = () => (
  <Icon>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </Icon>
);

const LogoutIcon = () => (
  <Icon>
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
    <path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
  </Icon>
);

const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
  </Icon>
);

const PinIcon = () => (
  <Icon>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

const ShieldIcon = () => (
  <Icon>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const LockIcon = () => (
  <Icon>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Icon>
);

const MobileIcon = () => (
  <Icon>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M10 18h4" />
  </Icon>
);

const SettingsIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 8.97 19.35a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3v-4h.09A1.7 1.7 0 0 0 4.65 8.94a1.7 1.7 0 0 0-.34-1.88L4.25 7 7.08 4.17l.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 10.05 3V3h4v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06L19.85 7l-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
  </Icon>
);

const GlobeIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </Icon>
);

const EuroIcon = () => (
  <Icon>
    <path d="M18 7a7 7 0 1 0 0 10" />
    <path d="M4 10h10M4 14h9" />
  </Icon>
);

const CrownIcon = () => (
  <Icon>
    <path d="m3 6 4 4 5-7 5 7 4-4-2 12H5Z" />
    <path d="M5 21h14" />
  </Icon>
);

const ChartIcon = () => (
  <Icon>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20V7" />
  </Icon>
);

const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </Icon>
);

const HeadsetIcon = () => (
  <Icon>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M18 19h1a2 2 0 0 0 2-2v-3h-4v5h1Z" />
    <path d="M6 19H5a2 2 0 0 1-2-2v-3h4v5H6Z" />
    <path d="M18 19c0 2-2 2-4 2" />
  </Icon>
);

const PencilIcon = () => (
  <Icon size={19}>
    <path d="m4 20 4.5-1 10-10-3.5-3.5-10 10Z" />
    <path d="m13.5 7 3.5 3.5" />
  </Icon>
);

const ChevronIcon = () => (
  <Icon size={18}>
    <path d="m9 18 6-6-6-6" />
  </Icon>
);

const CheckIcon = () => (
  <Icon size={16}>
    <path d="m5 12 4 4L19 6" />
  </Icon>
);

export default function ProfilPage() {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("Français");
  const [currency, setCurrency] = useState("EUR - Euro");
  const [showEdit, setShowEdit] = useState(false);

  return (
    <main className="profil-page">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-white">YVI</span>
          <span className="brand-gold">PAY</span>
        </div>

        <div className="brand-line" />

        <nav className="sidebar-nav">
          <Link href="/dashboard" className="nav-link">
            <HomeIcon />
            <span>Accueil</span>
          </Link>

          <Link href="/envoyer" className="nav-link">
            <SendIcon />
            <span>Envoyer de l’argent</span>
          </Link>

          <Link href="/historique" className="nav-link">
            <ClockIcon />
            <span>Activités</span>
          </Link>

          <Link href="/beneficiaires" className="nav-link">
            <UsersIcon />
            <span>Bénéficiaires</span>
          </Link>

          <Link href="/historique" className="nav-link">
            <DocumentIcon />
            <span>Historique</span>
          </Link>

          <Link href="/profil" className="nav-link active">
            <UserIcon />
            <span>Profil</span>
          </Link>
        </nav>
          <section className="sidebar-signature">
          <div className="signature-line">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="signature-title">
            chaque geste mérite l&apos;excellence
          </p>

          <div className="signature-line">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="signature-slogan">
            Votre argent.
            <br />
            Vos proches,
            <br />
            Sans frontières
          </p>

         <div className="mini-globe">
  <img
    src="/mini-globe-profile.png"
    alt="Globe YVI PAY"
    className="mini-globe-image"
  />
</div>
        </section>

        <section className="help-card">
          <div className="help-heading">
            <HeadsetIcon />
            <strong>Besoin d&apos;aide ?</strong>
          </div>

          <p>Notre équipe est disponible 24h/24</p>

          <button type="button" className="support-link">
            Contacter le support
            <span>→</span>
          </button>
        </section>
      </aside>

      <section className="main-content">
        <header className="page-header">
          <div>
            <h1>Mon profil</h1>
            <span className="title-accent" />

            <p>
              Gérez vos informations personnelles, votre sécurité et vos
              préférences.
            </p>
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              <BellIcon />
              <span className="notification-dot" />
            </button>

            <button type="button" className="logout-button">
              <span>Se déconnecter</span>
              <LogoutIcon />
            </button>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="profile-card">
            <div className="profile-pattern" />

            <div className="profile-top">
              <div className="avatar-wrap">
                <div className="avatar-circle">
                  <span>NA</span>
                </div>

                <button
                  type="button"
                  className="avatar-edit"
                  onClick={() => setShowEdit(true)}
                  aria-label="Modifier le profil"
                >
                  <PencilIcon />
                </button>
              </div>

              <div className="profile-info">
                <h2>Nathalie</h2>

                <div className="verified-row">
                  <span className="verified-badge">
                    <ShieldIcon />
                    COMPTE VÉRIFIÉ
                  </span>

                  <span className="verified-dot" />
                </div>

                <div className="profile-detail">
                  <MailIcon />
                  <span>nathalie@yvipay.com</span>
                </div>

                <div className="profile-detail">
                  <PhoneIcon />
                  <span>+33 6 12 34 56 78</span>
                </div>

                <div className="profile-detail">
                  <PinIcon />
                  <span className="country-flag">🇫🇷</span>
                  <span>France</span>
                </div>
              </div>
            </div>

            <div className="profile-divider" />

            <div className="protection-block">
              <div className="protection-icon">
                <ShieldIcon />
              </div>

              <div>
                <strong>Votre compte est sécurisé</strong>
                <p>
                  Toutes vos informations sont
                  <br />
                  protégées et chiffrées.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="edit-main-button"
              onClick={() => setShowEdit(true)}
            >
              <PencilIcon />
              Modifier mes informations
            </button>
          </section>

          <div className="right-column">
            <section className="panel security-panel">
              <div className="panel-title">
                <ShieldIcon />
                <h3>SÉCURITÉ</h3>
              </div>

              <div className="panel-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <LockIcon />
                </span>

                <div className="setting-copy">
                  <strong>Mot de passe</strong>
                  <small>Dernière modification il y a 32 jours</small>
                </div>

                <button type="button" className="outline-action">
                  Modifier
                  <ChevronIcon />
                </button>
              </div>

              <div className="line-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <MobileIcon />
                </span>

                <div className="setting-copy">
                  <strong>Authentification renforcée</strong>
                  <small>Connexion sécurisée avec code SMS</small>
                </div>

                <span className="status-pill">
                  Activée
                  <span className="status-check">
                    <CheckIcon />
                  </span>
                </span>
              </div>

              <div className="line-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <ShieldIcon />
                </span>

                <div className="setting-copy">
                  <strong>Protection du compte</strong>
                  <small>Surveillance 24h/24 en temps réel</small>
                </div>

                <span className="status-pill">
                  Active
                  <span className="status-check">
                    <CheckIcon />
                  </span>
                </span>
              </div>
            </section>
              <section className="panel preferences-panel">
              <div className="panel-title">
                <SettingsIcon />
                <h3>PRÉFÉRENCES</h3>
              </div>

              <div className="panel-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <BellIcon />
                </span>

                <div className="setting-copy">
                  <strong>Notifications</strong>
                  <small>Recevoir les alertes et confirmations</small>
                </div>

                <button
                  type="button"
                  className={`toggle-button ${
                    notifications ? "enabled" : ""
                  }`}
                  onClick={() =>
                    setNotifications((current) => !current)
                  }
                  aria-label="Activer ou désactiver les notifications"
                >
                  <span />
                </button>
              </div>

              <div className="line-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <GlobeIcon />
                </span>

                <div className="setting-copy">
                  <strong>Langue</strong>
                  <small>Choisissez votre langue d&apos;affichage</small>
                </div>

                <label className="select-wrap">
                  <select
                    value={language}
                    onChange={(event) =>
                      setLanguage(event.target.value)
                    }
                  >
                    <option>Français</option>
                    <option>English</option>
                  </select>

                  <span className="select-chevron">⌄</span>
                </label>
              </div>

              <div className="line-separator" />

              <div className="setting-line">
                <span className="setting-main-icon">
                  <EuroIcon />
                </span>

                <div className="setting-copy">
                  <strong>Devise principale</strong>
                  <small>Devise utilisée par défaut</small>
                </div>

                <label className="select-wrap">
                  <select
                    value={currency}
                    onChange={(event) =>
                      setCurrency(event.target.value)
                    }
                  >
                    <option>EUR - Euro</option>
                    <option>USD - Dollar</option>
                    <option>XAF - Franc CFA</option>
                  </select>

                  <span className="select-chevron">⌄</span>
                </label>
              </div>
            </section>
          </div>
        </div>

        <section className="account-panel">
          <div className="account-title">
            <CrownIcon />
            <h3>COMPTE YVI PAY</h3>
          </div>

          <div className="account-separator" />

          <div className="account-grid">
            <div className="account-item">
              <span className="account-icon">
                <UserIcon />
              </span>

              <div>
                <small>Niveau du compte</small>
                <strong>Premium</strong>
                <p>Accès complet à toutes les fonctionnalités</p>
              </div>
            </div>

            <div className="account-divider" />

            <div className="account-item">
              <span className="account-icon">
                <ChartIcon />
              </span>

              <div>
                <small>Plafond de transfert</small>
                <strong>25 000 € / jour</strong>
                <p>Plafond actuel de votre compte</p>
              </div>
            </div>

            <div className="account-divider" />

            <div className="account-item">
              <span className="account-icon">
                <CalendarIcon />
              </span>

              <div>
                <small>Membre depuis</small>
                <strong>12 mars 2024</strong>
                <p>Plus d&apos;1 an avec YVI PAY</p>
              </div>
            </div>

            <div className="account-divider" />

            <div className="account-item documents-item">
              <span className="account-icon">
                <DocumentIcon />
              </span>

              <div>
                <small>Vos justificatifs</small>
                <p>Documents d&apos;identité et justificatifs enregistrés</p>

                <button type="button" className="documents-button">
                  Voir mes justificatifs
                  <ChevronIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="security-footer">
          <span className="footer-line" />
          <LockIcon />
          <p>
            YVI PAY est agréé et sécurisé
            <span>•</span>
            Vos données sont protégées selon les normes les plus strictes
          </p>
          <span className="footer-line" />
        </footer>
      </section>

      {showEdit && (
        <div
          className="modal-overlay"
          onClick={() => setShowEdit(false)}
        >
          <div
            className="edit-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowEdit(false)}
              aria-label="Fermer"
            >
              ×
            </button>

            <span className="modal-label">PROFIL YVI PAY</span>
            <h2>Modifier mes informations</h2>

            <div className="modal-form">
              <label>
                <span>Prénom</span>
                <input defaultValue="Nathalie" />
              </label>

              <label>
                <span>Email</span>
                <input defaultValue="nathalie@yvipay.com" />
              </label>

              <label>
                <span>Téléphone</span>
                <input defaultValue="+33 6 12 34 56 78" />
              </label>

              <label>
                <span>Pays</span>
                <input defaultValue="France" />
              </label>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="modal-secondary"
                onClick={() => setShowEdit(false)}
              >
                Annuler
              </button>

              <button
                type="button"
                className="modal-primary"
                onClick={() => setShowEdit(false)}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
              :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          background: #03070d;
        }

        :global(body) {
          margin: 0;
          background:
            radial-gradient(
              circle at 78% 14%,
              rgba(199, 159, 84, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 35% 90%,
              rgba(27, 54, 84, 0.2),
              transparent 34%
            ),
            #03070d;
          color: #f7f3ea;
          font-family:
            Inter, Arial, Helvetica, sans-serif;
        }

        :global(button),
        :global(input),
        :global(select) {
          font: inherit;
        }

        :global(button) {
          cursor: pointer;
        }

        .profil-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.01),
              transparent 38%
            );
        }

        .sidebar {
          position: fixed;
          inset: 0 auto 0 0;
          width: 270px;
          min-height: 100vh;
          padding: 30px 22px 24px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(216, 180, 108, 0.13);
          background:
            radial-gradient(
              circle at 50% 82%,
              rgba(190, 145, 70, 0.08),
              transparent 26%
            ),
            linear-gradient(
              180deg,
              #07101a 0%,
              #050b12 55%,
              #03070c 100%
            );
          overflow-y: auto;
          z-index: 30;
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 4px 0 24px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 500;
          letter-spacing: 8px;
        }

        .brand-white {
          color: #f9f7f1;
        }

        .brand-gold {
          color: #d4ad62;
        }

        .brand-line {
          height: 1px;
          margin-bottom: 24px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(216, 180, 108, 0.62),
              transparent
            );
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-link {
          position: relative;
          min-height: 48px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid transparent;
          border-radius: 13px;
          color: rgba(238, 240, 243, 0.58);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.1px;
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .nav-link:hover {
          color: #f9f5eb;
          border-color: rgba(215, 177, 103, 0.16);
          background: rgba(255, 255, 255, 0.025);
          transform: translateX(2px);
        }

        .nav-link.active {
          color: #f4d28d;
          border-color: rgba(214, 173, 94, 0.25);
          background:
            linear-gradient(
              90deg,
              rgba(204, 160, 80, 0.14),
              rgba(204, 160, 80, 0.035)
            );
          box-shadow:
            inset 3px 0 0 #d5ab5e,
            0 12px 30px rgba(0, 0, 0, 0.16);
        }

        .nav-link svg {
          flex: 0 0 auto;
          width: 19px;
          height: 19px;
        }

        .sidebar-signature {
          margin-top: auto;
          padding: 32px 10px 18px;
          text-align: center;
        }

        .signature-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: #cda65c;
        }

        .signature-line span {
          width: 52px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(216, 177, 101, 0.7)
            );
        }

        .signature-line span:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(216, 177, 101, 0.7),
              transparent
            );
        }

        .signature-line b {
          font-size: 9px;
          font-weight: 400;
          text-shadow: 0 0 10px rgba(212, 170, 89, 0.75);
        }

        .signature-title {
          margin: 12px 0;
          color: rgba(229, 210, 171, 0.7);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 10px;
          font-style: italic;
          letter-spacing: 0.7px;
        }

        .signature-slogan {
          margin: 12px 0 16px;
          color: #f4efe5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          line-height: 1.45;
          letter-spacing: 0.3px;
        }

        .signature-slogan::first-line {
          color: #dcb86f;
        }

      .mini-globe {
  width: 100%;
  height: 150px;
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.mini-globe-image {
  width: 340px;
  max-width: none;
  display: block;
  object-fit: contain;
  transform: translateY(-6px);
  user-select: none;
  pointer-events: none;
  filter:
    drop-shadow(0 0 12px rgba(225, 178, 82, 0.28))
    drop-shadow(0 0 24px rgba(35, 90, 165, 0.22));
}

        .help-card {
          margin-top: 4px;
          padding: 16px;
          border: 1px solid rgba(218, 180, 106, 0.15);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              rgba(211, 169, 91, 0.06),
              rgba(255, 255, 255, 0.012)
            );
        }

        .help-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e4bd70;
        }

        .help-heading svg {
          width: 18px;
          height: 18px;
        }

        .help-heading strong {
          color: #f5f0e7;
          font-size: 12px;
          font-weight: 600;
        }

        .help-card p {
          margin: 9px 0 12px;
          color: rgba(232, 235, 239, 0.45);
          font-size: 10px;
          line-height: 1.5;
        }

        .support-link {
          width: 100%;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 0;
          background: transparent;
          color: #d7ad60;
          font-size: 10px;
        }

        .support-link span {
          font-size: 16px;
        }

        .main-content {
          grid-column: 2;
          min-width: 0;
          padding: 38px clamp(28px, 4vw, 66px) 30px;
        }

        .page-header {
          margin-bottom: 30px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }

        .page-header h1 {
          margin: 0;
          color: #faf8f3;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 3vw, 43px);
          font-weight: 400;
          letter-spacing: -0.8px;
        }

        .title-accent {
          display: block;
          width: 42px;
          height: 2px;
          margin-top: 12px;
          background:
            linear-gradient(
              90deg,
              #e2bb70,
              rgba(226, 187, 112, 0)
            );
          box-shadow: 0 0 12px rgba(221, 177, 92, 0.4);
        }

        .page-header p {
          margin: 14px 0 0;
          color: rgba(235, 238, 241, 0.48);
          font-size: 13px;
          line-height: 1.6;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification-button,
        .logout-button {
          border: 1px solid rgba(218, 180, 105, 0.16);
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.035),
              rgba(255, 255, 255, 0.012)
            );
          color: rgba(242, 240, 234, 0.78);
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .notification-button:hover,
        .logout-button:hover {
          color: #e4bd70;
          border-color: rgba(218, 180, 105, 0.38);
          background: rgba(210, 166, 83, 0.07);
        }

        .notification-button {
          position: relative;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 13px;
        }

        .notification-button svg {
          width: 19px;
          height: 19px;
        }

        .notification-dot {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 6px;
          height: 6px;
          border: 1px solid #08101a;
          border-radius: 50%;
          background: #d8ac5d;
          box-shadow: 0 0 8px rgba(216, 172, 93, 0.8);
        }

        .logout-button {
          height: 44px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 13px;
          font-size: 12px;
        }

        .logout-button svg {
          width: 17px;
          height: 17px;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.83fr) minmax(520px, 1.55fr);
          gap: 22px;
          align-items: stretch;
        }

        .profile-card,
        .panel,
        .account-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(218, 180, 105, 0.14);
          background:
            linear-gradient(
              145deg,
              rgba(13, 25, 38, 0.96),
              rgba(5, 11, 18, 0.98)
            );
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
        }

        .profile-card {
          min-height: 100%;
          padding: 30px;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
        }

        .profile-card::after {
          content: "";
          position: absolute;
          right: -75px;
          top: -80px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(211, 169, 90, 0.09),
              transparent 68%
            );
          pointer-events: none;
        }

        .profile-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.16;
          background-image:
            linear-gradient(
              rgba(223, 185, 110, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(223, 185, 110, 0.035) 1px,
              transparent 1px
            );
          background-size: 32px 32px;
          mask-image:
            linear-gradient(
              145deg,
              black,
              transparent 72%
            );
        }

        .profile-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .avatar-wrap {
          position: relative;
          flex: 0 0 auto;
        }

        .avatar-circle {
          width: 112px;
          height: 112px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(226, 189, 116, 0.5);
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 34% 25%,
              rgba(236, 204, 140, 0.2),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #1b2836,
              #0a111a
            );
          box-shadow:
            0 0 0 7px rgba(210, 169, 89, 0.035),
            0 18px 35px rgba(0, 0, 0, 0.32),
            inset 0 0 25px rgba(208, 166, 83, 0.06);
        }

        .avatar-circle span {
          color: #e7c37c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          letter-spacing: 2px;
        }

        .avatar-edit {
          position: absolute;
          right: -2px;
          bottom: 4px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 2px solid #0b141f;
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              #e1bd74,
              #b98b3d
            );
          color: #0a1017;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
        }

        .avatar-edit:hover {
          filter: brightness(1.08);
        }

        .profile-info {
          min-width: 0;
        }

        .profile-info h2 {
          margin: 0 0 10px;
          color: #faf8f1;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 400;
        }

        .verified-row {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 10px;
          border: 1px solid rgba(202, 161, 81, 0.22);
          border-radius: 999px;
          background: rgba(204, 163, 80, 0.075);
          color: #dabb78;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .verified-badge svg {
          width: 13px;
          height: 13px;
        }

        .verified-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #64c99a;
          box-shadow: 0 0 9px rgba(93, 205, 152, 0.7);
        }

        .profile-detail {
          margin-top: 11px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(237, 239, 242, 0.6);
          font-size: 11px;
        }

        .profile-detail svg {
          width: 16px;
          height: 16px;
          color: #caa257;
          flex: 0 0 auto;
        }

        .profile-detail span:last-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .country-flag {
          font-size: 15px;
        }

        .profile-divider,
        .panel-separator,
        .account-separator,
        .line-separator {
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(212, 173, 98, 0.05),
              rgba(212, 173, 98, 0.25),
              rgba(212, 173, 98, 0.05)
            );
        }

        .profile-divider {
          margin: 28px 0 24px;
        }

        .protection-block {
          position: relative;
          z-index: 1;
          padding: 17px;
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(99, 198, 150, 0.12);
          border-radius: 15px;
          background:
            linear-gradient(
              90deg,
              rgba(72, 166, 122, 0.07),
              rgba(255, 255, 255, 0.012)
            );
        }

        .protection-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border: 1px solid rgba(91, 204, 148, 0.18);
          border-radius: 11px;
          background: rgba(79, 177, 128, 0.08);
          color: #69c99b;
        }

        .protection-icon svg {
          width: 19px;
          height: 19px;
        }

        .protection-block strong {
          color: #edf4ef;
          font-size: 11px;
          font-weight: 600;
        }

        .protection-block p {
          margin: 5px 0 0;
          color: rgba(226, 236, 230, 0.42);
          font-size: 9px;
          line-height: 1.45;
        }

        .edit-main-button {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 48px;
          margin-top: auto;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(239, 203, 131, 0.35);
          border-radius: 14px;
          background:
            linear-gradient(
              135deg,
              #d8b267,
              #b68439
            );
          color: #080d13;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2px;
          box-shadow:
            0 14px 28px rgba(157, 112, 42, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition:
            transform 0.25s ease,
            filter 0.25s ease;
        }

        .edit-main-button:hover {
          transform: translateY(-1px);
          filter: brightness(1.06);
        }

        .edit-main-button svg {
          width: 17px;
          height: 17px;
        }

        .right-column {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 22px;
        }

        .panel {
          padding: 24px 26px;
          border-radius: 20px;
        }

        .panel-title,
        .account-title {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .panel-title svg,
        .account-title svg {
          width: 18px;
          height: 18px;
          color: #d3a95c;
        }

        .panel-title h3,
        .account-title h3 {
          margin: 0;
          color: #ead5aa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .panel-separator {
          margin: 16px 0 4px;
        }

        .setting-line {
          min-height: 68px;
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr) auto;
          align-items: center;
          gap: 13px;
        }

        .setting-main-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(209, 169, 92, 0.14);
          border-radius: 10px;
          background: rgba(211, 169, 89, 0.045);
          color: #cda357;
        }

        .setting-main-icon svg {
          width: 17px;
          height: 17px;
        }

        .setting-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .setting-copy strong {
          color: rgba(249, 247, 241, 0.88);
          font-size: 11px;
          font-weight: 600;
        }

        .setting-copy small {
          color: rgba(227, 231, 235, 0.37);
          font-size: 9px;
          line-height: 1.4;
        }

        .outline-action {
          height: 34px;
          padding: 0 10px 0 13px;
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(216, 177, 101, 0.2);
          border-radius: 10px;
          background: rgba(211, 169, 91, 0.035);
          color: #d4ae67;
          font-size: 9px;
        }

        .outline-action:hover {
          border-color: rgba(216, 177, 101, 0.42);
          background: rgba(211, 169, 91, 0.08);
        }

        .outline-action svg {
          width: 13px;
          height: 13px;
        }

        .status-pill {
          min-width: 75px;
          height: 30px;
          padding: 0 7px 0 11px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          border: 1px solid rgba(76, 195, 138, 0.16);
          border-radius: 999px;
          background: rgba(64, 176, 119, 0.07);
          color: #69c99a;
          font-size: 9px;
        }

        .status-check {
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(85, 195, 141, 0.14);
        }

        .status-check svg {
          width: 11px;
          height: 11px;
        }

        .line-separator {
          opacity: 0.65;
        }

        .toggle-button {
          width: 42px;
          height: 23px;
          padding: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .toggle-button span {
          display: block;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: rgba(236, 238, 240, 0.65);
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .toggle-button.enabled {
          border-color: rgba(219, 179, 101, 0.34);
          background:
            linear-gradient(
              90deg,
              #b8863a,
              #d9b267
            );
        }

        .toggle-button.enabled span {
          transform: translateX(18px);
          background: #fff6df;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .select-wrap {
          position: relative;
          min-width: 132px;
        }

        .select-wrap select {
          width: 100%;
          height: 34px;
          padding: 0 30px 0 12px;
          appearance: none;
          border: 1px solid rgba(216, 177, 101, 0.18);
          border-radius: 10px;
          outline: none;
          background: #0b141e;
          color: #d6b36e;
          font-size: 9px;
        }

        .select-wrap select:focus {
          border-color: rgba(216, 177, 101, 0.45);
        }

        .select-chevron {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-58%);
          color: #d4aa5d;
          font-size: 15px;
          pointer-events: none;
        }

        .account-panel {
          margin-top: 22px;
          padding: 24px 28px 27px;
          border-radius: 21px;
        }

        .account-separator {
          margin: 16px 0 23px;
        }

        .account-grid {
          display: grid;
          grid-template-columns:
            minmax(150px, 1fr)
            1px
            minmax(170px, 1.15fr)
            1px
            minmax(150px, 1fr)
            1px
            minmax(190px, 1.25fr);
          align-items: stretch;
          gap: 22px;
        }

        .account-item {
          min-width: 0;
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .account-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border: 1px solid rgba(210, 170, 93, 0.15);
          border-radius: 11px;
          background: rgba(210, 170, 93, 0.045);
          color: #cea559;
        }

        .account-icon svg {
          width: 17px;
          height: 17px;
        }

        .account-item > div {
          min-width: 0;
        }

        .account-item small {
          display: block;
          margin-bottom: 7px;
          color: rgba(227, 231, 235, 0.38);
          font-size: 8px;
          letter-spacing: 0.5px;
        }

        .account-item strong {
          display: block;
          color: #f3e7cd;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          font-weight: 400;
        }

        .account-item p {
          margin: 7px 0 0;
          color: rgba(227, 231, 235, 0.34);
          font-size: 8px;
          line-height: 1.45;
        }

        .account-divider {
          width: 1px;
          background:
            linear-gradient(
              180deg,
              transparent,
              rgba(211, 170, 93, 0.22),
              transparent
            );
        }

        .documents-button {
          min-height: 31px;
          margin-top: 10px;
          padding: 0 9px 0 11px;
          display: flex;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(216, 177, 101, 0.2);
          border-radius: 9px;
          background: rgba(211, 169, 91, 0.045);
          color: #d8b36c;
          font-size: 8px;
        }

        .documents-button:hover {
          border-color: rgba(216, 177, 101, 0.4);
          background: rgba(211, 169, 91, 0.09);
        }

        .documents-button svg {
          width: 12px;
          height: 12px;
        }

        .security-footer {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(226, 229, 232, 0.25);
        }

        .security-footer svg {
          width: 13px;
          height: 13px;
          color: rgba(209, 170, 95, 0.45);
        }

        .security-footer p {
          margin: 0;
          text-align: center;
          font-size: 8px;
          letter-spacing: 0.3px;
        }

        .security-footer p span {
          margin: 0 8px;
          color: #b98c42;
        }

        .footer-line {
          width: 70px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(208, 167, 91, 0.22)
            );
        }

        .footer-line:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(208, 167, 91, 0.22),
              transparent
            );
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          padding: 24px;
          display: grid;
          place-items: center;
          background: rgba(0, 3, 7, 0.78);
          backdrop-filter: blur(12px);
        }

        .edit-modal {
          position: relative;
          width: min(520px, 100%);
          padding: 32px;
          border: 1px solid rgba(217, 178, 102, 0.24);
          border-radius: 23px;
          background:
            radial-gradient(
              circle at 100% 0,
              rgba(213, 170, 87, 0.11),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #0d1925,
              #060c13
            );
          box-shadow:
            0 35px 90px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.035);
        }

        .modal-close {
          position: absolute;
          top: 17px;
          right: 17px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(216, 177, 101, 0.15);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
          color: rgba(244, 241, 234, 0.65);
          font-size: 22px;
          line-height: 1;
        }

        .modal-label {
          color: #d4aa5f;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .edit-modal h2 {
          margin: 10px 0 24px;
          color: #faf7ef;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 400;
        }

        .modal-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .modal-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modal-form label span {
          color: rgba(234, 236, 239, 0.48);
          font-size: 9px;
          letter-spacing: 0.4px;
        }

        .modal-form input {
          height: 44px;
          padding: 0 14px;
          border: 1px solid rgba(216, 177, 101, 0.14);
          border-radius: 12px;
          outline: none;
          background: rgba(2, 7, 12, 0.55);
          color: #f1ede4;
          font-size: 11px;
        }

        .modal-form input:focus {
          border-color: rgba(216, 177, 101, 0.46);
          box-shadow: 0 0 0 3px rgba(211, 169, 91, 0.05);
        }

        .modal-actions {
          margin-top: 25px;
          display: flex;
          justify-content: flex-end;
          gap: 11px;
        }

        .modal-secondary,
        .modal-primary {
          min-height: 41px;
          padding: 0 18px;
          border-radius: 11px;
          font-size: 10px;
          font-weight: 600;
        }

        .modal-secondary {
          border: 1px solid rgba(216, 177, 101, 0.16);
          background: rgba(255, 255, 255, 0.025);
          color: rgba(239, 238, 233, 0.64);
        }

        .modal-primary {
          border: 1px solid rgba(239, 203, 131, 0.32);
          background:
            linear-gradient(
              135deg,
              #dab66d,
              #b8873b
            );
          color: #080d13;
        }

        @media (max-width: 1180px) {
          .profil-page {
            grid-template-columns: 230px minmax(0, 1fr);
          }

          .sidebar {
            width: 230px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .main-content {
            padding-left: 26px;
            padding-right: 26px;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .profile-card {
            min-height: auto;
          }

          .edit-main-button {
            margin-top: 25px;
          }

          .account-grid {
            grid-template-columns: 1fr 1fr;
          }

          .account-divider {
            display: none;
          }

          .account-item {
            padding: 10px 0;
          }
        }

        @media (max-width: 820px) {
          .profil-page {
            display: block;
          }

          .sidebar {
            position: static;
            width: 100%;
            min-height: auto;
            padding: 20px;
            border-right: 0;
            border-bottom: 1px solid rgba(216, 180, 108, 0.13);
          }

          .brand {
            padding-bottom: 18px;
          }

          .sidebar-nav {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .sidebar-signature,
          .help-card {
            display: none;
          }

          .main-content {
            padding: 26px 18px;
          }

          .page-header {
            flex-direction: column;
          }

          .header-actions {
            align-self: flex-end;
            margin-top: -62px;
          }

          .right-column {
            grid-template-rows: auto;
          }

          .account-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .account-item {
            padding: 14px 0;
            border-bottom: 1px solid rgba(211, 170, 93, 0.1);
          }

          .account-item:last-child {
            border-bottom: 0;
          }

          .security-footer {
            flex-wrap: wrap;
          }

          .footer-line {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .sidebar-nav {
            grid-template-columns: 1fr;
          }

          .page-header h1 {
            font-size: 32px;
          }

          .page-header p {
            max-width: 250px;
          }

          .header-actions {
            width: 100%;
            margin-top: 0;
            align-self: auto;
            justify-content: flex-end;
          }

          .logout-button span {
            display: none;
          }

          .logout-button {
            width: 44px;
            padding: 0;
            justify-content: center;
          }

          .profile-card,
          .panel,
          .account-panel {
            padding: 20px;
          }

          .profile-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .setting-line {
            grid-template-columns: 34px minmax(0, 1fr);
            padding: 13px 0;
          }

          .setting-line > :last-child {
            grid-column: 2;
            justify-self: start;
          }

          .select-wrap {
            width: 100%;
          }

          .modal-form {
            grid-template-columns: 1fr;
          }

          .edit-modal {
            padding: 26px 20px;
          }
        }
              `}</style>
    </main>
  );
}
