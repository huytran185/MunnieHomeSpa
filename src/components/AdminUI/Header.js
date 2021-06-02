import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {logOutAccount} from '../../actions/auth'
import Aux from '../../hoc/Auxulliary';
import Backdrop from '../UI/Backdrop/Backdrop';
//The heading component for admin function

const useStyles =makeStyles((theme)=>({
    toggle:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'inline-block',
            margin: '20px 0 0 20px',
            fontSize:30,
        }
    },
    header: {
        width:'20%',
        float: 'left',
        height:'100%',
        backgroundColor:'#dbb89a',
        position:'fixed',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    SideDrawer:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            width:'65%',
            float: 'left',
            height:'100%',
            backgroundColor:'#dbb89a',
            position:'fixed',
            display:'block',
            zIndex:200,
        }
    },
    Backdrop:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'block',
        }
    },
    Text:{
        '&:hover':{
            transform: 'scale(1.1)',
        } 
    },
}));

const Header =() => {
    const dispatch = useDispatch();
    const [showDrawer, setShowDrawer] = useState(false);
    const logOutHandler = ()=>{
        dispatch(logOutAccount())
    }
    const classes = useStyles();
    return(
        <Aux>
            {showDrawer && 
            <div className={classes.Backdrop}>
                <Backdrop
                show={showDrawer} 
                clicked={()=>setShowDrawer(false)}/>
            </div>}
            {!showDrawer && <div className={classes.toggle}>
                <i className="fa fa-bars" id="nav-button" onClick={()=>setShowDrawer(true)}></i>
            </div>}
            {showDrawer && <header className={classes.SideDrawer}>
                <List component="nav">
                    <ListItem button>
                    <ListItemText  >
                            Welcome, Admin
                        </ListItemText>
                    </ListItem> 
                </List>
                <Divider />
                <List component="nav">
                    <Link to="/admin/dashboard">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Dashboard
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/service">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Service
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/customer">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Customer
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/staff">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Staff
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/voucher">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Voucher
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/type">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Type
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button onClick={logOutHandler}>
                    <ListItemText className={classes.Text}>
                            Logout
                        </ListItemText>
                    </ListItem> 
                </List>
            </header>}
            <header className={classes.header}>
                <List component="nav">
                    <ListItem button>
                    <ListItemText  >
                            Welcome, Admin
                        </ListItemText>
                    </ListItem> 
                </List>
                <Divider />
                <List component="nav">
                    <Link to="/admin/dashboard">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Dashboard
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/service">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Service
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/customer">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Customer
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/staff">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Staff
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/voucher">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Voucher
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/admin/type">
                        <ListItem button>
                            <ListItemText className={classes.Text}>
                                Type
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button onClick={logOutHandler}>
                    <ListItemText className={classes.Text}>
                            Logout
                        </ListItemText>
                    </ListItem> 
                </List>
            </header>
        </Aux>
    )
}
export default Header;