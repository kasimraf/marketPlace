import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getGoodsAction} from "../../../../redux/actions/goods-actions";
import GoodsListItem from "./goods-list-item/goods-list-item";
import style from './goods-list.module.scss'

const GoodsList = (props) => {

    useEffect(() => {
        props.getGoods()
    }, []);

    return (
        <div className={style.goodsList}>
            {props.goods.map((good) => {
                return <GoodsListItem key={good.id} good={good}/>
            })}
        </div>
    );
};

export default connect(
    state => ({
        goods: state.goods.goods,
    }),
    dispatch => ({
        getGoods: () => {
            dispatch(getGoodsAction())
        }
    })
)(GoodsList);