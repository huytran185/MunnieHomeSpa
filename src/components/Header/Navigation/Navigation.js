import React from 'react'
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem'
import {Link} from 'react-router-dom';
const navigation = (props)=>(
    <nav className={classes.Navigation}>
        <i className="fa fa-bars" id="nav-button" onClick={props.toggleClicked}></i>
        <ul>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/service'>Service</NavigationItem>
            <NavigationItem link='/contact'>Contact</NavigationItem>
        </ul>
        <Link to="/service"className={classes.Book}>Book Now</Link>
        <div className={classes.Call}>CALL US: 09xx xxx xxx</div>
    </nav>
);

export default navigation;
