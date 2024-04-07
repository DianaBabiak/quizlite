import Item, {ItemData} from "../item/Item.tsx";
import {Card} from "../../types/types.ts";

type CardsProps={
    data:Card[]
    setData:(data:Card[])=>void
}

export const Cards = ({data, setData}:CardsProps)=>{
    const handleDeleteItem = (idItem: string) => {
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

    return(
        <>
            {data.map((item) => (
                <Item key={item.id} data={item} handleDeleteItem={handleDeleteItem}
                      handleChangeItem={handleChangeItem}
                />))}
        </>
    )

}