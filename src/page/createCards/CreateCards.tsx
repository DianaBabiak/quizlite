import {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import s from './createCards.module.scss'
import {Card} from "../../types/types.ts";
import {Link, useNavigate} from "react-router-dom";
import {BackLink} from "../../components/backLink/BackLink.tsx";
import {useAppDispatch} from "../../store/store.ts";
import {createCards} from "../../store/cardsSlice.ts";
import {Cards} from "../../featers/cards/Cards.tsx";


export const CreateCards = ()=>{
    const [data, setData] = useState<Card[]>([])
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const addCardsToDictionaryHandler = ()=>{
        dispatch(createCards(data))
        setData([])
        navigate('/')

    }

    const addItem = () => {
        const lastDataItem = data[data.length - 1]
        const newItemId = (lastDataItem?.id ?? 0) + 1
        const newItem = {id: newItemId, term: '', determination: ''}
        const updateData = [...data, newItem]
        setData(updateData)
    }
    return (
        <div className = {s.container}>
            <BackLink link={'/'} name={'list card'}/>
            <Typography variant="h3" gutterBottom>
                Create cards
            </Typography>
            <Cards data={data} setData={setData}/>
            <div className={s.buttonContainer}>
                <Button className={s.button} variant="contained" onClick={addItem}>Add empty card</Button>
                <Link to={'/create/export'}>
                    <Button variant="outlined">Export cards</Button>
                </Link>
                <Button disabled = {data.length===0 || data[0].term === '' && data[0].determination === ''} className={s.button} variant="contained" onClick={addCardsToDictionaryHandler}>Add the cards to the dictionary  </Button>
            </div>
            </div>
    )
}