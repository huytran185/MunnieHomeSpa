import React from 'react'
import classes from './FooterColumn.module.css'

//Footer Column component

const footerColumn = (props)=>(
    <div className={classes.FooterColumn}>
        <div className={classes.Title}>{props.title}</div>
        {props.children}
    </div>
);
export default footerColumn;