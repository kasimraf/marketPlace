import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import style from './recommendation-like-goods.module.scss'
import RecommendationGoodsItem from "../components/recommendation-goods-item/recommendation-goods-item";

const RecommendationLikeGoods = (props) => {
    return (
        <Paper elevation={4} className={style.paper}>
            <Typography gutterBottom variant="h6" component="div">
                Рекомендуемые товары
            </Typography>
            <div className={style.goodsList}>
                {props.goods?.slice(0, 7).map((good) => {
                    return <RecommendationGoodsItem key={good.id} good={good}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationLikeGoods;