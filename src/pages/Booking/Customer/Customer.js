import React, {useEffect, useState, useRef} from 'react'
import useStyles from "../styles.js"
import {getCustomer} from '../../getData'
import Search from '../../../components/Search/Search';
import {Typography} from '@material-ui/core';
const Customer = (props) => {
    const classes = useStyles();
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
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
        getCustomer(setData);
    },[])
    
    useEffect(()=>{
        document.addEventListener("mousedown", handlerClickHandler)
        return()=>{
            document.removeEventListener("mousedown", handlerClickHandler);
        }
    },[])
    const handlerClickHandler= (event)=>{
        const {current: wrap}= wrapperRef;
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false)
        }
    }

    let tableArray = [];
        if(data){
            for(let el in data){
                let content={};
                for(let key in config){
                    content[config[key]["name"]]= data[el][config[key]["name"]]
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
            customerId:id, 
            customerName:name,
            customerPhone:phone,
            customerEmail:email,
            serviceId: props.bookInfo.serviceId,
            serviceName: props.bookInfo.serviceName,
            duration: props.bookInfo.duration,
            price: props.bookInfo.price,
            start: props.bookInfo.start,
            staffId: props.bookInfo.staffId,
            staffName: props.bookInfo.staffName,
        })
    }
    const onChangeSearchHandler = (e)=>{
        setSearch(e.target.value);
        if(!e.target.value){
            setSelected({name: '', phone: ''})
            props.setInfo({
            customerId:'', 
            customerName:'',
            customerPhone:'',
            customerEmail:'',
            serviceId: props.bookInfo.serviceId,
            serviceName: props.bookInfo.serviceName,
            duration: props.bookInfo.duration,
            price: props.bookInfo.price,
            start: props.bookInfo.start,
            staffId: props.bookInfo.staffId,
            staffName: props.bookInfo.staffName,
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
            <Typography variant="body1" display="block" className={classes.Info}>Tên khách hàng: {selected["name"]}</Typography>
            <Typography variant="body1" display="block" className={classes.Info}>Số điện thoại: {selected["phone"]}</Typography>
        </fieldset>
    )
}

export default Customer
