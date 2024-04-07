import {useState} from "react";
import Item, {ItemData} from "../../featers/item/Item.tsx";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import s from './cards.module.scss'
import {Card} from "../../types/types.ts";
import {Link} from "react-router-dom";
import {BackLink} from "../../components/backLink/BackLink.tsx";

type CardsProps = {

}

export const Cards = ({}:CardsProps)=>{
    const [data, setData] = useState<Card[]>([])
    const handleDeleteItem = (idItem: number) => {
        const updateData = data.filter(item => item.id !== idItem)
        setData(updateData)
    }

    const handleChangeItem = (updatedData:ItemData) => {
        const updatedItem = data.map((item) => {
                if (updatedData.id === item.id) {
                    return updatedData
                }
                return item
            }
        )
        setData(updatedItem)
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
            {data.map((item) => (
                    <Item key={item.id} data={item} handleDeleteItem={handleDeleteItem}
                          handleChangeItem={handleChangeItem}
                    />
              ))}
            <div className={s.buttonContainer}>
                <Button className={s.button} variant="contained" onClick={addItem}>Add empty card</Button>
                <Link to={'/create/export'}>
                    <Button variant="outlined">Export cards</Button>
                </Link>
                <Button disabled = {data.length===0} className={s.button} variant="contained" onClick={()=>{}}>Add the cards to the dictionary  </Button>
            </div>
            </div>
    )
}