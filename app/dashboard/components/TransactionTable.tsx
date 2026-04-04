"use client";

import { useState } from "react";
import { Search, Filter, Trash2, TrendingUp, TrendingDown } from "lucide-react";
import { useRole } from "../context/RoleContext";
import { useTransactions } from "../context/TransactionContext";

export default function TransactionTable({ limit }: { limit?: number }) {
  const { isAdmin } = useRole();
  const { transactions, deleteTransaction } = useTransactions();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"All" | "Income" | "Expense">("All");

  let filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || tx.type === filterType;
    return matchesSearch && matchesFilter;
  });

  if (limit) {
    filteredTransactions = filteredTransactions.slice(0, limit);
  }

  // Calculate max amount for the visual volume bars
  const maxAmount = filteredTransactions.length > 0
    ? Math.max(...filteredTransactions.map(tx => tx.amount))
    : 1;

  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl overflow-hidden h-full">
      <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl h-full flex flex-col rounded-2xl relative z-10">
        <div className="border-b border-white/5 p-6 sm:flex sm:items-center sm:justify-between gap-4 bg-white/[0.02]">
          <h3 className="text-xl font-bold text-white mb-4 sm:mb-0 tracking-tight">Recent Transactions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group/search">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <Search className="h-4 w-4 text-[#737373] transition-colors group-focus-within/search:text-[#0088cc]" />
              </div>
              <input
                type="text"
                placeholder="Search category..."
                className="block w-full sm:w-[240px] rounded-xl border border-white/5 py-3 pl-10 pr-3 text-white bg-white/5 placeholder:text-[#555] focus:bg-white/10 focus:border-[#0088cc]/50 focus:ring-1 focus:ring-[#0088cc]/50 sm:text-sm font-medium transition-all relative z-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative group/filter">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <Filter className="h-4 w-4 text-[#737373] transition-colors group-focus-within/filter:text-[#0088cc]" />
              </div>
              <select
                className="block w-full sm:w-[150px] rounded-xl border border-white/5 py-3 pl-10 pr-8 text-white bg-white/5 focus:bg-white/10 focus:border-[#0088cc]/50 focus:ring-1 focus:ring-[#0088cc]/50 sm:text-sm font-medium appearance-none transition-all cursor-pointer relative z-0"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
              >
                <option value="All" className="bg-[#111]">All Types</option>
                <option value="Income" className="bg-[#111]">Income</option>
                <option value="Expense" className="bg-[#111]">Expense</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto flex-1 p-2">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="py-5 pl-6 pr-3 text-left text-[11px] font-bold text-[#666] uppercase tracking-[0.2em]">Date</th>
                <th scope="col" className="px-4 py-5 text-left text-[11px] font-bold text-[#666] uppercase tracking-[0.2em]">Category</th>
                <th scope="col" className="px-4 py-5 text-left text-[11px] font-bold text-[#666] uppercase tracking-[0.2em]">Type</th>
                <th scope="col" className="px-4 py-5 text-left text-[11px] font-bold text-[#666] uppercase tracking-[0.2em]">Amount</th>
                {isAdmin && <th scope="col" className="relative py-5 pl-3 pr-6 w-16"><span className="sr-only">Actions</span></th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="group transition-colors hover:bg-white/[0.03] rounded-xl relative">
                    <td className="whitespace-nowrap py-5 pl-6 pr-3 text-sm text-[#888] font-mono tracking-tight">{tx.date}</td>
                    <td className="whitespace-nowrap px-4 py-5 text-sm font-bold text-[#e5e5e5]">{tx.category}</td>
                    <td className="whitespace-nowrap px-4 py-5 text-sm">
                      <div className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-black uppercase tracking-widest border transition-all ${tx.type === "Income"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                          : "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                        }`}>
                        <div className="relative flex h-2 w-2 mr-1">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tx.type === "Income" ? "bg-emerald-400" : "bg-red-400"}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${tx.type === "Income" ? "bg-emerald-500" : "bg-red-500"}`}></span>
                        </div>
                        {tx.type === "Income" ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                        {tx.type}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 align-middle w-48">
                      <div className="flex flex-col gap-2">
                        <span className={`text-[15px] font-mono font-bold tracking-wider ${tx.type === "Income" ? "text-emerald-400" : "text-white"
                          }`}>
                          {tx.type === "Income" ? "+" : "-"}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        {/* Glowing dynamic mini-bar representing volume severity */}
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${tx.type === "Income"
                                ? "bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                                : "bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                              }`}
                            style={{ width: `${Math.min((tx.amount / maxAmount) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    {isAdmin && (
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-6 text-right">
                        <button
                          onClick={() => deleteTransaction(tx.id)}
                          className="p-2 rounded-xl text-[#555] opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500/20 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                          title="Delete Transaction"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 5 : 4} className="py-24 text-center">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                        <Search className="h-5 w-5 text-[#555]" />
                      </div>
                      <p className="text-sm font-medium text-[#777]">No transactions recorded yet.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
