import { BASE_URL } from './instance'

export function getUniversalRecommendation() {
    return fetch(`${BASE_URL}/recommendation`, {
        method: 'GET',
    })
}

export function getUserRecommendation(token) {
    return fetch(`${BASE_URL}/recommendation`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}
