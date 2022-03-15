const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getMarketsTypes() {
    return fetch(`${Url}:${Port}/api/${Version}/market/type`, {
        method: 'GET'
    })
}

export function addMarket(market, token) {
    return fetch(`${Url}:${Port}/api/${Version}/market/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST",
        body: JSON.stringify(market)
    })
}

export function getMainMarkets() {
    return fetch(`${Url}:${Port}/api/${Version}/market?page=0&size=20`, {
        method: "GET"
    })
}

export function getMarketData(marketId) {
    return fetch(`${Url}:${Port}/api/${Version}/market/${marketId}`, {
        method: "GET",
    })
}

export function getMarketGoods(marketId) {
    return fetch(`${Url}:${Port}/api/${Version}/goods/market/${marketId}`, {
        method: "GET",
    })
}

export function getUserMarket(token, ownerId) {
    return fetch(`${Url}:${Port}/api/${Version}/market/owner/${ownerId}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
}

export function editMarket(market, token) {
    return fetch(`${Url}:${Port}/api/${Version}/market/`, {
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
    return fetch(`${Url}:${Port}/api/${Version}/market/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "DELETE",
    })
}

