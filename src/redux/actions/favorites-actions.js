import {Types} from "../action-types/action-types"
import {addGoodToFavorites, delGoodToFavorites, getFavorites} from "../../services/http-services-favorites";

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