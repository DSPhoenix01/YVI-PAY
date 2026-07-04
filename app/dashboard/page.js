'use client';

export default function DashboardPage() {
  const countries = [
    { flag: "🇨🇬", name: "Congo", city: "Brazzaville", status: "Actif" },
    { flag: "🇨🇩", name: "RDC", city: "Kinshasa", status: "Actif" },
    { flag: "🇨🇲", name: "Cameroun", city: "Douala", status: "Bientôt" },
    { flag: "🇨🇮", name: "Côte d'Ivoire", city: "Abidjan", status: "Bientôt" },
  ];

  const contacts = [
    { name: "Maman", country: "🇨🇩 RDC", amount: "250 €", note: "Reçu il y a 2 min" },
    { name: "Papa", country: "🇨🇬 Congo", amount: "120 €", note: "Merci ❤️" },
    { name: "Petit frère", country: "🇨🇩 RDC", amount: "80 €", note: "En attente" },
  ];

  const transfers = [
    { name: "Maman", city: "Kinshasa, RDC", amount: "-250,00 €", date: "Aujourd'hui", type: "out" },
    { name: "Papa", city: "Brazzaville, Congo", amount: "-120,00 €", date: "Hier", type: "out" },
    { name: "Recharge carte", city: "YVI PAY Premium", amount: "+900,00 €", date: "10 Mai", type: "in" },
  ];

  return (
    <main className="min-h-screen bg-[#06101D] text-white pb-32 overflow-hidden">

      <section className="relative h-[560px] overflow-hidden bg-[#06101D]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_48%,rgba(231,179,59,0.28),transparent_22%),radial-gradient(circle_at_50%_48%,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_75%_35%,rgba(231,179,59,0.16),transparent_22%),linear-gradient(180deg,#081827_0%,#07111F_62%,#06101D_100%)]" />

          <div className="absolute left-[-8%] top-[8%] w-[760px] h-[760px] rounded-full border border-[#E7B33B]/20 opacity-70" />
          <div className="absolute left-[5%] top-[20%] w-[520px] h-[520px] rounded-full border border-white/10" />
          <div className="absolute left-[12%] top-[28%] w-[360px] h-[360px] rounded-full border border-[#E7B33B]/20" />

          <div className="absolute left-[18%] top-[44%] w-5 h-5 rounded-full bg-[#E7B33B] shadow-[0_0_30px_#E7B33B]" />
          <div className="absolute left-[39%] top-[36%] w-3 h-3 rounded-full bg-white shadow-[0_0_22px_white]" />
          <div className="absolute left-[53%] top-[50%] w-4 h-4 rounded-full bg-[#E7B33B] shadow-[0_0_24px_#E7B33B]" />

          <div className="absolute left-[25%] top-[47%] w-[420px] h-[2px] bg-gradient-to-r from-[#E7B33B] via-white/70 to-transparent rotate-[-14deg] opacity-70" />
          <div className="absolute left-[25%] top-[47%] w-[650px] h-[2px] bg-gradient-to-r from-[#E7B33B] via-white/60 to-transparent rotate-[8deg] opacity-60" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06101D]/25 to-[#06101D]" />
        </div>

        <header className="relative z-20 flex items-center justify-between px-10 md:px-16 pt-10">
          <h1 className="text-3xl md:text-[44px] tracking-[0.35em] font-bold text-[#E7B33B]">
            YVI PAY
          </h1>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-[#E7B33B] text-xl">
              🔔
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-[#E7B33B] text-xl">
              👤
            </button>
          </div>
        </header>

        <div className="relative z-20 h-full flex items-center justify-end px-10 md:px-20 -mt-14">
          <div className="max-w-[600px]">
            <p className="uppercase tracking-[0.45em] text-[#E7B33B] text-xs md:text-sm mb-6">
              PRIVATE MONEY TRANSFER
            </p>

            <h2 className="text-[46px] md:text-[70px] leading-[52px] md:leading-[76px] font-light">
              Votre argent.
              <br />
              Vos proches.
              <br />
              <span className="font-semibold text-[#E7B33B]">
                Sans frontières.
              </span>
            </h2>
          </div>
        </div>
      </section>
        <section className="relative z-30 -mt-24 px-5 md:px-10">
        <div className="mx-auto max-w-[1400px] space-y-6">

          <div className="rounded-[34px] bg-[#0A1627]/95 border border-white/10 shadow-2xl p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Bonjour Nathalie ❤️
              </h2>

              <p className="text-white/60 text-xl md:text-2xl mt-2">
                Heureux de vous revoir.
              </p>
            </div>

            <div className="md:border-l border-white/10 md:pl-10">
              <p className="text-white/60 text-lg">
                Mercredi 14 Mai
              </p>

              <p className="text-3xl mt-1">
                ☀️ 16°C
              </p>
            </div>
          </div>

          <div className="rounded-[34px] bg-[#0A1627] border border-white/10 p-7 md:p-9 shadow-2xl">

            <div className="flex flex-col lg:flex-row justify-between gap-8">

              <div>

                <div className="flex items-center gap-3 text-[#E7B33B] text-2xl">

                  <span>Solde disponible</span>

                  <span>👁️</span>

                </div>

                <h3 className="text-6xl md:text-8xl font-bold mt-5 tracking-tight">

                  3 250,00 €

                </h3>

                <div className="flex items-center gap-3 mt-6">

                  <span className="text-green-400 text-2xl md:text-3xl font-semibold">

                    +120,00 € ce mois-ci

                  </span>

                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">

                    ↗

                  </div>

                </div>

              </div>

              <div className="flex-1 min-w-[280px] flex items-end">

                <svg
                  viewBox="0 0 640 230"
                  className="w-full h-[210px]"
                >

                  <path
                    d="M5 190 C70 190 80 120 145 140 C205 160 220 190 285 150 C345 115 370 170 430 110 C495 45 530 80 580 45 C610 25 625 20 635 15"
                    fill="none"
                    stroke="#E7B33B"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="635"
                    cy="15"
                    r="9"
                    fill="white"
                  />

                </svg>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <button className="rounded-[30px] bg-gradient-to-r from-[#F2C24D] to-[#C88E22] text-black py-7 text-3xl font-semibold">

              Envoyer

            </button>

            <button className="rounded-[30px] bg-[#0A1627] border border-white/10 py-7 text-3xl font-semibold">

              Vos proches

            </button>

            <button className="rounded-[30px] bg-[#0A1627] border border-white/10 py-7 text-3xl font-semibold">

              Ajouter

            </button>

          </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <div className="xl:col-span-8 space-y-6">

              <div className="rounded-[34px] bg-[#0A1627] border border-white/10 p-7 md:p-9">

                <div className="flex items-center justify-between mb-7">

                  <div>

                    <h3 className="text-4xl font-semibold">
                      Réseau actif
                    </h3>

                    <p className="text-white/55 text-xl mt-1">
                      France vers Afrique
                    </p>

                  </div>

                  <div className="text-[#E7B33B] text-4xl">
                    🌍
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="rounded-[26px] bg-white/[0.04] border border-white/10 p-5"
                    >

                      <div className="text-5xl mb-4">
                        {country.flag}
                      </div>

                      <h4 className="text-xl font-semibold">
                        {country.name}
                      </h4>

                      <p className="text-white/50 mt-1">
                        {country.city}
                      </p>

                      <p className={`mt-4 text-sm ${country.status === "Actif" ? "text-green-400" : "text-[#E7B33B]"}`}>
                        {country.status}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              <div className="rounded-[34px] bg-[#0A1627] border border-white/10 p-7 md:p-9">

                <div className="flex justify-between items-center mb-6">

                  <h3 className="text-4xl font-semibold">
                    Derniers transferts
                  </h3>

                  <span className="text-[#E7B33B] text-4xl">
                    ›
                  </span>

                </div>

                <div className="space-y-4">

                  {transfers.map((item) => (
                    <div
                      key={item.name + item.date}
                      className="rounded-[24px] bg-white/[0.04] border border-white/10 p-5 flex items-center justify-between"
                    >

                      <div className="flex items-center gap-4">

                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${item.type === "in" ? "bg-green-500/20 text-green-400" : "bg-[#E7B33B]/20 text-[#E7B33B]"}`}>
                          {item.type === "in" ? "↙" : "↗"}
                        </div>

                        <div>

                          <p className="text-xl font-semibold">
                            {item.name}
                          </p>

                          <p className="text-white/50">
                            {item.city} • {item.date}
                          </p>

                        </div>

                      </div>

                      <p className={`text-xl font-semibold ${item.type === "in" ? "text-green-400" : "text-white"}`}>
                        {item.amount}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>
            <div className="xl:col-span-4 space-y-6">

              <div className="rounded-[34px] bg-gradient-to-br from-[#13223C] via-[#091728] to-[#020713] border border-[#E7B33B]/30 p-7 shadow-2xl relative overflow-hidden">

                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#E7B33B]/20 blur-3xl"></div>

                <div className="relative z-10">

                  <p className="tracking-[0.35em] text-[#E7B33B] font-bold text-2xl">
                    YVI PAY
                  </p>

                  <p className="text-white/50 mt-2">
                    Premium Card
                  </p>

                  <div className="mt-14 text-2xl tracking-[0.35em]">
                    •••• •••• •••• 0926
                  </div>

                  <div className="mt-10 flex justify-between items-end">

                    <div>

                      <p className="text-white/40 text-xs uppercase">
                        Titulaire
                      </p>

                      <p className="text-xl mt-1">
                        NATHALIE
                      </p>

                    </div>

                    <div className="text-5xl">
                      💳
                    </div>

                  </div>

                </div>

              </div>

              <div className="rounded-[34px] bg-[#0A1627] border border-white/10 p-7">

                <div className="flex justify-between items-center mb-6">

                  <h3 className="text-3xl font-semibold">
                    Vos proches
                  </h3>

                  <span className="text-[#E7B33B] text-3xl">
                    +
                  </span>

                </div>

                <div className="space-y-4">

                  {contacts.map((contact) => (

                    <div
                      key={contact.name}
                      className="rounded-[22px] bg-white/[0.04] border border-white/10 p-4 flex justify-between items-center"
                    >

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E7B33B] to-[#8A6119] flex items-center justify-center font-bold text-black">

                          {contact.name.charAt(0)}

                        </div>

                        <div>

                          <p className="font-semibold">
                            {contact.name}
                          </p>

                          <p className="text-white/50 text-sm">
                            {contact.country}
                          </p>

                          <p className="text-green-400 text-sm">
                            {contact.note}
                          </p>

                        </div>

                      </div>

                      <p className="text-[#E7B33B] font-semibold">
                        {contact.amount}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
              <div className="rounded-[34px] bg-[#0A1627] border border-white/10 p-7">

                <h3 className="text-3xl font-semibold mb-6">
                  Sécurité
                </h3>

                <div className="space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">
                      🛡️
                    </div>

                    <div>

                      <p className="font-semibold">
                        Compte sécurisé
                      </p>

                      <p className="text-white/50 text-sm">
                        Protection active 24h/24
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-[#E7B33B]/20 flex items-center justify-center text-2xl">
                      🌍
                    </div>

                    <div>

                      <p className="font-semibold">
                        Réseau international
                      </p>

                      <p className="text-white/50 text-sm">
                        France → Afrique
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[760px] rounded-full bg-[#0A1627]/95 border border-white/10 backdrop-blur-xl px-6 py-4 shadow-2xl">

        <div className="flex justify-between items-center">

          <button className="flex flex-col items-center text-[#E7B33B]">
            <span className="text-2xl">🏠</span>
            <span className="text-xs mt-1">Accueil</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <span className="text-2xl">✈️</span>
            <span className="text-xs mt-1">Envoyer</span>
          </button>

          <button className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F2C24D] to-[#C88E22] text-black text-3xl -mt-10 shadow-2xl">
            +
          </button>

          <button className="flex flex-col items-center text-white/60">
            <span className="text-2xl">🕘</span>
            <span className="text-xs mt-1">Historique</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <span className="text-2xl">⚙️</span>
            <span className="text-xs mt-1">Profil</span>
          </button>

        </div>

      </nav>

    </main>

  );

}
