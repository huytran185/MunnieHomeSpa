import React from 'react';
import classes from './About.module.css';
import Content from './Content/Content';


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