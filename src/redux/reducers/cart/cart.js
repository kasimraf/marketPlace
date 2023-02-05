import {Types} from "../../action-types/action-types";

const initialState = {
    cart: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CART: {
            return {
                ...state,
                cart: action.payload
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