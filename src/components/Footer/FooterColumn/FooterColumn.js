import React from 'react'
import classes from './FooterColumn.module.css'
const footercolumn = (props)=>(
    <div className={classes.FooterColumn}>
        <div className={classes.Title}>{props.title}</div>
        {props.children}
    </div>
);
export default footercolumn;