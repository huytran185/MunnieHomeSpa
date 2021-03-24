import React from 'react';
import classes from './Item.module.css';

const item = (props)=>{
     return(
         <div className={classes.Item} onClick={props.clicked}>
             {props.name}
         </div>
     )
}
export default item;