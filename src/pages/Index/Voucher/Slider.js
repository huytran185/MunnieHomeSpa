import React, { useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Slider.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {getVoucher} from '../../../actions/voucher';

//Slider of a list of voucher

const Sliders = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
    }
    const list = useSelector(state=>state.voucher.list);
    const loading = useSelector(state=>state.voucher.loading);
    const error = useSelector(state=>state.voucher.error);
    const dispatch = useDispatch();
    if(error){
        console.log(error);
    }
    useEffect(()=>{
        if(Object.keys(list).length === 0){
            dispatch(getVoucher())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    let voucherDisplay = [];
    for(let key in list){
        voucherDisplay.push(
            <div className={classes.Slide} key={key}>
                <a className={classes.Image}href ={list[key].link} target="_blank" rel="noopener noreferrer">
                    <img src = {list[key].image} alt="Voucher"/>
                </a>
            </div>
        )
    }
    let display = <Spinner/>;
    if(!loading){
        display = (<Slider {...settings} className={classes.Slider}>
            {voucherDisplay}
        </Slider>)
    }
    return(
        <div>
            {display}
        </div>
    )
}
export default Sliders;