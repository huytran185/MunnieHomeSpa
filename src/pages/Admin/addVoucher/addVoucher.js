import React, {useState} from 'react'
import classes from '../Admin.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {inputChangedHandler, submitHandler} from '../../InputHandler/InputHandler';

const AddVoucher = ()=>{
    const [form, setForm] = useState({
        link:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'link',
                placeholder: 'Link to Facebook...'
            },
            value: '',
            validation:{
                required: true,
                format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Link to Facebook'
        },
        image:{
            elementType: 'file',
            elementConfig:{
                type:'file',
                name: 'image',
                accept:'.jpg, .jpeg, .png'
            }
        },
    })
    const [formIsValid, setFormIsValid] = useState(false)
    const [loading, setLoading] = useState(false);

    const formArray =[];
    for(let key in form){
        formArray.push({
            id:key,
            config: form[key],
            
        });
    }
    let displayForm = (
        <form onSubmit={(event)=>submitHandler(event,setLoading, form, "voucher/")}>
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
                    changed={(event)=>inputChangedHandler(form, setFormIsValid, setForm, event,element.id)}
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

export default AddVoucher;