import {combineReducers} from "redux";
import {markets} from "./markets/markets";
import {auth} from './auth/auth';
import {goods} from "./goods/goods";
import {cart} from "./cart/cart";
import {recommendation} from "./recommendation/recommendation";

export default combineReducers({
    markets: markets,
    goods: goods,
    auth: auth,
    cart: cart,
    recommendation: recommendation
})