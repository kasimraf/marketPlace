import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    delMarketAction,
    editMarketAction,
    getMarketsTypesAction,
} from "../../../../../redux/actions/markets-actions";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


const EditMarket = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const getInitialData = ()=> {
        setName(props.userMarket.name)
        setType(props.userMarket.marketTypeId)
        setDescription(props.userMarket.description)
        setImageUrl(props.userMarket.imageUrl)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        props.getMarketsTypes()
        getInitialData()
    }, [])

    const editMarket = () => {
        const marketData = {
            name: name,
            type: type,
            description: description,
            imageUrl: imageUrl,
            id: props.userMarket.id
        }
        props.editMarket(marketData, props.token)
    }

    return (
        <div>
            <form autoComplete="off" action="" onSubmit={event => {
                event.preventDefault();
                editMarket()
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
                        value={type}
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
                    <Button type="submit" variant="contained">Изменить</Button>
                </FormControl>
            </form>
            <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                <Button variant="outlined" color="error" onClick={handleClickOpen}>Удалить магазин</Button>
            </FormControl>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Вы точно хотите удалить ваш магазин"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        При удалении магазина удаляются и все вашы товары
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отменить</Button>
                    <Button onClick={() => {props.delMarket(props.token)}} autoFocus>
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default connect(
    state => ({
        ownerId: state.auth.profile.id,
        marketTypes: state.markets.types,
        token: state.auth.tokenId,
        userMarket: state.markets.userMarketData
    }),
    dispatch => ({
        getMarketsTypes: () => {
            dispatch(getMarketsTypesAction())
        },
        editMarket: (marketData, token) => {
            dispatch(editMarketAction(marketData, token))
        },
        delMarket: (token) => {
            dispatch(delMarketAction(token))
        }
    })
)(EditMarket);