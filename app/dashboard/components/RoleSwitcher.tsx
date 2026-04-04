"use client";

import { useRole } from "../context/RoleContext";

export default function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center space-x-2 bg-[#1a1a1a] p-1 rounded-md border border-[#333]">
      <button
        onClick={() => setRole("Viewer")}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${role === "Viewer"
            ? "bg-[#0088cc] text-white shadow"
            : "text-[#a3a3a3] hover:text-white hover:bg-[#262626]"
          }`}
      >
        Viewer
      </button>
      <button
        onClick={() => setRole("Admin")}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${role === "Admin"
            ? "bg-[#0088cc] text-white shadow"
            : "text-[#a3a3a3] hover:text-white hover:bg-[#262626]"
          }`}
      >
        Admin
      </button>
    </div>
  );
}
