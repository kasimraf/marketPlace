import React, {useEffect} from 'react';
import styles from './recommendation.module.scss'
import {connect} from "react-redux";
import {
    getUniversalRecommendationAction,
    getUserRecommendationAction
} from "../../../redux/actions/recommendation-actions";
import {Types} from "../../../redux/action-types/action-types";
import RecommendationLikeGoods from "./recommendation-like-goods/recommendation-like-goods";
import RecommendationLikeMarkets from "./recommendation-like-markets/recommendation-like-markets";
import RecommendationTopGoods from "./recommendation-top-goods/recommendation-top-goods";
import RecommendationTopMarkets from "./recommendation-top-markets/recommendation-top-markets";
import Typography from "@mui/material/Typography";

const Recommendation = (props) => {

    useEffect(() => {
        props.openLoader()
        if (props.authStatus) {
            props.getUserRecommendation(props.token)
        } else {
            props.getUniversalRecommendation()
        }
    }, [props.authStatus])
    return (
        <div className={styles.recommendation}>
            <Typography className={styles.recommendationTitle} gutterBottom variant="h5" component="div">
                TATMARKET рекомендует
            </Typography>
            <RecommendationLikeGoods goods={props.recommendation?.likeGoods}/>
            <RecommendationLikeMarkets markets={props.recommendation?.likeMarkets} />
            <RecommendationTopGoods goods={props.recommendation?.topGoods}/>
            <RecommendationTopMarkets markets={props.recommendation?.topMarkets} />
        </div>
    );
};

export default connect(
    state => ({
        authStatus: state.auth.authStatus,
        token: state.auth.tokenId,
        recommendation: state.recommendation.recommendation
    }),
    dispatch => ({
        getUniversalRecommendation: () => {
            dispatch(getUniversalRecommendationAction())
        },
        getUserRecommendation: (token) => {
            dispatch(getUserRecommendationAction(token))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(Recommendation);