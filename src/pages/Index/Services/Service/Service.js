import React from 'react';
import classes from './Service.module.css';
// import Image1 from '../../../../assets/images/mun.gif'

const service = (props)=>(
    <div className = {classes.Service}>
        <img src = {props.image} alt = {props.service}/>
        <div className={classes.Title}>{props.service}</div>
        <div className={classes.Description}>{props.des}</div>
        <div className={classes.Price}>{props.time} | {props.price}</div>
    </div>
)

export default service;
