import Typography from "@mui/material/Typography";
import {ItemData} from "../../featers/item/Item.tsx";
import {useState} from "react";
import {Button} from "@mui/material";
import s from './export.module.scss';
import {Card} from "../../types/types.ts";
import {BackLink} from "../../components/backLink/BackLink.tsx";
import {AddTextByTemplyed} from "../../featers/addTextByTemplyed/AddTextByTemplyed.tsx";
import {Cards} from "../../featers/cards/Cards.tsx"
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/store.ts";
import {createCards} from "../../store/cardsSlice.ts";
import { v1 } from 'uuid'

export const Export = ()=>{
    const [data, setData] = useState<Card[]>([])
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const addCardsToDictionaryHandler = ()=>{
        dispatch(createCards(data))
        setData([])
        navigate('/')

    }

    const handleTextSeparation = (arrValue: Omit<ItemData, 'id'>[]) => {
        const newItemId = v1();
        const newItems = arrValue.map((item, index) => ({
            id: newItemId+index,
            term: item.term,
            determination: item.determination,
        }));

        const updatedData = [...data, ...newItems];
        setData(updatedData);
    };
    return (
            <div className={s.container}>
                <BackLink link={'/create'} name={'create card'}/>
                <div className={s.containerTypography}>
                    <Typography variant="h4" gutterBottom>
                        Import data.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Copy and paste your data (from Word, Excel, Google Docs, etc.)
                    </Typography>
                </div>
                <AddTextByTemplyed handleTextSeparation={handleTextSeparation}/>
                <Cards data={data} setData={setData}/>
                <Button disabled = {data.length===0} className={s.button} variant="contained" onClick={addCardsToDictionaryHandler}>Add the cards to the dictionary  </Button>
            </div>
    )
}