import React from 'react';
import classes from './Service.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//Content of Service component

const service = (props)=>(
    <div className = {classes.Service}>
        <Link to={"/service"}><img src = {props.image} alt = {props.service}/></Link>
        <Link to={"/service"}><div className={classes.Title}>{props.service}</div></Link>
        <div className={classes.Description}>{props.eng}</div>
        <div className={classes.Price}>{props.time} minutes | ${props.price}</div>
    </div>
)
service.propTypes={
    service: PropTypes.string,
    image: PropTypes.string,
    eng: PropTypes.string,
    time: PropTypes.string,
    price:PropTypes.string,
}
export default service;
