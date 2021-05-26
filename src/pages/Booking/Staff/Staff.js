import React, {useEffect, useState, useRef} from 'react'
import useStyles from "../styles.js"
import Search from '../../../components/Search/Search';
import {Typography} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import {getStaff} from '../../../actions/staff';
import PropTypes from 'prop-types';
//The component that accept staff information for the booking

const Staff = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const [selected, setSelected] = useState({
        name: ''
    })
    const wrapperRef = useRef(null);
    const staffList = useSelector(state=>state.staff.list);
    const staffLoading = useSelector(state=>state.staff.loading);
    const dispatch = useDispatch();
    const [config] = useState({
        name:{
            title:"Staff Name",
            name:"name",
            type:"text"
        },
    })

    useEffect(()=>{
        if(Object.keys(staffList).length === 0){
            dispatch(getStaff())
        }
        document.addEventListener("mousedown", handlerClickHandler)
        return()=>{
            document.removeEventListener("mousedown", handlerClickHandler);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
        
    useEffect(()=>{
        if(props.bookInfo['staffId'] !== ''){
            setSearch(props.bookInfo['staffName']);
            setSelected(
                {
                    name: props.bookInfo['staffName'], 
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
        if(!staffLoading){
            for(let el in staffList){
                let content={};
                for(let key in config){
                    content[config[key]["name"]]= staffList[el][config[key]["name"]]
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
            ...props.bookInfo,
            staffId:id,
            staffName:name
        })
    }
    const onChangeSearchHandler = (e)=>{
        setSearch(e.target.value);
        if(!e.target.value){
            setSelected({name: '', phone: ''})
            props.setInfo({
                ...props.bookInfo,
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

Staff.propTypes={
    bookInfo: PropTypes.object,
    setInfo: PropTypes.func,
}
export default Staff
