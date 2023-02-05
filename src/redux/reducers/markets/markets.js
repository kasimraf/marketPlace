import {Types} from "../../action-types/action-types";

const initialState = {
    types: [],
    markets: [],
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
        case Types.GET_MARKETS: {
            return {
                ...state,
                markets: action.payload
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
        case Types.ClEAR_ALL_STATE: {
            return initialState
        }
        default: {
            return state
        }
    }
}