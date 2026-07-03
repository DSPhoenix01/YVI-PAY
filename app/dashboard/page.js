'use client';

import {
  Bell,
  User,
  Eye,
  Send,
  CreditCard,
  Globe,
  ChevronRight,
  ArrowUpRight,
  Home,
  Clock3,
  Wallet,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#06111E] text-white">

      {/* HERO */}

      <section className="relative h-[540px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-[#07111F]/70" />

        <header className="relative z-20 flex justify-between items-center px-14 pt-10">

          <h1 className="text-4xl tracking-[0.35em] font-bold text-[#E5B63A]">
            YVI PAY
          </h1>

          <div className="flex gap-5">

            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center">
              <Bell className="text-[#E5B63A]" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center">
              <User className="text-[#E5B63A]" />
            </button>

          </div>

        </header>

        <div className="relative z-20 h-full flex items-center justify-end px-20">

          <div className="max-w-xl">

            <p className="uppercase tracking-[0.45em] text-[#E5B63A] text-sm mb-5">
              PRIVATE BANKING
            </p>

            <h2 className="text-[68px] leading-[74px] font-light">

              Votre argent.

              <br />

              Vos proches.

              <br />

              <span className="font-semibold text-[#E5B63A]">

                Sans frontières.

              </span>

            </h2>

          </div>

        </div>

      </section>

      {/* suite... */}
    </main>
  );
}
