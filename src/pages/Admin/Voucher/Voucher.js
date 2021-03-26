import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {voucherConfig} from '../dataConfig';
import {getVoucher} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DisplayTable from '../displayTable/displayTable';
import {voucherTable} from '../tableConfig';
const Voucher = ()=>{
    const [config,setConfig] = useState(voucherConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)

    useEffect(()=>{
        getVoucher(setData);
    }, [])
    useEffect(()=>{
        setConfig(voucherConfig);
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
        config={voucherTable} 
        type="voucher"
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "voucher"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Add New Voucher"/>
    }
    if(status === "add"){
        page = <AddForm formType = "voucher" 
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Voucher"/>
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