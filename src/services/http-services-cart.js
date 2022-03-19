const Url = "http://localhost";
const Port = "8080";
const Version = 'v1'

export function getCart(token) {
    return fetch(`${Url}:${Port}/api/${Version}/cart`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "GET"
    })
}

export function addGoodToCart(goodId, token) {
    return fetch('http://localhost:8080/api/v1/cart/goods/-2?total=2', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: "POST"
    })
}
