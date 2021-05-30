import React, {useState, useEffect} from 'react';
import Aux from '../../hoc/Auxulliary'
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';
import ConfirmMessage from '../../components/UI/ConfirmMessage/ConfirmMessage'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {deleteService} from '../../actions/service';
import {deleteType} from '../../actions/type';
import {deleteVoucher} from '../../actions/voucher';
import {deleteCustomer} from '../../actions/customer';
import {deleteStaff} from '../../actions/staff';
import PropTypes from 'prop-types';

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

//Table get information from the server and display it to the user in an organized way

const DisplayTable = (props) => {
    const classes = useStyles();
    const [search, setSearch]= useState('');
    const [filteredItem, setFilteredItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [confirmMessage, setConfirmMessage]= useState(false);
    const last = currentPage *itemsPerPage;
    const first = last - itemsPerPage;
    const currentArray = filteredItem.slice(first, last);
    const [currentId, setCurrentId]= useState(null);
    const closeMessage = ()=>{
        setConfirmMessage(false)
    }
    const deleteItemHandler=(id)=>{
        setConfirmMessage(true)
        setCurrentId(id)
    }
    const yesHandler = ()=>{
        deleteHandler(currentId, props.type, props.notificationRef)
    }
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
                                key={element.id}
                                deleteItemHandler = {deleteItemHandler}/>
                        )})}
                </TableBody>
            </Table>
    )
    //Change Page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    return (
        <Aux className={classes.root}>
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
            <ConfirmMessage open={confirmMessage} 
            close={closeMessage}
            yesHandler ={yesHandler}/>
        </Aux>
    )
}

DisplayTable.propTypes={
    type: PropTypes.string,
    notificationRef: PropTypes.object,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    config: PropTypes.object,
    setId: PropTypes.func,
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
                deleteItemHandler = {props.deleteItemHandler}/>
        </StyledTableRow>
    )
    return(
        <Aux>
            {display}
        </Aux>
    )
}

Row.propTypes={
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    id: PropTypes.string,
    setId: PropTypes.func,
    deleteItemHandler: PropTypes.func
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
            <i className="fa fa-edit" style={{color: "green"}} 
            onClick = {()=>props.setId(props.id)}/>
            <i className="fa fa-trash" style={{color: "green"}} 
            onClick={()=>props.deleteItemHandler(props.id)}
            />
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

Item.propTypes={
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setId: PropTypes.func,
    deleteItemHandler: PropTypes.func
}