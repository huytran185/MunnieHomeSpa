import React from 'react';
import Aux from '../../../../hoc/Auxulliary';
import classes from './SideDrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop'
import NavigationItem from '../NavigationItem';

//Side Drawer Component for mobile devices

const sideDrawer = (props)=>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <ul>
                    <NavigationItem link='/'>Home</NavigationItem>
                    <NavigationItem link='/service'>Service</NavigationItem>
                    <NavigationItem link='/contact'>Contact</NavigationItem>
                </ul>
            </div>
        </Aux>
    )
}

export default sideDrawer;