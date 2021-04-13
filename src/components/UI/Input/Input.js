import React from 'react';
import useStyle from './styles';
import Aux from '../../../hoc/Auxulliary';
import {TextField} from '@material-ui/core';


const Input = (props)=>{
    const classes = useStyle();
    let inputElement = null;
    let errorMess = null;
    const inputClasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        errorMess = <p>{props.errorMess}</p>
    }
    if(props.elementType === 'select'){
        inputClasses.push(classes.Capitalize);
    }
    switch(props.elementType){
        case('text'):
            inputElement = (
            <div className={classes.Input}>
                <TextField label="test" variant="outlined"
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
                <div className={classes.Error}>{errorMess}</div>
            </div>);
            break;
        case ('textarea'):
            inputElement = (
            <div className={classes.Input}>
                <textarea 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
                <p className={classes.Error}>{errorMess}</p>
            </div>);
            break;
        case ('select'):
            inputElement = (
            <div className={classes.Input}>
                <select 
                    className = {inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option=>(
                            <option key={option.value} 
                            value={option.value} className={classes.Capitalize}>
                                {option.display}
                            </option>
                        ))}
                </select>
            </div>);
            break;
        case('file'):
            inputElement = (<div className={classes.Input}><input 
                className={classes.InputElement}
                {...props.elementConfig}
                onChange={props.changed}/>
            </div>);
            break;
        case('button'):
            inputElement =(<div className={classes.Input}>
                <button className = {classes.InputElement}
                onClick={props.clicked}
                disabled={props.disabled}
                style={{cursor:'pointer'}}>
                {props.children}
                </button>
            </div>);
            break;
        case('hidden'):
            inputElement = <input {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement = <input className={classes.InputElement}{...props}/>;
    }
    
    return(
        <Aux>
            {inputElement}
        </Aux>
            
    )
}
export default Input;