import React from 'react';
import style from './goods-list-item.module.scss'

const GoodsListItem = (props) => {
    return (
        <div className={style.good}>
            <div className={style.image}>
                <img src={props.good.imageUrl} alt=""/>
            </div>
            <div className={style.title}>
                {props.good.name}
            </div>
            <div className={style.price}>

            </div>
        </div>
    );
};

export default GoodsListItem;