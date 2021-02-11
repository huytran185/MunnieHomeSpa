import React from 'react'
import classes from './Book.module.css';
import Button from '../../../../components/UI/Button/Button';
const book = (props)=>(
    <div className={classes.Book}>
        <div>{props.children}</div>
        <Button>Book Appointment</Button>
    </div>
)
export default book;
