"use client";

import RoleSwitcher from "./RoleSwitcher";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Overview";
    if (pathname === "/dashboard/transactions") return "Transactions";
    if (pathname === "/dashboard/insights") return "Insights";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 items-center">
          <h1 className="text-xl font-semibold leading-6 text-white">{getPageTitle()}</h1>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <RoleSwitcher />
          
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-[#333]" aria-hidden="true" />
          
          <div className="flex items-center gap-x-4 pr-2">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#262626] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
            >
              <User className="h-5 w-5 text-[#a3a3a3]" />
              <span className="sr-only">User Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
