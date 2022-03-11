import {
    addMarket,
    getMainMarkets,
    getMarketData,
    getMarketGoods,
    getMarketsTypes
} from "../../services/http-services-markets";
import {Types} from "../action-types/action-types";

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

export const getMainMarketsAction = () => (dispatch) => {
    getMainMarkets()
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

