import React from 'react';
import styles from './main-markets-item.module.scss'
import {NavLink} from "react-router-dom";

const MainMarketsItem = (props) => {

    return (
        <NavLink to={`/markets/${props.market.id}`} className={styles.market}>
            <div className={styles.titleRow}>
                <div className={styles.photo}>
                    <img src={props.market.imageUrl} alt=""/>
                </div>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        <h4>{props.market.name}</h4>
                    </div>
                    <div className={styles.subTitle}>
                        {props.market.description.substr(0,50)}...
                    </div>
                    <div className={styles.marketType}>
                        {props.market.marketType}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default MainMarketsItem;