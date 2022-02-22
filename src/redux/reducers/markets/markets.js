import {Types} from "../../action-types/action-types";

const initialState = {
    types: [],
    mainMarkets: [],
    marketPageData: [],
    marketPageGoods: []
};

export const markets = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MARKETS_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }
        case Types.GET_RANDOM_MARKETS: {
            return {
                ...state,
                randomMarkets: action.payload
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
        default: {
            return state
        }
    }
}