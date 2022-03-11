import {combineReducers} from "redux";
import {markets} from "./markets/markets";
import {auth} from './auth/auth';
import {goods} from "./goods/goods";
import {profile} from "./profile/profile";

export default combineReducers({
    markets: markets,
    goods: goods,
    auth: auth,
    profile: profile
})