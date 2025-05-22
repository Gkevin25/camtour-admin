"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 580000,
  },
  {
    name: "Feb",
    total: 690000,
  },
  {
    name: "Mar",
    total: 1100000,
  },
  {
    name: "Apr",
    total: 1400000,
  },
  {
    name: "May",
    total: 1800000,
  },
  {
    name: "Jun",
    total: 2100000,
  },
  {
    name: "Jul",
    total: 1800000,
  },
  {
    name: "Aug",
    total: 1600000,
  },
  {
    name: "Sep",
    total: 1200000,
  },
  {
    name: "Oct",
    total: 1500000,
  },
  {
    name: "Nov",
    total: 1700000,
  },
  {
    name: "Dec",
    total: 2500000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip
          formatter={(value: number) => [`${value.toLocaleString()} XAF`, "Revenue"]}
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
        />
        <Bar dataKey="total" fill="#006633" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
