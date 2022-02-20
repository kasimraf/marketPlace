import React from 'react';
import styles from './market-types-item.module.scss'

const MarketTypesItem = (props) => {
    return (
        <div className={styles.type}>
            {props.type}
        </div>
    );
};

export default MarketTypesItem;