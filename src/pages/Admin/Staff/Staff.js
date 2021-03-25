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
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    useEffect(()=>{
        getStaff(setData);
    }, [])
    useEffect(()=>{
        setConfig(staffConfig);
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
        type="staff"
        data={data} 
        config={staffTable}
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "staff"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        title="Edit Type"/>
    }
    if(status === "add"){
        page = <AddForm formType = "staff" 
        config={config} 
        setCon={setConfig}
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