"use client";

import RoleSwitcher from "./RoleSwitcher";
import { User, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Overview', path: '/dashboard' },
    { name: 'Transactions', path: '/dashboard/transactions' },
    { name: 'Insights', path: '/dashboard/insights' },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'
        }`}
      >
        <div className="flex flex-col h-full p-6 sm:p-8">
          <div className="flex items-center justify-between mb-16">
            <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/zorvynfulllogolight.png"
                alt="Zorvyn Finance"
                className="h-10 w-auto"
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all duration-300"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-y-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-3xl font-bold tracking-tight transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-8 bg-[#0088cc] rounded-full shadow-[0_0_20px_rgba(0,136,204,0.5)]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10 border-t border-white/5 space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-white/40 font-medium">Switch Context</span>
              <RoleSwitcher />
            </div>
            
            <div className="flex items-center gap-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0088cc] to-[#005580] flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">User Profile</p>
                <p className="text-white/40 text-sm">Account Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 flex h-20 shrink-0 items-center gap-x-4 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl px-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex flex-1 items-center gap-x-4 md:gap-x-10">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all duration-300 active:scale-95"
            >
              <Menu className="h-6 w-6" />
            </button>

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
                    className={`group relative px-6 py-2.5 text-[17px] font-semibold tracking-wide transition-all duration-300 rounded-full border ${isActive
                      ? 'text-white bg-white/10 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                      : 'text-[#999] bg-transparent border-transparent hover:text-white hover:bg-white/5'
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
          <div className="flex items-center gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <div className="hidden sm:block">
              <RoleSwitcher />
            </div>

            <div className="hidden lg:block lg:h-8 lg:w-[1px] lg:bg-gradient-to-b lg:from-transparent lg:via-white/20 lg:to-transparent" aria-hidden="true" />

            <div className="flex items-center group cursor-pointer">
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
    </>
  );
}
