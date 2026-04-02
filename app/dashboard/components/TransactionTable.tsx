"use client";

import { useState } from "react";
import { transactions } from "../data/mockData";
import { Search, Filter, Edit, Trash2, Plus } from "lucide-react";
import { useRole } from "../context/RoleContext";

export default function TransactionTable() {
  const { isAdmin } = useRole();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"All" | "Income" | "Expense">("All");

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || tx.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="border-b border-[#1f1f1f] p-4 sm:flex sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-medium text-white mb-4 sm:mb-0">Recent Transactions</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-[#737373]" />
            </div>
            <input
              type="text"
              placeholder="Search category..."
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-white bg-[#1a1a1a] ring-1 ring-inset ring-[#333] placeholder:text-[#737373] focus:ring-2 focus:ring-inset focus:ring-[#0088cc] sm:text-sm sm:leading-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Filter className="h-4 w-4 text-[#737373]" />
            </div>
            <select
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-8 text-white bg-[#1a1a1a] ring-1 ring-inset ring-[#333] focus:ring-2 focus:ring-inset focus:ring-[#0088cc] sm:text-sm sm:leading-6 appearance-none"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
            >
              <option value="All">All Types</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          {isAdmin && (
            <button className="flex items-center justify-center rounded-md bg-[#0088cc] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0077b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088cc]">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#1f1f1f]">
          <thead className="bg-[#0a0a0a]">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#a3a3a3] sm:pl-6">Date</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#a3a3a3]">Category</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#a3a3a3]">Type</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#a3a3a3]">Amount</th>
              {isAdmin && <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Actions</span></th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1f1f1f] bg-[#111]">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-[#d4d4d4] sm:pl-6">{tx.date}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">{tx.category}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                      tx.type === "Income" 
                        ? "bg-green-400/10 text-green-400 ring-green-400/20" 
                        : "bg-red-400/10 text-red-400 ring-red-400/20"
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 text-sm font-medium ${
                    tx.type === "Income" ? "text-green-400" : "text-white"
                  }`}>
                    {tx.type === "Income" ? "+" : "-"}${tx.amount.toFixed(2)}
                  </td>
                  {isAdmin && (
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-[#a3a3a3] hover:text-[#0088cc]"><Edit className="h-4 w-4" /></button>
                        <button className="text-[#a3a3a3] hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isAdmin ? 5 : 4} className="py-8 text-center text-sm text-[#737373]">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
