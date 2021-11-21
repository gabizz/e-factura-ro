import { TextField} from '@mui/material'
import {makeStyles} from "@mui/styles"
import React, { Fragment } from 'react'

const useStyles = makeStyles(theme=>({
    textField: { background: 'white' ,  boxShadow: 0,
    "&& :hover": {background: theme.palette.grey[100]},
    

    "&& input[type=number]":{
        textAlign: "center",
        width: "100%",
        paddingRight: 0, paddingLeft:0, marginRight: 0, marginLeft: 0  
    },
    "&& input[type=text]":{
        textAlign: "center",
        width: "100%",
        paddingRight: 0, paddingLeft:0, marginRight: 0, marginLeft: 0  
    },
    "&& input[type=date]":{
        textAlign: "center",
        width: "100%",
        paddingRight: 0, paddingLeft:0, marginRight: 0, marginLeft: 0  
    },
    "&& input[type=select]":{
        textAlign: "center",
        width: "100%",
        paddingRight: 0, paddingLeft:0, marginRight: 0, marginLeft: 0  
    },
    ".MuiAutocomplete-inputRoot[class*=\"MuiOutlinedInput-root\"][class*=\"MuiOutlinedInput-marginDense\"] .MuiAutocomplete-input": {
        fontSize: "10px"
    },
},
    input: { fontWeight: 600, fontSize: '0.7rem', color: theme.palette.primary.dark, borderRadius:0, },
    inputLabel: { fontSize: '0.8rem'}
}))

export default function FancyInput(props) {
    const classes = useStyles()
    return (
        <TextField 
            style = {{height: "auto"}}
            variant = "outlined" 
            fullWidth={props.fullWidth || true} 
            size = "small" 
            className = {classes.textField}
            InputProps = {{className: classes.input}} 
            InputLabelProps = {{className: classes.inputLabel}}
            {...{...props, value: props.value || '' }}
            disabled = {props.disabled}
            required = {props.required || true}
          
            {...props} />
    )
}

