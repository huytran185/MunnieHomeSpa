import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {voucherConfig} from '../dataConfig';
import {getVoucher} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Search from '../../../components/Search/Search';
import DisplayTable from '../displayTable/displayTable';
import {voucherTable} from '../tableConfig';
const Voucher = ()=>{
    const [config,setConfig] = useState(voucherConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        getVoucher(setData);
    }, [])
    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable data={data} config={voucherTable} type="voucher"/>
    }
    if(status === "add"){
        page = <AddForm formType = "voucher" 
        config={config} 
        setConfig={setConfig}
        title="Add New Voucher"/>
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