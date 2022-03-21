import {BASE_URL} from './instance'

export function getGoodsTypes() {
    return fetch(`${BASE_URL}/goods/type`, {
        method: 'GET'
    })
}

export function getGoods() {
    return fetch(`${BASE_URL}/goods?page=0&size=250`, {
        method: "GET"
    })
}

export function getGood(goodId) {
    return fetch(`${BASE_URL}/goods/${goodId}`, {
        method: "GET"
    })
}

export function addGood(good, token) {
    return fetch(`${BASE_URL}/goods/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST",
        body: JSON.stringify(good)
    })
}

export function editGood(good, token) {
    return fetch(`${BASE_URL}/goods/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "PUT",
        body: JSON.stringify(good)
    })
}

export function delGood(goodId, token) {
    return fetch(`${BASE_URL}/goods/${goodId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "DELETE",
    })
}