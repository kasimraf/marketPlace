import React, {useEffect, useState} from 'react';
import styles from './market-types-item.module.scss'
import {useSearchParams} from "react-router-dom";
import {connect} from "react-redux";
import {Types} from "../../../../../redux/action-types/action-types";

const MarketTypesItem = (props) => {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [isActiveType, setIsActiveType] = useState(false)

    const selectMarketsType = () => {
        setSearchParams({type: props.type.id})
    }

    useEffect(() => {
        (searchParams.get('type') && searchParams.get('type') == props.type.id) ? setIsActiveType(true) : setIsActiveType(false)
    }, [searchParams])

    return (
        <div className={`${styles.type} ${isActiveType ? styles.active: ''}`} onClick={selectMarketsType}>
            <div className={styles.typeName}>
                {props.type.name}
            </div>
            <div className={styles.typeImg}>
                <img src={props.type.imageUrl} alt=""/>
            </div>
        </div>
    );
};

export default connect(
    state => ({}),
    dispatch => ({
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(MarketTypesItem);