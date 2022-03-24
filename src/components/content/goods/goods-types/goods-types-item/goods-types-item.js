import React, {useEffect, useState} from 'react';
import styles from './goods-types-item.module.scss'
import {useSearchParams} from "react-router-dom";

const GoodsTypesItem = (props) => {

    const [isActiveType, setIsActiveType] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams('')

    const selectGoodsType = () => {
        setSearchParams({type: props.type.id})
    }

    useEffect(() => {
        (searchParams.get('type') && searchParams.get('type') == props.type.id) ? setIsActiveType(true) : setIsActiveType(false)
    }, [searchParams])

    return (
        <div className={`${styles.type} ${isActiveType ? styles.active: ''}`} onClick={selectGoodsType}>
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