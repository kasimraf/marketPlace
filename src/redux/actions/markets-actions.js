import {addMarket, getMainMarkets, getMarketsTypes} from "../../services/http-services-markets";
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

export const getMainMarketsAction = () => (dispatch) => {
    getMainMarkets()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_MAIN_MARKETS, payload: json});
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

