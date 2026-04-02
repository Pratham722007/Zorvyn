"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ArrowLeftRight, Lightbulb, Activity } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
    { name: "Insights", href: "/dashboard/insights", icon: Lightbulb },
  ];

  return (
    <aside className="fixed left-0 top-0 hidden w-64 flex-col bg-[#0a0a0a] border-r border-[#1f1f1f] h-screen md:flex">
      <div className="flex h-16 items-center px-6 border-b border-[#1f1f1f]">
        <Activity className="h-6 w-6 text-[#0088cc] mr-3" />
        <span className="text-xl font-bold tracking-wide text-white">
          Zorvyn <span className="text-[#b5b5b5] font-medium">Finance</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#0088cc]/10 text-[#0088cc]"
                  : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? "text-[#0088cc]" : "text-[#737373]"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1f1f1f]">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-[#a3a3a3] hover:text-white transition-colors"
        >
          ← Back to Site
        </Link>
      </div>
    </aside>
  );
}
