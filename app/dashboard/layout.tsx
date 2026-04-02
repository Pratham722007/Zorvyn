import { ReactNode } from "react";
import { RoleProvider } from "./context/RoleContext";
import { TransactionProvider } from "./context/TransactionContext";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RoleProvider>
      <TransactionProvider>
        <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] relative overflow-hidden z-0">
          
          {/* Interactive Mouse-Tracking Background */}
          <AnimatedBackground />

          <div className="flex flex-col min-h-screen relative z-10 bg-transparent">
            <Navbar />
            <main className="flex-1">
              <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </TransactionProvider>
    </RoleProvider>
  );
}
