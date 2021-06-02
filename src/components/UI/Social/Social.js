import React from 'react'
import classes from './Social.module.css';
import {Link} from 'react-router-dom';
import Facebook from '../../../../src/assets/images/facebook.png'
import Instagram from '../../../../src/assets/images/instagram.png'

//Social media display on the left hand side of the website

const social = ()=>(
    <div className={classes.Social}>
        <Link to="/route" target="_blank" onClick={(event)=>{event.preventDefault(); window.open("https://www.facebook.com/munniehomespa")}}>
            <img src = {Facebook} alt = "Facebook"/>
        </Link>
        <Link to="/instagram">
            <img src = {Instagram} alt = "Instagram"/>
        </Link>
    </div>
)
export default social;