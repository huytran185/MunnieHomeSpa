import React from 'react'
import classes from './FooterColumn.module.css'
import PropTypes from 'prop-types';
//Footer Column component

const footerColumn = (props)=>(
    <div className={classes.FooterColumn}>
        <div className={classes.Title}>{props.title}</div>
        {props.children}
    </div>
);

footerColumn.propTypes={
    title: PropTypes.string,
    children: PropTypes.object,
}

export default footerColumn;