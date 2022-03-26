import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import css from './App.module.scss'
import Cookies from 'js-cookie'
import {connect} from "react-redux";
import {signInCookieTokenAction} from "./redux/actions/auth-actions";
import Loader from "./components/loader/loader";

const App = (props) => {

    useEffect(() => {
        const CookiesTokenId = Cookies.get('tokenId')
        if (CookiesTokenId) {
            props.auth(CookiesTokenId)
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
    })
)(App);