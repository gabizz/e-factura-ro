import { AppBar, Button, Card, Container, Divider, Grid, Hidden, IconButton, Input, Toolbar } from '@mui/material'
import React, { Fragment, useEffect, useState, useContext, useRef } from 'react'
import InvoiceForm from '../components/InvoiceForm.js'
import { DEFAULTINVOICE } from '../models/defaultInvoice.js'
import { BLANKINVOICE } from '../models/blankinvoice'
import { DEFALUTITEM } from '../models/defaultItem.js'
import { useAppContext } from '../lib/AppContext.js'
import { xml2json, json2xml } from "../lib/converters"

export default function Main(props) {


    const inputRef = useRef()
    const [state, dispatch] = useAppContext()

    const fileUploadHandler = ev => { 
        let file = ev.target.files[0]
        const reader = new FileReader()
        reader.onload = (ev) => {
            let data = ev.target.result

            dispatch({...state, ...xml2json(data)})
            inputRef.current.value = ""
        }
        reader.readAsBinaryString(file)
        reader.abort()
    }

    useEffect(() => { dispatch({ ...DEFAULTINVOICE, items: [DEFALUTITEM] }) }, [])


    return (
        <Fragment>
            <AppBar style={{ marginBottom: "0" }}>
                <Toolbar variant="dense" >

                    <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>

                        <Hidden smDown>
                            <Grid item sm={6}>
                                <strong>E-FACTURA - generator de XML &nbsp; &nbsp; &nbsp; &nbsp;</strong>
                                {/* <small>salt rapid la: &nbsp;&nbsp;</small>
                    <a href="#articles" style={{ textDecoration: "underline", color: "white", fontSize: "0.9rem" }}>articole</a>
                    &nbsp;&nbsp;
                    <a href="#settings" style={{ textDecoration: "underline", color: "white", fontSize: "0.9rem" }}>setari</a> */}
                            </Grid>
                        </Hidden>


                        <Grid item xs={12} sm={6}>
                            <Grid container alignItems="center" justifyContent="flex-end">
                                <label htmlFor="contained-button-file">
                                    <Input accept=".xml" 
                                        id="contained-button-file" multiple={false} ref = {inputRef}
                                        type="file" 
                                        style={{ display: "none" }} 
                                        onChange = {fileUploadHandler}/>
                                    <Button variant="contained" component="span">
                                        IMPORT XML
                                    </Button>
                                </label>

                                &nbsp;
                                <Button size="small" variant="info" color="error"> EXPORT XML</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Divider id="settings" />
            <Container maxWidth="lg" style={{ marginTop: "4em", }}  >

                <InvoiceForm />
                <small>
                {/* {state &&  <pre>{JSON.stringify(state, null,2)}</pre>} */}
                </small>
            </Container>
        </Fragment>

    )
}


