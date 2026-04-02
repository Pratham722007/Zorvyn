export const transactions = [
  { id: "tx-1", date: "2026-04-02", amount: 1200.50, category: "Software", type: "Expense" },
  { id: "tx-2", date: "2026-04-01", amount: 4500.00, category: "Services", type: "Income" },
  { id: "tx-3", date: "2026-03-31", amount: 300.00, category: "Marketing", type: "Expense" },
  { id: "tx-4", date: "2026-03-29", amount: 8560.00, category: "Product Sales", type: "Income" },
  { id: "tx-5", date: "2026-03-28", amount: 900.25, category: "Hardware", type: "Expense" },
  { id: "tx-6", date: "2026-03-26", amount: 200.00, category: "Travel", type: "Expense" },
  { id: "tx-7", date: "2026-03-25", amount: 12000.00, category: "Enterprise Contract", type: "Income" },
  { id: "tx-8", date: "2026-03-22", amount: 150.00, category: "Subscriptions", type: "Expense" },
  { id: "tx-9", date: "2026-03-21", amount: 430.00, category: "Software", type: "Expense" },
  { id: "tx-10", date: "2026-03-18", amount: 920.00, category: "Marketing", type: "Expense" },
  { id: "tx-11", date: "2026-03-15", amount: 5000.00, category: "Services", type: "Income" },
  { id: "tx-12", date: "2026-03-10", amount: 120.00, category: "Office Supplies", type: "Expense" },
];

export const balanceOverTime = [
  { name: "Mar 1", balance: 12000 },
  { name: "Mar 3", balance: 12200 },
  { name: "Mar 5", balance: 12400 },
  { name: "Mar 7", balance: 13500 },
  { name: "Mar 9", balance: 14000 },
  { name: "Mar 11", balance: 14600 },
  { name: "Mar 13", balance: 15800 },
  { name: "Mar 15", balance: 16100 },
  { name: "Mar 17", balance: 20800 },
  { name: "Mar 19", balance: 20600 },
  { name: "Mar 21", balance: 32200 },
  { name: "Mar 23", balance: 32500 },
  { name: "Mar 25", balance: 31400 },
  { name: "Mar 27", balance: 31600 },
  { name: "Mar 29", balance: 39860 },
  { name: "Mar 31", balance: 40400 },
  { name: "Apr 2", balance: 42500 },
];

export const expensesByCategory = [
  { name: "Software", value: 1630 },
  { name: "Marketing", value: 4220 },
  { name: "Hardware", value: 900 },
  { name: "Travel", value: 2000 },
  { name: "Subscriptions", value: 650 },
  { name: "Office Supplies", value: 120 },
  { name: "Legal", value: 800 },
];

export const INSIGHTS = {
  highestExpenseCategory: "Marketing",
  highestExpenseAmount: 4220,
  monthlyChange: "+15.2%",
  activeSubscriptions: 12,
};
