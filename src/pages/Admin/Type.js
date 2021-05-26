import React, {useState, useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AdminUI/Header'
import {typeConfig} from '../../Config/dataConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayTable from './displayTable';
import {typeTable} from '../../Config/tableConfig';
import Notifications from '../../components/UI/Notifications/Notifications'
import {Typography, Box} from '@material-ui/core'
import Button from '../../components/AdminUI/Button'
import useStyles from './styles.js'
import { useDispatch, useSelector } from 'react-redux';
import {getType} from '../../actions/type';

//Type page which allows admin to manage Type Information

const Type = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(typeConfig);
    const [status, setStatus] = useState("list");
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    const typeList = useSelector(state=>state.type.list);
    const typeLoading = useSelector(state=>state.type.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(typeList).length === 0){
            dispatch(getType())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        setConfig(typeConfig);
    }, [status])

    const editHandler =(id)=>{
        let newConfig = JSON.parse(JSON.stringify(config));
        for(let key in newConfig){
            newConfig[key]["value"] = typeList[id][key];
        }
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
    }
    let page = <Spinner/>;
    if(status === "list" && !typeLoading){
        page = <DisplayTable 
        type="type"
        data={typeList} 
        config={typeTable}
        setId = {editHandler}
        notificationRef={notificationRef}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "type"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Type"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "type"
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Type"
        notificationRef={notificationRef}/>
    }
    return(
        <div className={classes.Page}>
            <Header/>
            <Box className={classes.Display}>
                <Box textAlign="center">
                    <Typography variant="h3">
                        Type
                    </Typography>
                </Box>
                <Button setStatus={setStatus} 
                status={status}
                name='Type'/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Type