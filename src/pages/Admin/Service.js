import React, {useState, useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AHeader/Header'
import {serviceConfig} from './dataConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import Notifications from '../../components/UI/Notifications/Notifications'
import DisplayTable from './displayTable';
import {serviceTable} from './tableConfig';
import {Box, Typography} from '@material-ui/core'
import useStyles from './styles.js';
import Button from './Button.js';
import { useDispatch, useSelector } from 'react-redux'
import {getService} from '../../actions/service';
import {getType} from '../../actions/type';

const Service = ()=>{
    const classes = useStyles();
    const serviceList = useSelector(state=>state.service.list);
    const serviceLoading = useSelector(state=>state.service.loading);
    const serviceError = useSelector(state=>state.service.error);
    const typeList = useSelector(state=>state.type.list);
    const typeLoading = useSelector(state=>state.type.loading);
    const typeError = useSelector(state=>state.type.error);
    const dispatch = useDispatch();
    const [config,setConfig] = useState(serviceConfig);
    // const [workingConfig, setWorkingConfig] = useState(null);
    const [status, setStatus] = useState("list");
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null);
    const notificationRef = useRef();

    useEffect(()=>{
        if(Object.keys(serviceList).length === 0){
            dispatch(getService());
        }
        if(Object.keys(typeList).length === 0){
            dispatch(getType())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(serviceList)
    useEffect(()=>{
        setConfig(serviceConfig);
        if(status === 'add'){
            addTypeData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[status]);
    const addTypeData = ()=>{
        const typeArray = [];
        for(let key in typeList){
            typeArray.push({
                value:typeList[key]['id'],
                display:typeList[key]['id']
            })
        }
        const newConfig = {...config};
        for(let i in typeArray){
            newConfig['type']['elementConfig']['options'][i]= typeArray[i];
        }

        setConfig(newConfig);
    }
    
    const editHandler = (id)=>{
        addTypeData();
        let newConfig = JSON.parse(JSON.stringify(config));
        console.log(newConfig)
        for(let key in newConfig){
            newConfig[key]["value"] = serviceList[id][key];
        }
        // console.log(newConfig)
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
    }
    let page = <Spinner/>;
    if(status === "list" && !typeLoading && !serviceLoading){
        page = <DisplayTable 
        type="service"
        data={serviceList} 
        config={serviceTable}
        setId = {editHandler}
        notificationRef={notificationRef}
        />
    }
    if(status === "edit"){
        page = <AddForm formType = "service"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Service"
        notificationRef={notificationRef}
        />
    }
    if(status === "add"){
        page = <AddForm formType = "service" 
        config={config}
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Service"
        notificationRef={notificationRef}
        />
    }
    return(
        <div className={classes.Page}>
            <Header/>
            <Box className={classes.Display}>
                <Box textAlign="center">
                    <Typography variant="h3">
                        Service
                    </Typography>
                </Box>
                <Button setStatus={setStatus} 
                status={status} 
                name='Service'/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Service