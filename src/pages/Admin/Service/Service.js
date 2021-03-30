import React, {useState, useEffect, useRef} from 'react'
import AddForm from '../addForm/addForm';
import {serviceConfig} from '../dataConfig';
import {getService} from '../../getData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Notifications from '../../../components/UI/Notifications/Notifications'
import DisplayTable from '../displayTable/displayTable';
import {serviceTable} from '../tableConfig';
const Service = ()=>{
    const [config,setConfig] = useState(serviceConfig);
    const [status, setStatus] = useState("list");
    const [data, setData] = useState(null);
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null);
    const notificationRef = useRef();
    useEffect(()=>{
        getService(setData);
    }, [])
    useEffect(()=>{
        setConfig(serviceConfig);
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
        type="service"
        data={data} 
        config={serviceTable}
        setId = {editHandler}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "service"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Edit Service"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "service" 
        config={config}
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Service"
        notificationRef={notificationRef}
        />
    }
    return(
        <div>
            <aside>
                <div onClick={()=>setStatus("list")}>Thông tin dịch vụ</div>
                <div onClick={()=>setStatus("add")}>Thêm dịch vụ</div>
            </aside>
            {page}
            <Notifications ref={notificationRef}/>
        </div>
        
    )
}
export default Service