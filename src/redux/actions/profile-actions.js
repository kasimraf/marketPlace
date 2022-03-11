import {Types} from "../action-types/action-types";
import {getProfileData} from "../../services/http-services-profile";

export const getProfileDataAction =  (tokenId, userId) =>  (dispatch) => {
    getProfileData(tokenId, userId)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        console.log(json)
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};
