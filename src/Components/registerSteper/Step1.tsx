import { useState } from "react";
import styles from "./Step1.module.css";
import { ArrowRight, Mail } from "lucide-react";

type FormData = {
  email: string;
  otp: string;
};

type Props = {
  formData: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  next: () => void;
};

export default function Step1({ formData, updateFields, next }: Props) {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (!formData.email || !formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (formData.otp === "123456") {
      next();
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Mail size={48} />
      </div>
      <h2 className={styles.title}>Enter your email address</h2>
      <p className={styles.subtitle}>
        You will receive an email with a one-time password
      </p>

      {!otpSent ? (
        <>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
          <button className={styles.button} onClick={handleSendOtp}>
            Next <ArrowRight size={18} />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={(e) => updateFields({ otp: e.target.value })}
          />
          <button className={styles.button} onClick={handleVerifyOtp}>
            Verify <ArrowRight size={18} />
          </button>
        </>
      )}

      <button className={styles.cancel}>Cancel</button>
    </div>
  );
}
