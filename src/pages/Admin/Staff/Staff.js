import React, {useState,useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {staffConfig} from '../dataConfig';
import {getStaff} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Search from '../../../components/Search/Search';
import DisplayTable from '../displayTable/displayTable';
import {staffTable} from '../tableConfig';
const Staff = ()=>{
    const [config,setConfig] = useState(staffConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    useEffect(()=>{
        getStaff(setData);
    }, [])

    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable data={data} config={staffTable}/>
    }
    if(status === "add"){
        page = <AddForm formType = "staff" 
        config={config} 
        setConfig={setConfig}
        title="Add New Staff"/>
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
export default Staff