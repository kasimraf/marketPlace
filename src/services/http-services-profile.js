const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getProfileData(tokenId) {
    return fetch(`${Url}:${Port}/api/${Version}/profile`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenId
        }
    })
}

export function setProfileRoleAsSeller(tokenId) {
    return fetch(`${Url}:${Port}/api/${Version}/profile/type?isSeller=true`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + tokenId
        }
    })

}