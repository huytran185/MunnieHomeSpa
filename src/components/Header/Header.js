import React, { Component } from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation/Navigation';
import Aux from '../../hoc/Auxulliary';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
class Header extends Component{
    state ={
        showSideDrawer:false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{ 
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render(){
        return(
            <Aux>
                <header className={classes.Header}>
                    <Navigation toggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer open = {this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                </header>
                
            </Aux>
        )
    }
}
export default Header;