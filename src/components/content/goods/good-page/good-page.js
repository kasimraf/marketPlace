import React, {useLayoutEffect} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getGoodPageDataAction} from "../../../../redux/actions/goods-actions";
import style from './good-page.module.scss'

const GoodPage = (props) => {

    const params = useParams()

    useLayoutEffect(() => {
        props.getData(params.id);
    }, []);

    return (
        <div className={style.page}>
            <div className={style.imageContainer}>
                <img src={props.good.imageUrl} alt=""/>
            </div>
            <div>
                <div className={style.title}>
                    {props.good.name}
                </div>
                <div className={style.price}>
                    Цена: <span>{props.good.price} $</span>
                </div>
                <div className={style.cartBtn}>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        good: state.goods.goodPageData,
    }),
    dispatch => ({
        getData: (goodId) => {
            dispatch(getGoodPageDataAction(goodId))
        }
    })
)(GoodPage);