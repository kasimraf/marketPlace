import React from 'react';
import ProfileNavBar from "./navBar/profile-navBar";
import style from './profile.module.scss'
import {Route, Routes, Outlet} from "react-router-dom";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.navBar}>
                <ProfileNavBar/>
            </div>
            <div className={style.pages}>
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;