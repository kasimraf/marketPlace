import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUserGoodsAction} from "../../../../../redux/actions/goods-actions";


const ProfileGoods = (props) => {

    useEffect(() => {
        props.getUserGoods(props.userMarketId)
    }, [])

    return (
        <div>
            <Link to="../add-good">Добавить товар</Link>
        </div>
    );
};

export default connect(
    state => ({
        userMarketId: state.auth.profile.marketId
    }),
    dispatch => ({
        getUserGoods: (marketId) => {
            dispatch(getUserGoodsAction(marketId))
        }
    })
)(ProfileGoods);