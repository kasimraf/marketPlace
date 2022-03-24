import React, {useEffect, useState} from 'react';
import style from './goods-list-item.module.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addGoodToCartAction} from "../../../../../redux/actions/cart-actions";
import Button from "@mui/material/Button";
import {Types} from "../../../../../redux/action-types/action-types";

const GoodsListItem = (props) => {

    const [isCart, setIsCart] = useState(false)

    function isPositive(good) {
        return good.id === props.good.id;
    }

    useEffect(() => {
        if (props.cart.goods?.length > 0 && props.cart.goods.some(isPositive)) {
            setIsCart(true)
        }
    }, [props.cart])

    return (
        <Link to={`/goods/${props.good.id}`} className={style.good}>
            <div>
                <div className={style.image}>
                    <img src={props.good.imageUrl} alt=""/>
                </div>
                <div className={style.price}>
                    {props.good.price}$
                </div>
                <div className={style.title}>
                    {props.good.name}
                </div>
                <div className={style.addCart}>
                    {isCart ?
                        <Link to="/cart" style={{"textDecoration": "none"}}>
                            <Button color="success" variant="outlined" size="small">Перейти в корзину</Button>
                        </Link> :
                        <Button variant="contained" size="small" onClick={(e) => {
                            e.preventDefault();
                            props.openLoader()
                            props.addToCart(props.good.id, props.token)
                        }}>Добавить в корзину</Button>
                    }
                </div>
            </div>
        </Link>
    );
};

export default connect(
    state => ({
        token: state.auth.tokenId,
        cart: state.cart.cart,
        goods: state.goods.goods,
        auth: state.auth.authStatus
    }),
    dispatch => ({
        addToCart: (goodId, token) => {
            dispatch(addGoodToCartAction(goodId, token))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(GoodsListItem);