import React from 'react';
import styles from './main-markets-item.module.scss'
import MainMarketItemGoods from "./main-market-item-goods/main-market-item-goods";

const MainMarketsItem = (props) => {

    return (
        <div className={styles.market}>
            <div className={styles.titleRow}>
                <div className={styles.photo}>
                    <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/1634864/100023689157b0.jpg" alt=""/>
                </div>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        <h4>{props.market.name}</h4>
                    </div>
                    <div className={styles.subTitle}>
                        Небольшое описание
                    </div>
                </div>
            </div>
            <MainMarketItemGoods goods={props.market.goods}/>
        </div>
    );
};

export default MainMarketsItem;