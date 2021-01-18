import React from 'react'
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem'
const navigation = ()=>(
    <nav className={classes.Navigation}>
        <i className="fa fa-bars navbar" id="nav-button"></i>
        <ul>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/service'>Service</NavigationItem>
            <NavigationItem link='/contact'>Contact</NavigationItem>
        </ul>
    </nav>
);

export default navigation;
