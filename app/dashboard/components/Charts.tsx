"use client";

import {
  LineChart,
  Line,
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
import { balanceOverTime, expensesByCategory } from "../data/mockData";

const COLORS = ["#0088cc", "#00aaff", "#005580", "#66ccff", "#33bbff"];

export function RevenueChart() {
  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-white mb-6">Balance Over Time</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={balanceOverTime} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="name" stroke="#a3a3a3" tickLine={false} axisLine={false} />
            <YAxis stroke="#a3a3a3" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#333", color: "#fff" }}
              itemStyle={{ color: "#0088cc" }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#0088cc"
              strokeWidth={3}
              dot={{ r: 4, fill: "#0088cc", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#fff", stroke: "#0088cc", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ExpenseCategoryChart() {
  return (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-white mb-6">Expenses by Category</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expensesByCategory}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {expensesByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#333", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              formatter={(value: number) => [`$${value}`, "Amount"]}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
