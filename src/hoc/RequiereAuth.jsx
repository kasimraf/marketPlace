import React from 'react';
import { useLocation, Navigate} from 'react-router-dom'
import {connect} from "react-redux";

const RequiereAuth = ({children}, props) => {
    const location = useLocation();

    if(!props.authStatus) {
        return <Navigate to='/auth' state={{from: location}} />
    }

    return children;
};

export default connect(
    state => ({
        authStatus: state.auth.authStatus
    }),
    dispatch => ({})
)(RequiereAuth);