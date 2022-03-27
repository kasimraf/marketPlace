import {Types} from "../../action-types/action-types";

const initialState = {
    recommendation: []
};

export const recommendation = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_RECOMMENDATION: {
            return {
                ...state,
                recommendation: action.payload
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