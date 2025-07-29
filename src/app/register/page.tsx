"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./register.module.css";
import Step1 from "@/Components/registerSteper/Step1";
import Step2 from "@/Components/registerSteper/Step2";
import Step3 from "@/Components/registerSteper/Step3";
import { motion, AnimatePresence } from "framer-motion";

type RegisterFormData = {
  email: string;
  otp: string;
  name?: string;
  password?: string;
  role: string;
  store_name: string;
  store_logo: File | null;
  store_slug?: string;
  description?: string;
  phone: string;
  address: string;
  city: string;
  country: string;
};

export default function Register() {
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    email: "",
    otp: "",
    name: "",
    password: "",
    role: "",
    store_name: "",
    store_logo: null,
    store_slug: "",
    description: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const updateFields = (fields: Partial<RegisterFormData>) => {
    setRegisterFormData((prev) => ({ ...prev, ...fields }));
  };

  const firstStep = () => {
    setDirection("forward");
    setStep((s) => s + 1);
    console.log("Final Step Data:", registerFormData);
  };

  const secondStep = () => {
    if (registerFormData.role === "seller") {
      setDirection("forward");
      setStep((s) => s + 1);
    } else {
      lastStep();
    }
  };

  const lastStep = () => {
    setDirection("forward");
    console.log("Final Step Data:", registerFormData);
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((s) => s - 1);
  };

  return (
    <div className={styles.registerContainer}>
      {/* Left Section */}
      <div className={styles.left}>
        <div>
          <h1>Simplify Management with our dashboard</h1>
          <p>
            Simplify Your E-Commerce Management with our User-Friendly Seller
            Dashboard.
          </p>
        </div>

        <div className={styles.imagesLeft}>
          <Image
            src="/3d/registerChr1.png"
            alt="Register Character 1"
            width={100}
            height={215}
          />
          <Image
            src="/3d/registerChr.jpg"
            alt="Register Character 2"
            width={100}
            height={215}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <AnimatePresence mode="wait" initial={false}>
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ y: direction === "forward" ? 100 : -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "forward" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Step1
                formData={registerFormData}
                updateFields={updateFields}
                next={firstStep}
              />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ y: direction === "forward" ? 100 : -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "forward" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Step2
                formData={registerFormData}
                updateFields={updateFields}
                next={secondStep}
                back={prevStep}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step2"
              initial={{ y: direction === "forward" ? 100 : -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "forward" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Step3
                formData={registerFormData}
                updateFields={updateFields}
                next={lastStep}
                back={prevStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
