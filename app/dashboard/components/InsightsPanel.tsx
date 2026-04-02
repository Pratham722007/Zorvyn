"use client";

import { INSIGHTS } from "../data/mockData";
import { TrendingUp, AlertCircle, CreditCard } from "lucide-react";

export default function InsightsPanel() {
  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-white mb-6">Key Insights</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-[#333]">
          <div className="mt-1 bg-red-400/10 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Highest Expense</h4>
            <p className="text-sm text-[#a3a3a3] mt-1">
              <span className="text-white font-semibold">{INSIGHTS.highestExpenseCategory}</span> is your highest spending category this month, totaling <span className="text-white">${INSIGHTS.highestExpenseAmount}</span>.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-[#333]">
          <div className="mt-1 bg-green-400/10 p-2 rounded-full">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Monthly Comparison</h4>
            <p className="text-sm text-[#a3a3a3] mt-1">
              Your overall expenses have increased by <span className="text-red-400">{INSIGHTS.monthlyChange}</span> compared to last month.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-[#333]">
          <div className="mt-1 bg-[#0088cc]/10 p-2 rounded-full">
            <CreditCard className="h-5 w-5 text-[#0088cc]" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Active Subscriptions</h4>
            <p className="text-sm text-[#a3a3a3] mt-1">
              You are currently maintaining <span className="text-white font-semibold">{INSIGHTS.activeSubscriptions}</span> active software subscriptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
