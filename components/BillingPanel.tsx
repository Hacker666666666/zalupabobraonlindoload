
import React, { useMemo, useState } from "react";
import {
  Send,
  Wallet,
  CreditCard,
  Clock,
  ChevronRight,
  Search,
  ArrowUpRight,
  BadgeCheck,
  Receipt,
} from "lucide-react";

type Tx = {
  id: number;
  type: string;
  amount: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
};

const BillingPanel: React.FC = () => {
  const [query, setQuery] = useState("");
  const balance = 145.2;

  const transactions: Tx[] = [
    { id: 1, type: "Query charge", amount: "-$0.05", date: "Today, 14:22", status: "Completed" },
    { id: 2, type: "Top up", amount: "+$50.00", date: "Oct 21, 2023", status: "Completed" },
    { id: 3, type: "Query charge", amount: "-$0.05", date: "Oct 20, 2023", status: "Completed" },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return transactions;
    return transactions.filter(
      (t) =>
        t.type.toLowerCase().includes(q) ||
        t.amount.toLowerCase().includes(q) ||
        t.date.toLowerCase().includes(q) ||
        t.status.toLowerCase().includes(q)
    );
  }, [query, transactions]);

  const StatusBadge = ({ status }: { status: Tx["status"] }) => {
    const cls =
      status === "Completed"
        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
        : status === "Pending"
          ? "bg-amber-500/10 border-amber-500/20 text-amber-300"
          : "bg-rose-500/10 border-rose-500/20 text-rose-300";

    return (
      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${cls}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-6 md:py-8 px-5 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Wallet <span className="text-[#B794F4]">& Funds</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage credits via the automated Telegram billing system.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B794F4]/10 text-[#B794F4] flex items-center justify-center">
              <Wallet size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                Available balance
              </p>
              <p className="text-xl font-mono font-bold text-white">${balance.toFixed(2)}</p>
            </div>
          </div>
          <button
            className="h-[72px] px-5 rounded-2xl bg-[#B794F4] text-[#0D0D0E] font-bold uppercase tracking-widest text-[11px]
                       hover:opacity-90 transition flex items-center gap-3 shadow-lg shadow-[#B794F4]/15"
          >
            <Send size={18} />
            Top up
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#B794F4]/15 blur-[60px]" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Add credits</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-md">
                Payments are processed through the Telegram bot and credited instantly after confirmation.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-gray-500 font-mono">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">FAST</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">SECURE</span>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              className="h-12 px-5 rounded-2xl bg-[#229ED9]/15 border border-[#229ED9]/25 text-white font-semibold
                         hover:bg-[#229ED9]/22 transition flex items-center justify-center gap-3"
            >
              <span className="w-9 h-9 rounded-xl bg-[#229ED9] flex items-center justify-center">
                <Send size={16} />
              </span>
              Pay via Telegram
              <ArrowUpRight size={16} className="opacity-80" />
            </button>
            <button
              className="h-12 px-5 rounded-2xl border border-white/10 text-white/90 font-semibold
                         hover:bg-white/5 transition flex items-center justify-center gap-2"
            >
              View invoices
              <ChevronRight size={16} className="opacity-70" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">Plan</h3>
              <p className="text-xs text-gray-500 mt-1">Usage-based pricing</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              Active
            </span>
          </div>
          <div className="mt-4 rounded-2xl bg-black/30 border border-white/10 p-4">
            <div className="flex items-center gap-2 text-[#B794F4]">
              <BadgeCheck size={16} />
              <p className="text-xs font-bold uppercase tracking-widest">Standard tier</p>
            </div>
            <p className="text-sm text-gray-200 mt-2">
              $0.05 <span className="text-gray-500">per query</span>
            </p>
            <p className="text-[11px] text-gray-500 mt-2">Next cycle: Nov 12, 2023</p>
          </div>
          <button
            className="mt-4 w-full h-12 rounded-2xl border border-white/10 text-white font-bold uppercase tracking-widest text-[11px]
                       hover:bg-white/5 transition flex items-center justify-center gap-2"
          >
            Upgrade plan
            <ChevronRight size={16} className="opacity-70" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <Clock size={14} />
            Recent transactions
          </h4>
          <div className="relative w-full sm:w-[320px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search transactions…"
              className="w-full h-11 rounded-2xl bg-black/35 border border-white/10 text-sm text-white placeholder:text-gray-600
                         pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#B794F4]/30"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm text-gray-400">No transactions found.</p>
            </div>
          ) : (
            filtered.map((t) => {
              const isPlus = t.amount.startsWith("+");
              return (
                <div
                  key={t.id}
                  className="px-5 py-4 flex items-center justify-between gap-4 border-b border-white/10 last:border-0
                             hover:bg-white/[0.03] transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border
                        ${
                          isPlus
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                            : "bg-white/5 border-white/10 text-gray-200"
                        }`}
                    >
                      {isPlus ? <CreditCard size={16} /> : <Receipt size={16} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{t.type}</p>
                      <p className="text-[11px] text-gray-500">{t.date}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-sm font-mono font-bold ${isPlus ? "text-emerald-400" : "text-white"}`}>
                      {t.amount}
                    </p>
                    <div className="mt-1 flex justify-end">
                      <StatusBadge status={t.status} />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingPanel;
