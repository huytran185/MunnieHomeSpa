import React, {useState, useEffect} from 'react';
import Aux from '../../../hoc/Auxulliary'
import {deleteHandler} from '../../InputHandler';
import Search from '../../../components/Search/Search';
import Pagination from '../../../components/Pagination/Pagination';
const DisplayTable = (props) => {
    const [search, setSearch]= useState('');
    const [filteredItem, setFilteredItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const last = currentPage *itemsPerPage;
    const first = last - itemsPerPage;
    const currentArray = filteredItem.slice(first, last)
    useEffect(()=>{
        let tableArray = [];
        if(props.data){
            for(let el in props.data){
                let content=[];
                for(let key in props.config){
                    content.push({
                        content: props.data[el][props.config[key]["name"]],
                        type: props.config[key]["type"]
                    })
                }
                tableArray.push({
                    id: el,
                    data: content
                })
            }
        }
        setFilteredItem(tableArray.filter(element=>{
            
            return element["data"][0]["content"].toLowerCase().includes(search.toLowerCase())
        }))
    },[search,props.data,props.config])

    let display = (
        <table>
            <thead>
                <tr>
                    {Object.values(props.config).map((element,index)=>(
                    <Item content = {element.title}
                    key={index}/>  
                    ))}
                    <Item content = "Action"/>
                </tr>
            </thead>
            <tbody>
                    {currentArray.map((element, index)=>{
                        return(
                            <Row id = {element.id} 
                            setId = {props.setId}
                            content = {element} 
                            key={index}
                            type={props.type} />
                    )})}
            </tbody>
        </table>
    )
    //Change Page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    return (
        <Aux>
            <Search onChanged={(e)=>setSearch(e.target.value)}/>
            {display}
            <Pagination 
            itemsPerPage={itemsPerPage} 
            totalItems={filteredItem.length}
            paginate ={paginate}
            currentPage = {currentPage}/>
        </Aux>
    )
}
export default DisplayTable;

const Row = (props)=>{
    let display = (
        <tr>
            {props.content.data.map((item, index)=>{
                return(<Item content={item.content}
                    type={item.type} 
                    key={index}/>)
            })}
            <Item type="action"
                id={props.id}
                setId = {props.setId}
                tableType = {props.type}/>
        </tr>
    )
    return(
        <Aux>
            {display}
        </Aux>
    )
}
const Item = (props)=>{
    let display = null;
    if(props.type === "image"){
        display = <img src={props.content} 
        alt = "Service Voucher" 
        width="160" height="110"/>
    }
    else if(props.type === "boolean"){
        display = <div>No</div>
        if(props.content === true){
            display = <div>Yes</div>
        }
    }else if(props.type === "action"){
        display = (<div className="btn text-primary">
            <i className="fa fa-edit" onClick = {()=>props.setId(props.id)}/>
            <i className="fa fa-trash" onClick = {()=>deleteHandler(props.id,props.tableType)}></i>
        </div>)
    }
    else{
        display = <div>{props.content}</div>
    }
    return(
        <td>{display}</td>
    )
}