import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getGoodsAction, getGoodsByTypeAction} from "../../../../redux/actions/goods-actions";
import GoodsListItem from "./goods-list-item/goods-list-item";
import style from './goods-list.module.scss'
import {useSearchParams} from "react-router-dom";
import {Types} from "../../../../redux/action-types/action-types";

const GoodsList = (props) => {

    const [searchParams] = useSearchParams('')

    useEffect(() => {
        const goodsParamsType = searchParams.get('type')
        if (goodsParamsType) {
            props.openLoader()
            props.getGoodsByType(goodsParamsType)
        } else {
            props.getGoods()
        }
    }, [searchParams]);

    return (
        <>
            <div className={style.goodsList}>
                {props.goods.map((good) => {
                    return <GoodsListItem key={good.id} good={good}/>
                })}
            </div>
        </>
    );
};

export default connect(
    state => ({
        goods: state.goods.goods,
    }),
    dispatch => ({
        getGoods: () => {
            dispatch(getGoodsAction())
        },
        getGoodsByType: (goodsTypeId) => {
            dispatch(getGoodsByTypeAction(goodsTypeId))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(GoodsList);