import { Dialog, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState, useRef, createRef } from 'react'
import RichCard from '../RichCard'
import {MdAdd, MdDeleteForever, MdEdit, MdRemove} from "react-icons/md"
import { useAppContext } from '../../lib/AppContext'
import { DEFALUTITEM } from '../../models/defaultItem'
import ItemModal from './ItemModal'

export default function Articole() {
    const nodeRef = useRef()
    const [state, setState] = useAppContext()
    const [modal, setModal] = useState(null)

    const addItem = () => {
        setState({...state, items: [...state.items, DEFALUTITEM]})
       console.log("n:", nodeRef.current)
        nodeRef.current.scrollIntoView()
    }

    const rmItem = i => () => {
        let ns = {...state}
        ns.items.splice(i,1)
        setState(ns)
    }

    const addModalOpenHandler = () => setModal({
        data: {
            name: "", description: "", unit: state.currency, vat: state.vat, price: 0, amount:1, unit: 1
        },
        index: null
        
    })

    const addModalCloseHandler = ev => {
        if ( ev ) {
            let { index, data } = ev
            let ns = {...state}
            console.log("index: ", index, "data: ", data)
            if ( index || index === 0  ) { ns.items[index] = data } else { ns.items=[...ns.items, data] }
            setState(ns)
        }
        setModal(null)
    }

    const {items} = state || {items: []}
    return (
        <RichCard 
            
            title = "ARTICOLE" 
            action = {<IconButton onClick = {addModalOpenHandler} color="primary" size ="normal"><MdAdd/>  </IconButton>}>
            <Table ref = {nodeRef}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nr.crt</TableCell>
                        <TableCell align="center">Denumire produs/serviciu</TableCell>
                        <TableCell align="center">Descriere</TableCell>
                        <TableCell align="right">Unitate măsură</TableCell>
                        <TableCell align="right">Preț unitar</TableCell>
                        <TableCell align="right">Procent TVA</TableCell>
                        <TableCell align="right">Valoare TVA</TableCell>
                        <TableCell align="right">Valoare totală</TableCell>
                        <TableCell align="center">Acțiuni</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
              {items && items.map( (e,i) => (
                <TableRow key={i}>
                    <TableCell align="center">{i+1}</TableCell>    
                    <TableCell align="center">{e.name}</TableCell>    
                    <TableCell align="center">{e.description}</TableCell>    
                    <TableCell align="right">{e.unit}</TableCell>    
                    <TableCell align="right">{e.price}</TableCell>    
                    <TableCell align="right">{e.vat}</TableCell>    
                    <TableCell align="right">{e.price * e.vat/100}</TableCell>    
                    <TableCell align="right">{e.price + e.price * e.vat/100}</TableCell>    
                    <TableCell align="center">
                        <IconButton variant="small" onClick = {rmItem(i)}><MdDeleteForever/></IconButton>
                        <IconButton variant="small" onClick ={()=>setModal({data:e, index:i})}><MdEdit/></IconButton>
                        
                    </TableCell>
                </TableRow>
              ))}
              </TableBody>
              </Table>
             
              
              <div ref = {nodeRef} />

              <ItemModal data = {modal} onClose = {addModalCloseHandler} />
        </RichCard>
    )
}


