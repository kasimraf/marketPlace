import React, {useEffect, useState} from 'react';
import style from './market-info.module.scss'
import {connect} from "react-redux";
import {addMarketAction, getMarketsTypesAction} from "../../../../../redux/actions/markets-actions";

const MarketInfo = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        props.getMarketsTypes()
    }, [])

    const addMarket = () => {
        const marketData = {
            name: name,
            type: type,
            imageUrl: imageUrl
        }
        props.addMarket(marketData, props.token)
    }

    return (
        <div>
            <div className={style.addMarket}>
                <button>Add market</button>
                <div>
                    Name
                    <input type="text" placeholder='name' onChange={e => {setName(e.target.value)}} value={name}/>
                    ImageUrl
                    <input type="text" placeholder='imageurl' onChange={e => {setImageUrl(e.target.value)}} value={imageUrl}/>
                    <select onChange={event => {setType(event.target.value)}}>
                        <option value=" " disabled>Выберите тип магазина</option>
                        {props.marketTypes.map((type, index) => <option key={type.id} value={type.id}>{type.name}</option> )}
                    </select>
                    <button onClick={addMarket}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        marketTypes: state.markets.types,
        token: state.auth.tokenId
    }),
    dispatch => ({
        getMarketsTypes: () => {
            dispatch(getMarketsTypesAction())
        },
        addMarket: (marketData, token) => {
            dispatch(addMarketAction(marketData, token))
        }
    })
)(MarketInfo);