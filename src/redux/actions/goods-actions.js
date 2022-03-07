import {Types} from "../action-types/action-types";
import {getGood, getGoods, getGoodsTypes} from "../../services/http-services-goods";

export const getGoodsTypesAction = () => (dispatch) => {
    getGoodsTypes()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_GOODS_TYPES, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const getGoodsAction = () => (dispatch) => {
    getGoods()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        console.log(json.content)
        dispatch({type: Types.GET_GOODS, payload: json.content});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const getGoodPageDataAction = (goodId) => (dispatch) => {
    getGood(goodId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        console.log(json.content)
        dispatch({type: Types.GET_GOOD_PAGE_DATA, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};