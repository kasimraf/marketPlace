import React, {useEffect, useState} from 'react';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import {addGoodAction, getGoodsTypesAction} from "../../../../../../redux/actions/goods-actions";
import {useNavigate} from "react-router-dom";

const AddGood = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [producer, setProducer] = useState('');

    useEffect(() => {
        props.getGoodsTypes()
    }, [])

    const navigate = useNavigate();

    const addGood = () => {
        const newGood = {
            count: count,
            description: description,
            goodsTypeId: type,
            imageUrl: imageUrl,
            marketId: props.userMarketId,
            name: name,
            price: price,
            producer: producer,
        }
        props.addGood(newGood, props.token, navigate)
    }

    return (
        <>
            <h3>Доавить товар</h3>
            <form autoComplete="off" action="" onSubmit={event => {
                event.preventDefault();
                addGood()
            }}>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Название"
                        variant="standard"
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        value={name}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Ссылка на аву"
                        variant="standard"
                        onChange={e => {
                            setImageUrl(e.target.value)
                        }}
                        value={imageUrl}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Описание"
                        variant="standard"
                        onChange={e => {
                            setDescription(e.target.value)
                        }}
                        value={description}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Стоимость (в$)"
                        variant="standard"
                        type="number"
                        onChange={e => {
                            setPrice(e.target.value)
                        }}
                        value={price}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Количество на складе"
                        variant="standard"
                        type="number"
                        onChange={e => {
                            setCount(e.target.value)
                        }}
                        value={count}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Производитель"
                        variant="standard"
                        onChange={e => {
                        setProducer(e.target.value)
                    }}
                        value={producer}
                    />
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <InputLabel id="demo-simple-select-standard-label">Тип товара</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Тип товара"
                        onChange={event => {
                            setType(event.target.value)
                        }}
                    >
                        <MenuItem value="" disabled>
                            <em>Выберите тип товара</em>
                        </MenuItem>
                        {props.goodsTypes.map((type) => <MenuItem key={type.id}
                                                                   value={type.id}>{type.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <Button type="submit" variant="contained">Добавить</Button>
                </FormControl>
            </form>
        </>
    );
};

export default connect(
    state => ({
        goodsTypes: state.goods.types,
        token: state.auth.tokenId,
        userMarketId: state.auth.profile.marketId
    }),
    dispatch => ({
        getGoodsTypes: () => {
            dispatch(getGoodsTypesAction())
        },
        addGood: (newGood, token, navigate) => {
            dispatch(addGoodAction(newGood, token, navigate))
        }
    })
)(AddGood);