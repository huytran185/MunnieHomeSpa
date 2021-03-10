import React, {useState} from 'react';
import classes from './Dashboard.module.css';
import Aux from '../../hoc/Auxulliary';
import AddService from './addService/addService';
import AddVoucher from './addVoucher/addVoucher';
import ListService from './listService/listService';
import ListVoucher from './listVoucher/listVoucher';
export const Dashboard = ()=>{
    const [title, setTitle] = useState("Dashboard");
    
    let page = null;
    switch(title){
        case "Add Service":
            page= <AddService/>;
            break;
        case "Add Voucher":
            page=<AddVoucher/>;
            break;
        case "List of Voucher":
            page = <ListVoucher/>;
            break;
        case "List of Services":
            page = <ListService/>;
            break;
        default:
            page = <div>Dashboard</div>;
    }
    return(
        <Aux >
            <div className = {classes.Page}>
                <div className = {classes.Navigation}>
                    <div className = {classes.Welcome}>Welcome, Admin</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Services")}>List of Services</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Voucher")}>List of Voucher</div>
                    <div className={classes.Item} onClick={()=>setTitle("Add Service")}>Add Services</div>
                    <div className = {classes.Item} onClick={()=>setTitle("Add Voucher")}>Add Voucher</div>
                </div>
                <div className={classes.Dashboard}>
                    <div className = {classes.Title}>{title}</div>
                    {page}
                </div>
            </div>
        </Aux>
    )
}