import React from 'react';
import styles from './main.module.scss'
import Recommendation from "../recommendation/recommendation";


const Main = () => {
    return (
        <div className={styles.main}>
            <Recommendation/>
        </div>
    );
};

export default Main;