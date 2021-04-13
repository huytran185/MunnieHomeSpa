import React, {useState, useEffect} from 'react';
import useStyles from './styles.js';
import Input from '../../components/UI/Input/Input'
import Customer from './Customer/Customer'
import Service from './Service/Service'
import Time from './Time/Time'
import Staff from './Staff/Staff'
import firebase from '../../components/Firebase/firebaseConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxulliary';
// import Notifications from '../../components/UI/Notifications/Notifications'
import {Box, Typography} from '@material-ui/core';
import {postBook} from '../../actions/book';
import { useDispatch, useSelector } from 'react-redux';
const Booking = (props) => {
    const classes = useStyles();
    const [bookInfo, setBookInfo] = useState({
        customerId: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceId:'',
        serviceName:'',
        duration:'',
        price:'',
        start: '',
        staffId: '',
        staffName:'',
    })
    const [formIsValid, setFormIsValid] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        let formIsValid = true;
        for(let el in bookInfo){
            formIsValid = bookInfo[el];
            setFormIsValid(formIsValid);
        }
    },[bookInfo])
    const [loading, setLoading]= useState(false);
    const submitHandler=(e)=>{
        e.preventDefault();
        let endTime = null;
        endTime = new Date(bookInfo.start.value);
        endTime.setMinutes(endTime.getMinutes() + parseInt(bookInfo.duration.value));
        endTime = endTime.toString()
        let formData = {};
        let key = ["customerId", "serviceId","price", "start", "staffId"];
        for(let i in key){
            formData[key[i]] = bookInfo[key[i]];
        }
        formData["end"] = {value:endTime};
        dispatch(postBook(formData,'book',props.notification,props.setShowForm))
    }
    const cancelHandler= (e)=>{
        e.preventDefault();
        props.setShowForm(false);
    }
    let display = (
        <Box  className={classes.root}>
            <form className={classes.Form} >
                <Box textAlign="center">
                    <Typography variant="h4">Tạo lịch hẹn</Typography>
                </Box>
                <Customer bookInfo={bookInfo} setInfo = {setBookInfo} />
                <hr/>
                <Service bookInfo={bookInfo} setInfo = {setBookInfo}/>
                <hr/>
                <Time bookInfo={bookInfo} setInfo={setBookInfo}/>
                <hr/>
                <Staff bookInfo={bookInfo} setInfo={setBookInfo}/>
                <Input disabled = {!formIsValid} clicked = {(e)=>submitHandler(e)} elementType="button">Add Booking</Input>
                <Input clicked = {(e)=>cancelHandler(e)} elementType="button">Cancel Booking</Input>
            </form>
        </Box>
    );
    if(loading){
        display = <Spinner/>
    }
    return (
        <Aux>
            {display}
        </Aux>
    )
}

export default Booking
