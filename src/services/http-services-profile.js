const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getProfileData(tokenId, userId) {
    return fetch(`${Url}:${Port}/api/${Version}/user-info/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenId
        }
    })
}
