import React from 'react'
import styles from './header.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import {ImFire} from 'react-icons/im'

const Header = (props) => {
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
                    {!props.authStatus
                        ? <NavLink className={styles.profileNavBarItem} to='./auth'>
                            <AiOutlineUser className={styles.navBarSvg}/>
                            Войти
                        </NavLink>
                        : <NavLink className={styles.profileNavBarItem} to='./profile'>
                            <AiOutlineUser className={styles.navBarSvg}/>
                            Рафиль
                        </NavLink>
                    }
                    <NavLink className={styles.profileNavBarItem} to='./orders'>
                        <ImFire className={styles.navBarSvg}/>
                        Заказы
                    </NavLink>
                    <NavLink className={styles.profileNavBarItem} to='./favorites'>
                        <MdFavoriteBorder className={styles.navBarSvg}/>
                        Избранное
                    </NavLink>
                    <NavLink className={styles.profileNavBarItem} to='./cart'>
                        <AiOutlineShoppingCart className={styles.navBarSvg}/>
                        Корзина
                    </NavLink>
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

export default connect(
    state => ({
        authStatus: state.auth.authStatus,
    }),
    dispatch => ({})
)(Header);