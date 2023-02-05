import React from 'react';
import style from './auth-page.module.scss'
import AuthButton from "./auth-button/auth-button";

const AuthPage = () => {
    return (
        <div className={style.page}>
            <h2>Вы не залогинились, залогинтесь пжжж...</h2>
            <h3>Ну залогиньсяяя</h3>
            <AuthButton />
        </div>
    );
};

export default AuthPage;