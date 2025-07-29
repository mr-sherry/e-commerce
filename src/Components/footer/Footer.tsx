"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import logo from "../../../public/Images/logo-70.png";
import logo1 from "../../../public/Images/logo1.png";
import logo2 from "../../../public/Images/logo2.png";
import logo3 from "../../../public/Images/logo3.png";
import logo4 from "../../../public/Images/logo4.png";
import logo5 from "../../../public/Images/logo5.png";
import logo6 from "../../../public/Images/logo6.png";
import logo7 from "../../../public/Images/logo7.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.images}>
        <Image className={styles.allimg} src={logo1} alt="logo1" />
        <Image className={styles.allimg} src={logo2} alt="logo2" />
        <Image className={styles.allimg1} src={logo3} alt="logo3" />
        <Image className={styles.allimg} src={logo4} alt="logo4" />
        <Image className={styles.allimg} src={logo5} alt="logo5" />
        <Image className={styles.allimg} src={logo6} alt="logo6" />
        <Image className={styles.allimg} src={logo7} alt="logo7" />
      </div>
      <footer className={styles.footer}>
        <div className={styles.newsletter}>
          <div className={styles.logo}>
            <Image src={logo} alt="main logo" />
          </div>
          <h2>
            Subscribe To Your Newsletter To Stay <br />
            Updated About Discounts
          </h2>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="person@email.com" />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div>
            <h4>PRODUCTS</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h4>LEGAL PAGES</h4>
            <ul>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h4>PRODUCTS</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h4>PRODUCTS</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h4>LEGAL PAGES</h4>
            <ul>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum Text</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </div>

        <p className={styles.copy}>Copyright © 2025 E-Commerce Bahawalpur</p>
      </footer>
    </>
  );
};

export default Footer;
