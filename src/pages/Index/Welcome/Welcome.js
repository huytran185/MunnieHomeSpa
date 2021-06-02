import React from 'react'
import classes from './Welcome.module.css';
import Hello from '../../../assets/images/hello.png';
import Book from './Book';

//Welcome component of Home Page

const welcome = ()=>(
        <div className={classes.Welcome}>
            <img src={Hello} alt=""/>
            <div className={classes.CompanyName}>Munnie Homéspa</div>
            <blockquote>
                Let your skin can be RELAX. REFERSH. RE-IMAGINE
            </blockquote>
            <Book>Book a time at our tranquil facility for facials, and skincare treatments.</Book>
        </div>
    )
export default welcome;