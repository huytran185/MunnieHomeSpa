import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {logOutAccount} from '../../actions/auth'

//The heading component for admin function

const useStyles = makeStyles({
        root: {
            width:'15%',
            float: 'left',
            height:'100%',
            backgroundColor:'#dbb89a',
            position:'fixed',
        },
        Text:{
            '&:hover':{
                transform: 'scale(1.1)',
            } 
        },
        });
const Header =() => {
    const userEmail = useSelector(state=>state.auth.userEmail);
    let email = null;
    if(userEmail){
        email = userEmail.split('@')[0];
    }
    const dispatch = useDispatch();
    const logOutHandler = ()=>{
        dispatch(logOutAccount())
    }
    const classes = useStyles();
    return(
        <header className={classes.root}>
            <List component="nav">
                <ListItem button>
                   <ListItemText >
                        Welcome, {email}
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
    )
}
export default Header;