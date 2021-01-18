import React from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation/Navigation';

const header =()=>(
    <header className={classes.Header}>
        <Navigation/>
        <div className="call">CALL US: 09xx xxx xxx</div>
        <a href="/" className="nav-book">Book Now</a>
    </header>
);

export default header;