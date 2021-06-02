import React, {  useEffect } from 'react'
import classes from './Services.module.css';
import Button from '../../../components/UI/Button/Button';
import Service from './Service';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getService} from '../../../actions/service';

//Service part of Home Page display some remarkable services

const Services = () =>{
    const list = useSelector(state=>state.service.list);
    const loading = useSelector(state=>state.service.loading);
    const error = useSelector(state=>state.service.error);
    if(error){
        console.log(error);
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(list).length === 0){
            dispatch(getService())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let display = <Spinner/>;
    if(!loading){
        let serviceDisplay = [];
        for(let key in list){
            serviceDisplay.push(
                <Service
                    key = {key}
                    service ={list[key].name}
                    image = {list[key].image}
                    eng = {list[key].english}
                    time = {list[key].time}
                    price = {list[key].price}
                />
            )
        }
    display = (
        <div className={classes.Service}>
            {serviceDisplay.slice(0,3)}
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