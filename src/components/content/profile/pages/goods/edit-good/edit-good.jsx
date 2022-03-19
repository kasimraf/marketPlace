import React, {useEffect, useState} from 'react';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import {
    delGoodAction,
    editGoodAction,
    getEditGoodPageDataAction,
    getGoodsTypesAction
} from "../../../../../../redux/actions/goods-actions";
import {useNavigate, useParams} from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

const EditGood = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [producer, setProducer] = useState('');
    const [id, setId] = useState('')

    const getInitialData = (good)=> {
        setName(good.name)
        setType(good.goodsTypeId)
        setDescription(good.description)
        setImageUrl(good.imageUrl)
        setPrice(good.price)
        setCount(good.count)
        setProducer(good.producer)
        setId(good.id)
    }

    useEffect(() => {
        props.getGoodsTypes()
        props.getData(params.id, getInitialData);
    }, [])

    const editGood = () => {
        const newGood = {
            count: count,
            description: description,
            goodsTypeId: type,
            imageUrl: imageUrl,
            marketId: props.userMarketId,
            name: name,
            price: price,
            producer: producer,
            id: id
        }
        props.editGood(newGood, props.token, navigate)
    }

    const params = useParams()
    const navigate = useNavigate()

    return (
        <>
            <h3>Изменить товар</h3>
            <form autoComplete="off" action="" onSubmit={event => {
                event.preventDefault();
                editGood()
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
                        value={type}
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
                    <Button type="submit" variant="contained">Изменить</Button>
                </FormControl>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120, width: '40ch'}}>
                    <Button variant="outlined" color="error" onClick={handleClickOpen}>Удалить товар</Button>
                </FormControl>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Вы точно хотите удалить ваш товар"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            При удалении товара все ваши активные заявки отменяются
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отменить</Button>
                        <Button onClick={() => {props.delGood(id, props.token, navigate)}} autoFocus>
                            Удалить
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </>
    );
};

export default connect(
    state => ({
        goodsTypes: state.goods.types,
        token: state.auth.tokenId,
        userMarketId: state.auth.profile.marketId,
        good: state.goods.goodPageData
    }),
    dispatch => ({
        getGoodsTypes: () => {
            dispatch(getGoodsTypesAction())
        },
        editGood: (newGood, token, navigate) => {
            dispatch(editGoodAction(newGood, token, navigate))
        },
        getData: (goodId, refreshPageData) => {
            dispatch(getEditGoodPageDataAction(goodId, refreshPageData))
        },
        delGood: (goodId, token, navigate) => {
            dispatch(delGoodAction(goodId, token, navigate))
        }
    })
)(EditGood);