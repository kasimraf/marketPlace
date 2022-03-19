import {Types} from "../../action-types/action-types";

const initialState = {
    types: [],
    mainMarkets: [],
    marketPageData: [],
    marketPageGoods: [],
    userMarketData: []
};

export const markets = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MARKETS_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }
        case Types.GET_MAIN_MARKETS: {
            return {
                ...state,
                mainMarkets: action.payload
            }
        }
        case Types.GET_MARKET_PAGE_DATA: {
            return {
                ...state,
                marketPageData: action.payload
            }
        }
        case Types.GET_MARKET_PAGE_GOODS: {
            return {
                ...state,
                marketPageGoods: action.payload
            }
        }
        case Types.GET_USER_MARKET: {
            return {
                ...state,
                userMarketData: action.payload
            }
        }
        default: {
            return state
        }
    }
}