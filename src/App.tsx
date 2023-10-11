import './App.css'
import {Button, TextareaAutosize} from "@mui/material";
import Item, {ItemData} from "./Item.tsx";
import {useState} from "react";
import AddTextByTemplyed from "./AddTextByTemplyed.tsx";

function App() {
    const [data, setData] = useState([{id: 1, term: '', determination: ''}, {id: 2, term: '', determination: ''}])
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


    const handleTextSeparation = (arrValue: Omit<ItemData, 'id'>[]) => {
        // const findedItemTerm= data.find(item=>item.term==='')
        // const findedItemDetermination= data.find(item=>item.determination==='')
        // if (findedItemTerm && findedItemDetermination){
        //     const updatedDataWithId = data.map((item) => ({
        //                      ...item,
        //                      term: ,
        //                      determination: arrValue[1],
        //                  }))
        //              setData(updatedData)
        //              return
        // }
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





    // const findedItem= data.find(item=>item.term='')
       //  if (findedItem){
       //          const updatedData = data.map((item) => ({
       //              ...item,
       //              term: arrValue[0],
       //              determination: arrValue[1],
       //          }))
       //      setData(updatedData)
       //      return
       //  }
       //      const lastDataItem = data[data.length - 1]
       //      const newItemId = (lastDataItem?.id ?? 0) + 1
       //      const newItem = {id: newItemId, term: arrValue, determination:arrValue[1]}
       //      const updateData = [...data, newItem]
       //      setData(updateData)





    return (
        <>
           <AddTextByTemplyed handleTextSeparation={handleTextSeparation}/>
            {data.map((item) => (
                <>
                    <Item key={item.id} data={item} handleDeleteItem={handleDeleteItem}
                          handleChangeItem={handleChangeItem}
                    />
                </>))}
            <Button variant="contained" onClick={addItem}>Add</Button>
        </>
    )
}

export default App
