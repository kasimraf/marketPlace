import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h4>Backend </h4>
                разработал <a href="https://github.com/muharlyam">muharlyam</a>
            </div>
            <div className={styles.item}>
                <h4>Frontend </h4>
                разработал <a href="https://github.com/kasimraf">kasimraf</a>
            </div>
        </div>
    )
}

export default Footer;
