import React from 'react';
import style from './goods-list-item.module.scss'
import {NavLink} from "react-router-dom";

const GoodsListItem = (props) => {
    return (
        <NavLink to={`/goods/${props.good.id}`} className={style.good}>
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
                    <button>В корзину</button>
                </div>
            </div>
        </NavLink>
    );
};

export default GoodsListItem;