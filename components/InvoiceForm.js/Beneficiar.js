import React from 'react'
import RichCard from '../RichCard'
import FancyInput from '../FancyInput'
import { Grid, MenuItem, Typography } from '@mui/material'
import { LEGALFORMS } from '../../models/legalForms'
import { useAppContext } from '../../lib/AppContext'


export default function Beneficiar(props) {

    const [state, setState] = useAppContext()

    const changeHandler = name => ev => {
        setState({
            ...state,
            customer: {
                ...state.customer,
                [name]: ev.target.value
            }
        })
    }

    const changeRepHandler = name => ev => {
        setState({
            ...state,
            customer: {
                ...state.customer,
                representative: {
                    ...state.customer.representative,
                    [name]: ev.target.value
                }
            }
        })
    }

    const customer = ( state && state.customer) || {}
    const representative = (customer && customer.representative) || {}

    return (
        <RichCard title="BENEFICIAR">
            {customer && (
                <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <FancyInput value={customer.name || ""} onChange={changeHandler("name")} label="DENUMIRE" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={customer.cif || ""} onChange={changeHandler("cif")} label="CUI/CF" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={customer.legalForm || ""} onChange={changeHandler("legalForm")} label="FORMA" select>
                            {LEGALFORMS.map((e, i) => <MenuItem key={i} value={e.name}><strong>{e.name}</strong> &nbsp;-&nbsp; <small>{e.label}</small></MenuItem>)}
                        </FancyInput>
                    </Grid>
                    <Grid item xs={10} sm={10}>
                        <FancyInput value={customer.address || ""} onChange={changeHandler("address")} label="ADRESA" />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <FancyInput value={customer.zip || ""} onChange={changeHandler("zip")} label="C.POȘTAL" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FancyInput value={customer.city || ""} onChange={changeHandler("city")} label="LOCALITATE" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FancyInput value={customer.county || ""} onChange={changeHandler("county")} label="JUDET" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FancyInput value={customer.country || ""} onChange={changeHandler("country")} label="TARA" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={customer.email || ""} onChange={changeHandler("email")} label="EMAIL" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={customer.phone || ""} onChange={changeHandler("phone")} label="TELEFON" />
                    </Grid>
                    <Grid item xs={12}><Typography variant="overline">REPREZENTANT</Typography></Grid>
                    <Grid item xs={12} sm={12}>
                        <FancyInput value={representative.name || ""} onChange={changeRepHandler("name")} label="NUME ȘI PRENUME" />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FancyInput value={representative.phone || ""} onChange={changeRepHandler("phone")} label="TELEFON" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <FancyInput value={representative.email || ""} onChange={changeRepHandler("email")} label="EMAIL" />
                    </Grid>
                </Grid>
            )}

        </RichCard>
    )
}
