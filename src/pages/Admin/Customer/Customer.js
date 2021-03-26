import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {customerConfig} from '../dataConfig';
import {getCustomer} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DisplayTable from '../displayTable/displayTable';
import {customerTable} from '../tableConfig';
const Voucher = ()=>{
    const [config,setConfig] = useState(customerConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)

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
        title="Edit Customer"/>
    }
    if(status === "add"){
        page = <AddForm formType = "customer"
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Customer"/>
    }
    return(
        <div>
            <aside>
                <div onClick={()=>setStatus("list")}>List of Service</div>
                <div onClick={()=>setStatus("add")}>Add New Service</div>
            </aside>
            {page}
        </div>
        
    )
}
export default Voucher