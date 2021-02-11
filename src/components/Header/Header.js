import React, { useState } from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation/Navigation';
import Aux from '../../hoc/Auxulliary';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

const Header = props =>{
    const [showDrawer, setShowDrawer]= useState(false);
    const sideDrawerClosedHandler = ()=>{
        setShowDrawer(false);
    }
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