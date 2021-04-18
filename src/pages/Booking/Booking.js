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
import {postBook, editBook} from '../../actions/book';
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
    useEffect(()=>{
        if(props.currentId){
            setBookInfo(props.chosenBook);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        let endTime = null;
        endTime = new Date(bookInfo.start);
        endTime.setMinutes(endTime.getMinutes() + parseInt(bookInfo.duration));
        endTime = endTime.toString()
        let formData = {};
        for(let i in bookInfo){
            formData[i] = {value:bookInfo[i]};
        }
        formData["end"] = {value:endTime};
        formData['status']={value:'Coming'};
        if(props.currentId){
            dispatch(editBook(props.currentId,formData,'book',props.notification,props.setShowForm))
        }else{
            // console.log(formData);
            dispatch(postBook(formData,'book',props.notification,props.setShowForm))
        }
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
                <Input disabled = {!formIsValid} clicked = {(e)=>submitHandler(e)} elementType="button">
                    {props.currentId ? 'Edit Booking': 'Add Booking'}
                </Input>
                <Input clicked = {(e)=>cancelHandler(e)} elementType="button">Cancel Booking</Input>
            </form>
        </Box>
    );
    // if(loading){
    //     display = <Spinner/>
    // }
    return (
        <Aux>
            {display}
        </Aux>
    )
}

export default Booking
