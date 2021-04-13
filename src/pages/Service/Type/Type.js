import React from 'react'
import classes from './Type.module.css';
import PropTypes from 'prop-types';
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

Type.propTypes={
    id: PropTypes.string,
    name: PropTypes.string,
    under: PropTypes.bool,
    clicked: PropTypes.func,
}
export default Type;