import React from 'react';
import style from './profile-info.module.scss'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import Button from "@mui/material/Button";
import {setProfileRoleAsSellerAction} from "../../../../../redux/actions/profile-actions";

const ProfileInfo = (props) => {

    return (
        <div className={style.page}>
            <h3>Учётные данные</h3>
            <div className={style.container}>
                <p className={style.title}>Имя</p>
                <p className={style.text}>{props.profile.name}</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Электронная почта</p>
                <p className={style.text}>{props.profile.email}</p>
            </div>
            {(props.profile.roles) ?
                <div className={style.container}>
                    <p className={style.title}>Статус профиля</p>
                    {(props.profile?.roles[0] === 'ROLE_BUYER') ?
                        <div style={{"display": "flex"}}>
                            <p className={style.text}>Покупатель</p>
                            <Button onClick={() => {
                                props.setProfileRole(props.tokenId)
                            }} size="small">Стать продавцем</Button>
                        </div> :
                        <div>
                            <p className={style.text}>Продавец</p>
                        </div>}
                </div> :
                <></>}

            <h3>Подробная информация</h3>
            <div className={style.container}>
                <p className={style.title}>Пока что пусто</p>
                <p className={style.text}>Тут поидеи должен быть user-info</p>
            </div>
            <Link to='../edit-profile' className={style.editProfile}><Button size="small">Изменить
                данные</Button></Link>
        </div>
    );
};

export default connect(
    state => ({
        profile: state.auth.profile,
        tokenId: state.auth.tokenId
    }),
    dispatch => ({
        setProfileRole: (tokenId) => {
            dispatch(setProfileRoleAsSellerAction(tokenId))
        }
    })
)(ProfileInfo);