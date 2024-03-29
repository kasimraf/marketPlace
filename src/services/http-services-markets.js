import {BASE_URL} from "./instance";

export function getMarketsTypes() {
    return fetch(`${BASE_URL}/market/type`, {
        method: 'GET'
    })
}

export function addMarket(market, token) {
    return fetch(`${BASE_URL}/market`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST",
        body: JSON.stringify(market)
    })
}

export function getMarkets(marketsParamsPage) {
    return fetch(`${BASE_URL}/market?page=${(marketsParamsPage)?marketsParamsPage-1:0}`, {
        method: "GET"
    })
}

export function getMarketData(marketId) {
    return fetch(`${BASE_URL}/market/${marketId}`, {
        method: "GET",
    })
}

export function getMarketGoods(marketId) {
    return fetch(`${BASE_URL}/goods/market/${marketId}`, {
        method: "GET",
    })
}

export function getUserMarket(token, ownerId) {
    return fetch(`${BASE_URL}/market/owner/${ownerId}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
}

export function editMarket(market, token) {
    return fetch(`${BASE_URL}/market/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "PUT",
        body: JSON.stringify(market)
    })
}

export function delMarket(token) {
    return fetch(`${BASE_URL}/market/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "DELETE",
    })
}

export function getMarketsByType(marketTypeId, marketsParamsPage) {
    return fetch(`${BASE_URL}/market/type/${marketTypeId}?page=${(marketsParamsPage)?marketsParamsPage-1:0}`, {
        method: "GET"
    })

}

