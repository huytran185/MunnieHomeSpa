import React from 'react'
import classes from './Social.module.css';
import {Link} from 'react-router-dom';
import Facebook from '../../../../src/assets/images/facebook.png'
import Instagram from '../../../../src/assets/images/instagram.png'
const social = ()=>(
    <div className={classes.Social}>
        <Link to="/facebook">
            <img src = {Facebook} alt = "Facebook"/>
        </Link>
        <Link to="/instagram">
            <img src = {Instagram} alt = "Instagram"/>
        </Link>
    </div>
)
export default social;