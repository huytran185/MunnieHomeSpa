import React, {useState} from 'react';
import classes from './Admin.module.css';
import Aux from '../../hoc/Auxulliary';
import AddForm from './addForm/addForm';
import ListInfo from './listInfo/listInfo';
import {voucherConfig,serviceConfig,customerConfig, staffConfig} from './dataConfig.js';
export const Admin = ()=>{
    const [title, setTitle] = useState("Dashboard");
    const [vouchers,setVoucher] = useState(voucherConfig);
    const [services,setService] = useState(serviceConfig);
    const[customers, setCustomer] = useState(customerConfig)
    const [staff, setStaff] = useState(staffConfig)
    let page = null;
    switch(title){
        case "Add Service":
            page= <AddForm formType = "service" data={services} setData={setService}/>;
            break;
        case "Add Voucher":
            page=<AddForm formType = "voucher" data={vouchers} setData = {setVoucher}/>;
            break;
        case "Add Staff":
            page= <AddForm formType="staff" data={staff} setData={setStaff}/>;
            break;
        case "Add Customer":
            page=<AddForm formType="customer" data = {customers} setData={setCustomer}/>;
            break;
        case "List of Voucher":
            page = <ListInfo listType = "voucher"/>;
            break;
        case "List of Services":
            page = <ListInfo listType = "service"/>;
            break;
        case "List of Staff":
            page = <ListInfo listType = "staff"/>;
            break;
        case "List of Customer":
            page = <ListInfo listType = "customer"/>;
            break;
        default:
            page = <div>Dashboard</div>;
    }
    return(
        <Aux >
            <div className = {classes.Page}>
                <div className = {classes.Navigation}>
                    <div className={classes.Welcome}>Welcome, Admin</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Services")}>List of Services</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Voucher")}>List of Voucher</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Staff")}>List of Staff</div>
                    <div className={classes.Item} onClick={()=>setTitle("List of Customer")}>List of Customer</div>

                    <div className={classes.Item} onClick={()=>setTitle("Add Service")}>Add Services</div>
                    <div className={classes.Item} onClick={()=>setTitle("Add Voucher")}>Add Voucher</div>
                    <div className={classes.Item} onClick={()=>setTitle("Add Staff")}>Add Staff</div>
                    <div className={classes.Item} onClick={()=>setTitle("Add Customer")}>Add Customer</div>
                </div>
                <div className={classes.Dashboard}>
                    <div className = {classes.Title}>{title}</div>
                    {page}
                </div>
            </div>
        </Aux>
    )
}