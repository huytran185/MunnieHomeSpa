import React from 'react';
import classes from './Input.module.css'
const input = (props)=>{
    let inputElement = null;

    switch(props.elementType){
        case('text'):
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
            <select 
                className = {classes.InputElement}
                value={props.value}
                onChange={props.changed}>
                    {props.elementConfig.options.map(option=>(
                        <option key={option.value} 
                        value={option.value}>
                            {option.display}
                        </option>
                    ))}
            </select>);
            break;
        case('file'):
            inputElement = <input 
                className={classes.InputElement}
                {...props.elementConfig}
                onChange={props.changed}/>;
            break;
        case('button'):
            inputElement = <button className = {classes.InputElement}
                onClick={props.clicked} 
                style={{cursor:'pointer'}}>
                {props.children}
                </button>;
            break;
        default:
            inputElement = <input className={classes.InputElement}{...props}/>;
    }
    
    return(
        <div className={classes.Input}>
            {/* <label>{props.label}</label> */}
            {inputElement}
        </div>
    )
}
export default input;