import React from "react";
import { format  } from 'date-fns'
import Avatar from "./Avatar";
import styles from '../styles/PaymentCard.module.css';

export default function PaymentCard({ payment }) {
  return (
    <div className={styles.wrapper}>
      <Avatar url={payment.user.avaterURL} name={payment.user.name} />
      <div className={styles.userTimestampWrapper}>
        <span className={styles.username}>{payment.user.name}</span>
        <span className={styles.timestamp}>{format(new Date(payment.timestamp), 'h:mm a')}</span>
      </div>
      <div className={`${styles.amount} ${payment.amount.startsWith('+') && styles.green}`}>{payment.amount}</div>
    </div>
  );
}
