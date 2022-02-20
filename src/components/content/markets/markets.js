import React from 'react'
import styles from './market.module.scss'
import {NavLink} from "react-router-dom";
import MarketTypes from "./market-types/market-types";
import MainMarkets from "./main-markets/main-markets";

const Markets = () => {

    return (
        <div className={styles.markets}>
            <div className={styles.title}>
                <h1>Все магазины</h1>
                <div>
                    <NavLink className={styles.addMarketBtn} to="./addMarket">Добавить Магазин</NavLink>
                </div>
            </div>
            <MarketTypes />
            {/*<div className={styles.markets}>*/}
            {/*    <MainMarkets />*/}
            {/*</div>*/}
        </div>
    )
}

export default Markets;