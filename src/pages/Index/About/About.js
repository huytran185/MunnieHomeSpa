import React from 'react';
import classes from './About.module.css';
import Content from './Content';

//About component of Home Page display company's information

const about =()=>(
    <div className={classes.About}>
        <div className={classes.Box}>

        </div>
        <div className={classes.Box}>
            <Content/>
        </div>
    </div>
);

export default about;