"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./RevenueChart.module.css";

const data = [
  { month: "Jan", revenue: 450 },
  { month: "Feb", revenue: 200 },
  { month: "Mar", revenue: 700 },
  { month: "Apr", revenue: 320 },
  { month: "May", revenue: 760 },
  { month: "Jun", revenue: 880 },
  { month: "Jul", revenue: 1050 },
  { month: "Aug", revenue: 620 },
  { month: "Sep", revenue: 1080 },
  { month: "Oct", revenue: 920 },
  { month: "Nov", revenue: 650 },
  { month: "Dec", revenue: 410 },
];

export default function RevenueChart() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Revenue analytics</h2>
        <span className={styles.filter}>Yearly</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#ea580c" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
