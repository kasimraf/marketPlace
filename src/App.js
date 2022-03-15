import React from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import css from './App.module.scss'

const App = () => {
    return (
        <div className={css.app}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;