import {Button} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {ItemData} from "../item/Item.tsx";
import TextField from '@mui/material/TextField';
import s from './addTextByTemplyed.module.scss'
import {RadioGroupComponent} from "../../components/radioGroupComponent/RadioGroupComponent.tsx";

interface AddTextByTemplyed {
    handleTextSeparation:(arrValue:Omit<ItemData, 'id'>[])=>void
}
export function AddTextByTemplyed ({handleTextSeparation}:AddTextByTemplyed){
    const [value, setValue]=useState('')

    const [signTermDefinition, setSignTermDefinition]=useState(' ')
    const [signBetweenCards, setSignBetweenCards]=useState('\n')

    const optionsBetweenCards = [{value: "lineBreak", label:"Line break"},{value:"semicolon", label:"Semicolon"}]
    const optionsTermDefinition = [{value: "Tab", label:"Tab"},{value:"Сomma", label:"Сomma"}]
    const handleChangeRadioGroupTermDefinition=(value:string)=>{
        if(value === "Tab"){
            setSignTermDefinition(' ')
            return
        }
        if(value === "Сomma"){
            setSignTermDefinition(',')
            return
        }

        setSignTermDefinition(value)
    }

    const handleChangeRadioGroupBetweenCards=(value:string)=>{
        if(value === "lineBreak"){
            setSignBetweenCards('\n')
            return
        }
        if(value === "semicolon"){
            setSignBetweenCards(';')
            return
        }

        setSignBetweenCards(value)
    }


    const handlerChangeInput = (e:ChangeEvent<HTMLInputElement>)=>{
      const valueInput = e.target.value
       setValue(valueInput)
   }

   const handlerAddCardsClick=()=>{
        const arrayOfItemsLikeString = value.split(signBetweenCards)
       const arrayOfItemswithoutId=arrayOfItemsLikeString.map((item)=>{
           const splitedItem=item.split(signTermDefinition)
           return {
               term: splitedItem[0],
               determination: splitedItem[1]
           }
       })
       handleTextSeparation(arrayOfItemswithoutId)
       setValue('')

   }

    return (
        <div className={s.container}>
            <TextField
                className={s.textField}
                label="Enter text"
                multiline
                value={value}
                onChange={handlerChangeInput}
                variant="outlined"
                maxRows={16}
                minRows={6}
                />

            <div className={s.radioGroupsContainer}>
                <RadioGroupComponent handleChange={handleChangeRadioGroupTermDefinition} label={'Between a term and a definition'} idTextField={"otherValueDefinitionSeparator"} options={optionsTermDefinition} defaultValue={"Tab"} name={"definitionSeparator"} />
                <RadioGroupComponent handleChange={handleChangeRadioGroupBetweenCards} label={'Between the cards'} name={'cardSeparator'} defaultValue={"lineBreak"} idTextField={"otherValueCardSeparator"} options={optionsBetweenCards} />
                <Button disabled = {!value} onClick={handlerAddCardsClick} variant="contained">Add Cards</Button>
            </div>

    </div>
)
}