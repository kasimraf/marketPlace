import React from 'react';
import style from './profile-info.module.scss'
import {NavLink} from "react-router-dom";

const ProfileInfo = () => {
    return (
        <div className={style.page}>
            <h3>Учётные данные</h3>
            <div className={style.container}>
                <p className={style.title}>Имя</p>
                <p className={style.text}>Рафиль</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Фамилия</p>
                <p className={style.text}>Касимов</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Отчество</p>
                <p className={style.text}>Рамилевич</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Электронная почта</p>
                <p className={style.text}>mail@mail.ru</p>
            </div>
            <h3>Адрес</h3>
            <div className={style.container}>
                <p className={style.title}>Страна</p>
                <p className={style.text}>Рэссэй</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Город</p>
                <p className={style.text}>Казань</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Район</p>
                <p className={style.text}>Атнинский</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Улица</p>
                <p className={style.text}>Советская</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Дом</p>
                <p className={style.text}>26</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Почтовый индекс</p>
                <p className={style.text}>2634545</p>
            </div>
            <NavLink to='../edit-profile' className={style.editProfile}>Изменить данные</NavLink>
        </div>
    );
};

export default ProfileInfo;