import {Types} from "../action-types/action-types";
import {getUniversalRecommendation, getUserRecommendation} from "../../services/http-services-recommendation";

export const getUniversalRecommendationAction = () => async (dispatch) => {
   await getUniversalRecommendation()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_RECOMMENDATION, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
    dispatch({type: Types.LOADER_FALSE})
};

export const getUserRecommendationAction = (token) => async (dispatch) => {
   await getUserRecommendation(token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_RECOMMENDATION, payload: json});
    }).catch(() => {
        console.log('Не удалось подключиться к серверу')
    })
    dispatch({type: Types.LOADER_FALSE})
};