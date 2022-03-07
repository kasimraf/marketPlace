import {Types} from "../../action-types/action-types";

const initialState = {
    types: [],
    goods: []
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
        default: {
            return state
        }
    }
}