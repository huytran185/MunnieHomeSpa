import React, {useState} from 'react'
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
        margin: '0 10px',
    },
    Active:{
        color:'white',
        backgroundColor: 'green',
        borderColor: 'green',
        '&:hover':{
            backgroundColor:'green',
            borderColor: 'green',
        }
    }
});
const ButtonBox = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <ButtonItem name="list" 
            setStatus = {props.setStatus}
            status={props.status}>
                Thông tin {props.name}
            </ButtonItem>
            <ButtonItem name="add" 
            setStatus = {props.setStatus}
            status={props.status}>
                Thêm {props.name}
            </ButtonItem>
        </Box>
    )
}


const ButtonItem = (props)=>{
    const classes = useStyles();
    let icon = <InfoIcon/>
    let style = classes.Button
    if(props.name === "add"){
        icon = <AddCircleIcon/>
    }
    if(props.name === props.status){
        style= classes.Active
        
    }
    return(
        <Button variant="outlined" 
        className={style}
        startIcon = {icon}
        onClick={()=>props.setStatus(props.name)}>
            {props.children}
        </Button>
    )
}
export default ButtonBox;