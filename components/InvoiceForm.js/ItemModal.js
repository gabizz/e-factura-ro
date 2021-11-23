import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, IconButton, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState, useEffect, Fragment } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import FancyInput from '../FancyInput'


const useStyles = makeStyles(theme => ({
    dialogPaper: { minWidth: "70vw" }
}))

export default function ItemModal({ data, onClose }) {
    const classes = useStyles()
    const [item, setItem] = useState(null)

    useEffect(() => {
        setItem(data)
    }, [data])



    const closeHandler = elem => () => onClose(elem)

    const changeHandler = name => ev => setItem({ ...item, data: { ...item.data, [name]: ev.target.value } })

    return (

        <Dialog open={Boolean(item)} onClose={closeHandler(null)} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item><Typography variant="body2">OPERARE ARTICOL</Typography></Grid>
                    <IconButton color="grey" onClick={closeHandler(null)}><FaTimesCircle /></IconButton>
                </Grid>
            </DialogTitle>
            <DialogContent>
                {item && item.data && (

                    <Fragment>
                        <br/>
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Grid item xs={12} sm={3}>
                                <FancyInput value= {item.data.name} label="DENUMIRE" onChange = {changeHandler("name")} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <FancyInput value= {item.data.description} label="DECRIERE" onChange = {changeHandler("description")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput value= {item.data.unit} label="U.M." onChange = {changeHandler("unit")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput value= {item.data.price} label="PRET UNITAR" onChange = {changeHandler("price")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput value= {item.data.amount} label="CANTITATE" onChange = {changeHandler("amount")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput value= {item.data.vat} label="COTA TVA" onChange = {changeHandler("vat")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput disabled
                                    value= {item.data.amount * item.data.price * item.data.vat/100} 
                                    label="VALOARE TVA" onChange = {changeHandler("vat")} />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FancyInput disabled
                                    value= {(item.data.amount * item.data.price) + item.data.amount * item.data.price * item.data.vat/100} 
                                    label="VALOARE TOTALA" onChange = {changeHandler("vat")} />
                            </Grid>
                        </Grid>
                        {/* {item && <pre>{JSON.stringify(item, null, 4)}</pre>} */}
                        <Button variant ="contained" color ="primary" type="submit">CONFIRMĂ</Button>
   
                    </Fragment>
                )}

            </DialogContent>
            <DialogActions>
                <Button variant ="contained" color ="error" onClick = {closeHandler(null)}>RENUNTĂ</Button>
                <Button variant ="contained" color ="primary"onClick = {closeHandler(item)}>CONFIRMĂ</Button>
            </DialogActions>
        </Dialog>
     
    )
}
