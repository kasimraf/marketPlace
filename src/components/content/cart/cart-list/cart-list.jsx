import React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import CartListItem from "./cart-list-item/cart-list-item";

const CartList = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="center">Фото</TableCell>
                        <TableCell align="center">Цена</TableCell>
                        <TableCell align="center">Количество</TableCell>
                        <TableCell align="center">Стоимость</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.goods.map((good) => {
                        return <CartListItem key={good.id} good={good}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CartList;