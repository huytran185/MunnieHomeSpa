import React from 'react';
import FooterColumn from './FooterColumn';
import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

//Footer Component

const footer =()=>(
    <div className ={classes.Footer}>
        <footer>
            <FooterColumn title="ADDRESS">
                <ul>
                    <li>118 Trần Bạch Đằng - P. Mỹ An Q. Ngũ Hành Sơn, Đà Nẵng</li>
                </ul>
            </FooterColumn>
            <FooterColumn title="CONTACT">
                <ul>
                    <li>Tel: 09xx xxx xxx</li>
                    <li><Link to="/route" target="_blank" onClick={(event)=>{event.preventDefault(); window.open("https://www.facebook.com/munniehomespa")}}>
                        Page: @munniehomespa
                    </Link></li>
                    <li>Email: munniehomespa@gmail.com</li>
                </ul>
            </FooterColumn>
            <FooterColumn title="TRADING HOURS">
                <ul>
                    <li>Mon - Thurs: 8.30 am - 8. 00 pm</li>
                    <li>Fri: 8.30 am - 6.00 pm</li>
                    <li>Sat - Sun: 8.30 am - 8.00pm</li>
                </ul>
            </FooterColumn>
        </footer>
    </div>
);

export default footer;