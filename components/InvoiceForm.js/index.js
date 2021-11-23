import React, { Fragment, useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import Furnizor from './Furnizor'
import Beneficiar from './Beneficiar'
import Articole from './Articole'
import { vat } from '../../models'
import InvoiceId from './InvoiceId'
import { useAppContext } from '../../lib/AppContext'
import RichCard from '../RichCard'



export default function InvoiceForm(props) {

    const [state, setState] = useAppContext()
    const [expanded, setExpanded] = useState(false)

    const submitHandler = ev => {
        ev.preventDefault()
    }

    const Text = props => props 
        ? <Typography variant = "caption" style = {{fontWeight: 800, paddingRight: "10px"}}>
            {props.children && props.children.length > 0 ? props.children : "------"}
            </Typography>
        : null
    return (
        <Fragment>

            <form name="invoice" onSubmit={submitHandler}>

                <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}  >
                        <InvoiceId />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <RichCard
                            title="DATE PARTENERI COMERCIALI"
                            action={expanded 
                                ? <Button onClick = {()=>setExpanded(false)}>Restrange</Button>
                                : <Button onClick = {()=>setExpanded(true)}>Editează</Button>
                            }
                        >
                            {expanded 
                            ? (
                                <Grid container spacing={1}>
                                <Fragment>
                                <Grid item xs={12} sm={6}>
                                    <Furnizor />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Beneficiar />
                                </Grid>
                                </Fragment>
                            </Grid>
                            )
                            : (
                                <Fragment>
                                    <Grid container spacing={1}>
                                        <Grid item xs = {6}>
                                            <RichCard title = "FURNIZOR">
                                                <small>
                                                    {state.supplier && (
                                                        <Fragment>
                                                            Denumire: <Text>{state.supplier.name}</Text> 
                                                            <Text>{state.supplier.legalForm}</Text>
                                                            CUI/CIF: <Text>{state.supplier.cif}</Text><br/>
                                                            Adresa: <Text>{state.supplier.address}</Text>
                                                            Jud.: <Text>{state.supplier.county}</Text>
                                                            Țara: <Text>{state.supplier.county}</Text><br/>
                                                            Banca.: <Text>{state.supplier.bank}</Text>
                                                            Iban: <Text>{state.supplier.iban}</Text><br/>
                                                            Email: <Text>{state.supplier.email}</Text>
                                                            Telefon: <Text>{state.supplier.phone}</Text><br/>
                                                        </Fragment>
                                                    )}

                                                </small>
                                            </RichCard>
                                        </Grid>
                                        <Grid item xs = {6}>
                                            <RichCard title = "BENEFICIAR">
                                                <small>
                                                    {state.customer && (
                                                        <Fragment>
                                                            Denumire: <Text>{state.customer.name}</Text> 
                                                            <Text>{state.customer.legalForm}</Text>
                                                            CUI/CIF: <Text>{state.customer.cif}</Text><br/>
                                                            Adresa: <Text>{state.customer.address}</Text>
                                                            Jud.: <Text>{state.customer.county}</Text>
                                                            Țara: <Text>{state.customer.county}</Text><br/>
                                                            Banca.: <Text>{state.customer.bank}</Text>
                                                            Iban: <Text>{state.customer.iban}</Text><br/>
                                                            Email: <Text>{state.customer.email}</Text>
                                                            Telefon: <Text>{state.customer.phone}</Text><br/>
                                                        </Fragment>
                                                    )}

                                                </small>
                                            </RichCard>
                                        </Grid>
                                    </Grid>
                                </Fragment>
                            ) 
                            }

                        </RichCard>
                    </Grid>

                    <Grid item xs={12} sm={12} id="articles">
                        <Articole />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <pre>{JSON.stringify(data, null, 1)}</pre> */}
                    </Grid>


                </Grid>
              
            </form>
        </Fragment>


    )
}
