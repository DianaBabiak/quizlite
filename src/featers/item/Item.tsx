import {Button, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import s from './item.module.scss'


export interface ItemData {
    id:number,
    term:string,
    determination:string
}

interface ItemProps{
    data:ItemData
    handleDeleteItem:(idItem:number)=>void
    handleChangeItem:(updatedData:ItemData)=>void
}
function Item ({handleDeleteItem,data,handleChangeItem}:ItemProps){


    return (
        <div className={s.card}>
            <TextField sx={{width:'600px'
            }}
                       label="term"
                       variant="outlined"
                       value={data.term}
                       onChange={(e) => handleChangeItem({...data, term: e.target.value})}
            />
            <TextField sx={{width:'600px'}}
                       label="determination"
                       variant="outlined"
                       value={data.determination}
                       onChange={(e) => handleChangeItem({...data, determination: e.target.value})}
            />
            <Button onClick={()=>handleDeleteItem(data.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete
            </Button>
        </div>
    )
}


export default Item