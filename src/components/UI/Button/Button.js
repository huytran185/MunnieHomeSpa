import React from 'react';
import classes from './Button.module.css';

//Button Component

const button = (props)=>(
    <div onClick= {props.clicked}className={classes.Button}>
        {props.children}
    </div>
);
export default button;