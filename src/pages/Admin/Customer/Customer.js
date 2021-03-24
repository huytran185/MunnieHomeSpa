import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {customerConfig} from '../dataConfig';
import {getCustomer} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Search from '../../../components/Search/Search';
import DisplayTable from '../displayTable/displayTable';
import {customerTable} from '../tableConfig';
const Voucher = ()=>{
    const [config,setConfig] = useState(customerConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        getCustomer(setData);
    }, [])

    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable data={data} config ={customerTable} type="customer"/>
    }

    if(status === "add"){
        page = <AddForm formType = "customer"
        config={config} 
        setConfig={setConfig}
        title="Add New Customer"/>
    }
    return(
        <div>
            <aside>
                <div onClick={()=>setStatus("list")}>List of Service</div>
                <div onClick={()=>setStatus("add")}>Add New Service</div>
                <Search/>
            </aside>
            {page}
        </div>
        
    )
}
export default Voucher