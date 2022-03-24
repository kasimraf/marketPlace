import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {connect} from "react-redux";

const Loader = (props) => {

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={props.loader}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default connect(
    state => ({
        loader: state.auth.loader
    }),
    dispatch => ({})
)(Loader);