import React, {useEffect, useState} from 'react';
import TableCell from "@mui/material/TableCell";
import {Link} from "react-router-dom";
import style from "../../../profile/pages/goods/profile-goods.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import {connect} from "react-redux";
import {delGoodToCartAction, setTotalGoodToCartAction} from "../../../../../redux/actions/cart-actions";

const CartListItem = (props) => {

    const [total, setTotal] = useState('')

    useEffect(() => {
        setTotal(props.good.total)
    }, [])

    const editTotal = (value) => {
        if (+value !== props.good.total && Number.isInteger(+value) && +value > 0) {
            props.setTotal(props.token, props.good.id, value)
        } else {
            setTotal(props.good.total)
        }
    }

    return (
        <TableRow
            key={props.good.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row">
                <Link to={`/goods/${props.good.id}`} className={style.tableName}>{props.good.name}</Link>
            </TableCell>
            <TableCell align="center" sx={{maxWidth: 500,}}><img style={{width: 100}} src={props.good.imageUrl} alt=""/></TableCell>
            <TableCell align="center">{props.good.price}</TableCell>
            <TableCell align="center">
                <TextField
                    id="standard-number"
                    type="number"
                    value={total}
                    sx={{width: '10ch'}}
                    InputProps={{
                        inputProps: {
                            min: 1, step: 1,
                            style: {textAlign: 'center'}
                        }
                    }}
                    onChange={
                        (event) => {
                            setTotal(event.target.value)
                        }
                    }
                    onBlur={
                        (event) => {
                            editTotal(event.target.value)
                        }
                    }
                    variant="standard"
                />
            </TableCell>
            <TableCell align="center"><h3>{props.good.total * props.good.price}</h3></TableCell>
            <TableCell align="center"><Button onClick={() => {
                props.delGood(props.good.id, props.token)
            }} color="error">Удалить</Button></TableCell>
        </TableRow>
    );
};

export default connect(
    state => ({
        token: state.auth.tokenId
    }),
    dispatch => ({
        delGood: (goodId, token) => {
            dispatch(delGoodToCartAction(goodId, token))
        },
        setTotal: (token, goodId, total) => {
            dispatch(setTotalGoodToCartAction(token, goodId, total))
        }
    })
)(CartListItem);