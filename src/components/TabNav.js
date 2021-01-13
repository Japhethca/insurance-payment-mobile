import React from 'react';

import styles from '../styles/TabNav.module.css'

import Icon from './Icon';

export default function TabNav(props) {
    return <div className={styles.wrapper}>
        <Icon name="home" className={styles.icon} />
        <Icon name="alarm" className={styles.icon} />
        <Icon name="credit-card" className={styles.icon} />
        <Icon name="user" className={styles.icon}/>
    </div>;
}