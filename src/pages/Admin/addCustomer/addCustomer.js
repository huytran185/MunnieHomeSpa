import React, {useState} from 'react'
import classes from '../Admin.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner'
import {inputChangedHandler, submitHandler} from '../../InputHandler/InputHandler';

const AddCustomer = ()=>{
    const [form, setForm]= useState({
        name:{
            elementType: 'text',
            elementConfig:{
                type: 'text',
                name: 'name',
                placeholder: 'New Customer Name...'
            },
            value: '',
            validation:{
                required: true,
                format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
            },
            valid: false,
            touched: false,
            errorMess: 'Please input the valid Name'
        },
        phone:{
            elementType: 'text',
            elementConfig:{
                type: 'text',
                name: 'phone',
                placeholder: 'Customer Phone Number...'
            },
            value: '',
            validation:{
                required: true,
                format: '^[0-9]*$'
            },
            valid: false,
            touched: false,
            errorMess: 'Please input the valid Phone Number'
        },
        dob:{
            elementType: 'text',
            elementConfig:{
                type: 'text',
                name: 'dob',
                placeholder: 'Date of Birth: dd/mm/yyyy'
            },
            value:'',
            validation:{
                required: true,
                format: '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$'
            },
            valid: false,
            touched: false,
            errorMess: "Please input the valid Date of Birth"
        },
        email:{
            elementType: 'text',
            elementConfig:{
                type:'text',
                name: 'email',
                placeholder:'Customer Email...'
            },
            value: '',
            validation:{
                required: true,
                format:'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
            },
            valid: false,
            touched: false,
            errorMess: 'Please input the valid Email'
        },
        facebook:{
            elementType: 'text',
            elementConfig:{
                type:'text',
                name: 'facebook',
                placeholder:'Customer Facebook...'
            },
            value: '',
            validation:{
                required: true,
                format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
            },
            valid: false,
            touched: false,
            errorMess: 'Please input the valid Customer Facebook'
        },
        //them an = 0
        point:{
            elementType:'hidden',
            elementConfig:{
                type:'hidden',
                name:'point'
            },
            value:0,
            validation:{
                required:false,
                format: '^[0-9]*$'
            },
            valid:true,
        },
    });
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
    <form onSubmit={(event)=>submitHandler(event,setLoading, form,"customer/")}>
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

export default AddCustomer;