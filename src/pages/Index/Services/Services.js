import React, { useState } from 'react'
import classes from './Services.module.css';
import Button from '../../../components/UI/Button/Button';
import Service from './Service/Service';
import Image1 from '../../../assets/images/mun.gif';
import Image2 from '../../../assets/images/massage.gif';
import Image3 from '../../../assets/images/da.gif';
const Services = () =>{
    const [serviceState] = useState({
        services:[
            {
                id: 'Service1',
                name: 'Điều Trị Mụn',
                img: Image1,
                des: '(Signature Facial Treatment)',
                time: '90 mins',
                price: '$200'
            },
            {
                id: 'Service2',
                name: 'Massage Thư Giãn',
                img: Image2,
                des: '(Signature Facial Treatment)',
                time: '60 mins',
                price: '$160'
            },
            {
                id: 'Service3',
                name: 'Thải Độc Cho Da',
                img: Image3,
                des: '(Detox Facial Treatment)',
                time: '60 mins',
                price: '$160'
            }]
        });
    
        let services = null;
        services = (<div>
            {serviceState.services.map((service, index)=>{
            return <Service 
            key = {service.id}
            service ={service.name}
            image = {service.img}
            des = {service.des}
            time = {service.time}
            price = {service.price}
            />
            })}
            </div>
        )
        return(
            <div className={classes.Services}>
                <div className={classes.Title}>
                    our services
                </div>
                <div className={classes.Service}>
                    {services}
                </div>
                
                <div className={classes.Qoute}>Munnie Homéspa is home of the beauty skincare
                        so let's enjoy your time
                </div>
                <div className="clearfix"></div>
                <Button>Book Now</Button>
            </div>
        )
    }
export default Services;