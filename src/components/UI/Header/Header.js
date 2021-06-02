import React, { useState } from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation';
import Aux from '../../../hoc/Auxulliary';
import SideDrawer from './SideDrawer/SideDrawer';

//Header Component

const Header = () =>{
    const [showDrawer, setShowDrawer]= useState(false);

    //Close Drawer Function for mobile devices

    const sideDrawerClosedHandler = ()=>{
        setShowDrawer(false);
    }

    //Side Drawer function for mobile devices
    
    const sideDrawerToggleHandler = ()=>{
        setShowDrawer((prevState)=>{
            return setShowDrawer(!prevState.showDrawer);
        });
    }
    return(
            <Aux>
                <header className={classes.Header}>
                    <Navigation toggleClicked={sideDrawerToggleHandler}/>
                    <SideDrawer open = {showDrawer}
                    closed={sideDrawerClosedHandler}/>
                </header>
            </Aux>
        )
}
export default Header;