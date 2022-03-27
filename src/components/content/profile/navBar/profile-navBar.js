import React from 'react';
import ProfileMinData from "./profile-minData/profile-minData";
import style from './profile-navBar.module.scss'
import {NavLink, } from "react-router-dom";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import {logOutAction} from "../../../../redux/actions/auth-actions";

const ProfileNavBar = (props) => {
    return (
        <div className={style.container}>
            <div className={style.intro}>
                <ProfileMinData />
            </div>
            <div className={style.navBar}>
                <h4>Личная информация</h4>
                <NavLink  className={style.navBarItem} to='./'><p>Мои данные</p></NavLink>
                {(props.profile.roles && props.profile.roles[0] == 'ROLE_SELLER')?
                    <div>
                        <h4>Магазин</h4>
                        <NavLink className={style.navBarItem} to='./market'><p>Главная</p></NavLink>
                        <NavLink className={style.navBarItem} to='./goods'><p>Товары</p></NavLink>
                    </div>:
                    <></>
                }

                <h4>Заказы</h4>
                <NavLink className={style.navBarItem} to='/cart'><p>Моя корзина</p></NavLink>
                <NavLink className={style.navBarItem} to='/orders'><p>Мои заказы</p></NavLink>
                <Button
                    sx={{mt: 2, width: '15ch'}}
                    color='error'
                    size="small"
                    onClick={
                        () => {
                            props.logOut(Cookies)
                        }
                    }
                    variant="outlined">
                    Выйти
                </Button>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        profile: state.auth.profile
    }),
    dispatch => ({
        logOut: (Cookies) => {
            dispatch(logOutAction(Cookies))
        }
    })
)(ProfileNavBar);