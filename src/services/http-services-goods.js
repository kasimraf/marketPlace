import {BASE_URL} from './instance'

export function getGoodsTypes() {
    return fetch(`${BASE_URL}/goods/type`, {
        method: 'GET'
    })
}

export function getGoods(goodsParamsPage) {
    return fetch(`${BASE_URL}/goods?page=${(goodsParamsPage)?goodsParamsPage-1:0}`, {
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

export function getGoodsByType(goodsTypeId, goodsParamsPage) {
    return fetch(`${BASE_URL}/goods/type/${goodsTypeId}?page=${(goodsParamsPage)?goodsParamsPage-1:0}`, {
        method: "GET"
    })

}