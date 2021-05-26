import React, {useState, useEffect, useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AdminUI/Header'
import {customerConfig} from '../../Config/dataConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayTable from './displayTable';
import {customerTable} from '../../Config/tableConfig';
import Notifications from '../../components/UI/Notifications/Notifications'
import { Box, Typography} from '@material-ui/core'
import useStyles from './styles.js'
import Button from '../../components/AdminUI/Button'
import { useDispatch, useSelector } from 'react-redux';
import {getCustomer} from '../../actions/customer';

//Customer Page where admin manages Customer information

const Customer = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(customerConfig);
    const [status, setStatus] = useState("list");
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    const customerList = useSelector(state=>state.customer.list);
    const customerLoading = useSelector(state=>state.customer.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(customerList).length === 0){
            dispatch(getCustomer())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        setConfig(customerConfig);
    }, [status])

    const editHandler =(id)=>{
        let newConfig = JSON.parse(JSON.stringify(config));
        for(let key in newConfig){
            newConfig[key]["value"] = customerList[id][key];
        }
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
    }

    let page = <Spinner/>;
    if(status === "list" && !customerLoading){
        page = <DisplayTable 
        data={customerList} 
        config ={customerTable} 
        type="customer"
        setId = {editHandler}
        notificationRef={notificationRef}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "customer"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Customer"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "customer"
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Customer"
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
                <Button setStatus={setStatus} 
                status={status}
                name='Customer'/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Customer;