import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMainMarketsAction, getMarketsByTypeAction} from "../../../../redux/actions/markets-actions";
import MainMarketsItem from "./main-markets-item/main-markets-item";
import styles from './main-market.module.scss'
import {useSearchParams} from "react-router-dom";
import {Types} from "../../../../redux/action-types/action-types";

const MainMarkets = (props) => {

    const [searchParams] = useSearchParams('')

    useEffect(() => {
        const marketsParamsType = searchParams.get('type')
        if (marketsParamsType) {
            props.openLoader()
            props.getMarketsByType(marketsParamsType)
        } else {
            props.getMainMarkets()
        }
    }, [searchParams]);

    return (
        <div className={styles.mainMarkets}>
            {props.markets.map((market) => {
                return <MainMarketsItem key={market.id} market={market}/>
            })}
        </div>
    );
};

export default connect(
    state => ({
        markets: state.markets.mainMarkets,
    }),
    dispatch => ({
        getMainMarkets: () => {
            dispatch(getMainMarketsAction())
        },
        getMarketsByType : (marketTypeId) => {
            dispatch(getMarketsByTypeAction(marketTypeId))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(MainMarkets);