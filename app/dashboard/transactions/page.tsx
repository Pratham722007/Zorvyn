"use client";

import TransactionTable from "../components/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          All Transactions
        </h2>
        <p className="mt-2 text-sm text-[#a3a3a3]">
          A comprehensive view of your entire transaction history.
        </p>
      </div>
      <TransactionTable />
    </div>
  );
}
