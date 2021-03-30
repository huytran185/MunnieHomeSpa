import React, {useState, useEffect,useRef} from 'react'
import Search from '../../../../components/Search/Search';
import {getService} from '../../../getData'
import classes from '../Book.module.css'
const Service = (props) => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const wrapperRef = useRef(null);
    const [selected, setSelected] = useState({
        name:'',
        time:'',
        price:''
        
    })
    const [config, setConfig]= useState({
        name:{
            title:"Service Name",
            name:"name",
            type:"text"
            },
        price:{
            title:"Service Price",
            name:"price",
            type:"text"
        },
        time:{
            title:"Service Duration",
            name:"time",
            type:"text"
        },
    })
    useEffect(()=>{
        getService(setData);
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
    
    const suggestSelectHandler =(id,name, time, price)=>{
        setSearch(name);
        setDisplay(!display);
        setSelected({name: name, time: time, price: price})
        props.setInfo({
            customerId: props.bookInfo.customerId,
            customerName: props.bookInfo.customerName,
            customerPhone: props.bookInfo.customerPhone,
            customerEmail: props.bookInfo.customerEmail,
            serviceId: id, 
            serviceName: name, 
            duration: time, 
            price: price,
            start: props.bookInfo.start,
            staffId: props.bookInfo.staffId,
            staffName: props.bookInfo.staffName,
        })
    }

    return (
        <fieldset ref = {wrapperRef} className={classes.Search}>
            <legend>Thông tin dịch vụ</legend>
            <Search valued = {search}
            onChanged={(e)=>setSearch(e.target.value)}
            onClicked={()=>setDisplay(!display)}
            />
            {display && (
                <div className={classes.SuggestContainer}>
                    {tableArray.filter(element=>{
                        return element["data"]["name"].toLowerCase().includes(search.toLowerCase())
                    }).map((v)=>{
                        return(<div className={classes.Suggest} 
                            key ={v.id}
                            onClick = {()=>suggestSelectHandler(v["id"],v["data"]["name"],v["data"]["time"],v["data"]["price"])}>
                                {v["data"]["name"]} - {v["data"]["time"]} phút - {v["data"]["price"]}.000VND
                            </div>)
                    })}
                </div>
            )}
            <div className={classes.Info}>Tên dịch vụ: {selected["name"]}</div>
            <div className={classes.Info}>Thời gian: {selected["time"]}</div>
            <div className={classes.Info}>Giá tiền: {selected["price"]}</div>
        </fieldset>
    )
}

export default Service
