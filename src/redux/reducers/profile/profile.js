import {Types} from "../../action-types/action-types";

const initialState = {
    profileData: [],
    data: []
};

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.payload
            }
        }
        case Types.GET_PROFILE_DATA_TEST: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state
        }
    }
}