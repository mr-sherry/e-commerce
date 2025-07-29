"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import styles from "./TrafficSources.module.css";

const data = [
  { name: "Instagram", value: 2922, color: "#ea580c	" },
  { name: "Facebook", value: 2742, color: "#fde68a" },
  { name: "YouTube", value: 3272, color: "#fbbf24" },
  { name: "Twitter", value: 2303, color: "	#fb923c" },
];

export default function TrafficSources() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sales by traffic source</h2>
      <div className={styles.content}>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.list}>
          {data.map((item, idx) => (
            <div key={idx} className={styles.listItem}>
              <span className={styles.label}>{item.name}</span>
              <span className={styles.amount}>
                ${item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
