import React, {useEffect, useRef, useState} from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import style from './recommendation-like-goods.module.scss'
import RecommendationGoodsItem from "../components/recommendation-goods-item/recommendation-goods-item";

const RecommendationLikeGoods = (props) => {
    const elementGoodsList = useRef()
    const [quantityElements, setQuantityElements] = useState(0)
    useEffect(() => {
        if (elementGoodsList.current) {
            setQuantityElements(elementGoodsList.current.offsetWidth / 220)
        }
    })
    return (
        <Paper elevation={4} className={style.paper}>
            <Typography gutterBottom variant="h6" component="div">
                Рекомендуемые товары
            </Typography>
            <div ref={elementGoodsList} className={style.goodsList}>
                {props.goods?.slice(0, quantityElements).map((good) => {
                    return <RecommendationGoodsItem key={good.id} good={good}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationLikeGoods;