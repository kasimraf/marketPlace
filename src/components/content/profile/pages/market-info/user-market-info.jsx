import React, {useEffect, useState} from 'react';
import style from './user-market-info.module.scss'
import AddMarket from "./add-market/add-market";
import {connect} from "react-redux";
import {getUserMarketAction} from "../../../../../redux/actions/markets-actions";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";

const UserMarketInfo = (props) => {

    const navigate = useNavigate()

    const [addMarketStatus, setAddMarketStatus] = useState(false);

    useEffect(() => {
        props.getUserMarket(props.token, props.profile.id)
    }, [props.userMarketId])

    return (
        <div>
            {(!props.userMarketId) ?
                <div className={style.addMarket}>
                    <div className={style.addMarketRow}>
                        <button className={style.addMarketButton} onClick={() => {
                            setAddMarketStatus(!addMarketStatus)
                        }}>
                            {addMarketStatus ? "Отменить создание" : "Открыть магазин"}
                        </button>
                    </div>
                    <div className={style.addMarketForm}>
                        {addMarketStatus ? <AddMarket setAddMarketStatus={setAddMarketStatus}/> : <div>
                            <h3>У вас еще нет магазина, чтобы открыть магазин, воспользуйтесь кнопочкой выше)</h3>
                        </div>}
                    </div>
                </div> :
                <div>
                    <div className={style.marketInfo}>
                        <h2>Ваш магазин</h2>
                        <div className={style.container}>
                            <p className={style.title}>Название</p>
                            <p className={style.text}>{props.userMarket.name}</p>
                        </div>
                        <div className={style.container}>
                            <p className={style.title}>Описание</p>
                            <p className={style.text}>{props.userMarket.description}</p>
                        </div>
                        <div className={style.container}>
                            <p className={style.title}>Фото магазина</p>
                            <img src={props.userMarket.imageUrl} alt=""/>
                        </div>
                    </div>
                    <div>
                        <Link to='./edit' style={{"textDecoration": "none"}}>
                            <Button variant="contained">
                                Изменить
                            </Button>
                        </Link>
                    </div>
                </div>}
        </div>
    );
};

export default connect(
    state => ({
        profile: state.auth.profile,
        token: state.auth.tokenId,
        userMarketId: state.auth.profile.marketId,
        userMarket: state.markets.userMarketData
    }),
    dispatch => ({
        getUserMarket: (token, ownerId) => {
            dispatch(getUserMarketAction(token, ownerId))
        }
    })
)(UserMarketInfo);