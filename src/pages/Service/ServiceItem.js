import React, {useState} from 'react';
import classes from './ServiceItem.module.css';
import Button from '../../components/UI/Button/Button';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import PropTypes from 'prop-types';
//Service Item information of Service Page

const Item =(props)=>{
    const [showInfo, setShowInfo]= useState(false);
    
    const choseService = ()=>{
        setShowInfo(false); 
        props.setShowBook(true);
        props.setChosenService({
            customerId: '',
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            serviceId:props.id,
            serviceName:props.service,
            duration:props.time,
            price:props.price,
            start: '',
            staffId: '',
            staffName:'',
        })
    }
    return(
        <div className= {classes.ServiceItem} >
            <Backdrop show = {showInfo} clicked = {()=>setShowInfo(false)}/>
            {showInfo && <div className = {classes.Info}>
                <div className={classes.Box}>
                    <img src = {props.image} alt = {props.service}/>
                </div>
                <div className={classes.Box}>
                    <div className={classes.Title} onClick = {()=>setShowInfo(!showInfo)}>
                        {props.service}
                    </div>
                    <div className={classes.Des}>{props.des}</div>
                    <div className={classes.Price}>{props.time} minutes | ${props.price}</div>
                    <Button clicked={choseService}>Book</Button>
                </div>
                
            </div>}
            <img src = {props.image} alt = {props.service} onClick = {()=>setShowInfo(!showInfo)}/>
            <div className={classes.Title} onClick = {()=>setShowInfo(!showInfo)}>{props.service}</div>
            <div className={classes.Des}>{props.english}</div>
            <div className={classes.Price}>{props.time} minutes | ${props.price}</div>
            <Button clicked = {()=>setShowInfo(!showInfo)}>See More</Button>
        </div>
    )
}

Item.propTypes={
    id: PropTypes.string,
    service: PropTypes.string,
    image: PropTypes.string,
    eng: PropTypes.string,
    time: PropTypes.string,
    price:PropTypes.string,
    setShowBook: PropTypes.func,
    setChosenService: PropTypes.func,
}
export default Item;