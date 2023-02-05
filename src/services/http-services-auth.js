import {BASE_URL} from './instance'

export function signUp(tokenId) {
    return fetch(`${BASE_URL}/profile/signup`, {
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
    return fetch(`${BASE_URL}/profile/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'tokenId': tokenId
        })
    })
}
