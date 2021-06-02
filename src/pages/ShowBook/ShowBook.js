import React, {useState, useEffect, useRef} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Box, Button} from '@material-ui/core';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShowInfo from './ShowInfo';
import Spinner from '../../components/UI/Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import {getStaff} from '../../actions/staff';
import {getBook} from '../../actions/book';
import SelectStaff from './SelectStaff';
import Booking from '../Booking/Booking';
import Header from '../../components/AdminUI/Header'
import Aux from '../../hoc/Auxulliary';
import useStyles from './styles.js';
import Notifications from '../../components/UI/Notifications/Notifications'

//Dashboard display list of booking to admin

const StyledTableCell = withStyles((theme) => ({
    root:{
        '&:first-of-type':{
            width:'15%',
        },
        borderLeft: '1px solid #ebcdb7',
        borderRight: '1px solid #ebcdb7',
        verticalAlign: 'top',
    },
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

const ArrowButton = withStyles((theme)=>({
    root:{
        padding: '6px 0',
        minWidth: 0,
    }
}))(Button)
const ShowBook = () => {
    const classes= useStyles();
    const [showForm, setShowForm] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const notificationRef = useRef();
    const [numberOfColumns, setNumberOfColumns] = useState(3);
    const [staff, setStaff] = useState('All');
    const staffList = useSelector(state=>state.staff.list);
    const staffLoading = useSelector(state=>state.staff.loading);
    const bookList = useSelector(state=>state.book.list);
    const bookLoading = useSelector(state=>state.book.loading);

    const [chosenBook, setChosenBook] = useState({
        customerId: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceId:'',
        serviceName:'',
        duration:'',
        end:'',
        price:'',
        start: '',
        staffId: '',
        staffName:'',
    });
    const [chosenId, setChosenId] = useState('');
    const [edit, setEdit] = useState(false);
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
    
    useEffect(()=>{
        if(Object.keys(staffList).length === 0){
            dispatch(getStaff())
        }
        if(Object.keys(bookList).length === 0){
            dispatch(getBook())
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
            const newData = {...config};
            newData['value'] = staff;
            for(let i in staffArray){
                newData['elementConfig']['options'][i] = staffArray[i];
            }
            setConfig(newData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[staff,staffList])


    useEffect(()=>{
        (staff === 'All')? setNumberOfColumns(Object.keys(staffList).length): setNumberOfColumns(5)
    },[staff,staffList])

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
    if(staff === 'All'){
        for(let key in staffList){
            header.push(
                <StyledTableCell key={key}>{staffList[key]['name']}</StyledTableCell>
            )
        }
    }else{
        for(let a = 0; a< numberOfColumns; a++){
            const date = new Date(selectedDate);
            date.setDate(date.getDate() + a);
            header.push(
                    <StyledTableCell key={date}>{getDay(date.getDay())}</StyledTableCell>
            )
        }
    }
    const checkBook =(date,staffName)=>{
        let checkedStaff = staff
        if(staffName){
            checkedStaff = staffName
        }
        for(let key in bookList){
            if(bookList[key]['staffName'] === checkedStaff){
                let start = new Date(bookList[key]['start']);
                let end = new Date(bookList[key]['end'])
                if(start <= date && date<= end){
                    let dif = (date.getTime() - start.getTime())/60000
                    let merge = Math.ceil(parseInt(bookList[key]['duration'])/15)
                    if(dif < 15){
                        return [bookList[key], true,merge, key]
                    }
                    else{
                        return [true, false]
                    }
                }
            }
        }
        return false;
    }
    let rows = [];
    for(let i = 0;i < 53; i ++){
        const date = new Date(selectedDate);
        date.setHours(7,0,0);
        date.setMinutes(date.getMinutes() + i*15);
        let column = [];
        if(staff === 'All'){
            for(let b in staffList){
                let InfoList = checkBook(date,staffList[b]['name']);
                if(InfoList){
                    if(InfoList[1]){
                        column.push(
                            <StyledTableCell 
                            className={classes.Booked} 
                            key={date+b}
                            rowSpan={InfoList[2]}
                            onClick={()=>{setChosenBook(InfoList[0]); setChosenId(InfoList[3]); setShowInfo(true)}}>
                                {InfoList[0]['customerName']}
                                <br/>
                                {InfoList[0]['serviceName']}
                            </StyledTableCell>
                        )
                    }
                }
                else{
                    column.push(
                        <StyledTableCell key={date +b}></StyledTableCell>
                    )
                }
            }
        }else{
            for(let a = 0; a < numberOfColumns; a++){
                let date2 = new Date(date);
                date2.setDate(date2.getDate() + a)
                let InfoList = checkBook(date2);
                if(InfoList){
                    if(InfoList[1]){
                        column.push(
                            <StyledTableCell 
                            className={classes.Booked} 
                            key={date2}
                            rowSpan={InfoList[2]}
                            onClick={()=>{setChosenBook(InfoList[0]); setChosenId(InfoList[3]); setShowInfo(true)}}>
                                {InfoList[0]['customerName']}
                                <br/>
                                {InfoList[0]['serviceName']}
                            </StyledTableCell>
                        )
                    }
                }
                else{
                    column.push(
                        <StyledTableCell key={date2}></StyledTableCell>
                    )
                }
            }
        }
        rows.push(<StyledTableRow key={i}>
                    <StyledTableCell>{formatNumberHandler(date.getHours())}:{formatNumberHandler(date.getMinutes())}</StyledTableCell>
                    {column}
                </StyledTableRow>);
    }
    const previousDateHandler =()=>{
        staff === 'All'?
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() -1))):
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() -5)));
    }
    const nextDateHandler=()=>{
        staff === 'All'?
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() +1))):
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() +5)));
    }
    const selectCurrentHandler=()=>{
        setSelectedDate(new Date())
    }
    let showBook= null;
        showBook = (
            <Box className={classes.ShowBook}>
                <Button variant="outlined" 
                    startIcon={<AddCircleIcon/>}
                    className={classes.Button}
                    onClick={()=>{setShowForm(true);setEdit(false)}}>Tạo lịch hẹn</Button>
                <SelectStaff setStaff={setStaff} staff={staff} config={config}/>
                <TableContainer component={Paper} className={classes.Table}>
                    <Box className={classes.selectDate}>
                        <ArrowButton
                            startIcon={<ArrowBackIcon/>}
                            onClick={previousDateHandler}
                        />
                        <Button
                            onClick={selectCurrentHandler}>
                                {getDay(selectedDate.getDay())}, {selectedDate.getDate()} Tháng {selectedDate.getMonth()}, {selectedDate.getFullYear()}
                        </Button>
                        <ArrowButton
                            startIcon={<ArrowForwardIcon/>}
                            onClick={nextDateHandler}
                        />
                    </Box>
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
                </TableContainer>
                {showInfo && <ShowInfo 
                info={chosenBook} 
                id={chosenId}
                notification={notificationRef}
                setChosenBook = {setChosenBook}
                setShowForm = {setShowForm}
                setEdit={setEdit}
                setShowInfo={setShowInfo}/>}
            </Box>
        )
    if(staffLoading || bookLoading){
        showBook=<Spinner/>
    }
    return (
        <Aux>
            <Backdrop show={showInfo} clicked={()=>setShowInfo(false)}/>
            <Header/>
            <Box className={classes.Display}>
                {!showForm && showBook}
                {showForm && !edit &&
                <Booking 
                setShowForm={setShowForm} 
                notification={notificationRef}
                />}
                {showForm && edit &&
                <Booking 
                setShowForm={setShowForm} 
                notification={notificationRef}
                currentId = {chosenId}
                chosenBook = {chosenBook}
                
                />}
            </Box>
            <Notifications ref={notificationRef}/>
        </Aux>
    )
}

export default ShowBook;
