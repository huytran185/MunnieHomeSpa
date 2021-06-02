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
import PropTypes from 'prop-types';
//Confirmation Message when admin admit changing information

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

ConfirmMessage.propTypes={
    close:PropTypes.func,
    yesHandler: PropTypes.func,
    open:PropTypes.bool,
}

export default ConfirmMessage;