import React from 'react';
import Typography from "@mui/material/Typography";
import RecommendationGoodsItem from "../components/recommendation-goods-item/recommendation-goods-item";
import Paper from "@mui/material/Paper";
import style from './recommendation-top-goods.module.scss'

const RecommendationTopGoods = (props) => {
    return (
        <Paper elevation={4} className={style.paper}>
            <Typography gutterBottom variant="h6" component="div">
                Покупатели выбирают
            </Typography>
            <div className={style.goodsList}>
                {props.goods?.slice(0, 7).map((good) => {
                    return <RecommendationGoodsItem key={good.id} good={good}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationTopGoods;