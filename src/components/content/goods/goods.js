import React from 'react'
import GoodsTypes from "./goods-types/goods-types";
import styles from './goods.module.scss'
import GoodsList from "./goods-list/goods-list";


const Goods = () => {
    return (
        <div className={styles.goods}>
            <h1>Все товары</h1>
            <GoodsTypes />
            <GoodsList />
        </div>
    )
}

export default Goods;