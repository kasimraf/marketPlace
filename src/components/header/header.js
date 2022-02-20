import React from 'react'
import styles from './header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.midRow}>
                <div>
                    <NavLink className={styles.title} to='./'>әзүн</NavLink>
                </div>
                <div className={styles.catalogBtn}>
                    <button disabled>Каталог</button>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="Искать на әзүн"/>
                </div>
                <div className={styles.profileNavBar}>
                    <ul className={styles.profileNavBarList}>
                        <li className={styles.profileNavBarListItem}>
                            Винни-Пух
                        </li>
                        <li className={styles.profileNavBarListItem}>
                            Заказы
                        </li>
                        <li className={styles.profileNavBarListItem}>
                            Избранное
                        </li>
                        <li className={styles.profileNavBarListItem}>
                            Корзина
                        </li>

                    </ul>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.navBar}>
                    <div>
                        <NavLink className={styles.navBarItem} to="/markets">Магазины</NavLink>
                    </div>
                    <div className={styles.navBarItem}>
                        <NavLink className={styles.navBarItem} to="/goods">Список всех товаров</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;