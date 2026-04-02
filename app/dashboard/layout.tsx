import { ReactNode } from "react";
import { RoleProvider } from "./context/RoleContext";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RoleProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
        <Sidebar />
        <div className="md:pl-64 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </RoleProvider>
  );
}
