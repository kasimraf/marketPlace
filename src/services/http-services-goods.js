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