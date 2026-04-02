import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export default function SummaryCard({ title, value, icon: Icon, trend, trendUp }: SummaryCardProps) {
  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 shadow-sm hover:border-[#333] transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-[#a3a3a3]">{title}</h3>
        <div className="p-2 bg-[#1a1a1a] rounded-lg">
          <Icon className="h-4 w-4 text-[#0088cc]" />
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-x-2">
        <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
        {trend && (
          <span className={`text-sm font-medium ${trendUp ? "text-green-500" : "text-red-500"}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
