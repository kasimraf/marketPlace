const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getGoodsTypes() {
    return fetch(`${Url}:${Port}/api/${Version}/goods/type`, {
        method: 'GET'
    })
}

export function getGoods() {
    return fetch(`${Url}:${Port}/api/${Version}/goods?page=0&size=50`, {
        method: "GET"
    })
}

export function getGood(goodId) {
    return fetch(`${Url}:${Port}/api/${Version}/goods/${goodId}`, {
        method: "GET"
    })
}

export function addGood(good, token) {
    return fetch(`${Url}:${Port}/api/${Version}/goods/`, {
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
    return fetch(`${Url}:${Port}/api/${Version}/goods/`, {
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
    return fetch(`${Url}:${Port}/api/${Version}/goods/${goodId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "DELETE",
    })
}