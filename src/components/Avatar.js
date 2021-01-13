import React from 'react'

import styles from '../styles/Avatar.module.css';

export default function Avatar(props) {
    if (props.url) {
        return <img className={styles.image} src={props.url} alt={props.name} srcSet=""/>
    }
    return <div className={styles.nameInitials}>{props.name[0]}</div>
}