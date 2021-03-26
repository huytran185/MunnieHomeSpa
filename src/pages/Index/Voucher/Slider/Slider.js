import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Slider.module.css'
import Spinner from '../../../../components/UI/Spinner/Spinner'
import {getVoucher} from '../../../getData';
const Sliders = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows:false
    }
    const [vouchers, setVouchers]= useState(null);
    useEffect(()=>{
        getVoucher(setVouchers);
        
    },[])
    let display = <Spinner/>;
    if(vouchers){
        display = (<Slider {...settings}>
            {Object.values(vouchers).map((voucher, index)=>{
                return <div className={classes.Slide} key={index}>
                    <a href ={voucher.link} target="_blank" rel="noopener noreferrer">
                        <img src = {voucher.image} alt="Voucher"/>
                    </a>
                </div>
            })}
        </Slider>)
    }
    return(
        <div>
            {display}
        </div>
    )
}
export default Sliders;