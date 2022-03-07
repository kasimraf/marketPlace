import {combineReducers} from "redux";
import {markets} from "./markets/markets";
import {auth} from './auth/auth';
import {goods} from "./goods/goods";

export default combineReducers({
    markets: markets,
    goods: goods,
    auth: auth
})