import React, {useEffect, useRef, useState} from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import style from './recommendation-like-markets.module.scss'
import MarketsItem from "../../../ui-components/markets-item/markets-item";

const RecommendationLikeMarkets = (props) => {
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
                Рекомендуемые магазины
            </Typography>
            <div ref={elementGoodsList} className={style.marketsList}>
                {props.markets?.slice(0, quantityElements).map((market) => {
                    return <MarketsItem key={market.id} market={market}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationLikeMarkets;