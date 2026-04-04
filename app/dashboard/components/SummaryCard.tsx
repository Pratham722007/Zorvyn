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
    <div className="group relative flex aspect-square w-full max-w-[260px] mx-auto flex-col items-center justify-center rounded-full bg-[#111] border border-[#1f1f1f] p-6 shadow-sm hover:border-white/10 transition-all duration-500">
      {/* Arc Reactor Glowing Border Effects on the whole card */}
      <div className="absolute inset-[-2px] rounded-full border border-dashed border-[#0088cc]/60 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500 pointer-events-none" />
      <div
        className="absolute inset-[-4px] rounded-full border-[3px] border-transparent border-t-[#0088cc] border-b-[#0088cc]/40 opacity-0 group-hover:opacity-100 group-hover:animate-spin group-hover:shadow-[0_0_20px_rgba(0,136,204,0.4)] transition-all duration-700 pointer-events-none"
        style={{ animationDuration: '4s' }}
      />
      <div className="absolute inset-0 rounded-full bg-[#0088cc]/0 group-hover:bg-[#0088cc]/5 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-y-4">
        <div className="p-3 bg-[#1a1a1a] rounded-full group-hover:bg-[#0088cc]/20 transition-all duration-500">
          <Icon className="h-6 w-6 text-[#0088cc] group-hover:text-[#4db8ff] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,136,204,1)] transition-all duration-300" />
        </div>

        <div className="flex flex-col items-center text-center gap-y-1">
          <h3 className="text-sm font-medium text-[#a3a3a3] group-hover:text-white transition-colors duration-300">{title}</h3>
          <span className="text-3xl font-bold tracking-tight text-white mt-1">{value}</span>
          {trend && (
            <span className={`text-xs font-medium mt-1 ${trendUp ? "text-green-500" : "text-red-500"}`}>
              {trend}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
