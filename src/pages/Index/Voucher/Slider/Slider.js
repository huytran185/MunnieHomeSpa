import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Slider.module.css'
import Image1 from '../../../../assets/images/1.jpg';
import Image2 from '../../../../assets/images/2.jpg';
import Image3 from '../../../../assets/images/3.jpg';
import Image4 from '../../../../assets/images/4.jpg';
const slider = ()=>{
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
    return(
        <Slider {...settings}>
            <div className = {classes.Slide}>
                <img src = {Image1} alt="Image1"/>
            </div>
            <div className = {classes.Slide}>
                <img src = {Image2} alt="Image2"/>
            </div>
            <div className = {classes.Slide}>
                <img src = {Image3} alt="Image3"/>
            </div>
            <div className = {classes.Slide}>
                <img src = {Image4} alt="Image4"/>
            </div>
        </Slider>
    )
}
export default slider;