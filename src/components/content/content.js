import React from 'react'
import styles from './content.module.scss'
import {Route, Routes} from "react-router-dom";
import Markets from "./markets/markets";
import Goods from "./goods/goods";
import AddMarket from "./markets/add-market/add-market";
import MarketPage from "./markets/market-page/market-page";

const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/markets" element={<Markets />} />
                <Route path="/goods" element={<Goods />} />
                <Route path="/markets/addMarket" element={<AddMarket />} />
                <Route path="/markets/:id" element={<MarketPage />} />
            </Routes>
        </div>
    )
}

export default Content;