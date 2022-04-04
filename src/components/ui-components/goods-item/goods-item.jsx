import React, {useEffect, useState} from 'react';
import Card from "@mui/material/Card";
import styles from "./goods-item.module.scss";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import {AiFillHeart} from "react-icons/ai";
import Cookies from 'js-cookie'
import {addGoodToCartAction} from "../../../redux/actions/cart-actions";
import {
    addGoodToFavoritesAction,
    delGoodToFavoritesAction,
    updateFavoritesWithCookiesAction
} from "../../../redux/actions/favorites-actions";
import {Types} from "../../../redux/action-types/action-types";

const GoodsItem = (props) => {

    const [isCart, setIsCart] = useState(false)
    const [isFavorites, setIsFavorites] = useState(false)

    function isPositive(good) {
        return good.id === props.good.id;
    }

    useEffect(() => {
        if (props.cart.goods?.length > 0 && props.cart?.goods?.some(isPositive)) {
            setIsCart(true)
        }
    }, [props.cart])

    useEffect(() => {
        if (props.favorites?.goods?.length > 0 && props.favorites?.goods?.some(isPositive)) {
            setIsFavorites(true)
        }
        else {
            setIsFavorites(false)
        }
    }, [props.favorites])

    const addFavoritesToLocalStorage = (goodId) => {
        const cookieFavorites = Cookies.get("favorites")
        if (cookieFavorites) {
            const cookieFavoritesArray = JSON.parse("[" + cookieFavorites + "]")
            cookieFavoritesArray.push(goodId)
            Cookies.set("favorites", cookieFavoritesArray)
            props.updateFavoritesWithCookies(cookieFavoritesArray)
        } else {
            Cookies.set("favorites", goodId)
            const arr = [goodId]
            props.updateFavoritesWithCookies(arr)
        }
    }

    const delFavoritesToLocalStorage = (goodId) => {
        const cookieFavorites = Cookies.get("favorites")
        if (cookieFavorites) {
            let cookieFavoritesArray = JSON.parse("[" + cookieFavorites + "]")
            cookieFavoritesArray = cookieFavoritesArray.filter(function(good) { return good !== goodId })
            Cookies.set("favorites", cookieFavoritesArray)
            props.updateFavoritesWithCookies(cookieFavoritesArray)
        }
    }

    return (
        <Link to={`/goods/${props.good.id}`} className={styles.item}>
            <Card sx={{maxWidth: 200}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={(props.good.imageUrl.length < 10) ? 'https://elitas.ru/images/no-image-large.jpg' : props.good.imageUrl}
                    alt="green iguana"
                />
                {props.auth ?
                    <div className={styles.favoritesBtn}>
                        {(isFavorites) ?
                            <IconButton className={styles.favoritesBtnLayout} color="error"  aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                props.delToFavorites(props.good.id, props.token);
                            }}>
                                <AiFillHeart className={styles.favoritesBtnIcon} />
                            </IconButton> :
                            <IconButton className={styles.favoritesBtnLayout}  aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                props.addToFavorites(props.good.id, props.token);
                            }}>
                                <AiOutlineHeart className={styles.favoritesBtnIcon} />
                            </IconButton>}
                    </div>:
                    <div className={styles.favoritesBtn}>
                        {(isFavorites) ?
                            <IconButton className={styles.favoritesBtnLayout} color="error"  aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                delFavoritesToLocalStorage(props.good.id);
                            }}>
                                <AiFillHeart className={styles.favoritesBtnIcon} />
                            </IconButton> :
                            <IconButton className={styles.favoritesBtnLayout}  aria-label="add to favorites" onClick={(e) => {
                                e.preventDefault();
                                props.openLoader();
                                addFavoritesToLocalStorage(props.good.id);
                            }}>
                                <AiOutlineHeart className={styles.favoritesBtnIcon} />
                            </IconButton>}
                    </div>
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.good.price}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={styles.title}>
                        {props.good.name}
                    </Typography>
                </CardContent>
                <CardActions className={styles.btnContainer}>
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
        },
        updateFavoritesWithCookies: (goodsIds) => {
            dispatch(updateFavoritesWithCookiesAction(goodsIds))
        }
    })
)(GoodsItem);