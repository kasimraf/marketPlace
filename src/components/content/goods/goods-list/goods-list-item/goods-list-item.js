import React from 'react';
import style from './goods-list-item.module.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addGoodToCartAction} from "../../../../../redux/actions/cart-actions";
import Button from "@mui/material/Button";

const GoodsListItem = (props) => {
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
                <div >
                    <Button onClick={(e)=> {e.preventDefault(); props.addToCart(props.good.id, props.token)}}>В корзину</Button>
                </div>
            </div>
        </Link>
    );
};

export default connect(
    state => ({
        token: state.auth.tokenId,
    }),
    dispatch => ({
        addToCart: (goodId, token) => {
            dispatch(addGoodToCartAction(goodId, token))
        }
    })
)(GoodsListItem);