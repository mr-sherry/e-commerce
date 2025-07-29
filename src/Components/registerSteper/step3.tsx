import { ChangeEvent } from "react";
import styles from "./Step3.module.css";

type FormData = {
  store_name: string;
  store_logo: File | null;
  store_slug?: string;
  description?: string;
  phone: string;
  address: string;
  city: string;
  country: string;
};

type Props = {
  formData: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  next: () => void;
  back: () => void;
};

export default function Step3({ formData, updateFields, next, back }: Props) {
  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateFields({ store_logo: file });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Store Information</h2>

      <div className={styles.group}>
        <label>Store Name</label>
        <input
          type="text"
          value={formData.store_name}
          onChange={(e) => updateFields({ store_name: e.target.value })}
        />
      </div>

      <div className={styles.group}>
        <label>Store Logo</label>
        <input type="file" accept="image/*" onChange={handleLogoChange} />
      </div>

      <div className={styles.group}>
        <label>Store Slug (Optional)</label>
        <input
          type="text"
          value={formData.store_slug || ""}
          onChange={(e) => updateFields({ store_slug: e.target.value })}
        />
      </div>

      <div className={styles.group}>
        <label>Description (Optional)</label>
        <textarea
          value={formData.description || ""}
          onChange={(e) => updateFields({ description: e.target.value })}
        />
      </div>

      <div className={styles.group}>
        <label>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>

      <div className={styles.group}>
        <label>Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => updateFields({ address: e.target.value })}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </div>

        <div className={styles.group}>
          <label>Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => updateFields({ country: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={back} className={styles.backBtn}>
          Back
        </button>
        <button onClick={next} className={styles.nextBtn}>
          Submit
        </button>
      </div>
    </div>
  );
}
