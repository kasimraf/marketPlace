import React from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import css from './App.module.scss'
import Auth from "./components/auth/auth";
import {connect} from "react-redux";

const App = (props) => {
    return (
        <div className={css.app}>
            {/*{!props.authStatus*/}
            {/*    ? <Auth/>*/}
            {/*    : <div>*/}
                    <Header />
                    <Content />
                    <Footer />
            {/*    </div>*/}
            {/*}*/}
        </div>
    )
}

export default connect(
    state => ({
        authStatus: state.auth.authStatus,
    }),
    dispatch => ({})
)(App);