import React from "react";

import Avatar from "./Avatar";
import styles from '../styles/PaymentCard.module.css';

export default function PaymentCard({ payment }) {
  return (
    <div className={styles.wrapper}>
      <Avatar url={payment.user.avaterURL} name={payment.user.name} />
      <div className={styles.userTimestampWrapper}>
        <span className={styles.username}>{payment.user.name}</span>
        <span className={styles.timestamp}>{payment.timestamp}</span>
      </div>
      <div className={styles.amount}>{payment.amount}</div>
    </div>
  );
}
