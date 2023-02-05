import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import css from './App.module.scss'
import Cookies from 'js-cookie'
import {connect} from "react-redux";
import {signInCookieTokenAction} from "./redux/actions/auth-actions";
import Loader from "./components/loader/loader";
import {updateFavoritesWithCookiesAction} from "./redux/actions/favorites-actions";

const App = (props) => {

    useEffect(() => {
        const CookiesTokenId = Cookies.get('tokenId')
        if (CookiesTokenId) {
            props.auth(CookiesTokenId)
        }
    }, [])

    useEffect(() => {
        const cookieFavorites = Cookies.get('favorites')
        if (cookieFavorites) {
            const cookieFavoritesArray = JSON.parse("[" + cookieFavorites + "]")
            props.updateFavoritesWithCookies(cookieFavoritesArray)
        }
    }, [])

    return (
        <div className={css.app}>
            <div className={css.container}>
                <Header/>
                <Content/>
                <Footer/>
                <Loader />
            </div>
        </div>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        auth: (Cookies) => {
            dispatch(signInCookieTokenAction(Cookies))
        },
        updateFavoritesWithCookies: (goodsIds) => {
            dispatch(updateFavoritesWithCookiesAction(goodsIds))
        }
    })
)(App);