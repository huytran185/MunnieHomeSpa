import React from 'react'
import {Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';

//Button Component

const useStyles = makeStyles((theme)=>({
    root:{
        margin: '20px 0',
    },
    Button:{
        color: 'green',
        borderColor:'green',
        margin: '0 10px',
        [theme.breakpoints.down('xs')]:{
            margin: '10px 0',
            width:'100%',
        }
    },
    Active:{
        color:'white',
        backgroundColor: 'green',
        borderColor: 'green',
        '&:hover':{
            backgroundColor:'green',
            borderColor: 'green',
        },
        [theme.breakpoints.down('xs')]:{
            margin: '10px 0',
            width:'100%',
        }
    }
}));
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
ButtonBox.propTypes={
    setStatus: PropTypes.func,
    status: PropTypes.string,
    name: PropTypes.string,
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
ButtonItem.propTypes={
    setStatus: PropTypes.func,
    status: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default ButtonBox;