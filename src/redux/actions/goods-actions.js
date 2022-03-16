import {Types} from "../action-types/action-types";
import {addGood, delGood, editGood, getGood, getGoods, getGoodsTypes} from "../../services/http-services-goods";
import {getMarketGoods} from "../../services/http-services-markets";

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

export const addGoodAction = (newGood, token) => (dispatch) => {
    let good = {
        "count": newGood.count,
        "description": newGood.description,
        "goodsTypeId": newGood.type,
        "imageUrl": newGood.imageUrl,
        "marketId": newGood.marketId,
        "name": newGood.name,
        "price": newGood.price,
        "producer": newGood.producer,
        "total": 0
    }
    addGood(good, token)
        .then(response => {
            if (response.ok) {
                console.log('Товар успешно добавлен')
            }
        })
};


export const editGoodAction = (good, token) => (dispatch) => {
    let newGood = {
        "count": good.count,
        "description": good.description,
        "goodsTypeId": good.type,
        "imageUrl": good.imageUrl,
        "marketId": good.marketId,
        "name": good.name,
        "price": good.price,
        "producer": good.producer,
    }
    editGood(newGood, token)
        .then(response => {
            if (response.ok) {
                console.log('Товар успешно обновлен')
            }
        })
};
export const delGoodAction = (goodId, token) => (dispatch) => {
    delGood(goodId, token)
        .then(response => {
            if (response.ok) {
                console.log('Товар успешно удален')
            }
        })
};

export const getUserGoodsAction = (marketId) => (dispatch) => {
    getMarketGoods(marketId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_USER_GOODS, payload: json.content});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};



