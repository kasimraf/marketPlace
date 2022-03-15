import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Cart = (props) => {
    return (
        <>
            {props.authStatus ?
                <div>
                    Тут ваша корзина
                </div>
                :
                <div>
                    <h2>Чтобы видеть что в корзине, войдите на сайт</h2>
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
)(Cart);