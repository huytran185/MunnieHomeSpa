import React, {useState} from 'react';
import classes from './ServiceItem.module.css';
import Button from '../../../components/UI/Button/Button';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const Item =(props)=>{
    let attachedClasses = [classes.Info, classes.Close];

    const [showInfo, setShowInfo]= useState(false);

    if(showInfo){
        attachedClasses = [classes.Info, classes.Open];
    }
    return(
        <div className= {classes.ServiceItem} >
            <Backdrop show = {showInfo} clicked = {()=>setShowInfo(false)}/>
            <div className = {attachedClasses.join(' ')}>
                <div className={classes.Box}>
                    <div className={classes.Title} onClick = {()=>setShowInfo(!showInfo)}>{props.service}</div>
                    <div className={classes.Des}>{props.des}</div>
                    <div className={classes.Price}>{props.time} minutes | ${props.price}</div>
                    <Link to="/route" target="_blank" onClick={(event)=>{event.preventDefault(); window.open("https://www.facebook.com/munniehomespa")}}><Button>Book</Button></Link>
                </div>
                <div className={classes.Box}>
                    <img src = {props.image} alt = {props.service}/>
                </div>
            </div>
            <img src = {props.image} alt = {props.service} onClick = {()=>setShowInfo(!showInfo)}/>
            <div className={classes.Title} onClick = {()=>setShowInfo(!showInfo)}>{props.service}</div>
            <div className={classes.Des}>{props.english}</div>
            <div className={classes.Price}>{props.time} minutes | ${props.price}</div>
            <Button clicked = {()=>setShowInfo(!showInfo)}>See More</Button>
        </div>
    )
}

Item.propTypes={
    service: PropTypes.string,
    image: PropTypes.string,
    eng: PropTypes.string,
    time: PropTypes.string,
    price:PropTypes.string,
}
export default Item;