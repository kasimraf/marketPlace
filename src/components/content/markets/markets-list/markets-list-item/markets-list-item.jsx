import React from 'react';
import styles from './markets-list-item.module.scss'
import {Link} from "react-router-dom";

const MarketsListItem = (props) => {

    return (
        <Link to={`/markets/${props.market.id}`} className={styles.market}>
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
                </div>
            </div>
        </Link>
    );
};

export default MarketsListItem;