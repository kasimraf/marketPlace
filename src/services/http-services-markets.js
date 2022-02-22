const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getMarketsTypes(token) {
    return fetch(`${Url}:${Port}/api/${Version}/market/type`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
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

export function getMainMarkets(token) {
    return fetch(`${Url}:${Port}/api/${Version}/market?page=0&size=20`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET",
    })
}

export function getMarketData(token, marketId) {
    return fetch(`${Url}:${Port}/api/${Version}/market/${marketId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET",
    })
}

export function getMarketGoods(token, marketId) {
    return fetch(`${Url}:${Port}/api/${Version}/goods/market/${marketId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET",
    })
}