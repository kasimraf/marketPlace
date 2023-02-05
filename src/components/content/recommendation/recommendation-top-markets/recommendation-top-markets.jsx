import React, {useEffect, useRef, useState} from 'react';
import style from "./recommendation-top-markets.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MarketsItem from "../../../ui-components/markets-item/markets-item";

const RecommendationTopMarkets = (props) => {
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
                Популярные магазины
            </Typography>
            <div ref={elementGoodsList} className={style.marketsList}>
                {props.markets?.slice(0, quantityElements).map((market) => {
                    return <MarketsItem key={market.id} market={market}/>
                })}
            </div>
        </Paper>
    );
};

export default RecommendationTopMarkets;