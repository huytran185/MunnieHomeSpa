import React from 'react'
import classes from './NavigationItem.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//Item of Navigation Bar Component

const navigationItem = (props)=>(
    <li className={classes.NavigationItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);

navigationItem.propTypes={
    link: PropTypes.string,
    children: PropTypes.string,
}
export default navigationItem;