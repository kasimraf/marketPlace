import React from 'react';
import style from './profile-minData.module.scss'
import {connect} from "react-redux";



const ProfileMinData = (props) => {
    return (
        <div className={style.container}>
            <img src={props.profile.userPic} alt=""/>
            <h2>{props.profile.name}</h2>
        </div>
    );
};

export default connect(
    state => ({
        profile: state.auth.profile
    }),
    dispatch => ({})
)(ProfileMinData);