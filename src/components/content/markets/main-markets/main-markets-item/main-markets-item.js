import React from 'react';
import styles from './main-markets-item.module.scss'
import MainMarketItemGoods from "./main-market-item-goods/main-market-item-goods";

const MainMarketsItem = (props) => {

    return (
        <div className={styles.market}>
            <div className={styles.titleRow}>
                <div className={styles.photo}>
                    <img src={props.market.imageUrl} alt=""/>
                </div>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        <h4>{props.market.name}</h4>
                    </div>
                    <div className={styles.subTitle}>
                        {props.market.description}
                    </div>
                    <div className={styles.marketType}>
                        {props.market.marketType}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMarketsItem;