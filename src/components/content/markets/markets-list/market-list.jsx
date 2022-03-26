import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMarketsAction, getMarketsByTypeAction} from "../../../../redux/actions/markets-actions";
import MarketsListItem from "./markets-list-item/markets-list-item";
import styles from './markets-list.module.scss'
import {useSearchParams} from "react-router-dom";
import {Types} from "../../../../redux/action-types/action-types";
import Pagination from "@mui/material/Pagination";

const MarketList = (props) => {

    const [searchParams, setSearchParams] = useSearchParams('')

    const marketsParamsType = searchParams.get('type')
    const marketsParamsPage = searchParams.get('page')

    const checkPage = (num) => {
        if (marketsParamsType) {
            props.openLoader()
            setSearchParams({type: marketsParamsType, page: num})
        } else {
            props.openLoader()
            setSearchParams({page: num})
        }
    }

    useEffect(() => {
        if (marketsParamsType) {
            props.openLoader()
            props.getMarketsByType(marketsParamsType, marketsParamsPage)
        } else {
            props.getMarkets(marketsParamsPage)
        }
    }, [searchParams]);

    return (
        <>
            <div className={styles.mainMarkets}>
                {props.markets.content?.map((market) => {
                    return <MarketsListItem key={market.id} market={market}/>
                })}
            </div>
            <div className={styles.pagination}>
                {(props.markets.totalPages > 1) ?
                    <Pagination
                        count={props.markets.totalPages}
                        page={props.markets.number + 1}
                        onChange={(_, num) => {
                            checkPage(num)
                        }}
                        color="primary"/> :
                    <></>}
            </div>
        </>
    )
        ;
};

export default connect(
    state => ({
        markets: state.markets.markets,
    }),
    dispatch => ({
        getMarkets: (marketsParamsPage) => {
            dispatch(getMarketsAction(marketsParamsPage))
        },
        getMarketsByType: (marketTypeId, marketsParamsPage) => {
            dispatch(getMarketsByTypeAction(marketTypeId, marketsParamsPage))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(MarketList);