"use client";

import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../public/Images/logo-70.png";
import vetorm from "../../../public/Images/Vector-men.png";
import vectorb from "../../../public/Images/Combined-Shape.png";
import Image from "next/image";

import { FaUser, FaShoppingBag, FaAngleDown } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <Image src={Logo} alt="Logo" className={styles.logo} />

      <ul className={styles.navList}>
        <li>Home</li>
        <li className={styles.dropdown}>
          Categories <FaAngleDown size={12} />
          <ul className={styles.dropdownMenu}>
            <li>Mobile</li>
            <li>Laptops</li>
            <li>Accessories</li>
          </ul>
        </li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>

      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image className={styles.img1} src={vetorm} alt="User Icon" />
          <div className={styles.dropdown1}>
            <FaAngleDown size={12} />
            <ul className={styles.dropdownMenu1}>
              <li>Mobile</li>
              <li>Laptops</li>
              <li>Accessories</li>
            </ul>
          </div>
          <Image className={styles.img3} src={vectorb} alt="Bag Icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
