import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMainMarketsAction} from "../../../../redux/actions/markets-actions";
import MainMarketsItem from "./main-markets-item/main-markets-item";
import styles from './main-market.module.scss'

const MainMarkets = (props) => {

    useEffect(() => {
        props.getMainMarkets()
    }, []);

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
        }
    })
)(MainMarkets);