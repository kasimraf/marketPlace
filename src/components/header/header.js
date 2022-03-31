import React from 'react'
import styles from './header.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AiOutlineUser} from 'react-icons/ai'
import {BiBasket} from 'react-icons/bi'
import {ImFire} from 'react-icons/im'
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import {CgHeart} from "react-icons/cg";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.midRow}>
                <div className={styles.titleBlock}>
                    <NavLink className={styles.title} to='./'>tatmarket</NavLink>
                </div>
                <div className={styles.profileNavBar}>
                    {!props.authStatus
                        ? <NavLink className={styles.profileNavBarItem} to='./auth'>
                            <AiOutlineUser className={styles.navBarSvg}/>
                            Войти
                        </NavLink>
                        : <NavLink className={styles.profileNavBarItem} to='./profile'>
                            <AiOutlineUser className={styles.navBarSvg}/>
                            <span>{props.profile.name?.split(' ')[0]}</span>
                        </NavLink>
                    }
                    {props.authStatus
                        ? <NavLink className={styles.profileNavBarItem} to='favorites'>
                            <Badge badgeContent={props.favorites?.goods?.length} className={styles.badge} color="primary">
                                <CgHeart className={styles.navBarSvg}/>
                                Избранное
                            </Badge>
                        </NavLink> : <></>
                    }
                    <NavLink className={styles.profileNavBarItem} to='./orders'>
                        <ImFire className={styles.navBarSvg}/>
                        Заказы
                    </NavLink>
                    <NavLink className={styles.profileNavBarItem} to='./cart'>
                        <Badge badgeContent={props.cart?.goods?.length} className={styles.badge} color="primary">
                            <BiBasket className={styles.navBarSvg}/>
                            Корзина
                        </Badge>
                    </NavLink>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.navBar}>
                    <div>
                        <NavLink to="/markets" style={{"textDecoration": "none"}}><Button variant="outlined">Магазины</Button></NavLink>
                    </div>
                    <div className={styles.navBarItem}>
                        <NavLink to="/goods" style={{"textDecoration": "none"}}><Button variant="outlined">Список всех товаров</Button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        authStatus: state.auth.authStatus,
        profile: state.auth.profile,
        cart: state.cart.cart,
        favorites: state.favorites.favorites
    }),
    dispatch => ({})
)(Header);