import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core/';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

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
    const classes = useStyles();
    return(
        <header className={classes.root}>
            <List component="nav">
                <Link to ="/admin/dashboard">
                    <ListItem button>
                        <ListItemText className={classes.Text}>
                            Welcome, Admin
                        </ListItemText>
                    </ListItem>
                </Link>
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
            </List>
        </header>
    )
}
export default Header;