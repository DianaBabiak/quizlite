import {Button} from "@mui/material";
import {useState} from "react";
import {ItemData} from "../item/Item.tsx";
import TextField from '@mui/material/TextField';
import s from './addTextByTemplyed.module.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface AddTextByTemplyed {
    handleTextSeparation:(arrValue:Omit<ItemData, 'id'>[])=>void
}
function AddTextByTemplyed ({handleTextSeparation}:AddTextByTemplyed){
    const [value, setValue]=useState('')
    const [otherValueDefinitionSeparator, setOtherValueDefinitionSeparator] = useState('');
    const [otherValueCardSeparator, setOtherValueCardSeparator] = useState('');

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
                    <FormControl>
                        <FormLabel id="definitionSeparator">Between a term and a definition</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="definitionSeparator"
                            name="definitionSeparator"
                        >
                            <FormControlLabel value="Tab" control={<Radio />} label="Tab" />
                            <FormControlLabel value="Сomma" control={<Radio />} label="Сomma" />
                            <FormControlLabel
                                value="otherDefinitionSeparator"
                                control={<Radio />}
                                onChange={()=>{}}
                                label=""
                                labelPlacement="bottom"
                            />
                            <TextField
                                id="otherValueDefinitionSeparator"
                                variant="standard"
                                value={otherValueDefinitionSeparator}
                                onChange={()=>{}}
                            />

                        </RadioGroup>
                    </FormControl>

                <FormControl>
                    <FormLabel id="definitionSeparator">Between the cards</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="cardSeparator"
                        name="cardSeparator"
                    >
                        <FormControlLabel value="lineBreak" control={<Radio />} label="Line break" />
                        <FormControlLabel value="semicolon" control={<Radio />} label="Semicolon" />
                        <FormControlLabel
                            value="otherCardSeparator"
                            control={<Radio />}
                            onChange={()=>{}}
                            label=""
                        />
                        <TextField
                            id="otherValueCardSeparator"
                            variant="standard"
                            value={otherValueCardSeparator}
                            onChange={()=>{}}
                        />

                    </RadioGroup>
                </FormControl>
                <Button onClick={handlerOnClick} variant="contained">Add Card</Button>
            </div>

    </div>
)
}


export default AddTextByTemplyed