import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Slider.module.css'
import firebase from '../../../../components/Firebase/firebaseConfig'
import Spinner from '../../../../components/UI/Spinner/Spinner'
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
        firebase.database().ref("voucher").on("value", snapshot=>{
            let voucherList = [];
            snapshot.forEach(snap=>{
                voucherList.push(snap.val());
            });
            setVouchers(voucherList);
        })
    },[])
    let display = <Spinner/>;
    if(vouchers){
        display = (<Slider {...settings}>
            {vouchers.map((voucher, index)=>{
                return <div className={classes.Slide}>
                    <a href ={voucher.link}>
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