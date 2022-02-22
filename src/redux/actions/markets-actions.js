import {
    addMarket,
    getMainMarkets,
    getMarketData,
    getMarketGoods,
    getMarketsTypes
} from "../../services/http-services-markets";
import {Types} from "../action-types/action-types";

export const getMarketsTypesAction = (token) => (dispatch) => {
    getMarketsTypes(token)
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

export const getMainMarketsAction = (token) => (dispatch) => {
    getMainMarkets(token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        console.log(json.content)
        dispatch({type: Types.GET_MAIN_MARKETS, payload: json.content});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const addMarketAction = (marketData, token) => (dispatch) => {
    let market = {
        'fullName': "string",
        'marketType': marketData.type,
        'name': marketData.name,
        "imageUrl": marketData.imageUrl,
    }
    addMarket(market, token)
        .then(response => {
            if (response.ok) {
                console.log('Магазин успешно добавлен')
            }
        })
};

export const getMarketPageDataAction = (token, marketId) => (dispatch) => {
    getMarketData(token, marketId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKET_PAGE_DATA, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};



export const getMarketPageGoodsAction = (token, marketId) => (dispatch) => {
    getMarketGoods(token, marketId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MARKET_PAGE_GOODS, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

