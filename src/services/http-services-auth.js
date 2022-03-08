const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function signUp(tokenId) {
    return fetch(`${Url}:${Port}/api/${Version}/profile/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'tokenId': tokenId
        })
    })
}
export function signIn(tokenId) {
    return fetch(`${Url}:${Port}/api/${Version}/profile/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'tokenId': tokenId
        })
    })
}
