"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { transactions as initialTransactions, balanceOverTime as initialBalance } from "../data/mockData";

export type TransactionType = "Income" | "Expense";

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: TransactionType;
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  computedBalance: { name: string; balance: number }[];
  computedExpenses: { name: string; value: number }[];
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }: { children: ReactNode }) {
  // Sort initial bounds by date descending
  const [transactions, setTransactions] = useState<Transaction[]>(
    [...initialTransactions as Transaction[]].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );

  const addTransaction = (tx: Omit<Transaction, "id">) => {
    const newTx = { ...tx, id: `tx-${Date.now()}` };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const { totalBalance, totalIncome, totalExpenses, computedExpenses } = useMemo(() => {
    let income = 0;
    let expenses = 0;
    const categoryMap: Record<string, number> = {};

    transactions.forEach(tx => {
      if (tx.type === "Income") {
        income += tx.amount;
      } else {
        expenses += tx.amount;
        if (categoryMap[tx.category]) {
          categoryMap[tx.category] += tx.amount;
        } else {
          categoryMap[tx.category] = tx.amount;
        }
      }
    });

    const expensesArray = Object.entries(categoryMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    // Initial base configuration to mimic the dashboard mock state closely
    return {
      totalBalance: 24000 + income - expenses,
      totalIncome: income,
      totalExpenses: expenses,
      computedExpenses: expensesArray,
    };
  }, [transactions]);

  const computedBalance = useMemo(() => {
    if (transactions.length === initialTransactions.length) {
      return initialBalance;
    }
    const lastPoint = initialBalance[initialBalance.length - 1];
    return [
      ...initialBalance.slice(0, -1),
      { ...lastPoint },
      { name: "Live", balance: totalBalance }
    ];
  }, [transactions, totalBalance]);

  return (
    <TransactionContext.Provider value={{
      transactions,
      addTransaction,
      deleteTransaction,
      computedBalance,
      computedExpenses,
      totalBalance,
      totalIncome,
      totalExpenses
    }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error("useTransactions must be used within a TransactionProvider");
  }
  return context;
}
