import React, {useState, useEffect,useRef} from 'react'
import Search from '../../../components/Search/Search';
import useStyles from '../styles.js';
import {Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getService} from '../../../actions/service';
import PropTypes from 'prop-types';
//The component that accept service information for the booking

const Service = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const wrapperRef = useRef(null);
    const serviceList = useSelector(state=>state.service.list);
    const serviceLoading = useSelector(state=>state.service.loading);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState({
        name:'',
        time:'',
        price:''
        
    })
    const [config]= useState({
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
        if(Object.keys(serviceList).length === 0){
            dispatch(getService())
        }
        document.addEventListener("mousedown", handlerClickHandler)
        return()=>{
            document.removeEventListener("mousedown", handlerClickHandler);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(props.bookInfo['serviceId'] !== ''){
            setSearch(props.bookInfo['serviceName']);
            setSelected(
                {
                    name: props.bookInfo['serviceName'], 
                    time: props.bookInfo['duration'],
                    price: props.bookInfo['price']
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
        if(!serviceLoading){
            for(let el in serviceList){
                let content={};
                for(let key in config){
                    content[config[key]["name"]]= serviceList[el][config[key]["name"]]
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
            ...props.bookInfo,
            serviceId:id, 
            serviceName:name, 
            duration:time, 
            price:price,
        })
    }
    const onChangeSearchHandler = (e)=>{
        setSearch(e.target.value);
        if(!e.target.value){
            setSelected({name: '', phone: ''})
            props.setInfo({
                ...props.bookInfo,
                serviceId: '',
                serviceName: '',
                duration: '',
                price: '',
        })
        }
    }
    return (
        <fieldset ref = {wrapperRef}>
            <legend>Thông tin dịch vụ</legend>
            <div className={classes.Search}>
                <Search valued = {search}
                placeholder = "Nhâp tên dịch vụ"
                onChanged={(e)=>onChangeSearchHandler(e)}
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
            </div>
            <Typography variant="body1" display="block" className={classes.Info}>Tên dịch vụ: {selected["name"]}</Typography>
            <Typography variant="body1" display="block" className={classes.Info}>Thời gian: {selected["time"]}</Typography>
            <Typography variant="body1" display="block" className={classes.Info}>Giá tiền: {selected["price"]}</Typography>
        </fieldset>
    )
}

Service.propTypes={
    bookInfo: PropTypes.object,
    setInfo: PropTypes.func,
}
export default Service
