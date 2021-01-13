import React from "react";

import styles from '../styles/UserList.module.css';

export default function UserList(props) {
  return (
    <div className={styles.wrapper}>
      {props.users.map((user, index) => (
        <User key={`${user.firstName}-${index}`} user={user} />
      ))}
    </div>
  );
}

function User({ user }) {
  return (
    <div className={styles.userWrapper}>
      <img className={styles.avatar} src={user.avatarURL} alt="" srcSet="" />
      <span>{user.firstName}</span>
    </div>
  );
}
