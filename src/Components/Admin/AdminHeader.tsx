"use client";

import React from "react";
import styles from "./AdminHeader.module.css";
import Image from "next/image";
import logo from "../../../public/Images/store-3.png";

const AdminHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Image  src={logo} alt="Logo" className={styles.logo} />
        <div>
          <h1>Hi,Ahmad:Shafqat!</h1>
          <p>Let's take a look at your activity today</p>
        </div>
      </div>

      <div className={styles.right}>
        <input type="text" placeholder="Search for health data" />
        <button>Upgrade</button>
      </div>
    </div>
  );
};

export default AdminHeader;
