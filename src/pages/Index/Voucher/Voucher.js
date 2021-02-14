import React from 'react';
import classes from './Voucher.module.css';
import Slider from './Slider/Slider';

const Voucher = ()=>{
    return(
        <div className= {classes.Voucher}>
            <div className = {classes.Title}>Special Voucher</div>
            <Slider/>
        </div>
    )
}

export default Voucher;