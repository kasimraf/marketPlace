import React from 'react';
import style from './profile-minData.module.scss'



const ProfileMinData = () => {
    return (
        <div className={style.container}>
            <img src='https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg' alt=""/>
            <h2>Рафиль Касимов</h2>
        </div>
    );
};

export default ProfileMinData;