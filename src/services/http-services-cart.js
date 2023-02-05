import {BASE_URL} from "./instance";

export function getCart(token) {
    return fetch(`${BASE_URL}/cart`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET"
    })
}

export function addGoodToCart(goodId, token) {
    return fetch(`${BASE_URL}/cart/goods/${goodId}?total=1`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST"
    })
}

export function delGoodToCart(goodId, token) {
    return fetch(`${BASE_URL}/cart/goods/${goodId}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
}

export function setTotal(token, goodId, total) {
    return fetch(`${BASE_URL}/cart/goods/${goodId}/total/${total}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
}
