import React from 'react';
import style from "./recommendation-top-markets.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RecommendationMarketsItem from "../components/recommendation-markets-item/recommendation-markets-item";

const RecommendationTopMarkets = (props) => {
    return (
        <Paper elevation={4} className={style.paper}>
            <Typography gutterBottom variant="h6" component="div">
                Популярные магазины
            </Typography>
            <div className={style.marketsList}>
                {props.markets?.slice(0, 7).map((market) => {
                    return <RecommendationMarketsItem key={market.id} market={market}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationTopMarkets;