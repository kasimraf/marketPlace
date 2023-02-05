import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CartList from "./cart-list/cart-list";
import Button from "@mui/material/Button";

const Cart = (props) => {
    return (
        <>
            {props.authStatus ?
                <div>
                    {props.cart.goods&&props.cart.goods.length !== 0 ?
                    <div>
                        <CartList goods={props.cart.goods}/>
                        <div style={{"display": "flex"}}>Общая стоимость: <h3 style={{"margin": "0 5px"}}>{props.cart.sum}</h3></div>
                        <div><Button variant="outlined">Перейти к оформлению</Button></div>
                    </div>:
                    <div>
                        <h3>Корзина пуста</h3>
                    </div>}
                </div>
                :
                <div>
                    <h2>Чтобы видеть что в вашей корзине, войдите на сайт</h2>
                    <Link to="/auth">Войти</Link>
                </div>
            }
        </>
    );
};

export default connect(
    state => ({
        authStatus: state.auth.authStatus,
        cart: state.cart.cart
    }),
    dispatch => ({})
)(Cart);