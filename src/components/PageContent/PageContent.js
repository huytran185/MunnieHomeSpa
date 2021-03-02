import React from 'react'
import classes from './PageContent.module.css';
const page = (props)=>{return(
    <div className = {classes.Page}>
        <div className = {classes.Header}>
            <div className={classes.Title}>{props.title}</div>
        </div>
        <div className={classes.Content}>
            {props.children}
        </div>
    </div>
)}
export default page;