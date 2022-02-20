import {combineReducers} from "redux";
import {markets} from "./markets/markets";
import {auth} from './auth/auth';

export default combineReducers({
    markets: markets,
    auth: auth
})