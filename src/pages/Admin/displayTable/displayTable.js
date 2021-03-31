import React, {useState, useEffect, useRef} from 'react';
import Aux from '../../../hoc/Auxulliary'
import {deleteHandler} from '../../InputHandler';
import Search from '../../../components/Search/Search';
import Pagination from '../../../components/Pagination/Pagination';
import Notifications from '../../../components/UI/Notifications/Notifications'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DisplayTable = (props) => {
    const [search, setSearch]= useState('');
    const [filteredItem, setFilteredItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const last = currentPage *itemsPerPage;
    const first = last - itemsPerPage;
    const currentArray = filteredItem.slice(first, last)

    const notificationRef = useRef();
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
            <Table>
                <TableHead>
                    <TableRow>
                        {Object.values(props.config).map((element,index)=>(
                        <Item content = {element.title}
                        key={index}/>  
                        ))}
                        <Item content = "Action"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {currentArray.map((element, index)=>{
                            return(
                                <Row id = {element.id} 
                                setId = {props.setId}
                                content = {element} 
                                key={index}
                                type={props.type} 
                                notificationRef = {notificationRef}/>
                        )})}
                </TableBody>
            </Table>
    )
    //Change Page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    return (
        <Aux>
            <TableContainer component={Paper}>
                <Search onChanged={(e)=>setSearch(e.target.value)}/>
                {display}
            </TableContainer>
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalItems={filteredItem.length}
                paginate ={paginate}
                currentPage = {currentPage}/>
            <Notifications ref={notificationRef}/>
        </Aux>
    )
}
export default DisplayTable;

const Row = (props)=>{
    let display = (
        <StyledTableRow>
            {props.content.data.map((item, index)=>{
                return(<Item content={item.content}
                    type={item.type} 
                    key={index}/>)
            })}
            <Item type="action"
                id={props.id}
                setId = {props.setId}
                tableType = {props.type}
                notificationRef={props.notificationRef}/>
        </StyledTableRow>
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
            <i className="fa fa-trash" onClick = {()=>deleteHandler(props.id,props.tableType,props.notificationRef)}></i>
        </div>)
    }
    else{
        display = <div>{props.content}</div>
    }
    return(
        <StyledTableCell>
            {display}
        </StyledTableCell>
    )
}