import React, {useEffect, useState} from 'react';
import Card from "@mui/material/Card";
import style from "./recommendation-goods-item.module.scss";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import {addGoodToCartAction} from "../../../../../redux/actions/cart-actions";
import {Types} from "../../../../../redux/action-types/action-types";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import {addGoodToFavoritesAction, delGoodToFavoritesAction} from "../../../../../redux/actions/favorites-actions";
import {AiFillHeart} from "react-icons/ai";

const RecommendationGoodsItem = (props) => {

    const [isCart, setIsCart] = useState(false)
    const [isFavorites, setIsFavorites] = useState(false)

    function isPositive(good) {
        return good.id === props.good.id;
    }

    useEffect(() => {
        if (props.cart.goods?.length > 0 && props.cart.goods.some(isPositive)) {
            setIsCart(true)
        }
    }, [props.cart])

    useEffect(() => {
        if (props.favorites.goods?.length > 0 && props.favorites.goods.some(isPositive)) {
            setIsFavorites(true)
        }
        else {
            setIsFavorites(false)
        }
    }, [props.favorites])

    return (
            <Link to={`/goods/${props.good.id}`} className={style.item}>
                <Card sx={{maxWidth: 200}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={(props.good.imageUrl.length < 10) ? 'https://elitas.ru/images/no-image-large.jpg' : props.good.imageUrl}
                        alt="green iguana"
                    />
                    {props.auth ?
                        <div className={style.favoritesBtn}>
                            {(isFavorites) ?
                            <IconButton className={style.favoritesBtnLayout} color="error" edge="false" aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                props.delToFavorites(props.good.id, props.token);
                            }}>
                                <AiFillHeart className={style.favoritesBtnIcon} />
                            </IconButton> :
                            <IconButton className={style.favoritesBtnLayout} edge="false" aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                props.addToFavorites(props.good.id, props.token);
                            }}>
                                <AiOutlineHeart className={style.favoritesBtnIcon} />
                            </IconButton>}
                        </div> : <></>
                    }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.good.price}$
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={style.title}>
                            {props.good.name}
                        </Typography>
                    </CardContent>
                    <CardActions className={style.btnContainer}>
                        {isCart ?
                            <Link to="/cart" style={{"textDecoration": "none"}}>
                                <Button color="success" variant="outlined" size="small">Перейти в корзину</Button>
                            </Link> :
                            <Button variant="contained" size="small" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                props.addToCart(props.good.id, props.token);
                            }}>Добавить в корзину</Button>
                        }
                    </CardActions>
                </Card>
            </Link>
    );
};

export default connect(
    state => ({
        token: state.auth.tokenId,
        cart: state.cart.cart,
        favorites: state.favorites.favorites,
        goods: state.goods.goods,
        auth: state.auth.authStatus
    }),
    dispatch => ({
        addToCart: (goodId, token) => {
            dispatch(addGoodToCartAction(goodId, token))
        },
        addToFavorites: (goodId, token) => {
            dispatch(addGoodToFavoritesAction(goodId, token))
        },
        delToFavorites: (goodId, token) => {
            dispatch(delGoodToFavoritesAction(goodId, token))
        },
        openLoader: () => {
            dispatch({type: Types.LOADER_TRUE})
        }
    })
)(RecommendationGoodsItem);