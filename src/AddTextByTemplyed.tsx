import {Button, TextareaAutosize} from "@mui/material";
import {useState} from "react";
import {ItemData} from "./Item.tsx";

interface AddTextByTemplyed {
    handleTextSeparation:(arrValue:Omit<ItemData, 'id'>[])=>void
}
function AddTextByTemplyed ({handleTextSeparation}:AddTextByTemplyed){
    const [value, setValue]=useState('')

   const handlerChangeInput = (e)=>{
      const valueInput = e.target.value
       setValue(valueInput)
   }

   const handlerOnClick=()=>{
        const arrayOfItemsLikeString = value.split(';')
       const arrayOfItemswithoutId=arrayOfItemsLikeString.map((item)=>{
           const splitedItem=item.split('-')
           return {
               term: splitedItem[0],
               determination: splitedItem[1]
           }
       })
       handleTextSeparation(arrayOfItemswithoutId)
       setValue('')

   }

    return (
        <div>
            <TextareaAutosize value={value} onChange={handlerChangeInput}/>
        <Button onClick={handlerOnClick} sx ={{margin:'20px'}} variant="contained">Add</Button>
    </div>
)
}


export default AddTextByTemplyed