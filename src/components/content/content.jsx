import React from 'react'
import styles from './content.module.scss'
import {Route, Routes} from "react-router-dom";
import Markets from "./markets/markets";
import Goods from "./goods/goods";
import MarketPage from "./markets/market-page/market-page";
import GoodPage from "./goods/good-page/good-page";
import AuthPage from "../auth/auth-page";
import Main from "./main/main";
import Profile from "./profile/profile";
import ProfileInfo from "./profile/pages/profile-info/profile-info";
import UserMarketInfo from "./profile/pages/market-info/user-market-info";
import EditMarket from "./profile/pages/edit-market/edit-market";
import AddGood from "./profile/pages/add-good/add-good";
import ProfileGoods from "./profile/pages/goods/profile-goods";
import EditProfileInfo from "./profile/pages/edit-profile-info/edit-profile-info";
import Cart from "./cart/cart";
import Orders from "./orders/orders";

const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/markets" element={<Markets/>}/>
                <Route path="/goods" element={<Goods/>}/>
                <Route path="/markets/:id" element={<MarketPage/>}/>
                <Route path="/goods/:id" element={<GoodPage/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route index element={<ProfileInfo/>}/>
                    <Route path="edit-profile" element={<EditProfileInfo/>}/>
                    <Route path="market" element={<UserMarketInfo/>}/>
                    <Route path="market/edit" element={<EditMarket/>}/>
                    <Route path="goods" element={<ProfileGoods/>}/>
                    <Route path="add-good" element={<AddGood/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Content;