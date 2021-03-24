import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {serviceConfig} from '../dataConfig';
import {getService} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Search from '../../../components/Search/Search';
import DisplayTable from '../displayTable/displayTable';
import {serviceTable} from '../tableConfig';
const Service = ()=>{
    const [config,setConfig] = useState(serviceConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        getService(setData);
    }, [])

    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable data={data} config={serviceTable}/>
    }
    if(status === "add"){
        page = <AddForm formType = "service" 
        config={config}
        setConfig={setConfig}
        title="Add New Service"
        />
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
export default Service