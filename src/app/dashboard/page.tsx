import React from "react";
import styles from "./DashBoard.module.css";
import Image from "next/image";
import image from "../../../public/Images/Dollar.png";
import image1 from "../../../public/Images/Cart1.png";
import image2 from "../../../public/Images/user.png";
import TopCategoryChart from "@/Components/TopCategories/TopCategories";

const page = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.innerdiv}>
          <div className={styles.heading}>
            <h5>Total Sales</h5>
            <h2>$9487,370</h2>
          </div>
          <div className={styles.innerdiv1}>
            <div className={styles.Dollar}>
              <Image className={styles.innerDollar} src={image} alt="" />
            </div>
            <div className={styles.percentage}>
              <p>+3.34%</p>
              <div className={styles.paragraph}>
                <p>Vs last week</p>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.innerdiv5}>
          <div className={styles.heading}>
            <h5>Total Orders</h5>
            <h2>58375</h2>
          </div>
          <div className={styles.innerdiv1}>
            <div className={styles.Cart1}>
              <Image className={styles.innercart1} src={image1} alt="" />
            </div>
            <div className={styles.percentage1}>
              <p>-2.34%</p>
              <div className={styles.paragraph1}>
                <p>Vs last week</p>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////// */}
        <div className={styles.innerdiv5}>
          <div className={styles.heading}>
            <h5>Total Visters</h5>
            <h2>948,370</h2>
          </div>
          <div className={styles.innerdiv1}>
            <div className={styles.Dollar1}>
              <Image className={styles.innerprofile1} src={image2} alt="" />
            </div>
            <div className={styles.percentage2}>
              <p className={styles.para}>+8.34%</p>
              <div className={styles.paragraph1}>
                <p>Vs last week</p>
              </div>
            </div>
          </div>
        </div>
        <TopCategoryChart />
      </div>
    </>
  );
};

export default page;
