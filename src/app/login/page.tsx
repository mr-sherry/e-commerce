"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import styles from "./login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Login
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left Section */}
      {/* Right Section with Form */}
      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup} style={{ position: "relative" }}>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "36px",
                right: "10px",
                cursor: "pointer",
              }}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>

          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
      <div className={styles.left}>
        <div>
          <h1>Simplyfy Management with our dashboard</h1>
          <div></div>
          <p>
            Simplyfy Your E-Commerce Managment with our User-Friendly Seller
            Dashboard.
          </p>
        </div>

        <div className={styles.imagesLeft}>
          <Image
            src="/3d/registerChr1.png"
            alt="Register Image"
            width={100}
            height={215}
          />
          <Image
            src="/3d/registerChr.jpg"
            alt="Register Image"
            width={100}
            height={215}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
