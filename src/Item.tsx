import {Button, Card, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


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
        <Card sx={{padding:'20px',
            display:'flex'
        }} variant="outlined">
            {data.id}
            <TextField sx={{width:'600px'
            }}
                       label="Термин"
                       variant="outlined"
                       value={data.term}
                       onChange={(e) => handleChangeItem({...data, term: e.target.value})}
            />
            <TextField sx={{width:'600px'}}
                       label="Определение"
                       variant="outlined"
                       value={data.determination}
                       onChange={(e) => handleChangeItem({...data, determination: e.target.value})}
            />
            <Button onClick={()=>handleDeleteItem(data.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete
            </Button>
        </Card>
    )
}


export default Item