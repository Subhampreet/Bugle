"use client";

import React, { useContext } from 'react'
import styles from "./themeToggle.module.css";
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const {toggle,theme} = useContext(ThemeContext);
  
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={14} height={14} className={styles.sun} />   
    </div>
  )
}

export default ThemeToggle