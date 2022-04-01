import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getGoodsTypesAction} from "../../../../redux/actions/goods-actions";
import GoodsTypesItem from "./goods-types-item/goods-types-item";
import styles from './goods-types.module.scss'

const GoodsTypes = (props) => {

    useEffect(() => {
        props.getGoodsTypes()
    }, []);

    return (
        <div className={styles.types}>
            {props.types?.map((type, index) => {
                return <GoodsTypesItem key={index} type={type}/>
            })}
        </div>
    );
};

export default connect(
    state => ({
        types: state.goods.types,
    }),
    dispatch => ({
        getGoodsTypes: () => {
            dispatch(getGoodsTypesAction())
        }
    })
)(GoodsTypes);