import React from 'react'
import RichCard from '../RichCard'
import FancyInput from '../FancyInput'
import { Grid, MenuItem, Typography } from '@mui/material'
import { LEGALFORMS } from '../../models/legalForms'
import { useAppContext } from '../../lib/AppContext'


export default function Furnizor(props) {

    const [state, setState] = useAppContext()

    const changeHandler = name => ev => {
        setState({
            ...state,
            supplier: {
                ...state.supplier,
                [name]: ev.target.value
            }
        })
    }

    const changeRepHandler = name => ev => {
        setState({
            ...state,
            supplier: {
                ...state.supplier,
                representative: {
                    ...state.supplier.representative,
                    [name]: ev.target.value
                }
            }
        })
    }

    const supplier = ( state && state.supplier) || {}
    const representative = (supplier && supplier.representative) || {}

    return (
        <RichCard title="FURNIZOR">
            {supplier && (
                <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <FancyInput value={supplier.name || ""} onChange={changeHandler("name")} label="DENUMIRE" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={supplier.cif || ""} onChange={changeHandler("cif")} label="CUI/CF" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={supplier.legalForm || ""} onChange={changeHandler("legalForm")} label="FORMA" select>
                            {LEGALFORMS.map((e, i) => <MenuItem key={i} value={e.name}><strong>{e.name}</strong> &nbsp;-&nbsp; <small>{e.label}</small></MenuItem>)}
                        </FancyInput>
                    </Grid>
                    <Grid item xs={9} sm={10}>
                        <FancyInput value={supplier.address || ""} onChange={changeHandler("address")} label="ADRESA" />
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <FancyInput value={supplier.zip || ""} onChange={changeHandler("zip")} label="C.POȘTAL" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FancyInput value={supplier.city || ""} onChange={changeHandler("city")} label="LOCALITATE" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FancyInput value={supplier.county || ""} onChange={changeHandler("county")} label="JUDET" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FancyInput value={supplier.country || ""} onChange={changeHandler("country")} label="TARA" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={supplier.email || ""} onChange={changeHandler("email")} label="EMAIL" />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FancyInput value={supplier.phone || ""} onChange={changeHandler("phone")} label="TELEFON" />
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
