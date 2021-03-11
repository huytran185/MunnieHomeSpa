import React from 'react'
import classes from './Book.module.css';
import Button from '../../../../components/UI/Button/Button';
import {Link} from 'react-router-dom'
const book = (props)=>(
    <div className={classes.Book}>
        <div>{props.children}</div>
        <Link to="/service"><Button>Book Appointment</Button></Link>
    </div>
)
export default book;
