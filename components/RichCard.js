import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.grey[300],
        padding: "0.5rem 1rem 0.5rem 1rem",
        
        
    }
}))

export default function RichCard({title, children, action, rest}) {
    const classes = useStyles()
    return (
        <Card {...rest} >
            <CardHeader 
                title = {<Typography variant="p" style = {{fontWeight: 800}}>{title}</Typography>} className = {classes.header}
                action = {action}
            />
            <CardContent>{children || ""} </CardContent>

        </Card>
    )
}
