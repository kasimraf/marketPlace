import {Types} from "../../action-types/action-types";

const initialState = {
    favorites: []
}

export const favorites = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_FAVORITES: {
            return {
                ...state,
                favorites: action.payload
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