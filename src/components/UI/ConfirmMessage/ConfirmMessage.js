import React from 'react';
import {Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    useMediaQuery}
    from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const ConfirmMessage = (props)=>{
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const closeHandler = ()=>{
        props.close();
    }
    const yesHandler = ()=>{
        props.yesHandler();
        props.close();
    }
    return(
        <Dialog 
        open={props.open}
        fullScreen={fullScreen} 
        onClose={closeHandler} 
        aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {"Remove Information Confirmation Message"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to delete this item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeHandler} color="primary">
                    No
                </Button>
                <Button autoFocus onClick={yesHandler} color="primary">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ConfirmMessage;