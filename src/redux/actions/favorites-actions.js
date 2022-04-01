import {Types} from "../action-types/action-types"
import {
    addGoodToFavorites,
    delGoodToFavorites,
    getFavorites,
    updateUserFavoritesWithCookies
} from "../../services/http-services-favorites";
import Cookies from "js-cookie";
import {getGoodsByIds} from "../../services/http-services-goods";

export const getFavoritesAction = (token) => (dispatch) => {
    getFavorites(token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_FAVORITES, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const addGoodToFavoritesAction = (goodId, token) => async (dispatch) => {
    await addGoodToFavorites(goodId, token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
            dispatch({type: Types.GET_FAVORITES, payload: json});
        }).catch(e => {
            console.log('Не удалось подключиться к серверу')
        })
    dispatch({type: Types.LOADER_FALSE})
}

export const delGoodToFavoritesAction = (goodId, token) => async (dispatch) => {
    await delGoodToFavorites(goodId, token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
            dispatch({type: Types.GET_FAVORITES, payload: json});
        }).catch(e => {
            console.log('Не удалось подключиться к серверу')
        })
    dispatch({type: Types.LOADER_FALSE})
}

export const updateFavoritesWithCookiesAction = (goodsIds) => async (dispatch) => {
    await getGoodsByIds(goodsIds)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
            const data = {
                goods: json
            }
            dispatch({type: Types.GET_FAVORITES, payload: data});
        }).catch(e => {
            console.log('Не удалось подключиться к серверу')
        })
    dispatch({type: Types.LOADER_FALSE})
}

export const updateUserFavoritesWithCookiesAction = (Cookies, token) => async (dispatch) => {
    const cookieFavorites = Cookies.get('favorites')
    const goodsIds = JSON.parse("[" + cookieFavorites + "]")
    await updateUserFavoritesWithCookies(goodsIds, token)
        .then(response => {
            if (response.ok) {
                Cookies.remove('favorites')
            }
        })
    dispatch({type: Types.LOADER_FALSE})
}
