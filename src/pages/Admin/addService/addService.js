import React, {useState} from 'react'
import classes from '../Admin.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import axios from '../../axios-order';
import {inputChangedHandler, submitHandler} from '../../InputHandler/InputHandler';
const AddService = ()=>{
    const [form, setForm] = useState({
        name: {
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'name',
                placeholder: 'New Service Name...'
            },
            value: '',
            validation:{
                required: true,
                format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Name'
        },
        english:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'english',
                placeholder: 'Service English Name...'
            },
            value: '',
            validation:{
                required: true,
                format: '^(?![ .]+$)[a-zA-Z .]*$'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid English Name'
        },
        type:{
            elementType: 'select',
            elementConfig:{
                options:[
                    {value:'', display:'Please select Service Type'},
                    {value:'facial', display:'Facial Skincare'},
                    {value: 'shampoo', display:'Shampoo and Eyelash Extensions'}
                ]
            },
            value: '',
            validation:{
                required: true,
            },
            valid: false,
            touched:false
        },
        des:{
            elementType: 'textarea',
            elementConfig:{
                type:'textarea',
                name: 'des',
                placeholder: 'Service Description...',
                rows: 4,
                cols: 50,
            },
            value: '',
            validation:{
                required: true,
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Description'
        },
        time:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'time',
                placeholder: 'Service Duration ...'
            },
            value: '',
            validation:{
                required: true,
                format: '^[0-9]*$'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Time'
        },
        price:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'price',
                placeholder: 'Service Price ...'
            },
            value: '',
            validation:{
                required: true,
                format: '^\\d+(,\\d{3})*(\\.\\d{1,2})?$'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Price'
        },
        rank:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'rank',
                placeholder: 'Service Rank ...'
            },
            value: '',
            validation:{
                required: true,
                format: '^[0-9]*$'
            },
            valid: false,
            touched:false,
            errorMess: 'Please input the valid Rank'
        },
        image:{
            elementType: 'file',
            elementConfig:{
                type:'file',
                name: 'image',
                accept:'.jpg, .jpeg, .png, .gif'
            },
            value:'',
            touched:false,
            valid:false
        },
    })
    const [formIsValid, setFormIsValid]= useState(false);

    const [loading, setLoading] = useState(false);
    const formArray =[];
    for(let key in form){
        formArray.push({
            id:key,
            config: form[key],
        });
    }

    let displayForm = (
    <form onSubmit={(event)=>submitHandler(event,setLoading, form,"service/")}>
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
        <Input elementType="button" disabled={!formIsValid}>Add New Service</Input>
    </form>);
    if(loading){
        displayForm = <Spinner />;
    }
    return(
        <div className = {classes.FormContainer}>
            {displayForm}
        </div>
    )
}

export default AddService;