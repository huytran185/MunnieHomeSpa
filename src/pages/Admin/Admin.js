import React, {useState} from 'react';
import classes from './Admin.module.css';
import Aux from '../../hoc/Auxulliary';
import Header from './AHeader/Header';
import Service from './Service/Service';
import Staff from './Staff/Staff';
import Voucher from './Voucher/Voucher';
import Customer from './Customer/Customer';
import Type from './Type/Type';

export const Admin = ()=>{
    const [title, setTitle] = useState("Dashboard");

    const [header] = useState([
        {
            name:'Service',
            method: ()=>setTitle("Service"),
        },
        {
            name:'Voucher',
            method: ()=>setTitle("Voucher"),
        },
        {
            name:'Type',
            method: ()=>setTitle("Type"),
        },
        {
            name:'Staff',
            method: ()=>setTitle("Staff"),
        },
        {
            name:'Customer',
            method: ()=>setTitle("Customer"),
        }
    ])
    let page = null;
    switch(title){
        case "Service":
            page = <Service/>
            break;
        case "Voucher":
            page = <Voucher/>
            break;
        case "Type":
            page = <Type/>
            break;
        case "Staff":
            page = <Staff/>
            break;
        case "Customer":
            page = <Customer/>
            break;
        default:
            page = <div>Booking Page</div>;
        // case "Service":
        //     page = <Service/>
        //     break;
        // case "Add Voucher":
        //     page=<AddForm formType = "voucher" data={vouchers} setData = {setVoucher}/>;
        //     break;
        // case "Add Staff":
        //     page= <AddForm formType="staff" data={staff} setData={setStaff}/>;
        //     break;
        // case "Add Customer":
        //     page=<AddForm formType="customer" data = {customers} setData={setCustomer}/>;
        //     break;
        // case "List of Voucher":
        //     page = <ListInfo listType = "voucher"/>;
        //     break;
        // case "List of Services":
        //     page = <ListInfo listType = "service"/>;
        //     break;
        // case "List of Staff":
        //     page = <ListInfo listType = "staff"/>;
        //     break;
        // case "List of Customer":
        //     page = <ListInfo listType = "customer"/>;
        //     break;
        // default:
        //     page = <div>Dashboard</div>;
    }
    return(
        <Aux >
            <Header data={header}/>
            {page}
        </Aux>
    )
}