import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getGoodsAction, getGoodsByTypeAction} from "../../../../redux/actions/goods-actions";
import styles from './goods-list.module.scss'
import {useSearchParams} from "react-router-dom";
import {Types} from "../../../../redux/action-types/action-types";
import Pagination from "@mui/material/Pagination";
import GoodsItem from "../../../ui-components/goods-item/goods-item";

const GoodsList = (props) => {

    const [searchParams, setSearchParams] = useSearchParams('')

    const goodsParamsType = searchParams.get('type')
    const goodsParamsPage = searchParams.get('page')

    const checkPage = (num) => {
        if (num != goodsParamsPage) {
            if (goodsParamsType) {
                props.openLoader()
                setSearchParams({type: goodsParamsType, page: num})
            } else {
                props.openLoader()
                setSearchParams({page: num})
            }
        }
    }

    useEffect(() => {
        if (goodsParamsType) {
            props.openLoader()
            props.getGoodsByType(goodsParamsType, goodsParamsPage)
        } else {
            props.getGoods(goodsParamsPage)
        }
    }, [searchParams]);

    return (
        <>
            <div className={styles.goodsList}>
                {props.goods?.content?.map((good) => {
                    return <GoodsItem key={good.id} good={good}/>
                })}
            </div>
            <div className={styles.pagination}>
                {(props.goods?.totalPages > 1) ?
                    <Pagination
                        count={props.goods?.totalPages}
                        page={props.goods?.number + 1}
                        onChange={(_, num) => {
                            checkPage(num)
                        }}
                        color="primary"/> :
                    <></>}
            </div>
        </>
    );
};

export default connect(
    state => ({
        goods: state.goods.goods,
    }),
    dispatch => ({
        getGoods: (goodsParamsPage) => {
            dispatch(getGoodsAction(goodsParamsPage))
        },
        getGoodsByType: (goodsTypeId, goodsParamsPage) => {
            dispatch(getGoodsByTypeAction(goodsTypeId, goodsParamsPage))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(GoodsList);