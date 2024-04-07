import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {ChangeEvent, useState} from "react";

type Option = {
    value:string
    label:string

}

type RadioGroupComponentProps ={
    label:string
    name:string
    defaultValue:string
    options: Option[]
    idTextField:string
    handleChange:(value:string)=>void

}

export const RadioGroupComponent=({label, name, defaultValue, options, idTextField, handleChange}:RadioGroupComponentProps)=>{
const id = `${name}id`
    const [valueRadioGroup, setValueRadioGroup] = useState(defaultValue);
    const [valueTextField, setValueTextField] = useState('');

    const handleChangeRadioGroup = (event: ChangeEvent<HTMLInputElement>) => {
        setValueRadioGroup((event.target as HTMLInputElement).value);
        handleChange(event.target.value)
    };

    const handleChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
        setValueTextField((event.target as HTMLInputElement).value);
    };


    return (
        <FormControl>
            <FormLabel id={id}>{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby={name}
                name={name}
                defaultValue={defaultValue}
                value={valueRadioGroup}
                onChange={handleChangeRadioGroup}
            >
                {options.map(option=><FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />)}
                <FormControlLabel  value={valueTextField} control={<Radio />} label='' />

                <TextField
                    id={idTextField}
                    variant="standard"
                    value={valueTextField}
                    onChange={handleChangeTextField}
                />

            </RadioGroup>
        </FormControl>

)
}