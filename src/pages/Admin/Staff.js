import React, {useState,useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AdminUI/Header'
import {staffConfig} from '../../Config/dataConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayTable from './displayTable';
import {staffTable} from '../../Config/tableConfig';
import Notifications from '../../components/UI/Notifications/Notifications'
import {Typography, Box} from '@material-ui/core'
import Button from '../../components/AdminUI/Button'
import useStyles from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import {getStaff} from '../../actions/staff';

//Staff page which allows admin to manage Staff Information

const Staff = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(staffConfig);
    const [status, setStatus] = useState("list");
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    const staffList = useSelector(state=>state.staff.list);
    const staffLoading = useSelector(state=>state.staff.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(staffList).length === 0){
            dispatch(getStaff())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        setConfig(staffConfig);
    }, [status])
    const editHandler =(id)=>{
        let newConfig = JSON.parse(JSON.stringify(config));

        for(let key in newConfig){
            newConfig[key]["value"] = staffList[id][key];
        }
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
        
    }

    let page = <Spinner/>;
    if(status === "list" && !staffLoading){
        page = <DisplayTable 
        type="staff"
        data={staffList} 
        config={staffTable}
        setId = {editHandler}
        notificationRef={notificationRef}/>
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
                        Staff
                    </Typography>
                </Box>
                <Button setStatus={setStatus} 
                status={status}
                name='Staff'/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Staff