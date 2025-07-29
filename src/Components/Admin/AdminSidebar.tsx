"use client";

import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";
import { FiLogOut } from "react-icons/fi";
import image from "../../../public/Images/kaji.jpg";

import Image from "next/image";

import {
  FaHome,
  FaTachometerAlt,
  FaClipboard,
  FaCalendar,
  FaBell,
  FaCog,
} from "react-icons/fa";

const AdminSidebar: React.FC = () => {

  const [icon,setIcon]=useState("");
  
  
  return (
    <>
      <div className={styles.topdiv1}>
        <div>
          <div className={styles.sidebar}>
            <div className={styles.top}>
              <div className={`${styles.iconWrapper} ${icon==="icon-1"? styles.active : ""}`}>
                <FaHome id="icon-1" onClick={()=>setIcon("icon-1")} />
              </div>
              <div className={`${styles.iconWrapper} ${icon==="icon-2"? styles.active : ""}`} >
                <FaTachometerAlt id="icon-2" onClick={()=>setIcon("icon-2")} />
              </div>
              <div className={`${styles.iconWrapper} ${icon==="icon-3"? styles.active : ""}`}>
                <FaClipboard id="icon-3" onClick={()=>setIcon("icon-3")} />
              </div>
              <div className={`${styles.iconWrapper} ${icon==="icon-4"? styles.active : ""}`}>
                <FaCalendar id="icon-4" onClick={()=>setIcon("icon-4")}/>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.bottom}>
             
                <div className={`${styles.iconWrapper} ${icon==="icon-5" ?styles.active:""}`}>
                  <FaBell id="icon-5" onClick={()=>setIcon("icon-5")} />
                
                </div>
           
              <div className={`${styles.iconWrapper} ${icon==="icon-6" ? styles.active : ""}`}>
                <FaCog id="icon-6" onClick={()=>setIcon("icon-6")} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.bottom}>
            <div className={`${styles.iconWrapper} ${icon==="icon-7" ? styles.active:""}`}>
              <FiLogOut id="icon-7"  onClick={()=>setIcon("icon-7")} />
            </div>
            <div className={styles.profile}>
              <Image
                className={styles.img1}
                src={image}
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
