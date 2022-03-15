import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addMarketAction, getMarketsTypesAction} from "../../../../../../redux/actions/markets-actions";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import style from './add-market.module.scss'

const AddMarket = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() => {
        props.getMarketsTypes()
    }, [])

    const addMarket = () => {
        const marketData = {
            name: name,
            type: type,
            description: description,
            imageUrl: imageUrl
        }
        props.addMarket(marketData, props.token)
    }


    return (
        <Paper elevation={3} className={style.container}>
            <form autoComplete="off" action="" onSubmit={event => {
                event.preventDefault();
                addMarket()
            }}>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <TextField
                        id="outlined-basic"
                        label="Название магазина"
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
                        label="Ссылка на аву магазина"
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
                    <InputLabel id="demo-simple-select-standard-label">Тип магазина</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Тип магазина"
                        onChange={event => {
                            setType(event.target.value)
                        }}
                    >
                        <MenuItem value="" disabled>
                            <em>Выберите тип магазина</em>
                        </MenuItem>
                        {props.marketTypes.map((type) => <MenuItem key={type.id}
                                                                   value={type.id}>{type.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <Button type="submit" variant="contained">Добавить</Button>
                </FormControl>
            </form>
        </Paper>
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
)(AddMarket);