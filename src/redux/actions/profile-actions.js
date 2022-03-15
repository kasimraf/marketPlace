import {Types} from "../action-types/action-types";
import {getProfileData, setProfileRoleAsSeller} from "../../services/http-services-profile";

export const getProfileDataAction = (token) => (dispatch) => {
    getProfileData(token)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_PROFILE_DATA, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

export const setProfileRoleAsSellerAction = (tokenId) => (dispatch) => {
    setProfileRoleAsSeller(tokenId)
        .then(response => {
            if (response.ok) {
                dispatch(getProfileDataAction(tokenId));
            }
        })
}