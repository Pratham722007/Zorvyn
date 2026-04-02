export const transactions = [
  { id: "tx-1", date: "2026-04-01", amount: 1200.50, category: "Software", type: "Expense" },
  { id: "tx-2", date: "2026-04-01", amount: 4500.00, category: "Services", type: "Income" },
  { id: "tx-3", date: "2026-03-29", amount: 300.00, category: "Marketing", type: "Expense" },
  { id: "tx-4", date: "2026-03-28", amount: 8560.00, category: "Product Sales", type: "Income" },
  { id: "tx-5", date: "2026-03-25", amount: 900.25, category: "Hardware", type: "Expense" },
  { id: "tx-6", date: "2026-03-24", amount: 200.00, category: "Travel", type: "Expense" },
  { id: "tx-7", date: "2026-03-20", amount: 12000.00, category: "Enterprise Contract", type: "Income" },
  { id: "tx-8", date: "2026-03-15", amount: 150.00, category: "Subscriptions", type: "Expense" },
];

export const balanceOverTime = [
  { name: "Jan", balance: 12000 },
  { name: "Feb", balance: 19000 },
  { name: "Mar", balance: 16000 },
  { name: "Apr", balance: 25060 },
  { name: "May", balance: 29000 },
  { name: "Jun", balance: 34500 },
];

export const expensesByCategory = [
  { name: "Software", value: 1200 },
  { name: "Marketing", value: 3000 },
  { name: "Hardware", value: 900 },
  { name: "Travel", value: 2000 },
  { name: "Subscriptions", value: 600 },
];

export const INSIGHTS = {
  highestExpenseCategory: "Marketing",
  highestExpenseAmount: 3000,
  monthlyChange: "+15.2%",
  activeSubscriptions: 8,
};
