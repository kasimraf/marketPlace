import {Types} from "../../action-types/action-types";

const initialState = {
    authStatus: false,
    profile: [],
    tokenId: '',
    loader: false
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case Types.AUTH_TRUE: {
            return {
                ...state,
                authStatus: true
            }
        }
        case Types.AUTH_TOKEN_ID: {
            return {
                ...state,
                tokenId: action.payload
            }
        }
        case Types.GET_PROFILE_DATA: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case Types.LOADER_TRUE: {
            return {
                ...state,
                loader: true
            }
        }
        case Types.LOADER_FALSE: {
            return {
                ...state,
                loader: false
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