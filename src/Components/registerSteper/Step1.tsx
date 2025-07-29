import { useState } from "react";
import styles from "./Step1.module.css";
import { ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendOtp, verifyOtp } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

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

  const sendOtpMutation = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      if (data.message) alert(data.message);
      setOtpSent(true);
    },
    onError: (error: any) => {
      console.error("Error sending OTP:", error);
      alert(error.message || "Failed to send OTP. Please try again.");
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      if (data.message) alert(data.message);
      next();
    },
    onError: (error: any) => {
      alert(error.message || "Failed to verify OTP. Please try again.");
    },
  });

  return (
    <div className={styles.container}>
      {!otpSent ? (
        <>
          <div className={styles.icon}>
            <Mail size={48} />
          </div>
          <h2 className={styles.title}>Enter your email address</h2>
          <p className={styles.subtitle}>
            You will receive an email with a one-time password
          </p>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
          <button
            className={styles.button}
            onClick={() => {
              if (!formData.email || !formData.email.includes("@")) {
                alert("Please enter a valid email.");
                return;
              }
              sendOtpMutation.mutate({ email: formData.email });
            }}
          >
            Send OTP <ArrowRight size={18} />
          </button>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="otp-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.icon}>
              <Mail size={48} />
            </div>
            <h2 className={styles.title}>Enter OTP</h2>
            <p className={styles.subtitle}>
              You will receive an email with a one-time password
            </p>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => updateFields({ otp: e.target.value })}
            />
            <button
              className={styles.button}
              onClick={() =>
                verifyOtpMutation.mutate({
                  email: formData.email,
                  otp: formData.otp,
                })
              }
            >
              Verify <ArrowRight size={18} />
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
