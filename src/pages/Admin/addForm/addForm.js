import React, {useState} from 'react'
import classes from '../Admin.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {inputChangedHandler, submitHandler} from '../../InputHandler';

const AddForm = (props)=>{

    const [formIsValid, setFormIsValid] = useState(false)
    const [loading, setLoading] = useState(false);

    const formArray =[];
    for(let key in props.data){
        formArray.push({
            id:key,
            config: props.data[key],
            
        });
    }
    let displayForm = (
        <form onSubmit={(event)=>submitHandler(event,setLoading, props.data, props.formType)}>
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
                    changed={(event)=>inputChangedHandler(props.data, setFormIsValid, props.setData, event,element.id)}
                />
            ))}
            <Input elementType="button" disabled={!formIsValid}>Add New Voucher</Input>
        </form>);
    if(loading){
        displayForm = <Spinner/>;
    }
    return(
        <div className={classes.FormContainer}>
           {displayForm}
        </div>
    )
}

export default AddForm;