import React from 'react';
import Card from "@mui/material/Card";
import style from "./recommendation-markets-item.module.scss";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const RecommendationMarketsItem = (props) => {
    return (
        <Link to={`/markets/${props.market.id}`} className={style.item}>
            <Card sx={{maxWidth: 200}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={(props.market.imageUrl.length < 10) ? 'https://elitas.ru/images/no-image-large.jpg' : props.market.imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={style.title}>
                        {props.market.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={style.description}>
                        {props.market.description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default RecommendationMarketsItem;