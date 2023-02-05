import {BASE_URL} from "./instance";

export function getProfileData(tokenId) {
    return fetch(`${BASE_URL}/profile`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenId
        }
    })
}

export function setProfileRoleAsSeller(tokenId) {
    return fetch(`${BASE_URL}/profile/type?isSeller=true`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + tokenId
        }
    })

}