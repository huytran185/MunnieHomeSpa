import React from 'react'
import classes from './Type.module.css';

const Type = (props)=>{
    return(
        <div 
        id={props.id}
        className={classes.Type} 
        onClick={props.clicked}
        style={{borderBottom: props.under? '2px groove black': '2px solid #e5d2c4'}}>
            {props.name}
        </div>
    )
}
export default Type;