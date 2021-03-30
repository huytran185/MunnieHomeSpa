import React, {useState, useEffect, useRef} from 'react'
import AddForm from '../addForm/addForm';
import {customerConfig} from '../dataConfig';
import {getCustomer} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DisplayTable from '../displayTable/displayTable';
import {customerTable} from '../tableConfig';
import Notifications from '../../../components/UI/Notifications/Notifications'
const Voucher = ()=>{
    const [config,setConfig] = useState(customerConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    useEffect(()=>{
        getCustomer(setData);
    }, [])
    useEffect(()=>{
        setConfig(customerConfig);
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
        data={data} 
        config ={customerTable} 
        type="customer"
        setId = {editHandler}/>
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
        <div>
            <aside>
                <div onClick={()=>setStatus("list")}>Thông tin khách hàng</div>
                <div onClick={()=>setStatus("add")}>Thêm khách hàng</div>
            </aside>
            {page}
            <Notifications ref={notificationRef}/>
        </div>
        
    )
}
export default Voucher