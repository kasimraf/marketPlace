import {
    addMarket,
    delMarket,
    editMarket,
    getMarkets,
    getMarketData,
    getMarketGoods,
    getMarketsByType,
    getMarketsTypes,
    getUserMarket
} from "../../services/http-services-markets";
import {Types} from "../action-types/action-types";
import {getProfileDataAction} from "./profile-actions";

export const getMarketsTypesAction = () => (dispatch) => {
    getMarketsTypes()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKETS_TYPES, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const getMarketsAction = (marketsParamsPage) => async (dispatch) => {
    await getMarkets(marketsParamsPage)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKETS, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
    dispatch({type: Types.LOADER_FALSE})
};

export const addMarketAction = (marketData, token) => (dispatch) => {
    let market = {
        'marketTypeId': marketData.type,
        'name': marketData.name,
        "imageUrl": marketData.imageUrl,
        "description": marketData.description
    }
    addMarket(market, token)
        .then(response => {
            if (response.ok) {
                console.log('Магазин успешно добавлен')
                dispatch(getProfileDataAction(token))
            }
        })
};

export const getMarketPageDataAction = (marketId) => (dispatch) => {
    getMarketData(marketId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKET_PAGE_DATA, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
    getMarketGoods(marketId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKET_PAGE_GOODS, payload: json.content});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const getUserMarketAction = (token, ownerId) => (dispatch) => {
    getUserMarket(token, ownerId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_USER_MARKET, payload: json});
        console.log(json)
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const editMarketAction = (marketData, token, navigate) => (dispatch) => {
    let market = {
        'marketTypeId': marketData.type,
        'name': marketData.name,
        "imageUrl": marketData.imageUrl,
        "description": marketData.description,
        "id" : marketData.id
    }
    editMarket(market, token)
        .then(response => {
            if (response.ok) {
                console.log('Магазин успешно изменен')
                navigate(-1)
            }
        })
};
export const delMarketAction = (token, navigate) => (dispatch) => {
    delMarket(token)
        .then(response => {
            if (response.ok) {
                console.log('Магазин успешно изменен')
                navigate(-1)
                dispatch(getProfileDataAction(token))
            }
        })
};

export const getMarketsByTypeAction = (marketTypeId, marketsParamsPage) => async (dispatch) => {
    await getMarketsByType(marketTypeId, marketsParamsPage)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(json => {
            dispatch({type: Types.GET_MARKETS, payload: json})
        })

    dispatch({type: Types.LOADER_FALSE})
}




