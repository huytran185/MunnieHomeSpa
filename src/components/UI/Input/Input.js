import React from 'react';
import classes from './Input.module.css'
const input = (props)=>{
    let inputElement = null;
    let errorMess = null;
    const inputClasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        errorMess = <p>{props.errorMess}</p>
    }
    switch(props.elementType){
        case('text'):
            inputElement = <div>
                <input
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
                <div className={classes.Error}>{errorMess}</div>
                </div>;
            break;
        case ('textarea'):
            inputElement = <div>
                <textarea 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
                <p className={classes.Error}>{errorMess}</p>
                </div>;
            break;
        case ('select'):
            inputElement = (
            <select 
                className = {inputClasses.join(' ')}
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
                disabled={props.disabled}
                style={{cursor:'pointer'}}>
                {props.children}
                </button>;
            break;
        case('hidden'):
            inputElement = <input {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement = <input className={classes.InputElement}{...props}/>;
    }
    
    return(
        <div className={classes.Input}>
            {inputElement}
        </div>
    )
}
export default input;