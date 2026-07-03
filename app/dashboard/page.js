'use client';

import {
  Bell,
  UserCircle,
  Eye,
  Send,
  Users,
  Plus,
  ChevronRight,
  ArrowUpRight,
  ArrowDownLeft,
  Home,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  const contacts = [
    {
      name: "Papa",
      avatar: "https://i.pravatar.cc/100?img=12",
      status: "Reçu il y a 2 min",
      color: "bg-green-500",
    },
    {
      name: "Maman",
      avatar: "https://i.pravatar.cc/100?img=32",
      status: "Merci ❤️",
      color: "bg-green-500",
    },
    {
      name: "Petit frère",
      avatar: "https://i.pravatar.cc/100?img=15",
      status: "En attente",
      color: "bg-yellow-400",
    },
    {
      name: "Tante",
      avatar: "https://i.pravatar.cc/100?img=48",
      status: "Vu il y a 1 h",
      color: "bg-blue-500",
    },
  ];

  const transfers = [
    {
      city: "Kinshasa, RDC",
      person: "Maman",
      amount: "-250,00 €",
      date: "Aujourd'hui",
      type: "out",
    },
    {
      city: "Brazzaville, Congo",
      person: "Papa",
      amount: "-120,00 €",
      date: "Hier",
      type: "out",
    },
    {
      city: "Paris, France",
      person: "Vous",
      amount: "+900,00 €",
      date: "10 Mai",
      type: "in",
    },
  ];

  const countries = [
    { flag: "🇨🇬", name: "Congo-Brazzaville" },
    { flag: "🇨🇩", name: "RDC" },
    { flag: "🇨🇲", name: "Cameroun" },
    { flag: "🇨🇮", name: "Côte d'Ivoire" },
  ];

  return (
    <main className="min-h-screen bg-[#050B18] text-white">

      {/* HERO */}

      <section className="relative h-[430px] overflow-hidden">

        <img
          src="/images/world.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06101f]/20 via-[#06101f]/30 to-[#050B18]" />

        <header className="relative z-10 flex items-center justify-between px-10 pt-8">

          <h1 className="text-5xl font-bold tracking-[0.25em] text-[#F3B634]">
            YVI PAY
          </h1>

          <div className="flex gap-8">

            <Bell
              size={34}
              className="text-[#F3B634]"
            />

            <UserCircle
              size={38}
              className="text-[#F3B634]"
            />

          </div>

        </header>

        <div className="relative z-10 flex justify-end pr-24 pt-6">

          <div>

            <h2 className="text-6xl font-light leading-tight">
              Votre argent.
              <br />
              Vos proches.
              <br />
              <span className="text-[#F3B634]">
                Sans frontières.
              </span>
            </h2>

          </div>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-8 -mt-10 space-y-5 pb-40">

        {/* Greeting */}

        <div className="rounded-3xl border border-white/10 bg-[#0A1222]/90 backdrop-blur-xl p-8 flex justify-between">

          <div>

            <h2 className="text-5xl font-semibold">
              Bonjour Nathalie ❤️
            </h2>

            <p className="text-2xl text-white/70 mt-2">
              Heureux de vous revoir.
            </p>

          </div>

          <div className="border-l border-white/10 pl-8 flex flex-col justify-center">

            <p className="text-xl text-white/70">
              Mercredi 14 Mai
            </p>

            <p className="text-3xl mt-2">
              ☀️ 16°C
            </p>

          </div>

        </div>

        {/* Balance */}

        <div className="rounded-3xl border border-white/10 bg-[#0A1222] p-8">

          <div className="flex justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="text-[#F3B634] text-2xl">
                  Solde disponible
                </span>

                <Eye className="text-[#F3B634]" />

              </div>

              <h3 className="text-7xl font-bold mt-5">
                3 250,00 €
              </h3>

              <div className="flex items-center gap-3 mt-5">

                <span className="text-green-400 text-3xl font-semibold">
                  +120,00 € ce mois-ci
                </span>

                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </div>

            <div className="w-[45%] flex items-end">

              <svg
                className="w-full h-52"
                viewBox="0 0 600 200"
              >
                <path
                  d="M0 170
                  C50 170 70 120 120 130
                  C170 140 170 170 220 145
                  C260 125 290 160 330 120
                  C380 80 410 130 450 110
                  C490 90 530 40 600 20"
                  fill="none"
                  stroke="#F3B634"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <circle
                  cx="598"
                  cy="20"
                  r="8"
                  fill="white"
                />

              </svg>

            </div>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="grid grid-cols-3 gap-5">

          <button className="rounded-3xl bg-gradient-to-r from-[#F0C04A] to-[#C99423] py-8 text-black text-3xl font-semibold flex justify-center items-center gap-4">

            <Send />

            Envoyer

          </button>

          <button className="rounded-3xl border border-white/10 bg-[#0A1222] py-8 text-3xl flex justify-center items-center gap-4">

            <Users />

            Vos proches

          </button>

          <button className="rounded-3xl border border-white/10 bg-[#0A1222] py-8 text-3xl flex justify-center items-center gap-4">

            <Plus />

            Ajouter

          </button>

        </div>

        {/* Continue automatiquement avec la suite du composant dans le prochain fichier si nécessaire */}
      </div>
    </main>
);
}
