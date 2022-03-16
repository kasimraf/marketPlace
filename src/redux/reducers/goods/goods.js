import {Types} from "../../action-types/action-types";

const initialState = {
    types: [],
    goods: [],
    goodPageData: [],
    userGoods: []
};

export const goods = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_GOODS_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }
        case Types.GET_GOODS: {
            return {
                ...state,
                goods: action.payload
            }
        }
        case Types.GET_GOOD_PAGE_DATA: {
            return {
                ...state,
                goodPageData: action.payload
            }
        }
        case Types.GET_USER_GOODS: {
            return {
                ...state,
                userGoods: action.payload
            }
        }
        default: {
            return state
        }
    }
}