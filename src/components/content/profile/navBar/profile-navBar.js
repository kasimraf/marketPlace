import React from 'react';
import ProfileMinData from "./profile-minData/profile-minData";
import style from './profile-navBar.module.scss'
import {NavLink} from "react-router-dom";

const ProfileNavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.intro}>
                <ProfileMinData />
            </div>
            <div className={style.navBar}>
                <h4>Личная информация</h4>
                <NavLink  className={style.navBarItem} to='./'><p>Мои данные</p></NavLink>
                <h4>Магазин</h4>
                <NavLink className={style.navBarItem} to='./market'><p>Главная</p></NavLink>
                <NavLink className={style.navBarItem} to='./goods'><p>Товары</p></NavLink>
                <h4>Заказы</h4>
                <NavLink className={style.navBarItem} to='/cart'><p>Моя корзина</p></NavLink>
                <NavLink className={style.navBarItem} to='/orders'><p>Мои заказы</p></NavLink>
            </div>
        </div>
    );
};

export default ProfileNavBar;