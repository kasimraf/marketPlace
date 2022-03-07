import React, {useEffect, useLayoutEffect} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getMarketPageDataAction} from "../../../../redux/actions/markets-actions";
import styles from './market-page.module.scss'
import GoodsListItem from "../../goods/goods-list/goods-list-item/goods-list-item";

const MarketPage = (props) => {

    const params = useParams()

    useLayoutEffect(() => {
        props.getData(params.id);
    }, []);

    return (
        <div className={styles.marketPage}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.img}>
                        <img src={props.market.imageUrl} alt=""/>
                    </div>
                    <div className={styles.title}>
                        <h3>{props.market.name}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.blockName}>
                    <h2>Информация о магазине</h2>
                </div>
                <div className={styles.descriptions}>
                    <div>
                        <div className={styles.descriptionTitle}>
                            <h3>Общая информация</h3>
                        </div>
                        <div className={styles.descriptionSubTitle}>
                            {props.market.description}
                        </div>
                    </div>
                    <div>
                        <div className={styles.descriptionTitle}>
                            <h3>Оценка товаров</h3>
                        </div>
                        <div className={styles.descriptionSubTitle}>
                            Количество оценок 228
                        </div>
                    </div>
                    <div>
                        <div className={styles.descriptionTitle}>
                            <h3>Доставка заказов</h3>
                        </div>
                        <div className={styles.descriptionSubTitle}>
                            Количество выполненных заказов 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.goods}>
                <div className={styles.blockName}>
                    <h2>Cписок товаров</h2>
                    <div className={styles.goods}>
                        {props.goods.map((good) => {
                            return <GoodsListItem  good={good}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        market: state.markets.marketPageData,
        goods: state.markets.marketPageGoods,
    }),
    dispatch => ({
        getData: (marketId) => {
            dispatch(getMarketPageDataAction(marketId))
        }
    })
)(MarketPage);