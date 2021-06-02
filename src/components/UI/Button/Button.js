import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
//Button Component

const useStyles = makeStyles({
    Button:{
        width: '215px',
        height: '45px',
        margin: '50px auto',
        border: '1px solid black',
        lineHeight: '45px',
        fontSize: '16px',
        fontFamily: 'Caudex-Regular',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        cursor: 'pointer',
    }
})
const Button = (props)=>{
    const classes = useStyles();
    return(
    <div onClick= {props.clicked}
    className={classes.Button}>
        {props.children}
    </div>
)}

Button.propTypes={
    clicked: PropTypes.func,
    children:PropTypes.string,
}

export default Button;