import React, {useState, useEffect, useRef} from 'react'
import AddForm from '../addForm/addForm';
import {typeConfig} from '../dataConfig';
import {getType} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DisplayTable from '../displayTable/displayTable';
import {typeTable} from '../tableConfig';
import Notifications from '../../../components/UI/Notifications/Notifications'

const Type = ()=>{
    const [config,setConfig] = useState(typeConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    useEffect(()=>{
        getType(setData);
    }, [])
    useEffect(()=>{
        setConfig(typeConfig);
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
        type="type"
        data={data} 
        config={typeTable}
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "type"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Type"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "type"
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Type"
        notificationRef={notificationRef}/>
    }
    return(
        <div>
            <aside>
                <div onClick={()=>setStatus("list")}>Thông tin loại dịch vụ</div>
                <div onClick={()=>setStatus("add")}>Thêm loại dịch vụ</div>
            </aside>
            {page}
            <Notifications ref={notificationRef}/>
        </div>
        
    )
}
export default Type