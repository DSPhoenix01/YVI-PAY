"use client";

import { useState } from "react";
import Link from "next/link";

const IconHome = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 10.8 12 3l9 7.8v9.4a.8.8 0 0 1-.8.8h-5.4v-6.4H9.2V21H3.8a.8.8 0 0 1-.8-.8v-9.4Z" />
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m3.8 4.6 16.4 7.1a.35.35 0 0 1 0 .64L3.8 19.4a.35.35 0 0 1-.48-.4l1.48-5.8 8.2-1.2-8.2-1.2-1.48-5.8a.35.35 0 0 1 .48-.4Z" />
  </svg>
);

const IconHistory = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.8 7.5A8.5 8.5 0 1 1 3.5 13" />
    <path d="M3.5 5v5h5" />
    <path d="M12 7.7v4.8l3.2 1.9" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 20c.6-4 3-6 6.5-6s5.9 2 6.5 6" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5.5 5.7v5.2c0 4.3 2.6 7.9 6.5 10.1 3.9-2.2 6.5-5.8 6.5-10.1V5.7L12 3Z" />
    <path d="m9.2 12 1.8 1.8 3.8-4" />
  </svg>
);

const IconBell = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 10.2c0-3.3 2-5.7 5.5-5.7s5.5 2.4 5.5 5.7v3.1l1.7 2.8H4.8l1.7-2.8v-3.1Z" />
    <path d="M9.8 19h4.4" />
  </svg>
);

const IconCard = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M7 15h3" />
  </svg>
);

const IconHelp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9.3a2.3 2.3 0 1 1 3.5 2c-.9.6-1.3 1-1.3 2" />
    <path d="M12 17h.01" />
  </svg>
);

const IconEdit = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m4 16.8-.7 3.9 3.9-.7L18.5 8.7l-3.2-3.2L4 16.8Z" />
    <path d="m13.8 7 3.2 3.2" />
  </svg>
);

const IconChevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 5 7 7-7 7" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" />
  </svg>
);

const IconLogout = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10 5H5.5A1.5 1.5 0 0 0 4 6.5v11A1.5 1.5 0 0 0 5.5 19H10" />
    <path d="m14 8 4 4-4 4" />
    <path d="M18 12H9" />
  </svg>
);

export default function ProfilPage() {
  const [notifications, setNotifications] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Phoenix",
    lastName: "YVI",
    email: "phoenix@yvipay.com",
    phone: "+33 6 12 34 56 78",
  });

  const [draftProfile, setDraftProfile] = useState(profile);

  const openEditProfile = () => {
    setDraftProfile(profile);
    setShowEditProfile(true);
  };

  const saveProfile = () => {
    setProfile(draftProfile);
    setShowEditProfile(false);
  };

  return (
    <main className="profile-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <aside className="sidebar">
        <Link href="/dashboard" className="brand" aria-label="YVI PAY">
          <span className="brand-mark">
            <span className="brand-y">Y</span>
            <span className="brand-star">✦</span>
          </span>

          <span className="brand-copy">
            <strong>YVI PAY</strong>
            <small>PRIVATE TRANSFER</small>
          </span>
        </Link>

        <nav className="navigation">
          <Link href="/dashboard" className="nav-item">
            <span className="nav-icon">
              <IconHome />
            </span>
            <span>Accueil</span>
          </Link>

          <Link href="/envoyer" className="nav-item">
            <span className="nav-icon">
              <IconSend />
            </span>
            <span>Envoyer</span>
          </Link>

          <Link href="/historique" className="nav-item">
            <span className="nav-icon">
              <IconHistory />
            </span>
            <span>Activités</span>
          </Link>

          <Link href="/profil" className="nav-item active">
            <span className="nav-icon">
              <IconUser />
            </span>
            <span>Profil</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="security-mini">
            <span className="security-mini-icon">
              <IconShield />
            </span>

            <div>
              <strong>Espace sécurisé</strong>
              <small>Protection active</small>
            </div>
          </div>

          <button
            type="button"
            className="logout-link"
            onClick={() => setShowLogout(true)}
          >
            <span className="nav-icon">
              <IconLogout />
            </span>
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <section className="profile-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">ESPACE PERSONNEL</p>
            <h1>Mon profil</h1>
            <p className="page-intro">
              Gérez vos informations personnelles, votre sécurité et vos
              préférences YVI PAY.
            </p>
          </div>

          <div className="topbar-actions">
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              <IconBell />
              <span className="notification-dot" />
            </button>

            <div className="top-profile">
              <div className="top-avatar">PY</div>

              <div>
                <strong>
                  {profile.firstName} {profile.lastName}
                </strong>
                <small>Compte vérifié</small>
              </div>
            </div>
          </div>
        </header>
        <div className="profile-grid">
          <section className="identity-card">
            <div className="identity-glow" />

            <div className="identity-top">
              <div className="large-avatar">
                <span>PY</span>
                <div className="verified-badge">
                  <IconCheck />
                </div>
              </div>

              <div className="identity-copy">
                <span className="account-label">COMPTE PERSONNEL</span>

                <h2>
                  {profile.firstName} {profile.lastName}
                </h2>

                <p>{profile.email}</p>

                <div className="verified-line">
                  <span className="verified-icon">
                    <IconShield />
                  </span>

                  <div>
                    <strong>Identité vérifiée</strong>
                    <small>Votre compte est entièrement sécurisé</small>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="edit-profile-button"
                onClick={openEditProfile}
              >
                <IconEdit />
                <span>Modifier</span>
              </button>
            </div>

            <div className="identity-details">
              <div className="detail-item">
                <span>Nom complet</span>
                <strong>
                  {profile.firstName} {profile.lastName}
                </strong>
              </div>

              <div className="detail-separator" />

              <div className="detail-item">
                <span>Téléphone</span>
                <strong>{profile.phone}</strong>
              </div>

              <div className="detail-separator" />

              <div className="detail-item">
                <span>Pays de résidence</span>
                <strong className="country-value">
                  <span className="country-flag">🇫🇷</span>
                  France
                </strong>
              </div>
            </div>
          </section>

          <section className="status-card">
            <div className="status-card-header">
              <div>
                <span className="section-kicker">STATUT DU COMPTE</span>
                <h3>Compte Premium</h3>
              </div>

              <span className="premium-symbol">✦</span>
            </div>

            <div className="status-circle-wrap">
              <div className="status-circle">
                <div className="status-circle-inner">
                  <strong>100%</strong>
                  <span>Vérifié</span>
                </div>
              </div>
            </div>

            <div className="status-list">
              <div className="status-row">
                <span className="status-check">
                  <IconCheck />
                </span>

                <div>
                  <strong>Identité confirmée</strong>
                  <small>Document validé</small>
                </div>
              </div>

              <div className="status-row">
                <span className="status-check">
                  <IconCheck />
                </span>

                <div>
                  <strong>Téléphone confirmé</strong>
                  <small>Numéro sécurisé</small>
                </div>
              </div>

              <div className="status-row">
                <span className="status-check">
                  <IconCheck />
                </span>

                <div>
                  <strong>Email confirmé</strong>
                  <small>Adresse vérifiée</small>
                </div>
              </div>
            </div>
          </section>

          <section className="settings-card">
            <div className="section-heading">
              <div>
                <span className="section-kicker">PARAMÈTRES</span>
                <h3>Préférences du compte</h3>
              </div>
            </div>

            <button
              type="button"
              className="setting-row"
              onClick={openEditProfile}
            >
              <span className="setting-icon">
                <IconUser />
              </span>

              <span className="setting-content">
                <strong>Informations personnelles</strong>
                <small>Nom, adresse email et téléphone</small>
              </span>

              <span className="setting-chevron">
                <IconChevron />
              </span>
            </button>

            <button type="button" className="setting-row">
              <span className="setting-icon">
                <IconShield />
              </span>

              <span className="setting-content">
                <strong>Sécurité et connexion</strong>
                <small>Mot de passe et authentification</small>
              </span>

              <span className="setting-status">Protégé</span>

              <span className="setting-chevron">
                <IconChevron />
              </span>
            </button>

            <button type="button" className="setting-row">
              <span className="setting-icon">
                <IconCard />
              </span>

              <span className="setting-content">
                <strong>Moyens de paiement</strong>
                <small>Cartes et comptes enregistrés</small>
              </span>

              <span className="setting-status neutral">1 carte</span>

              <span className="setting-chevron">
                <IconChevron />
              </span>
            </button>

            <div className="setting-row notification-setting">
              <span className="setting-icon">
                <IconBell />
              </span>

              <span className="setting-content">
                <strong>Notifications</strong>
                <small>Alertes de transfert et de sécurité</small>
              </span>

              <button
                type="button"
                className={`toggle ${notifications ? "enabled" : ""}`}
                onClick={() => setNotifications((current) => !current)}
                aria-label="Activer ou désactiver les notifications"
              >
                <span />
              </button>
            </div>

            <button type="button" className="setting-row last-setting-row">
              <span className="setting-icon">
                <IconHelp />
              </span>

              <span className="setting-content">
                <strong>Aide et assistance</strong>
                <small>Notre équipe reste disponible</small>
              </span>

              <span className="setting-chevron">
                <IconChevron />
              </span>
            </button>
          </section>

          <section className="security-card">
            <div className="security-card-top">
              <span className="security-main-icon">
                <IconShield />
              </span>

              <div>
                <span className="section-kicker">SÉCURITÉ YVI PAY</span>
                <h3>Votre protection est active</h3>
              </div>
            </div>

            <p>
              Vos données personnelles et vos transferts sont protégés par un
              système de sécurité renforcé.
            </p>

            <div className="security-indicators">
              <div className="security-indicator">
                <span className="indicator-dot" />
                <div>
                  <strong>Connexion sécurisée</strong>
                  <small>Chiffrement actif</small>
                </div>
              </div>

              <div className="security-indicator">
                <span className="indicator-dot" />
                <div>
                  <strong>Surveillance continue</strong>
                  <small>Protection 24h/24</small>
                </div>
              </div>
            </div>

            <button type="button" className="security-action">
              Consulter la sécurité
              <IconChevron />
            </button>
          </section>
        </div>
      </section>
      {showEditProfile && (
        <div
          className="modal-overlay"
          onClick={() => setShowEditProfile(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Modifier mon profil</h2>
              <button
                type="button"
                className="modal-close"
                onClick={() => setShowEditProfile(false)}
              >
                ✕
              </button>
            </div>

            <div className="form-grid">
              <label>
                <span>Prénom</span>
                <input
                  value={draftProfile.firstName}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      firstName: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>Nom</span>
                <input
                  value={draftProfile.lastName}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      lastName: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  value={draftProfile.email}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      email: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>Téléphone</span>
                <input
                  value={draftProfile.phone}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      phone: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => setShowEditProfile(false)}
              >
                Annuler
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={saveProfile}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {showLogout && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogout(false)}
        >
          <div
            className="logout-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="logout-icon">
              <IconLogout />
            </div>

            <h2>Se déconnecter ?</h2>

            <p>
              Voulez-vous vraiment quitter votre espace sécurisé
              YVI PAY&nbsp;?
            </p>

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => setShowLogout(false)}
              >
                Annuler
              </button>

              <button
                type="button"
                className="danger-button"
                onClick={() => setShowLogout(false)}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
