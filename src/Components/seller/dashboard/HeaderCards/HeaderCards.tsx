import styles from "./HeaderCards.module.css";

const cardData = [
  {
    title: "Sales total",
    value: "$2456",
    change: "+26%",
    note: "Compared to December 2023",
    color: "green",
  },
  {
    title: "Average order value",
    value: "$372.98",
    change: "-16%",
    note: "Compared to December 2023",
    color: "red",
  },
  {
    title: "Total orders",
    value: "678",
    change: "+46%",
    note: "Compared to December 2023",
    color: "green",
  },
];

export default function HeaderCards() {
  return (
    <div className={styles.container}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.title}>{card.title}</div>
          <div className={styles.value}>{card.value}</div>
          <div className={styles.note}>
            <span
              className={card.color === "green" ? styles.green : styles.red}
            >
              {card.change}
            </span>{" "}
            {card.note}
          </div>
        </div>
      ))}
    </div>
  );
}
