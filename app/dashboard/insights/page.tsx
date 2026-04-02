"use client";

import InsightsPanel from "../components/InsightsPanel";
import { ExpenseCategoryChart } from "../components/Charts";

export default function InsightsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Financial Insights
        </h2>
        <p className="mt-2 text-sm text-[#a3a3a3]">
          Analyze your spending habits and financial metrics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InsightsPanel />
        <ExpenseCategoryChart />
      </div>
    </div>
  );
}
