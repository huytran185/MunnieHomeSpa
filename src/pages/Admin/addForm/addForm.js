import React, {useState} from 'react'
import classes from '../Admin.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {inputChangedHandler, submitHandler} from '../../InputHandler';

const AddForm = (props)=>{

    const [formIsValid, setFormIsValid] = useState(false)
    const [loading, setLoading] = useState(false);

    const formArray =[];
    for(let key in props.config){
        formArray.push({
            id:key,
            config: props.config[key],
            
        });
    }
    
    let displayForm = (
        <form onSubmit={(event)=>submitHandler(event,setLoading, props.config, props.formType,props.currentID)}>
            {formArray.map(element=>(
                <Input
                    key={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    invalid={!element.config.valid}
                    shouldValidate={element.config.validation}
                    touched={element.config.touched}
                    errorMess = {element.config.errorMess}
                    changed={(event)=>inputChangedHandler(props.config, setFormIsValid, props.setCon, event,element.id)}
                />
            ))}
            <Input elementType="button" disabled={!formIsValid}>{props.title}</Input>
        </form>);
    if(loading){
        displayForm = <Spinner/>;
    }
    return(
        <div className={classes.FormContainer}>
            <div className={classes.Title1}>{props.title}</div>
           {displayForm}
        </div>
    )
}

export default AddForm;