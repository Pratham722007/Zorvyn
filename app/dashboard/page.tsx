"use client";

import SummaryCard from "./components/SummaryCard";
import { RevenueChart, ExpenseCategoryChart } from "./components/Charts";
import TransactionTable from "./components/TransactionTable";
import InsightsPanel from "./components/InsightsPanel";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Total Balance"
          value="$34,500.00"
          icon={DollarSign}
          trend="+5.4% from last month"
          trendUp={true}
        />
        <SummaryCard
          title="Total Income"
          value="$25,060.00"
          icon={ArrowUpRight}
          trend="+12.0% from last month"
          trendUp={true}
        />
        <SummaryCard
          title="Total Expenses"
          value="$8,250.25"
          icon={ArrowDownRight}
          trend="+2.1% from last month"
          trendUp={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RevenueChart />
        <ExpenseCategoryChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TransactionTable />
        </div>
        <div className="lg:col-span-1">
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
}
