import React from 'react'
import styles from "./themeToggle.module.css";
import Image from 'next/image';

function ThemeToggle() {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={14} height={14} className={styles.sun} />   
    </div>
  )
}

export default ThemeToggle