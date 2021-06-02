import React from 'react'
import classes from './Info.module.css';
import PropTypes from 'prop-types';
//Company Information Component

const info = (props)=>(
    <div className={classes.Info}>
        <div className={classes.Title}>{props.title}</div>
        <div className={classes.Content}>{props.children}</div>
    </div>
)

info.propTypes={
    title: PropTypes.string,
    children: PropTypes.array,
}
export default info;