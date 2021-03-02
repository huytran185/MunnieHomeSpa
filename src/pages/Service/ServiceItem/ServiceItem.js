import React from 'react';
import classes from './ServiceItem.module.css';
import Button from '../../../components/UI/Button/Button';
const item =(props)=>{
    return(
        <div className= {classes.ServiceItem}>
            <img src = {props.image} alt = {props.service}/>
        <div className={classes.Title}>{props.service}</div>
        <div className={classes.Des}>{props.des}</div>
        <Button>See More</Button>
        </div>
    )
}

export default item;