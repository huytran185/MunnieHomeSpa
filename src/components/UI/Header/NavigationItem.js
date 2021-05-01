import React from 'react'
import classes from './NavigationItem.module.css';
import {Link} from 'react-router-dom';

//Item of Navigation Bar Component

const navigationItem = (props)=>(
    <li className={classes.NavigationItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default navigationItem;