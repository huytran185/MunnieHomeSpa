import React from 'react';
import classes from './Contact.module.css';
import {Helmet} from 'react-helmet';
import Layout from '../../components/UI/Layout/Layout';
import Aux from '../../hoc/Auxulliary';
import Info from './Info';
import {Link} from 'react-router-dom';

//Contact Page

const contact = ()=>(
    <Aux>
        <Helmet>
            <title>Munnie Homéspa | Contact Page</title>
        </Helmet>
        <Layout >
            <div className={classes.Contact}>
                <div className = {classes.Content}>
                    <div className = {classes.Title}>
                        Contact Us
                    </div>
                    <div className= {classes.Map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6699843481474!2d106.69073211473362!3d10.75989729233275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1170c30345%3A0x20c747d78d9f2b42!2zNDIyIFbDtSBWxINuIEtp4buHdCwgUGjGsOG7nW5nIEPDtCBHaWFuZywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sau!4v1614690520920!5m2!1svi!2sau" 
                        title="Spa Google Map"></iframe>
                    </div>
                    <div className={classes.Info}>
                        <Info title="Our Contact">
                            <p><strong>Address</strong>: 118 Trần Bạch Đằng - P. Mỹ An - Q. Ngũ Hành Sơn, Đà Nẵng</p>
                            <p><strong>Mobile</strong>: 09xx xxx xxx</p>
                            <Link to="/route" target="_blank" onClick={(event)=>{event.preventDefault(); window.open("https://www.facebook.com/munniehomespa")}}><p><strong>Facebook page</strong>: @munniehomespa</p></Link>
                            <p><strong>Email</strong>: munniehomespa@gmail.com</p>
                        </Info>
                        <Info title="Trading Hours">
                            <p>Mon - Thurs: 8.30 am - 8.00 pm</p>
                            <p>Fri: 8.30 am - 6.30 pm</p>
                            <p>Sat - Sun: 8.30am - 8.00 pm</p>
                        </Info>
                    </div>
                </div>
            </div>
        </Layout>
    </Aux>
)

export default contact;