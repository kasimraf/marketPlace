import React, {useEffect} from 'react'
import styles from './add-market.module.scss'
import {connect} from "react-redux";
import {addMarketAction, getMarketsTypesAction} from "../../../../redux/actions/markets-actions";


const AddMarket = (props) => {

    let newMarketName = React.createRef();
    let newMarketType = React.createRef();
    let newMarketImageUrl = React.createRef();

    useEffect(() => {
        props.getMarketTypes(props.token)
    }, []);

    let addMarket = () => {
        let marketData = {
            name: newMarketName.current.value,
            type: newMarketType.current.value,
            imageUrl: newMarketImageUrl.current.value
        }
        console.log(marketData)
        props.addMarket(marketData, props.token)
    }
    return (
        <div>
            <div className={styles.name}>
                <p>Название Магазина</p>
                <input ref={newMarketName} type="text" placeholder='Название'/>
            </div>
            <div className={styles.imageUrl}>
                <p>Ссылка на аву</p>
                <input ref={newMarketImageUrl} type="text" placeholder='Ссылка на аву'/>
            </div>
            <div className={styles.types}>
                <select ref={newMarketType}>
                    {props.types.map((type, index) => <option value={type}>{type}</option> )}
                </select>
            </div>
            <div className={styles.addButton}>
                <button onClick={addMarket}>Добавить</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        types: state.markets.types,
        token: state.auth.tokenId
    }),
    dispatch => ({
        getMarketTypes: (token) => {
            dispatch(getMarketsTypesAction(token))
        },
        addMarket: (marketData, token) => {
            dispatch(addMarketAction(marketData, token))
        }
    })
)(AddMarket);