import React from 'react';
import styles from './goods-types-item.module.scss'

const GoodsTypesItem = (props) => {
    return (
        <div className={styles.type}>
            <div className={styles.typeName}>
                {props.type.name}
            </div>
            <div className={styles.typeImg}>
                <img src={props.type.imageUrl} alt=""/>
            </div>
        </div>
    );
};

export default GoodsTypesItem;