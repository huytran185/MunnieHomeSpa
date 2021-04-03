import React, {useState,useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AHeader/Header'
import {staffConfig} from './dataConfig';
import {getStaff} from '../getData';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayTable from './displayTable';
import {staffTable} from './tableConfig';
import Notifications from '../../components/UI/Notifications/Notifications'
import {Typography, Box} from '@material-ui/core'
import Button from './Button.js'
import useStyles from './styles.js'
const Staff = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(staffConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    useEffect(()=>{
        getStaff(setData);
    }, [])
    useEffect(()=>{
        setConfig(staffConfig);
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
        type="staff"
        data={data} 
        config={staffTable}
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "staff"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Type"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "staff" 
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Staff"
        notificationRef={notificationRef}/>
    }
    return(
        <div className={classes.Page}>
            <Header/>
            <Box className={classes.Display}>
                <Box textAlign="center">
                    <Typography variant="h3">
                        Customer
                    </Typography>
                </Box>
                <Button setStatus={setStatus}/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Staff