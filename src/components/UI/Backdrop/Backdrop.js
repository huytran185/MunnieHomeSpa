import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

//Backdrop component

const useStyles = makeStyles({
    Backdrop:{
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '100',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

const Backdrop = (props)=>{
    const classes= useStyles();
    return(
        props.show ?<div className={classes.Backdrop} onClick={props.clicked}></div>:null
    )
}

Backdrop.propTypes={
    show: PropTypes.bool,
    clicked: PropTypes.func,
}
export default Backdrop;