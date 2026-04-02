"use client";

import RoleSwitcher from "./RoleSwitcher";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', path: '/dashboard' },
    { name: 'Transactions', path: '/dashboard/transactions' },
    { name: 'Insights', path: '/dashboard/insights' },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-20 shrink-0 items-center gap-x-4 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl px-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 items-center gap-x-10">
          <Link 
            href="/dashboard" 
            className="flex items-center transition-all duration-500 ease-out hover:opacity-100 hover:scale-[1.05] opacity-90"
          >
            <img 
              src="/zorvynfulllogolight.png" 
              alt="Zorvyn Finance" 
              className="h-10 w-auto" 
            />
          </Link>
          <nav className="hidden md:flex gap-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`group relative px-6 py-2.5 text-[17px] font-semibold tracking-wide transition-all duration-300 rounded-full border ${
                    isActive 
                      ? 'text-white bg-white/10 border-white/10' 
                      : 'text-[#999] bg-transparent border-transparent hover:text-white'
                  }`}
                >
                  {item.name}
                  {!isActive && (
                    <span 
                      className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#0088cc] opacity-0 transition-all duration-300 ease-out group-hover:w-10 group-hover:opacity-100"
                      aria-hidden="true"
                    ></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-x-6 lg:gap-x-8">
          <RoleSwitcher />
          
          <div className="hidden lg:block lg:h-8 lg:w-[1px] lg:bg-gradient-to-b lg:from-transparent lg:via-white/20 lg:to-transparent" aria-hidden="true" />
          
          <div className="flex items-center pr-2 group cursor-pointer">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 transition-all duration-300 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#0088cc]/50"
            >
              <User className="h-[22px] w-[22px] text-[#a3a3a3] group-hover:text-[#0088cc] group-hover:scale-110 transition-all duration-300" />
              <span className="sr-only">User Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
