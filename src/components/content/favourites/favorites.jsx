import React from 'react';
import {connect} from 'react-redux';
import styles from './favorites.module.scss';
import RecommendationGoodsItem from "../recommendation/components/recommendation-goods-item/recommendation-goods-item";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import style from "../recommendation/components/recommendation-goods-item/recommendation-goods-item.module.scss";

const Favorites = (props) => {
    return (
        <div>
            {(props.favorites?.goods?.length > 0) ?
                <Paper elevation={4} className={styles.paper}>
                    <Typography gutterBottom variant="h6" component="div">
                        Cписок избранных товаров
                    </Typography>
                    <div className={styles.goodsList}>
                        {props.favorites?.goods?.map((good) => {
                            return <RecommendationGoodsItem key={good.id} good={good}/>
                        })}
                    </div>
                </Paper>:
                <div className={styles.textContainer}>
                    <Typography gutterBottom variant="h4" component="div">
                        В Избранном пока ничего нет
                    </Typography>
                    <Typography variant="body1" className={style.title}>
                        Добавляйте товары в Избранное с помощью ❤️️
                    </Typography>
                </div>
            }
        </div>
    );
};

export default connect(
    state => ({
        favorites: state.favorites.favorites
    }),
    dispatch => ({})
)(Favorites);