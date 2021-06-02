import React from 'react'
import classes from './Spinner.module.css'

//Spinner Component which is displayed when website is waiting for information from the server

const spinner =()=>(
    <div className={classes.Loader}>Loading...</div>
);

export default spinner