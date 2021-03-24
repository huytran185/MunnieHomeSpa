import React, {useState, useEffect} from 'react'
import AddForm from '../addForm/addForm';
import {typeConfig} from '../dataConfig';
import {getType} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Search from '../../../components/Search/Search';
import DisplayTable from '../displayTable/displayTable';
import {typeTable} from '../tableConfig';
const Type = ()=>{
    const [config,setConfig] = useState(typeConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        getType(setData);
    }, [])

    let page = <Spinner/>;
    if(status === "list" && data){
        page = <DisplayTable data={data} config={typeTable}/>
    }

    if(status === "add"){
        page = <AddForm formType = "type"
        config={config} 
        setConfig={setConfig}
        title="Add New Type"/>
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
export default Type