import React, {useState, useEffect} from 'react'
import {getService,getVoucher,getStaff,getCustomer} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './listInfo.module.css'
const ListInfo = (props)=>{
    const [services, setServices]= useState(null);
    const [vouchers, setVoucher]= useState(null);
    const [staff, setStaff]= useState(null);
    const [customers, setCustomer]= useState(null);
    useEffect(()=>{
        getService(setServices)
        getVoucher(setVoucher)
        getCustomer(setCustomer)
        getStaff(setStaff)
    },[])

    let display = <Spinner/>
    switch(props.listType){
        case 'service':
            if(services){
                display = (<div>List of Service Data</div>);
            };
        break;
        case 'voucher':
            if(vouchers){
                display = (<div>List of Voucher Data</div>);
            };
        break;
        case 'customer':
            if(customers){
                display = (<div>List of Customers Data</div>);
            };
        break;
        case 'staff':
            if(staff){
                display = (<div>List of Staff Data</div>);
            };
        break;
        default:
            display = <Spinner/>;
    }
    return(
        <div className={classes.ListInfo}>
            {display}
        </div>
    )
}

export default ListInfo;