import Typography from "@mui/material/Typography";
import AddTextByTemplyed from "../../featers/addTextByTemplyed/AddTextByTemplyed.tsx";
import Item, {ItemData} from "../../featers/item/Item.tsx";
import {useState} from "react";
import {Button} from "@mui/material";
import s from './export.module.scss';
import {Card} from "../../types/types.ts";
import {BackLink} from "../../components/backLink/BackLink.tsx";

type ExportProps = {

}

export const Export = ({}:ExportProps)=>{
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

    const handleTextSeparation = (arrValue: Omit<ItemData, 'id'>[]) => {
        const lastDataItem = data[data.length - 1];
        const newItemId = (lastDataItem?.id ?? 0) + 1;
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
                {data.map((item) => (
                        <Item key={item.id} data={item} handleDeleteItem={handleDeleteItem}
                              handleChangeItem={handleChangeItem}
                        />))}
                <Button disabled = {data.length===0} className={s.button} variant="contained" onClick={()=>{}}>Add the cards to the dictionary  </Button>
            </div>
    )
}