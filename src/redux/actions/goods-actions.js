import {Types} from "../action-types/action-types";
import {
    addGood,
    delGood,
    editGood,
    getGood,
    getGoods,
    getGoodsByType,
    getGoodsTypes
} from "../../services/http-services-goods";
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

export const addGoodAction = (newGood, token, navigate) => (dispatch) => {
    let good = {
        "count": newGood.count,
        "description": newGood.description,
        "goodsTypeId": newGood.goodsTypeId,
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
                navigate(-1)
            }
        })
};


export const editGoodAction = (good, token, navigate) => (dispatch) => {
    let newGood = {
        "count": good.count,
        "description": good.description,
        "goodsTypeId": good.goodsTypeId,
        "imageUrl": good.imageUrl,
        "marketId": good.marketId,
        "name": good.name,
        "price": good.price,
        "producer": good.producer,
        "id" : good.id
    }
    editGood(newGood, token)
        .then(response => {
            if (response.ok) {
                console.log('Товар успешно обновлен')
                navigate(-1)
            }
        })
};
export const delGoodAction = (goodId, token, navigate) => (dispatch) => {
    delGood(goodId, token)
        .then(response => {
            if (response.ok) {
                console.log('Товар успешно удален')
                navigate(-1)
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


export const getEditGoodPageDataAction = (goodId, refreshPageData) => (dispatch) => {
    getGood(goodId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_GOOD_PAGE_DATA, payload: json});
        refreshPageData(json)
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const getGoodsByTypeAction = (goodsTypeId) => async (dispatch) => {
    await getGoodsByType(goodsTypeId)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(json => {
            dispatch({type: Types.GET_GOODS, payload: json.content})
    })

    dispatch({type: Types.LOADER_FALSE})
}


