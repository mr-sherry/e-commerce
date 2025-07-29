import styles from "./RecentOrders.module.css";

type Order = {
  id: string;
  date: string;
  customer: string;
  items: number;
  paid: boolean;
  status: "Pending" | "Complete" | "Cancel" | "Hold";
  total: string;
};

const orders: Order[] = [
  {
    id: "#00745",
    date: "2022-12-23",
    customer: "Guinever Cassi",
    items: 2,
    paid: true,
    status: "Pending",
    total: "$2,742.00",
  },
  {
    id: "#00321",
    date: "2022-11-25",
    customer: "Hans Jensen",
    items: 11,
    paid: false,
    status: "Complete",
    total: "$2,040.00",
  },
  {
    id: "#00114",
    date: "2022-10-22",
    customer: "Vivo Lock",
    items: 3,
    paid: false,
    status: "Complete",
    total: "$5,039.00",
  },
  {
    id: "#00422",
    date: "2022-09-17",
    customer: "Thorfinn Odd",
    items: 4,
    paid: false,
    status: "Cancel",
    total: "$790.00",
  },
  {
    id: "#00332",
    date: "2022-08-12",
    customer: "Thor Odinson",
    items: 9,
    paid: true,
    status: "Hold",
    total: "$826.00",
  },
];

export default function RecentOrders() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent orders</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer}</td>
                <td>{order.items} items</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      order.paid ? styles.green : styles.orange
                    }`}
                  >
                    {order.paid ? "Yes" : "No"}
                  </span>
                </td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      styles[order.status.toLowerCase()]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
