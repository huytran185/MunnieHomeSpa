import React, {useState} from 'react';
import classes from './Admin.module.css';
import Aux from '../../hoc/Auxulliary';
import Header from './AHeader/Header';
import Service from './Service/Service';
import Staff from './Staff/Staff';
import Voucher from './Voucher/Voucher';
import Customer from './Customer/Customer';
import Type from './Type/Type';
import Dashboard from './Dashboard/Dashboard';
export const Admin = ()=>{
    const [title, setTitle] = useState("Dashboard");

    const [header] = useState([
        {
            name:'Dashboard',
            method:()=>setTitle("Dashboard")
        },
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
        case "Dashboard":
            page= <Dashboard/>
            break;
        default:
            page = <Dashboard/>;
    }
    return(
        <Aux >
            <Header data={header}/>
            {page}
        </Aux>
    )
}