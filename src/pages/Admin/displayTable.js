import React, {useState, useEffect, useRef} from 'react';
import Aux from '../../hoc/Auxulliary'
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';
import Notifications from '../../components/UI/Notifications/Notifications'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {deleteService} from '../../actions/service';
import {deleteType} from '../../actions/type';
import {deleteVoucher} from '../../actions/voucher';
import {deleteCustomer} from '../../actions/customer';
import {deleteStaff} from '../../actions/staff';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#dbb89a',
    color: 'black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#fff6f3',
    },
  },
}))(TableRow);
const useStyles = makeStyles({
    Search:{
        margin: '20px 0',
    },
    Table:{
        margin: '0 0 10px 0',
    }
})
const DisplayTable = (props) => {
    const classes = useStyles();
    const [search, setSearch]= useState('');
    const [filteredItem, setFilteredItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const last = currentPage *itemsPerPage;
    const first = last - itemsPerPage;
    const currentArray = filteredItem.slice(first, last);

    useEffect(()=>{
        let tableArray = [];
        if(props.data){
            // console.log(props.data);
            for(let el in props.data){
                let content=[];
                for(let key in props.config){
                    content.push({
                        content: props.data[el][props.config[key]["name"]],
                        type: props.config[key]["type"]
                    })
                }
                // console.log(content)
                tableArray.push({
                    id: el,
                    data: content
                })
            }
        }
        // console.log(tableArray)
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
                                key={element.id}
                                type={props.type} 
                                notificationRef = {props.notificationRef}/>
                        )})}
                </TableBody>
            </Table>
    )
    //Change Page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    return (
        <Aux>
            <Box className={classes.Search}>
                    <Search onChanged={(e)=>setSearch(e.target.value)}/>
                </Box>
            <TableContainer component={Paper} className={classes.Table}>
                {display}
            </TableContainer>
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
    const dispatch = useDispatch();
    const deleteHandler =(id,tableType,notificationRef)=>{
        switch(tableType){
            case 'service': 
                dispatch(deleteService(id,tableType,notificationRef));
                break;
            case 'type':
                dispatch(deleteType(id,tableType,notificationRef));
                break;
            case 'voucher':
                dispatch(deleteVoucher(id,tableType,notificationRef));
                break;
            case 'customer':
                dispatch(deleteCustomer(id,tableType,notificationRef));
                break;
            case 'staff':
                dispatch(deleteStaff(id,tableType,notificationRef));
                break;
            default: break;
        }
        
    }
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
            <i className="fa fa-edit" style={{color: "green"}} onClick = {()=>props.setId(props.id)}/>
            <i className="fa fa-trash" style={{color: "green"}} onClick = {()=>deleteHandler(props.id,props.tableType,props.notificationRef)}></i>
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