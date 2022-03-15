import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Orders = (props) => {
    return (
        <>
            {props.authStatus ?
                <div>
                    Тут будут заказы пользователя
                </div>
                :
                <div>
                    <h2>Чтобы видеть ваши активные заказы, войдите на сайт</h2>
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
)(Orders);