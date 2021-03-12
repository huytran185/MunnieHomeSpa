import React, { useState, useEffect } from 'react'
import classes from './Services.module.css';
import Button from '../../../components/UI/Button/Button';
import Service from './Service/Service';
import Spinner from '../../../components/UI/Spinner/Spinner';
import firebase from '../../../components/Firebase/firebaseConfig'
import {Link} from 'react-router-dom';
const Services = () =>{
    const [services, setService] = useState(null);
    useEffect(()=>{
        firebase.database().ref("service").on("value", snapshot=>{
            let serviceList = [];
            snapshot.forEach(snap=>{
                serviceList.push(snap.val());
            });
            setService(serviceList);
        })
    }, [])
    let display = <Spinner/>;
    if(services){
        display = (<div className={classes.Service}>
            {services.slice(0,3).map((service, index)=>{
                return <Service 
                    key = {index}
                    service ={service.name}
                    image = {service.image}
                    eng = {service.english}
                    time = {service.time}
                    price = {service.price}
            />
            })}
            </div>
        )
    }
        return(
            <div className={classes.Services}>
                <div className={classes.Title}>
                    our services
                </div>
                    {display}
                
                <div className={classes.Qoute}>Munnie Homéspa is home of the beauty skincare
                        so let's enjoy your time
                </div>
                <div className="clearfix"></div>
                <Link to="/service"><Button>Book Now</Button></Link>
            </div>
        )
    }
export default Services;