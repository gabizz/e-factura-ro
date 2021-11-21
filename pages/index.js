import { AppBar, Button, Card, Container, Divider, Grid, Hidden, Toolbar } from '@mui/material'
import React, { Fragment, useEffect, useState, useContext } from 'react'
import InvoiceForm from '../components/InvoiceForm.js'
import { DEFAULTINVOICE } from '../models/defaultInvoice.js'
import { BLANKINVOICE } from '../models/blankinvoice'
import { DEFALUTITEM } from '../models/defaultItem.js'
import { useAppContext } from '../lib/AppContext.js'

export default function Main(props) {

    // const [data, setData] = useState({ ...BLANKINVOICE, items: [DEFALUTITEM] })

    const [state, dispatch] = useAppContext()

    useEffect(() => { dispatch({ ...DEFAULTINVOICE, items: [DEFALUTITEM] }) }, [])


    return (
        <Fragment>
            {console.log("state:", state)}
            <AppBar style={{ marginBottom: "0" }}>
                <Toolbar variant = "dense" >
                    
                    <Grid container justifyContent = "flex-start" alignItems="center" spacing={1}>
                        
                        <Hidden smDown>
                            <Grid item sm = {6}>
                                <strong>E-FACTURA - generator de XML &nbsp; &nbsp; &nbsp; &nbsp;</strong>
                    {/* <small>salt rapid la: &nbsp;&nbsp;</small>
                    <a href="#articles" style={{ textDecoration: "underline", color: "white", fontSize: "0.9rem" }}>articole</a>
                    &nbsp;&nbsp;
                    <a href="#settings" style={{ textDecoration: "underline", color: "white", fontSize: "0.9rem" }}>setari</a> */}
                    </Grid>
                    </Hidden>
                    

                    <Grid item xs = {12} sm={6}>
                   <Grid container alignItems = "center" justifyContent="flex-end">
                    <Button size="small" variant = "info" color="warning"> IMPORT XML</Button>
                    &nbsp;
                    <Button size="small" variant = "info" color="error"> EXPORT XML</Button>
                    </Grid>
                    </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Divider id="settings" />
            <Container maxWidth="lg" style={{ marginTop: "4em", }}  >

                <InvoiceForm />
            </Container>
        </Fragment>

    )
}


