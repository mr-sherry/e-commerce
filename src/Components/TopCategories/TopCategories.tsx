"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./TopCategories.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopCategoryChart = () => {
  const data = {
    labels: ["Electronics", "Fashion", "Home & Kitchen", "Beauty & Care"],
    datasets: [
      {
        label: "Sales %",
        data: [40, 25, 20, 15],
        backgroundColor: ["#ff7300", "#ff9900", "#ffa61f99", "#ffa51f81"],
        borderColor: ["#fff", "#fff", "#fff", "#fff"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Top Categories</h2>
      <p className={styles.subtext}>Based on last 30 days sales</p>
      <div className={styles.chartWrapper}>
        <Doughnut data={data} />
      </div>
      <div className={styles.labels}>
        {data.labels.map((label, i) => (
          <div key={i} className={styles.labelItem}>
            <span
              className={styles.colorDot}
              style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
            ></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategoryChart;
