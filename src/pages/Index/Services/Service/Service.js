import React from 'react';
import classes from './Service.module.css';
import {Link} from 'react-router-dom';
const service = (props)=>(
    <div className = {classes.Service}>
        <Link to={"/service"}><img src = {props.image} alt = {props.service}/></Link>
        <Link to={"/service"}><div className={classes.Title}>{props.service}</div></Link>
        <div className={classes.Description}>{props.des}</div>
        <div className={classes.Price}>{props.time} | {props.price}</div>
    </div>
)

export default service;
