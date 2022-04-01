import {BASE_URL} from "./instance";

export function getFavorites(token) {
    return fetch(`${BASE_URL}/wish-list`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET"
    })
}

export function addGoodToFavorites(goodId, token) {
    return fetch(`${BASE_URL}/wish-list/goods/${goodId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST"
    })
}

export function delGoodToFavorites(goodId, token) {
    return fetch(`${BASE_URL}/wish-list/goods/${goodId}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
}

export function updateUserFavoritesWithCookies(goodsIds, token) {
    return fetch(`${BASE_URL}/wish-list/goods/list/ids`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(goodsIds)
    })
}
