import React from 'react';
import {connect} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import ProfileNavBar from "./navBar/profile-navBar";
import style from './profile.module.scss'

const Profile = (props) => {
    return (
        <>
            {props.authStatus ?
                <div className={style.profile}>
                    <div className={style.navBar}>
                        <ProfileNavBar/>
                    </div>
                    <div className={style.pages}>
                        <Outlet />
                    </div>
                </div>
                :
                <div>
                    <h2>Чтобы видеть страницу профиля, войдите на сайт</h2>
                    <Link to="/auth">Войти</Link>
                </div>
            }
        </>
    );
};

export default connect(
    state => ({
        authStatus: state.auth.authStatus
    }),
    dispatch => ({})
)(Profile);