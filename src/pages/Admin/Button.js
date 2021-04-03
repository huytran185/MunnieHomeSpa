import React from 'react'
import {Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const useStyles = makeStyles({
    root:{
        margin: '20px 0',
    },
    Button:{
        color: 'green',
        borderColor:'green',
        '&:active':{
            color:'black',
        }
    }
});
const ButtonBox = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Button variant="outlined" 
            className={classes.Button} 
            startIcon={<InfoIcon/>} 
            onClick={()=>props.setStatus("list")}>
                Thông tin voucher
            </Button>
            <Button variant="outlined"
            className={classes.Button} 
            startIcon = {<AddCircleIcon/>} 
            onClick={()=>props.setStatus("add")}>
                Thêm voucher
            </Button>
        </Box>
    )
}

export default ButtonBox;
