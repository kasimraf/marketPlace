import {Types} from "../action-types/action-types";
import {addGoodToCart, getCart} from "../../services/http-services-cart";

export const getCartAction = (token) => (dispatch) => {
    getCart(token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_CART, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const addGoodToCartAction = (goodId, token) => (dispatch) => {
    addGoodToCart(goodId, token)
        .then(response => {
            if (response.ok) {
                alert('Товар добавлен в корзину')
            }
        })
}