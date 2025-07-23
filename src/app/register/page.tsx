"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./register.module.css";
import Step1 from "@/Components/registerSteper/Step1";
import { Eye, EyeOff } from "lucide-react";

type FormData = {
  email: string;
  otp: string;
  password?: string;
};

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    otp: "",
    password: "",
  });

  const [step, setStep] = useState(1);

  const updateFields = (fields: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

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
        {step === 1 && (
          <Step1
            formData={formData}
            updateFields={updateFields}
            nextStep={nextStep}
          />
        )}
        {step === 2 && <div>Step 2 Coming Soon</div>}
      </div>
    </div>
  );
}
