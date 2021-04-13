import React, {useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Box} from '@material-ui/core';
import Input from '../../components/UI/Input/Input';
// import {getStaff} from '../getData';
import { useDispatch, useSelector } from 'react-redux';
import {getStaff} from '../../actions/staff';
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
const useStyles = makeStyles((theme)=>({
    Table:{
        margin: '50px 10px 0 10px',
    }
}))
const ShowBook = () => {
    const classes= useStyles();
    const [numberOfColumns, setNumberOfColumns] = useState(3);
    const [staff, setStaff] = useState('All');
    const staffList = useSelector(state=>state.staff.list);
    const staffLoading = useSelector(state=>state.staff.loading);
    const staffError = useSelector(state=>state.staff.error);
    const dispatch = useDispatch();
    const [config, setConfig] = useState(
        {
        elementType: 'select',
        elementConfig:{
            options:[]
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false
    })
    
    // const [staffData, setStaffData]= useState([]);
    useEffect(()=>{
        if(Object.keys(staffList).length === 0){
            dispatch(getStaff())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
        if(Object.keys(staffList).length > 0){
            const staffArray =[];
            for(let key in staffList){
                staffArray.push({
                    value:staffList[key]['name'],
                    display:staffList[key]['name']
                })
            }
            staffArray.push({
                value: 'All',
                display: 'All',
            })
            console.log(staffArray)
            const newData = {...config};
            newData['value'] = staff;
            for(let i in staffArray){
                newData['elementConfig']['options'][i] = staffArray[i];
            }
            setConfig(newData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[staff])


    let rows = [];
    useEffect(()=>{
        (staff === 'All')? setNumberOfColumns(3): setNumberOfColumns(1)
    },[staff])

    const formatNumberHandler = (number)=>{
        return number.toLocaleString('en-US',{
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }
    const getDay = (number)=>{
        const dayArray = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
        return( number <7? dayArray[number]: dayArray[number - 7])
    }
    let header = [];
    for(let a = 0; a< numberOfColumns; a++){
        const date = new Date();
        date.setDate(date.getDate() + a);
        header.push(
                <StyledTableCell key={date}>{getDay(date.getDay())}</StyledTableCell>
        )
    }
    for(let i = 0;i < 53; i ++){
        const date = new Date();
        date.setHours(7,0,0);
        date.setMinutes(date.getMinutes() + i*15);
        let column = [];
        for(let a = 0; a < numberOfColumns; a++){
            date.setDate(date.getDate() + a);
            column.push(
                <StyledTableCell key={date}>{date.toString()}</StyledTableCell>
            )
        }
        rows.push(<StyledTableRow key={i}>
                    <StyledTableCell>{formatNumberHandler(date.getHours())}:{formatNumberHandler(date.getMinutes())}</StyledTableCell>
                    {column}
                </StyledTableRow>);
    }
    
    let display = (
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>{staff}</StyledTableCell>
                    {header}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
    return (
        <Box>
            <SelectStaff setStaff={setStaff} staff={staff} config={config}/>
            <TableContainer component={Paper} className={classes.Table}>
                {display}
            </TableContainer>
        </Box>
    )
}

export default ShowBook;

const SelectStaff = (props)=>{
    
    
    const handleChange = (event) => {
        const name = event.target.value;
        props.setStaff(name);
    };
    return(
        <Input
            elementType={props.config.elementType}
            elementConfig={props.config.elementConfig}
            value={props.config.value}
            invalid={!props.config.valid}
            shouldValidate={props.config.validation}
            touched={props.config.touched}
            errorMess = {props.config.errorMess}
            changed={(event)=>handleChange(event)}
        />
    )
}