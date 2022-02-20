import React from 'react';
import styles from "./main-market-item-goods.module.scss";

const MainMarketItemGoods = (props) => {
    if (props.goods.length >= 3) {
        return (
            <div className={styles.goods}>
                <div className={styles.goodsBigItem}><img
                    src="https://cdn1.ozone.ru/s3/multimedia-p/wc200/6064102777.jpg" alt=""/></div>
                <div className={styles.rightBlock}>
                    <div className={styles.goodsItem}><img
                        src="https://cdn1.ozone.ru/s3/multimedia-l/wc100/6042263805.jpg" alt=""/></div>
                    <div className={styles.goodsItem}><img
                        src="https://cdn1.ozone.ru/s3/multimedia-l/wc100/6042263805.jpg" alt=""/></div>
                </div>
            </div>
        )
    } else if (props.goods.length === 1) {
        return (
            <div className={styles.goods}>
                <div className={styles.goodsBigItem}><img
                    src="https://lifeandjoy.ru/uploads/posts/2015-07/1438059612_lifeandjoy.ru_01.jpg" alt=""/></div>
            </div>
        )
    } {
        return (
            <div>
                Товары отсуствуют
            </div>
        )
    }

};

export default MainMarketItemGoods;