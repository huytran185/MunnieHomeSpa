import React, {useEffect, useState, useRef} from 'react'
import useStyles from "../styles.js"
import {getStaff} from '../../getData'
import Search from '../../../components/Search/Search';
import {Typography} from '@material-ui/core'
const Staff = (props) => {
    const classes = useStyles();
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const [selected, setSelected] = useState({
        name: ''
    })
    const wrapperRef = useRef(null);
    const [config] = useState({
        name:{
            title:"Staff Name",
            name:"name",
            type:"text"
        },
    })

    useEffect(()=>{
        getStaff(setData);
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
    const suggestSelectHandler =(id,name)=>{
        setSearch(name);
        setDisplay(!display);
        setSelected({name: name});
        props.setInfo({
            customerId: props.bookInfo.customerId,
            customerName: props.bookInfo.customerName,
            customerPhone: props.bookInfo.customerPhone,
            customerEmail: props.bookInfo.customerEmail,
            serviceId: props.bookInfo.serviceId,
            serviceName: props.bookInfo.serviceName,
            duration: props.bookInfo.duration,
            price: props.bookInfo.price,
            start: props.bookInfo.start,
            staffId:id,
            staffName: name
        })
    }
    const onChangeSearchHandler = (e)=>{
        setSearch(e.target.value);
        if(!e.target.value){
            setSelected({name: '', phone: ''})
            props.setInfo({
            customerId: props.bookInfo.customerId,
            customerName: props.bookInfo.customerName,
            customerPhone: props.bookInfo.customerPhone,
            customerEmail: props.bookInfo.customerEmail,
            serviceId: props.bookInfo.serviceId,
            serviceName: props.bookInfo.serviceName,
            duration: props.bookInfo.duration,
            price: props.bookInfo.price,
            start: props.bookInfo.start,
            staffId: '',
            staffName: '',
        })
        }
    }
    return (
        <fieldset ref = {wrapperRef}>
            <legend>Thông tin nhân viên</legend>
            <div className={classes.Search}>
                <Search valued = {search}
                placeholder ="Nhập tên nhân viên"
                onChanged={(e)=>onChangeSearchHandler(e)}
                onClicked={()=>setDisplay(!display)}/>
                {display && (
                    <div className={classes.SuggestContainer}>
                        {tableArray.filter(element=>{
                            
                            return element["data"]["name"].toLowerCase().includes(search.toLowerCase())
                        }).map(v=>{
                            return <div className={classes.Suggest}
                            key={v.id}
                            onClick={()=>suggestSelectHandler(v["id"],v["data"]["name"])}>
                                {v["data"]["name"]}
                            </div>
                        })}
                    </div>)}
            </div>
            <Typography variant="body1" display="block" className={classes.Info}>Tên nhân viên: {selected["name"]}</Typography>
        </fieldset>
    )
}

export default Staff
