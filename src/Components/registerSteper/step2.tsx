// Step2.tsx
import React, { useState } from "react";
import styles from "./Step2.module.css";

type FormData = {
  email: string;
  otp: string;
  name: string;
  password: string;
  role: string;
};

type Props = {
  formData: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  next: () => void;
  back: () => void;
};

export default function Step2({ formData, updateFields, next, back }: Props) {
  const [role, setRole] = useState<string>("");
  return (
    <div className={styles.stepContainer}>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => updateFields({ name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={formData.password || ""}
          onChange={(e) => updateFields({ password: e.target.value })}
          placeholder="Create password"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Choose Role</label>
        <select
          onChange={(e) => {
            updateFields({ role: e.target.value });
            setRole(e.target.value);
          }}
          className={styles.selectRole}
          name=""
          id=""
        >
          <option value="">Select Role</option>
          <option value="user">user</option>
          <option value="seller">Seller</option>
        </select>
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={back}>Back</button>
        {role && <button onClick={next}>Next</button>}
      </div>
    </div>
  );
}
