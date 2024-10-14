import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close"

const GraphDialog = ({title, children, open, setOpen}) => {
    return (
        <Dialog maxWidth='md' fullWidth open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{display: "flex"}}>
                <Typography>{title}</Typography>
                <IconButton sx={{margin: "auto 0px auto auto"}} size='small' onClick={() => setOpen(false)}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default GraphDialog