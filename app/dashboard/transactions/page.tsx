"use client";

import { useState } from "react";
import TransactionTable from "../components/TransactionTable";
import { useTransactions, TransactionType } from "../context/TransactionContext";
import { useRole } from "../context/RoleContext";

export default function TransactionsPage() {
  const { addTransaction } = useTransactions();
  const { isAdmin } = useRole();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<TransactionType>("Expense");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category) return;

    addTransaction({
      date: new Date().toISOString().split("T")[0],
      amount: parseFloat(amount),
      category: category,
      type: type
    });

    setAmount("");
    setCategory("");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 sm:text-4xl">
          Transaction Manager
        </h2>
        <p className="text-sm text-[#a3a3a3] max-w-2xl">
          Create, track, and manage your asset flow seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative z-10">
        
        {/* Left Pane - Form */}
        {isAdmin && (
          <div className="lg:col-span-1">
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-transparent overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0088cc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-2xl p-6 relative h-full">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0088cc] to-[#005580] shadow-[0_0_15px_rgba(0,136,204,0.4)] text-white font-black">
                  +
                </div>
                Add Record
              </h3>
              
              <form onSubmit={handleAdd} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#888] uppercase tracking-widest">
                    Amount
                  </label>
                  <div className="relative group/input">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#888] font-bold text-lg transition-colors group-focus-within/input:text-[#0088cc]">$</span>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="block w-full rounded-xl border border-white/5 py-3 pl-9 pr-4 text-white bg-white/5 placeholder:text-white/20 focus:bg-white/10 focus:border-[#0088cc]/50 focus:ring-1 focus:ring-[#0088cc]/50 font-mono text-lg transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#888] uppercase tracking-widest">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software, Travel..."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full rounded-xl border border-white/5 py-3 px-4 text-white bg-white/5 placeholder:text-white/20 focus:bg-white/10 focus:border-[#0088cc]/50 focus:ring-1 focus:ring-[#0088cc]/50 transition-all text-sm font-medium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#888] uppercase tracking-widest">
                    Transaction Type
                  </label>
                  <div className="grid grid-cols-2 gap-3 p-1 bg-white/5 rounded-xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => setType("Expense")}
                      className={`py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
                        type === "Expense" 
                          ? "bg-red-500/20 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]" 
                          : "text-[#888] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      Expense
                    </button>
                    <button
                      type="button"
                      onClick={() => setType("Income")}
                      className={`py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
                        type === "Income" 
                          ? "bg-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                          : "text-[#888] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      Income
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="group w-full relative rounded-xl bg-gradient-to-r from-[#0088cc] to-[#00aaee] p-[1px] overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,136,204,0.4)] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out pointer-events-none" />
                    <div className="relative px-4 py-3 bg-gradient-to-r from-[#0088cc] to-[#00aaee] rounded-xl flex items-center justify-center">
                      <span className="text-sm font-bold tracking-widest text-white uppercase">Confirm Record</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        )}

        {/* Right Pane - Table */}
        <div className={isAdmin ? "lg:col-span-3" : "lg:col-span-4"}>
          <TransactionTable />
        </div>
        
      </div>
    </div>
  );
}
