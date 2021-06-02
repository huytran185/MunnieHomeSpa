import React from 'react'
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//Navigation Bar Component

const navigation = (props)=>(
    <nav className={classes.Navigation}>
        <i className="fa fa-bars" id="nav-button" onClick={props.toggleClicked}></i>
        <ul>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/service'>Service</NavigationItem>
            <NavigationItem link='/contact'>Contact</NavigationItem>
        </ul>
        <Link to="/service"className={classes.Book}>Book Now</Link>
        <div className={classes.Call}>CALL US: 0903 180 594</div>
    </nav>
);

navigation.propTypes={
    toggleClicked: PropTypes.func,
}
export default navigation;
