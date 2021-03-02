import React from 'react'
import classes from './Info.module.css';

const info = (props)=>(
    <div className={classes.Info}>
        <div className={classes.Title}>{props.title}</div>
        <div className={classes.Content}>{props.children}</div>
    </div>
)
export default info;