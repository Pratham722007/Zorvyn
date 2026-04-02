"use client";

import { useTransactions } from "../context/TransactionContext";
import { AlertCircle, CreditCard, Activity, Zap, Expand } from "lucide-react";

export default function InsightsPanel() {
  const { transactions, totalIncome, totalExpenses, computedExpenses } = useTransactions();

  // Compute live insights
  const highestExpenseCategory = computedExpenses.length > 0 ? computedExpenses[0] : { name: "N/A", value: 0 };
  
  const savingsRate = totalIncome > 0 
    ? (((totalIncome - totalExpenses) / totalIncome) * 100).toFixed(1) 
    : "0.0";

  const largestTransaction = transactions.reduce((prev, current) => 
    (prev.amount > current.amount) ? prev : current
  , { amount: 0, category: "N/A", type: "Expense" });

  const isNetPositive = totalIncome > totalExpenses;

  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl overflow-hidden h-full">
      <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl h-full flex flex-col rounded-2xl relative z-10 p-6 sm:p-8 border border-white/5">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">AI Insights</h3>
            <p className="text-xs text-[#777] uppercase tracking-widest font-semibold mt-1">Real-time Analysis</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#0088cc]/10 flex items-center justify-center border border-[#0088cc]/20 shadow-[0_0_15px_rgba(0,136,204,0.2)]">
            <Zap className="h-5 w-5 text-[#0088cc]" />
          </div>
        </div>

        <div className="space-y-4">
          
          {/* Net Flow Insight */}
          <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${isNetPositive ? 'from-emerald-500' : 'from-red-500'} to-transparent`} />
            <div className={`mt-1 p-2.5 rounded-xl border relative z-10 ${
              isNetPositive 
                ? "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                : "bg-red-500/10 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
            }`}>
              <Activity className={`h-5 w-5 ${isNetPositive ? "text-emerald-400" : "text-red-400"}`} />
            </div>
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-1">Asset Flow</h4>
              <p className="text-[13px] text-[#999] leading-relaxed">
                Your net flow is <span className={`font-bold ${isNetPositive ? "text-emerald-400" : "text-red-400"}`}>{isNetPositive ? "Positive" : "Negative"}</span>. 
                You are saving <span className="text-white font-mono font-bold tracking-wide">{savingsRate}%</span> of your recorded income.
              </p>
            </div>
          </div>

          {/* Highest Expense Category */}
          <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-orange-500 to-transparent" />
            <div className="mt-1 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] relative z-10">
              <AlertCircle className="h-5 w-5 text-orange-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-1">Major Leak</h4>
              <p className="text-[13px] text-[#999] leading-relaxed">
                <span className="text-[#e5e5e5] font-bold">{highestExpenseCategory.name}</span> is draining your capital the most, totaling <span className="text-orange-400 font-mono font-bold tracking-wide">${highestExpenseCategory.value.toLocaleString()}</span>.
              </p>
            </div>
          </div>

          {/* Largest Single Transaction */}
          <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-purple-500 to-transparent" />
            <div className="mt-1 p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] relative z-10">
              <Expand className="h-5 w-5 text-purple-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-1">Heaviest Move</h4>
              <p className="text-[13px] text-[#999] leading-relaxed">
                Your largest single {largestTransaction.type.toLowerCase()} was for <span className="text-white font-bold">{largestTransaction.category}</span> valuing <span className="text-purple-400 font-mono font-bold tracking-wide">${largestTransaction.amount.toLocaleString()}</span>.
              </p>
            </div>
          </div>

          {/* Active Subscriptions / Activity */}
          <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-[#0088cc] to-transparent" />
            <div className="mt-1 p-2.5 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/20 shadow-[0_0_15px_rgba(0,136,204,0.15)] relative z-10">
              <CreditCard className="h-5 w-5 text-[#00aaee]" />
            </div>
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-1">Ledger Activity</h4>
              <p className="text-[13px] text-[#999] leading-relaxed">
                You currently have <span className="text-[#00aaee] font-mono font-bold tracking-wide">{transactions.length}</span> active transactions mapped out in your financial grid.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
