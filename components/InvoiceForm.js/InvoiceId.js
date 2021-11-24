import React, { Fragment } from 'react'
import RichCard from '../RichCard'
import FancyInput from '../FancyInput'
import moment from 'moment'
import { Button, Checkbox, FormControlLabel, Grid, Hidden, MenuItem, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useAppContext } from '../../lib/AppContext'
import { BLANKINVOICE } from '../../models/blankinvoice'
import { ClassNames } from '@emotion/react'

const useStyles = makeStyles(theme => ({
    toolbar: {
        backgroundColor: theme.palette.grey[300], padding: theme.spacing(1), boxShadow: "2px 1px 2px grey", borderRadius: 3
    }
}))

export default function InvoiceId(props) {

    const classes = useStyles()
    const [state, setState] = useAppContext()

    const changeHandler = name => ev => {
        setState({
            ...state,
            [name]: name === "dt" ? moment(ev.target.value).format("YYYY-MM-DD") : ev.target.value
        })
    }

    const resetHandler = () => setState({ ...BLANKINVOICE, items: [] })

    const { nr, dt, vat, currency, bank, iban, supplier } = state || {}
    

    return (
        <Fragment>
            <Toolbar variant="dense" className={classes.toolbar}>
                <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                    <Grid item xs={4} sm={1}>
                        <FancyInput value={nr || ""} onChange={changeHandler("nr")} label="NR" />
                    </Grid>
                    <Grid item xs={8} sm={3}>
                        <FancyInput type="date" value={dt || ""} onChange={changeHandler("dt")} label="DIN DATA" />
                    </Grid>
                    <Grid item sm = {3} xs = {6}></Grid>



                    <Grid item xs={3} sm={3} align="right">
                        <FormControlLabel
                            labelPlacement="start"
                            label={<small>TVA</small>}
                            control={<Checkbox 
                                value={vat ?true:false}
                                checked = {vat?true:false}
                                onChange={ev => setState({ ...state, vat: ev.target.checked })} />}
                        />

                    </Grid>
                    <Grid item xs={2} align="right">
                        <Button onClick={resetHandler} size="normal" color="primary" variant="outlined"><small>reset</small></Button>
                    </Grid>


                </Grid>
            </Toolbar>

            <Toolbar variant="dense" className={classes.toolbar}>
                <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                    <Grid item xs = {12} sm={2}>
                        <FormControlLabel
                            control={<FancyInput value={currency || ''} select onChange={ev => setState({ ...state, currency: ev.target.value })}>
                                {["RON", "EUR"].map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)}
                            </FancyInput>
                            }
                            label={<small>MONEDA&nbsp;</small>}
                            labelPlacement="start" />
                    </Grid>
                    
                    <Grid item xs={3} sm={3}>
                        <FancyInput value={bank || ""} onChange={changeHandler("bank")} label="BANCA" />
                    </Grid>
                    <Grid item xs={9} sm={7}>
                        <FancyInput value={iban || ""} onChange={changeHandler("iban")} label="IBAN" />
                    </Grid>

                </Grid>
            </Toolbar>
        </Fragment>
    )
}
