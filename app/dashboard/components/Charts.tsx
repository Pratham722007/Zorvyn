"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useTransactions } from "../context/TransactionContext";

const COLORS = ["#0088cc", "#00aaff", "#005580", "#66ccff", "#33bbff", "#003366", "#0077b3"];

export function RevenueChart() {
  const { computedBalance } = useTransactions();

  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-medium text-white mb-2">Balance Over Time</h3>
      <p className="text-sm text-[#a3a3a3] mb-8">Detailed progression of your asset value across the month.</p>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={computedBalance} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0088cc" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#0088cc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="name" stroke="#a3a3a3" tickLine={false} axisLine={false} tickMargin={10} minTickGap={30} />
            <YAxis stroke="#a3a3a3" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} tickMargin={10} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f", borderRadius: "8px", color: "#fff", padding: "12px" }}
              itemStyle={{ color: "#0088cc", fontWeight: "bold" }}
              labelStyle={{ color: "#a3a3a3", marginBottom: "4px" }}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#0088cc"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorBalance)"
              activeDot={{ r: 8, fill: "#fff", stroke: "#0088cc", strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ExpenseCategoryChart() {
  const { computedExpenses } = useTransactions();

  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-medium text-white mb-2">Expenses by Category</h3>
      <p className="text-sm text-[#a3a3a3] mb-8">Comprehensive breakdown of all out-bound transactions.</p>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={computedExpenses}
              cx="50%"
              cy="50%"
              innerRadius={110}
              outerRadius={150}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
              cornerRadius={6}
            >
              {computedExpenses.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f", borderRadius: "8px", color: "#fff", padding: "12px" }}
              itemStyle={{ color: "#fff", fontWeight: "bold" }}
              formatter={(value: any) => [`$${value.toLocaleString()}`, "Total Amount"]}
            />
            <Legend 
              verticalAlign="bottom" 
              height={40} 
              iconType="circle" 
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
