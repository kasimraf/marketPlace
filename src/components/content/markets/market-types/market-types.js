import React, {useEffect} from 'react';
import styles from "./market-types.module.scss";
import {connect} from "react-redux";
import {getMarketsTypesAction} from "../../../../redux/actions/markets-actions";
import MarketTypesItem from "./market-types-item/market-types-item";

const MarketTypes = (props) => {

    useEffect(() => {
        props.getMarketTypes()
    }, []);

    return (
        <div className={styles.types}>
            {props.types.map((type, index) => {
                return <MarketTypesItem key={index} type={type}/>
            })}
        </div>
    );
};

export default connect(
    state => ({
        types: state.markets.types,
    }),
    dispatch => ({
        getMarketTypes: () => {
            dispatch(getMarketsTypesAction())
        }
    })
)(MarketTypes)