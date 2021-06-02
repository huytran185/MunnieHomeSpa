import React, {useEffect, useState, useRef} from 'react'
import useStyles from "../styles.js"
import Search from '../../../components/Search/Search';
import {Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getCustomer} from '../../../actions/customer';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input'
//The component that accept customer information of the booking

const Customer = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const customerList = useSelector(state=>state.customer.list);
    const customerLoading = useSelector(state=>state.customer.loading);
    const [customerType, setCustomerType] = useState('Guest');
    const dispatch = useDispatch();
    const [selected, setSelected] = useState({
        name: '', phone: ''
    })
    const wrapperRef = useRef(null);
    const [selectConfig, setSelectConfig] = useState({
        elementType: 'select',
        elementConfig:{
            options:[
                {value: "Guest", display: "Guest"},
                {value: "Member", display: "Member"}
            ]
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false
    })
    const [guestConfig, setGuestConfig] = useState({
        name:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'name',
            placeholder: 'Customer Name'
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
            placeholder: 'Phone Number'
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
    email:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'email',
            placeholder:'Customer Email'
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
    })
    const formArray =[];
    for(let key in guestConfig){
        formArray.push({
            id:key,
            config: guestConfig[key],
            
        });
    }
    const [config] = useState({
        name:{
        title:"Name",
        name:"name",
        type:"text"
    },
    phone:{
        title:"Phone Number",
        name:"phone",
        type:"text"
    },
    email:{
        title:"Email",
        name:"email",
        type:"text"
    },
    })
    useEffect(()=>{
        if(Object.keys(customerList).length === 0){
            dispatch(getCustomer())
        }
        document.addEventListener("mousedown", handlerClickHandler)
        return()=>{
            document.removeEventListener("mousedown", handlerClickHandler);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
        if(props.bookInfo['customerId'] !== ''){
            setSearch(props.bookInfo['customerName']);
            setSelected(
                {
                    name: props.bookInfo['customerName'], 
                    phone: props.bookInfo['customerPhone']
                })
        }
    },[props.bookInfo])
    const handlerClickHandler= (event)=>{
        const {current: wrap}= wrapperRef;
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false)
        }
    }

    let tableArray = [];
        if(!customerLoading){
            for(let el in customerList){
                let content={};
                for(let key in config){
                    content[config[key]["name"]]= customerList[el][config[key]["name"]]
                }
                tableArray.push({
                    id: el,
                    data: content
                })
            }
        }

    const suggestSelectHandler =(id,name, phone,email)=>{
        setSearch(name);
        setDisplay(!display);
        setSelected({name: name, phone: phone})
        props.setInfo({
            ...props.bookInfo,
            customerId:id, 
            customerName:name,
            customerPhone:phone,
            customerEmail:email,
        })
        
    }
    const onChangeSearchHandler = (e)=>{
        setSearch(e.target.value);
        if(!e.target.value){
            setSelected({name: '', phone: ''})
            props.setInfo({
                ...props.bookInfo,
                customerId:'', 
                customerName:'',
                customerPhone:'',
                customerEmail:'',
        })
        }
    }
    const typeSelectHandler = (event)=>{
        setCustomerType(event.target.value);
        setSelectConfig({...selectConfig,
        value:event.target.value});
    }
    const checkValidity=(id,value,rules)=>{
        let isValid = true;
        if(id !== "image"){
            if(rules.required){
                isValid = value.trim() !== '' && isValid;
            }
            if(rules.format){
                let re = new RegExp(rules.format);
                isValid = re.test(value.trim()) && isValid;
            }
        }else{
            if(rules.required){
                isValid = value !== '' && isValid;
            }
        }
        return isValid;
    }
    const inputChangedHandler = (event,id)=>{
        const updatedForm = {...guestConfig};
        const updatedElement = {...updatedForm[id]};
        updatedElement.value = event.target.value;
        updatedElement.valid = checkValidity(id,updatedElement.value,updatedElement.validation);
        updatedElement.touched = true;
        updatedForm[id] = updatedElement;
        setGuestConfig(updatedForm);
        switch(id){
            case 'name':
                updatedElement.valid?
                props.setInfo({...props.bookInfo, customerId:'Guest', customerName:event.target.value}):
                props.setInfo({...props.bookInfo, customerId:'Guest', customerName:''})
                break;
            case 'phone':
                updatedElement.valid?
                props.setInfo({...props.bookInfo, customerId:'Guest', customerPhone:event.target.value}):
                props.setInfo({...props.bookInfo, customerId:'Guest', customerPhone:''})
                break;
            case 'email':
                updatedElement.valid?
                props.setInfo({...props.bookInfo, customerId:'Guest', customerEmail:event.target.value}):
                props.setInfo({...props.bookInfo, customerId:'Guest', customerEmail:''})
                break;
            default: break;
        }
    }

    let customerForm = null;
    if(customerType === 'Member'){
        customerForm = <div>
            <div className={classes.Search}>
                <Search valued ={search}
                placeholder = "Nhập tên khách hàng hoặc số điện thoại" 
                onChanged={(e)=>onChangeSearchHandler(e)}
                onClicked ={()=>setDisplay(!display)}/>
                {display && (
                    <div className={classes.SuggestContainer}>
                        {tableArray.filter(element=>{
                            return element["data"]["name"].toLowerCase().includes(search.toLowerCase())||element["data"]["phone"].toLowerCase().includes(search.toLowerCase())
                        })
                        .map((v)=>{
                            return <div className={classes.Suggest} 
                            key={v.id} 
                            onClick={()=>suggestSelectHandler(v["id"],v["data"]["name"],v["data"]["phone"],v["data"]["email"])}>
                                {v["data"]["name"]} - {v["data"]["phone"]}
                            </div>
                        })}
                    </div>
                )}
            </div>
            <Typography variant="body1" display="block" className={classes.Info}>
                Tên khách hàng: 
                {selected["name"]}
            </Typography>
            <Typography variant="body1" display="block" className={classes.Info}>
                Số điện thoại: 
                {selected["phone"]}
            </Typography>
        </div>
    }
    else if(customerType === 'Guest'){
        customerForm = (<div>
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
                    changed={(event)=>inputChangedHandler(event,element.id)}
                />
            ))}
        </div>)
    }
    return (
        <fieldset ref = {wrapperRef}>
            <legend>Thông tin khách hàng</legend>
            <Input
            elementType={selectConfig.elementType}
            elementConfig={selectConfig.elementConfig}
            value={selectConfig.value}
            invalid={!selectConfig.valid}
            shouldValidate={selectConfig.validation}
            touched={selectConfig.touched}
            errorMess = {selectConfig.errorMess}
            changed={(event)=>{typeSelectHandler(event)}}
            />
            {customerForm}
        </fieldset>
    )
}

Customer.propTypes={
    bookInfo: PropTypes.object,
    setInfo: PropTypes.func,
}
export default Customer
