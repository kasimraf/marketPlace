import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUserGoodsAction} from "../../../../../redux/actions/goods-actions";
import Button from "@mui/material/Button";
import style from './profile-goods.module.scss'
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";


const ProfileGoods = (props) => {

    useEffect(() => {
        if(Number.isInteger(props.userMarketId)){
            props.getUserGoods(props.userMarketId)
        }
    }, [props.userMarketId])

    return (
        <>
            <div className={style.addGoodRow}>
                <Link to="../add-good" style={{"textDecoration": "none"}}><Button>Добавить товар</Button></Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="center">Фото</TableCell>
                            <TableCell align="center">Описание</TableCell>
                            <TableCell align="center">Цена</TableCell>
                            <TableCell align="center">Кол-во на складе</TableCell>
                            <TableCell align="center">Производитель</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.userGoods.map((good) => (
                            <TableRow
                                key={good.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`/goods/${good.id}`} className={style.tableName}>{good.name}</Link>
                                </TableCell>
                                <TableCell align="center" sx={{maxWidth: 500,}}><img style={{width: 100}} src={good.imageUrl} alt=""/></TableCell>
                                <TableCell align="center" sx={{width: 500,}}>{good.description}</TableCell>
                                <TableCell align="center">{good.price}</TableCell>
                                <TableCell align="center">{good.count}</TableCell>
                                <TableCell align="center">{good.producer}</TableCell>
                                <TableCell align="center"><Link to={`../edit-good/${good.id}`} style={{"textDecoration": "none"}}><Button>Изменить</Button></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default connect(
    state => ({
        userGoods: state.goods.userGoods,
        userMarketId: state.auth.profile.marketId
    }),
    dispatch => ({
        getUserGoods: (marketId) => {
            dispatch(getUserGoodsAction(marketId))
        }
    })
)(ProfileGoods);