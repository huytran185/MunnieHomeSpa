import React, {useState, useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AHeader/Header'
import {serviceConfig} from './dataConfig';
import {getService} from '../getData';
import Spinner from '../../components/UI/Spinner/Spinner';
import Notifications from '../../components/UI/Notifications/Notifications'
import DisplayTable from './displayTable';
import {serviceTable} from './tableConfig';
import {Box, Typography} from '@material-ui/core'
import useStyles from './styles.js';
import Button from './Button.js'
const Service = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(serviceConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null);
    const notificationRef = useRef();
    useEffect(()=>{
        getService(setData);
    }, [])
    useEffect(()=>{
        setConfig(serviceConfig);
    }, [status])

    const editHandler =(id)=>{
        let newConfig = JSON.parse(JSON.stringify(config));

        for(let key in newConfig){
            newConfig[key]["value"] = data[id][key];
        }
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
        
    }

    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable 
        type="service"
        data={data} 
        config={serviceTable}
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "service"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Service"
        notificationRef={notificationRef}/>
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
                <Button setStatus={setStatus}/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Service