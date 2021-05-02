import React, {useEffect, useState, useRef} from 'react'
import useStyles from "../styles.js"
import Search from '../../../components/Search/Search';
import {Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getCustomer} from '../../../actions/customer';
import PropTypes from 'prop-types';
//The component that accept customer information of the booking

const Customer = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const customerList = useSelector(state=>state.customer.list);
    const customerLoading = useSelector(state=>state.customer.loading);
    const customerError = useSelector(state=>state.customer.error);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState({
        name: '', phone: ''
    })
    const wrapperRef = useRef(null);
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
    return (
        <fieldset ref = {wrapperRef}>
            <legend>Thông tin khách hàng</legend>
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
        </fieldset>
    )
}

Customer.propTypes={
    bookInfo: PropTypes.object,
    setInfo: PropTypes.func,
}
export default Customer
